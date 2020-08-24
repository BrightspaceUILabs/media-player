import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';

const internalLocalizeMixin = superClass => class extends LocalizeMixin(superClass) {
	static async getLocalizeResources(langs) {
		for (const lang of langs) {
			let translations;

			switch (lang) {
				case 'ar':
					translations = await import('../../locales/ar.js');
					break;
				case 'da-dk':
					translations = await import('../../locales/da-dk.js');
					break;
				case 'de':
					translations = await import('../../locales/de.js');
					break;
				case 'en':
					translations = await import('../../locales/en.js');
					break;
				case 'es':
					translations = await import('../../locales/es.js');
					break;
				case 'fi':
					translations = await import('../../locales/fi.js');
					break;
				case 'fr':
					translations = await import('../../locales/fr.js');
					break;
				case 'fr-fr':
					translations = await import('../../locales/fr-fr.js');
					break;
				case 'ja':
					translations = await import('../../locales/ja.js');
					break;
				case 'ko':
					translations = await import('../../locales/ko.js');
					break;
				case 'nl':
					translations = await import('../../locales/nl.js');
					break;
				case 'pt':
					translations = await import('../../locales/pt.js');
					break;
				case 'sv':
					translations = await import('../../locales/sv.js');
					break;
				case 'tr':
					translations = await import('../../locales/tr.js');
					break;
				case 'zh-tw':
					translations = await import('../../locales/zh-tw.js');
					break;
				case 'zh':
					translations = await import('../../locales/zh.js');
					break;
				default:
					continue;
			}

			if (translations && translations.val) {
				return {
					language: lang,
					resources: translations.val
				};
			}
		}

		return null;
	}
};

export const InternalLocalizeMixin = dedupingMixin(internalLocalizeMixin);
