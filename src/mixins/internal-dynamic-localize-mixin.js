import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin.js';
import { LocalizeDynamicMixin } from '@brightspace-ui/core/mixins/localize-dynamic-mixin';

const InternalDynamicLocalizeMixinClass = superClass => class extends LocalizeDynamicMixin(superClass) {
	static get localizeConfig() {
		return {
			importFunc: async lang => {
				return (await import(`../../lang/${lang}.js`)).default;
			}
		};
	}
};

export const InternalDynamicLocalizeMixin = dedupingMixin(InternalDynamicLocalizeMixinClass);
