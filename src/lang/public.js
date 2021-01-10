export function generateTitle(title) {
    const hasKey = this.$te(title);
    if (hasKey) {
      // $t :this method from vue-i18n, inject in @/lang/index.js
      const translatedTitle = this.$t(title);
  
      return translatedTitle;
    }
    return title;
  }