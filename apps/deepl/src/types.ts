type UsageBreakdown = {
  total_characters?: number | undefined
  text_translation_characters?: number | undefined
  document_translation_characters?: number | undefined
  text_improvement_characters?: number | undefined
  speech_to_text_minutes?: number | undefined
}
type KeyUsageItem = {
  api_key?: string | undefined
  api_key_label?: string | undefined
  usage?: UsageBreakdown | undefined
}
type KeyAndDayUsageItem = {
  api_key?: string | undefined
  api_key_label?: string | undefined
  usage_date?: string | undefined
  usage?: UsageBreakdown | undefined
}
type AdminUsageReportData = {
  total_usage?: UsageBreakdown | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  group_by?: 'key' | 'key_and_day' | undefined
  key_usages?: KeyUsageItem[] | undefined
  key_and_day_usages?: KeyAndDayUsageItem[] | undefined
}
type AdminUsageReport = { usage_report?: AdminUsageReportData | undefined }
type ErrorResponse = { message: string; code?: string | undefined }
type InfrastructureErrorResponse = { error: { message: string } }
type CustomTagBreakdown = {
  total_characters?: number | undefined
  text_translation_characters?: number | undefined
  text_improvement_characters?: number | undefined
  speech_to_text_minutes?: number | undefined
  speech_to_speech_minutes?: number | undefined
}
type CustomTagUsageItem = {
  custom_tag?: string | undefined
  usage_date?: string | undefined
  breakdown?: CustomTagBreakdown | undefined
}
type CustomTagUsageReportData = {
  aggregate_by?: 'period' | 'day' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  next_page?: (number | null) | undefined
  usage?: CustomTagUsageItem[] | undefined
}
type CustomTagUsageReport = { custom_tag_usage_report?: CustomTagUsageReportData | undefined }
type ApiKeyLabel = string
type ApiKeyId = string
type ApiKeyUsageCharacters = number
type ApiKeyUsageSpeechToTextMilliseconds = number
type ApiKeyUsageSpeechToSpeechMilliseconds = number
type ApiKey = {
  key_id?: ApiKeyId | undefined
  label?: ApiKeyLabel | undefined
  creation_time?: string | undefined
  deactivated_time?: string | undefined
  is_deactivated?: boolean | undefined
  usage_limits?:
    | {
        characters?: ApiKeyUsageCharacters | undefined
        speech_to_text_milliseconds?: ApiKeyUsageSpeechToTextMilliseconds | undefined
        speech_to_speech_milliseconds?: ApiKeyUsageSpeechToSpeechMilliseconds | undefined
      }
    | undefined
}
type SourceLanguage = string
type TargetLanguage = string
type Context = string
type ShowBilledCharacters = boolean
type SplitSentencesOption = '0' | '1' | 'nonewlines'
type PreserveFormattingOption = boolean
type Formality = 'default' | 'more' | 'less' | 'prefer_more' | 'prefer_less'
type ModelType = 'quality_optimized' | 'prefer_quality_optimized' | 'latency_optimized'
type TranslationMemoryId = string
type TranslationMemoryThreshold = number
type TagHandlingOption = 'xml' | 'html'
type TagHandlingVersionOption = 'v2' | 'v1'
type OutlineDetectionOption = boolean
type PreserveFormattingOptionStr = '0' | '1'
type OutlineDetectionOptionStr = '0' | '1'
type DocumentKey = { document_key: string }
type DocumentTranslationError = { message?: string | undefined }
type GlossarySourceLanguage =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
type MultilingualGlossaryTargetLanguage =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'de-CH'
  | 'de-DE'
  | 'el'
  | 'en'
  | 'en-GB'
  | 'en-US'
  | 'es'
  | 'es-419'
  | 'es-ES'
  | 'et'
  | 'fi'
  | 'fr'
  | 'fr-CA'
  | 'fr-FR'
  | 'he'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
  | 'zh-Hans'
  | 'zh-Hant'
type GlossaryEntries = string
type GlossaryEntriesFormat = 'tsv' | 'csv'
type GlossaryDictionary = {
  source_lang?: GlossarySourceLanguage | undefined
  target_lang?: MultilingualGlossaryTargetLanguage | undefined
  entries?: GlossaryEntries | undefined
  entries_format?: GlossaryEntriesFormat | undefined
  entry_count?: {} | undefined
}
type CreateMultilingualGlossaryParameters = { name: string; dictionaries: GlossaryDictionary[] }
type GlossaryId = string
type GlossaryName = string
type MultilingualGlossary = {
  glossary_id?: GlossaryId | undefined
  name?: GlossaryName | undefined
  dictionaries?: GlossaryDictionary[] | undefined
  creation_time?: string | undefined
}
type PatchMultilingualGlossaryParameters = {
  name?: GlossaryId | undefined
  dictionaries?: GlossaryDictionary[] | undefined
}
type MultilingualGlossaryEntries = {
  source_lang?: GlossarySourceLanguage | undefined
  target_lang?: MultilingualGlossaryTargetLanguage | undefined
  entries?: GlossaryEntries | undefined
  entries_format?: GlossaryEntriesFormat | undefined
}
type GlossaryEntryCount = number
type MultilingualGlossaryEntriesInformation = {
  source_lang?: GlossarySourceLanguage | undefined
  target_lang?: MultilingualGlossaryTargetLanguage | undefined
  entry_count?: GlossaryEntryCount | undefined
}
type GlossaryTargetLanguage =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
type CreateGlossaryParameters = {
  name: string
  source_lang: GlossarySourceLanguage
  target_lang: GlossaryTargetLanguage
  entries: string
  entries_format: 'tsv' | 'csv'
}
type MonolingualGlossary = {
  glossary_id?: GlossaryId | undefined
  name?: string | undefined
  ready?: boolean | undefined
  source_lang?: GlossarySourceLanguage | undefined
  target_lang?: GlossaryTargetLanguage | undefined
  creation_time?: string | undefined
  entry_count?: number | undefined
}
type TargetLanguageWrite =
  | 'de'
  | 'en'
  | 'en-GB'
  | 'en-US'
  | 'es'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pt'
  | 'pt-BR'
  | 'pt-PT'
  | 'zh'
  | 'zh-Hans'
type WritingStyle =
  | 'academic'
  | 'business'
  | 'casual'
  | 'default'
  | 'simple'
  | 'prefer_academic'
  | 'prefer_business'
  | 'prefer_casual'
  | 'prefer_simple'
type WritingTone =
  | 'confident'
  | 'default'
  | 'diplomatic'
  | 'enthusiastic'
  | 'friendly'
  | 'prefer_confident'
  | 'prefer_diplomatic'
  | 'prefer_enthusiastic'
  | 'prefer_friendly'
type UsageResponse = {
  character_count?: bigint | undefined
  character_limit?: bigint | undefined
  document_count?: bigint | undefined
  document_limit?: bigint | undefined
  team_document_count?: bigint | undefined
  team_document_limit?: bigint | undefined
  products?:
    | {
        product_type?: string | undefined
        billing_unit?: 'characters' | 'minutes' | undefined
        api_key_unit_count?: number | undefined
        account_unit_count?: number | undefined
        api_key_character_count?: number | undefined
        character_count?: number | undefined
      }[]
    | undefined
  api_key_character_count?: number | undefined
  api_key_character_limit?: number | undefined
  speech_to_text_milliseconds_count?: number | undefined
  speech_to_text_milliseconds_limit?: number | undefined
  speech_to_text_minutes_count?: number | undefined
  speech_to_text_minutes_limit?: number | undefined
  speech_to_speech_minutes_count?: number | undefined
  speech_to_speech_minutes_limit?: number | undefined
  start_time?: string | undefined
  end_time?: string | undefined
}
type SpokenTermsListInput = { lang: string; entries: string }
type CreateSpokenTermsParameters = { name: string; term_lists: SpokenTermsListInput[] }
type SpokenTermsList = { lang?: string | undefined; entry_count?: number | undefined }
type SpokenTerms = {
  spoken_terms_id?: string | undefined
  name?: string | undefined
  term_lists?: SpokenTermsList[] | undefined
  creation_time?: string | undefined
}
type PatchSpokenTermsParameters = {
  name?: string | undefined
  term_lists?: SpokenTermsListInput[] | undefined
}
type SpokenTermsEntries = { lang?: string | undefined; entries?: string | undefined }
type PutSpokenTermsListParameters = { lang: string; entries: string }
type TranslationMemorySourceLanguage =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
type TranslationMemoryTargetLanguage =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'de-ch'
  | 'de-de'
  | 'el'
  | 'en'
  | 'en-gb'
  | 'en-us'
  | 'es'
  | 'es-419'
  | 'es-es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'fr-ca'
  | 'fr-fr'
  | 'he'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt-br'
  | 'pt-pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
  | 'zh-hans'
  | 'zh-hant'
