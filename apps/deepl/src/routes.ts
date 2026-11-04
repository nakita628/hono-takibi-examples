import { createRoute, z } from '@hono/zod-openapi'

const ApiKeyIdSchema = z
  .string()
  .openapi({
    description: 'API key ID. Consists of two valid GUIDs separated by a colon.',
    example: 'ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38',
  })
  .openapi('ApiKeyId')

const ApiKeyLabelSchema = z
  .string()
  .openapi({
    description: 'API key label. The default value is `DeepL API Key`.',
    example: 'developer key prod',
  })
  .openapi('ApiKeyLabel')

const ApiKeyUsageCharactersSchema = z
  .number()
  .openapi({
    description:
      'Restricts the number of total characters (across text translation, document translation, and text improvement) that can be consumed by an API key in a one-month usage period.\n\nSetting the limit to `0` means the API key will not be able to consume characters.\nSetting the limit to `null` disables the limit, effectively allowing unlimited usage.\n',
    example: 5000,
  })
  .openapi('ApiKeyUsageCharacters')

const ApiKeyUsageSpeechToTextMillisecondsSchema = z
  .number()
  .openapi({
    description:
      'Restricts the number of milliseconds of speech-to-text that can be consumed by an API key in a one-month usage period.\nSetting the limit to `0` means the API key will not be able to consume speech-to-text milliseconds.\nSetting the limit to `null` disables the limit, effectively allowing unlimited usage.\n',
    example: 3600000,
  })
  .openapi('ApiKeyUsageSpeechToTextMilliseconds')

const ApiKeyUsageSpeechToSpeechMillisecondsSchema = z
  .number()
  .openapi({
    description:
      'Restricts the number of milliseconds of speech-to-speech that can be consumed by an API key in a one-month usage period.\nSetting the limit to `0` means the API key will not be able to consume speech-to-speech milliseconds.\nSetting the limit to `null` disables the limit, effectively allowing unlimited usage.\n',
    example: 3600000,
  })
  .openapi('ApiKeyUsageSpeechToSpeechMilliseconds')

const ApiKeySchema = z
  .object({
    key_id: ApiKeyIdSchema.exactOptional(),
    label: ApiKeyLabelSchema.exactOptional(),
    creation_time: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the key was created (ISO 8601 format)',
        example: '2025-07-08T08:15:29.362Z',
      }),
    deactivated_time: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp when the key was deactivated (ISO 8601 format). The default value is `null`.',
        example: '2025-07-09T08:15:29.362Z',
      }),
    is_deactivated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating whether the API key is deactivated. The default value is `false`.',
        example: true,
      }),
    usage_limits: z
      .object({
        characters: ApiKeyUsageCharactersSchema.exactOptional(),
        speech_to_text_milliseconds: ApiKeyUsageSpeechToTextMillisecondsSchema.exactOptional(),
        speech_to_speech_milliseconds: ApiKeyUsageSpeechToSpeechMillisecondsSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Usage limits for the API key.', required: [] }),
  })
  .openapi({ description: 'The API key.', required: [] })
  .openapi('ApiKey')

