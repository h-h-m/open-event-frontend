import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {
  @action
  updateSettings() {
    this.set('isLoading', true);
    let settings = this.model;
    settings.save()
      .then(() => {
        this.notify.success(this.l10n.t('Settings have been saved successfully.'),
          {
            id: 'setting_analytic_save'
          });
      })
      .catch(() => {
        this.notify.error(this.l10n.t('An unexpected error has occurred. Settings not saved.'),
          {
            id: 'setting_analytic_error'
          });
      })
      .finally(() => {
        this.set('isLoading', false);
      });
  }
}