type TranslationMemory = {
  translation_memory_id: TranslationMemoryId
  name: string
  source_language: TranslationMemorySourceLanguage
  target_languages: TranslationMemoryTargetLanguage[]
  segment_count: number
  creation_time?: string | undefined
  updated_time?: string | undefined
}
type TranslationMemoryJobResult = {
  status: 'awaiting_input' | 'processing' | 'completed' | 'failed' | 'expired'
  status_metadata?: { required_action?: string | undefined } | undefined
  download_url?: string | undefined
  expires_at?: string | undefined
  error?: { message?: string | undefined } | undefined
  translation_memory_id?: TranslationMemoryId | undefined
  skipped_segment_count?: bigint | undefined
}
type TranslationMemoryJob = {
  job_id: string
  product: string
  operation: 'import' | 'export'
  creation_time: string
  updated_time: string
  source_file?:
    | { content_type?: string | undefined; content_length?: bigint | undefined }
    | undefined
  parameters: {
    translation_memory_id?: TranslationMemoryId | undefined
    display_name?: string | undefined
  }
  results: TranslationMemoryJobResult[]
}
type TranslationMemoryTargetSegment = {
  target_segment_id: string
  target_language: TranslationMemoryTargetLanguage
  target_text: string
  creation_time?: string | undefined
  updated_time?: string | undefined
  last_used_time?: string | undefined
}
type TranslationMemorySegment = {
  source_segment_id: string
  source_text: string
  creation_time?: string | undefined
  updated_time?: string | undefined
  last_used_time?: string | undefined
  targets: TranslationMemoryTargetSegment[]
}
type CreateTranslationMemoryExport = {
  job_id: string
  parameters: { translation_memory_id?: TranslationMemoryId | undefined }
}
type StyleProfileId = string
type StyleProfile = {
  style_profile_id: StyleProfileId
  name: string
  description?: string | undefined
  industry?: string | undefined
  glossary_ids: string[]
  style_rule_ids: string[]
  translation_memory_ids: string[]
  glossary_priority_order_enabled: boolean
  creation_time: string
  updated_time: string
}
type StyleId = string
type StyleRuleName = string
type StyleRuleLanguage =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'de-CH'
  | 'de-DE'
  | 'el'
  | 'en'
  | 'en-GB'
  | 'en-US'
  | 'es'
  | 'es-419'
  | 'es-ES'
  | 'et'
  | 'fi'
  | 'fr'
  | 'fr-CA'
  | 'fr-FR'
  | 'he'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
  | 'zh-Hans'
  | 'zh-Hant'
