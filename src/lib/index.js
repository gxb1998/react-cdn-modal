import { ModalController } from './Modal';

// 创建单例实例
const controller = new ModalController();

// 明确挂载方法到 window
if (typeof window !== 'undefined') {
  window.MyCDNModal = {
    show: () => controller.show(),
    hide: () => controller.hide()
  };
}

// 重要：保留默认导出
export default controller;