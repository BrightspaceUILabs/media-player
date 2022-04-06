import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin.js';
import { LocalizeDynamicMixin } from '@brightspace-ui/core/mixins/localize-dynamic-mixin';

const InternalDynamicLocalizeMixinClass = superClass => class extends LocalizeDynamicMixin(superClass) {
	static get localizeConfig() {
		return {
			importFunc: async lang => {
				const path = `../../lang/${lang}.js`;
				return (await import(path)).default;
			}
		};
	}
};

export const InternalDynamicLocalizeMixin = dedupingMixin(InternalDynamicLocalizeMixinClass);