type ConfiguredRules = {
  dates_and_times?:
    | {
        calendar_era?: 'use_bc_and_ad' | 'use_bce_and_ce' | undefined
        centuries?:
          | 'spell_out'
          | 'use_arabic_numerals'
          | 'use_numerals'
          | 'use_roman_numerals'
          | undefined
        date_format?:
          | 'use_dd_period_mm_period_yy_with_leading_zeros_for_single_digit_days_and_months'
          | 'use_dd_period_mm_period_yyyy'
          | 'use_dd_period_mm_period_yyyy_with_leading_zeros_for_single_digit_days_and_months'
          | 'use_dd_period_space_abbreviated_month_yyyy_with_abbreviations_jan_period_feb_period_mrz_period_apr_period_mai_jun_period_jul_period_aug_period_sep_period_okt_period_nov_period_dez_period_without_leading_zeros_for_single_digit_days'
          | 'use_dd_period_space_abbreviated_month_yyyy_with_abbreviations_jan_period_febr_period_maerz_apr_period_mai_juni_juli_aug_period_sept_period_okt_period_nov_period_dez_period_without_leading_zeros_for_single_digit_days'
          | 'use_dd_period_space_month_yyyy_without_leading_zeros_for_single_digit_days'
          | 'use_dd_slash_mm_slash_yyyy'
          | 'use_dd_slash_mm_slash_yyyy_with_leading_zeros_for_single_digit_days_and_months'
          | 'use_dd_space_spelled_out_month_space_yyyy'
          | 'use_dd_space_spelled_out_month_space_yyyy_and_use_spanish_word_septiembre_for_ninth_month'
          | 'use_dd_space_spelled_out_month_space_yyyy_and_use_spanish_word_setiembre_for_ninth_month'
          | 'use_dd_space_spelled_out_month_space_yyyy_without_leading_zeros_for_single_digit_days'
          | 'use_historical_eras_and_write_numbers_in_chinese_followed_by_chinese_word_公元前_or_公元后_with_arabic_numerals_in_parentheses'
          | 'use_mm_slash_dd_slash_yyyy_with_leading_zeros_for_single_digit_days_and_months'
          | 'use_numerals_only_with_leading_zero_for_single_digits'
          | 'use_numerals_only_without_leading_zero_for_single_digits'
          | 'use_spelled_out_month_space_dd_comma_space_yyyy_and_use_spanish_word_septiembre_for_ninth_month'
          | 'use_spelled_out_month_space_dd_comma_space_yyyy_without_leading_zeros_for_single_digit_days'
          | 'use_traditional_calendar_system_with_chinese_numbers'
          | 'use_yyyy_chinese_word_年_mm_chinese_word_月_dd_chinese_word_日_with_chinese_numbers'
          | 'use_yyyy_chinese_word_年_mm_chinese_word_月_dd_chinese_word_日_without_leading_zero_for_single_digit_months_and_days'
          | 'use_yyyy_hyphen_mm_hyphen_dd_with_leading_zero_for_single_digit_days_and_months'
          | 'use_yyyy_hyphen_mm_hyphen_dd_with_leading_zeros_for_single_digit_days_and_months'
          | 'use_yyyy_korean word_년_space_mm_korean word_월_space_dd_korean word_일_without_leading_zero_for_single_digit_days_and_months'
          | 'use_yyyy_period_mm_period_dd'
          | 'use_yyyy_period_space_mm_period_space_dd_period_space_without_leading_zero_for_single_digit_days_and_months'
          | 'use_yyyy_slash_mm_slash_dd'
          | 'use_yyyy_slash_mm_slash_dd_with_leading_zero_for_single_digit_days_and_months'
          | undefined
        dates_in_numerical_form?:
          | 'use_dd_hyphen_mm_hyphen_yyyy'
          | 'use_dd_period_mm_period_yyyy'
          | 'use_dd_slash_mm_slash_yyyy'
          | undefined
        decades?:
          | 'spell_out'
          | 'use_apostrophe_yy'
          | 'use_yy_for_20th_century_but_yyyy_for_other_centuries'
          | 'use_yy_without_apostrophe'
          | 'use_yyyy'
          | undefined
        hours_minutes_seconds_separator?: 'use_colon' | 'use_period' | undefined
        hours_minutes_separator?:
          | 'use_colon_without_spaces'
          | 'use_letter_h_with_regular_space_on_either_side'
          | 'use_letter_h_without_spaces'
          | undefined
        midnight_in_numerals?: 'use_00_00' | 'use_24_00' | undefined
        single_digit_days_and_months?: 'do_not_use_leading_zero' | 'use_leading_zero' | undefined
        single_digit_hours?: 'do_not_use_leading_zero' | 'use_leading_zero' | undefined
        time_format?:
          | 'spell_out_time_in_words'
          | 'use_12_hour_clock_and_do_not_specify_morning_or_evening'
          | 'use_12_hour_clock_and_lowercase_am_or_pm_with_periods'
          | 'use_12_hour_clock_and_lowercase_am_or_pm_with_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm'
          | 'use_12_hour_clock_and_lowercase_am_or_pm_without_periods'
          | 'use_12_hour_clock_and_lowercase_am_or_pm_without_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm'
          | 'use_12_hour_clock_and_specify_morning_or_evening'
          | 'use_12_hour_clock_and_uppercase_am_or_pm_with_periods'
          | 'use_12_hour_clock_and_uppercase_am_or_pm_with_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm'
          | 'use_12_hour_clock_and_uppercase_am_or_pm_without_periods'
          | 'use_12_hour_clock_and_uppercase_am_or_pm_without_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm'
          | 'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals'
          | 'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals_with_chinese_word_点_for_hours'
          | 'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals_with_chinese_words_时_and_分_for_hours_and_minutes'
          | 'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_chinese_numbers_with_chinese_words_时_and_分_for_hours_and_minutes'
          | 'use_12_hour_clock_with_arabic_numerals_and_colon'
          | 'use_12_hour_clock_with_korean_words_시_and_분'
          | 'use_12_hour_clock_without_leading_zero_or_minutes_for_full_hours_use_colon_as_separator_and_lowercase_am_or_pm_without_periods'
          | 'use_12_hour_clock_without_leading_zero_or_minutes_for_full_hours_use_colon_as_separator_and_uppercase_am_or_pm_without_periods'
          | 'use_12_hour_clock_without_leading_zero_use_period_as_separator_and_lowercase_am_or_pm_with_periods_and_spaces'
          | 'use_24_hour_clock'
          | 'use_24_hour_clock_with_arabic_numerals_and_colon'
          | 'use_24_hour_clock_with_colon_as_separator'
          | 'use_24_hour_clock_with_korean_words_시_and_분'
          | 'use_24_hour_clock_with_period_as_separator'
          | 'use_hh_colon_mm_german_word_uhr_with_leading_zeros_for_single_digit_hours'
          | 'use_hh_colon_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours'
          | 'use_hh_period_mm_german_word_uhr_with_leading_zeros_for_single_digit_hours'
          | 'use_hh_period_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours'
          | 'use_hh_period_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours_and_for_full_hours_state_hour_only'
          | undefined
        writing_dates?: 'use_dd_space_spelled_out_month_space_yyyy' | 'use_numerals' | undefined
        years?:
          | 'use_apostrophe_yy'
          | 'use_common_era'
          | 'use_japanese_imperial_era'
          | 'use_yyyy'
          | undefined
      }
    | undefined
  formatting?:
    | {
        email_address_format?:
          | 'place_domain_in_parentheses'
          | 'replace_at_symbol_with_english_word_at_in_brackets_and_replace_periods_with_english_word_dot_in_brackets'
          | 'replace_at_symbol_with_english_word_at_in_brackets_with_space_on_either_side'
          | 'replace_at_symbol_with_english_word_at_in_parentheses_with_space_on_either_side'
          | 'replace_at_symbol_with_english_word_at_with_space_on_either_side'
          | 'use_standard_format'
          | undefined
        phone_number_country_code_format?:
          | 'use_00_before_country_code'
          | 'use_plus_sign_before_country_code'
          | undefined
        phone_number_format?:
          | 'do_not_use_spaces'
          | 'do_not_use_spaces_or_special_characters_between_digits_of_phone_number'
          | 'keep_original_format'
          | 'place_area_code_in_parentheses_followed_by_space'
          | 'separate_area_code_and_phone_number_with_slash'
          | 'separate_area_code_and_phone_number_with_space'
          | 'separate_country_code_area_code_local_prefix_and_last_four_digits_with_hyphens'
          | 'separate_country_code_area_code_local_prefix_and_last_four_digits_with_periods'
          | 'separate_country_code_area_code_local_prefix_and_last_four_digits_with_spaces'
          | 'use_north_american_numbering_plan_format'
          | 'use_space_after_country_code'
          | undefined
        space_between_arabic_numerals_and_unit?: 'do_not_use' | undefined
        space_between_chinese_and_english?: 'do_not_use' | undefined
        space_between_chinese_characters_and_arabic_numerals?: 'do_not_use' | undefined
      }
    | undefined
  numbers?:
    | {
        approximate_numbers?: 'use_kanji_numbers' | undefined
        currency_format?:
          | 'spell_out'
          | 'spell_out_currency_name_followed_by_amount_in_arabic_numerals_without_space'
          | 'spell_out_currency_name_followed_by_amount_in_chinese'
          | 'use_amount_followed_by_currency_symbol_without_space'
          | 'use_amount_followed_by_space_then_currency_symbol'
          | 'use_amount_followed_by_space_then_iso_code'
          | 'use_amount_followed_by_space_then_spell_out_currency_name'
          | 'use_amount_followed_by_space_then_spell_out_currency_name_in_lowercase'
          | 'use_amount_followed_by_spelled_out_currency_name_in_japanese_without_space'
          | 'use_amount_followed_by_spelled_out_currency_name_without_space'
          | 'use_currency_symbol_but_spell_out_if_no_symbol_exists'
          | 'use_currency_symbol_but_use_iso_code_if_no_symbol_exists'
          | 'use_currency_symbol_followed_by_amount_in_arabic_numerals_without_space'
          | 'use_currency_symbol_followed_by_amount_without_space'
          | 'use_currency_symbol_followed_by_space_then_amount'
          | 'use_currency_symbol_followed_by_space_then_amount_in_arabic_numerals'
          | 'use_full_width_currency_symbol_followed_by_amount_without_space'
          | 'use_half_width_currency_symbol_followed_by_amount_without_space'
          | 'use_half_width_currency_symbol_followed_by_space_then_amount'
          | 'use_iso_code'
          | 'use_iso_code_followed_by_space_then_amount'
          | 'use_iso_code_followed_by_space_then_amount_in_arabic_numerals'
          | undefined
        decimal_numbers_less_than_one?: 'always_use_0_before_decimal_separator' | undefined
        decimal_separator?:
          | 'use_comma_and_do_not_use_thousands_separator'
          | 'use_comma_as_decimal_separator'
          | 'use_comma_do_not_use_thousands_separator_and_use_period_only_for_radio_stations'
          | 'use_period_and_do_not_use_thousands_separator'
          | 'use_period_as_decimal_separator'
          | undefined
        dimensions_separator?:
          | 'use_multiplication_sign_between_dimensions_with_space_on_either_side'
          | 'use_multiplication_sign_between_dimensions_without_space_on_either_side'
          | 'use_x_between_dimensions_with_space_on_either_side'
          | 'use_x_between_dimensions_without_space_on_either_side'
          | undefined
        equation_formula_reference?:
          | 'always_use_arabic_numerals_to_number_equations_or_formulas_referenced_in_text'
          | undefined
        kanji_numbers?:
          | 'use_kanji_numbers_for_numbers_in_phrases_and_counting_method_based_on_native_japanese_readings'
          | undefined
        large_number_format?:
          | 'always_use_arabic_numerals'
          | 'spell_out_large_numbers'
          | 'use_abbreviations_for_large_numbers'
          | 'use_chinese_characters_for_ten_thousands_and_hundred_millions'
          | 'use_comma_to_separate_large_numbers_into_units_of_three_except_for_calendar_years'
          | 'use_kanji_for_trillions_hundred_millions_and_ten_thousands'
          | 'use_korean_words_만_억_조_with_space'
          | 'use_korean_words_만_억_조_without_space'
          | undefined
        large_sums_of_money?:
          | 'spell_out_italian_words_milione_and_miliardo'
          | 'use_italian_words_mio_and_mrd_instead_of_italian_words_milione_and_miliardo'
          | undefined
        large_sums_of_money_format?:
          | 'use_amount_followed_by_abbreviation_for_million_or_billion_without_space'
          | 'use_amount_followed_by_space_then_abbreviation_for_million_or_billion'
          | 'use_amount_followed_by_space_then_english_word_million_or_billion'
          | undefined
        list_of_measurements_with_units?: 'repeat_unit_for_each_measurement_in_list' | undefined
        mathematical_expression_spacing?:
          | 'use_space_between_elements_of_mathematical_expression_or_equation'
          | undefined
        number_format?:
          | 'use_half_width_comma_to_separate_large_numbers_into_units_of_three_except_for_calendar_years_and_use_half_width_period_as_decimal_separator'
          | undefined
        number_separator?:
          | 'do_not_use_chinese_comma_to_separate_numbers_indicating_approximate_value'
          | 'use_chinese_comma_to_separate_numbers_in_abbreviations'
          | undefined
        numbers_of_5_digits_or_more?:
          | 'use_comma_as_decimal_separator_and_period_as_thousands_separator'
          | 'use_comma_as_decimal_separator_and_space_as_thousands_separator'
          | 'use_comma_as_decimal_separator_period_as_thousands_separator_and_period_for_radio_stations'
          | 'use_comma_as_decimal_separator_space_as_thousands_separator_and_period_for_radio_stations'
          | 'use_period_as_decimal_separator_and_comma_as_thousands_separator'
          | 'use_period_as_decimal_separator_and_space_as_thousands_separator'
          | undefined
        numbers_up_to_4_digits?:
          | 'use_comma_as_decimal_separator_and_period_as_thousands_separator'
          | 'use_comma_as_decimal_separator_and_space_as_thousands_separator'
          | 'use_comma_as_decimal_separator_period_as_thousands_separator_and_period_for_radio_stations'
          | 'use_comma_as_decimal_separator_space_as_thousands_separator_and_period_for_radio_stations'
          | 'use_period_as_decimal_separator_and_comma_as_thousands_separator'
          | 'use_period_as_decimal_separator_and_space_as_thousands_separator'
          | undefined
        percentage_format?:
          | 'use_arabic_numerals_followed_by_percent_symbol_without_space'
          | 'use_chinese_numbers_followed_by_chinese_word_百分之'
          | 'use_numerals_followed_by_full_width_percent_symbol_without_space'
          | 'use_numerals_followed_by_japanese_word_パーセント_without_space'
          | 'use_numerals_followed_by_korean_word_퍼센트'
          | 'use_numerals_followed_by_percent_symbol'
          | 'use_numerals_followed_by_space_then_german_word_prozent'
          | 'use_numerals_followed_by_space_then_half_width_percent_symbol'
          | 'use_numerals_followed_by_space_then_italian_word_per_cento'
          | 'use_numerals_followed_by_space_then_italian_word_percento'
          | 'use_numerals_followed_by_space_then_korean_word_퍼센트'
          | 'use_numerals_followed_by_space_then_percent_symbol'
          | 'use_numerals_followed_by_space_then_spell_out_per_cent'
          | 'use_numerals_followed_by_space_then_spell_out_percent'
          | 'use_spanish_word_por_cien'
          | 'use_spanish_word_por_ciento'
          | undefined
        reference_to_symbol?: 'spell_out_symbol_name_followed_by_symbol_in_parentheses' | undefined
        spelling_out_units?:
          | 'abbreviate_units_of_measure_when_used_with_numeral_but_spell_out_when_used_without_numeral'
          | 'always_abbreviate_units_of_measure'
          | 'always_spell_out_units_of_measure'
          | 'spell_out_units_in_korean'
          | 'spell_out_units_of_measure_when_used_with_spelled_out_numbers_but_abbreviate_when_used_with_numeral'
          | 'spell_out_units_of_measure_with_katakana_or_katakana_and_kanji'
          | 'use_si_symbols'
          | 'use_unit_symbols'
          | undefined
        temperature_format?:
          | 'spell_out_unit'
          | 'spell_out_unit_followed_by_numerals_then_korean_word_도'
          | 'use_arabic_numerals_followed_by_space_then_spell_out_unit'
          | 'use_arabic_numerals_followed_by_unit_symbol_without_space'
          | 'use_arabic_numerals_then_spell_out_unit'
          | 'use_chinese_numbers_then_spell_out_unit'
          | 'use_italian_word_grado_and_do_not_specify_temperature_scale'
          | 'use_numerals_followed_by_japanese_word_度_without_space'
          | 'use_numerals_followed_by_korean_word_도'
          | 'use_numerals_followed_by_space_then_spell_out_unit'
          | 'use_numerals_followed_by_space_then_unit_symbol'
          | 'use_numerals_followed_by_unit_symbol_without_space'
          | 'use_spanish_word_grado_and_do_not_specify_temperature_scale'
          | undefined
        thousands_separator?:
          | 'do_not_use'
          | 'do_not_use_thousands_separator'
          | 'use_comma'
          | 'use_comma_to_separate_large_numbers_into_units_of_three'
          | 'use_period'
          | 'use_period_as_thousands_separator'
          | 'use_space'
          | 'use_space_as_thousands_separator'
          | 'use_space_to_separate_large_numbers_into_units_of_three'
          | 'use_straight_apostrophe_as_thousands_separator'
          | undefined
        units_of_measure_spacing?:
          | 'do_not_use_space_between_numeral_and_unit_of_measure'
          | 'use_space_between_numeral_and_unit_of_measure'
          | undefined
        use_of_hiragana_and_kanji?:
          | 'use_hiragana_japanese_word_か所_or_か月_when_using_arabic_numerals_in_horizontal_writing_but_use_kanji_japanese_word_箇所_or_箇月_when_using_kanji_numbers'
          | undefined
        writing_numbers?:
          | 'always_use_kanji_numbers'
          | 'use_arabic_numerals'
          | 'use_full_width_arabic_numerals_and_only_use_kanji_numbers_where_it_would_otherwise_sound_unnatural'
          | 'use_half_width_arabic_numerals_and_only_use_kanji_numbers_where_it_would_otherwise_sound_unnatural'
          | undefined
        zero_format?:
          | 'use_chinese_word_〇_for_numbering'
          | 'use_chinese_word_零_for_measurement'
          | undefined
      }
    | undefined
  punctuation?:
    | {
        abbreviations?:
          | 'do_not_separate_abbreviated_words'
          | 'separate_each_abbreviated_word_with_period_and_space'
          | 'separate_each_abbreviated_word_with_period_without_space'
          | 'separate_each_abbreviated_word_with_space_without_period'
          | undefined
        acronyms?: 'do_not_use_periods' | undefined
        ampersand_abbreviation_spacing?:
          | 'do_not_use_spaces_before_and_after_ampersand_as_part_of_abbreviation'
          | 'use_spaces_before_and_after_ampersand_as_part_of_abbreviation'
          | undefined
        ampersand_usage?:
          | 'use_english_word_and_except_in_company_names_common_abbreviations_titles_software_code_and_mathematical_equations'
          | 'use_full_width_ampersand'
          | 'use_german_word_und_except_in_company_names_common_abbreviations_titles_software_code_and_mathematical_equations'
          | 'use_half_width_ampersand'
          | undefined
        apostrophe?: 'use_curly_apostrophes' | 'use_straight_apostrophes' | undefined
        bracket?:
          | 'use_hexagonal_brackets'
          | 'use_lenticular_brackets'
          | 'use_parentheses'
          | 'use_square_brackets_for_nationality_and_hexagonal_brackets_for_historical_period'
          | undefined
        chinese_mixed_with_english?:
          | 'do_not_place_english_in_quotation_marks'
          | 'place_english_in_quotation_marks'
          | undefined
        colon?: 'use_full_width_colon' | 'use_half_width_colon' | undefined
        colon_between_hours_and_minutes_or_chapters_and_verses?:
          | 'do_not_use_space_before_or_after_colon'
          | undefined
        colon_in_heading?: 'use_space_after_colon_not_before' | undefined
        colon_to_replace_versus_or_to?: 'do_not_use_space_before_or_after_colon' | undefined
        comma_after_conjunctive_adverbs?: 'do_not_use' | 'use' | undefined
        comma_after_i_e_and_e_g?: 'do_not_use' | 'use' | undefined
        comma_after_short_introductory_phrase?: 'do_not_use' | 'use' | undefined
        comma_and_semicolon?:
          | 'use_comma_between_clauses'
          | 'use_semicolon_between_clauses'
          | undefined
        corner_bracket_and_periods?:
          | 'add_period_after_closing_corner_bracket_at_end_of_sentence'
          | undefined
        corner_brackets_and_periods?:
          | 'do_not_add_period_before_closing_corner_bracket_when_sentence_continues'
          | undefined
        dash?: 'use_em_dash' | 'use_hyphen' | 'use_tilde' | undefined
        ellipsis?:
          | 'use_ellipsis_character'
          | 'use_one_ellipsis_character'
          | 'use_six_dots_at_the_bottom'
          | 'use_six_dots_in_the_center'
          | 'use_three_dots_at_the_bottom'
          | 'use_three_dots_in_the_center'
          | 'use_three_ellipsis_characters'
          | 'use_three_periods'
          | 'use_three_periods_without_spaces'
          | 'use_three_spaced_periods'
          | 'use_two_ellipsis_characters'
          | undefined
        em_dash?: 'use_double_em_dash' | undefined
        emphasis?: 'use_double_corner_brackets' | undefined
        exclamation_marks?: 'do_not_use' | undefined
        explanatory_note_indicator?: 'use_double_em_dash' | 'use_parentheses' | undefined
        full_sentence_in_round_brackets?: 'add_period_before_closing_round_bracket' | undefined
        highlighting_specific_expressions?:
          | 'use_single_curly_quotation_marks'
          | 'use_single_straight_quotation_marks'
          | undefined
        japanese_reference_materials?: 'use_double_corner_brackets' | undefined
        parentheses_for_supplementary_information?:
          | 'use_parentheses_without_space_on_either_side'
          | undefined
        passage_of_time_and_movement_between_locations?: 'use_double_em_dash' | undefined
        periods_and_commas?:
          | 'use_full_width_japanese_periods_and_full_width_japanese_commas'
          | 'use_full_width_japanese_periods_and_full_width_non_japanese_commas'
          | 'use_full_width_non_japanese_periods_and_full_width_japanese_commas'
          | 'use_full_width_non_japanese_periods_and_full_width_non_japanese_commas'
          | undefined
        periods_in_academic_degrees?: 'do_not_use' | 'use' | undefined
        periods_in_direct_quotes?: 'do_not_use' | 'use' | undefined
        periods_in_uppercase_initialisms_and_acronyms?: 'do_not_use' | undefined
        plus_sign_usage?:
          | 'do_not_use_plus_sign_to_symbolize_english_word_and_unless_it_is_part_of_a_proper_noun'
          | undefined
        possessives_of_proper_names_ending_in_s_style?:
          | 'add_apostrophe_only'
          | 'add_apostrophe_s'
          | undefined
        quotation_mark?:
          | 'use_curly_quotation_marks'
          | 'use_double_curly_quotation_marks'
          | 'use_double_straight_quotation_marks'
          | 'use_guillemets'
          | 'use_straight_quotation_marks'
          | undefined
        quotation_mark_and_apostrophe?:
          | 'use_curly_quotation_marks_and_apostrophes'
          | 'use_double_and_single_curly_quotation_marks_and_curly_apostrophes'
          | 'use_double_and_single_straight_quotation_marks_and_straight_apostrophes'
          | 'use_guillemets_and_curly_apostrophes'
          | 'use_guillemets_and_straight_apostrophes'
          | 'use_straight_quotation_marks_and_apostrophes'
          | undefined
        quotation_style?:
          | 'use_corner_brackets_for_primary_quotations_and_double_corner_brackets_for_secondary_quotations'
          | 'use_double_curly_quotation_marks_for_primary_quotations_and_single_curly_quotation_marks_for_secondary_quotations'
          | 'use_double_curly_quotation_marks_for_primary_quotations_then_alternate_with_single_curly_quotation_marks_for_nested_quotations'
          | 'use_double_german_quotation_marks_for_primary_quotations_and_single_german_quotation_marks_for_secondary_quotations'
          | 'use_double_quotation_marks_for_primary_quotations_and_single_quotation_marks_for_secondary_quotations'
          | 'use_double_straight_quotation_marks_for_primary_quotations_and_single_straight_quotation_marks_for_secondary_quotations'
          | 'use_double_straight_quotation_marks_for_primary_quotations_then_alternate_with_single_straight_quotation_marks_for_nested_quotations'
          | 'use_guillemets_for_primary_quotations_and_double_curly_quotation_marks_for_secondary_quotations'
          | 'use_guillemets_for_primary_quotations_and_double_straight_quotation_marks_for_secondary_quotations'
          | 'use_guillemets_for_primary_quotations_and_single_guillemets_for_secondary_quotations'
          | 'use_guillemets_for_primary_quotations_double_curly_quotation_marks_for_secondary_quotations_and_single_curly_quotation_marks_for_further_nested_quotations'
          | 'use_reversed_guillemets_for_primary_quotations_and_single_reversed_guillemets_for_secondary_quotations'
          | 'use_single_quotation_marks_for_primary_quotations_and_double_quotation_marks_for_secondary_quotations'
          | undefined
        range_indicator?:
          | 'use_en_dash_with_spaces'
          | 'use_en_dash_without_space_on_either_side'
          | 'use_en_dash_without_spaces'
          | 'use_english_word_to'
          | 'use_full_width_dash'
          | 'use_full_width_wave_dash'
          | 'use_german_word_bis'
          | 'use_half_width_dash'
          | 'use_hyphen'
          | 'use_hyphen_with_space_on_either_side'
          | 'use_hyphen_with_spaces'
          | 'use_hyphen_without_space_on_either_side'
          | 'use_hyphen_without_spaces'
          | 'use_italian_words_da_a'
          | 'use_japanese_word_から'
          | 'use_korean_words_부터_까지'
          | 'use_spanish_words_de_a'
          | 'use_tilde'
          | undefined
        related_phrases_indicator?: 'use_comma' | 'use_hyphen' | 'use_middle_dot' | undefined
        round_brackets?:
          | 'use_full_width_round_brackets'
          | 'use_half_width_round_brackets'
          | undefined
        salutation?:
          | 'do_not_use_comma_after_salutation_capitalize_following_word'
          | 'use_colon_after_salutation'
          | 'use_comma_after_salutation'
          | 'use_exclamation_mark_after_salutation'
          | undefined
        sentence_break_indicator?:
          | 'use_em_dash_with_space_on_either_side'
          | 'use_em_dash_without_space_on_either_side'
          | 'use_en_dash_with_space_on_either_side'
          | undefined
        serial_comma?:
          | 'do_not_use'
          | 'do_not_use_serial_comma_when_using_chinese_comma'
          | 'use'
          | 'use_serial_comma_when_using_comma'
          | undefined
        setting_off_non_quoted_phrases?:
          | 'use_full_width_quotation_marks'
          | 'use_half_width_quotation_marks'
          | undefined
        slash?:
          | 'do_not_use_spaces_before_and_after_slashes'
          | 'use_spaces_before_and_after_slashes'
          | 'use_spaces_before_and_after_slashes_if_there_are_multiple_words_before_and_after_slash'
          | 'use_spaces_before_and_after_slashes_if_there_are_multiple_words_before_or_after_slash'
          | undefined
        slash_usage?: 'do_not_use_slash_to_symbolize_english_word_or' | undefined
        spacing_and_punctuation?: 'do_not_use_space' | 'use_regular_space' | undefined
        text_in_round_brackets_referring_to_previous_sentence?:
          | 'add_period_after_closing_round_bracket'
          | 'add_period_before_closing_round_bracket'
          | undefined
        text_in_round_brackets_supplementing_preceding_text?:
          | 'add_period_after_closing_round_bracket'
          | undefined
        titles_of_books_and_newspapers?:
          | 'use_double_angle_brackets'
          | 'use_double_corner_brackets'
          | 'use_double_straight_quotation_marks'
          | undefined
        titles_of_creative_works_trade_names_laws_and_regulations?:
          | 'use_single_angle_brackets'
          | 'use_single_corner_brackets'
          | 'use_single_straight_quotation_marks'
          | undefined
        uppercase_acronyms?: 'do_not_use_spaces' | 'use_spaces' | undefined
      }
    | undefined
  spelling_and_grammar?:
    | {
        abbreviating_french_word_numero?:
          | 'abbreviate_as_n_then_degree_symbol'
          | 'abbreviate_as_n_then_o_in_superscript'
          | 'abbreviate_as_no'
          | undefined
        abbreviation_usage?:
          | 'do_not_use_abbreviations'
          | 'do_not_use_abbreviations_unless_necessary'
          | 'use_abbreviations'
          | 'use_abbreviations_as_needed'
          | undefined
        accents_and_cedillas?:
          | 'do_not_use_on_capital_letters'
          | 'never_use'
          | 'use_even_on_capital_letters'
          | undefined
        accents_in_verbs_conjugated_like_french_word_céder?:
          | 'use_acute_accent'
          | 'use_grave_accent'
          | undefined
        accents_with_subject_verb_inversion?: 'use_acute_accent' | 'use_grave_accent' | undefined
        active_passive_voice?:
          | 'use_active_voice_if_subject_is_prominent_and_agent_is_clear'
          | 'use_active_voice_to_describe_operations_with_user_as_subject'
          | 'use_active_voice_unless_agent_is_unknown_or_irrelevant'
          | 'use_passive_voice_as_needed'
          | 'use_passive_voice_for_automatic_operations_from_user_perspective'
          | 'use_passive_voice_if_agent_is_unknown_or_irrelevant'
          | undefined
        all_caps?:
          | 'do_not_use_all_caps_except_for_acronyms_initialisms_or_proper_nouns'
          | 'do_not_use_all_caps_except_for_acronyms_or_brand_names'
          | undefined
        complete_sentences?: 'always_write_complete_sentences' | undefined
        compound_nouns?: 'write_as_one_word' | 'write_with_hyphen' | undefined
        conjunctions?: 'never_start_sentence_with_coordinating_conjunction' | undefined
        contractions?:
          | 'do_not_use_contractions'
          | 'use_contractions'
          | 'use_contractions_but_avoid_negative_contractions'
          | undefined
        established_loanwords?: 'use_as_is' | 'use_native_or_sino_korean_equivalents' | undefined
        eszett?: 'replace_eszett_with_ss' | undefined
        foreign_word_translation?:
          | 'use_equivalent_expressions_in_chinese'
          | 'use_foreign_forms_or_abbreviations_for_technical_terms_or_brand_names'
          | 'use_literal_translation'
          | 'use_localized_names_for_brands_with_official_chinese_translations'
          | 'use_mixture_of_transliteration_and_translation'
          | 'use_transliteration'
          | undefined
        french_verbs_ending_in_eler_and_eter?:
          | 'transcribe_open_e_sound_by_doubling_next_consonant'
          | 'transcribe_open_e_sound_with_grave_accent'
          | undefined
        i_and_u_with_circumflex_accents?:
          | 'do_not_use_circumflex_accents_except_in_verbs_and_to_distinguish_homophones'
          | 'use_circumflex_accents'
          | undefined
        informal_address_pronouns?:
          | 'capitalize_informal_address_pronouns'
          | 'do_not_capitalize_informal_address_pronouns'
          | undefined
        latin_abbreviations?: 'do_not_use_latin_abbreviations' | undefined
        passive_voice?: 'avoid_passive_voice_when_agent_is_known' | undefined
        past_participle_of_french_word_laisser_followed_by_infinitive?:
          | 'make_french_word_laisser_agree_with_direct_object_complement_if_it_appears_before_verb'
          | 'use_invariable_form_french_word_laissé'
          | undefined
        personal_titles?: 'abbreviate' | 'do_not_abbreviate' | undefined
        pluralizing_foreign_words?:
          | 'use_french_spelling_rules'
          | 'use_original_language_spelling'
          | undefined
        quotation_modification?:
          | 'do_not_modify_text_in_quotation_marks'
          | 'modify_text_in_quotation_marks_according_to_custom_rules'
          | undefined
        spanish_word_solo?:
          | 'never_use_acute_accent'
          | 'use_acute_accent_when_used_as_adverb'
          | undefined
        special_characters?: 'never_use_symbols' | undefined
        spelled_out_numbers?:
          | 'use_hyphens'
          | 'use_hyphens_between_elements_under_100_and_not_separated_by_french_word_et'
          | undefined
        umlauts?: 'replace_umlauts_with_ae_oe_ue' | undefined
        unestablished_loanwords?:
          | 'paraphrase_in_korean'
          | 'use_as_is'
          | 'use_as_is_with_explanation_in_parentheses'
          | undefined
      }
    | undefined
  style_and_tone?:
    | {
        abbreviations?:
          | 'avoid_abbreviations_and_symbols_that_can_be_spelled_out_easily'
          | 'use_abbreviations_and_symbols'
          | undefined
        addressing_non_binary_people?: 'use_spanish_word_elle' | 'use_spanish_word_ellx' | undefined
        addressing_the_reader?:
          | 'use_formal_french_word_vous'
          | 'use_formal_italian_word_lei'
          | 'use_informal_french_word_tu'
          | 'use_informal_italian_word_tu'
          | undefined
        anglicisms?: 'avoid_anglicisms_when_there_is_a_french_equivalent' | undefined
        binary_representation_of_gender?:
          | 'avoid_binary_representation_of_gender_when_gender_neutral_language_can_be_used'
          | 'replace_binary_representations_of_gender_with_gender_neutral_language'
          | 'use_neutral_pronouns'
          | undefined
        complex_sentences?: 'avoid_unnecessarily_complex_sentences' | undefined
        country_names?: 'use_long_form' | 'use_short_form' | undefined
        declarative_endings?:
          | 'mix_hapsho_and_haeyo_styles'
          | 'use_hae_style'
          | 'use_haeyo_style'
          | 'use_hapsho_style'
          | 'use_hara_style'
          | undefined
        default_first_person_pronoun?:
          | 'do_not_use_first_person_pronouns'
          | 'omit_first_person_subject_when_clear_from_context'
          | 'use_first_person_pronouns'
          | undefined
        default_second_person_pronoun?:
          | 'do_not_use_second_person_pronouns'
          | 'use_second_person_pronouns'
          | undefined
        directional_language?: 'do_not_use_directional_language' | undefined
        double_negatives?: 'do_not_use_double_negatives' | 'use_double_negatives' | undefined
        formality?: 'use_casual_tone' | 'use_formal_tone' | undefined
        gender_neutral_language_readability?:
          | 'use_generic_masculine_for_common_compound_nouns_if_it_increases_readability'
          | undefined
        gender_unspecified?:
          | 'use_both_masculine_and_feminine_forms'
          | 'use_gender_neutral_terms'
          | 'use_masculine_form_only'
          | 'use_middle_dots'
          | 'use_parentheses'
          | 'use_periods'
          | undefined
        gender_unspecified_or_mixed?:
          | 'use_both_feminine_and_masculine_forms'
          | 'use_feminine_form_only'
          | 'use_inclusive_nouns_and_adjectives'
          | 'use_masculine_form_only'
          | 'use_neutral_nouns_and_adjectives'
          | undefined
        idioms_colloquialisms_and_culture_specific_references?: 'do_not_use' | undefined
        inflected_words_masculine_noun_agreement?:
          | 'place_masculine_nouns_closest_to_inflected_words'
          | undefined
        instructions_style?:
          | 'use_imperative'
          | 'use_indicative'
          | 'use_infinitive'
          | 'use_modal_verbs'
          | 'use_passive_voice'
          | undefined
        mixing_styles?: 'do_not_mix_desu_masu_style_and_dearu_style' | undefined
        modal_verbs?: 'avoid_modal_verbs' | undefined
        personal_vs_impersonal_style?: 'use_impersonal_style' | 'use_personal_style' | undefined
        positive_vs_negative_language?: 'use_positive_language' | undefined
        proximity_agreement?: 'use' | undefined
        reader_action_required?: 'use_you_must_when_action_is_required_from_reader' | undefined
        redundant_introductory_phrases?:
          | 'avoid_redundant_introductory_phrases'
          | 'do_not_use_redundant_phrases_that_refer_to_current_text'
          | undefined
        redundant_phrases?:
          | 'avoid_relativizing_and_redundant_phrases'
          | 'do_not_use_redundant_phrases'
          | undefined
        referring_to_non_binary_people?: 'use_the_singular_and_plural_schwa' | undefined
        short_vs_long_words?: 'use_short_words' | undefined
        simple_words_and_sentences?:
          | 'use_simple_words_and_sentences_avoid_hard_to_translate_words_and_figures_of_speech'
          | undefined
        text_position_references?:
          | 'avoid_directional_terms_as_only_reference_to_position_in_text_specify_exact_position_instead'
          | undefined
        tone?:
          | 'use_dearu_style_to_give_impression_content_is_accurate_and_rigorous_or_to_convey_sense_of_confidence_and_reliability'
          | 'use_desu_masu_style_to_give_impression_content_is_plain_and_straightforward_or_to_give_reader_reassuring_or_soft_impression'
          | undefined
        verbal_vs_nominal_style?: 'use_nominal_style' | 'use_verbal_style' | undefined
      }
    | undefined
  vocabulary?:
    | {
        abbreviations?: 'write_original_term_then_abbreviation_and_explanation' | undefined
        loanwords?:
          | 'add_explanation_to_loanword_if_difficult_to_rephrase'
          | 'rephrase_loanword_in_daily_use_chinese_or_japanese_words_if_possible'
          | 'rephrase_loanword_with_another_expression_if_not_established'
          | 'use_loanword_as_is_if_well_established'
          | undefined
      }
    | undefined
}
type CustomInstruction = {
  id: string
  label: string
  prompt: string
  source_language?: string | undefined
}
type StyleRuleList = {
  style_id: StyleId
  name: StyleRuleName
  creation_time: string
  updated_time: string
  language: StyleRuleLanguage
  version: number
  configured_rules?: ConfiguredRules | undefined
  custom_instructions?: CustomInstruction[] | undefined
}
type VoiceMessageFormat = 'json' | 'msgpack'
type VoiceSourceMediaContentType =
  | 'audio/auto'
  | 'audio/flac'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/webm'
  | 'audio/x-matroska'
  | 'audio/ogg;codecs=flac'
  | 'audio/ogg;codecs=opus'
  | 'audio/pcm;encoding=alaw;rate=8000'
  | 'audio/pcm;encoding=ulaw;rate=8000'
  | 'audio/pcm;encoding=s16le;rate=8000'
  | 'audio/pcm;encoding=s16le;rate=16000'
  | 'audio/pcm;encoding=s16le;rate=44100'
  | 'audio/pcm;encoding=s16le;rate=48000'
  | 'audio/webm;codecs=opus'
  | 'audio/x-matroska;codecs=aac'
  | 'audio/x-matroska;codecs=flac'
  | 'audio/x-matroska;codecs=mp3'
  | 'audio/x-matroska;codecs=opus'
