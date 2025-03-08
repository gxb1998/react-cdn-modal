import { ModalController } from './Modal';

const instance = new ModalController();

// 挂载到全局对象
if (typeof window !== 'undefined') {
  window.MyCDNModal = instance;
}

export default instance;