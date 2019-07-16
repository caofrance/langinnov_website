import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class I18nMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams): string {
        console.error('Missing translation for ' + params.key);
        return 'Error: Cannot get translation';
    }
}