type VoiceSourceLanguage =
  | 'ar'
  | 'bg'
  | 'bn'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'ga'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'ta'
  | 'th'
  | 'tl'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
type VoiceSourceLanguageMode = 'auto' | 'fixed'
type VoiceTargetLanguages = (
  | 'ar'
  | 'bg'
  | 'bn'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'en-GB'
  | 'en-US'
  | 'es'
  | 'es-419'
  | 'et'
  | 'fi'
  | 'fr'
  | 'fr-CA'
  | 'fr-FR'
  | 'ga'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'ta'
  | 'th'
  | 'tl'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
  | 'zh-HANS'
  | 'zh-HANT'
)[]
type VoiceTargetMediaLanguages = (
  | 'ar'
  | 'bg'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'en-GB'
  | 'en-US'
  | 'es'
  | 'es-419'
  | 'fi'
  | 'fr'
  | 'fr-CA'
  | 'fr-FR'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'ms'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'ta'
  | 'th'
  | 'tl'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh'
  | 'zh-HANS'
  | 'zh-HANT'
)[]
type VoiceTargetMediaContentType =
  | 'audio/flac'
  | 'video/mp2t;codecs=aac'
  | 'video/mp2t;codecs=opus'
  | 'audio/ogg'
  | 'audio/ogg;codecs=flac'
  | 'audio/ogg;codecs=opus'
  | 'audio/opus'
  | 'audio/pcm;encoding=alaw;rate=8000'
  | 'audio/pcm;encoding=ulaw;rate=8000'
  | 'audio/pcm;encoding=s16le;rate=16000'
  | 'audio/pcm;encoding=s16le;rate=24000'
  | 'audio/webm'
  | 'audio/webm;codecs=opus'
  | 'audio/x-matroska;codecs=aac'
  | 'audio/x-matroska;codecs=flac'
  | 'audio/x-matroska;codecs=opus'
