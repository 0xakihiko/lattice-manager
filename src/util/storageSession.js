import { constants } from './helpers';
class StorageSession {
  constructor(device_id, pass) {
    this.data = null;
    this.store = JSON.parse(window.localStorage.getItem(constants.ROOT_STORE) || '{}');
  }

  save(deviceID, wallet_uid, data) {
    // Get the data for this deviceID
    if (!this.store[deviceID]) this.store[deviceID] = {};
    if (!this.store[deviceID][wallet_uid]) this.store[deviceID][wallet_uid] = {};
    // Update relevant keys without overwriting anything else
    Object.keys(data).forEach((k) => {
      this.store[deviceID][wallet_uid][k] = data[k];
    })
    // Update the store itself
    window.localStorage.setItem(constants.ROOT_STORE, JSON.stringify(this.store));
  }

  getWalletData(deviceID, wallet_uid) {
    if (!this.store[deviceID]) this.store[deviceID] = {};
    if (!this.store[deviceID][wallet_uid]) this.store[deviceID][wallet_uid] = {};
    return this.store[deviceID][wallet_uid];
  }
}


export default StorageSession;