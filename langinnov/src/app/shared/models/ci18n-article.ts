import { Ci18nImage } from './ci18n-image';

/**
 * A Team member in i18n custom files
 * @interface C18nArticle
 */
export interface Ci18nArticle {
    IMG: Ci18nImage;
    HEADLINE: string;
    PUBLISHER: string;
    HREF: string;
    FILTER: string;
    LANGUAGE: string;
}