type VoiceTargetMediaVoice = 'male' | 'female' | 'match'
type SpokenTermsId = string
type VoiceFormality = 'default' | 'formal' | 'more' | 'informal' | 'less'
type VoiceStreamingResponse = {
  streaming_url: string
  token: string
  session_id?: string | undefined
}
type VoiceTranslateJobSourceContentType =
  | 'audio/mpeg'
  | 'audio/wav'
  | 'audio/ogg'
  | 'audio/flac'
  | 'audio/mp4'
  | 'audio/webm'
type JobSourceFileRequest = {
  name: string
  content_type: VoiceTranslateJobSourceContentType
  content_length: bigint
}
type VoiceTranslateJobParametersRequest = { source_language?: {} | undefined }
type VoiceTranslateJobTargetOutputType =
  | 'text/plain'
  | 'application/x-subrip'
  | 'audio/opus'
  | 'audio/flac'
  | 'audio/pcm;encoding=s16le;rate=16000'
  | 'audio/pcm;encoding=s16le;rate=24000'
  | 'audio/pcm;encoding=ulaw;rate=8000'
  | 'audio/pcm;encoding=alaw;rate=8000'
  | 'audio/x-matroska;codecs=aac'
  | 'audio/x-matroska;codecs=flac'
  | 'audio/x-matroska;codecs=opus'
  | 'audio/x-matroska;codecs=pcm_s16le;rate=16000'
  | 'audio/x-matroska;codecs=pcm_s16le;rate=24000'
  | 'video/mp2t;codecs=aac'
  | 'video/mp2t;codecs=opus'
  | 'audio/ogg;codecs=flac'
  | 'audio/ogg;codecs=opus'
  | 'audio/webm;codecs=opus'