const ConfiguredRulesSchema = z
  .object({
    dates_and_times: z
      .object({
        calendar_era: z
          .enum(['use_bc_and_ad', 'use_bce_and_ce'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Calendar Era' }),
        centuries: z
          .enum(['spell_out', 'use_arabic_numerals', 'use_numerals', 'use_roman_numerals'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Centuries' }),
        date_format: z
          .enum([
            'use_dd_period_mm_period_yy_with_leading_zeros_for_single_digit_days_and_months',
            'use_dd_period_mm_period_yyyy',
            'use_dd_period_mm_period_yyyy_with_leading_zeros_for_single_digit_days_and_months',
            'use_dd_period_space_abbreviated_month_yyyy_with_abbreviations_jan_period_feb_period_mrz_period_apr_period_mai_jun_period_jul_period_aug_period_sep_period_okt_period_nov_period_dez_period_without_leading_zeros_for_single_digit_days',
            'use_dd_period_space_abbreviated_month_yyyy_with_abbreviations_jan_period_febr_period_maerz_apr_period_mai_juni_juli_aug_period_sept_period_okt_period_nov_period_dez_period_without_leading_zeros_for_single_digit_days',
            'use_dd_period_space_month_yyyy_without_leading_zeros_for_single_digit_days',
            'use_dd_slash_mm_slash_yyyy',
            'use_dd_slash_mm_slash_yyyy_with_leading_zeros_for_single_digit_days_and_months',
            'use_dd_space_spelled_out_month_space_yyyy',
            'use_dd_space_spelled_out_month_space_yyyy_and_use_spanish_word_septiembre_for_ninth_month',
            'use_dd_space_spelled_out_month_space_yyyy_and_use_spanish_word_setiembre_for_ninth_month',
            'use_dd_space_spelled_out_month_space_yyyy_without_leading_zeros_for_single_digit_days',
            'use_historical_eras_and_write_numbers_in_chinese_followed_by_chinese_word_公元前_or_公元后_with_arabic_numerals_in_parentheses',
            'use_mm_slash_dd_slash_yyyy_with_leading_zeros_for_single_digit_days_and_months',
            'use_numerals_only_with_leading_zero_for_single_digits',
            'use_numerals_only_without_leading_zero_for_single_digits',
            'use_spelled_out_month_space_dd_comma_space_yyyy_and_use_spanish_word_septiembre_for_ninth_month',
            'use_spelled_out_month_space_dd_comma_space_yyyy_without_leading_zeros_for_single_digit_days',
            'use_traditional_calendar_system_with_chinese_numbers',
            'use_yyyy_chinese_word_年_mm_chinese_word_月_dd_chinese_word_日_with_chinese_numbers',
            'use_yyyy_chinese_word_年_mm_chinese_word_月_dd_chinese_word_日_without_leading_zero_for_single_digit_months_and_days',
            'use_yyyy_hyphen_mm_hyphen_dd_with_leading_zero_for_single_digit_days_and_months',
            'use_yyyy_hyphen_mm_hyphen_dd_with_leading_zeros_for_single_digit_days_and_months',
            'use_yyyy_korean word_년_space_mm_korean word_월_space_dd_korean word_일_without_leading_zero_for_single_digit_days_and_months',
            'use_yyyy_period_mm_period_dd',
            'use_yyyy_period_space_mm_period_space_dd_period_space_without_leading_zero_for_single_digit_days_and_months',
            'use_yyyy_slash_mm_slash_dd',
            'use_yyyy_slash_mm_slash_dd_with_leading_zero_for_single_digit_days_and_months',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Date Format' }),
        dates_in_numerical_form: z
          .enum([
            'use_dd_hyphen_mm_hyphen_yyyy',
            'use_dd_period_mm_period_yyyy',
            'use_dd_slash_mm_slash_yyyy',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Dates In Numerical Form' }),
        decades: z
          .enum([
            'spell_out',
            'use_apostrophe_yy',
            'use_yy_for_20th_century_but_yyyy_for_other_centuries',
            'use_yy_without_apostrophe',
            'use_yyyy',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Decades' }),
        hours_minutes_seconds_separator: z
          .enum(['use_colon', 'use_period'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Hours Minutes Seconds Separator' }),
        hours_minutes_separator: z
          .enum([
            'use_colon_without_spaces',
            'use_letter_h_with_regular_space_on_either_side',
            'use_letter_h_without_spaces',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Hours Minutes Separator' }),
        midnight_in_numerals: z
          .enum(['use_00_00', 'use_24_00'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Midnight In Numerals' }),
        single_digit_days_and_months: z
          .enum(['do_not_use_leading_zero', 'use_leading_zero'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Single Digit Days And Months' }),
        single_digit_hours: z
          .enum(['do_not_use_leading_zero', 'use_leading_zero'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Single Digit Hours' }),
        time_format: z
          .enum([
            'spell_out_time_in_words',
            'use_12_hour_clock_and_do_not_specify_morning_or_evening',
            'use_12_hour_clock_and_lowercase_am_or_pm_with_periods',
            'use_12_hour_clock_and_lowercase_am_or_pm_with_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm',
            'use_12_hour_clock_and_lowercase_am_or_pm_without_periods',
            'use_12_hour_clock_and_lowercase_am_or_pm_without_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm',
            'use_12_hour_clock_and_specify_morning_or_evening',
            'use_12_hour_clock_and_uppercase_am_or_pm_with_periods',
            'use_12_hour_clock_and_uppercase_am_or_pm_with_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm',
            'use_12_hour_clock_and_uppercase_am_or_pm_without_periods',
            'use_12_hour_clock_and_uppercase_am_or_pm_without_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm',
            'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals',
            'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals_with_chinese_word_点_for_hours',
            'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals_with_chinese_words_时_and_分_for_hours_and_minutes',
            'use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_chinese_numbers_with_chinese_words_时_and_分_for_hours_and_minutes',
            'use_12_hour_clock_with_arabic_numerals_and_colon',
            'use_12_hour_clock_with_korean_words_시_and_분',
            'use_12_hour_clock_without_leading_zero_or_minutes_for_full_hours_use_colon_as_separator_and_lowercase_am_or_pm_without_periods',
            'use_12_hour_clock_without_leading_zero_or_minutes_for_full_hours_use_colon_as_separator_and_uppercase_am_or_pm_without_periods',
            'use_12_hour_clock_without_leading_zero_use_period_as_separator_and_lowercase_am_or_pm_with_periods_and_spaces',
            'use_24_hour_clock',
            'use_24_hour_clock_with_arabic_numerals_and_colon',
            'use_24_hour_clock_with_colon_as_separator',
            'use_24_hour_clock_with_korean_words_시_and_분',
            'use_24_hour_clock_with_period_as_separator',
            'use_hh_colon_mm_german_word_uhr_with_leading_zeros_for_single_digit_hours',
            'use_hh_colon_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours',
            'use_hh_period_mm_german_word_uhr_with_leading_zeros_for_single_digit_hours',
            'use_hh_period_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours',
            'use_hh_period_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours_and_for_full_hours_state_hour_only',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Time Format' }),
        writing_dates: z
          .enum(['use_dd_space_spelled_out_month_space_yyyy', 'use_numerals'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Writing Dates' }),
        years: z
          .enum(['use_apostrophe_yy', 'use_common_era', 'use_japanese_imperial_era', 'use_yyyy'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Years' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    formatting: z
      .object({
        email_address_format: z
          .enum([
            'place_domain_in_parentheses',
            'replace_at_symbol_with_english_word_at_in_brackets_and_replace_periods_with_english_word_dot_in_brackets',
            'replace_at_symbol_with_english_word_at_in_brackets_with_space_on_either_side',
            'replace_at_symbol_with_english_word_at_in_parentheses_with_space_on_either_side',
            'replace_at_symbol_with_english_word_at_with_space_on_either_side',
            'use_standard_format',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Email Address Format' }),
        phone_number_country_code_format: z
          .enum(['use_00_before_country_code', 'use_plus_sign_before_country_code'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Phone Number Country Code Format' }),
        phone_number_format: z
          .enum([
            'do_not_use_spaces',
            'do_not_use_spaces_or_special_characters_between_digits_of_phone_number',
            'keep_original_format',
            'place_area_code_in_parentheses_followed_by_space',
            'separate_area_code_and_phone_number_with_slash',
            'separate_area_code_and_phone_number_with_space',
            'separate_country_code_area_code_local_prefix_and_last_four_digits_with_hyphens',
            'separate_country_code_area_code_local_prefix_and_last_four_digits_with_periods',
            'separate_country_code_area_code_local_prefix_and_last_four_digits_with_spaces',
            'use_north_american_numbering_plan_format',
            'use_space_after_country_code',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Phone Number Format' }),
        space_between_arabic_numerals_and_unit: z
          .literal('do_not_use')
          .exactOptional()
          .openapi({
            description: 'Formatting options for Space Between Arabic Numerals And Unit',
          }),
        space_between_chinese_and_english: z
          .literal('do_not_use')
          .exactOptional()
          .openapi({ description: 'Formatting options for Space Between Chinese And English' }),
        space_between_chinese_characters_and_arabic_numerals: z
          .literal('do_not_use')
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Space Between Chinese Characters And Arabic Numerals',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    numbers: z
      .object({
        approximate_numbers: z
          .literal('use_kanji_numbers')
          .exactOptional()
          .openapi({ description: 'Formatting options for Approximate Numbers' }),
        currency_format: z
          .enum([
            'spell_out',
            'spell_out_currency_name_followed_by_amount_in_arabic_numerals_without_space',
            'spell_out_currency_name_followed_by_amount_in_chinese',
            'use_amount_followed_by_currency_symbol_without_space',
            'use_amount_followed_by_space_then_currency_symbol',
            'use_amount_followed_by_space_then_iso_code',
            'use_amount_followed_by_space_then_spell_out_currency_name',
            'use_amount_followed_by_space_then_spell_out_currency_name_in_lowercase',
            'use_amount_followed_by_spelled_out_currency_name_in_japanese_without_space',
            'use_amount_followed_by_spelled_out_currency_name_without_space',
            'use_currency_symbol_but_spell_out_if_no_symbol_exists',
            'use_currency_symbol_but_use_iso_code_if_no_symbol_exists',
            'use_currency_symbol_followed_by_amount_in_arabic_numerals_without_space',
            'use_currency_symbol_followed_by_amount_without_space',
            'use_currency_symbol_followed_by_space_then_amount',
            'use_currency_symbol_followed_by_space_then_amount_in_arabic_numerals',
            'use_full_width_currency_symbol_followed_by_amount_without_space',
            'use_half_width_currency_symbol_followed_by_amount_without_space',
            'use_half_width_currency_symbol_followed_by_space_then_amount',
            'use_iso_code',
            'use_iso_code_followed_by_space_then_amount',
            'use_iso_code_followed_by_space_then_amount_in_arabic_numerals',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Currency Format' }),
        decimal_numbers_less_than_one: z
          .literal('always_use_0_before_decimal_separator')
          .exactOptional()
          .openapi({ description: 'Formatting options for Decimal Numbers Less Than One' }),
        decimal_separator: z
          .enum([
            'use_comma_and_do_not_use_thousands_separator',
            'use_comma_as_decimal_separator',
            'use_comma_do_not_use_thousands_separator_and_use_period_only_for_radio_stations',
            'use_period_and_do_not_use_thousands_separator',
            'use_period_as_decimal_separator',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Decimal Separator' }),
        dimensions_separator: z
          .enum([
            'use_multiplication_sign_between_dimensions_with_space_on_either_side',
            'use_multiplication_sign_between_dimensions_without_space_on_either_side',
            'use_x_between_dimensions_with_space_on_either_side',
            'use_x_between_dimensions_without_space_on_either_side',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Dimensions Separator' }),
        equation_formula_reference: z
          .literal('always_use_arabic_numerals_to_number_equations_or_formulas_referenced_in_text')
          .exactOptional()
          .openapi({ description: 'Formatting options for Equation Formula Reference' }),
        kanji_numbers: z
          .literal(
            'use_kanji_numbers_for_numbers_in_phrases_and_counting_method_based_on_native_japanese_readings',
          )
          .exactOptional()
          .openapi({ description: 'Formatting options for Kanji Numbers' }),
        large_number_format: z
          .enum([
            'always_use_arabic_numerals',
            'spell_out_large_numbers',
            'use_abbreviations_for_large_numbers',
            'use_chinese_characters_for_ten_thousands_and_hundred_millions',
            'use_comma_to_separate_large_numbers_into_units_of_three_except_for_calendar_years',
            'use_kanji_for_trillions_hundred_millions_and_ten_thousands',
            'use_korean_words_만_억_조_with_space',
            'use_korean_words_만_억_조_without_space',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Large Number Format' }),
        large_sums_of_money: z
          .enum([
            'spell_out_italian_words_milione_and_miliardo',
            'use_italian_words_mio_and_mrd_instead_of_italian_words_milione_and_miliardo',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Large Sums Of Money' }),
        large_sums_of_money_format: z
          .enum([
            'use_amount_followed_by_abbreviation_for_million_or_billion_without_space',
            'use_amount_followed_by_space_then_abbreviation_for_million_or_billion',
            'use_amount_followed_by_space_then_english_word_million_or_billion',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Large Sums Of Money Format' }),
        list_of_measurements_with_units: z
          .literal('repeat_unit_for_each_measurement_in_list')
          .exactOptional()
          .openapi({ description: 'Formatting options for List Of Measurements With Units' }),
        mathematical_expression_spacing: z
          .literal('use_space_between_elements_of_mathematical_expression_or_equation')
          .exactOptional()
          .openapi({ description: 'Formatting options for Mathematical Expression Spacing' }),
        number_format: z
          .literal(
            'use_half_width_comma_to_separate_large_numbers_into_units_of_three_except_for_calendar_years_and_use_half_width_period_as_decimal_separator',
          )
          .exactOptional()
          .openapi({ description: 'Formatting options for Number Format' }),
        number_separator: z
          .enum([
            'do_not_use_chinese_comma_to_separate_numbers_indicating_approximate_value',
            'use_chinese_comma_to_separate_numbers_in_abbreviations',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Number Separator' }),
        numbers_of_5_digits_or_more: z
          .enum([
            'use_comma_as_decimal_separator_and_period_as_thousands_separator',
            'use_comma_as_decimal_separator_and_space_as_thousands_separator',
            'use_comma_as_decimal_separator_period_as_thousands_separator_and_period_for_radio_stations',
            'use_comma_as_decimal_separator_space_as_thousands_separator_and_period_for_radio_stations',
            'use_period_as_decimal_separator_and_comma_as_thousands_separator',
            'use_period_as_decimal_separator_and_space_as_thousands_separator',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Numbers Of 5 Digits Or More' }),
        numbers_up_to_4_digits: z
          .enum([
            'use_comma_as_decimal_separator_and_period_as_thousands_separator',
            'use_comma_as_decimal_separator_and_space_as_thousands_separator',
            'use_comma_as_decimal_separator_period_as_thousands_separator_and_period_for_radio_stations',
            'use_comma_as_decimal_separator_space_as_thousands_separator_and_period_for_radio_stations',
            'use_period_as_decimal_separator_and_comma_as_thousands_separator',
            'use_period_as_decimal_separator_and_space_as_thousands_separator',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Numbers Up To 4 Digits' }),
        percentage_format: z
          .enum([
            'use_arabic_numerals_followed_by_percent_symbol_without_space',
            'use_chinese_numbers_followed_by_chinese_word_百分之',
            'use_numerals_followed_by_full_width_percent_symbol_without_space',
            'use_numerals_followed_by_japanese_word_パーセント_without_space',
            'use_numerals_followed_by_korean_word_퍼센트',
            'use_numerals_followed_by_percent_symbol',
            'use_numerals_followed_by_space_then_german_word_prozent',
            'use_numerals_followed_by_space_then_half_width_percent_symbol',
            'use_numerals_followed_by_space_then_italian_word_per_cento',
            'use_numerals_followed_by_space_then_italian_word_percento',
            'use_numerals_followed_by_space_then_korean_word_퍼센트',
            'use_numerals_followed_by_space_then_percent_symbol',
            'use_numerals_followed_by_space_then_spell_out_per_cent',
            'use_numerals_followed_by_space_then_spell_out_percent',
            'use_spanish_word_por_cien',
            'use_spanish_word_por_ciento',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Percentage Format' }),
        reference_to_symbol: z
          .literal('spell_out_symbol_name_followed_by_symbol_in_parentheses')
          .exactOptional()
          .openapi({ description: 'Formatting options for Reference To Symbol' }),
        spelling_out_units: z
          .enum([
            'abbreviate_units_of_measure_when_used_with_numeral_but_spell_out_when_used_without_numeral',
            'always_abbreviate_units_of_measure',
            'always_spell_out_units_of_measure',
            'spell_out_units_in_korean',
            'spell_out_units_of_measure_when_used_with_spelled_out_numbers_but_abbreviate_when_used_with_numeral',
            'spell_out_units_of_measure_with_katakana_or_katakana_and_kanji',
            'use_si_symbols',
            'use_unit_symbols',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Spelling Out Units' }),
        temperature_format: z
          .enum([
            'spell_out_unit',
            'spell_out_unit_followed_by_numerals_then_korean_word_도',
            'use_arabic_numerals_followed_by_space_then_spell_out_unit',
            'use_arabic_numerals_followed_by_unit_symbol_without_space',
            'use_arabic_numerals_then_spell_out_unit',
            'use_chinese_numbers_then_spell_out_unit',
            'use_italian_word_grado_and_do_not_specify_temperature_scale',
            'use_numerals_followed_by_japanese_word_度_without_space',
            'use_numerals_followed_by_korean_word_도',
            'use_numerals_followed_by_space_then_spell_out_unit',
            'use_numerals_followed_by_space_then_unit_symbol',
            'use_numerals_followed_by_unit_symbol_without_space',
            'use_spanish_word_grado_and_do_not_specify_temperature_scale',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Temperature Format' }),
        thousands_separator: z
          .enum([
            'do_not_use',
            'do_not_use_thousands_separator',
            'use_comma',
            'use_comma_to_separate_large_numbers_into_units_of_three',
            'use_period',
            'use_period_as_thousands_separator',
            'use_space',
            'use_space_as_thousands_separator',
            'use_space_to_separate_large_numbers_into_units_of_three',
            'use_straight_apostrophe_as_thousands_separator',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Thousands Separator' }),
        units_of_measure_spacing: z
          .enum([
            'do_not_use_space_between_numeral_and_unit_of_measure',
            'use_space_between_numeral_and_unit_of_measure',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Units Of Measure Spacing' }),
        use_of_hiragana_and_kanji: z
          .literal(
            'use_hiragana_japanese_word_か所_or_か月_when_using_arabic_numerals_in_horizontal_writing_but_use_kanji_japanese_word_箇所_or_箇月_when_using_kanji_numbers',
          )
          .exactOptional()
          .openapi({ description: 'Formatting options for Use Of Hiragana And Kanji' }),
        writing_numbers: z
          .enum([
            'always_use_kanji_numbers',
            'use_arabic_numerals',
            'use_full_width_arabic_numerals_and_only_use_kanji_numbers_where_it_would_otherwise_sound_unnatural',
            'use_half_width_arabic_numerals_and_only_use_kanji_numbers_where_it_would_otherwise_sound_unnatural',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Writing Numbers' }),
        zero_format: z
          .enum(['use_chinese_word_〇_for_numbering', 'use_chinese_word_零_for_measurement'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Zero Format' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    punctuation: z
      .object({
        abbreviations: z
          .enum([
            'do_not_separate_abbreviated_words',
            'separate_each_abbreviated_word_with_period_and_space',
            'separate_each_abbreviated_word_with_period_without_space',
            'separate_each_abbreviated_word_with_space_without_period',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Abbreviations' }),
        acronyms: z
          .literal('do_not_use_periods')
          .exactOptional()
          .openapi({ description: 'Formatting options for Acronyms' }),
        ampersand_abbreviation_spacing: z
          .enum([
            'do_not_use_spaces_before_and_after_ampersand_as_part_of_abbreviation',
            'use_spaces_before_and_after_ampersand_as_part_of_abbreviation',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Ampersand Abbreviation Spacing' }),
        ampersand_usage: z
          .enum([
            'use_english_word_and_except_in_company_names_common_abbreviations_titles_software_code_and_mathematical_equations',
            'use_full_width_ampersand',
            'use_german_word_und_except_in_company_names_common_abbreviations_titles_software_code_and_mathematical_equations',
            'use_half_width_ampersand',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Ampersand Usage' }),
        apostrophe: z
          .enum(['use_curly_apostrophes', 'use_straight_apostrophes'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Apostrophe' }),
        bracket: z
          .enum([
            'use_hexagonal_brackets',
            'use_lenticular_brackets',
            'use_parentheses',
            'use_square_brackets_for_nationality_and_hexagonal_brackets_for_historical_period',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Bracket' }),
        chinese_mixed_with_english: z
          .enum(['do_not_place_english_in_quotation_marks', 'place_english_in_quotation_marks'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Chinese Mixed With English' }),
        colon: z
          .enum(['use_full_width_colon', 'use_half_width_colon'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Colon' }),
        colon_between_hours_and_minutes_or_chapters_and_verses: z
          .literal('do_not_use_space_before_or_after_colon')
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Colon Between Hours And Minutes Or Chapters And Verses',
          }),
        colon_in_heading: z
          .literal('use_space_after_colon_not_before')
          .exactOptional()
          .openapi({ description: 'Formatting options for Colon In Heading' }),
        colon_to_replace_versus_or_to: z
          .literal('do_not_use_space_before_or_after_colon')
          .exactOptional()
          .openapi({ description: 'Formatting options for Colon To Replace Versus Or To' }),
        comma_after_conjunctive_adverbs: z
          .enum(['do_not_use', 'use'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Comma After Conjunctive Adverbs' }),
        comma_after_i_e_and_e_g: z
          .enum(['do_not_use', 'use'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Comma After I E And E G' }),
        comma_after_short_introductory_phrase: z
          .enum(['do_not_use', 'use'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Comma After Short Introductory Phrase' }),
        comma_and_semicolon: z
          .enum(['use_comma_between_clauses', 'use_semicolon_between_clauses'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Comma And Semicolon' }),
        corner_bracket_and_periods: z
          .literal('add_period_after_closing_corner_bracket_at_end_of_sentence')
          .exactOptional()
          .openapi({ description: 'Formatting options for Corner Bracket And Periods' }),
        corner_brackets_and_periods: z
          .literal('do_not_add_period_before_closing_corner_bracket_when_sentence_continues')
          .exactOptional()
          .openapi({ description: 'Formatting options for Corner Brackets And Periods' }),
        dash: z
          .enum(['use_em_dash', 'use_hyphen', 'use_tilde'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Dash' }),
        ellipsis: z
          .enum([
            'use_ellipsis_character',
            'use_one_ellipsis_character',
            'use_six_dots_at_the_bottom',
            'use_six_dots_in_the_center',
            'use_three_dots_at_the_bottom',
            'use_three_dots_in_the_center',
            'use_three_ellipsis_characters',
            'use_three_periods',
            'use_three_periods_without_spaces',
            'use_three_spaced_periods',
            'use_two_ellipsis_characters',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Ellipsis' }),
        em_dash: z
          .literal('use_double_em_dash')
          .exactOptional()
          .openapi({ description: 'Formatting options for Em Dash' }),
        emphasis: z
          .literal('use_double_corner_brackets')
          .exactOptional()
          .openapi({ description: 'Formatting options for Emphasis' }),
        exclamation_marks: z
          .literal('do_not_use')
          .exactOptional()
          .openapi({ description: 'Formatting options for Exclamation Marks' }),
        explanatory_note_indicator: z
          .enum(['use_double_em_dash', 'use_parentheses'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Explanatory Note Indicator' }),
        full_sentence_in_round_brackets: z
          .literal('add_period_before_closing_round_bracket')
          .exactOptional()
          .openapi({ description: 'Formatting options for Full Sentence In Round Brackets' }),
        highlighting_specific_expressions: z
          .enum(['use_single_curly_quotation_marks', 'use_single_straight_quotation_marks'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Highlighting Specific Expressions' }),
        japanese_reference_materials: z
          .literal('use_double_corner_brackets')
          .exactOptional()
          .openapi({ description: 'Formatting options for Japanese Reference Materials' }),
        parentheses_for_supplementary_information: z
          .literal('use_parentheses_without_space_on_either_side')
          .exactOptional()
          .openapi({
            description: 'Formatting options for Parentheses For Supplementary Information',
          }),
        passage_of_time_and_movement_between_locations: z
          .literal('use_double_em_dash')
          .exactOptional()
          .openapi({
            description: 'Formatting options for Passage Of Time And Movement Between Locations',
          }),
        periods_and_commas: z
          .enum([
            'use_full_width_japanese_periods_and_full_width_japanese_commas',
            'use_full_width_japanese_periods_and_full_width_non_japanese_commas',
            'use_full_width_non_japanese_periods_and_full_width_japanese_commas',
            'use_full_width_non_japanese_periods_and_full_width_non_japanese_commas',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Periods And Commas' }),
        periods_in_academic_degrees: z
          .enum(['do_not_use', 'use'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Periods In Academic Degrees' }),
        periods_in_direct_quotes: z
          .enum(['do_not_use', 'use'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Periods In Direct Quotes' }),
        periods_in_uppercase_initialisms_and_acronyms: z
          .literal('do_not_use')
          .exactOptional()
          .openapi({
            description: 'Formatting options for Periods In Uppercase Initialisms And Acronyms',
          }),
        plus_sign_usage: z
          .literal(
            'do_not_use_plus_sign_to_symbolize_english_word_and_unless_it_is_part_of_a_proper_noun',
          )
          .exactOptional()
          .openapi({ description: 'Formatting options for Plus Sign Usage' }),
        possessives_of_proper_names_ending_in_s_style: z
          .enum(['add_apostrophe_only', 'add_apostrophe_s'])
          .exactOptional()
          .openapi({
            description: 'Formatting options for Possessives Of Proper Names Ending In S Style',
          }),
        quotation_mark: z
          .enum([
            'use_curly_quotation_marks',
            'use_double_curly_quotation_marks',
            'use_double_straight_quotation_marks',
            'use_guillemets',
            'use_straight_quotation_marks',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Quotation Mark' }),
        quotation_mark_and_apostrophe: z
          .enum([
            'use_curly_quotation_marks_and_apostrophes',
            'use_double_and_single_curly_quotation_marks_and_curly_apostrophes',
            'use_double_and_single_straight_quotation_marks_and_straight_apostrophes',
            'use_guillemets_and_curly_apostrophes',
            'use_guillemets_and_straight_apostrophes',
            'use_straight_quotation_marks_and_apostrophes',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Quotation Mark And Apostrophe' }),
        quotation_style: z
          .enum([
            'use_corner_brackets_for_primary_quotations_and_double_corner_brackets_for_secondary_quotations',
            'use_double_curly_quotation_marks_for_primary_quotations_and_single_curly_quotation_marks_for_secondary_quotations',
            'use_double_curly_quotation_marks_for_primary_quotations_then_alternate_with_single_curly_quotation_marks_for_nested_quotations',
            'use_double_german_quotation_marks_for_primary_quotations_and_single_german_quotation_marks_for_secondary_quotations',
            'use_double_quotation_marks_for_primary_quotations_and_single_quotation_marks_for_secondary_quotations',
            'use_double_straight_quotation_marks_for_primary_quotations_and_single_straight_quotation_marks_for_secondary_quotations',
            'use_double_straight_quotation_marks_for_primary_quotations_then_alternate_with_single_straight_quotation_marks_for_nested_quotations',
            'use_guillemets_for_primary_quotations_and_double_curly_quotation_marks_for_secondary_quotations',
            'use_guillemets_for_primary_quotations_and_double_straight_quotation_marks_for_secondary_quotations',
            'use_guillemets_for_primary_quotations_and_single_guillemets_for_secondary_quotations',
            'use_guillemets_for_primary_quotations_double_curly_quotation_marks_for_secondary_quotations_and_single_curly_quotation_marks_for_further_nested_quotations',
            'use_reversed_guillemets_for_primary_quotations_and_single_reversed_guillemets_for_secondary_quotations',
            'use_single_quotation_marks_for_primary_quotations_and_double_quotation_marks_for_secondary_quotations',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Quotation Style' }),
        range_indicator: z
          .enum([
            'use_en_dash_with_spaces',
            'use_en_dash_without_space_on_either_side',
            'use_en_dash_without_spaces',
            'use_english_word_to',
            'use_full_width_dash',
            'use_full_width_wave_dash',
            'use_german_word_bis',
            'use_half_width_dash',
            'use_hyphen',
            'use_hyphen_with_space_on_either_side',
            'use_hyphen_with_spaces',
            'use_hyphen_without_space_on_either_side',
            'use_hyphen_without_spaces',
            'use_italian_words_da_a',
            'use_japanese_word_から',
            'use_korean_words_부터_까지',
            'use_spanish_words_de_a',
            'use_tilde',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Range Indicator' }),
        related_phrases_indicator: z
          .enum(['use_comma', 'use_hyphen', 'use_middle_dot'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Related Phrases Indicator' }),
        round_brackets: z
          .enum(['use_full_width_round_brackets', 'use_half_width_round_brackets'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Round Brackets' }),
        salutation: z
          .enum([
            'do_not_use_comma_after_salutation_capitalize_following_word',
            'use_colon_after_salutation',
            'use_comma_after_salutation',
            'use_exclamation_mark_after_salutation',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Salutation' }),
        sentence_break_indicator: z
          .enum([
            'use_em_dash_with_space_on_either_side',
            'use_em_dash_without_space_on_either_side',
            'use_en_dash_with_space_on_either_side',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Sentence Break Indicator' }),
        serial_comma: z
          .enum([
            'do_not_use',
            'do_not_use_serial_comma_when_using_chinese_comma',
            'use',
            'use_serial_comma_when_using_comma',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Serial Comma' }),
        setting_off_non_quoted_phrases: z
          .enum(['use_full_width_quotation_marks', 'use_half_width_quotation_marks'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Setting Off Non Quoted Phrases' }),
        slash: z
          .enum([
            'do_not_use_spaces_before_and_after_slashes',
            'use_spaces_before_and_after_slashes',
            'use_spaces_before_and_after_slashes_if_there_are_multiple_words_before_and_after_slash',
            'use_spaces_before_and_after_slashes_if_there_are_multiple_words_before_or_after_slash',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Slash' }),
        slash_usage: z
          .literal('do_not_use_slash_to_symbolize_english_word_or')
          .exactOptional()
          .openapi({ description: 'Formatting options for Slash Usage' }),
        spacing_and_punctuation: z
          .enum(['do_not_use_space', 'use_regular_space'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Spacing And Punctuation' }),
        text_in_round_brackets_referring_to_previous_sentence: z
          .enum([
            'add_period_after_closing_round_bracket',
            'add_period_before_closing_round_bracket',
          ])
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Text In Round Brackets Referring To Previous Sentence',
          }),
        text_in_round_brackets_supplementing_preceding_text: z
          .literal('add_period_after_closing_round_bracket')
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Text In Round Brackets Supplementing Preceding Text',
          }),
        titles_of_books_and_newspapers: z
          .enum([
            'use_double_angle_brackets',
            'use_double_corner_brackets',
            'use_double_straight_quotation_marks',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Titles Of Books And Newspapers' }),
        titles_of_creative_works_trade_names_laws_and_regulations: z
          .enum([
            'use_single_angle_brackets',
            'use_single_corner_brackets',
            'use_single_straight_quotation_marks',
          ])
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Titles Of Creative Works Trade Names Laws And Regulations',
          }),
        uppercase_acronyms: z
          .enum(['do_not_use_spaces', 'use_spaces'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Uppercase Acronyms' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    spelling_and_grammar: z
      .object({
        abbreviating_french_word_numero: z
          .enum([
            'abbreviate_as_n_then_degree_symbol',
            'abbreviate_as_n_then_o_in_superscript',
            'abbreviate_as_no',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Abbreviating French Word Numero' }),
        abbreviation_usage: z
          .enum([
            'do_not_use_abbreviations',
            'do_not_use_abbreviations_unless_necessary',
            'use_abbreviations',
            'use_abbreviations_as_needed',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Abbreviation Usage' }),
        accents_and_cedillas: z
          .enum(['do_not_use_on_capital_letters', 'never_use', 'use_even_on_capital_letters'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Accents And Cedillas' }),
        accents_in_verbs_conjugated_like_french_word_céder: z
          .enum(['use_acute_accent', 'use_grave_accent'])
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Accents In Verbs Conjugated Like French Word Céder',
          }),
        accents_with_subject_verb_inversion: z
          .enum(['use_acute_accent', 'use_grave_accent'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Accents With Subject Verb Inversion' }),
        active_passive_voice: z
          .enum([
            'use_active_voice_if_subject_is_prominent_and_agent_is_clear',
            'use_active_voice_to_describe_operations_with_user_as_subject',
            'use_active_voice_unless_agent_is_unknown_or_irrelevant',
            'use_passive_voice_as_needed',
            'use_passive_voice_for_automatic_operations_from_user_perspective',
            'use_passive_voice_if_agent_is_unknown_or_irrelevant',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Active Passive Voice' }),
        all_caps: z
          .enum([
            'do_not_use_all_caps_except_for_acronyms_initialisms_or_proper_nouns',
            'do_not_use_all_caps_except_for_acronyms_or_brand_names',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for All Caps' }),
        complete_sentences: z
          .literal('always_write_complete_sentences')
          .exactOptional()
          .openapi({ description: 'Formatting options for Complete Sentences' }),
        compound_nouns: z
          .enum(['write_as_one_word', 'write_with_hyphen'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Compound Nouns' }),
        conjunctions: z
          .literal('never_start_sentence_with_coordinating_conjunction')
          .exactOptional()
          .openapi({ description: 'Formatting options for Conjunctions' }),
        contractions: z
          .enum([
            'do_not_use_contractions',
            'use_contractions',
            'use_contractions_but_avoid_negative_contractions',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Contractions' }),
        established_loanwords: z
          .enum(['use_as_is', 'use_native_or_sino_korean_equivalents'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Established Loanwords' }),
        eszett: z
          .literal('replace_eszett_with_ss')
          .exactOptional()
          .openapi({ description: 'Formatting options for Eszett' }),
        foreign_word_translation: z
          .enum([
            'use_equivalent_expressions_in_chinese',
            'use_foreign_forms_or_abbreviations_for_technical_terms_or_brand_names',
            'use_literal_translation',
            'use_localized_names_for_brands_with_official_chinese_translations',
            'use_mixture_of_transliteration_and_translation',
            'use_transliteration',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Foreign Word Translation' }),
        french_verbs_ending_in_eler_and_eter: z
          .enum([
            'transcribe_open_e_sound_by_doubling_next_consonant',
            'transcribe_open_e_sound_with_grave_accent',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for French Verbs Ending In Eler And Eter' }),
        i_and_u_with_circumflex_accents: z
          .enum([
            'do_not_use_circumflex_accents_except_in_verbs_and_to_distinguish_homophones',
            'use_circumflex_accents',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for I And U With Circumflex Accents' }),
        informal_address_pronouns: z
          .enum([
            'capitalize_informal_address_pronouns',
            'do_not_capitalize_informal_address_pronouns',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Informal Address Pronouns' }),
        latin_abbreviations: z
          .literal('do_not_use_latin_abbreviations')
          .exactOptional()
          .openapi({ description: 'Formatting options for Latin Abbreviations' }),
        passive_voice: z
          .literal('avoid_passive_voice_when_agent_is_known')
          .exactOptional()
          .openapi({ description: 'Formatting options for Passive Voice' }),
        past_participle_of_french_word_laisser_followed_by_infinitive: z
          .enum([
            'make_french_word_laisser_agree_with_direct_object_complement_if_it_appears_before_verb',
            'use_invariable_form_french_word_laissé',
          ])
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Past Participle Of French Word Laisser Followed By Infinitive',
          }),
        personal_titles: z
          .enum(['abbreviate', 'do_not_abbreviate'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Personal Titles' }),
        pluralizing_foreign_words: z
          .enum(['use_french_spelling_rules', 'use_original_language_spelling'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Pluralizing Foreign Words' }),
        quotation_modification: z
          .enum([
            'do_not_modify_text_in_quotation_marks',
            'modify_text_in_quotation_marks_according_to_custom_rules',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Quotation Modification' }),
        spanish_word_solo: z
          .enum(['never_use_acute_accent', 'use_acute_accent_when_used_as_adverb'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Spanish Word Solo' }),
        special_characters: z
          .literal('never_use_symbols')
          .exactOptional()
          .openapi({ description: 'Formatting options for Special Characters' }),
        spelled_out_numbers: z
          .enum([
            'use_hyphens',
            'use_hyphens_between_elements_under_100_and_not_separated_by_french_word_et',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Spelled Out Numbers' }),
        umlauts: z
          .literal('replace_umlauts_with_ae_oe_ue')
          .exactOptional()
          .openapi({ description: 'Formatting options for Umlauts' }),
        unestablished_loanwords: z
          .enum(['paraphrase_in_korean', 'use_as_is', 'use_as_is_with_explanation_in_parentheses'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Unestablished Loanwords' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    style_and_tone: z
      .object({
        abbreviations: z
          .enum([
            'avoid_abbreviations_and_symbols_that_can_be_spelled_out_easily',
            'use_abbreviations_and_symbols',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Abbreviations' }),
        addressing_non_binary_people: z
          .enum(['use_spanish_word_elle', 'use_spanish_word_ellx'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Addressing Non Binary People' }),
        addressing_the_reader: z
          .enum([
            'use_formal_french_word_vous',
            'use_formal_italian_word_lei',
            'use_informal_french_word_tu',
            'use_informal_italian_word_tu',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Addressing The Reader' }),
        anglicisms: z
          .literal('avoid_anglicisms_when_there_is_a_french_equivalent')
          .exactOptional()
          .openapi({ description: 'Formatting options for Anglicisms' }),
        binary_representation_of_gender: z
          .enum([
            'avoid_binary_representation_of_gender_when_gender_neutral_language_can_be_used',
            'replace_binary_representations_of_gender_with_gender_neutral_language',
            'use_neutral_pronouns',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Binary Representation Of Gender' }),
        complex_sentences: z
          .literal('avoid_unnecessarily_complex_sentences')
          .exactOptional()
          .openapi({ description: 'Formatting options for Complex Sentences' }),
        country_names: z
          .enum(['use_long_form', 'use_short_form'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Country Names' }),
        declarative_endings: z
          .enum([
            'mix_hapsho_and_haeyo_styles',
            'use_hae_style',
            'use_haeyo_style',
            'use_hapsho_style',
            'use_hara_style',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Declarative Endings' }),
        default_first_person_pronoun: z
          .enum([
            'do_not_use_first_person_pronouns',
            'omit_first_person_subject_when_clear_from_context',
            'use_first_person_pronouns',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Default First Person Pronoun' }),
        default_second_person_pronoun: z
          .enum(['do_not_use_second_person_pronouns', 'use_second_person_pronouns'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Default Second Person Pronoun' }),
        directional_language: z
          .literal('do_not_use_directional_language')
          .exactOptional()
          .openapi({ description: 'Formatting options for Directional Language' }),
        double_negatives: z
          .enum(['do_not_use_double_negatives', 'use_double_negatives'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Double Negatives' }),
        formality: z
          .enum(['use_casual_tone', 'use_formal_tone'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Formality' }),
        gender_neutral_language_readability: z
          .literal('use_generic_masculine_for_common_compound_nouns_if_it_increases_readability')
          .exactOptional()
          .openapi({ description: 'Formatting options for Gender Neutral Language Readability' }),
        gender_unspecified: z
          .enum([
            'use_both_masculine_and_feminine_forms',
            'use_gender_neutral_terms',
            'use_masculine_form_only',
            'use_middle_dots',
            'use_parentheses',
            'use_periods',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Gender Unspecified' }),
        gender_unspecified_or_mixed: z
          .enum([
            'use_both_feminine_and_masculine_forms',
            'use_feminine_form_only',
            'use_inclusive_nouns_and_adjectives',
            'use_masculine_form_only',
            'use_neutral_nouns_and_adjectives',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Gender Unspecified Or Mixed' }),
        idioms_colloquialisms_and_culture_specific_references: z
          .literal('do_not_use')
          .exactOptional()
          .openapi({
            description:
              'Formatting options for Idioms Colloquialisms And Culture Specific References',
          }),
        inflected_words_masculine_noun_agreement: z
          .literal('place_masculine_nouns_closest_to_inflected_words')
          .exactOptional()
          .openapi({
            description: 'Formatting options for Inflected Words Masculine Noun Agreement',
          }),
        instructions_style: z
          .enum([
            'use_imperative',
            'use_indicative',
            'use_infinitive',
            'use_modal_verbs',
            'use_passive_voice',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Instructions Style' }),
        mixing_styles: z
          .literal('do_not_mix_desu_masu_style_and_dearu_style')
          .exactOptional()
          .openapi({ description: 'Formatting options for Mixing Styles' }),
        modal_verbs: z
          .literal('avoid_modal_verbs')
          .exactOptional()
          .openapi({ description: 'Formatting options for Modal Verbs' }),
        personal_vs_impersonal_style: z
          .enum(['use_impersonal_style', 'use_personal_style'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Personal Vs Impersonal Style' }),
        positive_vs_negative_language: z
          .literal('use_positive_language')
          .exactOptional()
          .openapi({ description: 'Formatting options for Positive Vs Negative Language' }),
        proximity_agreement: z
          .literal('use')
          .exactOptional()
          .openapi({ description: 'Formatting options for Proximity Agreement' }),
        reader_action_required: z
          .literal('use_you_must_when_action_is_required_from_reader')
          .exactOptional()
          .openapi({ description: 'Formatting options for Reader Action Required' }),
        redundant_introductory_phrases: z
          .enum([
            'avoid_redundant_introductory_phrases',
            'do_not_use_redundant_phrases_that_refer_to_current_text',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Redundant Introductory Phrases' }),
        redundant_phrases: z
          .enum(['avoid_relativizing_and_redundant_phrases', 'do_not_use_redundant_phrases'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Redundant Phrases' }),
        referring_to_non_binary_people: z
          .literal('use_the_singular_and_plural_schwa')
          .exactOptional()
          .openapi({ description: 'Formatting options for Referring To Non Binary People' }),
        short_vs_long_words: z
          .literal('use_short_words')
          .exactOptional()
          .openapi({ description: 'Formatting options for Short Vs Long Words' }),
        simple_words_and_sentences: z
          .literal(
            'use_simple_words_and_sentences_avoid_hard_to_translate_words_and_figures_of_speech',
          )
          .exactOptional()
          .openapi({ description: 'Formatting options for Simple Words And Sentences' }),
        text_position_references: z
          .literal(
            'avoid_directional_terms_as_only_reference_to_position_in_text_specify_exact_position_instead',
          )
          .exactOptional()
          .openapi({ description: 'Formatting options for Text Position References' }),
        tone: z
          .enum([
            'use_dearu_style_to_give_impression_content_is_accurate_and_rigorous_or_to_convey_sense_of_confidence_and_reliability',
            'use_desu_masu_style_to_give_impression_content_is_plain_and_straightforward_or_to_give_reader_reassuring_or_soft_impression',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Tone' }),
        verbal_vs_nominal_style: z
          .enum(['use_nominal_style', 'use_verbal_style'])
          .exactOptional()
          .openapi({ description: 'Formatting options for Verbal Vs Nominal Style' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    vocabulary: z
      .object({
        abbreviations: z
          .literal('write_original_term_then_abbreviation_and_explanation')
          .exactOptional()
          .openapi({ description: 'Formatting options for Abbreviations' }),
        loanwords: z
          .enum([
            'add_explanation_to_loanword_if_difficult_to_rephrase',
            'rephrase_loanword_in_daily_use_chinese_or_japanese_words_if_possible',
            'rephrase_loanword_with_another_expression_if_not_established',
            'use_loanword_as_is_if_well_established',
          ])
          .exactOptional()
          .openapi({ description: 'Formatting options for Loanwords' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'The enabled rules for the style rule list including what option was selected for each rule. This schema combines rules from all supported languages.',
    example: {
      style_and_tone: {
        abbreviations: 'use_abbreviations_and_symbols',
        short_vs_long_words: 'use_short_words',
      },
      punctuation: { apostrophe: 'use_curly_apostrophes' },
    },
    required: [],
  })
  .openapi('ConfiguredRules')

const ContextSchema = z
  .string()
  .openapi({
    description:
      'Additional context that can influence a translation but is not translated itself.\n\nCharacters included in the `context` parameter will not be counted toward billing.',
    example: 'This is context.',
  })
  .openapi('Context')

const GlossarySourceLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'tr',
    'uk',
    'vi',
    'zh',
  ])
  .openapi({
    description: 'The language in which the source texts in the glossary are specified.',
    example: 'en',
  })
  .openapi('GlossarySourceLanguage')

const GlossaryTargetLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'tr',
    'uk',
    'vi',
    'zh',
  ])
  .openapi({
    description: 'The language in which the target texts in the glossary are specified.',
    example: 'de',
  })
  .openapi('GlossaryTargetLanguage')

const CreateGlossaryParametersSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Name to be associated with the glossary.', example: 'My Glossary' }),
    source_lang: GlossarySourceLanguageSchema,
    target_lang: GlossaryTargetLanguageSchema,
    entries: z
      .string()
      .openapi({
        description:
          'The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.',
        example: 'Hello\tGuten Tag',
      }),
    entries_format: z
      .enum(['tsv', 'csv'])
      .default('tsv')
      .openapi({
        description:
          'The format in which the glossary entries are provided. Formats currently available:\n- `tsv` (default) - tab-separated values\n- `csv` - comma-separated values\n\nSee [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.',
        example: 'tsv',
      }),
  })
  .openapi({ required: ['name', 'source_lang', 'target_lang', 'entries', 'entries_format'] })
  .openapi('CreateGlossaryParameters')

const MultilingualGlossaryTargetLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'cs',
    'da',
    'de',
    'de-CH',
    'de-DE',
    'el',
    'en',
    'en-GB',
    'en-US',
    'es',
    'es-419',
    'es-ES',
    'et',
    'fi',
    'fr',
    'fr-CA',
    'fr-FR',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt',
    'pt-BR',
    'pt-PT',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'tr',
    'uk',
    'vi',
    'zh',
    'zh-Hans',
    'zh-Hant',
  ])
  .openapi({
    description:
      'The language in which the target texts in the dictionary are specified. Besides the base languages, the\ntarget can be one of these variants: `de-CH`, `de-DE`, `en-GB`, `en-US`, `es-419`, `es-ES`, `fr-CA`,\n`fr-FR`, `pt-BR`, `pt-PT`, `zh-Hans`, or `zh-Hant`. Source languages are always base languages. The current\nlist is returned by `GET /v3/languages?resource=glossary`.\n\nA dictionary with a base target, such as `de`, applies when translating into that language and any of its\nvariants. A dictionary with a variant target, such as `de-CH`, applies only when translating into that\nexact variant.\n\nWithin one glossary, each language family uses either the base language or its variants as targets, not\nboth. For example, `de-CH` and `de-DE` can be combined, but `de` and `de-DE` cannot. Adding a dictionary\nthat breaks this rule returns a 400 error.',
    example: 'de',
  })
  .openapi('MultilingualGlossaryTargetLanguage')

const GlossaryEntriesSchema = z
  .string()
  .openapi({
    description:
      'The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.',
    example: 'Hello\tGuten Tag',
  })
  .openapi('GlossaryEntries')

const GlossaryEntriesFormatSchema = z
  .enum(['tsv', 'csv'])
  .default('tsv')
  .openapi({
    description:
      'The format in which the glossary entries are provided. Formats currently available:\n- `tsv` (default) - tab-separated values\n- `csv` - comma-separated values\n\nSee [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.',
    example: 'tsv',
  })
  .openapi('GlossaryEntriesFormat')

const GlossaryEntryCountSchema = z
  .int()
  .openapi({ description: 'The number of entries in the glossary.' })
  .openapi('GlossaryEntryCount')

const GlossaryDictionarySchema = z
  .object({
    source_lang: GlossarySourceLanguageSchema.exactOptional(),
    target_lang: MultilingualGlossaryTargetLanguageSchema.exactOptional(),
    entries: GlossaryEntriesSchema.exactOptional(),
    entries_format: GlossaryEntriesFormatSchema.exactOptional(),
    entry_count: GlossaryEntryCountSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    description:
      'A dictionary contained in a multilingual glossary. Each dictionary contains the mapping of source terms to target language terms.',
    required: [],
  })
  .openapi('GlossaryDictionary')

const CreateMultilingualGlossaryParametersSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Name to be associated with the glossary.', example: 'My Glossary' }),
    dictionaries: z
      .array(GlossaryDictionarySchema)
      .openapi({ description: 'Dictionaries to populate the glossary with.' }),
  })
  .openapi({ required: ['name', 'dictionaries'] })
  .openapi('CreateMultilingualGlossaryParameters')

const CustomInstructionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the custom instruction',
        example: '68fdb803-c013-4e67-b62e-1aad0ab519cd',
      }),
    label: z
      .string()
      .openapi({
        description: 'Name associated with the custom instruction',
        example: 'Currency custom instruction',
      }),
    prompt: z
      .string()
      .openapi({
        description: 'Prompt of the custom instruction',
        example: 'Have currency symbols before the numerical value (e.g. $100, €100)',
      }),
    source_language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional source language of the custom instruction',
        example: 'en',
      }),
  })
  .openapi({
    description: 'All enabled custom instructions for the style rule list',
    required: ['id', 'label', 'prompt'],
  })
  .openapi('CustomInstruction')

const StyleProfileIdSchema = z
  .uuid()
  .openapi({
    description: 'A unique ID assigned to a style profile.',
    example: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
  })
  .openapi('StyleProfileId')

const StyleProfileSchema = z
  .object({
    style_profile_id: StyleProfileIdSchema,
    name: z
      .string()
      .openapi({
        description: 'Name associated with the style profile. At most 255 characters.',
        example: 'Legal, German',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free-text description of the style profile. At most 1000 characters. Omitted from the response\nwhen the style profile has no description.',
        example: 'Contract wording for the German market.',
      }),
    industry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The industry the style profile is written for. At most 255 characters. Omitted from the response\nwhen the style profile has no industry.',
        example: 'Legal',
      }),
    glossary_ids: z
      .array(z.uuid())
      .openapi({
        description:
          'The IDs of the glossaries linked to the style profile, highest priority first. The order only\ntakes effect with `glossary_priority_order_enabled`.',
        example: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
      }),
    style_rule_ids: z
      .array(z.uuid())
      .openapi({
        description:
          'The IDs of the style rule lists linked to the style profile. A style profile links at most one\nstyle rule list per target language.',
        example: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
      }),
    translation_memory_ids: z
      .array(z.uuid())
      .openapi({
        description:
          'The IDs of the translation memories linked to the style profile. A style profile links at most\none translation memory per source language.',
        example: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
      }),
    glossary_priority_order_enabled: z
      .boolean()
      .openapi({
        description:
          'Whether the order of `glossary_ids` sets priority: when two linked glossaries define the same\nsource term, the one listed first wins. When `false`, the order has no effect.',
        example: true,
      }),
    creation_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The creation time of the style profile in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
        example: '2026-04-01T16:34:25.223Z',
      }),
    updated_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time of the last update to the style profile in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
        example: '2026-08-06T09:12:44.108Z',
      }),
  })
  .openapi({
    required: [
      'style_profile_id',
      'name',
      'glossary_ids',
      'style_rule_ids',
      'translation_memory_ids',
      'glossary_priority_order_enabled',
      'creation_time',
      'updated_time',
    ],
  })
  .openapi('StyleProfile')

const StyleIdSchema = z
  .string()
  .openapi({
    description: 'A unique ID assigned to a style rule list.',
    example: 'bd0a38f3-1831-440b-a8dd-2c702e2325ab',
  })
  .openapi('StyleId')

const StyleRuleNameSchema = z
  .string()
  .openapi({ description: 'Name associated with the style rule list.' })
  .openapi('StyleRuleName')

const StyleRuleLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'cs',
    'da',
    'de',
    'de-CH',
    'de-DE',
    'el',
    'en',
    'en-GB',
    'en-US',
    'es',
    'es-419',
    'es-ES',
    'et',
    'fi',
    'fr',
    'fr-CA',
    'fr-FR',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt',
    'pt-BR',
    'pt-PT',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh',
    'zh-Hans',
    'zh-Hant',
  ])
  .openapi({
    description:
      'The target language the style rule list applies to. Codes are matched case-insensitively;\nthe response returns the canonical form (for example `de-CH`).\n\nA root code (for example `en`) applies to that language and all of its variants. A variant\ncode (for example `en-GB`) applies only when `target_lang` is that variant.\n\nVariant lists for `de-CH`, `fr-CA`, `pt-BR`, and `pt-PT` are generally available. Variant\nlists for `de-DE`, `en-GB`, `en-US`, `es-419`, `es-ES`, `fr-FR`, `zh-Hans`, and `zh-Hant`\nare in beta. The current list and the status of each language are returned by\n[`GET /v3/languages?resource=style_rules&include=beta`](/docs/languages/using-the-languages-api).',
  })
  .openapi('StyleRuleLanguage')

const StyleRuleListSchema = z
  .object({
    style_id: StyleIdSchema,
    name: StyleRuleNameSchema,
    creation_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The creation time of the style rule list in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
      }),
    updated_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time of the style rule list when it was last updated in the ISO 8601-1:2019 format (e.g.: `2022-08-03T14:16:18.329Z`).',
      }),
    language: StyleRuleLanguageSchema,
    version: z
      .int()
      .openapi({
        description:
          'The version of the style rule list. Incremented when the style rule list is updated.',
        example: 13,
      }),
    configured_rules: ConfiguredRulesSchema.exactOptional(),
    custom_instructions: z
      .array(CustomInstructionSchema)
      .exactOptional()
      .openapi({ description: 'List of custom instructions enabled for the style rule list.' }),
  })
  .openapi({
    required: ['style_id', 'name', 'creation_time', 'updated_time', 'language', 'version'],
  })
  .openapi('StyleRuleList')

const DocumentTranslationErrorSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'detailed error message' }),
  })
  .openapi({ required: [] })
  .openapi('DocumentTranslationError')

const DocumentKeySchema = z
  .object({
    document_key: z
      .string()
      .openapi({
        description:
          'The document encryption key that was sent to the client when the document was uploaded to the API.',
        example: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
      }),
  })
  .openapi({ required: ['document_key'] })
  .openapi('DocumentKey')

const FormalitySchema = z
  .enum(['default', 'more', 'less', 'prefer_more', 'prefer_less'])
  .default('default')
  .openapi({
    description:
      'Sets whether the translated text should lean towards formal or informal language.\nThis feature is only available for certain target languages. Setting this parameter\nwith a target language that does not support formality will fail, unless one of the\n`prefer_...` options are used.\nPossible options are:\n  * `default` (default)\n  * `more` - for a more formal language\n  * `less` - for a more informal language\n  * `prefer_more` - for a more formal language if available, otherwise fallback to default formality\n  * `prefer_less` - for a more informal language if available, otherwise fallback to default formality',
    example: 'prefer_more',
  })
  .openapi('Formality')

const GlossaryIdSchema = z
  .string()
  .openapi({
    description: 'A unique ID assigned to a glossary.',
    example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
  })
  .openapi('GlossaryId')

const GlossaryNameSchema = z
  .string()
  .openapi({ description: 'Name associated with the glossary.' })
  .openapi('GlossaryName')

const SpokenTermsIdSchema = z
  .uuid()
  .openapi({
    description: '(beta) The ID of a Spoken Terms collection used to inform transcription.',
    example: '7c4f1080-cfe2-41d4-8269-0e6ec15a0354',
  })
  .openapi('SpokenTermsId')

const ModelTypeSchema = z
  .enum(['quality_optimized', 'prefer_quality_optimized', 'latency_optimized'])
  .openapi({ description: 'Specifies which DeepL model should be used for translation.' })
  .openapi('ModelType')

const MonolingualGlossarySchema = z
  .object({
    glossary_id: GlossaryIdSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name associated with the glossary.' }),
    ready: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the newly created glossary can already be used in `translate` requests.\nIf the created glossary is not yet ready, you have to wait and check the `ready` status\nof the glossary before using it in a `translate` request.',
      }),
    source_lang: GlossarySourceLanguageSchema.exactOptional(),
    target_lang: GlossaryTargetLanguageSchema.exactOptional(),
    creation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The creation time of the glossary in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
      }),
    entry_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of entries in the glossary.' }),
  })
  .openapi({
    example: {
      glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
      ready: true,
      name: 'My Glossary',
      source_lang: 'en',
      target_lang: 'de',
      creation_time: '2021-08-03T14:16:18.329Z',
      entry_count: 1,
    },
    required: [],
  })
  .openapi('MonolingualGlossary')

const MultilingualGlossarySchema = z
  .object({
    glossary_id: GlossaryIdSchema.exactOptional(),
    name: GlossaryNameSchema.exactOptional(),
    dictionaries: z
      .array(GlossaryDictionarySchema)
      .exactOptional()
      .openapi({
        description:
          'List of dictionaries contained in this glossary.\nEach dictionary contains a source and target language, as well as pairs of source and target entries.',
      }),
    creation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The creation time of the glossary in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
      }),
  })
  .openapi({
    example: {
      glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
      name: 'My Glossary',
      dictionaries: [{ source_lang: 'en', target_lang: 'de', entry_count: 1 }],
      creation_time: '2021-08-03T14:16:18.329Z',
    },
    required: [],
  })
  .openapi('MultilingualGlossary')

const MultilingualGlossaryEntriesSchema = z
  .object({
    source_lang: GlossarySourceLanguageSchema.exactOptional(),
    target_lang: MultilingualGlossaryTargetLanguageSchema.exactOptional(),
    entries: GlossaryEntriesSchema.exactOptional(),
    entries_format: GlossaryEntriesFormatSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultilingualGlossaryEntries')

const MultilingualGlossaryEntriesInformationSchema = z
  .object({
    source_lang: GlossarySourceLanguageSchema.exactOptional(),
    target_lang: MultilingualGlossaryTargetLanguageSchema.exactOptional(),
    entry_count: GlossaryEntryCountSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultilingualGlossaryEntriesInformation')

const MultilingualGlossaryEntriesResponseSchema = z
  .object({ dictionaries: z.array(MultilingualGlossaryEntriesInformationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('MultilingualGlossaryEntriesResponse')

const OutlineDetectionOptionSchema = z
  .boolean()
  .default(true)
  .openapi({
    description:
      'Disable the automatic detection of XML structure by setting the `outline_detection` parameter\nto `false` and selecting the tags that should be considered structure tags. This will split sentences\nusing the `splitting_tags` parameter.',
  })
  .openapi('OutlineDetectionOption')

const OutlineDetectionOptionStrSchema = z
  .enum(['0', '1'])
  .default('1')
  .openapi({
    description:
      'Disable the automatic detection of XML structure by setting the `outline_detection` parameter\nto `false` and selecting the tags that should be considered structure tags. This will split sentences\nusing the `splitting_tags` parameter.',
  })
  .openapi('OutlineDetectionOptionStr')

const PatchMultilingualGlossaryParametersSchema = z
  .object({
    name: GlossaryIdSchema.exactOptional(),
    dictionaries: z
      .array(GlossaryDictionarySchema)
      .exactOptional()
      .openapi({
        description:
          'Dictionaries to edit the glossary with. Currently only supports 0 or 1 dictionaries in the array.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchMultilingualGlossaryParameters')

const SpokenTermsListInputSchema = z
  .object({
    lang: z
      .string()
      .openapi({ description: 'Language code (ISO 639-1) for this term list.', example: 'en' }),
    entries: z
      .string()
      .max(300)
      .openapi({
        description:
          'Newline-separated list of terms, one term per line. Maximum 300 characters total.\n\nTerms are case-sensitive. Each term must be non-empty, must not contain C0 or C1 control characters (such as tabs or newlines within a term), and must not have leading or trailing whitespace. Duplicate terms within a list are not allowed (comparison is case-sensitive).\n',
        example: 'DeepL\nAPI\nwebhook',
      }),
  })
  .openapi({ required: ['lang', 'entries'] })
  .openapi('SpokenTermsListInput')

const CreateSpokenTermsParametersSchema = z
  .object({
    name: z
      .string()
      .max(1024)
      .openapi({
        description: 'Name for the Spoken Terms collection.',
        example: 'Technical Terms',
      }),
    term_lists: z
      .array(SpokenTermsListInputSchema)
      .openapi({ description: 'Array of term lists, one per language.' }),
  })
  .openapi({ required: ['name', 'term_lists'] })
  .openapi('CreateSpokenTermsParameters')

const PatchSpokenTermsParametersSchema = z
  .object({
    name: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({
        description: 'New name for the Spoken Terms collection.',
        example: 'Updated Technical Terms',
      }),
    term_lists: z
      .array(SpokenTermsListInputSchema)
      .exactOptional()
      .openapi({ description: 'Term lists to merge with existing lists.' }),
  })
  .openapi({ required: [] })
  .openapi('PatchSpokenTermsParameters')

const PutSpokenTermsListParametersSchema = z
  .object({
    lang: z
      .string()
      .openapi({ description: 'Language code (ISO 639-1) for this term list.', example: 'en' }),
    entries: z
      .string()
      .max(300)
      .openapi({
        description:
          'Newline-separated list of terms, one term per line. Maximum 300 characters total.\n\nTerms are case-sensitive. Each term must be non-empty, must not contain C0 or C1 control characters (such as tabs or newlines within a term), and must not have leading or trailing whitespace. Duplicate terms within a list are not allowed (comparison is case-sensitive).\n',
        example: 'DeepL\nAPI\nwebhook\nintegration',
      }),
  })
  .openapi({ required: ['lang', 'entries'] })
  .openapi('PutSpokenTermsListParameters')

const SpokenTermsListSchema = z
  .object({
    lang: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code (ISO 639-1).', example: 'en' }),
    entry_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of terms in this list.', example: 3 }),
  })
  .openapi({ required: [] })
  .openapi('SpokenTermsList')

const SpokenTermsSchema = z
  .object({
    spoken_terms_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique ID assigned to the Spoken Terms collection.',
        example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Spoken Terms collection.', example: 'Technical Terms' }),
    term_lists: z
      .array(SpokenTermsListSchema)
      .exactOptional()
      .openapi({ description: 'List of term lists contained in this collection.' }),
    creation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The creation time of the Spoken Terms collection in ISO 8601-1:2019 format (e.g.: `2025-08-03T14:16:18.329Z`).',
        example: '2025-08-03T14:16:18.329Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpokenTerms')

const SpokenTermsEntriesSchema = z
  .object({
    lang: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code (ISO 639-1).', example: 'en' }),
    entries: z
      .string()
      .exactOptional()
      .openapi({ description: 'Newline-separated list of terms.', example: 'DeepL\nAPI\nwebhook' }),
  })
  .openapi({ required: [] })
  .openapi('SpokenTermsEntries')

const PreserveFormattingOptionSchema = z
  .boolean()
  .default(false)
  .openapi({
    description:
      'Sets whether the translation engine should respect the original formatting, even if it would usually\ncorrect some aspects.',
  })
  .openapi('PreserveFormattingOption')

const PreserveFormattingOptionStrSchema = z
  .enum(['0', '1'])
  .default('0')
  .openapi({
    description:
      'Sets whether the translation engine should respect the original formatting, even if it would usually\ncorrect some aspects.',
  })
  .openapi('PreserveFormattingOptionStr')

const ShowBilledCharactersSchema = z
  .boolean()
  .openapi({
    description:
      'When true, the response will include the billed_characters parameter, giving the\nnumber of characters from the request that will be counted by DeepL for billing purposes.',
  })
  .openapi('ShowBilledCharacters')

const SplitSentencesOptionSchema = z
  .enum(['0', '1', 'nonewlines'])
  .default('1')
  .openapi({
    description:
      'Sets whether the translation engine should first split the input into sentences.\n\nPossible values are:\n  * 0 - no splitting at all, whole input is treated as one sentence\n  * 1 (default when tag_handling is not set to html) - splits on punctuation and on newlines\n  * nonewlines (default when tag_handling=html) - splits on punctuation only, ignoring newlines',
    example: '1',
  })
  .openapi('SplitSentencesOption')

const SourceLanguageSchema = z
  .string()
  .openapi({
    description:
      'Language of the text to be translated. If this parameter is omitted, the API will attempt to\ndetect the language of the text and translate it.\n\nFor the full list of supported source languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).',
    example: 'EN',
  })
  .openapi('SourceLanguage')

const TranslationMemoryIdSchema = z
  .uuid()
  .openapi({
    description: 'A unique ID assigned to a translation memory.',
    example: 'a74d88fb-ed2a-4943-a664-a4512398b994',
  })
  .openapi('TranslationMemoryId')

const TranslationMemorySourceLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh',
  ])
  .openapi({ description: 'The source language of the translation memory.', example: 'en' })
  .openapi('TranslationMemorySourceLanguage')

const TranslationMemoryTargetLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'cs',
    'da',
    'de',
    'de-ch',
    'de-de',
    'el',
    'en',
    'en-gb',
    'en-us',
    'es',
    'es-419',
    'es-es',
    'et',
    'fi',
    'fr',
    'fr-ca',
    'fr-fr',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt-br',
    'pt-pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh',
    'zh-hans',
    'zh-hant',
  ])
  .openapi({
    description:
      "The list of target languages available in the translation memory. A translation memory's target language must be compatible with the `target_lang` specified in a translation request.",
    example: 'es',
  })
  .openapi('TranslationMemoryTargetLanguage')

const TranslationMemorySchema = z
  .object({
    translation_memory_id: TranslationMemoryIdSchema,
    name: z
      .string()
      .openapi({ description: 'Name associated with the translation memory.', example: 'Legal' }),
    source_language: TranslationMemorySourceLanguageSchema,
    target_languages: z
      .array(TranslationMemoryTargetLanguageSchema)
      .openapi({
        description: 'The list of target languages available in the translation memory.',
        example: ['es', 'de'],
      }),
    segment_count: z
      .int()
      .openapi({
        description: 'The number of segments stored in the translation memory.',
        example: 34,
      }),
    creation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The creation time of the translation memory in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
        example: '2026-04-01T16:34:25.223Z',
      }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time of the last update to the translation memory in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).',
        example: '2026-04-01T16:34:25.264Z',
      }),
  })
  .openapi({
    required: [
      'translation_memory_id',
      'name',
      'source_language',
      'target_languages',
      'segment_count',
    ],
  })
  .openapi('TranslationMemory')

const TranslationMemoryTargetSegmentSchema = z
  .object({
    target_segment_id: z
      .string()
      .openapi({
        description: 'A unique ID assigned to the target segment.',
        example: '9b8a7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d',
      }),
    target_language: TranslationMemoryTargetLanguageSchema,
    target_text: z
      .string()
      .openapi({
        description: 'The translated text.',
        example: 'Dieser Vertrag unterliegt dem Recht der Bundesrepublik Deutschland.',
      }),
    creation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time the translation was added, in the ISO 8601-1:2019 format.',
        example: '2026-04-01T16:34:25.223Z',
      }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time the translation was last changed, in the ISO 8601-1:2019 format.',
        example: '2026-04-01T16:34:25.223Z',
      }),
    last_used_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time the translation was last applied to a translation request, in the ISO 8601-1:2019\nformat. Absent if it has never been used.',
        example: '2026-08-05T11:02:18.771Z',
      }),
  })
  .openapi({
    description: 'A translation of a source segment in one target language.',
    required: ['target_segment_id', 'target_language', 'target_text'],
  })
  .openapi('TranslationMemoryTargetSegment')

const TranslationMemorySegmentSchema = z
  .object({
    source_segment_id: z
      .string()
      .openapi({
        description: 'A unique ID assigned to the source segment.',
        example: '4f1c2d3e-8a9b-4c5d-9e6f-7a8b9c0d1e2f',
      }),
    source_text: z
      .string()
      .openapi({
        description: 'The source text of the segment.',
        example: 'This agreement is governed by the laws of Germany.',
      }),
    creation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time the segment was added, in the ISO 8601-1:2019 format.',
        example: '2026-04-01T16:34:25.223Z',
      }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time the segment was last changed, in the ISO 8601-1:2019 format.',
        example: '2026-04-01T16:34:25.223Z',
      }),
    last_used_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time the segment was last applied to a translation, in the ISO 8601-1:2019 format. Absent\nif the segment has never been used.',
        example: '2026-08-05T11:02:18.771Z',
      }),
    targets: z
      .array(TranslationMemoryTargetSegmentSchema)
      .openapi({
        description: 'The translations of this source segment, one per target language.',
      }),
  })
  .openapi({
    description: 'A source segment stored in a translation memory, with its translations.',
    required: ['source_segment_id', 'source_text', 'targets'],
  })
  .openapi('TranslationMemorySegment')

const CreateTranslationMemoryExportSchema = z
  .object({
    job_id: z
      .uuid()
      .openapi({
        description: "The identifier of the export job. Use it to poll the job's status.",
        example: '7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13',
      }),
    parameters: z
      .object({ translation_memory_id: TranslationMemoryIdSchema.exactOptional() })
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'A reference to a translation memory export job.',
    required: ['job_id', 'parameters'],
  })
  .openapi('CreateTranslationMemoryExport')

const TranslationMemoryJobResultSchema = z
  .object({
    status: z
      .enum(['awaiting_input', 'processing', 'completed', 'failed', 'expired'])
      .openapi({
        description:
          "The job's current state:\n * `awaiting_input` - the job exists but the file has not been uploaded yet (import only)\n * `processing` - the file was received and is being processed\n * `completed` - the job finished successfully\n * `failed` - the job did not finish; see `error`\n * `expired` - the job is too old to act on; create a new one",
        example: 'completed',
      }),
    status_metadata: z
      .object({
        required_action: z
          .string()
          .exactOptional()
          .openapi({ description: 'What the job is waiting for.', example: 'Waiting for upload' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Extra context for states that need you to act. Present only when there is something to do.',
        required: [],
      }),
    download_url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'A short-lived URL to download the exported TMX file from. Present on completed export jobs\nonly. Download the file rather than storing this URL.',
        example: 'https://assets.deepl.com/download/7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time `download_url` stops working, in the ISO 8601-1:2019 format. Present on completed\nexport jobs only.',
        example: '2026-08-06T16:05:02.771Z',
      }),
    error: z
      .object({
        message: z
          .string()
          .exactOptional()
          .openapi({
            description: 'A description of the failure.',
            example: 'The uploaded file is not valid TMX.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Why the job failed. Present only when `status` is `failed`.',
        required: [],
      }),
    translation_memory_id: TranslationMemoryIdSchema.exactOptional(),
    skipped_segment_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'How many segments in the uploaded file were not imported, for example because they were\nmalformed or duplicated an existing segment. Present on completed import jobs only. A non-zero\nvalue does not mean the import failed.',
        example: 12,
      }),
  })
  .openapi({
    description: 'The status of a translation memory job and, once it finishes, its output.',
    required: ['status'],
  })
  .openapi('TranslationMemoryJobResult')

const TranslationMemoryJobSchema = z
  .object({
    job_id: z
      .uuid()
      .openapi({
        description: 'The identifier of the job.',
        example: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
      }),
    product: z
      .string()
      .openapi({
        description: 'The DeepL product the job belongs to. Always `translation_memory`.',
        example: 'translation_memory',
      }),
    operation: z
      .enum(['import', 'export'])
      .openapi({ description: 'Which kind of job this is.', example: 'import' }),
    creation_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The time the job was created, in the ISO 8601-1:2019 format.',
        example: '2026-08-06T15:04:25.223Z',
      }),
    updated_time: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The time the job last changed state, in the ISO 8601-1:2019 format.',
        example: '2026-08-06T15:06:11.418Z',
      }),
    source_file: z
      .object({
        content_type: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The MIME type declared for the uploaded file.',
            example: 'application/xml',
          }),
        content_length: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The size in bytes declared for the uploaded file.',
            example: 1024,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The file declared when the import job was created. Omitted for export jobs.',
        required: [],
      }),
    parameters: z
      .object({
        translation_memory_id: TranslationMemoryIdSchema.exactOptional(),
        display_name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name given to the translation memory the import creates.',
            example: 'Legal',
          }),
      })
      .openapi({
        description:
          'The parameters the job was created with. Import jobs report `display_name`; export jobs report\n`translation_memory_id`.',
        required: [],
      }),
    results: z
      .array(TranslationMemoryJobResultSchema)
      .openapi({
        description:
          "The job's outcome. This array always holds exactly one entry. It is an array so that jobs\nproducing multiple outputs can be represented without a breaking change.",
      }),
  })
  .openapi({
    description:
      "The state of a translation memory import or export job. Fields that do not apply to the job's\n`operation` are omitted.",
    required: [
      'job_id',
      'product',
      'operation',
      'creation_time',
      'updated_time',
      'parameters',
      'results',
    ],
  })
  .openapi('TranslationMemoryJob')

const TranslationMemoryThresholdSchema = z
  .int()
  .min(0)
  .max(100)
  .default(75)
  .openapi({
    description:
      'The minimum matching percentage required for a translation memory segment to be applied (recommended to be 75% or higher). A value below 50 is treated as 50.',
    example: 75,
  })
  .openapi('TranslationMemoryThreshold')

const TagHandlingOptionSchema = z
  .enum(['xml', 'html'])
  .openapi({
    description:
      'Sets which kind of tags should be handled. Options currently available:\n * `xml`\n * `html`',
    example: 'html',
  })
  .openapi('TagHandlingOption')

const TagHandlingVersionOptionSchema = z
  .enum(['v2', 'v1'])
  .openapi({
    description:
      'Sets which version of the tag handling algorithm should be used. Options currently available:\n* `v1`: Traditional algorithm (currently the default, will become deprecated in the future).\n* `v2`: Improved algorithm released in October 2025 (will become the default in the future).',
  })
  .openapi('TagHandlingVersionOption')

const TagCommaSeparatedListSchema = z
  .string()
  .openapi({ description: 'Comma-separated list of XML tags.', example: 'a,p,span' })
  .openapi('TagCommaSeparatedList')

const NonSplittingTagCommaSeparatedListSchema = TagCommaSeparatedListSchema.openapi({
  description: 'Comma-separated list of XML tags which never split sentences.',
}).openapi('NonSplittingTagCommaSeparatedList')

const TagListSchema = z
  .array(z.string())
  .openapi({ description: 'List of XML tags.', example: ['a', 'p', 'span'] })
  .openapi('TagList')

const NonSplittingTagListSchema = TagListSchema.openapi({
  description:
    'List of XML tags which never split sentences.\n\n\nFor some XML files, finding tags with textual content and splitting sentences using those tags won\'t yield the best results. The following example shows the engine splitting sentences on `par` tags and proceeding to translate the parts separately, resulting in an incorrect translation:\n * Example request:\n```\n<par>The firm said it had been </par><par> conducting an internal investigation.</par>\n```\n * Example response:\n```\n<par>Die Firma sagte, es sei eine gute Idee gewesen.</par><par> Durchführung einer internen Untersuchung.</par>\n```\n\n\nAs this can lead to bad translations, this type of structure should either be avoided, or the `non_splitting_tags` parameter should be set. The following example shows the same call, with the parameter set to `par`:\n * Example request:\n```\n<par>The firm said it had been </par><par> conducting an internal investigation.</par>\n```\n * Example response:\n```\n<par>Die Firma sagte, dass sie</par><par> eine interne Untersuchung durchgeführt</par><par> habe</par><par>.</par>\n```\n\n\nThis time, the sentence is translated as a whole. The XML tags are now considered markup and copied into the translated sentence. As the translation of the words "had been" has moved to another position in the German sentence, the two par tags are duplicated (which is expected here).',
}).openapi('NonSplittingTagList')

const SplittingTagCommaSeparatedListSchema = TagCommaSeparatedListSchema.openapi({
  description:
    "Comma-separated list of XML tags which always cause splits.\n\n\nSee the example in the `outline_detection` parameter's description.",
}).openapi('SplittingTagCommaSeparatedList')

const SplittingTagListSchema = TagListSchema.openapi({
  description:
    "List of XML tags which always cause splits.\n\n\nSee the example in the `outline_detection` parameter's description.",
}).openapi('SplittingTagList')

const IgnoreTagCommaSeparatedListSchema = TagCommaSeparatedListSchema.openapi({
  description: 'Comma-separated list of XML tags that indicate text not to be translated.',
}).openapi('IgnoreTagCommaSeparatedList')

const IgnoreTagListSchema = TagListSchema.openapi({
  description: 'List of XML tags that indicate text not to be translated.',
}).openapi('IgnoreTagList')

const TargetLanguageSchema = z
  .string()
  .openapi({
    description:
      'The language into which the text should be translated.\n\nFor the full list of supported target languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).',
    example: 'DE',
  })
  .openapi('TargetLanguage')

const TargetLanguageWriteSchema = z
  .enum([
    'de',
    'en',
    'en-GB',
    'en-US',
    'es',
    'fr',
    'it',
    'ja',
    'ko',
    'pt',
    'pt-BR',
    'pt-PT',
    'zh',
    'zh-Hans',
  ])
  .openapi({ description: 'The language for the text improvement.', example: 'de' })
  .openapi('TargetLanguageWrite')

const UsageResponseSchema = z
  .object({
    character_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Characters translated so far in the current billing period.',
        example: 180118,
      }),
    character_limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Current maximum number of characters that can be translated per billing period. If cost control is set, the cost control limit will be returned in this field.',
        example: 1250000,
      }),
    document_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Documents translated so far in the current billing period. Only present for accounts with a document limit.',
      }),
    document_limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Current maximum number of documents that can be translated per billing period. Only present for accounts with a document limit.',
      }),
    team_document_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Documents translated by all users in the team so far in the current billing period. Only present for accounts with a team document limit.',
      }),
    team_document_limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Current maximum number of documents that can be translated by the team per billing period. Only present for accounts with a team document limit.',
      }),
    products: z
      .array(
        z
          .object({
            product_type: z
              .string()
              .exactOptional()
              .openapi({
                description: "The type of product (e.g., 'write', 'translate').",
                example: 'write',
              }),
            billing_unit: z
              .enum(['characters', 'minutes'])
              .exactOptional()
              .openapi({
                description: 'The billing unit for this product type.',
                example: 'characters',
              }),
            api_key_unit_count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Units used for this product by this API key in the current period.',
                example: 0,
              }),
            account_unit_count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Total units used for this product in the current period.',
                example: 5643,
              }),
            api_key_character_count: z
              .int()
              .exactOptional()
              .openapi({
                deprecated: true,
                description:
                  'Use api_key_unit_count instead. Characters used for this product by this API key in the current period."',
                example: 0,
              }),
            character_count: z
              .int()
              .exactOptional()
              .openapi({
                deprecated: true,
                description:
                  'Use account_unit_count instead. Total characters used for this product in the current period."',
                example: 5643,
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Only present for API Pro users. Per-product usage details.' }),
    api_key_character_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Total characters used by this API key in the current period.',
        example: 636,
      }),
    api_key_character_limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Character limit for this API key in the current period.',
        example: 1000000000000,
      }),
    speech_to_text_milliseconds_count: z
      .int()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated. Always returns 0. Use speech_to_text_minutes_count instead.',
        example: 0,
      }),
    speech_to_text_milliseconds_limit: z
      .int()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated. Always returns 0. Use speech_to_text_minutes_limit instead.',
        example: 0,
      }),
    speech_to_text_minutes_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Minutes of speech-to-text used in the current period. Milliseconds are rounded up to the nearest minute.',
        example: 30,
      }),
    speech_to_text_minutes_limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Maximum minutes of speech-to-text that can be used in the current billing period.',
        example: 600,
      }),
    speech_to_speech_minutes_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Minutes of speech-to-speech used in the current period. Milliseconds are rounded up to the nearest minute.',
        example: 12,
      }),
    speech_to_speech_minutes_limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Maximum minutes of speech-to-speech that can be used in the current billing period.',
        example: 600,
      }),
    start_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. Start time of the current billing period (ISO 8601).',
        example: '2025-05-13T09:18:42Z',
      }),
    end_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Only present for API Pro users. End time of the current billing period (ISO 8601).',
        example: '2025-06-13T09:18:42Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('UsageResponse')

const VoiceFormalitySchema = z
  .enum(['default', 'formal', 'more', 'informal', 'less'])
  .default('default')
  .openapi({
    description:
      'Sets whether the translated text should lean towards formal or informal language.\nPossible options are:\n  * `default` - use the default formality for the target language\n  * `formal`/`more` - for a more formal language\n  * `informal`/`less` - for a more informal language',
    example: 'formal',
  })
  .openapi('VoiceFormality')

const VoiceMessageFormatSchema = z
  .enum(['json', 'msgpack'])
  .default('json')
  .openapi({
    description:
      'Message encoding format for WebSocket communication. Determines how messages are serialized and transmitted.\nUsing `json`,  messages are JSON-encoded and sent as TEXT WebSocket frames. All binary fields (such as audio data) are base64-encoded strings.\nUsing `msgpack`, messages are MessagePack-encoded and sent as BINARY WebSocket frames. All binary fields (such as audio data) contain raw binary data.\n\nFor more details, see [Message Encoding](/docs/voice/message-encoding).',
    example: 'json',
  })
  .openapi('VoiceMessageFormat')

const VoiceTargetMediaVoiceSchema = z
  .enum(['male', 'female', 'match'])
  .openapi({
    description:
      "Target audio voice selection for synthesized speech. The default voice is language dependent.\nUse `match` for speaker match, which produces translated speech with a voice close to the speaker's voice. Speaker match is only available for target languages whose translated speech is provided by DeepL, not for languages provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.\nRequesting `match` for a target language that does not support it is not an error: the session is created and that language's translated speech uses a preset voice instead.\n",
    example: 'female',
  })
  .openapi('VoiceTargetMediaVoice')

const VoiceSourceMediaContentTypeSchema = z
  .enum([
    'audio/auto',
    'audio/flac',
    'audio/mpeg',
    'audio/ogg',
    'audio/webm',
    'audio/x-matroska',
    'audio/ogg;codecs=flac',
    'audio/ogg;codecs=opus',
    'audio/pcm;encoding=alaw;rate=8000',
    'audio/pcm;encoding=ulaw;rate=8000',
    'audio/pcm;encoding=s16le;rate=8000',
    'audio/pcm;encoding=s16le;rate=16000',
    'audio/pcm;encoding=s16le;rate=44100',
    'audio/pcm;encoding=s16le;rate=48000',
    'audio/webm;codecs=opus',
    'audio/x-matroska;codecs=aac',
    'audio/x-matroska;codecs=flac',
    'audio/x-matroska;codecs=mp3',
    'audio/x-matroska;codecs=opus',
  ])
  .openapi({
    description:
      ' The audio format for streaming, which specifies container, codec, and encoding parameters. See the table below for supported formats. If `audio/auto` is specified, the server will auto-detect the container and codec for all supported combinations, except PCM. That requires explicit encoding parameters. All formats need to be single channel audio.\n \n | Content Type                          | Container                                         | Codec                                     |\n | :------------------------------------ | :------------------------------------------------ | :---------------------------------------- |\n | `audio/auto`                          | Auto-detect: FLAC / Matroska / MPEG / Ogg / WebM  | Auto-detect AAC / FLAC / MP3 / OPUS       |\n | `audio/flac`                          | FLAC (flac)                                       | FLAC                                      |\n | `audio/mpeg`                          | MPEG (mp3/m4a)                                    | MP3                                       |\n | `audio/ogg`                           | Ogg (ogg/oga)                                     | Auto-detect FLAC / OPUS                   |\n | `audio/webm`                          | WebM (webm)                                       | OPUS                                      |\n | `audio/x-matroska`                    | Matroska (mkv/mka)                                | Auto-detect: AAC / FLAC / MP3 / OPUS      |\n | `audio/ogg;codecs=flac`               | Ogg (ogg/oga)                                     | FLAC                                      |\n | `audio/ogg;codecs=opus`               | Ogg (ogg/oga)                                     | OPUS                                      |\n | `audio/pcm;encoding=alaw;rate=8000`   | -                                                 | PCM A-Law 8000 Hz (G.711)                 |\n | `audio/pcm;encoding=ulaw;rate=8000`   | -                                                 | PCM µ-Law 8000 Hz (G.711)                 |\n | `audio/pcm;encoding=s16le;rate=8000`  | -                                                 | PCM signed 16-bit little-endian 8000 Hz   |\n | `audio/pcm;encoding=s16le;rate=16000` | -                                                 | PCM signed 16-bit little-endian 16000 Hz  |\n | `audio/pcm;encoding=s16le;rate=44100` | -                                                 | PCM signed 16-bit little-endian 44100 Hz  |\n | `audio/pcm;encoding=s16le;rate=48000` | -                                                 | PCM signed 16-bit little-endian 48000 Hz  |\n | `audio/webm;codecs=opus`              | WebM (webm)                                       | OPUS                                      |\n | `audio/x-matroska;codecs=aac`         | Matroska (mkv/mka)                                | AAC                                       |\n | `audio/x-matroska;codecs=flac`        | Matroska (mkv/mka)                                | FLAC                                      |\n | `audio/x-matroska;codecs=mp3`         | Matroska (mkv/mka)                                | MP3                                       |\n | `audio/x-matroska;codecs=opus`        | Matroska (mkv/mka)                                | OPUS                                      |\n \n\nWe recommend the following bitrates as good tradeoff between quality and bandwidth:\n - AAC: 96 kbps\n - FLAC: 256 kbps  (16000 Hz)\n - MP3: 128 kbps\n - OPUS: 32 kbps (recommendation for low bandwidth scenarios)\n - PCM: 256 kbps (16000 Hz, default recommendation)\n ',
    example: 'audio/ogg;codecs=opus',
  })
  .openapi('VoiceSourceMediaContentType')

const VoiceSourceLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'bn',
    'ca',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'ga',
    'gl',
    'he',
    'hi',
    'hr',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'ms',
    'mt',
    'nb',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'ta',
    'th',
    'tl',
    'tr',
    'uk',
    'vi',
    'zh',
  ])
  .openapi({
    description:
      'The source language of the audio stream. It can be left empty or must be one of the supported Voice API source languages and comply with IETF BCP 47 language tags.\nNote: Some source transcription languages are provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.\n',
    example: 'en',
  })
  .openapi('VoiceSourceLanguage')

const VoiceSourceLanguageModeSchema = z
  .enum(['auto', 'fixed'])
  .default('auto')
  .openapi({
    description:
      'Controls how the source_language value is used.\n- `auto`: Treats source language as a hint; server can override\n- `fixed`: Treats source language as mandatory; server must use this language',
    example: 'fixed',
  })
  .openapi('VoiceSourceLanguageMode')

const VoiceTargetLanguagesSchema = z
  .array(
    z.enum([
      'ar',
      'bg',
      'bn',
      'ca',
      'cs',
      'da',
      'de',
      'el',
      'en',
      'en-GB',
      'en-US',
      'es',
      'es-419',
      'et',
      'fi',
      'fr',
      'fr-CA',
      'fr-FR',
      'ga',
      'gl',
      'he',
      'hi',
      'hr',
      'hu',
      'id',
      'it',
      'ja',
      'ko',
      'lt',
      'lv',
      'ms',
      'mt',
      'nb',
      'nl',
      'pl',
      'pt',
      'pt-BR',
      'pt-PT',
      'ro',
      'ru',
      'sk',
      'sl',
      'sv',
      'ta',
      'th',
      'tl',
      'tr',
      'uk',
      'vi',
      'zh',
      'zh-HANS',
      'zh-HANT',
    ]),
  )
  .max(5)
  .default([])
  .openapi({
    description:
      'List of target languages for translation. The stream will emit translations for each language. Language identifiers must comply with IETF BCP 47. See the [supported languages table](/docs/voice/supported-voice-languages) for details.\n',
    example: ['de', 'fr', 'es'],
  })
  .openapi('VoiceTargetLanguages')

const VoiceTargetMediaLanguagesSchema = z
  .array(
    z.enum([
      'ar',
      'bg',
      'ca',
      'cs',
      'da',
      'de',
      'el',
      'en',
      'en-GB',
      'en-US',
      'es',
      'es-419',
      'fi',
      'fr',
      'fr-CA',
      'fr-FR',
      'gl',
      'he',
      'hi',
      'hr',
      'hu',
      'id',
      'it',
      'ja',
      'ko',
      'ms',
      'nb',
      'nl',
      'pl',
      'pt',
      'pt-BR',
      'pt-PT',
      'ro',
      'ru',
      'sk',
      'sl',
      'sv',
      'ta',
      'th',
      'tl',
      'tr',
      'uk',
      'vi',
      'zh',
      'zh-HANS',
      'zh-HANT',
    ]),
  )
  .max(1)
  .default([])
  .openapi({
    description:
      'List of target languages for which to generate synthesized audio. Languages specified here will automatically be added to target_languages if not already present, ensuring you receive both text translation and audio synthesis for these languages. If omitted, only text transcription and translation will be provided (no audio synthesis). Language identifiers must comply with IETF BCP 47.\nNote: Some translated audio languages are provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.\n',
    example: ['de'],
  })
  .openapi('VoiceTargetMediaLanguages')

const VoiceTargetMediaContentTypeSchema = z
  .enum([
    'audio/flac',
    'video/mp2t;codecs=aac',
    'video/mp2t;codecs=opus',
    'audio/ogg',
    'audio/ogg;codecs=flac',
    'audio/ogg;codecs=opus',
    'audio/opus',
    'audio/pcm;encoding=alaw;rate=8000',
    'audio/pcm;encoding=ulaw;rate=8000',
    'audio/pcm;encoding=s16le;rate=16000',
    'audio/pcm;encoding=s16le;rate=24000',
    'audio/webm',
    'audio/webm;codecs=opus',
    'audio/x-matroska;codecs=aac',
    'audio/x-matroska;codecs=flac',
    'audio/x-matroska;codecs=opus',
  ])
  .default('audio/webm;codecs=opus')
  .openapi({
    description:
      ' The audio format for synthesized target media streaming.\n Specifies container, codec, and encoding parameters for the audio returned in target_media_chunk messages.\n If not specified, defaults to audio/webm;codecs=opus.\n Only applies when target_media_languages is specified.\n \n | Content Type | Container | Codec |\n | :--- | :--- | :--- |\n | `audio/flac` | FLAC (flac) | FLAC 24000 Hz |\n | `video/mp2t;codecs=aac` | MPEG Transport Stream (Audio only) | AAC 70 kbit/s |\n | `video/mp2t;codecs=opus` | MPEG Transport Stream (Audio only) | OPUS 32 kbit/s |\n | `audio/ogg` | Ogg (ogg/oga) | OPUS 32 kbit/s |\n | `audio/ogg;codecs=flac` | Ogg (ogg/oga) | FLAC 24000 Hz |\n | `audio/ogg;codecs=opus` | Ogg (ogg/oga) | OPUS 32 kbit/s |\n | `audio/opus` | - | OPUS 32 kbit/s |\n | `audio/pcm;encoding=alaw;rate=8000` | - | PCM A-Law 8000 Hz (G.711) |\n | `audio/pcm;encoding=ulaw;rate=8000` | - | PCM µ-Law 8000 Hz (G.711) |\n | `audio/pcm;encoding=s16le;rate=16000` | - | PCM signed 16-bit little-endian 16000 Hz |\n | `audio/pcm;encoding=s16le;rate=24000` | - | PCM signed 16-bit little-endian 24000 Hz |\n | `audio/webm` | WebM (webm) | OPUS 32 kbit/s  |\n | `audio/webm;codecs=opus` | WebM (webm) | OPUS 32 kbit/s |\n | `audio/x-matroska;codecs=aac` | Matroska (mkv/mka) | AAC 70 kbit/s |\n | `audio/x-matroska;codecs=flac` | Matroska (mkv/mka) | FLAC 24000 Hz |\n | `audio/x-matroska;codecs=opus` | Matroska (mkv/mka) | OPUS 32 kbit/s |\n \n We recommend the following formats as good tradeoffs between quality and bandwidth:\n - OPUS (WebM): 32 kbps, recommended for low bandwidth scenarios (default)\n - PCM 24kHz: 384 kbps, high quality',
    example: 'audio/webm;codecs=opus',
  })
  .openapi('VoiceTargetMediaContentType')

const VoiceStreamingResponseSchema = z
  .object({
    streaming_url: z
      .string()
      .openapi({
        description:
          'The WebSocket URL to use for establishing [the stream connection](/api-reference/voice/websocket-streaming).\n',
        example: 'wss://api.deepl.com/v3/voice/realtime/connect',
      }),
    token: z
      .string()
      .openapi({
        description:
          'A unique ephemeral token for authentication with the streaming endpoint. Pass this as a query parameter when connecting to [the streaming URL](/api-reference/voice/websocket-streaming). This token is ephemeral and valid for a short time and one-time use only.\n',
        example: 'VGhpcyBpcyBhIGZha2UgdG9rZW4K',
      }),
    session_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Internal use only. A unique identifier for the requested stream.\n',
        example: '4f911080-cfe2-41d4-8269-0e6ec15a0354',
      }),
  })
  .openapi({ required: ['streaming_url', 'token'] })
  .openapi('VoiceStreamingResponse')

const WritingStyleSchema = z
  .enum([
    'academic',
    'business',
    'casual',
    'default',
    'simple',
    'prefer_academic',
    'prefer_business',
    'prefer_casual',
    'prefer_simple',
  ])
  .openapi({
    description:
      'Specify a style to rephrase your text in a way that fits your audience and goals.\nThe `prefer_` prefix allows falling back to the default style if the language does not yet support styles.',
  })
  .openapi('WritingStyle')

const WritingToneSchema = z
  .enum([
    'confident',
    'default',
    'diplomatic',
    'enthusiastic',
    'friendly',
    'prefer_confident',
    'prefer_diplomatic',
    'prefer_enthusiastic',
    'prefer_friendly',
  ])
  .openapi({
    description:
      'Specify the desired tone for your text.\nThe `prefer_` prefix allows falling back to the default tone if the language does not yet support tones.',
  })
  .openapi('WritingTone')

const UsageBreakdownSchema = z
  .object({
    total_characters: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of characters used.', example: 9619 }),
    text_translation_characters: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of characters used for text translation.', example: 4892 }),
    document_translation_characters: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of characters used for document translation.', example: 0 }),
    text_improvement_characters: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of characters used for text improvement.', example: 4727 }),
    speech_to_text_minutes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of speech-to-text usage in minutes.', example: 107.46 }),
  })
  .openapi({ description: 'Breakdown of character usage by category.', required: [] })
  .openapi('UsageBreakdown')

const KeyUsageItemSchema = z
  .object({
    api_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Masked API key identifier.', example: 'db96****cb2c' }),
    api_key_label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Label associated with the API key.',
        example: 'DeepL API Key Prod',
      }),
    usage: UsageBreakdownSchema.exactOptional(),
  })
  .openapi({
    description: 'Usage statistics for a specific API key and optionally a specific date.',
    required: [],
  })
  .openapi('KeyUsageItem')

const KeyAndDayUsageItemSchema = z
  .object({
    api_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Masked API key identifier.', example: 'db96****cb2c' }),
    api_key_label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Label associated with the API key.',
        example: 'DeepL API Key Prod',
      }),
    usage_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The usage date. Only present when group_by is "key_and_day".',
        example: '2025-09-29T00:00:00Z',
      }),
    usage: UsageBreakdownSchema.exactOptional(),
  })
  .openapi({
    description: 'Usage statistics for a specific API key and optionally a specific date.',
    required: [],
  })
  .openapi('KeyAndDayUsageItem')

const AdminUsageReportDataSchema = z
  .object({
    total_usage: UsageBreakdownSchema.exactOptional(),
    start_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Start date of the usage report period.',
        example: '2025-09-29T00:00:00',
      }),
    end_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'End date of the usage report period.',
        example: '2025-10-01T00:00:00',
      }),
    group_by: z
      .enum(['key', 'key_and_day'])
      .exactOptional()
      .openapi({ description: 'The grouping method used, if any.', example: 'key_and_day' }),
    key_usages: z
      .array(KeyUsageItemSchema)
      .exactOptional()
      .openapi({ description: "Usage statistics grouped by key. Present when group_by='key'." }),
    key_and_day_usages: z
      .array(KeyAndDayUsageItemSchema)
      .exactOptional()
      .openapi({
        description:
          "Usage statistics grouped by key and day. Present when group_by='key_and_day'.",
      }),
  })
  .openapi({
    description: 'Contains the detailed usage statistics for the specified date range.',
    required: [],
  })
  .openapi('AdminUsageReportData')

const AdminUsageReportSchema = z
  .object({ usage_report: AdminUsageReportDataSchema.exactOptional() })
  .openapi({ description: 'The response for admin usage statistics.', required: [] })
  .openapi('AdminUsageReport')

const CustomTagBreakdownSchema = z
  .object({
    total_characters: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Total number of characters used across character-based services. Voice usage is reported in minutes and is not included in this total.\n',
        example: 380,
      }),
    text_translation_characters: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of characters used for text translation.', example: 380 }),
    text_improvement_characters: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of characters used for text improvement.', example: 0 }),
    speech_to_text_minutes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of speech-to-text usage in minutes.', example: 12.5 }),
    speech_to_speech_minutes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of speech-to-speech usage in minutes.', example: 4.2 }),
  })
  .openapi({ description: 'Breakdown of usage by category for a custom tag.', required: [] })
  .openapi('CustomTagBreakdown')

const CustomTagUsageItemSchema = z
  .object({
    custom_tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom tag identifier.', example: 'example-custom-tag' }),
    usage_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The day the usage was recorded. Only returned when `aggregate_by` is `day`.',
        example: '2026-05-04T00:00:00Z',
      }),
    breakdown: CustomTagBreakdownSchema.exactOptional(),
  })
  .openapi({ description: 'Usage statistics for a specific custom tag.', required: [] })
  .openapi('CustomTagUsageItem')

const CustomTagUsageReportDataSchema = z
  .object({
    aggregate_by: z
      .enum(['period', 'day'])
      .exactOptional()
      .openapi({ description: 'The aggregation method used.', example: 'period' }),
    start_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Start date of the usage report period.',
        example: '2026-05-03T00:00:00',
      }),
    end_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'End date of the usage report period.',
        example: '2026-05-05T00:00:00',
      }),
    next_page: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Cursor for the next page of results. Null if there are no further pages.',
        example: 2,
      }),
    usage: z
      .array(CustomTagUsageItemSchema)
      .exactOptional()
      .openapi({ description: 'List of custom tag usage entries.' }),
  })
  .openapi({
    description: 'Contains the detailed custom tag usage statistics for the specified date range.',
    required: [],
  })
  .openapi('CustomTagUsageReportData')

const CustomTagUsageReportSchema = z
  .object({ custom_tag_usage_report: CustomTagUsageReportDataSchema.exactOptional() })
  .openapi({ description: 'The response for admin custom tag usage statistics.', required: [] })
  .openapi('CustomTagUsageReport')

const InfrastructureErrorResponseSchema = z
  .object({
    error: z
      .object({
        message: z
          .string()
          .openapi({
            description: 'A human-readable description of the error.',
            example: 'Bad Gateway.',
          }),
      })
      .openapi({ required: ['message'] }),
  })
  .openapi({
    description:
      "Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.\n",
    required: ['error'],
  })
  .openapi('InfrastructureErrorResponse')

const ErrorResponseSchema = z
  .object({
    message: z.string().openapi({ description: 'A human-readable description of the error.' }),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable identifier for the error, when available. Clients should match on this value rather than on `message` when branching on error types.',
        example: 'invalid_content_type',
      }),
  })
  .openapi({ required: ['message'] })
  .openapi('ErrorResponse')

const VoiceTranslateJobSourceContentTypeSchema = z
  .enum(['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac', 'audio/mp4', 'audio/webm'])
  .openapi({ description: 'The MIME type of the source audio file.' })
  .openapi('VoiceTranslateJobSourceContentType')

const JobSourceFileRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .openapi({
        description: 'The file name of the source audio file.',
        example: 'podcast-episode-42.mp3',
      }),
    content_type: VoiceTranslateJobSourceContentTypeSchema,
    content_length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1073741824n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1073741824,
        description:
          'The size of the source audio file in bytes. Maximum 1 GB (1,073,741,824 bytes).',
        example: 15728640,
      }),
  })
  .openapi({
    description: 'Metadata about the source audio file to be uploaded.',
    required: ['name', 'content_type', 'content_length'],
  })
  .openapi('JobSourceFileRequest')

const JobSourceFileResponseSchema = z
  .object({
    name: z.string().openapi({ description: 'The file name of the source audio file.' }),
    content_type: z.string().openapi({ description: 'The MIME type of the source audio file.' }),
    content_length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size of the source audio file in bytes.',
      }),
  })
  .openapi({
    description: 'Metadata about the uploaded source audio file.',
    required: ['name', 'content_type', 'content_length'],
  })
  .openapi('JobSourceFileResponse')

const VoiceTranslateJobTargetOutputTypeSchema = z
  .enum([
    'text/plain',
    'application/x-subrip',
    'audio/opus',
    'audio/flac',
    'audio/pcm;encoding=s16le;rate=16000',
    'audio/pcm;encoding=s16le;rate=24000',
    'audio/pcm;encoding=ulaw;rate=8000',
    'audio/pcm;encoding=alaw;rate=8000',
    'audio/x-matroska;codecs=aac',
    'audio/x-matroska;codecs=flac',
    'audio/x-matroska;codecs=opus',
    'audio/x-matroska;codecs=pcm_s16le;rate=16000',
    'audio/x-matroska;codecs=pcm_s16le;rate=24000',
    'video/mp2t;codecs=aac',
    'video/mp2t;codecs=opus',
    'audio/ogg;codecs=flac',
    'audio/ogg;codecs=opus',
    'audio/webm;codecs=opus',
  ])
  .openapi({ description: 'The desired output format for the translation target.' })
  .openapi('VoiceTranslateJobTargetOutputType')

const VoiceTranslateJobParametersRequestSchema = z
  .object({
    source_language: SourceLanguageSchema.exactOptional().openapi({
      description:
        'Language of the source audio. If omitted, the language is detected automatically.',
    }),
  })
  .openapi({ description: 'Processing parameters for the voice translation job.', required: [] })
  .openapi('VoiceTranslateJobParametersRequest')

const VoiceTranslateJobParametersResponseSchema = z
  .object({
    source_language: SourceLanguageSchema.exactOptional().openapi({
      description: 'Language of the source audio.',
    }),
  })
  .openapi({
    description: 'Processing parameters as applied to the voice translation job.',
    required: [],
  })
  .openapi('VoiceTranslateJobParametersResponse')

const VoiceTranslateJobTargetRequestSchema = z
  .object({ language: TargetLanguageSchema, type: VoiceTranslateJobTargetOutputTypeSchema })
  .openapi({
    description: 'A translation target specifying the desired output language and format.',
    required: ['language', 'type'],
  })
  .openapi('VoiceTranslateJobTargetRequest')

const VoiceTranslateJobTargetResponseSchema = z
  .object({ language: TargetLanguageSchema, type: VoiceTranslateJobTargetOutputTypeSchema })
  .openapi({
    description: 'A translation target as recorded on the job.',
    required: ['language', 'type'],
  })
  .openapi('VoiceTranslateJobTargetResponse')

const VoiceTranslateCreateJobRequestSchema = z
  .object({
    source_file: JobSourceFileRequestSchema,
    parameters: VoiceTranslateJobParametersRequestSchema.exactOptional(),
    targets: z
      .array(VoiceTranslateJobTargetRequestSchema)
      .min(1)
      .openapi({
        description: 'One or more translation targets. Each target produces a separate result.',
      }),
  })
  .openapi({ required: ['source_file', 'targets'] })
  .openapi('VoiceTranslateCreateJobRequest')

const VoiceTranslateCreateJobResponseSchema = z
  .object({
    job_id: z.uuid().openapi({ description: 'The unique identifier of the created job.' }),
    upload_url: z
      .url()
      .openapi({
        description:
          'The URL to upload the source audio file to via `PUT` with `Content-Type: application/octet-stream`.\nRequires the `Authorization: DeepL-Signature {signature}` header.\nSee [Upload File](/api-reference/jobs-voice-translate#upload-file) for details.',
      }),
    signature: z
      .string()
      .openapi({
        description:
          'A short-lived token used to authorize the file upload. Pass it via the `Authorization` header as `DeepL-Signature {signature}` when uploading to the `upload_url`.',
      }),
    signed_upload_url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'A pre-signed upload URL that does not require an authorization header. Only present when `?include=signed_url` is specified.',
      }),
  })
  .openapi({ required: ['job_id', 'upload_url', 'signature'] })
  .openapi('VoiceTranslateCreateJobResponse')

const JobUsageSchema = z
  .object({
    storage_used: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total storage used by this job in bytes, including source and output files.',
      }),
  })
  .openapi({ required: [] })
  .openapi('JobUsage')

const ResultStatusSchema = z
  .enum(['pending', 'uploaded', 'processing', 'complete', 'downloaded', 'failed'])
  .openapi({
    description:
      'The processing status of a target result.\n- `pending`: Job created, awaiting file upload.\n- `uploaded`: File uploaded, awaiting processing.\n- `processing`: Translation in progress.\n- `complete`: Translation complete, result available for download.\n- `downloaded`: Result has been downloaded. Assets are marked for deletion.\n- `failed`: Processing failed. See the `error` field for details.',
  })
  .openapi('ResultStatus')

const VoiceTranslateJobTargetResultSchema = z
  .object({
    status: ResultStatusSchema,
    download_url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The URL to download the translated result via `GET`.\nRequires the `Authorization: DeepL-Signature {signature}` header.\nOnly present when `status` is `complete`.\nSee [Download Result](/api-reference/jobs-voice-translate#download-result) for details.',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short-lived token used to authorize the result download. Only present when `status` is `complete`.',
      }),
    signed_download_url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'A pre-signed download URL that does not require an authorization header. Only present when `status` is `complete` and `?include=signed_url` is specified.',
      }),
    error: ErrorResponseSchema.exactOptional().openapi({
      description: 'Details about the processing failure. Only present when `status` is `failed`.',
    }),
  })
  .openapi({
    description: 'The processing result for a single translation target.',
    required: ['status'],
  })
  .openapi('VoiceTranslateJobTargetResult')

const VoiceTranslateJobStatusResponseSchema = z
  .object({
    job_id: z.uuid().openapi({ description: 'The unique identifier of the job.' }),
    product: z.string().openapi({ description: 'The product identifier.', example: 'voice' }),
    operation: z
      .string()
      .openapi({ description: 'The operation identifier.', example: 'translate' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the job was created (ISO 8601).' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the job was last updated (ISO 8601).' }),
    usage: JobUsageSchema,
    source_file: JobSourceFileResponseSchema,
    parameters: VoiceTranslateJobParametersResponseSchema,
    targets: z
      .array(VoiceTranslateJobTargetResponseSchema)
      .openapi({ description: 'The translation targets as specified in the create request.' }),
    results: z
      .array(VoiceTranslateJobTargetResultSchema)
      .openapi({
        description: 'Per-target processing results, in the same order as the `targets` array.',
      }),
  })
  .openapi({
    required: [
      'job_id',
      'product',
      'operation',
      'created_at',
      'updated_at',
      'usage',
      'source_file',
      'parameters',
      'targets',
      'results',
    ],
  })
  .openapi('VoiceTranslateJobStatusResponse')

const QualityEvaluationProcessingSchema = z
  .object({
    job_id: z.string().openapi({ example: '04DE5AD98A02647D83285A36021911C6' }),
    status: z.literal('processing').openapi({ example: 'processing' }),
  })
  .openapi({ required: ['job_id', 'status'] })
  .openapi('QualityEvaluationProcessing')

const QualityEvaluationSpanSchema = z
  .object({
    start: z
      .int()
      .openapi({
        description: 'Inclusive start index. A 0-based Unicode code-point offset.',
        example: 23,
      }),
    end: z
      .int()
      .openapi({
        description: 'Exclusive end index. A 0-based Unicode code-point offset.',
        example: 31,
      }),
  })
  .openapi({
    required: ['start', 'end'],
    description:
      "A half-open `[start, end)` range of Unicode code points within a segment's source or target text. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).",
  })
  .openapi('QualityEvaluationSpan')

const QualityEvaluationAppliedGlossaryTermPairSchema = z
  .object({
    source_term: z
      .string()
      .openapi({
        description: 'The source term, as defined in the glossary.',
        example: 'forecast',
      }),
    target_term: z
      .string()
      .openapi({
        description: 'The target term, as applied to the translation.',
        example: 'Prognose',
      }),
    ranges: z
      .array(QualityEvaluationSpanSchema)
      .openapi({
        description:
          'Spans in `target` where the target term was applied, using the same convention as `source_spans` and `target_spans`. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).',
      }),
  })
  .openapi({
    description: "A glossary term pair that was applied to the segment's translation.",
    required: ['source_term', 'target_term', 'ranges'],
  })
  .openapi('QualityEvaluationAppliedGlossaryTermPair')

const QualityEvaluationIssueSchema = z
  .object({
    type: z
      .enum(['Accuracy', 'Fluency', 'Style', 'Miscellaneous', 'InternalTQEError'])
      .openapi({
        description:
          'Top-level category of the issue. See [Type and sub-type values](/api-reference/quality-evaluations/poll#type-and-sub-type-values).',
        example: 'Accuracy',
      }),
    sub_type: z
      .enum([
        'Addition',
        'Omission',
        'Mistranslation',
        'Over-translation',
        'Under-translation',
        'Untranslated text',
        'Punctuation',
        'Spelling',
        'Grammar',
        'Grammatical register',
        'Inconsistency',
        'Character encoding',
        'Awkward',
        'Inconsistent style',
        'SegmentTooLarge',
      ])
      .openapi({
        description:
          'Finer-grained category within `type`. See [Type and sub-type values](/api-reference/quality-evaluations/poll#type-and-sub-type-values).',
        example: 'Mistranslation',
      }),
    severity: z
      .enum(['Critical', 'Major', 'Minor'])
      .openapi({
        description:
          'How serious the issue is. See [Severity values](/api-reference/quality-evaluations/poll#severity-values).',
        example: 'Critical',
      }),
    explanation: z
      .string()
      .openapi({
        description: 'Description of the issue. May span multiple sentences.',
        example:
          "The source says revenue was '5% above forecast' but the translation says '5 % unter der Prognose' (5% below forecast). This completely reverses the meaning and has financial implications.",
      }),
    source_spans: z
      .array(QualityEvaluationSpanSchema)
      .openapi({
        description:
          "Spans on the segment's source text where this issue applies. Empty if no source-side highlight. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).",
      }),
    target_spans: z
      .array(QualityEvaluationSpanSchema)
      .openapi({
        description:
          "Spans on the segment's target text where this issue applies. Empty if no target-side highlight. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).",
      }),
  })
  .openapi({
    required: ['type', 'sub_type', 'severity', 'explanation', 'source_spans', 'target_spans'],
  })
  .openapi('QualityEvaluationIssue')

const QualityEvaluationSegmentSchema = z
  .object({
    segment_index: z
      .int()
      .openapi({
        description: 'Zero-based index of this segment within the document, in reading order.',
        example: 0,
      }),
    segment_score: z
      .float32()
      .min(0)
      .max(100)
      .openapi({
        description: 'Quality score for this segment, where 0 is lowest and 100 is highest.',
        example: 38.5,
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The segment's source text as the evaluation read it. `source_spans` are offsets into this text. Omitted when the text is unavailable. See [Segment text](/api-reference/quality-evaluations/poll#segment-text).",
        example: 'Our Q3 revenue came in 5% above forecast.',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The segment's translated text as the evaluation read it. `target_spans` are offsets into this text. Omitted when the text is unavailable. See [Segment text](/api-reference/quality-evaluations/poll#segment-text).",
        example: 'Unser Q3-Umsatz lag 5 % unter der Prognose.',
      }),
    applied_glossary_term_pairs: z
      .array(QualityEvaluationAppliedGlossaryTermPairSchema)
      .exactOptional()
      .openapi({
        description:
          'Glossary term pairs applied to this segment when the document was translated, so you can tell which customizations were in play where an issue was reported. Omitted when no term pair was applied.',
      }),
    errors: z
      .array(QualityEvaluationIssueSchema)
      .openapi({
        description: 'Quality issues identified in this segment. Empty if no issues were found.',
      }),
  })
  .openapi({ required: ['segment_index', 'segment_score', 'errors'] })
  .openapi('QualityEvaluationSegment')

const QualityEvaluationDoneSchema = z
  .object({
    job_id: z.string().openapi({ example: '04DE5AD98A02647D83285A36021911C6' }),
    status: z.literal('done').openapi({ example: 'done' }),
    segments: z
      .array(QualityEvaluationSegmentSchema)
      .openapi({
        description: 'One entry per evaluated segment of the document, in reading order.',
      }),
  })
  .openapi({ title: 'Done', required: ['job_id', 'status', 'segments'] })
  .openapi('QualityEvaluationDone')

const QualityEvaluationFailedSchema = z
  .object({
    job_id: z.string().openapi({ example: '04DE5AD98A02647D83285A36021911C6' }),
    status: z.literal('error').openapi({ example: 'error' }),
    error: z
      .object({
        code: z
          .string()
          .openapi({
            description: 'Machine-readable error code. Currently always `evaluation_failed`.',
            example: 'evaluation_failed',
          }),
        message: z
          .string()
          .openapi({
            description: 'Error message.',
            example: 'The evaluation pipeline encountered an unexpected error.',
          }),
      })
      .openapi({ required: ['code', 'message'] }),
  })
  .openapi({ title: 'Error', required: ['job_id', 'status', 'error'] })
  .openapi('QualityEvaluationFailed')

const QualityEvaluationApiErrorSchema = z
  .object({ message: z.string().openapi({ description: 'Error message.' }) })
  .openapi({ required: ['message'] })
  .openapi('QualityEvaluationApiError')

const VoiceTranslateJobBadRequestResponse = {
  description: 'Bad request. Check the error message and request parameters.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      example: { message: '/targets/0/type: Value is not valid' },
    },
  },
}

const BadRequestResponse = {
  description: 'Bad request. Please check error message and your parameters.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const BadRequestGlossariesResponse = {
  description: 'Bad request. Please check error message and your parameters.',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z
            .string()
            .exactOptional()
            .openapi({ description: 'Generic description of the error.' }),
          detail: z
            .string()
            .exactOptional()
            .openapi({ description: 'More specific description of the error.' }),
        })
        .openapi({ required: [] }),
      example: {
        message: 'Invalid glossary entries provided',
        detail:
          'Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)',
      },
    },
  },
}

const UnauthorizedResponse = {
  description:
    'Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ForbiddenResponse = {
  description:
    'Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ForbiddenScopedResponse = {
  description:
    'Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ForbiddenGlossariesResponse = {
  description:
    'Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const NotFoundResponse = {
  description: 'The requested resource could not be found.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const NotFound404DocTransDownloadResponse = {
  description:
    'Trying to download a document using a non-existing document ID or the wrong document key will result in a 404 error. As stated above, documents can only be downloaded once before they are deleted from the server and their document ID is invalidated.',
  content: {
    'application/json': {
      schema: DocumentTranslationErrorSchema,
      examples: { NotFound: { summary: 'Not Found', value: { message: 'Document not found' } } },
    },
  },
}

const PayloadTooLargeResponse = {
  description: 'The request size exceeds the limit.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const URITooLongResponse = {
  description:
    'The request URL is too long. You can avoid this error by using a POST request instead of a GET request, and sending the parameters in the HTTP body.',
  content: {
    'application/json': { schema: z.xor([ErrorResponseSchema, InfrastructureErrorResponseSchema]) },
  },
}

const UnsupportedMediaTypeGlossariesResponse = {
  description: 'The requested entries format specified in the `Accept` header is not supported.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const TooManyRequestsResponse = {
  description: 'Too many requests. Please wait and resend your request.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const QuotaExceededResponse = {
  description: 'Quota exceeded. The character limit has been reached.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const QuotaExceededGlossariesResponse = {
  description: 'Quota exceeded. Too many requests were made to the glossary endpoints recently.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const BadRequestSpokenTermsResponse = {
  description: 'Bad request. Please check error message and your parameters.',
  content: {
    'application/json': { schema: ErrorResponseSchema, example: { message: 'Bad request' } },
  },
}

const ForbiddenSpokenTermsResponse = {
  description: 'Forbidden. Authorization failed or feature not available for your plan.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      example: {
        message: 'Forbidden. Authorization failed or feature not available for your plan.',
      },
    },
  },
}

const QuotaExceededSpokenTermsResponse = {
  description: 'Quota exceeded. Spoken Terms collection limit reached for your plan.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      example: { message: 'Spoken Terms quota exhausted' },
    },
  },
}

const UnsupportedMediaTypeResponse = {
  description:
    'Unsupported Media Type. Must be application/json or application/x-www-form-urlencoded.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      example: { message: 'Unsupported Content-Type' },
    },
  },
}

const InternalServerErrorResponse = {
  description: 'Internal error.',
  content: {
    'application/json': { schema: z.xor([ErrorResponseSchema, InfrastructureErrorResponseSchema]) },
  },
}

const ServiceUnavailableResponse = {
  description: 'Resource currently unavailable. Try again later.',
  content: {
    'application/json': { schema: z.xor([ErrorResponseSchema, InfrastructureErrorResponseSchema]) },
  },
}

const ServiceUnavailable503DocTransDownloadResponse = {
  description:
    "A 503 result will be returned if the user tries to download a translated document that is currently being processed and is not yet ready for download.\nPlease make sure to check that the document status is 'done' before trying to send a download request.",
  content: {
    'application/json': {
      schema: DocumentTranslationErrorSchema,
      examples: {
        AlreadyDownloaded: {
          summary: 'Already Downloaded',
          value: { message: 'Document already downloaded' },
        },
      },
    },
  },
}

const CustomReportingTagParamsSchema = z
  .string()
  .max(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'X-DeepL-Reporting-Tag',
      in: 'header',
      required: false,
      description:
        "An optional custom reporting tag used to attribute this request's usage to a team, project, customer, or other category of your choosing. Values are limited to 100 characters. See [How to use custom reporting tags](/docs/learning-how-tos/examples-and-guides/how-to-use-custom-reporting-tags) for validation rules, naming guidance, and how to retrieve usage by tag.\n",
      schema: { type: 'string', maxLength: 100 },
      example: 'team-billing',
    },
  })

const DocumentIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'document_id',
      description:
        'The document ID that was sent to the client when the document was uploaded to the API.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      example: '04DE5AD98A02647D83285A36021911C6',
    },
  })

const VoiceTranslateJobIdParamParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'job_id',
      in: 'path',
      required: true,
      description: 'The unique identifier of the job, returned by the create job endpoint.',
      schema: { type: 'string', format: 'uuid', example: 'a74d88fb-ed2a-4943-a664-a4512398b994' },
    },
    example: 'a74d88fb-ed2a-4943-a664-a4512398b994',
  })

const VoiceTranslateJobIncludeParamParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.literal('signed_url')),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'include',
      in: 'query',
      required: false,
      description:
        'Additional fields to include in the response.\n- `signed_url`: Include pre-signed URLs (`signed_upload_url` on create, `signed_download_url` on status) that can be used without an authorization header.',
      schema: { type: 'array', items: { type: 'string', enum: ['signed_url'] } },
      style: 'form',
      explode: true,
    },
  })

const GlossaryIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'glossary_id',
      description: 'A unique ID assigned to the glossary.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const SpokenTermsIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'spoken_terms_id',
      description: 'A unique ID assigned to the Spoken Terms collection.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const SourceLanguageParamsSchema = SourceLanguageSchema.openapi({
  param: {
    name: 'source_lang',
    in: 'query',
    schema: { $ref: '#/components/schemas/SourceLanguage' },
    required: false,
  },
}).exactOptional()

const TargetLanguageParamsSchema = TargetLanguageSchema.openapi({
  param: {
    name: 'target_lang',
    in: 'query',
    required: true,
    schema: { $ref: '#/components/schemas/TargetLanguage' },
  },
})

const XTraceIDHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'A unique identifier for the request that can be included in bug reports to DeepL support.',
    example: '501c3d93cc0c4f11ae2f60a226c2f0f0',
    param: { required: false },
  })

const AuthHeaderSecurityScheme = {
  type: 'apiKey',
  description:
    'Authentication with `Authorization` header and `DeepL-Auth-Key` authentication scheme. Example: `DeepL-Auth-Key <api-key>`\n',
  name: 'Authorization',
  in: 'header',
  'x-default': 'DeepL-Auth-Key ',
}

export const getV2AdminAnalyticsRoute = createRoute({
  method: 'get',
  path: '/v2/admin/analytics',
  tags: ['AdminApi'],
  summary: 'Get usage statistics as an admin',
  description:
    'Retrieve usage statistics for the organization within a specified date range.\nOptionally group the results by API key or by API key and day.',
  operationId: 'adminGetAnalytics',
  request: {
    query: z.object({
      start_date: z.iso
        .date()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: true,
            description: 'Start date for the usage report (ISO 8601 date format).',
            schema: { type: 'string', format: 'date' },
            example: '2025-09-29',
          },
        }),
      end_date: z.iso
        .date()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: true,
            description: 'End date for the usage report (ISO 8601 date format).',
            schema: { type: 'string', format: 'date' },
            example: '2025-10-01',
          },
        }),
      group_by: z
        .enum(['key', 'key_and_day'])
        .exactOptional()
        .openapi({
          param: {
            name: 'group_by',
            in: 'query',
            required: false,
            description:
              'Optional parameter to group usage statistics. Possible values:\n * `key` - Group by API key\n * `key_and_day` - Group by API key and usage date',
            schema: { type: 'string', enum: ['key', 'key_and_day'] },
            example: 'key_and_day',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The usage statistics for the specified date range.',
      content: {
        'application/json': {
          schema: AdminUsageReportSchema,
          examples: {
            withGrouping: {
              summary: 'Usage report grouped by key and day',
              value: {
                usage_report: {
                  total_usage: {
                    total_characters: 9619,
                    text_translation_characters: 4892,
                    document_translation_characters: 0,
                    text_improvement_characters: 4727,
                    speech_to_text_minutes: 107.46,
                  },
                  group_by: 'key_and_day',
                  start_date: '2025-09-29T00:00:00',
                  end_date: '2025-10-01T00:00:00',
                  key_and_day_usages: [
                    {
                      api_key: 'dc88****3a2c',
                      api_key_label: 'Staging API Key',
                      usage_date: '2025-09-29T00:00:00Z',
                      usage: {
                        total_characters: 315,
                        text_translation_characters: 159,
                        document_translation_characters: 0,
                        text_improvement_characters: 156,
                        speech_to_text_minutes: 11.94,
                      },
                    },
                  ],
                },
              },
            },
            withoutGrouping: {
              summary: 'Usage report without grouping',
              value: {
                usage_report: {
                  total_usage: {
                    total_characters: 9619,
                    text_translation_characters: 4892,
                    document_translation_characters: 0,
                    text_improvement_characters: 4727,
                    speech_to_text_minutes: 107.46,
                  },
                  start_date: '2025-09-29T00:00:00',
                  end_date: '2025-10-01T00:00:00',
                },
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: {
      description: 'Bad request. Please check error message and your parameters.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error message describing the issue.' }),
            })
            .openapi({ required: [] }),
          examples: {
            dateRangeExceeded: {
              summary: 'Date range exceeds maximum allowed',
              value: { message: 'Bad request. Reason: Date range cannot exceed 366 days' },
            },
            invalidGroupBy: {
              summary: 'Invalid group_by parameter value',
              value: {
                message: "Value for 'group_by' not supported. Allowed: '', 'key', 'key_and_day'.",
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2AdminAnalyticsCustomTagsRoute = createRoute({
  method: 'get',
  path: '/v2/admin/analytics/custom-tags',
  tags: ['AdminApi'],
  summary: 'Get custom tag usage statistics as an admin',
  description:
    'Retrieve usage statistics broken down by custom tags within a specified date range.\nOptionally aggregate results by day or over the entire period.\nResults are paginated; use the `page` parameter with the `next_page` value from\na previous response to retrieve subsequent pages.',
  operationId: 'adminGetCustomTagAnalytics',
  request: {
    query: z.object({
      start_date: z.iso
        .date()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: true,
            description: 'Start date for the usage report (ISO 8601 date format).',
            schema: { type: 'string', format: 'date' },
            example: '2026-05-17',
          },
        }),
      end_date: z.iso
        .date()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: true,
            description: 'End date for the usage report (ISO 8601 date format).',
            schema: { type: 'string', format: 'date' },
            example: '2026-05-18',
          },
        }),
      aggregate_by: z
        .enum(['period', 'day'])
        .default('period')
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregate_by',
            in: 'query',
            required: false,
            description:
              'Optional parameter to control aggregation of usage statistics. Possible values:\n * `period` - Aggregate usage over the entire date range (default)\n * `day` - Group usage by individual day',
            schema: { type: 'string', enum: ['period', 'day'], default: 'period' },
            example: 'day',
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            description:
              'Page number for pagination. Use the integer value returned in `next_page` from\na previous response to retrieve the next page of results.',
            schema: { type: 'integer' },
            example: 2,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The custom tag usage statistics for the specified date range.',
      content: {
        'application/json': {
          schema: CustomTagUsageReportSchema,
          examples: {
            aggregateByPeriod: {
              summary: 'Usage report aggregated over the full period',
              value: {
                custom_tag_usage_report: {
                  aggregate_by: 'period',
                  start_date: '2026-05-03T00:00:00',
                  end_date: '2026-05-05T00:00:00',
                  next_page: null,
                  usage: [
                    {
                      custom_tag: 'example-custom-tag',
                      breakdown: {
                        total_characters: 380,
                        text_translation_characters: 380,
                        text_improvement_characters: 0,
                        speech_to_text_minutes: 12.5,
                        speech_to_speech_minutes: 4.2,
                      },
                    },
                    {
                      custom_tag: 'example-custom-tag-2',
                      breakdown: {
                        total_characters: 475,
                        text_translation_characters: 475,
                        text_improvement_characters: 0,
                        speech_to_text_minutes: 0,
                        speech_to_speech_minutes: 0,
                      },
                    },
                  ],
                },
              },
            },
            aggregateByDay: {
              summary: 'Usage report aggregated by day',
              value: {
                custom_tag_usage_report: {
                  aggregate_by: 'day',
                  start_date: '2026-05-03T00:00:00',
                  end_date: '2026-05-15T00:00:00',
                  next_page: null,
                  usage: [
                    {
                      custom_tag: 'example-custom-tag',
                      usage_date: '2026-05-04T00:00:00Z',
                      breakdown: {
                        total_characters: 380,
                        text_translation_characters: 380,
                        text_improvement_characters: 0,
                        speech_to_text_minutes: 12.5,
                        speech_to_speech_minutes: 4.2,
                      },
                    },
                    {
                      custom_tag: 'example-custom-tag',
                      usage_date: '2026-05-11T00:00:00Z',
                      breakdown: {
                        total_characters: 595,
                        text_translation_characters: 595,
                        text_improvement_characters: 0,
                        speech_to_text_minutes: 0,
                        speech_to_speech_minutes: 0,
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: {
      description: 'Bad request. Please check error message and your parameters.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error message describing the issue.' }),
            })
            .openapi({ required: [] }),
          examples: {
            dateRangeExceeded: {
              summary: 'Date range exceeds maximum allowed',
              value: { message: 'Bad request. Reason: Date range cannot exceed 366 days' },
            },
            invalidAggregateBy: {
              summary: 'Invalid aggregate_by parameter value',
              value: {
                message: "Value for 'aggregate_by' not supported. Allowed: '', 'period', 'day'.",
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2AdminDeveloperKeysRoute = createRoute({
  method: 'get',
  path: '/v2/admin/developer-keys',
  tags: ['AdminApi'],
  summary: 'Get all developer keys as an admin',
  description:
    'List every developer key in your organization, including labels, creation and\ndeactivation timestamps, and any configured usage limits. Requires an Admin API key.',
  operationId: 'adminGetDeveloperKeys',
  responses: {
    200: {
      description:
        'The get function returns a JSON representation of all developer API keys in the organization.',
      content: { 'application/json': { schema: z.array(ApiKeySchema) } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2AdminDeveloperKeysRoute = createRoute({
  method: 'post',
  path: '/v2/admin/developer-keys',
  tags: ['AdminApi'],
  summary: 'Create a developer key as an admin',
  description:
    'Create a developer key in your organization with the given label and return its\nmetadata, including the `key_id`. Requires an Admin API key.',
  operationId: 'adminCreateDeveloperKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ label: ApiKeyLabelSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The create function returns a JSON representation of the created API key.',
      content: { 'application/json': { schema: ApiKeySchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV2AdminDeveloperKeysDeactivateRoute = createRoute({
  method: 'put',
  path: '/v2/admin/developer-keys/deactivate',
  tags: ['AdminApi'],
  summary: 'Deactivate a developer key as an admin',
  description:
    'Deactivate a developer key so it can no longer authenticate API requests.\nDeactivation is permanent: create a new key to restore access. Requires an Admin API key.',
  operationId: 'adminDeactivateDeveloperKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ key_id: ApiKeyIdSchema }).openapi({ required: ['key_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The deactivate function returns a JSON representation of the deactivated API key.',
      content: { 'application/json': { schema: ApiKeySchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV2AdminDeveloperKeysLabelRoute = createRoute({
  method: 'put',
  path: '/v2/admin/developer-keys/label',
  tags: ['AdminApi'],
  summary: 'Rename a developer key as an admin',
  description:
    "Change the label of a developer key. Labels are for your own bookkeeping and do not\naffect the key's permissions. Requires an Admin API key.",
  operationId: 'adminRenameDeveloperKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key_id: ApiKeyIdSchema,
              label: z
                .string()
                .openapi({ description: 'API key label.', example: 'developer key prod' }),
            })
            .openapi({ required: ['key_id', 'label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The set label function returns a JSON representation of the renamed API key.',
      content: { 'application/json': { schema: ApiKeySchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV2AdminDeveloperKeysLimitsRoute = createRoute({
  method: 'put',
  path: '/v2/admin/developer-keys/limits',
  tags: ['AdminApi'],
  summary: 'Set developer key usage limits as an admin',
  description:
    'Set per-key usage limits for characters, speech-to-text milliseconds, and\nspeech-to-speech milliseconds. Requests made with the key fail with HTTP 456\nonce a limit is reached. Requires an Admin API key.',
  operationId: 'adminSetDeveloperKeyUsageLimits',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key_id: ApiKeyIdSchema,
              characters: ApiKeyUsageCharactersSchema.exactOptional(),
              speech_to_text_milliseconds:
                ApiKeyUsageSpeechToTextMillisecondsSchema.exactOptional(),
              speech_to_speech_milliseconds:
                ApiKeyUsageSpeechToSpeechMillisecondsSchema.exactOptional(),
            })
            .openapi({ required: ['key_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The set usage limits function returns a JSON representation of the modified API key.',
      content: { 'application/json': { schema: ApiKeySchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2TranslateRoute = createRoute({
  method: 'post',
  path: '/v2/translate',
  tags: ['TranslateText'],
  summary: 'Request Translation',
  description:
    'Translate one or more text strings into a target language. Send multiple strings in a\nsingle request, within the request size limit, and specify formatting, tag handling,\nand customization options such as glossaries, style rules, and translation memories.',
  operationId: 'translateText',
  request: {
    headers: z.object({ 'X-DeepL-Reporting-Tag': CustomReportingTagParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z
                .array(z.string().openapi({ example: 'Hello, World!' }))
                .openapi({
                  description:
                    'Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified\nmany times in a single request, within the request size limit (128KiB). Translations are returned\nin the same order as they are requested. Each text in the array is translated independently — texts\ndo not share context with each other.',
                  'x-default': ['Hello, World!'],
                }),
              source_lang: SourceLanguageSchema.exactOptional(),
              target_lang: TargetLanguageSchema.openapi({ 'x-default': 'DE' }),
              context: ContextSchema.exactOptional(),
              show_billed_characters: ShowBilledCharactersSchema.exactOptional(),
              split_sentences: SplitSentencesOptionSchema.exactOptional(),
              preserve_formatting: PreserveFormattingOptionSchema.exactOptional(),
              formality: FormalitySchema.exactOptional(),
              model_type: ModelTypeSchema.exactOptional(),
              glossary_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify the glossary to use for the translation. The glossary needs a dictionary for the\nlanguage pair of the request.\n\nIf `source_lang` is omitted, DeepL detects the source language and uses the dictionary for\nthe detected language pair. The request returns a `400` if the glossary has no dictionary\nfor that pair.\n\nCannot be used together with `glossary_ids`.',
                  example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                }),
              glossary_ids: z
                .array(z.string().openapi({ example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7' }))
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    "Specify up to 5 glossaries to use for the translation, as an array of glossary IDs. Each glossary's matching terms are applied to the translation.\n\nEvery listed glossary must contain a dictionary for the requested language pair.\n\nIf `source_lang` is omitted, DeepL detects the source language and every listed glossary must\ncontain a dictionary for the detected language pair. A single glossary without a matching\ndictionary returns a `400` for the whole request.\n\nCannot be used together with `glossary_id`.",
                }),
              style_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify the [style rule list](/docs/customize/using-style-rules) to use for the translation.\n\n**Important:** The target language has to match the language of the style rule list. A list\ncreated for a root language (for example `en`) applies to that language and all of its variants\n(`EN-GB`, `EN-US`). A list created for a variant (for example `en-GB`) applies only when\n`target_lang` is that variant.\n\nAll `model_type` values are supported.',
                  example: '7ff9bfd6-cd85-4190-8503-d6215a321519',
                }),
              translation_memory_id: TranslationMemoryIdSchema.exactOptional(),
              translation_memory_threshold: TranslationMemoryThresholdSchema.exactOptional(),
              custom_instructions: z
                .array(z.string().openapi({ example: 'Use a friendly, diplomatic tone' }))
                .exactOptional()
                .openapi({
                  description:
                    'Specify a list of instructions to customize the translation behavior. Up to 10 custom instructions can be specified, each with a maximum of 300 characters.',
                }),
              style_profile_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    "Translate with a [style profile](/api-reference/style-profiles/list-all-style-profiles): its glossaries,\nstyle rule lists and translation memories through one ID. The profile is applied per text once the\nsource language is known: the glossaries with a dictionary for the text's language pair, the style\nrule list for the target language, and the translation memories whose source language matches the\ntext. A component that does not fit a text's language pair is left out for that text; this is not an\nerror.\n\nCannot be combined with `glossary_id`, `glossary_ids`, `style_id`, `translation_memory_id`,\n`translation_memory_threshold` or `custom_instructions`. A request that combines them is rejected\nwith `400 Bad Request`. A style profile that does not exist or that your account cannot access is\nrejected with `404 Not Found`.",
                  example: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                }),
              tag_handling: TagHandlingOptionSchema.exactOptional(),
              tag_handling_version: TagHandlingVersionOptionSchema.exactOptional(),
              outline_detection: OutlineDetectionOptionSchema.exactOptional(),
              enable_beta_languages: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'This parameter is maintained for backward compatibility and has no effect.',
                  deprecated: true,
                }),
              non_splitting_tags: z
                .array(z.string().openapi({ example: 'non_splitting_tag' }))
                .exactOptional()
                .openapi({
                  description: 'Comma-separated list of XML tags which never split sentences.',
                }),
              splitting_tags: z
                .array(z.string().openapi({ example: 'splitting_tag' }))
                .exactOptional()
                .openapi({
                  description: 'Comma-separated list of XML tags which always cause splits.',
                }),
              ignore_tags: z
                .array(z.string().openapi({ example: 'ignore_tag' }))
                .exactOptional()
                .openapi({
                  description:
                    'Comma-separated list of XML tags that indicate text not to be translated.',
                }),
            })
            .openapi({ required: ['text', 'target_lang'] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              text: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ example: 'Hello, World!' })),
                )
                .openapi({
                  description:
                    'Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified many times in a single request, within the request size limit (128KiB). Translations are returned in the same order as they are requested. Each text in the array is translated independently — texts do not share context with each other.',
                }),
              source_lang: SourceLanguageSchema.exactOptional(),
              target_lang: TargetLanguageSchema,
              context: ContextSchema.exactOptional(),
              show_billed_characters: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  ShowBilledCharactersSchema,
                )
                .exactOptional(),
              split_sentences: SplitSentencesOptionSchema.exactOptional(),
              preserve_formatting: PreserveFormattingOptionStrSchema.exactOptional(),
              formality: FormalitySchema.exactOptional(),
              model_type: ModelTypeSchema.exactOptional(),
              glossary_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify the glossary to use for the translation. The glossary needs a dictionary for the\nlanguage pair of the request.\n\nIf `source_lang` is omitted, DeepL detects the source language and uses the dictionary for\nthe detected language pair. The request returns a `400` if the glossary has no dictionary\nfor that pair.\n\nCannot be used together with `glossary_ids`.',
                  example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                }),
              glossary_ids: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z
                    .array(z.string().openapi({ example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7' }))
                    .max(5),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Comma-separated list of up to 5 glossary IDs to use for the translation. Each glossary's matching terms are applied to the translation. May also be sent as a repeated parameter.\n\nEvery listed glossary must contain a dictionary for the requested language pair.\n\nIf `source_lang` is omitted, DeepL detects the source language and every listed glossary must\ncontain a dictionary for the detected language pair. A single glossary without a matching\ndictionary returns a `400` for the whole request.\n\nCannot be used together with `glossary_id`.",
                }),
              translation_memory_id: TranslationMemoryIdSchema.exactOptional(),
              translation_memory_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  TranslationMemoryThresholdSchema,
                )
                .exactOptional(),
              style_profile_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    "Translate with a [style profile](/api-reference/style-profiles/list-all-style-profiles): its glossaries,\nstyle rule lists and translation memories through one ID. The profile is applied per text once the\nsource language is known: the glossaries with a dictionary for the text's language pair, the style\nrule list for the target language, and the translation memories whose source language matches the\ntext. A component that does not fit a text's language pair is left out for that text; this is not an\nerror.\n\nCannot be combined with `glossary_id`, `glossary_ids`, `style_id`, `translation_memory_id`,\n`translation_memory_threshold` or `custom_instructions`. A request that combines them is rejected\nwith `400 Bad Request`. A style profile that does not exist or that your account cannot access is\nrejected with `404 Not Found`.",
                  example: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                }),
              tag_handling: TagHandlingOptionSchema.exactOptional(),
              outline_detection: OutlineDetectionOptionStrSchema.exactOptional(),
              enable_beta_languages: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'This parameter is maintained for backward compatibility and has no effect.',
                  deprecated: true,
                }),
              non_splitting_tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ example: 'non_splitting_tag' })),
                )
                .exactOptional()
                .openapi({
                  description: 'Comma-separated list of XML tags which never split sentences.',
                }),
              splitting_tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ example: 'splitting_tag' })),
                )
                .exactOptional()
                .openapi({
                  description: 'Comma-separated list of XML tags which always cause splits.',
                }),
              ignore_tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ example: 'ignore_tag' })),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Comma-separated list of XML tags that indicate text not to be translated.',
                }),
            })
            .openapi({ required: ['text', 'target_lang'] }),
          encoding: { text: {} },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The translate function returns a JSON representation of the translations in the order the text parameters have been specified.',
      content: {
        'application/json': {
          schema: z
            .object({
              translations: z
                .array(
                  z
                    .object({
                      detected_source_language: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The language detected in the source text. It reflects the value of the `source_lang` parameter, when specified.',
                          example: 'EN',
                        }),
                      text: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The translated text.', example: 'Hallo, Welt!' }),
                      billed_characters: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of characters counted by DeepL for billing purposes. Only present if the show_billed_characters parameter is set to true.',
                          example: 42,
                        }),
                      model_type_used: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates the translation model used. Only present if model_type parameter is included in the request.',
                          example: 'quality_optimized',
                        }),
                      tag_handling_version: z
                        .enum(['v2', 'v1'])
                        .exactOptional()
                        .openapi({
                          description:
                            "The version of the tag handling algorithm used for the translation. Only present when the `tag_handling` parameter (`xml` or `html`) is set. If you don't specify `tag_handling_version`, this shows the default that was applied.",
                          example: 'v2',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .min(1)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    414: URITooLongResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2DocumentRoute = createRoute({
  method: 'post',
  path: '/v2/document',
  tags: ['TranslateDocuments'],
  summary: 'Upload and Translate a Document',
  description:
    'Upload a document for translation and receive a `document_id` and `document_key`. Use\nthem to poll the document status and download the translated file. Translation is\nasynchronous: the upload response confirms the request, not a finished translation.',
  operationId: 'translateDocument',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              source_lang: SourceLanguageSchema.exactOptional(),
              target_lang: TargetLanguageSchema,
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "The document file to be translated. The file name should be included in this part's content disposition. As an alternative, the filename parameter can be used. The following file types and extensions are supported:\n  * `docx` - Microsoft Word Document\n  * `pptx` - Microsoft PowerPoint Document\n  * `xlsx` - Microsoft Excel Document\n  * `xlsm` - Microsoft Excel Macro-Enabled Workbook\n  * `pdf` - Portable Document Format\n  * `htm / html` - HTML Document\n  * `txt` - Plain Text Document\n  * `xlf / xliff` - XLIFF Document (versions 1.2, 2.0, and 2.1)\n  * `srt` - SRT Document\n  * `vtt` - WebVTT Subtitle Document\n  * `idml` - Adobe InDesign Markup Language\n  * `xml` - XML Document\n  * `json` - JSON Document\n  * `yaml / yml` - YAML Document\n  * `properties` - Java Properties Document\n  * `strings` - iOS/macOS Strings Document\n  * `md / markdown` - Markdown Document\n  * `dita` - DITA topic (Darwin Information Typing Architecture)\n  * `mif` - Adobe FrameMaker Interchange Format\n  * `zip` - SCORM Package (e-learning content)\n  * `odt` - OpenDocument Text Document\n  * `rtf` - Rich Text Format Document\n  * `resx` - .NET Resource Document\n  * `jpeg` / `jpg` / `png` - Image",
                }),
              filename: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The name of the uploaded file. Can be used as an alternative to including the file name in the file part's content disposition.",
                }),
              output_format: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'File extension of desired format of translated file, for example: `docx`. If unspecified, by default the translated file will be in the same format as the input file.\n',
                }),
              input_conversion_options: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma-separated list of `key:value` conversion options, prefixed with a version, that control how the input document is converted before translation. For example: `version:1,suppress-image-types:all`.\n\nSupported keys:\n\n  * `suppress-image-types` - Leaves the specified types of images embedded in the document untranslated. The value is a hyphen-separated list of image content types (for example `logo-photo` suppresses logos and photos), or `all` to suppress every embedded image. Recognized image content types: `logo`, `icon`, `decorative`, `barcode`, `formula`, `signature`, `handwriting`, `stamp`, `screenshot`, `diagram`, `chart`, `photo`, `illustration`, `comic`, `music`, `infographic`, `table`, `text`, `other`, `unknown`. Only `pptx` documents support this key.\n  * `json-placeholders` - Controls how brace-delimited placeholders in `json` string values are handled. `protect` (the default) keeps identifier-shaped placeholders such as `{stars}` or `{{userName}}` verbatim so they are not translated; `translate` translates them along with the surrounding text. ICU MessageFormat skeletons such as `{count, plural, one {# item} other {# items}}` are always protected, with only the branch text translated, in both modes. Multi-word groups such as `{see note}` are treated as translatable text in both modes.\n\nFor other file types this parameter is ignored. Unrecognized keys are ignored.',
                  example: 'version:1,suppress-image-types:all',
                }),
              formality: FormalitySchema.exactOptional(),
              glossary_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique ID assigned to a glossary. To check glossary support for a language pair, call `GET /v3/languages?resource=translate_document` and verify the `glossary` feature key is present on both the source and target language.\n\nRequires the `source_lang` parameter. The request returns a `400` if `source_lang` is omitted.\n\nCannot be used together with `glossary_ids`.',
                  example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                }),
              glossary_ids: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z
                    .array(z.string().openapi({ example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7' }))
                    .max(5),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Comma-separated list of up to 5 glossary IDs to use for the translation. Each glossary's matching terms are applied to the translated document. May also be sent as a repeated parameter.\n\nEvery listed glossary must contain a dictionary for the requested language pair.\n\nRequires the `source_lang` parameter. The request returns a `400` if `source_lang` is omitted.\n\nCannot be used together with `glossary_id`.",
                }),
              style_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify the [style rule list](/docs/customize/using-style-rules) to use for the translation.\n\n**Important:** The target language has to match the language of the style rule list. A list\ncreated for a root language (for example `en`) applies to that language and all of its variants\n(`EN-GB`, `EN-US`). A list created for a variant (for example `en-GB`) applies only when\n`target_lang` is that variant.',
                  example: '7ff9bfd6-cd85-4190-8503-d6215a321519',
                }),
              translation_memory_id: TranslationMemoryIdSchema.exactOptional(),
              translation_memory_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  TranslationMemoryThresholdSchema,
                )
                .exactOptional(),
              custom_instructions: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify a list of instructions to customize the translation behavior, as a JSON array of strings, for example `["Use a friendly, diplomatic tone"]`. Up to 10 custom instructions can be specified, each with a maximum of 300 characters.\n\nRejected with `400` before the upload is accepted if the value is not a JSON array of strings or exceeds these limits.',
                  example: '["Use a friendly, diplomatic tone"]',
                }),
              style_profile_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    "Translate with a [style profile](/api-reference/style-profiles/list-all-style-profiles): its glossaries,\nstyle rule lists and translation memories through one ID. The profile is applied once the\ndocument's source language is known: the glossaries with a dictionary for the language pair, the\nstyle rule list for the target language, and the translation memories whose source language matches\nthe document. A component that does not fit the language pair is left out; this is not an error.\n\nCannot be combined with `glossary_id`, `glossary_ids`, `style_id`, `translation_memory_id`,\n`translation_memory_threshold` or `custom_instructions`. A request that combines them is rejected\nwith `400 Bad Request`.\nA style profile that does not exist or that your account cannot access is not rejected at upload:\nthe document status reports an error with the message `Style profile not found.`.",
                  example: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                }),
              enable_watermark: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, adds a "Translated by DeepL" watermark to the translated document.\n\nOnly supported for `docx` and `pdf` output. For all other output formats the parameter is ignored and the document is returned without a watermark.',
                }),
              enable_quality_evaluation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    '(beta) When `true`, DeepL also evaluates the finished translation and returns a `quality_evaluation_job_id`. Poll [`GET /v1/quality-evaluations/{job_id}`](/api-reference/quality-evaluations/poll) with it for a per-segment report of translation issues. The translation itself is unaffected.\n\n**Important:** Available to select customers; contact your customer success manager to enable it. Supported for `docx`, `pptx`, `pdf`, `srt`, `idml`, `xml`, `dita`, `mif`, and XLIFF 2.1 uploads, and for the [supported language pairs](/api-reference/quality-evaluations/poll#supported-language-pairs) only.\n\nRejected before the upload is accepted: `403` if quality evaluation is not enabled for the account, `400` for an ineligible file type, an unsupported language pair, or a value other than `true` or `false`.',
                }),
              enable_beta_languages: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'This parameter is maintained for backward compatibility and has no effect.',
                  deprecated: true,
                }),
            })
            .openapi({ required: ['target_lang', 'file'] }),
          examples: {
            Basic: {
              summary: 'Basic Document Translation',
              value: { target_lang: 'DE', file: '@document.docx' },
            },
            Watermark: {
              summary: 'Adding a "Translated by DeepL" watermark (docx/pdf only)',
              value: { target_lang: 'DE', file: '@document.pdf', enable_watermark: true },
            },
            SuppressImages: {
              summary: 'Suppressing translation of embedded images (pptx only)',
              value: {
                target_lang: 'DE',
                file: '@document.pptx',
                input_conversion_options: 'version:1,suppress-image-types:all',
              },
            },
            Glossary: {
              summary: 'Using a Glossary',
              value: {
                source_lang: 'EN',
                target_lang: 'DE',
                file: '@document.docx',
                glossary_id: '[yourGlossaryId]',
              },
            },
            MultipleGlossaries: {
              summary: 'Using Multiple Glossaries',
              value: {
                source_lang: 'EN',
                target_lang: 'DE',
                file: '@document.docx',
                glossary_ids: '[yourGlossaryId1],[yourGlossaryId2]',
              },
            },
            StyleRule: {
              summary: 'Using a Style Rule List',
              value: {
                source_lang: 'EN',
                target_lang: 'DE',
                file: '@document.docx',
                style_id: '[yourStyleId]',
              },
            },
            TranslationMemory: {
              summary: 'Using a Translation Memory',
              value: {
                source_lang: 'EN',
                target_lang: 'DE',
                file: '@document.docx',
                translation_memory_id: '[yourTranslationMemoryId]',
                translation_memory_threshold: 75,
              },
            },
            CustomInstructions: {
              summary: 'Using Custom Instructions',
              value: {
                target_lang: 'DE',
                file: '@document.docx',
                custom_instructions: '["Use a friendly, diplomatic tone", "Keep sentences short"]',
              },
            },
            QualityEvaluation: {
              summary: 'Requesting a quality evaluation report (beta)',
              value: {
                source_lang: 'EN',
                target_lang: 'DE',
                file: '@document.docx',
                enable_quality_evaluation: true,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The document function returns a JSON object containing the ID and encryption key assigned to the uploaded document. Once received by the server, uploaded documents are immediately encrypted using a uniquely generated encryption key. This key is not persistently stored on the server. Therefore, it must be stored by the client and sent back to the server with every subsequent request that refers to this particular document.',
      content: {
        'application/json': {
          schema: z
            .object({
              document_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique ID assigned to the uploaded document and the translation process. Must be used when referring to this particular document in subsequent API requests.',
                  example: '04DE5AD98A02647D83285A36021911C6',
                }),
              document_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique key that is used to encrypt the uploaded document as well as the resulting translation on the server side. Must be provided with every subsequent API request regarding this particular document.',
                  example: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
                }),
              quality_evaluation_job_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '(beta) A unique ID assigned to the quality evaluation. Returned only when the request set `enable_quality_evaluation=true`. Use it to retrieve the report from [`GET /v1/quality-evaluations/{job_id}`](/api-reference/quality-evaluations/poll).',
                  example: '04DE5AD98A02647D83285A36021911C6',
                }),
            })
            .openapi({ required: [] }),
          example: {
            document_id: '04DE5AD98A02647D83285A36021911C6',
            document_key: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2DocumentDocumentIdRoute = createRoute({
  method: 'post',
  path: '/v2/document/{document_id}',
  tags: ['TranslateDocuments'],
  summary: 'Check Document Status',
  description:
    'Retrieve the translation status of an uploaded document. Poll this endpoint until the\nstatus is `done`, then download the result. The response includes an estimated\nremaining time while the document is still translating.',
  operationId: 'getDocumentStatus',
  request: {
    params: z.object({ document_id: DocumentIDParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: DocumentKeySchema,
          examples: {
            basic: {
              summary: 'Basic',
              value: {
                document_key: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
              },
            },
          },
        },
        'application/json': { schema: DocumentKeySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The document status request returns a JSON object containing the document ID that was used in the request as well as string indicating the current status of the translation process. While the translation is running, the estimated number of seconds remaining until the process is done is also included in the response.',
      content: {
        'application/json': {
          schema: z
            .object({
              document_id: z
                .string()
                .openapi({
                  description:
                    'A unique ID assigned to the uploaded document and the requested translation process. The same ID that was used when requesting the translation status.',
                  example: '04DE5AD98A02647D83285A36021911C6',
                }),
              status: z
                .enum(['queued', 'translating', 'done', 'error'])
                .openapi({
                  description:
                    'A short description of the state the document translation process is currently in. Possible values are:\n * `queued` - the translation job is waiting in line to be processed\n * `translating` - the translation is currently ongoing\n * `done` - the translation is done and the translated document is ready for download\n * `error` - an irrecoverable error occurred while translating the document',
                  example: 'done',
                }),
              seconds_remaining: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Estimated number of seconds until the translation is done.\nThis parameter is only included while `status` is `"translating"`.',
                }),
              billed_characters: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The number of characters billed to your account. The characters will only be billed after a successful download request.',
                  example: 1337,
                }),
              error_message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A short description of the error, if available.\nNote that the content is subject to change.\nThis parameter may be included if an error occurred during translation.',
                  example: 'Only available if document status is error',
                }),
            })
            .openapi({ required: ['document_id', 'status'] }),
          examples: {
            translating: {
              summary: 'Translating',
              value: {
                document_id: '04DE5AD98A02647D83285A36021911C6',
                status: 'translating',
                seconds_remaining: 20,
              },
            },
            done: {
              summary: 'Done',
              value: {
                document_id: '04DE5AD98A02647D83285A36021911C6',
                status: 'done',
                billed_characters: 1337,
              },
            },
            queued: {
              summary: 'Queued',
              value: { document_id: '04DE5AD98A02647D83285A36021911C6', status: 'queued' },
            },
            error: {
              summary: 'Error',
              value: {
                document_id: '04DE5AD98A02647D83285A36021911C6',
                status: 'error',
                message: 'Source and target language are equal.',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2DocumentDocumentIdResultRoute = createRoute({
  method: 'post',
  path: '/v2/document/{document_id}/result',
  tags: ['TranslateDocuments'],
  summary: 'Download Translated Document',
  description:
    'Download a translated document. The document must have a status of `done`. Each\ndocument can be downloaded only once: after a successful download DeepL deletes the\nfile and invalidates the `document_id`.',
  operationId: 'downloadDocument',
  request: {
    params: z.object({ document_id: DocumentIDParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: DocumentKeySchema,
          examples: {
            basic: {
              summary: 'Basic',
              value: {
                document_key: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
              },
            },
          },
        },
        'application/json': { schema: DocumentKeySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The document is provided as a download. There is no other data included in the response besides the document data. The content type used in the response corresponds to the document type.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
          examples: { OK: { summary: 'OK', description: 'binary document data' } },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    404: NotFound404DocTransDownloadResponse,
    413: PayloadTooLargeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailable503DocTransDownloadResponse,
    504: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2GlossaryLanguagePairsRoute = createRoute({
  method: 'get',
  path: '/v2/glossary-language-pairs',
  tags: ['ManageGlossaries'],
  summary: 'List Language Pairs Supported by Glossaries',
  description:
    '**Deprecated.** Use `GET /v3/languages?resource=glossary` instead, which returns per-language\navailability including source and target roles.\n\nRetrieve the list of language pairs supported by the glossary feature.',
  operationId: 'listGlossaryLanguages',
  responses: {
    200: {
      description:
        'A JSON object containing the language pairs in its `supported_languages` property.',
      content: {
        'application/json': {
          schema: z
            .object({
              supported_languages: z
                .array(
                  z
                    .object({
                      source_lang: z
                        .string()
                        .openapi({
                          description:
                            'The language in which the source texts in the glossary are specified.',
                          example: 'en',
                        }),
                      target_lang: z
                        .string()
                        .openapi({
                          description:
                            'The language in which the target texts in the glossary are specified.',
                          example: 'de',
                        }),
                    })
                    .openapi({ required: ['source_lang', 'target_lang'] }),
                )
                .exactOptional()
                .openapi({ description: 'The list of supported languages' }),
            })
            .openapi({ required: [] }),
          example: {
            supported_languages: [
              { source_lang: 'de', target_lang: 'en' },
              { source_lang: 'en', target_lang: 'de' },
            ],
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  deprecated: true,
  security: [{ auth_header: [] }],
})

export const getV3GlossariesRoute = createRoute({
  method: 'get',
  path: '/v3/glossaries',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'List all Glossaries',
  description: 'List all glossaries and their meta-information, but not the glossary entries.',
  operationId: 'listMultilingualGlossaries',
  responses: {
    200: {
      description: 'JSON object containing a the glossaries.',
      content: {
        'application/json': {
          schema: z
            .object({ glossaries: z.array(MultilingualGlossarySchema).exactOptional() })
            .openapi({ required: [] }),
          example: {
            glossaries: [
              {
                glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                name: 'My Glossary',
                dictionaries: [
                  { source_lang: 'EN', target_lang: 'DE', entry_count: 1 },
                  { source_lang: 'DE', target_lang: 'EN', entry_count: 2 },
                ],
                creation_time: '2021-08-03T14:16:18.329Z',
              },
            ],
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3GlossariesRoute = createRoute({
  method: 'post',
  path: '/v3/glossaries',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'Create a Glossary',
  description:
    'Create a glossary containing one or more dictionaries, each holding entries for a\nsingle source and target language pair. Use the returned `glossary_id` with the\ntranslation endpoints to apply your own preferred translations.',
  operationId: 'createMultilingualGlossary',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateMultilingualGlossaryParametersSchema,
          examples: {
            Basic: {
              value: {
                name: 'My Glossary',
                dictionaries: [
                  {
                    source_lang: 'en',
                    target_lang: 'de',
                    entries: 'Hello\tGuten Tag',
                    entries_format: 'tsv',
                  },
                  {
                    source_lang: 'de',
                    target_lang: 'en',
                    entries: 'Guten Tag\tHello',
                    entries_format: 'tsv',
                  },
                ],
              },
            },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Name to be associated with the glossary.',
                  example: 'My Glossary',
                }),
              dictionaries: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        source_lang: GlossarySourceLanguageSchema.exactOptional(),
                        target_lang: MultilingualGlossaryTargetLanguageSchema.exactOptional(),
                        entries: GlossaryEntriesSchema.exactOptional(),
                        entries_format: GlossaryEntriesFormatSchema.exactOptional(),
                        entry_count: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            GlossaryEntryCountSchema,
                          )
                          .exactOptional()
                          .openapi({ readOnly: true }),
                      })
                      .openapi({
                        description:
                          'A dictionary contained in a multilingual glossary. Each dictionary contains the mapping of source terms to target language terms.',
                        required: [],
                      }),
                  ),
                )
                .openapi({ description: 'Dictionaries to populate the glossary with.' }),
            })
            .openapi({ required: ['name', 'dictionaries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'The function for creating a glossary returns a JSON object containing the ID of the newly created glossary and a boolean flag that indicates if the created glossary can already be used in translate requests.',
      content: { 'application/json': { schema: MultilingualGlossarySchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3GlossariesGlossaryIdRoute = createRoute({
  method: 'get',
  path: '/v3/glossaries/{glossary_id}',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'Retrieve Glossary Details',
  description: 'Retrieve meta information for a single glossary, omitting the glossary entries.',
  operationId: 'getMultilingualGlossary',
  request: { params: z.object({ glossary_id: GlossaryIDParamsSchema }) },
  responses: {
    200: {
      description: 'JSON object containing the glossary meta-information.',
      content: {
        'application/json': {
          schema: MultilingualGlossarySchema,
          example: {
            glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
            name: 'My Glossary',
            dictionaries: [
              { source_lang: 'EN', target_lang: 'DE', entry_count: 1 },
              { source_lang: 'DE', target_lang: 'EN', entry_count: 2 },
            ],
            creation_time: '2021-08-03T14:16:18.429Z',
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3GlossariesGlossaryIdRoute = createRoute({
  method: 'delete',
  path: '/v3/glossaries/{glossary_id}',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'Delete a Glossary',
  description: 'Deletes the specified glossary.',
  operationId: 'deleteMultilingualGlossary',
  request: { params: z.object({ glossary_id: GlossaryIDParamsSchema }) },
  responses: {
    204: { description: 'Returns no content upon success.' },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const patchV3GlossariesGlossaryIdRoute = createRoute({
  method: 'patch',
  path: '/v3/glossaries/{glossary_id}',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'Edit glossary details',
  description:
    'Edit glossary details, such as name or a dictionary for a source and target language.',
  operationId: 'patchMultilingualGlossary',
  request: {
    params: z.object({ glossary_id: GlossaryIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PatchMultilingualGlossaryParametersSchema,
          examples: {
            Basic: {
              value: {
                name: 'My Glossary',
                dictionaries: [
                  {
                    source_lang: 'en',
                    target_lang: 'de',
                    entries: 'Hello\tGuten Tag',
                    entries_format: 'tsv',
                  },
                ],
              },
            },
          },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: GlossaryIdSchema.exactOptional(),
              dictionaries: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        source_lang: GlossarySourceLanguageSchema.exactOptional(),
                        target_lang: MultilingualGlossaryTargetLanguageSchema.exactOptional(),
                        entries: GlossaryEntriesSchema.exactOptional(),
                        entries_format: GlossaryEntriesFormatSchema.exactOptional(),
                        entry_count: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            GlossaryEntryCountSchema,
                          )
                          .exactOptional()
                          .openapi({ readOnly: true }),
                      })
                      .openapi({
                        description:
                          'A dictionary contained in a multilingual glossary. Each dictionary contains the mapping of source terms to target language terms.',
                        required: [],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Dictionaries to edit the glossary with. Currently only supports 0 or 1 dictionaries in the array.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'JSON object containing the glossary meta-information.',
      content: {
        'application/json': {
          schema: MultilingualGlossarySchema,
          example: {
            glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
            name: 'My Glossary',
            dictionaries: [
              {
                source_lang: 'EN',
                target_lang: 'DE',
                creation_time: '2021-08-03T14:16:18.329Z',
                entry_count: 1,
              },
              {
                source_lang: 'DE',
                target_lang: 'EN',
                creation_time: '2021-08-03T14:16:18.429Z',
                entry_count: 2,
              },
            ],
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3GlossariesGlossaryIdEntriesRoute = createRoute({
  method: 'get',
  path: '/v3/glossaries/{glossary_id}/entries',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'Retrieve Glossary Entries',
  description: 'List the entries of a single glossary in tsv format.',
  operationId: 'getMultilingualGlossaryEntries',
  request: {
    params: z.object({ glossary_id: GlossaryIDParamsSchema }),
    query: z.object({
      source_lang: GlossarySourceLanguageSchema.openapi({
        param: {
          name: 'source_lang',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/GlossarySourceLanguage' },
        },
      }),
      target_lang: MultilingualGlossaryTargetLanguageSchema.openapi({
        param: {
          name: 'target_lang',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/MultilingualGlossaryTargetLanguage' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The entries in tsv, wrapped in a JSON object.',
      content: {
        'application/json': {
          schema: z
            .object({
              dictionaries: z
                .array(MultilingualGlossaryEntriesSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The dictionaries of the glossary, each with its entries in the requested format.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV3GlossariesGlossaryIdDictionariesRoute = createRoute({
  method: 'put',
  path: '/v3/glossaries/{glossary_id}/dictionaries',
  tags: ['ManageMultilingualGlossaries'],
  summary: 'Replaces or creates a dictionary in the glossary with the specified entries.',
  description:
    'Replace all entries in the dictionary for a source and target language pair, or create\nthe dictionary if it does not exist yet. Entries not included in the request are removed.',
  operationId: 'replaceDictionary',
  request: {
    params: z.object({ glossary_id: GlossaryIDParamsSchema }),
    body: {
      description: 'The dictionary to insert into (or overwrite in) the multilingual glossary.',
      content: { 'application/json': { schema: MultilingualGlossaryEntriesSchema } },
    },
  },
  responses: {
    200: {
      description: 'JSON object containing the dictionary meta-information.',
      content: {
        'application/json': {
          schema: MultilingualGlossaryEntriesInformationSchema,
          example: { source_lang: 'EN', target_lang: 'DE', entry_count: 1 },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3GlossariesGlossaryIdDictionariesRoute = createRoute({
  method: 'delete',
  path: '/v3/glossaries/{glossary_id}/dictionaries',
  tags: ['ManageMultilingualGlossaries'],
  summary:
    'Deletes the dictionary associated with the given language pair with the given glossary ID.',
  description:
    'Delete the dictionary for a single source and target language pair from a glossary,\nleaving the glossary and its other dictionaries in place.',
  operationId: 'deleteDictionary',
  request: {
    params: z.object({ glossary_id: GlossaryIDParamsSchema }),
    query: z.object({
      source_lang: GlossarySourceLanguageSchema.openapi({
        param: {
          name: 'source_lang',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/GlossarySourceLanguage' },
        },
      }),
      target_lang: MultilingualGlossaryTargetLanguageSchema.openapi({
        param: {
          name: 'target_lang',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/MultilingualGlossaryTargetLanguage' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Returns no content upon success.' },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededGlossariesResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2GlossariesRoute = createRoute({
  method: 'get',
  path: '/v2/glossaries',
  tags: ['ManageGlossaries'],
  summary: 'List all Glossaries',
  description: 'List all glossaries and their meta-information, but not the glossary entries.',
  operationId: 'listGlossaries',
  responses: {
    200: {
      description: 'JSON object containing a the glossaries.',
      content: {
        'application/json': {
          schema: z
            .object({ glossaries: z.array(MonolingualGlossarySchema).exactOptional() })
            .openapi({ required: [] }),
          example: {
            glossaries: [
              {
                glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                name: 'My Glossary',
                ready: true,
                source_lang: 'EN',
                target_lang: 'DE',
                creation_time: '2021-08-03T14:16:18.329Z',
                entry_count: 1,
              },
            ],
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2GlossariesRoute = createRoute({
  method: 'post',
  path: '/v2/glossaries',
  tags: ['ManageGlossaries'],
  summary: 'Create a Glossary',
  description:
    '**For new integrations we recommend `POST /v3/glossaries`**, which supports multiple\nlanguage pairs in a single glossary.\n\nCreate a glossary for one source and target language pair and return its `glossary_id`.',
  operationId: 'createGlossary',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateGlossaryParametersSchema,
          examples: {
            Basic: {
              value: {
                name: 'My Glossary',
                source_lang: 'en',
                target_lang: 'de',
                entries: 'Hello\tGuten Tag',
                entries_format: 'tsv',
              },
            },
          },
        },
        'application/x-www-form-urlencoded': { schema: CreateGlossaryParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'The function for creating a glossary returns a JSON object containing the ID of the newly created glossary and a boolean flag that indicates if the created glossary can already be used in translate requests.',
      content: { 'application/json': { schema: MonolingualGlossarySchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2GlossariesGlossaryIdRoute = createRoute({
  method: 'get',
  path: '/v2/glossaries/{glossary_id}',
  tags: ['ManageGlossaries'],
  summary: 'Retrieve Glossary Details',
  description: 'Retrieve meta information for a single glossary, omitting the glossary entries.',
  operationId: 'getGlossary',
  request: { params: z.object({ glossary_id: GlossaryIDParamsSchema }) },
  responses: {
    200: {
      description: 'JSON object containing the glossary meta-information.',
      content: {
        'application/json': {
          schema: MonolingualGlossarySchema,
          example: {
            glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
            name: 'My Glossary',
            ready: true,
            source_lang: 'EN',
            target_lang: 'DE',
            creation_time: '2021-08-03T14:16:18.329Z',
            entry_count: 1,
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV2GlossariesGlossaryIdRoute = createRoute({
  method: 'delete',
  path: '/v2/glossaries/{glossary_id}',
  tags: ['ManageGlossaries'],
  summary: 'Delete a Glossary',
  description: 'Deletes the specified glossary.',
  operationId: 'deleteGlossary',
  request: { params: z.object({ glossary_id: GlossaryIDParamsSchema }) },
  responses: {
    204: { description: 'Returns no content upon success.' },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2GlossariesGlossaryIdEntriesRoute = createRoute({
  method: 'get',
  path: '/v2/glossaries/{glossary_id}/entries',
  tags: ['ManageGlossaries'],
  summary: 'Retrieve Glossary Entries',
  description:
    'List the entries of a single glossary in the format specified by the `Accept` header.',
  operationId: 'getGlossaryEntries',
  request: {
    params: z.object({ glossary_id: GlossaryIDParamsSchema }),
    headers: z.object({
      Accept: z
        .string()
        .default('text/tab-separated-values')
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            schema: { type: 'string', default: 'text/tab-separated-values' },
            description:
              'The requested format of the returned glossary entries. Currently, supports only `text/tab-separated-values`.',
            examples: {
              tsv: {
                summary: 'Tab-separated Values',
                value: { in: 'header', Accept: 'text/tab-separated-values' },
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The entries in the requested format.',
      content: {},
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestGlossariesResponse,
    401: UnauthorizedResponse,
    403: ForbiddenGlossariesResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeGlossariesResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2WriteRephraseRoute = createRoute({
  method: 'post',
  path: '/v2/write/rephrase',
  tags: ['RephraseText'],
  summary: 'Improve text',
  description:
    'Rewrite one or more texts to improve fluency and readability, optionally targeting a\nspecific writing style or tone. Use the `correct` endpoint instead when you want a\nminimal spelling and grammar pass rather than broader rewriting.',
  operationId: 'rephraseText',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z
                .array(z.string().openapi({ example: 'this is a example sentence to imprve' }))
                .openapi({
                  description:
                    'Text to be improved. Only UTF-8-encoded plain text is supported. Improvements are returned in the same order as they are requested.',
                  'x-default': ['this is a example sentence to imprve'],
                }),
              target_lang: TargetLanguageWriteSchema.exactOptional(),
              writing_style: WritingStyleSchema.exactOptional(),
              tone: WritingToneSchema.exactOptional(),
            })
            .openapi({ required: ['text'] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              text: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ example: 'this is a example sentence to imprve' })),
                )
                .openapi({
                  description:
                    'Text to be improved. Only UTF-8-encoded plain text is supported. Improvements are returned in the same order as they are requested.',
                  'x-default': ['this is a example sentence to imprve'],
                }),
              target_lang: TargetLanguageWriteSchema.exactOptional(),
              writing_style: WritingStyleSchema.exactOptional(),
              tone: WritingToneSchema.exactOptional(),
            })
            .openapi({ required: ['text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful text improvement.',
      content: {
        'application/json': {
          schema: z
            .object({
              improvements: z
                .array(
                  z
                    .object({
                      detected_source_language: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The language detected in the source text.',
                          example: 'en',
                        }),
                      target_language: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The target language specified by the request.',
                          example: 'en-US',
                        }),
                      text: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The improved text.',
                          example: 'This is a sample sentence to improve.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .min(1)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV2WriteCorrectRoute = createRoute({
  method: 'post',
  path: '/v2/write/correct',
  tags: ['CorrectText'],
  summary: 'Correct text',
  description:
    'Fix spelling and grammar errors in one or more texts. Unlike `/v2/write/rephrase`, this endpoint applies\na minimal-change correction pass and does not rewrite the text for style or tone.',
  operationId: 'correctText',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z
                .array(z.string().openapi({ example: 'this is a example sentence to imprve' }))
                .openapi({
                  description:
                    'Text to be corrected. Only UTF-8-encoded plain text is supported. Corrections are returned in the same order as they are requested.',
                  'x-default': ['this is a example sentence to imprve'],
                }),
              target_lang: TargetLanguageWriteSchema.exactOptional(),
            })
            .openapi({ required: ['text'] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              text: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ example: 'this is a example sentence to imprve' })),
                )
                .openapi({
                  description:
                    'Text to be corrected. Only UTF-8-encoded plain text is supported. Corrections are returned in the same order as they are requested.',
                  'x-default': ['this is a example sentence to imprve'],
                }),
              target_lang: TargetLanguageWriteSchema.exactOptional(),
            })
            .openapi({ required: ['text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful text correction.',
      content: {
        'application/json': {
          schema: z
            .object({
              improvements: z
                .array(
                  z
                    .object({
                      detected_source_language: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The language detected in the source text.',
                          example: 'en',
                        }),
                      target_language: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The target language specified by the request.',
                          example: 'en-US',
                        }),
                      text: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The corrected text.',
                          example: 'This is a sample sentence to improve.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .min(1)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2UsageRoute = createRoute({
  method: 'get',
  path: '/v2/usage',
  tags: ['MetaInformation'],
  summary: 'Check Usage and Limits',
  description:
    'Retrieve character and minute usage for the current billing period together with the\ncorresponding account limits. Poll this endpoint to track consumption and detect when\nan account is approaching its quota.',
  operationId: 'getUsage',
  responses: {
    200: {
      description: "The account's usage and limits.",
      content: {
        'application/json': {
          schema: UsageResponseSchema,
          examples: {
            free: {
              summary: 'Response for API users not on the Pro plan',
              value: { character_count: 180118, character_limit: 1250000 },
            },
            pro: {
              summary: 'Response for API Pro users',
              value: {
                character_count: 5947223,
                character_limit: 1000000000000,
                products: [
                  {
                    product_type: 'write',
                    billing_unit: 'characters',
                    api_key_unit_count: 0,
                    account_unit_count: 5643,
                    api_key_character_count: 0,
                    character_count: 5643,
                  },
                  {
                    product_type: 'translate',
                    billing_unit: 'characters',
                    api_key_unit_count: 636,
                    account_unit_count: 5941580,
                    api_key_character_count: 636,
                    character_count: 5941580,
                  },
                  {
                    product_type: 'speechToText',
                    billing_unit: 'minutes',
                    api_key_unit_count: 30,
                    account_unit_count: 30,
                    api_key_character_count: 0,
                    character_count: 0,
                  },
                  {
                    product_type: 'speechToSpeech',
                    billing_unit: 'minutes',
                    api_key_unit_count: 12,
                    account_unit_count: 12,
                    api_key_character_count: 0,
                    character_count: 0,
                  },
                ],
                api_key_character_count: 636,
                api_key_character_limit: 1000000000000,
                speech_to_text_milliseconds_count: 0,
                speech_to_text_milliseconds_limit: 0,
                speech_to_text_minutes_count: 30,
                speech_to_text_minutes_limit: 600,
                speech_to_speech_minutes_count: 12,
                speech_to_speech_minutes_limit: 600,
                start_time: '2025-05-13T09:18:42Z',
                end_time: '2025-06-13T09:18:42Z',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV2LanguagesRoute = createRoute({
  method: 'get',
  path: '/v2/languages',
  tags: ['MetaInformation'],
  summary: 'Retrieve Supported Languages',
  description:
    '**Deprecated.** Use `GET /v3/languages?resource=translate_text` (or the appropriate resource)\ninstead. See the [migration guide](https://developers.deepl.com/docs/languages/migrating-from-v2-languages)\nfor details.',
  operationId: 'getLanguagesV2',
  request: {
    query: z.object({
      type: z
        .enum(['source', 'target'])
        .default('source')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string', enum: ['source', 'target'], default: 'source' },
            description:
              'Supported values are "source" or "target". If type parameter is not included, defaults to "source".',
            examples: {
              target: { summary: 'Target Languages', value: { in: 'query', type: 'target' } },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'JSON array where each item represents a supported language.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                language: z
                  .string()
                  .openapi({
                    description: 'The language code of the given language.',
                    example: 'DE',
                  }),
                name: z
                  .string()
                  .openapi({ description: 'Name of the language in English.', example: 'German' }),
                supports_formality: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Denotes formality support in case of a target language listing.',
                    example: true,
                  }),
              })
              .openapi({ required: ['language', 'name'] }),
          ),
          example: [
            { language: 'AR', name: 'Arabic' },
            { language: 'BG', name: 'Bulgarian' },
            { language: 'CS', name: 'Czech' },
            { language: 'DA', name: 'Danish' },
            { language: 'DE', name: 'German' },
            { language: 'EL', name: 'Greek' },
            { language: 'EN', name: 'English' },
            { language: 'ES', name: 'Spanish' },
            { language: 'ET', name: 'Estonian' },
            { language: 'FI', name: 'Finnish' },
            { language: 'FR', name: 'French' },
            { language: 'HE', name: 'Hebrew' },
            { language: 'HU', name: 'Hungarian' },
            { language: 'ID', name: 'Indonesian' },
            { language: 'IT', name: 'Italian' },
            { language: 'JA', name: 'Japanese' },
            { language: 'KO', name: 'Korean' },
            { language: 'LT', name: 'Lithuanian' },
            { language: 'LV', name: 'Latvian' },
            { language: 'NB', name: 'Norwegian' },
            { language: 'NL', name: 'Dutch' },
            { language: 'PL', name: 'Polish' },
            { language: 'PT', name: 'Portuguese' },
            { language: 'RO', name: 'Romanian' },
            { language: 'RU', name: 'Russian' },
            { language: 'SK', name: 'Slovak' },
            { language: 'SL', name: 'Slovenian' },
            { language: 'SV', name: 'Swedish' },
            { language: 'TH', name: 'Thai' },
            { language: 'TR', name: 'Turkish' },
            { language: 'UK', name: 'Ukrainian' },
            { language: 'VI', name: 'Vietnamese' },
            { language: 'ZH', name: 'Chinese' },
          ],
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    504: ServiceUnavailableResponse,
    529: TooManyRequestsResponse,
  },
  deprecated: true,
  security: [{ auth_header: [] }],
})

export const getV3SpokenTermsRoute = createRoute({
  method: 'get',
  path: '/v3/spoken-terms',
  tags: ['ManageSpokenTerms'],
  summary: 'List all Spoken Terms collections',
  description: 'List all Spoken Terms collections and their metadata, but not the actual terms.',
  operationId: 'listSpokenTerms',
  responses: {
    200: {
      description: 'JSON object containing all Spoken Terms collections.',
      content: {
        'application/json': {
          schema: z
            .object({ spoken_terms: z.array(SpokenTermsSchema).exactOptional() })
            .openapi({ required: [] }),
          example: {
            spoken_terms: [
              {
                spoken_terms_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                name: 'Technical Terms',
                term_lists: [{ lang: 'en', entry_count: 3 }],
                creation_time: '2025-08-03T14:16:18.329Z',
              },
            ],
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3SpokenTermsRoute = createRoute({
  method: 'post',
  path: '/v3/spoken-terms',
  tags: ['ManageSpokenTerms'],
  summary: 'Create Spoken Terms collection',
  description:
    'Create a new Spoken Terms collection with one or more term lists. Each term list contains terms for a single language. The number of collections per account is limited by your plan.',
  operationId: 'createSpokenTerms',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateSpokenTermsParametersSchema,
          examples: {
            Basic: {
              value: {
                name: 'Technical Terms',
                term_lists: [{ lang: 'en', entries: 'DeepL\nAPI\nwebhook' }],
              },
            },
          },
        },
        'application/x-www-form-urlencoded': { schema: CreateSpokenTermsParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created Spoken Terms collection.',
      content: { 'application/json': { schema: SpokenTermsSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededSpokenTermsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3SpokenTermsSpokenTermsIdRoute = createRoute({
  method: 'get',
  path: '/v3/spoken-terms/{spoken_terms_id}',
  tags: ['ManageSpokenTerms'],
  summary: 'Retrieve Spoken Terms collection details',
  description:
    'Retrieve metadata for a Spoken Terms collection, including term list information but not the actual terms.',
  operationId: 'getSpokenTerms',
  request: { params: z.object({ spoken_terms_id: SpokenTermsIDParamsSchema }) },
  responses: {
    200: {
      description: 'JSON object containing the Spoken Terms metadata.',
      content: {
        'application/json': {
          schema: SpokenTermsSchema,
          example: {
            spoken_terms_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
            name: 'Technical Terms',
            term_lists: [{ lang: 'en', entry_count: 3 }],
            creation_time: '2025-08-03T14:16:18.329Z',
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3SpokenTermsSpokenTermsIdRoute = createRoute({
  method: 'delete',
  path: '/v3/spoken-terms/{spoken_terms_id}',
  tags: ['ManageSpokenTerms'],
  summary: 'Delete Spoken Terms collection',
  description: 'Delete the entire Spoken Terms collection.',
  operationId: 'deleteSpokenTerms',
  request: { params: z.object({ spoken_terms_id: SpokenTermsIDParamsSchema }) },
  responses: {
    204: { description: 'Successfully deleted Spoken Terms collection.' },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const patchV3SpokenTermsSpokenTermsIdRoute = createRoute({
  method: 'patch',
  path: '/v3/spoken-terms/{spoken_terms_id}',
  tags: ['ManageSpokenTerms'],
  summary: 'Edit Spoken Terms collection details',
  description:
    'Update the name of a Spoken Terms collection or merge new entries into an existing term list.',
  operationId: 'patchSpokenTerms',
  request: {
    params: z.object({ spoken_terms_id: SpokenTermsIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PatchSpokenTermsParametersSchema,
          examples: {
            UpdateName: { value: { name: 'Updated Technical Terms' } },
            MergeEntries: {
              value: { term_lists: [{ lang: 'en', entries: 'authentication\nendpoint' }] },
            },
          },
        },
        'application/x-www-form-urlencoded': { schema: PatchSpokenTermsParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated Spoken Terms collection.',
      content: { 'application/json': { schema: SpokenTermsSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3SpokenTermsSpokenTermsIdEntriesRoute = createRoute({
  method: 'get',
  path: '/v3/spoken-terms/{spoken_terms_id}/entries',
  tags: ['ManageSpokenTerms'],
  summary: 'Retrieve Spoken Terms entries',
  description: 'Retrieve the actual terms for a specific language from a Spoken Terms collection.',
  operationId: 'getSpokenTermsEntries',
  request: {
    params: z.object({ spoken_terms_id: SpokenTermsIDParamsSchema }),
    query: z.object({
      lang: z
        .string()
        .openapi({
          param: {
            name: 'lang',
            in: 'query',
            required: true,
            description: 'The language code (ISO 639-1) for the term list to retrieve.',
            schema: { type: 'string', example: 'en' },
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'JSON object containing the term list entries.',
      content: {
        'application/json': {
          schema: SpokenTermsEntriesSchema,
          example: { lang: 'en', entries: 'DeepL\nAPI\nwebhook' },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV3SpokenTermsSpokenTermsIdTermListsRoute = createRoute({
  method: 'put',
  path: '/v3/spoken-terms/{spoken_terms_id}/term-lists',
  tags: ['ManageSpokenTerms'],
  summary: 'Replace or create a term list',
  description:
    "Replace an existing term list for a language, or create a new one if it doesn't exist.",
  operationId: 'putSpokenTermsList',
  request: {
    params: z.object({ spoken_terms_id: SpokenTermsIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PutSpokenTermsListParametersSchema,
          examples: {
            Basic: { value: { lang: 'en', entries: 'DeepL\nAPI\nwebhook\nintegration' } },
          },
        },
        'application/x-www-form-urlencoded': { schema: PutSpokenTermsListParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully replaced or created term list.',
      content: { 'application/json': { schema: SpokenTermsListSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    404: NotFoundResponse,
    413: PayloadTooLargeResponse,
    415: UnsupportedMediaTypeResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3SpokenTermsSpokenTermsIdTermListsRoute = createRoute({
  method: 'delete',
  path: '/v3/spoken-terms/{spoken_terms_id}/term-lists',
  tags: ['ManageSpokenTerms'],
  summary: 'Delete a term list',
  description: 'Delete a term list for a specific language from the Spoken Terms collection.',
  operationId: 'deleteSpokenTermsList',
  request: {
    params: z.object({ spoken_terms_id: SpokenTermsIDParamsSchema }),
    query: z.object({
      lang: z
        .string()
        .openapi({
          param: {
            name: 'lang',
            in: 'query',
            required: true,
            description: 'The language code (ISO 639-1) for the term list to delete.',
            schema: { type: 'string', example: 'en' },
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted term list.' },
    400: BadRequestSpokenTermsResponse,
    401: UnauthorizedResponse,
    403: ForbiddenSpokenTermsResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3LanguagesResourcesRoute = createRoute({
  method: 'get',
  path: '/v3/languages/resources',
  tags: ['MetaInformation'],
  summary: 'Retrieve Language Resources',
  description:
    "Returns all DeepL API resources and the features they support.\n\nFor each feature, the response indicates which languages must support it for the feature to be\navailable — source only (`needs_source_support`), target only (`needs_target_support`), or both.\nThis allows clients to determine feature availability for a language pair by checking the\nappropriate language's `features` object returned by `GET /v3/languages`.",
  operationId: 'getLanguageResources',
  responses: {
    200: {
      description: 'JSON array where each item represents a DeepL API product.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                name: z
                  .enum([
                    'translate_text',
                    'translate_document',
                    'glossary',
                    'voice',
                    'write',
                    'style_rules',
                    'translation_memory',
                  ])
                  .openapi({ description: 'The resource identifier.', example: 'translate_text' }),
                features: z
                  .array(
                    z
                      .object({
                        name: z
                          .enum([
                            'formality',
                            'style_rules',
                            'tag_handling',
                            'glossary',
                            'writing_style',
                            'tone',
                            'auto_detection',
                            'transcription',
                            'translated_speech',
                            'spoken_terms',
                            'translation_memory',
                          ])
                          .openapi({
                            description:
                              'The feature identifier, corresponding to keys in the `features` object returned by `GET /v3/languages`.',
                          }),
                        needs_source_support: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'If `true`, the source language must support this feature for it to be available. Defaults to `false` if absent.',
                          }),
                        needs_target_support: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'If `true`, the target language must support this feature for it to be available. Defaults to `false` if absent.',
                          }),
                      })
                      .openapi({ required: ['name'] }),
                  )
                  .openapi({
                    description:
                      'Features supported by this resource. Each feature indicates which languages\nmust support it for the feature to be available — source, target, or both.',
                  }),
              })
              .openapi({ required: ['name', 'features'] }),
          ),
          example: [
            {
              name: 'translate_text',
              features: [
                { name: 'formality', needs_target_support: true },
                { name: 'style_rules', needs_target_support: true },
                { name: 'tag_handling', needs_source_support: true, needs_target_support: true },
                { name: 'glossary', needs_source_support: true, needs_target_support: true },
                { name: 'auto_detection', needs_source_support: true },
              ],
            },
            {
              name: 'voice',
              features: [
                { name: 'glossary', needs_source_support: true, needs_target_support: true },
              ],
            },
            { name: 'style_rules', features: [] },
          ],
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3LanguagesRoute = createRoute({
  method: 'get',
  path: '/v3/languages',
  tags: ['MetaInformation'],
  summary: 'Retrieve Languages',
  description:
    'Returns languages supported by the specified DeepL API resource. Each language indicates whether it can\nbe used as a source language, a target language, or both, along with the features it supports for that\nresource.',
  operationId: 'getLanguages',
  request: {
    query: z.object({
      resource: z
        .enum([
          'translate_text',
          'translate_document',
          'glossary',
          'voice',
          'write',
          'style_rules',
          'translation_memory',
        ])
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              enum: [
                'translate_text',
                'translate_document',
                'glossary',
                'voice',
                'write',
                'style_rules',
                'translation_memory',
              ],
            },
            example: 'translate_text',
            'x-default': 'translate_text',
            description:
              'The resource to retrieve languages for. Supported values: `translate_text`, `translate_document`,\n`glossary`, `voice`, `write`, `style_rules`, `translation_memory`.',
          },
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['beta', 'external'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string', enum: ['beta', 'external'] } },
            style: 'form',
            explode: true,
            description:
              'Controls which languages and features are included in the response. By default, only stable\nlanguages and features are returned. Values can be combined with repeated parameters\n(e.g. `?include=beta&include=external`).\n\n- `beta`: Include languages and features in beta, in addition to stable\n- `external`: Include features that rely on third-party service providers',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'JSON array where each item represents a supported language.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                lang: z
                  .string()
                  .openapi({ description: 'The language code (BCP 47).', example: 'de' }),
                name: z
                  .string()
                  .openapi({ description: 'Name of the language in English.', example: 'German' }),
                usable_as_source: z
                  .boolean()
                  .openapi({
                    description:
                      'Whether this language can be used as a source language with the specified resource.',
                  }),
                usable_as_target: z
                  .boolean()
                  .openapi({
                    description:
                      'Whether this language can be used as a target language with the specified resource.',
                  }),
                status: z
                  .enum(['stable', 'beta', 'early_access'])
                  .openapi({
                    description: 'Availability status of this language.',
                    example: 'stable',
                  }),
                features: z
                  .record(
                    z.string(),
                    z
                      .object({
                        status: z
                          .enum(['stable', 'beta', 'early_access'])
                          .openapi({
                            description: 'Availability status of this feature for this language.',
                          }),
                      })
                      .openapi({ required: ['status'] }),
                  )
                  .openapi({
                    description:
                      'Features supported for this language with the specified resource. Always present;\nempty object if no optional features are supported. Each key is a feature name;\nthe value is an object with at least a `status` field. Consult `GET /v3/languages/resources`\nto determine whether a feature must be present on the source language, target language,\nor both for a given resource.',
                    example: {
                      formality: { status: 'stable' },
                      tag_handling: { status: 'stable' },
                      glossary: { status: 'stable' },
                    },
                  }),
              })
              .openapi({
                required: [
                  'lang',
                  'name',
                  'usable_as_source',
                  'usable_as_target',
                  'features',
                  'status',
                ],
              }),
          ),
          examples: {
            translateTextLanguages: {
              summary: 'Languages for text translation',
              value: [
                {
                  lang: 'de',
                  name: 'German',
                  usable_as_source: true,
                  usable_as_target: true,
                  status: 'stable',
                  features: {
                    formality: { status: 'stable' },
                    tag_handling: { status: 'stable' },
                    glossary: { status: 'stable' },
                  },
                },
                {
                  lang: 'en',
                  name: 'English',
                  usable_as_source: true,
                  usable_as_target: false,
                  status: 'stable',
                  features: { tag_handling: { status: 'stable' }, glossary: { status: 'stable' } },
                },
                {
                  lang: 'en-US',
                  name: 'English (American)',
                  usable_as_source: false,
                  usable_as_target: true,
                  status: 'stable',
                  features: { tag_handling: { status: 'stable' }, glossary: { status: 'stable' } },
                },
              ],
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3TranslationMemoriesRoute = createRoute({
  method: 'get',
  path: '/v3/translation_memories',
  tags: ['TranslationMemories'],
  summary: 'List translation memories',
  description: 'Retrieve a list of translation memories associated with the authenticated account.',
  operationId: 'listTranslationMemories',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', default: 0 },
            description:
              'The index of the first page to return. Use with `page_size` to get the next page of translation memories.',
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            schema: { type: 'integer', default: 10, minimum: 1, maximum: 100 },
            description:
              'The maximum number of translation memories to return. Values above 100 are reduced to 100.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of translation memories.',
      content: {
        'application/json': {
          schema: z
            .object({
              translation_memories: z.array(TranslationMemorySchema).exactOptional(),
              total_count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The total number of translation memories available.',
                  example: 2,
                }),
            })
            .openapi({ required: [] }),
          examples: {
            Basic: {
              value: {
                translation_memories: [
                  {
                    translation_memory_id: 'a74d88fb-ed2a-4943-a664-a4512398b994',
                    name: 'Legal',
                    source_language: 'en',
                    target_languages: ['es', 'de'],
                    segment_count: 3542,
                  },
                  {
                    translation_memory_id: '855d36ab-6112-4ef5-8868-0d69bc4d826a',
                    name: 'Medical terms',
                    source_language: 'de',
                    target_languages: ['fr', 'ja', 'zh'],
                    segment_count: 23,
                  },
                ],
                total_count: 2,
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3TranslationMemoriesImportRoute = createRoute({
  method: 'post',
  path: '/v3/translation_memories/import',
  tags: ['TranslationMemories'],
  summary: 'Import a translation memory',
  description:
    "Create a translation memory by importing a TMX file.\n\nThis endpoint does not accept the file itself. It returns a short-lived `upload_url`, and you\nupload the TMX file to that URL with a separate `PUT` request. Processing starts automatically\nonce the upload completes, so there is no third call to confirm it.\n\n1. `POST /v3/translation_memories/import` with the file's name and size. The response returns a\n   `job_id`, an `upload_url`, and the `expires_at` time after which the URL stops working.\n2. `PUT` the TMX file to `upload_url`. Do not send your `Authorization` header on this request,\n   because the URL is already signed.\n3. Poll [Retrieve an import or export job](/api-reference/translation-memory/retrieve-a-translation-memory-job)\n   until the status is `completed`. The new `translation_memory_id` is on the job result.\n\nRequires an API key with the `translation_memories:write` scope.",
  operationId: 'createTranslationMemoryImport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source_file: z
                .object({
                  file_name: z
                    .string()
                    .max(100)
                    .openapi({
                      description:
                        'The name of the TMX file you intend to upload, including its extension. At most 100\ncharacters.',
                      example: 'legal.tmx',
                    }),
                  content_type: z
                    .string()
                    .max(127)
                    .default('application/xml')
                    .exactOptional()
                    .openapi({
                      description:
                        'The MIME type of the file. Defaults to `application/xml`, which is correct for TMX.\nTMX is currently the only supported import format. At most 127 characters.',
                      example: 'application/xml',
                    }),
                  content_length: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(1n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 1,
                      description:
                        'The size of the file in bytes. Must be greater than 0 and at most 1 GB. An oversize\nvalue is rejected with `400 Bad Request`.',
                      example: 1024,
                    }),
                })
                .openapi({ required: ['file_name', 'content_length'] }),
              parameters: z
                .object({
                  display_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name to give the new translation memory. If you omit this, the translation memory\nis created without a name.',
                      example: 'Legal',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['source_file'] }),
          examples: {
            Basic: {
              value: {
                source_file: {
                  file_name: 'legal.tmx',
                  content_type: 'application/xml',
                  content_length: 1024,
                },
                parameters: { display_name: 'Legal' },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'The import job was created. Upload the file to `upload_url` before `expires_at`.',
      content: {
        'application/json': {
          schema: z
            .object({
              job_id: z
                .uuid()
                .openapi({
                  description: "The identifier of the import job. Use it to poll the job's status.",
                  example: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                }),
              upload_url: z
                .url()
                .openapi({
                  description:
                    'A signed URL to `PUT` the TMX file to. Do not send your `Authorization` header with the\nupload request.',
                  example: 'https://assets.deepl.com/upload/0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                }),
              expires_at: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The time the `upload_url` stops accepting uploads, in the ISO 8601-1:2019 format. After\nthis time, create a new import job.',
                  example: '2026-08-06T15:34:25.223Z',
                }),
            })
            .openapi({ required: ['job_id', 'upload_url', 'expires_at'] }),
          examples: {
            Basic: {
              value: {
                job_id: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                upload_url: 'https://assets.deepl.com/upload/0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                expires_at: '2026-08-06T15:34:25.223Z',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    456: {
      description:
        'You have reached the maximum number of translation memories for your account. Delete a\ntranslation memory before creating another one.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3TranslationMemoriesJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v3/translation_memories/jobs/{job_id}',
  tags: ['TranslationMemories'],
  summary: 'Retrieve an import or export job',
  description:
    'Retrieve the status of a translation memory import or export job.\n\nPoll this endpoint after creating a job. The `operation` field tells you which kind of job it is,\nand the single entry in `results` carries the status and, once the job finishes, its output: the\nnew `translation_memory_id` for an import, or a `download_url` for an export.\n\nRequires an API key with the `translation_memories:read` scope.',
  operationId: 'getTranslationMemoryJob',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description:
              'The identifier of the job, returned when you created the import or export.',
            example: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the current state of the job.',
      content: {
        'application/json': {
          schema: TranslationMemoryJobSchema,
          examples: {
            'Import awaiting upload': {
              value: {
                job_id: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                product: 'translation_memory',
                operation: 'import',
                creation_time: '2026-08-06T15:04:25.223Z',
                updated_time: '2026-08-06T15:04:25.223Z',
                source_file: { content_type: 'application/xml', content_length: 1024 },
                parameters: { display_name: 'Legal' },
                results: [
                  {
                    status: 'awaiting_input',
                    status_metadata: { required_action: 'Waiting for upload' },
                  },
                ],
              },
            },
            'Import completed': {
              value: {
                job_id: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                product: 'translation_memory',
                operation: 'import',
                creation_time: '2026-08-06T15:04:25.223Z',
                updated_time: '2026-08-06T15:06:11.418Z',
                source_file: { content_type: 'application/xml', content_length: 1024 },
                parameters: { display_name: 'Legal' },
                results: [
                  {
                    status: 'completed',
                    translation_memory_id: 'a74d88fb-ed2a-4943-a664-a4512398b994',
                    skipped_segment_count: 12,
                  },
                ],
              },
            },
            'Export completed': {
              value: {
                job_id: '7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13',
                product: 'translation_memory',
                operation: 'export',
                creation_time: '2026-08-06T15:04:25.223Z',
                updated_time: '2026-08-06T15:05:02.771Z',
                parameters: { translation_memory_id: 'a74d88fb-ed2a-4943-a664-a4512398b994' },
                results: [
                  {
                    status: 'completed',
                    download_url:
                      'https://assets.deepl.com/download/7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13',
                    expires_at: '2026-08-06T16:05:02.771Z',
                  },
                ],
              },
            },
            Failed: {
              value: {
                job_id: '0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40',
                product: 'translation_memory',
                operation: 'import',
                creation_time: '2026-08-06T15:04:25.223Z',
                updated_time: '2026-08-06T15:04:58.102Z',
                source_file: { content_type: 'application/xml', content_length: 1024 },
                parameters: { display_name: 'Legal' },
                results: [
                  { status: 'failed', error: { message: 'The uploaded file is not valid TMX.' } },
                ],
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description: 'The job could not be found.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3TranslationMemoriesTranslationMemoryIdRoute = createRoute({
  method: 'get',
  path: '/v3/translation_memories/{translation_memory_id}',
  tags: ['TranslationMemories'],
  summary: 'Retrieve a translation memory',
  description:
    'Retrieve a single translation memory by its ID, including its languages and segment count.\n\nTo read the stored segments themselves, use\n[List translation memory segments](/api-reference/translation-memory/list-translation-memory-segments).\n\nRequires an API key with the `translation_memories:read` scope.',
  operationId: 'getTranslationMemory',
  request: {
    params: z.object({
      translation_memory_id: TranslationMemoryIdSchema.openapi({
        param: {
          name: 'translation_memory_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/TranslationMemoryId' },
          description: 'The ID of the translation memory to retrieve.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the translation memory.',
      content: {
        'application/json': {
          schema: TranslationMemorySchema,
          examples: {
            Basic: {
              value: {
                translation_memory_id: 'a74d88fb-ed2a-4943-a664-a4512398b994',
                name: 'Legal',
                source_language: 'en',
                target_languages: ['es', 'de'],
                segment_count: 3542,
                creation_time: '2026-04-01T16:34:25.223Z',
                updated_time: '2026-08-06T09:12:44.108Z',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The translation memory could not be found. This is also returned for a translation memory that\nbelongs to another account.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3TranslationMemoriesTranslationMemoryIdRoute = createRoute({
  method: 'delete',
  path: '/v3/translation_memories/{translation_memory_id}',
  tags: ['TranslationMemories'],
  summary: 'Delete a translation memory',
  description:
    'Delete a translation memory and all of its segments.\n\nDeletion is permanent and cannot be undone. Export the translation memory first if you need a\ncopy of its contents. Translation requests that pass the deleted `translation_memory_id` fail\nafter this call, so update your integration before deleting.\n\nRequires an API key with the `translation_memories:write` scope.',
  operationId: 'deleteTranslationMemory',
  request: {
    params: z.object({
      translation_memory_id: TranslationMemoryIdSchema.openapi({
        param: {
          name: 'translation_memory_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/TranslationMemoryId' },
          description: 'The ID of the translation memory to delete.',
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The translation memory was deleted. The response has no body.',
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The translation memory could not be found. This is also returned for a translation memory that\nbelongs to another account.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3TranslationMemoriesTranslationMemoryIdSegmentsRoute = createRoute({
  method: 'get',
  path: '/v3/translation_memories/{translation_memory_id}/segments',
  tags: ['TranslationMemories'],
  summary: 'List translation memory segments',
  description:
    'List the segments stored in a translation memory, one page at a time. Each entry is a source\nsegment with its translations in every target language.\n\nThis endpoint uses cursor-based pagination rather than the numbered pages used by\n[List translation memories](/api-reference/translation-memory/list-translation-memories). Omit\n`page_cursor` on your first call, then pass the `next_page_cursor` from each response to get the\nfollowing page. When a response has no `next_page_cursor`, you have reached the last page.\n\nRequires an API key with the `translation_memories:read` scope.',
  operationId: 'getTranslationMemorySegments',
  request: {
    params: z.object({
      translation_memory_id: TranslationMemoryIdSchema.openapi({
        param: {
          name: 'translation_memory_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/TranslationMemoryId' },
          description: 'The ID of the translation memory whose segments you want to list.',
        },
      }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            schema: { type: 'integer', default: 50, minimum: 1, maximum: 100 },
            description:
              'The maximum number of segments to return per page. Values above 100 are reduced to 100.',
            required: false,
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_cursor',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The `next_page_cursor` from a previous response. Omit this on your first call. Treat the value\nas opaque: do not build or modify it yourself.',
            required: false,
          },
        }),
      filter_text: z
        .string()
        .min(2)
        .exactOptional()
        .openapi({
          param: {
            name: 'filter_text',
            in: 'query',
            schema: { type: 'string', minLength: 2 },
            description:
              'Return only segments where this text appears in the source or in any target translation. Must be\nat least 2 characters.',
            required: false,
          },
        }),
      filter_case_sensitive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'filter_case_sensitive',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'Whether `filter_text` is matched case-sensitively.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a page of segments.',
      content: {
        'application/json': {
          schema: z
            .object({
              segments: z
                .array(TranslationMemorySegmentSchema)
                .openapi({ description: 'The segments on this page.' }),
              segment_count: z
                .int()
                .openapi({
                  description:
                    'The total number of segments in the translation memory. This is not reduced by\n`filter_text`, so a filtered request still reports the full count. Do not use it to\npredict how many results a filtered query returns.',
                  example: 3542,
                }),
              next_page_cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The cursor to pass as `page_cursor` to retrieve the next page. Absent on the last page.',
                  example: 'eyJvZmZzZXQiOjUwfQ',
                }),
            })
            .openapi({ required: ['segments', 'segment_count'] }),
          examples: {
            Basic: {
              value: {
                segments: [
                  {
                    source_segment_id: '4f1c2d3e-8a9b-4c5d-9e6f-7a8b9c0d1e2f',
                    source_text: 'This agreement is governed by the laws of Germany.',
                    creation_time: '2026-04-01T16:34:25.223Z',
                    updated_time: '2026-04-01T16:34:25.223Z',
                    last_used_time: '2026-08-05T11:02:18.771Z',
                    targets: [
                      {
                        target_segment_id: '9b8a7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d',
                        target_language: 'de',
                        target_text:
                          'Dieser Vertrag unterliegt dem Recht der Bundesrepublik Deutschland.',
                        creation_time: '2026-04-01T16:34:25.223Z',
                        updated_time: '2026-04-01T16:34:25.223Z',
                        last_used_time: '2026-08-05T11:02:18.771Z',
                      },
                      {
                        target_segment_id: '2c3d4e5f-6a7b-4c8d-9e0f-1a2b3c4d5e6f',
                        target_language: 'es',
                        target_text: 'Este contrato se rige por las leyes de Alemania.',
                        creation_time: '2026-04-01T16:34:25.223Z',
                        updated_time: '2026-04-01T16:34:25.223Z',
                        last_used_time: '2026-07-22T08:41:05.330Z',
                      },
                    ],
                  },
                ],
                segment_count: 3542,
                next_page_cursor: 'eyJvZmZzZXQiOjUwfQ',
              },
            },
            'Last page': {
              value: {
                segments: [
                  {
                    source_segment_id: '7a8b9c0d-1e2f-4a3b-8c4d-5e6f7a8b9c0d',
                    source_text: 'Termination requires 30 days written notice.',
                    creation_time: '2026-04-01T16:34:25.223Z',
                    updated_time: '2026-04-01T16:34:25.223Z',
                    last_used_time: '2026-08-01T14:20:09.512Z',
                    targets: [
                      {
                        target_segment_id: '0d1e2f3a-4b5c-4d6e-8f7a-8b9c0d1e2f3a',
                        target_language: 'de',
                        target_text:
                          'Die Kündigung erfordert eine schriftliche Frist von 30 Tagen.',
                        creation_time: '2026-04-01T16:34:25.223Z',
                        updated_time: '2026-04-01T16:34:25.223Z',
                        last_used_time: '2026-08-01T14:20:09.512Z',
                      },
                    ],
                  },
                ],
                segment_count: 3542,
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The translation memory could not be found. This is also returned for a translation memory that\nbelongs to another account.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3TranslationMemoriesTranslationMemoryIdExportRoute = createRoute({
  method: 'post',
  path: '/v3/translation_memories/{translation_memory_id}/export',
  tags: ['TranslationMemories'],
  summary: 'Export a translation memory',
  description:
    'Export a translation memory as a TMX file.\n\nThe export runs as a background job. Poll\n[Retrieve an import or export job](/api-reference/translation-memory/retrieve-a-translation-memory-job)\nuntil the status is `completed`, then download the file from the `download_url` on the job result.\nThat URL is short-lived, so download the file rather than storing the link.\n\nIf a recent export of the same translation memory is still available, DeepL reuses it and returns\n`200 OK` with that job instead of starting a new one. Handle both `200` and `202` as success. If a\ndifferent export of the same translation memory is still running, the request returns\n`409 Conflict`.\n\nRequires an API key with the `translation_memories:read` scope.',
  operationId: 'createTranslationMemoryExport',
  request: {
    params: z.object({
      translation_memory_id: TranslationMemoryIdSchema.openapi({
        param: {
          name: 'translation_memory_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/TranslationMemoryId' },
          description: 'The ID of the translation memory to export.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description:
        'An existing export was reused. Poll the returned `job_id` for the download URL.',
      content: {
        'application/json': {
          schema: CreateTranslationMemoryExportSchema,
          examples: {
            Basic: {
              value: {
                job_id: '7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13',
                parameters: { translation_memory_id: 'a74d88fb-ed2a-4943-a664-a4512398b994' },
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    202: {
      description: 'The export job was created. Poll the returned `job_id` for the download URL.',
      content: {
        'application/json': {
          schema: CreateTranslationMemoryExportSchema,
          examples: {
            Basic: {
              value: {
                job_id: '7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13',
                parameters: { translation_memory_id: 'a74d88fb-ed2a-4943-a664-a4512398b994' },
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The translation memory could not be found. This is also returned for a translation memory that\nbelongs to another account.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description:
        'An export of this translation memory is already in progress. Poll that job instead of starting\nanother export.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3StyleProfilesRoute = createRoute({
  method: 'get',
  path: '/v3/style_profiles',
  tags: ['ManageStyleProfiles'],
  summary: 'List style profiles',
  description:
    'Retrieve a list of style profiles available to the authenticated account, newest first.\n\nThe list includes style profiles that have been shared with the account.\n\nRequires an API key with the `style_profiles:read` scope.',
  operationId: 'listStyleProfiles',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', default: 0 },
            description:
              'The index of the first page to return. Use with `page_size` to get the next page of style profiles.',
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            schema: { type: 'integer', default: 10 },
            description:
              'The maximum number of style profiles to return. Values above 100 are reduced to 100.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of style profiles.',
      content: {
        'application/json': {
          schema: z
            .object({
              style_profiles: z.array(StyleProfileSchema).exactOptional(),
              total_count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The total number of style profiles available to the account.',
                  example: 2,
                }),
            })
            .openapi({ required: [] }),
          examples: {
            Basic: {
              value: {
                style_profiles: [
                  {
                    style_profile_id: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                    name: 'Legal, German',
                    description: 'Contract wording for the German market.',
                    industry: 'Legal',
                    glossary_ids: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
                    style_rule_ids: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                    translation_memory_ids: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                    glossary_priority_order_enabled: true,
                    creation_time: '2026-04-01T16:34:25.223Z',
                    updated_time: '2026-08-06T09:12:44.108Z',
                  },
                  {
                    style_profile_id: 'c58e2a71-90b4-4d6f-a2e3-71d5c8b4f902',
                    name: 'Marketing, Japanese',
                    glossary_ids: [],
                    style_rule_ids: [],
                    translation_memory_ids: [],
                    glossary_priority_order_enabled: false,
                    creation_time: '2026-07-14T11:02:09.640Z',
                    updated_time: '2026-07-14T11:02:09.640Z',
                  },
                ],
                total_count: 2,
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3StyleProfilesRoute = createRoute({
  method: 'post',
  path: '/v3/style_profiles',
  tags: ['ManageStyleProfiles'],
  summary: 'Create a style profile',
  description:
    'Create a style profile. Only `name` is required.\n\nIf any of the component IDs cannot be used, the request fails and no style profile is created.\n\nRequires an API key with the `style_profiles:write` scope.',
  operationId: 'createStyleProfile',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'Name for the style profile. At most 255 characters. An empty name is rejected with\n`400 Bad Request`.',
                  example: 'Legal, German',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Free-text description of the style profile. At most 1000 characters. Omit it to create\nthe style profile without a description.',
                  example: 'Contract wording for the German market.',
                }),
              industry: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The industry the style profile is written for. At most 255 characters. Omit it to create\nthe style profile without an industry.',
                  example: 'Legal',
                }),
              glossary_ids: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of the glossaries to link, highest priority first. The order only takes effect\nwith `glossary_priority_order_enabled`. Defaults to an empty list.',
                  example: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
                }),
              style_rule_ids: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of the style rule lists to link. At most one style rule list per target\nlanguage. Defaults to an empty list.',
                  example: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                }),
              translation_memory_ids: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of the translation memories to link. At most one translation memory per source\nlanguage. Defaults to an empty list.',
                  example: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                }),
              glossary_priority_order_enabled: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether the order of `glossary_ids` sets priority: when two linked glossaries define the\nsame source term, the one listed first wins. When `false`, the order has no effect.\nDefaults to `false`.',
                  example: true,
                }),
            })
            .openapi({ required: ['name'] }),
          examples: {
            MetadataOnly: { summary: 'Metadata only', value: { name: 'Marketing, Japanese' } },
            FullyConfigured: {
              summary: 'Fully configured',
              value: {
                name: 'Legal, German',
                description: 'Contract wording for the German market.',
                industry: 'Legal',
                glossary_ids: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
                style_rule_ids: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                translation_memory_ids: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                glossary_priority_order_enabled: true,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the created style profile.',
      content: {
        'application/json': {
          schema: StyleProfileSchema,
          examples: {
            Basic: {
              value: {
                style_profile_id: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                name: 'Legal, German',
                description: 'Contract wording for the German market.',
                industry: 'Legal',
                glossary_ids: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
                style_rule_ids: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                translation_memory_ids: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                glossary_priority_order_enabled: true,
                creation_time: '2026-04-01T16:34:25.223Z',
                updated_time: '2026-04-01T16:34:25.223Z',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: {
      description:
        'The request was rejected and no style profile was created. This is returned for a malformed\nrequest body, for a missing or empty `name`, for a value that is longer than the field allows,\nand for a component ID that is not a valid UUID or that names a component your account cannot\naccess. The message names the list that contains the bad ID.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            UnusableComponentId: {
              summary: 'Unusable component ID',
              value: {
                message:
                  "Bad request. Reason: One or more glossary ids do not exist or are not accessible. Check 'glossary_ids'.",
              },
            },
            EmptyName: {
              summary: 'Empty name',
              value: { message: 'Bad request. Reason: The Name field is required.' },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: {
      description:
        'Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.\nThis error is also returned when the API key is scoped but does not include the\n`style_profiles:write` scope, and when your plan does not include creating style profiles.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    456: {
      description:
        'You have reached the maximum number of style profiles for your account. Delete a style profile\nbefore creating another one.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Quota exceeded' } },
      },
    },
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3StyleProfilesStyleProfileIdRoute = createRoute({
  method: 'get',
  path: '/v3/style_profiles/{style_profile_id}',
  tags: ['ManageStyleProfiles'],
  summary: 'Retrieve a style profile',
  description:
    'Retrieve a single style profile by its ID, including the components it links and its timestamps.\n\nRequires an API key with the `style_profiles:read` scope.',
  operationId: 'getStyleProfile',
  request: {
    params: z.object({
      style_profile_id: StyleProfileIdSchema.openapi({
        param: {
          name: 'style_profile_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/StyleProfileId' },
          description: 'The ID of the style profile to retrieve.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the style profile.',
      content: {
        'application/json': {
          schema: StyleProfileSchema,
          examples: {
            Basic: {
              value: {
                style_profile_id: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                name: 'Legal, German',
                description: 'Contract wording for the German market.',
                industry: 'Legal',
                glossary_ids: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
                style_rule_ids: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                translation_memory_ids: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                glossary_priority_order_enabled: true,
                creation_time: '2026-04-01T16:34:25.223Z',
                updated_time: '2026-08-06T09:12:44.108Z',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The style profile could not be found. This is also returned for a style profile your account\ncannot access.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3StyleProfilesStyleProfileIdRoute = createRoute({
  method: 'delete',
  path: '/v3/style_profiles/{style_profile_id}',
  tags: ['ManageStyleProfiles'],
  summary: 'Delete a style profile',
  description:
    'Delete a style profile. Only the account that owns a style profile can delete it. A style profile\nthat was shared with your account returns `404 Not Found`.\n\nThe glossaries, style rule lists and translation memories the style profile links are not deleted.\nTranslation requests that pass the deleted `style_profile_id` fail after this call, so update your\nintegration before deleting.\n\nRequires an API key with the `style_profiles:write` scope.',
  operationId: 'deleteStyleProfile',
  request: {
    params: z.object({
      style_profile_id: StyleProfileIdSchema.openapi({
        param: {
          name: 'style_profile_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/StyleProfileId' },
          description: 'The ID of the style profile to delete.',
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The style profile was deleted. The response has no body.',
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The style profile could not be found. This is also returned for a style profile that was\nshared with your account, because only the owner can delete it.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const patchV3StyleProfilesStyleProfileIdRoute = createRoute({
  method: 'patch',
  path: '/v3/style_profiles/{style_profile_id}',
  tags: ['ManageStyleProfiles'],
  summary: 'Update a style profile',
  description:
    'Update a style profile you own or that was shared with you for editing. Fields you leave out of the\nrequest body are not changed.\n\nA component list you send replaces the linked list in full. To add a glossary to a style profile\nthat already links two, send all three IDs. To unlink all components in a list, send an empty\nlist.\n\nRequires an API key with the `style_profiles:write` scope.',
  operationId: 'updateStyleProfile',
  request: {
    params: z.object({
      style_profile_id: StyleProfileIdSchema.openapi({
        param: {
          name: 'style_profile_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/StyleProfileId' },
          description: 'The ID of the style profile to update.',
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A new name for the style profile. At most 255 characters. An empty string is rejected\nwith `400 Bad Request`.',
                  example: 'Legal, German (2026)',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A new description for the style profile. At most 1000 characters. Send an empty string\nto clear it.',
                  example: 'Contract wording for the German market, 2026 revision.',
                }),
              industry: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A new industry for the style profile. At most 255 characters. Send an empty string to\nclear it.',
                  example: 'Legal',
                }),
              glossary_ids: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of the glossaries to link, highest priority first. The order only takes effect\nwith `glossary_priority_order_enabled`. Replaces the linked glossaries in full. Send an\nempty list to unlink all of them.',
                  example: ['4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81'],
                }),
              style_rule_ids: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of the style rule lists to link. At most one style rule list per target\nlanguage. Replaces the linked style rule lists in full. Send an empty list to unlink\nall of them.',
                  example: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                }),
              translation_memory_ids: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The IDs of the translation memories to link. At most one translation memory per source\nlanguage. Replaces the linked translation memories in full. Send an empty list to\nunlink all of them.',
                  example: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                }),
              glossary_priority_order_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the order of `glossary_ids` sets priority: when two linked glossaries define the\nsame source term, the one listed first wins. When `false`, the order has no effect.',
                  example: true,
                }),
            })
            .openapi({ required: [] }),
          examples: {
            RenameOnly: { summary: 'Rename only', value: { name: 'Legal, German (2026)' } },
            ClearTheDescription: { summary: 'Clear the description', value: { description: '' } },
            ReplaceTheLinkedGlossaries: {
              summary: 'Replace the linked glossaries',
              value: {
                glossary_ids: [
                  '4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81',
                  '7b2f6d84-3c15-4e90-8a72-d5e1490bc637',
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated style profile.',
      content: {
        'application/json': {
          schema: StyleProfileSchema,
          examples: {
            Basic: {
              value: {
                style_profile_id: '3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47',
                name: 'Legal, German (2026)',
                description: 'Contract wording for the German market.',
                industry: 'Legal',
                glossary_ids: [
                  '4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81',
                  '7b2f6d84-3c15-4e90-8a72-d5e1490bc637',
                ],
                style_rule_ids: ['bd0a38f3-1831-440b-a8dd-2c702e2325ab'],
                translation_memory_ids: ['a74d88fb-ed2a-4943-a664-a4512398b994'],
                glossary_priority_order_enabled: true,
                creation_time: '2026-04-01T16:34:25.223Z',
                updated_time: '2026-08-20T13:47:51.902Z',
              },
            },
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: {
      description:
        'The request was rejected and the style profile was not changed. This is returned for a\nmalformed request body, for an empty `name`, for a value that is longer than the field allows,\nand for a component ID that is not a valid UUID or that names a component your account cannot\naccess. The message names the list that contains the bad ID.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            UnusableComponentId: {
              summary: 'Unusable component ID',
              value: {
                message:
                  "Bad request. Reason: One or more translation memory ids do not exist or are not accessible. Check 'translation_memory_ids'.",
              },
            },
            EmptyName: {
              summary: 'Empty name',
              value: {
                message:
                  "Bad request. Reason: The field Name must be a string or array type with a minimum length of '1'.",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: {
      description:
        'The style profile could not be found. This is also returned for a style profile your account\ncan view but not edit.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3StyleRulesRoute = createRoute({
  method: 'get',
  path: '/v3/style_rules',
  summary: 'Retrieve style rule lists',
  description:
    "List the style rule lists in your account. Results are paginated. Set `detailed` to\ninclude each list's configured rules and custom instructions.",
  operationId: 'getStyleRuleLists',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', default: 0 },
            description:
              'The index of the first page to return. Use with `page_size` to get the next page of rule lists',
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            schema: { type: 'integer', default: 10, minimum: 1, maximum: 25 },
            description: 'The maximum number of style rule lists to return.',
            required: false,
          },
        }),
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'detailed',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description:
              "Determines if the rule list's `configured_rules` and `custom_instructions` should be included in the response body.",
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'JSON object containing the style rule lists.',
      content: {
        'application/json': {
          schema: z
            .object({ style_rules: z.array(StyleRuleListSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3StyleRulesRoute = createRoute({
  method: 'post',
  path: '/v3/style_rules',
  summary: 'Create a style rule list',
  description:
    'Create a style rule list for a single language, optionally with its configured rules\nand custom instructions. The `language` can be a root code such as `de` or a variant\ncode such as `de-CH`. Use the returned `style_id` with the translation endpoints\nto apply the list.',
  operationId: 'createStyleRuleList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: StyleRuleNameSchema.openapi({ 'x-default': 'My style rules' }),
              language: StyleRuleLanguageSchema.openapi({ 'x-default': 'de' }),
              configured_rules: ConfiguredRulesSchema.exactOptional(),
              custom_instructions: z
                .array(
                  z
                    .object({
                      label: z
                        .string()
                        .openapi({ description: 'Label for the custom instruction' }),
                      prompt: z.string().max(300).openapi({ description: 'Instruction text' }),
                      source_language: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Optional source language code' }),
                    })
                    .openapi({ required: ['label', 'prompt'] }),
                )
                .max(200)
                .exactOptional()
                .openapi({ description: 'Array of custom instruction objects' }),
            })
            .openapi({ required: ['name', 'language'] }),
          example: {
            name: 'My style rules',
            language: 'de',
            configured_rules: {
              style_and_tone: {
                abbreviations: 'use_abbreviations_and_symbols',
                short_vs_long_words: 'use_short_words',
              },
              punctuation: { apostrophe: 'use_curly_apostrophes' },
            },
            custom_instructions: [
              {
                label: 'Currency custom instruction',
                prompt: 'Have currency symbols before the numerical value (e.g. $100, €100)',
                source_language: 'en',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Style rule list created successfully',
      content: { 'application/json': { schema: StyleRuleListSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3StyleRulesStyleIdRoute = createRoute({
  method: 'get',
  path: '/v3/style_rules/{style_id}',
  summary: 'Get a style rule list',
  description:
    'Retrieve a single style rule list, including its configured rules and custom instructions.',
  operationId: 'getStyleRuleList',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Style rule list details',
      content: { 'application/json': { schema: StyleRuleListSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3StyleRulesStyleIdRoute = createRoute({
  method: 'delete',
  path: '/v3/style_rules/{style_id}',
  summary: 'Delete a style rule list',
  description:
    'Delete a style rule list and its custom instructions. Requests that reference the\ndeleted `style_id` fail afterwards.',
  operationId: 'deleteStyleRuleList',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Style rule list deleted successfully',
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const patchV3StyleRulesStyleIdRoute = createRoute({
  method: 'patch',
  path: '/v3/style_rules/{style_id}',
  summary: "Update a style rule list's name",
  description:
    'Rename a style rule list. This does not change its configured rules or custom instructions.',
  operationId: 'updateStyleRuleList',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ name: StyleRuleNameSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Style rule list updated successfully',
      content: { 'application/json': { schema: StyleRuleListSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV3StyleRulesStyleIdConfiguredRulesRoute = createRoute({
  method: 'put',
  path: '/v3/style_rules/{style_id}/configured_rules',
  summary: 'Replace configured rules for a style rule list',
  description:
    'Replace the full set of configured rules on a style rule list. Rules not included in\nthe request are removed, so send the complete set you want to keep.',
  operationId: 'updateStyleRuleConfiguredRules',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ConfiguredRulesSchema,
          example: {
            dates_and_times: { calendar_era: 'use_bc_and_ad' },
            punctuation: { periods_in_academic_degrees: 'do_not_use' },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Configured rules updated successfully',
      content: { 'application/json': { schema: StyleRuleListSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3StyleRulesStyleIdCustomInstructionsRoute = createRoute({
  method: 'post',
  path: '/v3/style_rules/{style_id}/custom_instructions',
  summary: 'Create a custom instruction',
  description:
    'Add a custom instruction to a style rule list to express a style preference that the\npredefined rules do not cover. Instructions apply to text in the given source language.',
  operationId: 'createCustomInstruction',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              label: z
                .string()
                .max(100)
                .openapi({
                  description: 'Label for the custom instruction',
                  'x-default': 'Currency custom instruction',
                }),
              prompt: z
                .string()
                .max(300)
                .openapi({
                  description: 'Instruction text',
                  'x-default': 'Have currency symbols before the numerical value (e.g. $100, €100)',
                }),
              source_language: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional source language code' }),
            })
            .openapi({ required: ['label', 'prompt'] }),
          example: {
            label: 'Currency custom instruction',
            prompt: 'Have currency symbols before the numerical value (e.g. $100, €100)',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Custom instruction created successfully',
      content: { 'application/json': { schema: CustomInstructionSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute = createRoute({
  method: 'get',
  path: '/v3/style_rules/{style_id}/custom_instructions/{instruction_id}',
  summary: 'Get a custom instruction',
  description: 'Retrieve a single custom instruction from a style rule list.',
  operationId: 'getCustomInstruction',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
      instruction_id: z
        .string()
        .openapi({
          param: {
            name: 'instruction_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the custom instruction',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Custom instruction details',
      content: { 'application/json': { schema: CustomInstructionSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute = createRoute({
  method: 'put',
  path: '/v3/style_rules/{style_id}/custom_instructions/{instruction_id}',
  summary: 'Replace a custom instruction',
  description:
    'Replace a custom instruction. Send every field you want to keep, because omitted\nfields are overwritten.',
  operationId: 'updateCustomInstruction',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
      instruction_id: z
        .string()
        .openapi({
          param: {
            name: 'instruction_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the custom instruction',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              label: z
                .string()
                .max(100)
                .openapi({ description: 'Updated label for the custom instruction' }),
              prompt: z.string().max(300).openapi({ description: 'Updated instruction text' }),
              source_language: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional source language code' }),
            })
            .openapi({ required: ['label', 'prompt'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Custom instruction updated successfully',
      content: { 'application/json': { schema: CustomInstructionSchema } },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute = createRoute({
  method: 'delete',
  path: '/v3/style_rules/{style_id}/custom_instructions/{instruction_id}',
  summary: 'Delete a custom instruction',
  description:
    'Delete a custom instruction from a style rule list. The rest of the list is unchanged.',
  operationId: 'deleteCustomInstruction',
  request: {
    params: z.object({
      style_id: z
        .string()
        .openapi({
          param: {
            name: 'style_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the style rule list',
          },
        }),
      instruction_id: z
        .string()
        .openapi({
          param: {
            name: 'instruction_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the custom instruction',
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Custom instruction deleted successfully',
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenScopedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV3VoiceRealtimeRoute = createRoute({
  method: 'get',
  path: '/v3/voice/realtime',
  tags: ['VoiceAPI'],
  summary: 'Request Reconnection',
  description:
    'Exchange a session token for a fresh WebSocket URL and token so a client can rejoin a\nvoice session after the connection drops. Session options are carried over from the\noriginal session.',
  operationId: 'requestReconnection',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: true,
            description: 'The latest ephemeral token obtained for the stream.',
            schema: { type: 'string' },
            example: 'VGhpcyBpcyBhIGZha2UgdG9rZW4K',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully obtained streaming URL and reconnection token.',
      content: {
        'application/json': {
          schema: VoiceStreamingResponseSchema,
          example: {
            streaming_url: 'wss://api.deepl.com/v3/voice/realtime/connect',
            token: 'VGhpcyBpcyBhIGZha2UgdG9rZW4K',
            session_id: '4f911080-cfe2-41d4-8269-0e6ec15a0354',
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV3VoiceRealtimeRoute = createRoute({
  method: 'post',
  path: '/v3/voice/realtime',
  tags: ['VoiceAPI'],
  summary: 'Get Streaming URL',
  description:
    'Create a real-time voice session and return the WebSocket URL and ephemeral token used\nto stream audio. Session options such as languages, message format, and media types are\nfixed at creation time. Invalid options are rejected with HTTP 400 before a session is\ncreated.',
  operationId: 'getVoiceStreamingUrl',
  request: {
    headers: z.object({ 'X-DeepL-Reporting-Tag': CustomReportingTagParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message_format: VoiceMessageFormatSchema.exactOptional(),
              source_media_content_type: VoiceSourceMediaContentTypeSchema,
              source_language: VoiceSourceLanguageSchema.exactOptional(),
              source_language_mode: VoiceSourceLanguageModeSchema.exactOptional(),
              target_languages: VoiceTargetLanguagesSchema.exactOptional(),
              target_media_languages: VoiceTargetMediaLanguagesSchema.exactOptional(),
              target_media_content_type: VoiceTargetMediaContentTypeSchema.exactOptional(),
              target_media_voice: VoiceTargetMediaVoiceSchema.exactOptional(),
              spoken_terms_id: SpokenTermsIdSchema.exactOptional(),
              glossary_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify the glossary to use for the target transcripts (translations). For new integrations we\nrecommend the more general `glossary_ids`.\n\nCannot be used together with `glossary_ids`.',
                  example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                }),
              glossary_ids: z
                .array(z.string().openapi({ example: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7' }))
                .exactOptional()
                .openapi({
                  description:
                    "Specify the glossaries to use for the target transcripts (translations), as an array of\nglossary IDs ordered by priority (highest first). Each glossary's matching terms are applied to\nthe translation; where entries conflict, the higher-priority glossary wins. Unknown glossary IDs\nare ignored.\n\nIn realtime Voice, glossary terms are matched against the streaming source transcription,\nwhich affects how and when terms are applied. See\n[Glossaries in realtime Voice](/docs/voice/overview#glossaries-in-realtime-voice).\n\nCannot be used together with `glossary_id`. Requests that exceed the\n[session limit](/docs/voice/voice-api-requirements#session-limits), contain duplicates, or\ncombine `glossary_ids` with `glossary_id` are rejected with a `400 Bad Request` before a\nsession is created.",
                }),
              formality: VoiceFormalitySchema.exactOptional(),
            })
            .openapi({ required: ['source_media_content_type'] }),
          examples: {
            basic: {
              summary: 'Basic configuration',
              value: {
                source_media_content_type: 'audio/ogg; codecs=opus',
                source_language: 'en',
                source_language_mode: 'auto',
                target_languages: ['de', 'fr', 'es'],
                message_format: 'json',
              },
            },
            with_glossary: {
              summary: 'With glossary and formality to customize translation',
              value: {
                source_media_content_type: 'audio/pcm; encoding=s16le; rate=16000',
                source_language: 'en',
                source_language_mode: 'fixed',
                target_languages: ['de', 'fr'],
                message_format: 'msgpack',
                glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                formality: 'formal',
              },
            },
            with_multiple_glossaries: {
              summary: 'With multiple glossaries in priority order',
              value: {
                source_media_content_type: 'audio/pcm; encoding=s16le; rate=16000',
                source_language: 'en',
                source_language_mode: 'fixed',
                target_languages: ['de', 'fr'],
                glossary_ids: [
                  'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
                  '7c4f1080-cfe2-41d4-8269-0e6ec15a0354',
                ],
              },
            },
            with_spoken_terms: {
              summary: 'With Spoken Terms to inform transcription',
              value: {
                source_media_content_type: 'audio/pcm; encoding=s16le; rate=16000',
                source_language: 'en',
                source_language_mode: 'fixed',
                target_languages: ['de'],
                spoken_terms_id: '7c4f1080-cfe2-41d4-8269-0e6ec15a0354',
              },
            },
            with_tts: {
              summary: 'With translated audio (default format)',
              value: {
                source_media_content_type: 'audio/ogg;codecs=opus',
                source_language: 'en',
                target_languages: ['de', 'fr', 'es'],
                target_media_languages: ['de'],
                target_media_content_type: 'audio/webm;codecs=opus',
                target_media_voice: 'female',
              },
            },
            with_speaker_match: {
              summary: 'With translated audio using a speaker-matched voice',
              value: {
                source_media_content_type: 'audio/ogg;codecs=opus',
                source_language: 'en',
                target_languages: ['de'],
                target_media_languages: ['de'],
                target_media_voice: 'match',
              },
            },
            with_tts_short_form: {
              summary: 'With translated audio using short-form MIME types',
              value: {
                source_media_content_type: 'audio/webm',
                source_language: 'en',
                target_languages: ['de', 'es'],
                target_media_languages: ['de'],
                target_media_content_type: 'audio/ogg',
              },
            },
            with_tts_high_quality: {
              summary: 'With translated audio using high-quality PCM',
              value: {
                source_media_content_type: 'audio/pcm;encoding=s16le;rate=16000',
                source_language: 'en',
                target_languages: ['de'],
                target_media_languages: ['de'],
                target_media_content_type: 'audio/pcm;encoding=s16le;rate=24000',
              },
            },
            with_tts_raw_opus: {
              summary: 'With translated audio using raw Opus',
              value: {
                source_media_content_type: 'audio/pcm;encoding=s16le;rate=16000',
                source_language: 'en',
                target_languages: ['de'],
                target_media_languages: ['de'],
                target_media_content_type: 'audio/opus',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully obtained streaming URL and token.',
      content: {
        'application/json': {
          schema: VoiceStreamingResponseSchema,
          example: {
            streaming_url: 'wss://api.deepl.com/v3/voice/realtime/connect',
            token: 'VGhpcyBpcyBhIGZha2UgdG9rZW4K',
            session_id: '4f911080-cfe2-41d4-8269-0e6ec15a0354',
          },
        },
      },
      headers: z.object({ 'X-Trace-ID': XTraceIDHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    456: QuotaExceededResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
  },
  security: [{ auth_header: [] }],
})

export const postV1JobsVoiceTranslateRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/voice/translate',
  tags: ['VoiceTranslateJob'],
  summary: 'Create a voice translation job',
  description:
    'Creates an async voice translation job. The response includes an upload URL for the source audio file.',
  operationId: 'createVoiceTranslateJob',
  request: {
    query: z.object({ include: VoiceTranslateJobIncludeParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: VoiceTranslateCreateJobRequestSchema,
          example: {
            source_file: {
              name: 'podcast-episode-42.mp3',
              content_type: 'audio/mpeg',
              content_length: 15728640,
            },
            parameters: { source_language: 'en' },
            targets: [
              { language: 'de', type: 'text/plain' },
              { language: 'es', type: 'audio/pcm;encoding=s16le;rate=16000' },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Job created successfully.',
      content: {
        'application/json': {
          schema: VoiceTranslateCreateJobResponseSchema,
          example: {
            job_id: 'a74d88fb-ed2a-4943-a664-a4512398b994',
            upload_url:
              'https://assets.deepl.com/collections/a74d88fb-ed2a-4943-a664-a4512398b994/assets/b1c2d3e4-f5a6-7890-abcd-ef1234567890',
            signature: 'eyJhbGciOiJIUzI1NiIs...',
          },
        },
      },
    },
    400: VoiceTranslateJobBadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV1JobsVoiceTranslateJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/jobs/voice/translate/{job_id}',
  tags: ['VoiceTranslateJob'],
  summary: 'Get voice translation job status',
  description:
    "Returns the current status of a voice translation job, including per-target result statuses.\n\nWhen a target's status is `complete`, the response includes a `download_url` and `signature` for that target. Results are returned in the same order as the targets in the create request.",
  operationId: 'getVoiceTranslateJobStatus',
  request: {
    params: z.object({ job_id: VoiceTranslateJobIdParamParamsSchema }),
    query: z.object({ include: VoiceTranslateJobIncludeParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'Job status retrieved successfully.',
      content: {
        'application/json': {
          schema: VoiceTranslateJobStatusResponseSchema,
          examples: {
            processing: {
              summary: 'Job still processing',
              value: {
                job_id: 'a74d88fb-ed2a-4943-a664-a4512398b994',
                product: 'voice',
                operation: 'translate',
                created_at: '2026-10-01T01:03:03.444Z',
                updated_at: '2026-10-01T04:03:03.333Z',
                usage: { storage_used: 31457280 },
                source_file: {
                  name: 'podcast-episode-42.mp3',
                  content_type: 'audio/mpeg',
                  content_length: 15728640,
                },
                parameters: { source_language: 'en' },
                targets: [
                  { language: 'de', type: 'text/plain' },
                  { language: 'es', type: 'audio/pcm;encoding=s16le;rate=16000' },
                ],
                results: [{ status: 'processing' }, { status: 'processing' }],
              },
            },
            complete: {
              summary: 'Job with mixed results',
              value: {
                job_id: 'a74d88fb-ed2a-4943-a664-a4512398b994',
                product: 'voice',
                operation: 'translate',
                created_at: '2026-10-01T01:03:03.444Z',
                updated_at: '2026-10-01T04:03:03.333Z',
                usage: { storage_used: 31457280 },
                source_file: {
                  name: 'podcast-episode-42.mp3',
                  content_type: 'audio/mpeg',
                  content_length: 15728640,
                },
                parameters: { source_language: 'en' },
                targets: [
                  { language: 'de', type: 'text/plain' },
                  { language: 'es', type: 'audio/pcm;encoding=s16le;rate=16000' },
                ],
                results: [
                  {
                    status: 'complete',
                    download_url: 'https://assets.deepl.com/collections/a74d88fb/assets/c3d4e5f6',
                    signature: 'eyJhbGciOiJIUzI1NiIs...',
                  },
                  { status: 'failed', error: { message: 'processing failed' } },
                ],
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})

export const getV1QualityEvaluationsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/quality-evaluations/{job_id}',
  tags: ['QualityEvaluation'],
  summary: 'Poll for the evaluation result',
  description:
    'Returns the current state of a quality evaluation. While the evaluation is in progress the response carries only status information; once it completes, the response carries the full report.\n\nEvaluations are requested with `enable_quality_evaluation` on [`POST /v2/document`](/api-reference/document/upload-and-translate-a-document). There is no public endpoint for starting one.',
  operationId: 'pollQualityEvaluation',
  request: {
    params: z.object({
      job_id: z
        .string()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            description:
              'The unique ID of the quality evaluation, returned as `quality_evaluation_job_id` when the document was [uploaded for translation](/api-reference/document/upload-and-translate-a-document).',
            schema: { type: 'string', example: '04DE5AD98A02647D83285A36021911C6' },
          },
          example: '04DE5AD98A02647D83285A36021911C6',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Polling result. The response shape depends on the `status` field. `done` carries the full report; `error` carries error details.',
      content: {
        'application/json': {
          schema: z.xor([QualityEvaluationDoneSchema, QualityEvaluationFailedSchema]),
          example: {
            job_id: '04DE5AD98A02647D83285A36021911C6',
            status: 'done',
            segments: [
              {
                segment_index: 0,
                segment_score: 38.5,
                source: 'Our Q3 revenue came in 5% above forecast.',
                target: 'Unser Q3-Umsatz lag 5 % unter der Prognose.',
                applied_glossary_term_pairs: [
                  {
                    source_term: 'forecast',
                    target_term: 'Prognose',
                    ranges: [{ start: 34, end: 42 }],
                  },
                ],
                errors: [
                  {
                    type: 'Accuracy',
                    sub_type: 'Mistranslation',
                    severity: 'Critical',
                    explanation:
                      "The source says revenue was '5% above forecast' but the translation says '5 % unter der Prognose' (5% below forecast). This completely reverses the meaning and has financial implications.",
                    source_spans: [{ start: 23, end: 31 }],
                    target_spans: [{ start: 20, end: 29 }],
                  },
                ],
              },
              {
                segment_index: 1,
                segment_score: 62,
                source: 'Please share these results with your teams by Friday.',
                target: 'Bitte teilen Sie diese Ergebnisse mit Ihrem Team.',
                errors: [
                  {
                    type: 'Accuracy',
                    sub_type: 'Omission',
                    severity: 'Major',
                    explanation:
                      "The source specifies the deadline 'by Friday' but the translation omits this temporal information entirely.",
                    source_spans: [{ start: 43, end: 52 }],
                    target_spans: [],
                  },
                  {
                    type: 'Accuracy',
                    sub_type: 'Mistranslation',
                    severity: 'Minor',
                    explanation:
                      "The source says 'your teams' (plural) but the translation says 'Ihrem Team' (singular). This changes the scope of the instruction.",
                    source_spans: [{ start: 32, end: 42 }],
                    target_spans: [{ start: 38, end: 48 }],
                  },
                ],
              },
            ],
          },
        },
      },
    },
    202: {
      description:
        'The evaluation is still running. Continue polling after the time suggested by the `Retry-After` header.',
      content: {
        'application/json': {
          schema: QualityEvaluationProcessingSchema,
          example: { job_id: '04DE5AD98A02647D83285A36021911C6', status: 'processing' },
        },
      },
      headers: z.object({
        'Retry-After': z
          .int()
          .exactOptional()
          .openapi({
            description: 'Suggested number of seconds to wait before polling again.',
            example: 5,
            param: { required: false },
          }),
      }),
    },
    400: {
      description: 'The `job_id` is not a well-formed identifier.',
      content: {
        'application/json': {
          schema: QualityEvaluationApiErrorSchema,
          example: { message: 'job_id must be a valid UUID.' },
        },
      },
    },
    404: {
      description:
        'No evaluation exists for this `job_id`, it belongs to another account, or it has expired. See [Report retention](/api-reference/quality-evaluations/poll#report-retention).',
      content: {
        'application/json': {
          schema: QualityEvaluationApiErrorSchema,
          example: { message: 'Quality estimation job not found.' },
        },
      },
    },
    429: TooManyRequestsResponse,
  },
  security: [{ auth_header: [] }],
})