type VoiceTranslateJobTargetRequest = {
  language: TargetLanguage
  type: VoiceTranslateJobTargetOutputType
}
type VoiceTranslateCreateJobRequest = {
  source_file: JobSourceFileRequest
  parameters?: VoiceTranslateJobParametersRequest | undefined
  targets: VoiceTranslateJobTargetRequest[]
}
type VoiceTranslateCreateJobResponse = {
  job_id: string
  upload_url: string
  signature: string
  signed_upload_url?: string | undefined
}
type JobUsage = { storage_used?: bigint | undefined }
type JobSourceFileResponse = { name: string; content_type: string; content_length: bigint }
type VoiceTranslateJobParametersResponse = { source_language?: {} | undefined }
type VoiceTranslateJobTargetResponse = {
  language: TargetLanguage
  type: VoiceTranslateJobTargetOutputType
}
type ResultStatus = 'pending' | 'uploaded' | 'processing' | 'complete' | 'downloaded' | 'failed'
type VoiceTranslateJobTargetResult = {
  status: ResultStatus
  download_url?: string | undefined
  signature?: string | undefined
  signed_download_url?: string | undefined
  error?: { message: string; code?: string | undefined } | undefined
}
type VoiceTranslateJobStatusResponse = {
  job_id: string
  product: string
  operation: string
  created_at: string
  updated_at: string
  usage: JobUsage
  source_file: JobSourceFileResponse
  parameters: VoiceTranslateJobParametersResponse
  targets: VoiceTranslateJobTargetResponse[]
  results: VoiceTranslateJobTargetResult[]
}
type QualityEvaluationSpan = { start: number; end: number }
type QualityEvaluationAppliedGlossaryTermPair = {
  source_term: string
  target_term: string
  ranges: QualityEvaluationSpan[]
}
type QualityEvaluationIssue = {
  type: 'Accuracy' | 'Fluency' | 'Style' | 'Miscellaneous' | 'InternalTQEError'
  sub_type:
    | 'Addition'
    | 'Omission'
    | 'Mistranslation'
    | 'Over-translation'
    | 'Under-translation'
    | 'Untranslated text'
    | 'Punctuation'
    | 'Spelling'
    | 'Grammar'
    | 'Grammatical register'
    | 'Inconsistency'
    | 'Character encoding'
    | 'Awkward'
    | 'Inconsistent style'
    | 'SegmentTooLarge'
  severity: 'Critical' | 'Major' | 'Minor'
  explanation: string
  source_spans: QualityEvaluationSpan[]
  target_spans: QualityEvaluationSpan[]
}
type QualityEvaluationSegment = {
  segment_index: number
  segment_score: number
  source?: string | undefined
  target?: string | undefined
  applied_glossary_term_pairs?: QualityEvaluationAppliedGlossaryTermPair[] | undefined
  errors: QualityEvaluationIssue[]
}
type QualityEvaluationDone = {
  job_id: string
  status: 'done'
  segments: QualityEvaluationSegment[]
}
type QualityEvaluationFailed = {
  job_id: string
  status: 'error'
  error: { code: string; message: string }
}
type QualityEvaluationProcessing = { job_id: string; status: 'processing' }
type QualityEvaluationApiError = { message: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/admin/analytics': {
      $get:
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                group_by?: 'key' | 'key_and_day' | undefined
              }
            }
            output: AdminUsageReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                group_by?: 'key' | 'key_and_day' | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                group_by?: 'key' | 'key_and_day' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                group_by?: 'key' | 'key_and_day' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                group_by?: 'key' | 'key_and_day' | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/admin/analytics/custom-tags': {
      $get:
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                aggregate_by?: 'period' | 'day' | undefined
                page?: number | undefined
              }
            }
            output: CustomTagUsageReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                aggregate_by?: 'period' | 'day' | undefined
                page?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                aggregate_by?: 'period' | 'day' | undefined
                page?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                aggregate_by?: 'period' | 'day' | undefined
                page?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                aggregate_by?: 'period' | 'day' | undefined
                page?: number | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/admin/developer-keys': {
      $post:
        | {
            input: { json: { label?: ApiKeyLabel | undefined } }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { label?: ApiKeyLabel | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { label?: ApiKeyLabel | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { label?: ApiKeyLabel | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { label?: ApiKeyLabel | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: {}; output: ApiKey[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/admin/developer-keys/deactivate': {
      $put:
        | {
            input: { json: { key_id: ApiKeyId } }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { key_id: ApiKeyId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { key_id: ApiKeyId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { key_id: ApiKeyId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { key_id: ApiKeyId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/admin/developer-keys/label': {
      $put:
        | {
            input: { json: { key_id: ApiKeyId; label: string } }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { key_id: ApiKeyId; label: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { key_id: ApiKeyId; label: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { key_id: ApiKeyId; label: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { key_id: ApiKeyId; label: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/admin/developer-keys/limits': {
      $put:
        | {
            input: {
              json: {
                key_id: ApiKeyId
                characters?: ApiKeyUsageCharacters | undefined
                speech_to_text_milliseconds?: ApiKeyUsageSpeechToTextMilliseconds | undefined
                speech_to_speech_milliseconds?: ApiKeyUsageSpeechToSpeechMilliseconds | undefined
              }
            }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                key_id: ApiKeyId
                characters?: ApiKeyUsageCharacters | undefined
                speech_to_text_milliseconds?: ApiKeyUsageSpeechToTextMilliseconds | undefined
                speech_to_speech_milliseconds?: ApiKeyUsageSpeechToSpeechMilliseconds | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                key_id: ApiKeyId
                characters?: ApiKeyUsageCharacters | undefined
                speech_to_text_milliseconds?: ApiKeyUsageSpeechToTextMilliseconds | undefined
                speech_to_speech_milliseconds?: ApiKeyUsageSpeechToSpeechMilliseconds | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                key_id: ApiKeyId
                characters?: ApiKeyUsageCharacters | undefined
                speech_to_text_milliseconds?: ApiKeyUsageSpeechToTextMilliseconds | undefined
                speech_to_speech_milliseconds?: ApiKeyUsageSpeechToSpeechMilliseconds | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                key_id: ApiKeyId
                characters?: ApiKeyUsageCharacters | undefined
                speech_to_text_milliseconds?: ApiKeyUsageSpeechToTextMilliseconds | undefined
                speech_to_speech_milliseconds?: ApiKeyUsageSpeechToSpeechMilliseconds | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/translate': {
      $post:
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: {
              translations?:
                | {
                    detected_source_language?: string | undefined
                    text?: string | undefined
                    billed_characters?: number | undefined
                    model_type_used?: string | undefined
                    tag_handling_version?: 'v2' | 'v1' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json:
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOption | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    style_id?: string | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    custom_instructions?: string[] | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    tag_handling_version?: TagHandlingVersionOption | undefined
                    outline_detection?: OutlineDetectionOption | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
                | {
                    text: string[]
                    source_lang?: SourceLanguage | undefined
                    target_lang: TargetLanguage
                    context?: Context | undefined
                    show_billed_characters?: ShowBilledCharacters | undefined
                    split_sentences?: SplitSentencesOption | undefined
                    preserve_formatting?: PreserveFormattingOptionStr | undefined
                    formality?: Formality | undefined
                    model_type?: ModelType | undefined
                    glossary_id?: string | undefined
                    glossary_ids?: string[] | undefined
                    translation_memory_id?: TranslationMemoryId | undefined
                    translation_memory_threshold?: TranslationMemoryThreshold | undefined
                    style_profile_id?: string | undefined
                    tag_handling?: TagHandlingOption | undefined
                    outline_detection?: OutlineDetectionOptionStr | undefined
                    enable_beta_languages?: boolean | undefined
                    non_splitting_tags?: string[] | undefined
                    splitting_tags?: string[] | undefined
                    ignore_tags?: string[] | undefined
                  }
            } & {
              form: {
                text: string[]
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                context?: Context | undefined
                show_billed_characters?: ShowBilledCharacters | undefined
                split_sentences?: SplitSentencesOption | undefined
                preserve_formatting?: PreserveFormattingOptionStr | undefined
                formality?: Formality | undefined
                model_type?: ModelType | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                style_profile_id?: string | undefined
                tag_handling?: TagHandlingOption | undefined
                outline_detection?: OutlineDetectionOptionStr | undefined
                enable_beta_languages?: boolean | undefined
                non_splitting_tags?: string[] | undefined
                splitting_tags?: string[] | undefined
                ignore_tags?: string[] | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/document': {
      $post:
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: {
              document_id?: string | undefined
              document_key?: string | undefined
              quality_evaluation_job_id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              form: {
                source_lang?: SourceLanguage | undefined
                target_lang: TargetLanguage
                file: File
                filename?: string | undefined
                output_format?: string | undefined
                input_conversion_options?: string | undefined
                formality?: Formality | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                style_id?: string | undefined
                translation_memory_id?: TranslationMemoryId | undefined
                translation_memory_threshold?: TranslationMemoryThreshold | undefined
                custom_instructions?: string | undefined
                style_profile_id?: string | undefined
                enable_watermark?: boolean | undefined
                enable_quality_evaluation?: boolean | undefined
                enable_beta_languages?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/document/:document_id': {
      $post:
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: {
              document_id: string
              status: 'queued' | 'translating' | 'done' | 'error'
              seconds_remaining?: number | undefined
              billed_characters?: number | undefined
              error_message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/document/:document_id/result': {
      $post:
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: DocumentTranslationError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: DocumentTranslationError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { document_id: string } } & { json: DocumentKey } & {
              form: DocumentKey
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/glossary-language-pairs': {
      $get:
        | {
            input: {}
            output: {
              supported_languages?: { source_lang: string; target_lang: string }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/glossaries': {
      $post:
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: MultilingualGlossary
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateMultilingualGlossaryParameters } & {
              form: CreateMultilingualGlossaryParameters
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {}
            output: { glossaries?: MultilingualGlossary[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/glossaries/:glossary_id': {
      $get:
        | {
            input: { param: { glossary_id: string } }
            output: MultilingualGlossary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { glossary_id: string } }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: MultilingualGlossary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } } & {
              json: PatchMultilingualGlossaryParameters
            } & { form: PatchMultilingualGlossaryParameters }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { glossary_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { glossary_id: string } }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/glossaries/:glossary_id/entries': {
      $get:
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: { dictionaries?: MultilingualGlossaryEntries[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/glossaries/:glossary_id/dictionaries': {
      $delete:
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } } & {
              query: {
                source_lang: GlossarySourceLanguage
                target_lang: MultilingualGlossaryTargetLanguage
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: MultilingualGlossaryEntriesInformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } } & { json: MultilingualGlossaryEntries }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/glossaries': {
      $post:
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: MonolingualGlossary
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateGlossaryParameters } & { form: CreateGlossaryParameters }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {}
            output: { glossaries?: MonolingualGlossary[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/glossaries/:glossary_id': {
      $get:
        | {
            input: { param: { glossary_id: string } }
            output: MonolingualGlossary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { glossary_id: string } }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { glossary_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { glossary_id: string } }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/glossaries/:glossary_id/entries': {
      $get:
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: { message?: string | undefined; detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { glossary_id: string } } & { header: { Accept?: string | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/write/rephrase': {
      $post:
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: {
              improvements?:
                | {
                    detected_source_language?: string | undefined
                    target_language?: string | undefined
                    text?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            } & {
              form: {
                text: string[]
                target_lang?: TargetLanguageWrite | undefined
                writing_style?: WritingStyle | undefined
                tone?: WritingTone | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/write/correct': {
      $post:
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: {
              improvements?:
                | {
                    detected_source_language?: string | undefined
                    target_language?: string | undefined
                    text?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { text: string[]; target_lang?: TargetLanguageWrite | undefined } } & {
              form: { text: string[]; target_lang?: TargetLanguageWrite | undefined }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/usage': {
      $get:
        | { input: {}; output: UsageResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/languages': {
      $get:
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: { language: string; name: string; supports_formality?: boolean | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { type?: 'source' | 'target' | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v3/spoken-terms': {
      $post:
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: SpokenTerms
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateSpokenTermsParameters } & { form: CreateSpokenTermsParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {}
            output: { spoken_terms?: SpokenTerms[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v3/spoken-terms/:spoken_terms_id': {
      $get:
        | {
            input: { param: { spoken_terms_id: string } }
            output: SpokenTerms
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: SpokenTerms
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { spoken_terms_id: string } } & { json: PatchSpokenTermsParameters } & {
              form: PatchSpokenTermsParameters
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { spoken_terms_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { spoken_terms_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v3/spoken-terms/:spoken_terms_id/entries': {
      $get:
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: SpokenTermsEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v3/spoken-terms/:spoken_terms_id/term-lists': {
      $put:
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: SpokenTermsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { spoken_terms_id: string } } & {
              json: PutSpokenTermsListParameters
            } & { form: PutSpokenTermsListParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { spoken_terms_id: string } } & { query: { lang: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v3/languages/resources': {
      $get:
        | {
            input: {}
            output: {
              name:
                | 'translate_text'
                | 'translate_document'
                | 'glossary'
                | 'voice'
                | 'write'
                | 'style_rules'
                | 'translation_memory'
              features: {
                name:
                  | 'formality'
                  | 'style_rules'
                  | 'tag_handling'
                  | 'glossary'
                  | 'writing_style'
                  | 'tone'
                  | 'auto_detection'
                  | 'transcription'
                  | 'translated_speech'
                  | 'spoken_terms'
                  | 'translation_memory'
                needs_source_support?: boolean | undefined
                needs_target_support?: boolean | undefined
              }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {}
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/languages': {
      $get:
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: {
              lang: string
              name: string
              usable_as_source: boolean
              usable_as_target: boolean
              status: 'stable' | 'beta' | 'early_access'
              features: { [x: string]: { status: 'stable' | 'beta' | 'early_access' } }
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                resource:
                  | 'translate_text'
                  | 'translate_document'
                  | 'glossary'
                  | 'voice'
                  | 'write'
                  | 'style_rules'
                  | 'translation_memory'
                include?: ('beta' | 'external')[] | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/translation_memories': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              translation_memories?: TranslationMemory[] | undefined
              total_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/translation_memories/import': {
      $post:
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: { job_id: string; upload_url: string; expires_at: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                source_file: {
                  file_name: string
                  content_type?: string | undefined
                  content_length: bigint
                }
                parameters?: { display_name?: string | undefined } | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/translation_memories/jobs/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } }
            output: TranslationMemoryJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/translation_memories/:translation_memory_id': {
      $get:
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: TranslationMemory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/translation_memories/:translation_memory_id/segments': {
      $get:
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: {
              segments: TranslationMemorySegment[]
              segment_count: number
              next_page_cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } } & {
              query: {
                page_size?: number | undefined
                page_cursor?: string | undefined
                filter_text?: string | undefined
                filter_case_sensitive?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/translation_memories/:translation_memory_id/export': {
      $post:
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: CreateTranslationMemoryExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: CreateTranslationMemoryExport
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { translation_memory_id: TranslationMemoryId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_profiles': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              style_profiles?: StyleProfile[] | undefined
              total_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: StyleProfile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_profiles/:style_profile_id': {
      $get:
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: StyleProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: StyleProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                industry?: string | undefined
                glossary_ids?: string[] | undefined
                style_rule_ids?: string[] | undefined
                translation_memory_ids?: string[] | undefined
                glossary_priority_order_enabled?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_profile_id: StyleProfileId } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_rules': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: { style_rules?: StyleRuleList[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                detailed?: boolean | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: StyleRuleList
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                name: StyleRuleName
                language: StyleRuleLanguage
                configured_rules?: ConfiguredRules | undefined
                custom_instructions?:
                  | { label: string; prompt: string; source_language?: string | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_rules/:style_id': {
      $get:
        | {
            input: { param: { style_id: string } }
            output: StyleRuleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: StyleRuleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string } } & { json: { name?: StyleRuleName | undefined } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { style_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_rules/:style_id/configured_rules': {
      $put:
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: StyleRuleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string } } & { json: ConfiguredRules }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_rules/:style_id/custom_instructions': {
      $post:
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: CustomInstruction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/style_rules/:style_id/custom_instructions/:instruction_id': {
      $get:
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: CustomInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: CustomInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string; instruction_id: string } } & {
              json: { label: string; prompt: string; source_language?: string | undefined }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { style_id: string; instruction_id: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v3/voice/realtime': {
      $post:
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: VoiceStreamingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-DeepL-Reporting-Tag'?: string | undefined } } & {
              json: {
                message_format?: VoiceMessageFormat | undefined
                source_media_content_type: VoiceSourceMediaContentType
                source_language?: VoiceSourceLanguage | undefined
                source_language_mode?: VoiceSourceLanguageMode | undefined
                target_languages?: VoiceTargetLanguages | undefined
                target_media_languages?: VoiceTargetMediaLanguages | undefined
                target_media_content_type?: VoiceTargetMediaContentType | undefined
                target_media_voice?: VoiceTargetMediaVoice | undefined
                spoken_terms_id?: SpokenTermsId | undefined
                glossary_id?: string | undefined
                glossary_ids?: string[] | undefined
                formality?: VoiceFormality | undefined
              }
            }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { query: { token: string } }
            output: VoiceStreamingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { token: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { token: string } }
            output: ErrorResponse | InfrastructureErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/jobs/voice/translate': {
      $post:
        | {
            input: { query: { include?: 'signed_url'[] | undefined } } & {
              json: VoiceTranslateCreateJobRequest
            }
            output: VoiceTranslateCreateJobResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: 'signed_url'[] | undefined } } & {
              json: VoiceTranslateCreateJobRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { include?: 'signed_url'[] | undefined } } & {
              json: VoiceTranslateCreateJobRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: 'signed_url'[] | undefined } } & {
              json: VoiceTranslateCreateJobRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: 'signed_url'[] | undefined } } & {
              json: VoiceTranslateCreateJobRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/jobs/voice/translate/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } } & {
              query: { include?: 'signed_url'[] | undefined }
            }
            output: VoiceTranslateJobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } } & {
              query: { include?: 'signed_url'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } } & {
              query: { include?: 'signed_url'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } } & {
              query: { include?: 'signed_url'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/quality-evaluations/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } }
            output: QualityEvaluationDone | QualityEvaluationFailed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: QualityEvaluationProcessing
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { job_id: string } }
            output: QualityEvaluationApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_id: string } }
            output: QualityEvaluationApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
