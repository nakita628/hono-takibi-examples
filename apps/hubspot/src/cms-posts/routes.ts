import { createRoute, z } from '@hono/zod-openapi'

const StylesSchema: z.ZodType<StylesType> = z
  .lazy(() =>
    z
      .object({
        backgroundColor: RGBAColorSchema,
        backgroundGradient: GradientSchema,
        backgroundImage: BackgroundImageSchema,
        breakpointStyles: z
          .record(z.string(), BreakpointStylesSchema)
          .exactOptional()
          .openapi({
            description: 'Breakpoint CSS styles for margin, padding, etc...',
            example: null,
          }),
        flexboxPositioning: z
          .enum([
            'BOTTOM_CENTER',
            'BOTTOM_LEFT',
            'BOTTOM_RIGHT',
            'MIDDLE_CENTER',
            'MIDDLE_LEFT',
            'MIDDLE_RIGHT',
            'TOP_CENTER',
            'TOP_LEFT',
            'TOP_RIGHT',
          ])
          .openapi({
            description: 'Indicates whether flexbox positioning is enabled for the section.',
            example: null,
          }),
        forceFullWidthSection: z
          .boolean()
          .openapi({
            description: 'Determines if the section should be forced to full width.',
            example: null,
          }),
        maxWidthSectionCentering: z
          .int32()
          .openapi({
            description: 'Defines the maximum width for centering the section.',
            example: null,
          }),
        verticalAlignment: z
          .enum(['BOTTOM', 'MIDDLE', 'TOP'])
          .openapi({
            description: 'Specifies the vertical alignment of elements within the section.',
            example: null,
          }),
      })
      .openapi({
        required: [
          'backgroundColor',
          'backgroundGradient',
          'backgroundImage',
          'flexboxPositioning',
          'forceFullWidthSection',
          'maxWidthSectionCentering',
          'verticalAlignment',
        ],
        example: null,
      }),
  )
  .openapi('Styles')

const RowMetaDataSchema = z
  .object({
    cssClass: z
      .string()
      .openapi({ description: 'The CSS class applied to the row.', example: null }),
    styles: StylesSchema,
  })
  .openapi({ required: ['cssClass', 'styles'], example: null })
  .openapi('RowMetaData')

type LayoutSectionType = {
  cells: LayoutSectionType[]
  cssClass: string
  cssId: string
  cssStyle: string
  label: string
  name: string
  params: { [key: string]: { [key: string]: unknown } }
  rowMetaData: z.infer<typeof RowMetaDataSchema>[]
  rows: { [key: string]: LayoutSectionType }[]
  styles: z.infer<typeof StylesSchema>
  type: string
  w: number
  x: number
}

const RGBAColorSchema = z
  .object({
    a: z.number().openapi({ description: 'Alpha.', example: null }),
    b: z.int32().openapi({ description: 'Blue.', example: null }),
    g: z.int32().openapi({ description: 'Green.', example: null }),
    r: z.int32().openapi({ description: 'Red.', example: null }),
  })
  .openapi({ required: ['a', 'b', 'g', 'r'], example: null })
  .openapi('RGBAColor')

const AngleSchema = z
  .object({
    units: z
      .enum(['DEGREES', 'GRADIANS', 'RADIANS', 'TURNS'])
      .openapi({ description: 'The unit of measurement for the angle.', example: null }),
    value: z
      .number()
      .openapi({ description: 'The numerical representation of the angle.', example: null }),
  })
  .openapi({ required: ['units', 'value'], example: null })
  .openapi('Angle')

const ColorStopSchema = z
  .object({ color: RGBAColorSchema })
  .openapi({ required: ['color'], example: null })
  .openapi('ColorStop')

const SideOrCornerSchema = z
  .object({
    horizontalSide: z
      .enum(['CENTER', 'LEFT', 'RIGHT'])
      .openapi({ description: 'Specifies the horizontal side of an element.', example: null }),
    verticalSide: z
      .enum(['BOTTOM', 'MIDDLE', 'TOP'])
      .openapi({ description: 'Specifies the vertical side of an element.', example: null }),
  })
  .openapi({ required: ['horizontalSide', 'verticalSide'], example: null })
  .openapi('SideOrCorner')

const GradientSchema = z
  .object({
    angle: AngleSchema,
    colors: z
      .array(ColorStopSchema)
      .openapi({
        description:
          'An array of colors used in the gradient. Each color is represented as an RGBA value, defining the color stops in the gradient effect.',
        example: null,
      }),
    sideOrCorner: SideOrCornerSchema,
  })
  .openapi({ required: ['angle', 'colors', 'sideOrCorner'], example: null })
  .openapi('Gradient')

const BackgroundImageSchema = z
  .object({
    backgroundPosition: z
      .string()
      .openapi({ description: 'Defines the position of the background image.', example: null }),
    backgroundSize: z
      .string()
      .openapi({ description: 'Specifies the size of the background image.', example: null }),
    imageUrl: z
      .string()
      .openapi({ description: 'The URL of the background image.', example: null }),
  })
  .openapi({ required: ['backgroundPosition', 'backgroundSize', 'imageUrl'], example: null })
  .openapi('BackgroundImage')

const SizeSchema = z
  .object({
    units: z
      .enum([
        'CH',
        'CM',
        'EM',
        'EX',
        'IN',
        'LH',
        'MM',
        'PC',
        'PERCENTAGE',
        'PT',
        'PX',
        'Q',
        'REM',
        'VH',
        'VMAX',
        'VMIN',
        'VW',
      ])
      .openapi({
        description:
          "A string indicating the unit of measurement for the size. Valid values include 'CM', 'MM', 'Q', 'IN', 'PC', 'PT', 'PX', 'EM', 'EX', 'CH', 'REM', 'LH', 'VW', 'VH', 'VMIN', 'VMAX', and 'PERCENTAGE'.",
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description: 'A numeric value representing the magnitude of the size.',
        example: null,
      }),
  })
  .openapi({ required: ['units', 'value'], example: null })
  .openapi('Size')

const MarginSchema = z
  .object({ bottom: SizeSchema, top: SizeSchema })
  .openapi({ required: ['bottom', 'top'], example: null })
  .openapi('Margin')

const PaddingSchema = z
  .object({ bottom: SizeSchema, left: SizeSchema, right: SizeSchema, top: SizeSchema })
  .openapi({ required: ['bottom', 'left', 'right', 'top'], example: null })
  .openapi('Padding')

const BreakpointStylesSchema = z
  .object({
    hidden: z
      .boolean()
      .openapi({ description: 'Boolean indicating if the breakpoint is visible.', example: null }),
    margin: MarginSchema,
    padding: PaddingSchema,
  })
  .openapi({ required: ['hidden', 'margin', 'padding'], example: null })
  .openapi('BreakpointStyles')

type StylesType = {
  backgroundColor: z.infer<typeof RGBAColorSchema>
  backgroundGradient: z.infer<typeof GradientSchema>
  backgroundImage: z.infer<typeof BackgroundImageSchema>
  breakpointStyles?: { [key: string]: z.infer<typeof BreakpointStylesSchema> }
  flexboxPositioning:
    | 'BOTTOM_CENTER'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_RIGHT'
    | 'MIDDLE_CENTER'
    | 'MIDDLE_LEFT'
    | 'MIDDLE_RIGHT'
    | 'TOP_CENTER'
    | 'TOP_LEFT'
    | 'TOP_RIGHT'
  forceFullWidthSection: boolean
  maxWidthSectionCentering: number
  verticalAlignment: 'BOTTOM' | 'MIDDLE' | 'TOP'
}

const AttachToLangPrimaryRequestVNextSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'ID of the object to add to a multi-language group.',
        example: null,
      }),
    language: z
      .enum([
        'aa',
        'ab',
        'ae',
        'af',
        'af-na',
        'af-za',
        'agq',
        'agq-cm',
        'ak',
        'ak-gh',
        'am',
        'am-et',
        'an',
        'ann',
        'ann-ng',
        'ar',
        'ar-001',
        'ar-ae',
        'ar-bh',
        'ar-dj',
        'ar-dz',
        'ar-eg',
        'ar-eh',
        'ar-er',
        'ar-il',
        'ar-iq',
        'ar-jo',
        'ar-km',
        'ar-kw',
        'ar-lb',
        'ar-ly',
        'ar-ma',
        'ar-mr',
        'ar-om',
        'ar-ps',
        'ar-qa',
        'ar-sa',
        'ar-sd',
        'ar-so',
        'ar-ss',
        'ar-sy',
        'ar-td',
        'ar-tn',
        'ar-ye',
        'as',
        'as-in',
        'asa',
        'asa-tz',
        'ast',
        'ast-es',
        'av',
        'ay',
        'az',
        'az-az',
        'ba',
        'bal',
        'bal-pk',
        'bas',
        'bas-cm',
        'be',
        'be-by',
        'bem',
        'bem-zm',
        'bez',
        'bez-tz',
        'bg',
        'bg-bg',
        'bgc',
        'bgc-in',
        'bho',
        'bho-in',
        'bi',
        'blo',
        'blo-bj',
        'bm',
        'bm-ml',
        'bn',
        'bn-bd',
        'bn-in',
        'bo',
        'bo-cn',
        'bo-in',
        'br',
        'br-fr',
        'brx',
        'brx-in',
        'bs',
        'bs-ba',
        'ca',
        'ca-ad',
        'ca-es',
        'ca-fr',
        'ca-it',
        'ccp',
        'ccp-bd',
        'ccp-in',
        'ce',
        'ce-ru',
        'ceb',
        'ceb-ph',
        'cgg',
        'cgg-ug',
        'ch',
        'chr',
        'chr-us',
        'ckb',
        'ckb-iq',
        'ckb-ir',
        'co',
        'cr',
        'cs',
        'cs-cz',
        'csw',
        'csw-ca',
        'cu',
        'cu-ru',
        'cv',
        'cv-ru',
        'cy',
        'cy-gb',
        'da',
        'da-dk',
        'da-gl',
        'dav',
        'dav-ke',
        'de',
        'de-at',
        'de-be',
        'de-ch',
        'de-de',
        'de-gr',
        'de-it',
        'de-li',
        'de-lu',
        'dje',
        'dje-ne',
        'doi',
        'doi-in',
        'dsb',
        'dsb-de',
        'dua',
        'dua-cm',
        'dv',
        'dyo',
        'dyo-sn',
        'dz',
        'dz-bt',
        'ebu',
        'ebu-ke',
        'ee',
        'ee-gh',
        'ee-tg',
        'el',
        'el-cy',
        'el-gr',
        'en',
        'en-001',
        'en-150',
        'en-ae',
        'en-ag',
        'en-ai',
        'en-as',
        'en-at',
        'en-au',
        'en-bb',
        'en-be',
        'en-bi',
        'en-bm',
        'en-bs',
        'en-bw',
        'en-bz',
        'en-ca',
        'en-cc',
        'en-ch',
        'en-ck',
        'en-cm',
        'en-cn',
        'en-cx',
        'en-cy',
        'en-cz',
        'en-de',
        'en-dg',
        'en-dk',
        'en-dm',
        'en-ee',
        'en-eg',
        'en-er',
        'en-es',
        'en-fi',
        'en-fj',
        'en-fk',
        'en-fm',
        'en-fr',
        'en-gb',
        'en-gd',
        'en-gg',
        'en-gh',
        'en-gi',
        'en-gm',
        'en-gs',
        'en-gu',
        'en-gy',
        'en-hk',
        'en-hu',
        'en-id',
        'en-ie',
        'en-il',
        'en-im',
        'en-in',
        'en-io',
        'en-it',
        'en-je',
        'en-jm',
        'en-ke',
        'en-ki',
        'en-kn',
        'en-ky',
        'en-lc',
        'en-lr',
        'en-ls',
        'en-lu',
        'en-mg',
        'en-mh',
        'en-mo',
        'en-mp',
        'en-ms',
        'en-mt',
        'en-mu',
        'en-mv',
        'en-mw',
        'en-mx',
        'en-my',
        'en-na',
        'en-nf',
        'en-ng',
        'en-nl',
        'en-no',
        'en-nr',
        'en-nu',
        'en-nz',
        'en-pg',
        'en-ph',
        'en-pk',
        'en-pl',
        'en-pn',
        'en-pr',
        'en-pt',
        'en-pw',
        'en-ro',
        'en-rw',
        'en-sb',
        'en-sc',
        'en-sd',
        'en-se',
        'en-sg',
        'en-sh',
        'en-si',
        'en-sk',
        'en-sl',
        'en-ss',
        'en-sx',
        'en-sz',
        'en-tc',
        'en-th',
        'en-tk',
        'en-tn',
        'en-to',
        'en-tt',
        'en-tv',
        'en-tz',
        'en-ug',
        'en-um',
        'en-us',
        'en-vc',
        'en-vg',
        'en-vi',
        'en-vn',
        'en-vu',
        'en-ws',
        'en-za',
        'en-zm',
        'en-zw',
        'eo',
        'eo-001',
        'es',
        'es-419',
        'es-ar',
        'es-bo',
        'es-br',
        'es-bz',
        'es-cl',
        'es-co',
        'es-cr',
        'es-cu',
        'es-do',
        'es-ea',
        'es-ec',
        'es-es',
        'es-gq',
        'es-gt',
        'es-hn',
        'es-ic',
        'es-mx',
        'es-ni',
        'es-pa',
        'es-pe',
        'es-ph',
        'es-pr',
        'es-py',
        'es-sv',
        'es-us',
        'es-uy',
        'es-ve',
        'et',
        'et-ee',
        'eu',
        'eu-es',
        'ewo',
        'ewo-cm',
        'fa',
        'fa-af',
        'fa-ir',
        'ff',
        'ff-bf',
        'ff-cm',
        'ff-gh',
        'ff-gm',
        'ff-gn',
        'ff-gw',
        'ff-lr',
        'ff-mr',
        'ff-ne',
        'ff-ng',
        'ff-sl',
        'ff-sn',
        'fi',
        'fi-fi',
        'fil',
        'fil-ph',
        'fj',
        'fo',
        'fo-dk',
        'fo-fo',
        'fr',
        'fr-be',
        'fr-bf',
        'fr-bi',
        'fr-bj',
        'fr-bl',
        'fr-ca',
        'fr-cd',
        'fr-cf',
        'fr-cg',
        'fr-ch',
        'fr-ci',
        'fr-cm',
        'fr-dj',
        'fr-dz',
        'fr-fr',
        'fr-ga',
        'fr-gf',
        'fr-gn',
        'fr-gp',
        'fr-gq',
        'fr-ht',
        'fr-km',
        'fr-lu',
        'fr-ma',
        'fr-mc',
        'fr-mf',
        'fr-mg',
        'fr-ml',
        'fr-mq',
        'fr-mr',
        'fr-mu',
        'fr-nc',
        'fr-ne',
        'fr-pf',
        'fr-pm',
        'fr-re',
        'fr-rw',
        'fr-sc',
        'fr-sn',
        'fr-sy',
        'fr-td',
        'fr-tg',
        'fr-tn',
        'fr-vu',
        'fr-wf',
        'fr-yt',
        'frr',
        'frr-de',
        'fur',
        'fur-it',
        'fy',
        'fy-nl',
        'ga',
        'ga-gb',
        'ga-ie',
        'gaa',
        'gaa-gh',
        'gd',
        'gd-gb',
        'gl',
        'gl-es',
        'gn',
        'gsw',
        'gsw-ch',
        'gsw-fr',
        'gsw-li',
        'gu',
        'gu-in',
        'guz',
        'guz-ke',
        'gv',
        'gv-im',
        'ha',
        'ha-gh',
        'ha-ne',
        'ha-ng',
        'haw',
        'haw-us',
        'he',
        'he-il',
        'he-il',
        'hi',
        'hi-in',
        'hmn',
        'ho',
        'hr',
        'hr-ba',
        'hr-hr',
        'hsb',
        'hsb-de',
        'ht',
        'ht-ht',
        'hu',
        'hu-hu',
        'hy',
        'hy-am',
        'hz',
        'ia',
        'ia-001',
        'id',
        'id-id',
        'ie',
        'ie-ee',
        'ig',
        'ig-ng',
        'ii',
        'ii-cn',
        'ik',
        'io',
        'is',
        'is-is',
        'it',
        'it-ch',
        'it-it',
        'it-sm',
        'it-va',
        'iu',
        'ja',
        'ja-jp',
        'jgo',
        'jgo-cm',
        'jmc',
        'jmc-tz',
        'jv',
        'jv-id',
        'ka',
        'ka-ge',
        'kab',
        'kab-dz',
        'kam',
        'kam-ke',
        'kar',
        'kde',
        'kde-tz',
        'kea',
        'kea-cv',
        'kg',
        'kgp',
        'kgp-br',
        'kh',
        'khq',
        'khq-ml',
        'ki',
        'ki-ke',
        'kj',
        'kk',
        'kk-kz',
        'kkj',
        'kkj-cm',
        'kl',
        'kl-gl',
        'kln',
        'kln-ke',
        'km',
        'km-kh',
        'kn',
        'kn-in',
        'ko',
        'ko-cn',
        'ko-kp',
        'ko-kr',
        'kok',
        'kok-in',
        'kr',
        'ks',
        'ks-in',
        'ksb',
        'ksb-tz',
        'ksf',
        'ksf-cm',
        'ksh',
        'ksh-de',
        'ku',
        'ku-tr',
        'kv',
        'kw',
        'kw-gb',
        'kxv',
        'kxv-in',
        'ky',
        'ky-kg',
        'la',
        'lag',
        'lag-tz',
        'lb',
        'lb-lu',
        'lg',
        'lg-ug',
        'li',
        'lij',
        'lij-it',
        'lkt',
        'lkt-us',
        'lmo',
        'lmo-it',
        'ln',
        'ln-ao',
        'ln-cd',
        'ln-cf',
        'ln-cg',
        'lo',
        'lo-la',
        'lrc',
        'lrc-iq',
        'lrc-ir',
        'lt',
        'lt-lt',
        'lu',
        'lu-cd',
        'luo',
        'luo-ke',
        'luy',
        'luy-ke',
        'lv',
        'lv-lv',
        'mai',
        'mai-in',
        'mas',
        'mas-ke',
        'mas-tz',
        'mdf',
        'mdf-ru',
        'mer',
        'mer-ke',
        'mfe',
        'mfe-mu',
        'mg',
        'mg-mg',
        'mgh',
        'mgh-mz',
        'mgo',
        'mgo-cm',
        'mh',
        'mi',
        'mi-nz',
        'mk',
        'mk-mk',
        'ml',
        'ml-in',
        'mn',
        'mn-mn',
        'mni',
        'mni-in',
        'mr',
        'mr-in',
        'ms',
        'ms-bn',
        'ms-id',
        'ms-my',
        'ms-sg',
        'mt',
        'mt-mt',
        'mua',
        'mua-cm',
        'my',
        'my-mm',
        'mzn',
        'mzn-ir',
        'na',
        'naq',
        'naq-na',
        'nb',
        'nb-no',
        'nb-sj',
        'nd',
        'nd-zw',
        'nds',
        'nds-de',
        'nds-nl',
        'ne',
        'ne-in',
        'ne-np',
        'ng',
        'nl',
        'nl-aw',
        'nl-be',
        'nl-bq',
        'nl-ch',
        'nl-cw',
        'nl-lu',
        'nl-nl',
        'nl-sr',
        'nl-sx',
        'nmg',
        'nmg-cm',
        'nn',
        'nn-no',
        'nnh',
        'nnh-cm',
        'no',
        'no-no',
        'nqo',
        'nqo-gn',
        'nr',
        'nso',
        'nso-za',
        'nus',
        'nus-ss',
        'nv',
        'ny',
        'nyn',
        'nyn-ug',
        'oc',
        'oc-es',
        'oc-fr',
        'oj',
        'om',
        'om-et',
        'om-ke',
        'or',
        'or-in',
        'os',
        'os-ge',
        'os-ru',
        'pa',
        'pa-in',
        'pa-pk',
        'pcm',
        'pcm-ng',
        'pi',
        'pis',
        'pis-sb',
        'pl',
        'pl-pl',
        'prg',
        'prg-001',
        'ps',
        'ps-af',
        'ps-pk',
        'pt',
        'pt-ao',
        'pt-br',
        'pt-ch',
        'pt-cv',
        'pt-gq',
        'pt-gw',
        'pt-lu',
        'pt-mo',
        'pt-mz',
        'pt-pt',
        'pt-st',
        'pt-tl',
        'qu',
        'qu-bo',
        'qu-ec',
        'qu-pe',
        'raj',
        'raj-in',
        'rm',
        'rm-ch',
        'rn',
        'rn-bi',
        'ro',
        'ro-md',
        'ro-ro',
        'rof',
        'rof-tz',
        'ru',
        'ru-by',
        'ru-kg',
        'ru-kz',
        'ru-md',
        'ru-ru',
        'ru-ua',
        'rw',
        'rw-rw',
        'rwk',
        'rwk-tz',
        'sa',
        'sa-in',
        'sah',
        'sah-ru',
        'saq',
        'saq-ke',
        'sat',
        'sat-in',
        'sbp',
        'sbp-tz',
        'sc',
        'sc-it',
        'sd',
        'sd-in',
        'sd-pk',
        'se',
        'se-fi',
        'se-no',
        'se-se',
        'seh',
        'seh-mz',
        'ses',
        'ses-ml',
        'sg',
        'sg-cf',
        'shi',
        'shi-ma',
        'si',
        'si-lk',
        'sk',
        'sk-sk',
        'sl',
        'sl-si',
        'sm',
        'smn',
        'smn-fi',
        'sms',
        'sms-fi',
        'sn',
        'sn-zw',
        'so',
        'so-dj',
        'so-et',
        'so-ke',
        'so-so',
        'sq',
        'sq-al',
        'sq-mk',
        'sq-xk',
        'sr',
        'sr-ba',
        'sr-cs',
        'sr-me',
        'sr-rs',
        'sr-xk',
        'ss',
        'st',
        'st-ls',
        'st-za',
        'su',
        'su-id',
        'sv',
        'sv-ax',
        'sv-fi',
        'sv-se',
        'sw',
        'sw-cd',
        'sw-ke',
        'sw-tz',
        'sw-ug',
        'sy',
        'syr',
        'syr-iq',
        'syr-sy',
        'szl',
        'szl-pl',
        'ta',
        'ta-in',
        'ta-lk',
        'ta-my',
        'ta-sg',
        'te',
        'te-in',
        'teo',
        'teo-ke',
        'teo-ug',
        'tg',
        'tg-tj',
        'th',
        'th-th',
        'ti',
        'ti-er',
        'ti-et',
        'tk',
        'tk-tm',
        'tl',
        'tn',
        'tn-bw',
        'tn-za',
        'to',
        'to-to',
        'tok',
        'tok-001',
        'tr',
        'tr-cy',
        'tr-tr',
        'ts',
        'tt',
        'tt-ru',
        'tw',
        'twq',
        'twq-ne',
        'ty',
        'tzm',
        'tzm-ma',
        'ug',
        'ug-cn',
        'uk',
        'uk-ua',
        'ur',
        'ur-in',
        'ur-pk',
        'uz',
        'uz-af',
        'uz-uz',
        'vai',
        'vai-lr',
        've',
        'vec',
        'vec-it',
        'vi',
        'vi-vn',
        'vmw',
        'vmw-mz',
        'vo',
        'vo-001',
        'vun',
        'vun-tz',
        'wa',
        'wae',
        'wae-ch',
        'wo',
        'wo-sn',
        'xh',
        'xh-za',
        'xnr',
        'xnr-in',
        'xog',
        'xog-ug',
        'yav',
        'yav-cm',
        'yi',
        'yi',
        'yi-001',
        'yi-ua',
        'yo',
        'yo-bj',
        'yo-ng',
        'yrl',
        'yrl-br',
        'yrl-co',
        'yrl-ve',
        'yue',
        'yue-cn',
        'yue-hk',
        'yue-mo',
        'za',
        'za-cn',
        'zgh',
        'zgh-ma',
        'zh',
        'zh-cn',
        'zh-hans',
        'zh-hant',
        'zh-hk',
        'zh-mo',
        'zh-my',
        'zh-sg',
        'zh-tw',
        'zu',
        'zu-za',
      ])
      .openapi({
        description: 'Designated language of the object to add to a multi-language group.',
        example: null,
      }),
    primaryId: z
      .string()
      .openapi({
        description: 'ID of primary language object in multi-language group.',
        example: null,
      }),
    primaryLanguage: z
      .enum([
        'aa',
        'ab',
        'ae',
        'af',
        'af-na',
        'af-za',
        'agq',
        'agq-cm',
        'ak',
        'ak-gh',
        'am',
        'am-et',
        'an',
        'ann',
        'ann-ng',
        'ar',
        'ar-001',
        'ar-ae',
        'ar-bh',
        'ar-dj',
        'ar-dz',
        'ar-eg',
        'ar-eh',
        'ar-er',
        'ar-il',
        'ar-iq',
        'ar-jo',
        'ar-km',
        'ar-kw',
        'ar-lb',
        'ar-ly',
        'ar-ma',
        'ar-mr',
        'ar-om',
        'ar-ps',
        'ar-qa',
        'ar-sa',
        'ar-sd',
        'ar-so',
        'ar-ss',
        'ar-sy',
        'ar-td',
        'ar-tn',
        'ar-ye',
        'as',
        'as-in',
        'asa',
        'asa-tz',
        'ast',
        'ast-es',
        'av',
        'ay',
        'az',
        'az-az',
        'ba',
        'bal',
        'bal-pk',
        'bas',
        'bas-cm',
        'be',
        'be-by',
        'bem',
        'bem-zm',
        'bez',
        'bez-tz',
        'bg',
        'bg-bg',
        'bgc',
        'bgc-in',
        'bho',
        'bho-in',
        'bi',
        'blo',
        'blo-bj',
        'bm',
        'bm-ml',
        'bn',
        'bn-bd',
        'bn-in',
        'bo',
        'bo-cn',
        'bo-in',
        'br',
        'br-fr',
        'brx',
        'brx-in',
        'bs',
        'bs-ba',
        'ca',
        'ca-ad',
        'ca-es',
        'ca-fr',
        'ca-it',
        'ccp',
        'ccp-bd',
        'ccp-in',
        'ce',
        'ce-ru',
        'ceb',
        'ceb-ph',
        'cgg',
        'cgg-ug',
        'ch',
        'chr',
        'chr-us',
        'ckb',
        'ckb-iq',
        'ckb-ir',
        'co',
        'cr',
        'cs',
        'cs-cz',
        'csw',
        'csw-ca',
        'cu',
        'cu-ru',
        'cv',
        'cv-ru',
        'cy',
        'cy-gb',
        'da',
        'da-dk',
        'da-gl',
        'dav',
        'dav-ke',
        'de',
        'de-at',
        'de-be',
        'de-ch',
        'de-de',
        'de-gr',
        'de-it',
        'de-li',
        'de-lu',
        'dje',
        'dje-ne',
        'doi',
        'doi-in',
        'dsb',
        'dsb-de',
        'dua',
        'dua-cm',
        'dv',
        'dyo',
        'dyo-sn',
        'dz',
        'dz-bt',
        'ebu',
        'ebu-ke',
        'ee',
        'ee-gh',
        'ee-tg',
        'el',
        'el-cy',
        'el-gr',
        'en',
        'en-001',
        'en-150',
        'en-ae',
        'en-ag',
        'en-ai',
        'en-as',
        'en-at',
        'en-au',
        'en-bb',
        'en-be',
        'en-bi',
        'en-bm',
        'en-bs',
        'en-bw',
        'en-bz',
        'en-ca',
        'en-cc',
        'en-ch',
        'en-ck',
        'en-cm',
        'en-cn',
        'en-cx',
        'en-cy',
        'en-cz',
        'en-de',
        'en-dg',
        'en-dk',
        'en-dm',
        'en-ee',
        'en-eg',
        'en-er',
        'en-es',
        'en-fi',
        'en-fj',
        'en-fk',
        'en-fm',
        'en-fr',
        'en-gb',
        'en-gd',
        'en-gg',
        'en-gh',
        'en-gi',
        'en-gm',
        'en-gs',
        'en-gu',
        'en-gy',
        'en-hk',
        'en-hu',
        'en-id',
        'en-ie',
        'en-il',
        'en-im',
        'en-in',
        'en-io',
        'en-it',
        'en-je',
        'en-jm',
        'en-ke',
        'en-ki',
        'en-kn',
        'en-ky',
        'en-lc',
        'en-lr',
        'en-ls',
        'en-lu',
        'en-mg',
        'en-mh',
        'en-mo',
        'en-mp',
        'en-ms',
        'en-mt',
        'en-mu',
        'en-mv',
        'en-mw',
        'en-mx',
        'en-my',
        'en-na',
        'en-nf',
        'en-ng',
        'en-nl',
        'en-no',
        'en-nr',
        'en-nu',
        'en-nz',
        'en-pg',
        'en-ph',
        'en-pk',
        'en-pl',
        'en-pn',
        'en-pr',
        'en-pt',
        'en-pw',
        'en-ro',
        'en-rw',
        'en-sb',
        'en-sc',
        'en-sd',
        'en-se',
        'en-sg',
        'en-sh',
        'en-si',
        'en-sk',
        'en-sl',
        'en-ss',
        'en-sx',
        'en-sz',
        'en-tc',
        'en-th',
        'en-tk',
        'en-tn',
        'en-to',
        'en-tt',
        'en-tv',
        'en-tz',
        'en-ug',
        'en-um',
        'en-us',
        'en-vc',
        'en-vg',
        'en-vi',
        'en-vn',
        'en-vu',
        'en-ws',
        'en-za',
        'en-zm',
        'en-zw',
        'eo',
        'eo-001',
        'es',
        'es-419',
        'es-ar',
        'es-bo',
        'es-br',
        'es-bz',
        'es-cl',
        'es-co',
        'es-cr',
        'es-cu',
        'es-do',
        'es-ea',
        'es-ec',
        'es-es',
        'es-gq',
        'es-gt',
        'es-hn',
        'es-ic',
        'es-mx',
        'es-ni',
        'es-pa',
        'es-pe',
        'es-ph',
        'es-pr',
        'es-py',
        'es-sv',
        'es-us',
        'es-uy',
        'es-ve',
        'et',
        'et-ee',
        'eu',
        'eu-es',
        'ewo',
        'ewo-cm',
        'fa',
        'fa-af',
        'fa-ir',
        'ff',
        'ff-bf',
        'ff-cm',
        'ff-gh',
        'ff-gm',
        'ff-gn',
        'ff-gw',
        'ff-lr',
        'ff-mr',
        'ff-ne',
        'ff-ng',
        'ff-sl',
        'ff-sn',
        'fi',
        'fi-fi',
        'fil',
        'fil-ph',
        'fj',
        'fo',
        'fo-dk',
        'fo-fo',
        'fr',
        'fr-be',
        'fr-bf',
        'fr-bi',
        'fr-bj',
        'fr-bl',
        'fr-ca',
        'fr-cd',
        'fr-cf',
        'fr-cg',
        'fr-ch',
        'fr-ci',
        'fr-cm',
        'fr-dj',
        'fr-dz',
        'fr-fr',
        'fr-ga',
        'fr-gf',
        'fr-gn',
        'fr-gp',
        'fr-gq',
        'fr-ht',
        'fr-km',
        'fr-lu',
        'fr-ma',
        'fr-mc',
        'fr-mf',
        'fr-mg',
        'fr-ml',
        'fr-mq',
        'fr-mr',
        'fr-mu',
        'fr-nc',
        'fr-ne',
        'fr-pf',
        'fr-pm',
        'fr-re',
        'fr-rw',
        'fr-sc',
        'fr-sn',
        'fr-sy',
        'fr-td',
        'fr-tg',
        'fr-tn',
        'fr-vu',
        'fr-wf',
        'fr-yt',
        'frr',
        'frr-de',
        'fur',
        'fur-it',
        'fy',
        'fy-nl',
        'ga',
        'ga-gb',
        'ga-ie',
        'gaa',
        'gaa-gh',
        'gd',
        'gd-gb',
        'gl',
        'gl-es',
        'gn',
        'gsw',
        'gsw-ch',
        'gsw-fr',
        'gsw-li',
        'gu',
        'gu-in',
        'guz',
        'guz-ke',
        'gv',
        'gv-im',
        'ha',
        'ha-gh',
        'ha-ne',
        'ha-ng',
        'haw',
        'haw-us',
        'he',
        'he-il',
        'hi',
        'hi-in',
        'hmn',
        'ho',
        'hr',
        'hr-ba',
        'hr-hr',
        'hsb',
        'hsb-de',
        'ht',
        'ht-ht',
        'hu',
        'hu-hu',
        'hy',
        'hy-am',
        'hz',
        'ia',
        'ia-001',
        'id',
        'id-id',
        'ie',
        'ie-ee',
        'ig',
        'ig-ng',
        'ii',
        'ii-cn',
        'ik',
        'io',
        'is',
        'is-is',
        'it',
        'it-ch',
        'it-it',
        'it-sm',
        'it-va',
        'iu',
        'ja',
        'ja-jp',
        'jgo',
        'jgo-cm',
        'jmc',
        'jmc-tz',
        'jv',
        'jv-id',
        'ka',
        'ka-ge',
        'kab',
        'kab-dz',
        'kam',
        'kam-ke',
        'kar',
        'kde',
        'kde-tz',
        'kea',
        'kea-cv',
        'kg',
        'kgp',
        'kgp-br',
        'kh',
        'khq',
        'khq-ml',
        'ki',
        'ki-ke',
        'kj',
        'kk',
        'kk-kz',
        'kkj',
        'kkj-cm',
        'kl',
        'kl-gl',
        'kln',
        'kln-ke',
        'km',
        'km-kh',
        'kn',
        'kn-in',
        'ko',
        'ko-cn',
        'ko-kp',
        'ko-kr',
        'kok',
        'kok-in',
        'kr',
        'ks',
        'ks-in',
        'ksb',
        'ksb-tz',
        'ksf',
        'ksf-cm',
        'ksh',
        'ksh-de',
        'ku',
        'ku-tr',
        'kv',
        'kw',
        'kw-gb',
        'kxv',
        'kxv-in',
        'ky',
        'ky-kg',
        'la',
        'lag',
        'lag-tz',
        'lb',
        'lb-lu',
        'lg',
        'lg-ug',
        'li',
        'lij',
        'lij-it',
        'lkt',
        'lkt-us',
        'lmo',
        'lmo-it',
        'ln',
        'ln-ao',
        'ln-cd',
        'ln-cf',
        'ln-cg',
        'lo',
        'lo-la',
        'lrc',
        'lrc-iq',
        'lrc-ir',
        'lt',
        'lt-lt',
        'lu',
        'lu-cd',
        'luo',
        'luo-ke',
        'luy',
        'luy-ke',
        'lv',
        'lv-lv',
        'mai',
        'mai-in',
        'mas',
        'mas-ke',
        'mas-tz',
        'mdf',
        'mdf-ru',
        'mer',
        'mer-ke',
        'mfe',
        'mfe-mu',
        'mg',
        'mg-mg',
        'mgh',
        'mgh-mz',
        'mgo',
        'mgo-cm',
        'mh',
        'mi',
        'mi-nz',
        'mk',
        'mk-mk',
        'ml',
        'ml-in',
        'mn',
        'mn-mn',
        'mni',
        'mni-in',
        'mr',
        'mr-in',
        'ms',
        'ms-bn',
        'ms-id',
        'ms-my',
        'ms-sg',
        'mt',
        'mt-mt',
        'mua',
        'mua-cm',
        'my',
        'my-mm',
        'mzn',
        'mzn-ir',
        'na',
        'naq',
        'naq-na',
        'nb',
        'nb-no',
        'nb-sj',
        'nd',
        'nd-zw',
        'nds',
        'nds-de',
        'nds-nl',
        'ne',
        'ne-in',
        'ne-np',
        'ng',
        'nl',
        'nl-aw',
        'nl-be',
        'nl-bq',
        'nl-ch',
        'nl-cw',
        'nl-lu',
        'nl-nl',
        'nl-sr',
        'nl-sx',
        'nmg',
        'nmg-cm',
        'nn',
        'nn-no',
        'nnh',
        'nnh-cm',
        'no',
        'no-no',
        'nqo',
        'nqo-gn',
        'nr',
        'nso',
        'nso-za',
        'nus',
        'nus-ss',
        'nv',
        'ny',
        'nyn',
        'nyn-ug',
        'oc',
        'oc-es',
        'oc-fr',
        'oj',
        'om',
        'om-et',
        'om-ke',
        'or',
        'or-in',
        'os',
        'os-ge',
        'os-ru',
        'pa',
        'pa-in',
        'pa-pk',
        'pcm',
        'pcm-ng',
        'pi',
        'pis',
        'pis-sb',
        'pl',
        'pl-pl',
        'prg',
        'prg-001',
        'ps',
        'ps-af',
        'ps-pk',
        'pt',
        'pt-ao',
        'pt-br',
        'pt-ch',
        'pt-cv',
        'pt-gq',
        'pt-gw',
        'pt-lu',
        'pt-mo',
        'pt-mz',
        'pt-pt',
        'pt-st',
        'pt-tl',
        'qu',
        'qu-bo',
        'qu-ec',
        'qu-pe',
        'raj',
        'raj-in',
        'rm',
        'rm-ch',
        'rn',
        'rn-bi',
        'ro',
        'ro-md',
        'ro-ro',
        'rof',
        'rof-tz',
        'ru',
        'ru-by',
        'ru-kg',
        'ru-kz',
        'ru-md',
        'ru-ru',
        'ru-ua',
        'rw',
        'rw-rw',
        'rwk',
        'rwk-tz',
        'sa',
        'sa-in',
        'sah',
        'sah-ru',
        'saq',
        'saq-ke',
        'sat',
        'sat-in',
        'sbp',
        'sbp-tz',
        'sc',
        'sc-it',
        'sd',
        'sd-in',
        'sd-pk',
        'se',
        'se-fi',
        'se-no',
        'se-se',
        'seh',
        'seh-mz',
        'ses',
        'ses-ml',
        'sg',
        'sg-cf',
        'shi',
        'shi-ma',
        'si',
        'si-lk',
        'sk',
        'sk-sk',
        'sl',
        'sl-si',
        'sm',
        'smn',
        'smn-fi',
        'sms',
        'sms-fi',
        'sn',
        'sn-zw',
        'so',
        'so-dj',
        'so-et',
        'so-ke',
        'so-so',
        'sq',
        'sq-al',
        'sq-mk',
        'sq-xk',
        'sr',
        'sr-ba',
        'sr-cs',
        'sr-me',
        'sr-rs',
        'sr-xk',
        'ss',
        'st',
        'st-ls',
        'st-za',
        'su',
        'su-id',
        'sv',
        'sv-ax',
        'sv-fi',
        'sv-se',
        'sw',
        'sw-cd',
        'sw-ke',
        'sw-tz',
        'sw-ug',
        'sy',
        'syr',
        'syr-iq',
        'syr-sy',
        'szl',
        'szl-pl',
        'ta',
        'ta-in',
        'ta-lk',
        'ta-my',
        'ta-sg',
        'te',
        'te-in',
        'teo',
        'teo-ke',
        'teo-ug',
        'tg',
        'tg-tj',
        'th',
        'th-th',
        'ti',
        'ti-er',
        'ti-et',
        'tk',
        'tk-tm',
        'tl',
        'tn',
        'tn-bw',
        'tn-za',
        'to',
        'to-to',
        'tok',
        'tok-001',
        'tr',
        'tr-cy',
        'tr-tr',
        'ts',
        'tt',
        'tt-ru',
        'tw',
        'twq',
        'twq-ne',
        'ty',
        'tzm',
        'tzm-ma',
        'ug',
        'ug-cn',
        'uk',
        'uk-ua',
        'ur',
        'ur-in',
        'ur-pk',
        'uz',
        'uz-af',
        'uz-uz',
        'vai',
        'vai-lr',
        've',
        'vec',
        'vec-it',
        'vi',
        'vi-vn',
        'vmw',
        'vmw-mz',
        'vo',
        'vo-001',
        'vun',
        'vun-tz',
        'wa',
        'wae',
        'wae-ch',
        'wo',
        'wo-sn',
        'xh',
        'xh-za',
        'xnr',
        'xnr-in',
        'xog',
        'xog-ug',
        'yav',
        'yav-cm',
        'yi',
        'yi-001',
        'yi-ua',
        'yo',
        'yo-bj',
        'yo-ng',
        'yrl',
        'yrl-br',
        'yrl-co',
        'yrl-ve',
        'yue',
        'yue-cn',
        'yue-hk',
        'yue-mo',
        'za',
        'za-cn',
        'zgh',
        'zgh-ma',
        'zh',
        'zh-cn',
        'zh-hans',
        'zh-hant',
        'zh-hk',
        'zh-mo',
        'zh-my',
        'zh-sg',
        'zh-tw',
        'zu',
        'zu-za',
      ])
      .exactOptional()
      .openapi({ description: 'Primary language of the multi-language group.', example: null }),
  })
  .openapi({ required: ['id', 'language', 'primaryId'], example: null })
  .openapi('AttachToLangPrimaryRequestVNext')

const LayoutSectionSchema: z.ZodType<LayoutSectionType> = z
  .lazy(() =>
    z
      .object({
        cells: z
          .array(LayoutSectionSchema)
          .openapi({
            description: 'The cells contained within the layout section, defining its structure.',
            example: null,
          }),
        cssClass: z
          .string()
          .openapi({ description: 'The CSS class applied to the layout section.', example: null }),
        cssId: z
          .string()
          .openapi({ description: 'The CSS ID applied to the layout section.', example: null }),
        cssStyle: z
          .string()
          .openapi({
            description: 'Custom CSS styles applied to the layout section.',
            example: null,
          }),
        label: z
          .string()
          .openapi({ description: 'The label for the layout section.', example: null }),
        name: z
          .string()
          .openapi({ description: 'The name assigned to the layout section.', example: null }),
        params: z
          .record(z.string(), z.object({}).openapi({ example: null }))
          .openapi({
            description:
              'Additional parameters for the layout section, typically used for configuration.',
            example: null,
          }),
        rowMetaData: z
          .array(RowMetaDataSchema)
          .openapi({
            description: 'Metadata associated with the rows in the layout section.',
            example: null,
          }),
        rows: z
          .array(z.record(z.string(), LayoutSectionSchema).openapi({ example: null }))
          .openapi({ description: 'The number of rows in the layout section.', example: null }),
        styles: StylesSchema,
        type: z.string().openapi({ description: 'The type of the layout section.', example: null }),
        w: z.int32().openapi({ description: 'The width of the layout section.', example: null }),
        x: z
          .int32()
          .openapi({
            description: 'The x-coordinate position of the layout section.',
            example: null,
          }),
      })
      .openapi({
        required: [
          'cells',
          'cssClass',
          'cssId',
          'cssStyle',
          'label',
          'name',
          'params',
          'rowMetaData',
          'rows',
          'styles',
          'type',
          'w',
          'x',
        ],
        example: null,
      }),
  )
  .openapi('LayoutSection')

const PublicAccessRuleSchema = z.object({}).openapi({ example: null }).openapi('PublicAccessRule')

const ContentLanguageVariationSchema = z
  .object({
    archivedInDashboard: z
      .boolean()
      .openapi({
        description:
          'If True, the variant will not show up in your dashboard, although the post could still be live.',
        example: null,
      }),
    authorName: z
      .string()
      .openapi({
        description:
          "The name of the user who last published the blog post. For posts that haven't been published yet, this property will reflect the user who initially created the draft.",
        example: null,
      }),
    campaign: z
      .string()
      .openapi({
        description: 'The GUID of the marketing campaign this page is a part of.',
        example: null,
      }),
    campaignName: z
      .string()
      .openapi({ description: 'Name of the associated marketing campaign.', example: null }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp (ISO8601 format) when this Blog Post was created.',
        example: null,
      }),
    id: z
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
        description: 'ID of object to set as primary in multi-language group.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The internal name of the content language variation.',
        example: null,
      }),
    password: z
      .string()
      .openapi({
        description:
          'Set this to create a password protected page. Entering the password will be required to view the page.',
        example: null,
      }),
    publicAccessRules: z
      .array(PublicAccessRuleSchema)
      .openapi({
        description: 'The set of rules governing public access to this language variation.',
        example: null,
      }),
    publicAccessRulesEnabled: z
      .boolean()
      .openapi({
        description: 'Boolean to determine whether or not to respect publicAccessRules.',
        example: null,
      }),
    publishDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date (ISO8601 format) the page is to be published at.',
        example: null,
      }),
    slug: z
      .string()
      .openapi({
        description:
          'The path of the this page. This field is appended to the domain to construct the url of this page.',
        example: null,
      }),
    state: z
      .string()
      .openapi({
        description:
          'An ENUM describing the current state of this page.\n\nMaximum string length: 25',
        example: null,
      }),
    tagIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .exactOptional()
      .openapi({
        description: 'An array of tag identifiers associated with this language variation.',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp (ISO8601 format) when this Blog Post was updated.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archivedInDashboard',
      'authorName',
      'campaign',
      'campaignName',
      'created',
      'id',
      'name',
      'password',
      'publicAccessRules',
      'publicAccessRulesEnabled',
      'publishDate',
      'slug',
      'state',
      'updated',
    ],
    example: null,
  })
  .openapi('ContentLanguageVariation')

const BlogPostSchema = z
  .object({
    abStatus: z
      .enum([
        'automated_loser_variant',
        'automated_master',
        'automated_variant',
        'loser_variant',
        'mab_master',
        'mab_variant',
        'master',
        'variant',
      ])
      .openapi({
        description:
          'The status of the AB test associated with this blog post, if applicable\n\nAvailable options: automated_loser_variant, automated_master, automated_variant, loser_variant, mab_master, mab_variant, master, variant',
        example: null,
      }),
    abTestId: z
      .string()
      .openapi({
        description: 'The ID of the AB test associated with this page, if applicable',
        example: null,
      }),
    archivedAt: z
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
        description: 'The timestamp (ISO8601 format) when this Blog Post was deleted.',
        example: null,
      }),
    archivedInDashboard: z
      .boolean()
      .openapi({
        description:
          'If True, the post will not show up in your dashboard, although the post could still be live.',
        example: null,
      }),
    attachedStylesheets: z
      .array(
        z.record(z.string(), z.object({}).openapi({ example: null })).openapi({ example: null }),
      )
      .openapi({
        description:
          'List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.',
        example: null,
      }),
    authorName: z
      .string()
      .openapi({ description: 'The name of the user that updated this Blog Post.', example: null }),
    blogAuthorId: z
      .string()
      .openapi({
        description: 'The ID of the Blog Author associated with this Blog Post.',
        example: null,
      }),
    campaign: z
      .string()
      .openapi({
        description: 'The GUID of the marketing campaign this Blog Post is a part of.',
        example: null,
      }),
    categoryId: z
      .int32()
      .openapi({ description: 'ID of the type of object this is. Should always .', example: null }),
    contentGroupId: z
      .string()
      .openapi({
        description: 'The ID of the parent Blog this Blog Post is associated with.',
        example: null,
      }),
    contentTypeCategory: z
      .enum([
        '0',
        '1',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '2',
        '20',
        '21',
        '22',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
      ])
      .openapi({
        description: 'An ENUM descibing the type of this object. Should always be BLOG_POST.',
        example: null,
      }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp (ISO8601 format) when this Blog Post was created.',
        example: null,
      }),
    createdById: z
      .string()
      .openapi({ description: 'The ID of the user that created this Blog Post.', example: null }),
    currentState: z
      .enum([
        'AGENT_GENERATED',
        'AUTOMATED',
        'AUTOMATED_AB',
        'AUTOMATED_AB_VARIANT',
        'AUTOMATED_DRAFT',
        'AUTOMATED_DRAFT_AB',
        'AUTOMATED_DRAFT_ABVARIANT',
        'AUTOMATED_FOR_FORM',
        'AUTOMATED_FOR_FORM_BUFFER',
        'AUTOMATED_FOR_FORM_DRAFT',
        'AUTOMATED_FOR_FORM_LEGACY',
        'AUTOMATED_LOSER_ABVARIANT',
        'AUTOMATED_SENDING',
        'BLOG_EMAIL_DRAFT',
        'BLOG_EMAIL_PUBLISHED',
        'DRAFT',
        'DRAFT_AB',
        'DRAFT_AB_VARIANT',
        'ERROR',
        'LOSER_AB_VARIANT',
        'PAGE_STUB',
        'PRE_PROCESSING',
        'PROCESSING',
        'PUBLISHED',
        'PUBLISHED_AB',
        'PUBLISHED_AB_VARIANT',
        'PUBLISHED_OR_SCHEDULED',
        'RSS_TO_EMAIL_DRAFT',
        'RSS_TO_EMAIL_PUBLISHED',
        'SCHEDULED',
        'SCHEDULED_AB',
        'SCHEDULED_OR_PUBLISHED',
      ])
      .openapi({
        description:
          'A generated ENUM descibing the current state of this Blog Post. Should always match state.',
        example: null,
      }),
    currentlyPublished: z
      .boolean()
      .openapi({ description: 'Whether the post is published (true or false)', example: null }),
    domain: z
      .string()
      .openapi({
        description:
          'The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.',
        example: null,
      }),
    dynamicPageDataSourceId: z
      .string()
      .openapi({
        description: 'The identifier for the data source used by the dynamic page.',
        example: null,
      }),
    dynamicPageDataSourceType: z
      .int32()
      .openapi({ description: 'The type of data source used by the dynamic page.', example: null }),
    dynamicPageHubDbTableId: z
      .string()
      .openapi({
        description: 'The ID of the HubDB table this Blog Post references, if applicable',
        example: null,
      }),
    enableDomainStylesheets: z
      .boolean()
      .openapi({
        description:
          'Boolean to determine whether or not the styles from the template should be applied.',
        example: null,
      }),
    enableGoogleAmpOutputOverride: z
      .boolean()
      .openapi({
        description: 'Boolean to allow overriding the AMP settings for the blog.',
        example: null,
      }),
    enableLayoutStylesheets: z
      .boolean()
      .openapi({
        description:
          'Boolean to determine whether or not the styles from the template should be applied.',
        example: null,
      }),
    featuredImage: z
      .string()
      .openapi({ description: 'The featuredImage of this Blog Post.', example: null }),
    featuredImageAltText: z
      .string()
      .openapi({ description: 'Alt Text of the featuredImage.', example: null }),
    folderId: z
      .string()
      .openapi({ description: 'Unique identifier of associated folder', example: null }),
    footerHtml: z
      .string()
      .openapi({
        description:
          'Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.',
        example: null,
      }),
    headHtml: z
      .string()
      .openapi({
        description:
          'Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.',
        example: null,
      }),
    htmlTitle: z
      .string()
      .openapi({ description: 'The html title of this Blog Post.', example: null }),
    id: z.string().openapi({ description: 'The unique ID of the Blog Post.', example: null }),
    includeDefaultCustomCss: z
      .boolean()
      .openapi({
        description: 'Boolean to determine whether or not the Primary CSS Files should be applied.',
        example: null,
      }),
    language: z
      .enum([
        'aa',
        'ab',
        'ae',
        'af',
        'af-na',
        'af-za',
        'agq',
        'agq-cm',
        'ak',
        'ak-gh',
        'am',
        'am-et',
        'an',
        'ann',
        'ann-ng',
        'ar',
        'ar-001',
        'ar-ae',
        'ar-bh',
        'ar-dj',
        'ar-dz',
        'ar-eg',
        'ar-eh',
        'ar-er',
        'ar-il',
        'ar-iq',
        'ar-jo',
        'ar-km',
        'ar-kw',
        'ar-lb',
        'ar-ly',
        'ar-ma',
        'ar-mr',
        'ar-om',
        'ar-ps',
        'ar-qa',
        'ar-sa',
        'ar-sd',
        'ar-so',
        'ar-ss',
        'ar-sy',
        'ar-td',
        'ar-tn',
        'ar-ye',
        'as',
        'as-in',
        'asa',
        'asa-tz',
        'ast',
        'ast-es',
        'av',
        'ay',
        'az',
        'az-az',
        'ba',
        'bal',
        'bal-pk',
        'bas',
        'bas-cm',
        'be',
        'be-by',
        'bem',
        'bem-zm',
        'bez',
        'bez-tz',
        'bg',
        'bg-bg',
        'bgc',
        'bgc-in',
        'bho',
        'bho-in',
        'bi',
        'blo',
        'blo-bj',
        'bm',
        'bm-ml',
        'bn',
        'bn-bd',
        'bn-in',
        'bo',
        'bo-cn',
        'bo-in',
        'br',
        'br-fr',
        'brx',
        'brx-in',
        'bs',
        'bs-ba',
        'ca',
        'ca-ad',
        'ca-es',
        'ca-fr',
        'ca-it',
        'ccp',
        'ccp-bd',
        'ccp-in',
        'ce',
        'ce-ru',
        'ceb',
        'ceb-ph',
        'cgg',
        'cgg-ug',
        'ch',
        'chr',
        'chr-us',
        'ckb',
        'ckb-iq',
        'ckb-ir',
        'co',
        'cr',
        'cs',
        'cs-cz',
        'csw',
        'csw-ca',
        'cu',
        'cu-ru',
        'cv',
        'cv-ru',
        'cy',
        'cy-gb',
        'da',
        'da-dk',
        'da-gl',
        'dav',
        'dav-ke',
        'de',
        'de-at',
        'de-be',
        'de-ch',
        'de-de',
        'de-gr',
        'de-it',
        'de-li',
        'de-lu',
        'dje',
        'dje-ne',
        'doi',
        'doi-in',
        'dsb',
        'dsb-de',
        'dua',
        'dua-cm',
        'dv',
        'dyo',
        'dyo-sn',
        'dz',
        'dz-bt',
        'ebu',
        'ebu-ke',
        'ee',
        'ee-gh',
        'ee-tg',
        'el',
        'el-cy',
        'el-gr',
        'en',
        'en-001',
        'en-150',
        'en-ae',
        'en-ag',
        'en-ai',
        'en-as',
        'en-at',
        'en-au',
        'en-bb',
        'en-be',
        'en-bi',
        'en-bm',
        'en-bs',
        'en-bw',
        'en-bz',
        'en-ca',
        'en-cc',
        'en-ch',
        'en-ck',
        'en-cm',
        'en-cn',
        'en-cx',
        'en-cy',
        'en-cz',
        'en-de',
        'en-dg',
        'en-dk',
        'en-dm',
        'en-ee',
        'en-eg',
        'en-er',
        'en-es',
        'en-fi',
        'en-fj',
        'en-fk',
        'en-fm',
        'en-fr',
        'en-gb',
        'en-gd',
        'en-gg',
        'en-gh',
        'en-gi',
        'en-gm',
        'en-gs',
        'en-gu',
        'en-gy',
        'en-hk',
        'en-hu',
        'en-id',
        'en-ie',
        'en-il',
        'en-im',
        'en-in',
        'en-io',
        'en-it',
        'en-je',
        'en-jm',
        'en-ke',
        'en-ki',
        'en-kn',
        'en-ky',
        'en-lc',
        'en-lr',
        'en-ls',
        'en-lu',
        'en-mg',
        'en-mh',
        'en-mo',
        'en-mp',
        'en-ms',
        'en-mt',
        'en-mu',
        'en-mv',
        'en-mw',
        'en-mx',
        'en-my',
        'en-na',
        'en-nf',
        'en-ng',
        'en-nl',
        'en-no',
        'en-nr',
        'en-nu',
        'en-nz',
        'en-pg',
        'en-ph',
        'en-pk',
        'en-pl',
        'en-pn',
        'en-pr',
        'en-pt',
        'en-pw',
        'en-ro',
        'en-rw',
        'en-sb',
        'en-sc',
        'en-sd',
        'en-se',
        'en-sg',
        'en-sh',
        'en-si',
        'en-sk',
        'en-sl',
        'en-ss',
        'en-sx',
        'en-sz',
        'en-tc',
        'en-th',
        'en-tk',
        'en-tn',
        'en-to',
        'en-tt',
        'en-tv',
        'en-tz',
        'en-ug',
        'en-um',
        'en-us',
        'en-vc',
        'en-vg',
        'en-vi',
        'en-vn',
        'en-vu',
        'en-ws',
        'en-za',
        'en-zm',
        'en-zw',
        'eo',
        'eo-001',
        'es',
        'es-419',
        'es-ar',
        'es-bo',
        'es-br',
        'es-bz',
        'es-cl',
        'es-co',
        'es-cr',
        'es-cu',
        'es-do',
        'es-ea',
        'es-ec',
        'es-es',
        'es-gq',
        'es-gt',
        'es-hn',
        'es-ic',
        'es-mx',
        'es-ni',
        'es-pa',
        'es-pe',
        'es-ph',
        'es-pr',
        'es-py',
        'es-sv',
        'es-us',
        'es-uy',
        'es-ve',
        'et',
        'et-ee',
        'eu',
        'eu-es',
        'ewo',
        'ewo-cm',
        'fa',
        'fa-af',
        'fa-ir',
        'ff',
        'ff-bf',
        'ff-cm',
        'ff-gh',
        'ff-gm',
        'ff-gn',
        'ff-gw',
        'ff-lr',
        'ff-mr',
        'ff-ne',
        'ff-ng',
        'ff-sl',
        'ff-sn',
        'fi',
        'fi-fi',
        'fil',
        'fil-ph',
        'fj',
        'fo',
        'fo-dk',
        'fo-fo',
        'fr',
        'fr-be',
        'fr-bf',
        'fr-bi',
        'fr-bj',
        'fr-bl',
        'fr-ca',
        'fr-cd',
        'fr-cf',
        'fr-cg',
        'fr-ch',
        'fr-ci',
        'fr-cm',
        'fr-dj',
        'fr-dz',
        'fr-fr',
        'fr-ga',
        'fr-gf',
        'fr-gn',
        'fr-gp',
        'fr-gq',
        'fr-ht',
        'fr-km',
        'fr-lu',
        'fr-ma',
        'fr-mc',
        'fr-mf',
        'fr-mg',
        'fr-ml',
        'fr-mq',
        'fr-mr',
        'fr-mu',
        'fr-nc',
        'fr-ne',
        'fr-pf',
        'fr-pm',
        'fr-re',
        'fr-rw',
        'fr-sc',
        'fr-sn',
        'fr-sy',
        'fr-td',
        'fr-tg',
        'fr-tn',
        'fr-vu',
        'fr-wf',
        'fr-yt',
        'frr',
        'frr-de',
        'fur',
        'fur-it',
        'fy',
        'fy-nl',
        'ga',
        'ga-gb',
        'ga-ie',
        'gaa',
        'gaa-gh',
        'gd',
        'gd-gb',
        'gl',
        'gl-es',
        'gn',
        'gsw',
        'gsw-ch',
        'gsw-fr',
        'gsw-li',
        'gu',
        'gu-in',
        'guz',
        'guz-ke',
        'gv',
        'gv-im',
        'ha',
        'ha-gh',
        'ha-ne',
        'ha-ng',
        'haw',
        'haw-us',
        'he',
        'he-il',
        'hi',
        'hi-in',
        'hmn',
        'ho',
        'hr',
        'hr-ba',
        'hr-hr',
        'hsb',
        'hsb-de',
        'ht',
        'ht-ht',
        'hu',
        'hu-hu',
        'hy',
        'hy-am',
        'hz',
        'ia',
        'ia-001',
        'id',
        'id-id',
        'ie',
        'ie-ee',
        'ig',
        'ig-ng',
        'ii',
        'ii-cn',
        'ik',
        'io',
        'is',
        'is-is',
        'it',
        'it-ch',
        'it-it',
        'it-sm',
        'it-va',
        'iu',
        'ja',
        'ja-jp',
        'jgo',
        'jgo-cm',
        'jmc',
        'jmc-tz',
        'jv',
        'jv-id',
        'ka',
        'ka-ge',
        'kab',
        'kab-dz',
        'kam',
        'kam-ke',
        'kar',
        'kde',
        'kde-tz',
        'kea',
        'kea-cv',
        'kg',
        'kgp',
        'kgp-br',
        'kh',
        'khq',
        'khq-ml',
        'ki',
        'ki-ke',
        'kj',
        'kk',
        'kk-kz',
        'kkj',
        'kkj-cm',
        'kl',
        'kl-gl',
        'kln',
        'kln-ke',
        'km',
        'km-kh',
        'kn',
        'kn-in',
        'ko',
        'ko-cn',
        'ko-kp',
        'ko-kr',
        'kok',
        'kok-in',
        'kr',
        'ks',
        'ks-in',
        'ksb',
        'ksb-tz',
        'ksf',
        'ksf-cm',
        'ksh',
        'ksh-de',
        'ku',
        'ku-tr',
        'kv',
        'kw',
        'kw-gb',
        'kxv',
        'kxv-in',
        'ky',
        'ky-kg',
        'la',
        'lag',
        'lag-tz',
        'lb',
        'lb-lu',
        'lg',
        'lg-ug',
        'li',
        'lij',
        'lij-it',
        'lkt',
        'lkt-us',
        'lmo',
        'lmo-it',
        'ln',
        'ln-ao',
        'ln-cd',
        'ln-cf',
        'ln-cg',
        'lo',
        'lo-la',
        'lrc',
        'lrc-iq',
        'lrc-ir',
        'lt',
        'lt-lt',
        'lu',
        'lu-cd',
        'luo',
        'luo-ke',
        'luy',
        'luy-ke',
        'lv',
        'lv-lv',
        'mai',
        'mai-in',
        'mas',
        'mas-ke',
        'mas-tz',
        'mdf',
        'mdf-ru',
        'mer',
        'mer-ke',
        'mfe',
        'mfe-mu',
        'mg',
        'mg-mg',
        'mgh',
        'mgh-mz',
        'mgo',
        'mgo-cm',
        'mh',
        'mi',
        'mi-nz',
        'mk',
        'mk-mk',
        'ml',
        'ml-in',
        'mn',
        'mn-mn',
        'mni',
        'mni-in',
        'mr',
        'mr-in',
        'ms',
        'ms-bn',
        'ms-id',
        'ms-my',
        'ms-sg',
        'mt',
        'mt-mt',
        'mua',
        'mua-cm',
        'my',
        'my-mm',
        'mzn',
        'mzn-ir',
        'na',
        'naq',
        'naq-na',
        'nb',
        'nb-no',
        'nb-sj',
        'nd',
        'nd-zw',
        'nds',
        'nds-de',
        'nds-nl',
        'ne',
        'ne-in',
        'ne-np',
        'ng',
        'nl',
        'nl-aw',
        'nl-be',
        'nl-bq',
        'nl-ch',
        'nl-cw',
        'nl-lu',
        'nl-nl',
        'nl-sr',
        'nl-sx',
        'nmg',
        'nmg-cm',
        'nn',
        'nn-no',
        'nnh',
        'nnh-cm',
        'no',
        'no-no',
        'nqo',
        'nqo-gn',
        'nr',
        'nso',
        'nso-za',
        'nus',
        'nus-ss',
        'nv',
        'ny',
        'nyn',
        'nyn-ug',
        'oc',
        'oc-es',
        'oc-fr',
        'oj',
        'om',
        'om-et',
        'om-ke',
        'or',
        'or-in',
        'os',
        'os-ge',
        'os-ru',
        'pa',
        'pa-in',
        'pa-pk',
        'pcm',
        'pcm-ng',
        'pi',
        'pis',
        'pis-sb',
        'pl',
        'pl-pl',
        'prg',
        'prg-001',
        'ps',
        'ps-af',
        'ps-pk',
        'pt',
        'pt-ao',
        'pt-br',
        'pt-ch',
        'pt-cv',
        'pt-gq',
        'pt-gw',
        'pt-lu',
        'pt-mo',
        'pt-mz',
        'pt-pt',
        'pt-st',
        'pt-tl',
        'qu',
        'qu-bo',
        'qu-ec',
        'qu-pe',
        'raj',
        'raj-in',
        'rm',
        'rm-ch',
        'rn',
        'rn-bi',
        'ro',
        'ro-md',
        'ro-ro',
        'rof',
        'rof-tz',
        'ru',
        'ru-by',
        'ru-kg',
        'ru-kz',
        'ru-md',
        'ru-ru',
        'ru-ua',
        'rw',
        'rw-rw',
        'rwk',
        'rwk-tz',
        'sa',
        'sa-in',
        'sah',
        'sah-ru',
        'saq',
        'saq-ke',
        'sat',
        'sat-in',
        'sbp',
        'sbp-tz',
        'sc',
        'sc-it',
        'sd',
        'sd-in',
        'sd-pk',
        'se',
        'se-fi',
        'se-no',
        'se-se',
        'seh',
        'seh-mz',
        'ses',
        'ses-ml',
        'sg',
        'sg-cf',
        'shi',
        'shi-ma',
        'si',
        'si-lk',
        'sk',
        'sk-sk',
        'sl',
        'sl-si',
        'sm',
        'smn',
        'smn-fi',
        'sms',
        'sms-fi',
        'sn',
        'sn-zw',
        'so',
        'so-dj',
        'so-et',
        'so-ke',
        'so-so',
        'sq',
        'sq-al',
        'sq-mk',
        'sq-xk',
        'sr',
        'sr-ba',
        'sr-cs',
        'sr-me',
        'sr-rs',
        'sr-xk',
        'ss',
        'st',
        'st-ls',
        'st-za',
        'su',
        'su-id',
        'sv',
        'sv-ax',
        'sv-fi',
        'sv-se',
        'sw',
        'sw-cd',
        'sw-ke',
        'sw-tz',
        'sw-ug',
        'sy',
        'syr',
        'syr-iq',
        'syr-sy',
        'szl',
        'szl-pl',
        'ta',
        'ta-in',
        'ta-lk',
        'ta-my',
        'ta-sg',
        'te',
        'te-in',
        'teo',
        'teo-ke',
        'teo-ug',
        'tg',
        'tg-tj',
        'th',
        'th-th',
        'ti',
        'ti-er',
        'ti-et',
        'tk',
        'tk-tm',
        'tl',
        'tn',
        'tn-bw',
        'tn-za',
        'to',
        'to-to',
        'tok',
        'tok-001',
        'tr',
        'tr-cy',
        'tr-tr',
        'ts',
        'tt',
        'tt-ru',
        'tw',
        'twq',
        'twq-ne',
        'ty',
        'tzm',
        'tzm-ma',
        'ug',
        'ug-cn',
        'uk',
        'uk-ua',
        'ur',
        'ur-in',
        'ur-pk',
        'uz',
        'uz-af',
        'uz-uz',
        'vai',
        'vai-lr',
        've',
        'vec',
        'vec-it',
        'vi',
        'vi-vn',
        'vmw',
        'vmw-mz',
        'vo',
        'vo-001',
        'vun',
        'vun-tz',
        'wa',
        'wae',
        'wae-ch',
        'wo',
        'wo-sn',
        'xh',
        'xh-za',
        'xnr',
        'xnr-in',
        'xog',
        'xog-ug',
        'yav',
        'yav-cm',
        'yi',
        'yi-001',
        'yi-ua',
        'yo',
        'yo-bj',
        'yo-ng',
        'yrl',
        'yrl-br',
        'yrl-co',
        'yrl-ve',
        'yue',
        'yue-cn',
        'yue-hk',
        'yue-mo',
        'za',
        'za-cn',
        'zgh',
        'zgh-ma',
        'zh',
        'zh-cn',
        'zh-hans',
        'zh-hant',
        'zh-hk',
        'zh-mo',
        'zh-my',
        'zh-sg',
        'zh-tw',
        'zu',
        'zu-za',
      ])
      .openapi({
        description:
          'The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.',
        example: null,
      }),
    layoutSections: z
      .record(z.string(), LayoutSectionSchema)
      .openapi({
        description: 'A structure detailing the layout sections of the blog post.',
        example: null,
      }),
    linkRelCanonicalUrl: z
      .string()
      .openapi({
        description:
          'Optional override to set the URL to be used in the rel=canonical link tag on the page.',
        example: null,
      }),
    mabExperimentId: z
      .string()
      .openapi({ description: 'Unique identifier of the MAB Experiment', example: null }),
    metaDescription: z
      .string()
      .openapi({
        description: 'A description that goes in <meta> tag on the page.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The internal name of the Blog Post.', example: null }),
    pageExpiryDate: z
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
        description:
          'The date at which this blog post should expire and begin redirecting to another url or page.',
        example: null,
      }),
    pageExpiryEnabled: z
      .boolean()
      .openapi({
        description:
          'Boolean describing if the page expiration feature is enabled for this blog post.',
        example: null,
      }),
    pageExpiryRedirectId: z
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
        description:
          "The ID of another page this blog post's url should redirect to once this blog post expires. Should only set this or pageExpiryRedirectUrl.",
        example: null,
      }),
    pageExpiryRedirectUrl: z
      .string()
      .openapi({
        description:
          "The URL this blog post's url should redirect to once it expires. Should only set this or pageExpiryRedirectId.",
        example: null,
      }),
    password: z
      .string()
      .openapi({
        description:
          'Set this to create a password protected page. Entering the password will be required to view the page.',
        example: null,
      }),
    postBody: z.string().openapi({ description: 'The HTML of the main post body.', example: null }),
    postSummary: z
      .string()
      .openapi({
        description: 'The summary of the blog post that will appear on the main listing page.',
        example: null,
      }),
    publicAccessRules: z
      .array(PublicAccessRuleSchema)
      .openapi({
        description: 'Rules for require member registration to access private content.',
        example: null,
      }),
    publicAccessRulesEnabled: z
      .boolean()
      .openapi({
        description: 'Boolean to determine whether or not to respect publicAccessRules.',
        example: null,
      }),
    publishDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date (ISO8601 format) the blog post is to be published at.',
        example: null,
      }),
    publishImmediately: z
      .boolean()
      .openapi({
        description:
          'Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.',
        example: null,
      }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the blog post was published, in ISO 8601 format.',
        example: null,
      }),
    rssBody: z
      .string()
      .openapi({ description: 'The contents of the RSS body for this Blog Post.', example: null }),
    rssSummary: z
      .string()
      .openapi({
        description: 'The contents of the RSS summary for this Blog Post.',
        example: null,
      }),
    slug: z
      .string()
      .openapi({
        description:
          'The path of the this blog post. This field is appended to the domain to construct the url of this post.',
        example: null,
      }),
    state: z
      .string()
      .max(25)
      .openapi({
        description: 'An ENUM descibing the current state of this Blog Post.',
        example: null,
      }),
    tagIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description: 'List of IDs for the tags associated with this Blog Post.',
        example: null,
      }),
    themeSettingsValues: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description: 'A collection of settings specific to the theme applied to the blog post.',
        example: null,
      }),
    translatedFromId: z
      .string()
      .openapi({
        description: 'ID of the primary blog post this object was translated from.',
        example: null,
      }),
    translations: z
      .record(z.string(), ContentLanguageVariationSchema)
      .openapi({
        description:
          'A map of translations for the blog post, each associated with a specific language variation.',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp (ISO8601 format) when this Blog Post was updated.',
        example: null,
      }),
    updatedById: z
      .string()
      .openapi({ description: 'The ID of the user that updated this Blog Post.', example: null }),
    url: z
      .string()
      .openapi({
        description: 'A generated field representing the URL of this blog post.',
        example: null,
      }),
    useFeaturedImage: z
      .boolean()
      .openapi({
        description: 'Boolean to determine if this post should use a featuredImage.',
        example: null,
      }),
    widgetContainers: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description:
          'A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.',
        example: null,
      }),
    widgets: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description: 'A data structure containing the data for all the modules for this page.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'abStatus',
      'abTestId',
      'archivedAt',
      'archivedInDashboard',
      'attachedStylesheets',
      'authorName',
      'blogAuthorId',
      'campaign',
      'categoryId',
      'contentGroupId',
      'contentTypeCategory',
      'created',
      'createdById',
      'currentState',
      'currentlyPublished',
      'domain',
      'dynamicPageDataSourceId',
      'dynamicPageDataSourceType',
      'dynamicPageHubDbTableId',
      'enableDomainStylesheets',
      'enableGoogleAmpOutputOverride',
      'enableLayoutStylesheets',
      'featuredImage',
      'featuredImageAltText',
      'folderId',
      'footerHtml',
      'headHtml',
      'htmlTitle',
      'id',
      'includeDefaultCustomCss',
      'language',
      'layoutSections',
      'linkRelCanonicalUrl',
      'mabExperimentId',
      'metaDescription',
      'name',
      'pageExpiryDate',
      'pageExpiryEnabled',
      'pageExpiryRedirectId',
      'pageExpiryRedirectUrl',
      'password',
      'postBody',
      'postSummary',
      'publicAccessRules',
      'publicAccessRulesEnabled',
      'publishDate',
      'publishImmediately',
      'publishedAt',
      'rssBody',
      'rssSummary',
      'slug',
      'state',
      'tagIds',
      'themeSettingsValues',
      'translatedFromId',
      'translations',
      'updated',
      'updatedById',
      'url',
      'useFeaturedImage',
      'widgetContainers',
      'widgets',
    ],
    example: null,
  })
  .openapi('BlogPost')

const BatchInputBlogPostSchema = z
  .object({
    inputs: z.array(BlogPostSchema).openapi({ description: 'Blog posts to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputBlogPost')

const BatchInputJsonNodeSchema = z
  .object({
    inputs: z
      .array(z.object({}).openapi({ example: null }))
      .openapi({ description: 'JSON nodes to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputJsonNode')

const BatchInputStringSchema = z
  .object({
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'Strings to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputString')

const BatchResponseBlogPostSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation completion.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Links associated with batch operation.', example: null }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time of batch operation request.', example: null }),
    results: z
      .array(BlogPostSchema)
      .openapi({ description: 'Results of batch operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation start.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of batch operation.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseBlogPost')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const StandardErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'Error category.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({ description: 'Error context.', example: null }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({ description: 'List of error details.', example: null }),
    id: z.string().exactOptional().openapi({ description: 'Error ID.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({ description: 'Error links.', example: null }),
    message: z.string().openapi({ description: 'Error message.', example: null }),
    status: z.string().openapi({ description: 'Error status.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Error subcategory.', example: null }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponseBlogPostWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation completion.', example: null }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({ description: 'Errors in batch operation.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ description: 'Links associated with batch operation.', example: null }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of errors.', example: null }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time of batch operation request.', example: null }),
    results: z
      .array(BlogPostSchema)
      .openapi({ description: 'Results of batch operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation start.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of batch operation.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseBlogPostWithErrors')

const BlogPostLanguageCloneRequestVNextSchema = z
  .object({
    id: z.string().openapi({ description: 'ID of blog post to clone.', example: null }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'Target language of new variant.', example: null }),
    usePublished: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the published version of the blog post should be used for cloning. If true, the published version is used; otherwise, the draft version is used.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('BlogPostLanguageCloneRequestVNext')

const VersionUserSchema = z
  .object({
    email: z.string().openapi({ description: 'The email address of the user.', example: null }),
    fullName: z
      .string()
      .openapi({ description: 'The first and last name of the User.', example: null }),
    id: z.string().openapi({ description: 'The unique ID of the User.', example: null }),
  })
  .openapi({ required: ['email', 'fullName', 'id'], example: null })
  .openapi('VersionUser')

const BlogPostVersionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this specific version of the blog post.',
        example: null,
      }),
    object: BlogPostSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this version of the blog post was last updated, in ISO 8601 format.',
        example: null,
      }),
    user: VersionUserSchema,
  })
  .openapi({ required: ['id', 'object', 'updatedAt', 'user'], example: null })
  .openapi('BlogPostVersion')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token representing the paging cursor of the last successfully read resource. This token is used to fetch the next set of results in a paged response.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string URL that provides the link to the next page of results in a paged response.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const CollectionResponseWithTotalBlogPostForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(BlogPostSchema)
      .openapi({ description: 'Collection of blog posts.', example: null }),
    total: z.int32().openapi({ description: 'Total number of blog posts.', example: null }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalBlogPostForwardPaging')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description: 'A string token that represents the cursor for the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides the link to access the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const VersionBlogPostSchema = z
  .object({
    id: z.string().openapi({ description: 'The id of the version.', example: null }),
    object: BlogPostSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp (ISO8601 format) when this version of the Blog Post was updated.',
        example: null,
      }),
    user: VersionUserSchema,
  })
  .openapi({ required: ['id', 'object', 'updatedAt', 'user'], example: null })
  .openapi('VersionBlogPost')

const CollectionResponseWithTotalBlogPostVersionSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(VersionBlogPostSchema)
      .openapi({
        description:
          'An array containing the individual blog post versions. Each item in the array represents a specific version of a blog post.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of blog post versions available. This is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalBlogPostVersion')

const ContentCloneRequestVNextSchema = z
  .object({
    cloneName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the cloned object.', example: null }),
    id: z.string().openapi({ description: 'ID of the object to be cloned.', example: null }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('ContentCloneRequestVNext')

const ContentScheduleRequestVNextSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the object to be scheduled.', example: null }),
    publishDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date the object should transition from scheduled to published.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'publishDate'], example: null })
  .openapi('ContentScheduleRequestVNext')

const CursorPagedResultBlogAuthorLongSchema = z
  .object({})
  .openapi({ example: null })
  .openapi('CursorPagedResultBlogAuthorLong')

const CursorPagedResultBlogPostLongSchema = z
  .object({})
  .openapi({ example: null })
  .openapi('CursorPagedResultBlogPostLong')

const CursorPagedResultTagLongSchema = z
  .object({})
  .openapi({ example: null })
  .openapi('CursorPagedResultTagLong')

const DetachFromLangGroupRequestVNextSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'ID of the object to remove from a multi-language group.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('DetachFromLangGroupRequestVNext')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const SetNewLanguagePrimaryRequestVNextSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'ID of object to set as primary in multi-language group.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('SetNewLanguagePrimaryRequestVNext')

const UpdateLanguagesRequestVNextSchema = z
  .object({
    languages: z
      .record(
        z.string(),
        z
          .enum([
            'aa',
            'ab',
            'ae',
            'af',
            'af-na',
            'af-za',
            'agq',
            'agq-cm',
            'ak',
            'ak-gh',
            'am',
            'am-et',
            'an',
            'ann',
            'ann-ng',
            'ar',
            'ar-001',
            'ar-ae',
            'ar-bh',
            'ar-dj',
            'ar-dz',
            'ar-eg',
            'ar-eh',
            'ar-er',
            'ar-il',
            'ar-iq',
            'ar-jo',
            'ar-km',
            'ar-kw',
            'ar-lb',
            'ar-ly',
            'ar-ma',
            'ar-mr',
            'ar-om',
            'ar-ps',
            'ar-qa',
            'ar-sa',
            'ar-sd',
            'ar-so',
            'ar-ss',
            'ar-sy',
            'ar-td',
            'ar-tn',
            'ar-ye',
            'as',
            'asa',
            'asa-tz',
            'ast',
            'ast-es',
            'as-in',
            'av',
            'ay',
            'az',
            'az-az',
            'ba',
            'bal',
            'bal-pk',
            'bas',
            'bas-cm',
            'be',
            'bem',
            'bem-zm',
            'bez',
            'bez-tz',
            'be-by',
            'bg',
            'bgc',
            'bgc-in',
            'bg-bg',
            'bi',
            'bho',
            'bho-in',
            'blo',
            'blo-bj',
            'bm',
            'bm-ml',
            'bn',
            'bn-bd',
            'bn-in',
            'bo',
            'bo-cn',
            'bo-in',
            'br',
            'brx',
            'brx-in',
            'br-fr',
            'bs',
            'bs-ba',
            'ca',
            'ca-ad',
            'ca-es',
            'ca-fr',
            'ca-it',
            'ccp',
            'ccp-bd',
            'ccp-in',
            'ce',
            'ceb',
            'ceb-ph',
            'ce-ru',
            'ch',
            'cgg',
            'cgg-ug',
            'chr',
            'chr-us',
            'ckb',
            'ckb-iq',
            'ckb-ir',
            'co',
            'cr',
            'cs',
            'cs-cz',
            'csw',
            'csw-ca',
            'cu',
            'cu-ru',
            'cv',
            'cv-ru',
            'cy',
            'cy-gb',
            'da',
            'dav',
            'dav-ke',
            'da-dk',
            'da-gl',
            'de',
            'de-at',
            'de-be',
            'de-ch',
            'de-de',
            'de-gr',
            'de-it',
            'de-li',
            'de-lu',
            'dje',
            'dje-ne',
            'doi',
            'doi-in',
            'dsb',
            'dsb-de',
            'dua',
            'dua-cm',
            'dyo',
            'dyo-sn',
            'dv',
            'dz',
            'dz-bt',
            'ebu',
            'ebu-ke',
            'ee',
            'ee-gh',
            'ee-tg',
            'el',
            'el-cy',
            'el-gr',
            'en',
            'en-001',
            'en-150',
            'en-ae',
            'en-ag',
            'en-ai',
            'en-as',
            'en-at',
            'en-au',
            'en-bb',
            'en-be',
            'en-bi',
            'en-bm',
            'en-bs',
            'en-bw',
            'en-bz',
            'en-ca',
            'en-cc',
            'en-ch',
            'en-ck',
            'en-cm',
            'en-cn',
            'en-cx',
            'en-cy',
            'en-cz',
            'en-de',
            'en-dg',
            'en-dk',
            'en-dm',
            'en-ee',
            'en-eg',
            'en-er',
            'en-es',
            'en-fi',
            'en-fj',
            'en-fk',
            'en-fm',
            'en-fr',
            'en-gb',
            'en-gd',
            'en-gg',
            'en-gh',
            'en-gi',
            'en-gm',
            'en-gs',
            'en-gu',
            'en-gy',
            'en-hk',
            'en-hu',
            'en-id',
            'en-ie',
            'en-il',
            'en-im',
            'en-in',
            'en-io',
            'en-it',
            'en-je',
            'en-jm',
            'en-ke',
            'en-ki',
            'en-kn',
            'en-ky',
            'en-lc',
            'en-lr',
            'en-ls',
            'en-lu',
            'en-mg',
            'en-mh',
            'en-mo',
            'en-mp',
            'en-ms',
            'en-mt',
            'en-mu',
            'en-mv',
            'en-mw',
            'en-mx',
            'en-my',
            'en-na',
            'en-nf',
            'en-ng',
            'en-nl',
            'en-no',
            'en-nr',
            'en-nu',
            'en-nz',
            'en-pg',
            'en-ph',
            'en-pk',
            'en-pl',
            'en-pn',
            'en-pr',
            'en-pt',
            'en-pw',
            'en-ro',
            'en-rw',
            'en-sb',
            'en-sc',
            'en-sd',
            'en-se',
            'en-sg',
            'en-sh',
            'en-si',
            'en-sk',
            'en-sl',
            'en-ss',
            'en-sx',
            'en-sz',
            'en-tc',
            'en-th',
            'en-tk',
            'en-tn',
            'en-to',
            'en-tt',
            'en-tv',
            'en-tz',
            'en-ug',
            'en-um',
            'en-us',
            'en-vc',
            'en-vg',
            'en-vi',
            'en-vn',
            'en-vu',
            'en-ws',
            'en-za',
            'en-zm',
            'en-zw',
            'eo',
            'eo-001',
            'es',
            'es-419',
            'es-ar',
            'es-bo',
            'es-br',
            'es-bz',
            'es-cl',
            'es-co',
            'es-cr',
            'es-cu',
            'es-do',
            'es-ea',
            'es-ec',
            'es-es',
            'es-gq',
            'es-gt',
            'es-hn',
            'es-ic',
            'es-mx',
            'es-ni',
            'es-pa',
            'es-pe',
            'es-ph',
            'es-pr',
            'es-py',
            'es-sv',
            'es-us',
            'es-uy',
            'es-ve',
            'et',
            'et-ee',
            'eu',
            'eu-es',
            'ewo',
            'ewo-cm',
            'fa',
            'fa-af',
            'fa-ir',
            'ff',
            'ff-bf',
            'ff-cm',
            'ff-gh',
            'ff-gm',
            'ff-gn',
            'ff-gw',
            'ff-lr',
            'ff-mr',
            'ff-ne',
            'ff-ng',
            'ff-sl',
            'ff-sn',
            'fi',
            'fil',
            'fil-ph',
            'fi-fi',
            'fj',
            'fo',
            'fo-dk',
            'fo-fo',
            'fr',
            'frr',
            'frr-de',
            'fr-be',
            'fr-bf',
            'fr-bi',
            'fr-bj',
            'fr-bl',
            'fr-ca',
            'fr-cd',
            'fr-cf',
            'fr-cg',
            'fr-ch',
            'fr-ci',
            'fr-cm',
            'fr-dj',
            'fr-dz',
            'fr-fr',
            'fr-ga',
            'fr-gf',
            'fr-gn',
            'fr-gp',
            'fr-gq',
            'fr-ht',
            'fr-km',
            'fr-lu',
            'fr-ma',
            'fr-mc',
            'fr-mf',
            'fr-mg',
            'fr-ml',
            'fr-mq',
            'fr-mr',
            'fr-mu',
            'fr-nc',
            'fr-ne',
            'fr-pf',
            'fr-pm',
            'fr-re',
            'fr-rw',
            'fr-sc',
            'fr-sn',
            'fr-sy',
            'fr-td',
            'fr-tg',
            'fr-tn',
            'fr-vu',
            'fr-wf',
            'fr-yt',
            'fur',
            'fur-it',
            'fy',
            'fy-nl',
            'ga',
            'ga-gb',
            'ga-ie',
            'gaa',
            'gaa-gh',
            'gd',
            'gd-gb',
            'gl',
            'gl-es',
            'gn',
            'gsw',
            'gsw-ch',
            'gsw-fr',
            'gsw-li',
            'gu',
            'guz',
            'guz-ke',
            'gu-in',
            'gv',
            'gv-im',
            'ha',
            'haw',
            'haw-us',
            'ha-gh',
            'ha-ne',
            'ha-ng',
            'he',
            'he-il',
            'hi',
            'hi-in',
            'hmn',
            'ho',
            'hr',
            'hr-ba',
            'hr-hr',
            'ht',
            'ht-ht',
            'hsb',
            'hsb-de',
            'hu',
            'hu-hu',
            'hy',
            'hy-am',
            'hz',
            'ia',
            'ia-001',
            'id',
            'ie',
            'ie-ee',
            'ig',
            'ig-ng',
            'ii',
            'ii-cn',
            'ik',
            'io',
            'id-id',
            'is',
            'is-is',
            'it',
            'it-ch',
            'it-it',
            'it-sm',
            'it-va',
            'iu',
            'ja',
            'ja-jp',
            'jgo',
            'jgo-cm',
            'yi',
            'yi-001',
            'jmc',
            'jmc-tz',
            'jv',
            'jv-id',
            'ka',
            'kab',
            'kab-dz',
            'kam',
            'kam-ke',
            'kar',
            'ka-ge',
            'kde',
            'kde-tz',
            'kea',
            'kea-cv',
            'kgp',
            'kgp-br',
            'kg',
            'kh',
            'khq',
            'khq-ml',
            'ki',
            'ki-ke',
            'kj',
            'kk',
            'kkj',
            'kkj-cm',
            'kk-kz',
            'kl',
            'kln',
            'kln-ke',
            'kl-gl',
            'km',
            'km-kh',
            'kn',
            'kn-in',
            'ko',
            'ko-cn',
            'kok',
            'kok-in',
            'ko-kp',
            'ko-kr',
            'kr',
            'ks',
            'ksb',
            'ksb-tz',
            'ksf',
            'ksf-cm',
            'ksh',
            'ksh-de',
            'ks-in',
            'ku',
            'ku-tr',
            'kv',
            'kw',
            'kw-gb',
            'kxv',
            'kxv-in',
            'ky',
            'ky-kg',
            'lag',
            'lag-tz',
            'la',
            'lb',
            'lb-lu',
            'lg',
            'lg-ug',
            'lkt',
            'lkt-us',
            'li',
            'lij',
            'lij-it',
            'lmo',
            'lmo-it',
            'ln',
            'ln-ao',
            'ln-cd',
            'ln-cf',
            'ln-cg',
            'lo',
            'lo-la',
            'lrc',
            'lrc-iq',
            'lrc-ir',
            'lt',
            'lt-lt',
            'lu',
            'luo',
            'luo-ke',
            'luy',
            'luy-ke',
            'lu-cd',
            'lv',
            'lv-lv',
            'mai',
            'mai-in',
            'mas',
            'mas-ke',
            'mas-tz',
            'mdf',
            'mdf-ru',
            'mer',
            'mer-ke',
            'mfe',
            'mfe-mu',
            'mg',
            'mgh',
            'mgh-mz',
            'mgo',
            'mgo-cm',
            'mg-mg',
            'mh',
            'mi',
            'mi-nz',
            'mk',
            'mk-mk',
            'ml',
            'ml-in',
            'mn',
            'mni',
            'mni-in',
            'mn-mn',
            'mr',
            'mr-in',
            'ms',
            'ms-bn',
            'ms-id',
            'ms-my',
            'ms-sg',
            'mt',
            'mt-mt',
            'mua',
            'mua-cm',
            'my',
            'my-mm',
            'mzn',
            'mzn-ir',
            'naq',
            'naq-na',
            'na',
            'nb',
            'nb-no',
            'nb-sj',
            'nd',
            'nds',
            'nds-de',
            'nds-nl',
            'nd-zw',
            'ne',
            'ne-in',
            'ne-np',
            'ng',
            'nl',
            'nl-aw',
            'nl-be',
            'nl-bq',
            'nl-ch',
            'nl-cw',
            'nl-lu',
            'nl-nl',
            'nl-sr',
            'nl-sx',
            'nmg',
            'nmg-cm',
            'nn',
            'nnh',
            'nnh-cm',
            'nn-no',
            'nqo',
            'nqo-gn',
            'nr',
            'nso',
            'nso-za',
            'nv',
            'ny',
            'no',
            'no-no',
            'nus',
            'nus-ss',
            'nyn',
            'nyn-ug',
            'oc',
            'oc-es',
            'oc-fr',
            'oj',
            'om',
            'om-et',
            'om-ke',
            'or',
            'or-in',
            'os',
            'os-ge',
            'os-ru',
            'pa',
            'pa-in',
            'pa-pk',
            'pcm',
            'pcm-ng',
            'pis',
            'pis-sb',
            'pi',
            'pl',
            'pl-pl',
            'prg',
            'prg-001',
            'ps',
            'ps-af',
            'ps-pk',
            'pt',
            'pt-ao',
            'pt-br',
            'pt-ch',
            'pt-cv',
            'pt-gq',
            'pt-gw',
            'pt-lu',
            'pt-mo',
            'pt-mz',
            'pt-pt',
            'pt-st',
            'pt-tl',
            'qu',
            'qu-bo',
            'qu-ec',
            'qu-pe',
            'raj',
            'raj-in',
            'rm',
            'rm-ch',
            'rn',
            'rn-bi',
            'ro',
            'rof',
            'rof-tz',
            'ro-md',
            'ro-ro',
            'ru',
            'ru-by',
            'ru-kg',
            'ru-kz',
            'ru-md',
            'ru-ru',
            'ru-ua',
            'rw',
            'rwk',
            'rwk-tz',
            'rw-rw',
            'sa',
            'sah',
            'sah-ru',
            'saq',
            'saq-ke',
            'sat',
            'sat-in',
            'sa-in',
            'sbp',
            'sbp-tz',
            'sc',
            'sc-it',
            'sd',
            'sd-in',
            'sd-pk',
            'se',
            'seh',
            'seh-mz',
            'ses',
            'ses-ml',
            'se-fi',
            'se-no',
            'se-se',
            'sg',
            'sg-cf',
            'shi',
            'shi-ma',
            'si',
            'si-lk',
            'sk',
            'sk-sk',
            'sl',
            'sl-si',
            'sm',
            'smn',
            'smn-fi',
            'sms',
            'sms-fi',
            'sn',
            'sn-zw',
            'so',
            'so-dj',
            'so-et',
            'so-ke',
            'so-so',
            'sq',
            'sq-al',
            'sq-mk',
            'sq-xk',
            'sr',
            'sr-ba',
            'sr-cs',
            'sr-me',
            'sr-rs',
            'sr-xk',
            'ss',
            'st',
            'st-ls',
            'st-za',
            'su',
            'su-id',
            'sv',
            'sv-ax',
            'sv-fi',
            'sv-se',
            'sw',
            'sw-cd',
            'sw-ke',
            'sw-tz',
            'sw-ug',
            'sy',
            'syr',
            'syr-iq',
            'syr-sy',
            'szl',
            'szl-pl',
            'ta',
            'ta-in',
            'ta-lk',
            'ta-my',
            'ta-sg',
            'te',
            'teo',
            'teo-ke',
            'teo-ug',
            'te-in',
            'tg',
            'tg-tj',
            'th',
            'th-th',
            'ti',
            'ti-er',
            'ti-et',
            'tk',
            'tk-tm',
            'tl',
            'tn',
            'tn-bw',
            'tn-za',
            'to',
            'tok',
            'tok-001',
            'to-to',
            'ts',
            'tr',
            'tr-cy',
            'tr-tr',
            'tt',
            'tt-ru',
            'tw',
            'ty',
            'twq',
            'twq-ne',
            'tzm',
            'tzm-ma',
            'ug',
            'ug-cn',
            'uk',
            'uk-ua',
            'ur',
            'ur-in',
            'ur-pk',
            'uz',
            'uz-af',
            'uz-uz',
            'vai',
            'vai-lr',
            've',
            'vec',
            'vec-it',
            'vi',
            'vi-vn',
            'vmw',
            'vmw-mz',
            'vo',
            'vo-001',
            'vun',
            'vun-tz',
            'wa',
            'wae',
            'wae-ch',
            'wo',
            'wo-sn',
            'xh',
            'xh-za',
            'xnr',
            'xnr-in',
            'xog',
            'xog-ug',
            'yav',
            'yav-cm',
            'yi-ua',
            'yo',
            'yo-bj',
            'yo-ng',
            'yrl',
            'yrl-br',
            'yrl-co',
            'yrl-ve',
            'yue',
            'yue-cn',
            'yue-hk',
            'yue-mo',
            'zgh',
            'zgh-ma',
            'za',
            'za-cn',
            'zh',
            'zh-cn',
            'zh-hans',
            'zh-hant',
            'zh-hk',
            'zh-mo',
            'zh-my',
            'zh-sg',
            'zh-tw',
            'zu',
            'zu-za',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'Map of object IDs to associated languages of object in the multi-language group.',
        example: null,
      }),
    primaryId: z
      .string()
      .openapi({
        description: 'ID of the primary object in the multi-language group.',
        example: null,
      }),
  })
  .openapi({ required: ['languages', 'primaryId'], example: null })
  .openapi('UpdateLanguagesRequestVNext')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { content: '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCmsBlogs202609AuthorsCursorRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/authors/cursor',
  tags: ['Basic'],
  summary: 'List Authors',
  description:
    'Retrieve a list of blog authors using various query parameters to filter and sort the results. This endpoint supports pagination and can return archived authors if specified.',
  operationId: 'get-/cms/blogs/2026-09/authors/cursor_/cms/blogs/v3/authors/cursor',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter authors created after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter authors by the exact creation date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description: 'Filter authors created before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify a property to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'Specify the order in which to sort the results. Accepts an array of fields.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter authors updated after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter authors by the exact update date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description: 'Filter authors updated before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: CursorPagedResultBlogAuthorLongSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609AuthorsCursorQueryRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/authors/cursor/query',
  tags: ['Basic'],
  summary: 'Query authors',
  description:
    'Retrieve a list of blog authors with optional filters for creation and update timestamps. This endpoint supports pagination and sorting, allowing you to efficiently manage large datasets of authors.',
  operationId: 'get-/cms/blogs/2026-09/authors/cursor/query_/cms/blogs/v3/authors/cursor/query',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter authors created after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter authors by the exact creation date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description: 'Filter authors created before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify which properties of the authors to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Specify the order of results using a list of fields to sort by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter authors updated after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter authors by the exact last update date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description: 'Filter authors updated before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: CursorPagedResultBlogAuthorLongSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts',
  tags: ['Basic'],
  summary: 'Get all posts',
  description:
    'Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.',
  operationId: 'get-/cms/blogs/2026-09/posts_getPage',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter posts created after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter posts by their creation date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description: 'Filter posts created before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify which properties to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'Specify the order in which to sort the results. Accepts an array of field names.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter posts updated after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter posts by their last update date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description: 'Filter posts updated before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        '*/*': { schema: CollectionResponseWithTotalBlogPostForwardPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts',
  tags: ['Basic'],
  summary: 'Create a new post',
  description: 'Create a new blog post, specifying its content in the request body.',
  operationId: 'post-/cms/blogs/2026-09/posts_create',
  request: {
    body: { content: { '*/*': { schema: BlogPostSchema, example: null } }, required: true },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/batch/archive',
  tags: ['Batch'],
  summary: 'Delete a batch of blog posts',
  description:
    'Delete a blog post by ID. \nNote: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.',
  operationId: 'post-/cms/blogs/2026-09/posts/batch/archive_archive',
  request: {
    body: { content: { '*/*': { schema: BatchInputStringSchema, example: null } }, required: true },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsBatchCreateRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/batch/create',
  tags: ['Batch'],
  summary: 'Create a batch of blog posts',
  description: 'Create a batch of blog posts, specifying their content in the request body.',
  operationId: 'post-/cms/blogs/2026-09/posts/batch/create_create',
  request: {
    body: {
      content: { '*/*': { schema: BatchInputBlogPostSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { '*/*': { schema: BatchResponseBlogPostSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { '*/*': { schema: BatchResponseBlogPostWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsBatchReadRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/batch/read',
  tags: ['Batch'],
  summary: 'Retrieve a batch of Blog Posts',
  description: 'Retrieve a batch of blog posts by ID. identified in the request body.',
  operationId: 'post-/cms/blogs/2026-09/posts/batch/read_read',
  request: {
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
    body: { content: { '*/*': { schema: BatchInputStringSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BatchResponseBlogPostSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { '*/*': { schema: BatchResponseBlogPostWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/batch/update',
  tags: ['Batch'],
  summary: 'Update a batch of Blog Posts',
  description: 'Update a batch of blog posts.',
  operationId: 'post-/cms/blogs/2026-09/posts/batch/update_update',
  request: {
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { '*/*': { schema: BatchInputJsonNodeSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BatchResponseBlogPostSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { '*/*': { schema: BatchResponseBlogPostWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsCloneRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/clone',
  tags: ['Basic'],
  summary: 'Clone a blog post',
  description: 'Clone a blog post, making a copy of it in a new blog post.',
  operationId: 'post-/cms/blogs/2026-09/posts/clone_clone',
  request: {
    body: {
      content: { '*/*': { schema: ContentCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsCursorRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts/cursor',
  tags: ['Basic'],
  summary: 'List posts',
  description:
    'Retrieve a list of blog posts with optional filtering and sorting capabilities. This endpoint supports pagination and allows you to specify date ranges for creation and update times, as well as sorting preferences. It is useful for obtaining an overview of blog posts, including archived ones if desired.',
  operationId: 'get-/cms/blogs/2026-09/posts/cursor_/cms/blogs/v3/posts/cursor',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter posts created after a specific date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter posts by their creation date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description: 'Filter posts created before a specific date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify properties to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'Specify the sorting order of the results. Accepts an array of field names.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter posts updated after a specific date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter posts by their last update date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description: 'Filter posts updated before a specific date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: CursorPagedResultBlogPostLongSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsCursorQueryRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts/cursor/query',
  tags: ['Basic'],
  summary: 'Query Posts',
  description:
    'Retrieve blog posts from the HubSpot CMS using various query parameters to filter and sort the results. This endpoint supports pagination and allows you to specify date ranges for creation and updates, as well as sorting options. It is useful for fetching a list of posts with specific criteria, such as posts created after a certain date or posts that have been archived.',
  operationId: 'get-/cms/blogs/2026-09/posts/cursor/query_/cms/blogs/v3/posts/cursor/query',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter posts created after the specified date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter posts by their exact creation date. The format is date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description: 'Filter posts created before the specified date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify properties to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Specify the sorting order of the results. Accepts an array of strings.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter posts updated after the specified date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter posts by their exact update date. The format is date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description: 'Filter posts updated before the specified date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: CursorPagedResultBlogPostLongSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/multi-language/attach-to-lang-group',
  tags: ['Multi-language'],
  summary: 'Attach post to a multi-language group',
  description:
    'Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).',
  operationId:
    'post-/cms/blogs/2026-09/posts/multi-language/attach-to-lang-group_attachToLangGroup',
  request: {
    body: {
      content: { '*/*': { schema: AttachToLangPrimaryRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/multi-language/create-language-variation',
  tags: ['Multi-language'],
  summary: 'Create a language variation',
  description: 'Create a new language variation from an existing blog post',
  operationId:
    'post-/cms/blogs/2026-09/posts/multi-language/create-language-variation_createLangVariation',
  request: {
    body: {
      content: { '*/*': { schema: BlogPostLanguageCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/multi-language/detach-from-lang-group',
  tags: ['Multi-language'],
  summary: 'Detach post from a multi-language group',
  description:
    'Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).',
  operationId:
    'post-/cms/blogs/2026-09/posts/multi-language/detach-from-lang-group_detachFromLangGroup',
  request: {
    body: {
      content: { '*/*': { schema: DetachFromLangGroupRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRoute = createRoute({
  method: 'put',
  path: '/cms/blogs/2026-09/posts/multi-language/set-new-lang-primary',
  tags: ['Multi-language'],
  summary: 'Set a new primary language',
  description:
    'Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)',
  operationId: 'put-/cms/blogs/2026-09/posts/multi-language/set-new-lang-primary_setLangPrimary',
  request: {
    body: {
      content: { '*/*': { schema: SetNewLanguagePrimaryRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/multi-language/update-languages',
  tags: ['Multi-language'],
  summary: 'Update languages of multi-language group',
  description:
    'Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).',
  operationId: 'post-/cms/blogs/2026-09/posts/multi-language/update-languages_updateLangs',
  request: {
    body: {
      content: { '*/*': { schema: UpdateLanguagesRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsScheduleRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/schedule',
  tags: ['Basic'],
  summary: 'Schedule a post to be published',
  description: 'Schedule a blog post to be published at a specified time.',
  operationId: 'post-/cms/blogs/2026-09/posts/schedule_schedule',
  request: {
    body: {
      content: { '*/*': { schema: ContentScheduleRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsObjectIdRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts/{objectId}',
  tags: ['Basic'],
  summary: 'Retrieve a blog post',
  description: 'Retrieve a blog post by the post ID.',
  operationId: 'get-/cms/blogs/2026-09/posts/{objectId}_getById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'A specific property of the blog post to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsBlogs202609PostsObjectIdRoute = createRoute({
  method: 'delete',
  path: '/cms/blogs/2026-09/posts/{objectId}',
  tags: ['Basic'],
  summary: 'Delete a blog post',
  description: 'Delete a blog post by ID.',
  operationId: 'delete-/cms/blogs/2026-09/posts/{objectId}_archive',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const patchCmsBlogs202609PostsObjectIdRoute = createRoute({
  method: 'patch',
  path: '/cms/blogs/2026-09/posts/{objectId}',
  tags: ['Basic'],
  summary: 'Update a post',
  description:
    'Partially updates a single blog post by ID. You only need to specify the values that you want to update.',
  operationId: 'patch-/cms/blogs/2026-09/posts/{objectId}_update',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
    body: { content: { '*/*': { schema: BlogPostSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsObjectIdDraftRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts/{objectId}/draft',
  tags: ['Basic'],
  summary: 'Retrieve the full draft version of the Blog Post',
  description: 'Retrieve the full draft version of a blog post.',
  operationId: 'get-/cms/blogs/2026-09/posts/{objectId}/draft_getDraftById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the blog post whose draft version is to be retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const patchCmsBlogs202609PostsObjectIdDraftRoute = createRoute({
  method: 'patch',
  path: '/cms/blogs/2026-09/posts/{objectId}/draft',
  tags: ['Basic'],
  summary: 'Update the draft of a post',
  description:
    'Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.',
  operationId: 'patch-/cms/blogs/2026-09/posts/{objectId}/draft_updateDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post draft to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: { content: { '*/*': { schema: BlogPostSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsObjectIdDraftPushLiveRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/{objectId}/draft/push-live',
  tags: ['Basic'],
  summary: 'Publish blog post draft',
  description: 'Publish the draft version of the blog post, sending its content to the live page.',
  operationId: 'post-/cms/blogs/2026-09/posts/{objectId}/draft/push-live_pushLive',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post draft to be published.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsObjectIdDraftResetRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/{objectId}/draft/reset',
  tags: ['Basic'],
  summary: 'Reset post draft to the live version',
  description:
    'Discard all drafted content, resetting the draft to contain the content in the currently published version.',
  operationId: 'post-/cms/blogs/2026-09/posts/{objectId}/draft/reset_resetDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post whose draft is to be reset.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsObjectIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts/{objectId}/revisions',
  tags: ['Revisions'],
  summary: 'Retrieves all previous versions of a post',
  description: 'Retrieve all the previous versions of a blog post.',
  operationId: 'get-/cms/blogs/2026-09/posts/{objectId}/revisions_getPreviousVersions',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the blog post for which revisions are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'A cursor token to retrieve results before a specific point in the list.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        '*/*': { schema: CollectionResponseWithTotalBlogPostVersionSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609PostsObjectIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}',
  tags: ['Revisions'],
  summary: 'Retrieve a previous version of a blog post',
  description: 'Retrieve a previous version of a blog post.',
  operationId: 'get-/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}_getPreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description: 'The unique identifier of the revision to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostVersionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore',
  tags: ['Revisions'],
  summary: 'Restore a previous version',
  description: 'Restores a blog post to one of its previous versions.',
  operationId:
    'post-/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the blog post for which the revision is to be restored.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description: 'The unique identifier of the revision to restore.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftRoute = createRoute({
  method: 'post',
  path: '/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore-to-draft',
  tags: ['Revisions'],
  summary: 'Restore a draft to a previous version',
  description:
    'Takes a specified version of a blog post, sets it as the new draft version of the blog post.',
  operationId:
    'post-/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the blog post whose revision is being restored.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      revisionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'revisionId',
            in: 'path',
            description:
              'The unique identifier of the revision to restore to draft. It is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: BlogPostSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609TagsCursorRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/tags/cursor',
  tags: ['Basic'],
  summary: 'List tags',
  description:
    'Retrieve a list of blog tags from your HubSpot account. This endpoint supports pagination and filtering based on creation and update timestamps. It is useful for managing and organizing your blog content by tags.',
  operationId: 'get-/cms/blogs/2026-09/tags/cursor_/cms/blogs/v3/tags/cursor',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description:
              'Filter results to include only those created after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter results by the exact creation date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description:
              'Filter results to include only those created before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify which properties to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'Specify the order of results. Accepts an array of field names to sort by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description:
              'Filter results to include only those updated after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter results by the exact update date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description:
              'Filter results to include only those updated before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: CursorPagedResultTagLongSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsBlogs202609TagsCursorQueryRoute = createRoute({
  method: 'get',
  path: '/cms/blogs/2026-09/tags/cursor/query',
  tags: ['Basic'],
  summary: 'Query Tags',
  description:
    'Retrieve a list of blog tags using various filters and sorting options. This endpoint supports pagination and allows you to filter tags based on creation and update timestamps. It is useful for managing and organizing blog content by tags.',
  operationId: 'get-/cms/blogs/2026-09/tags/cursor/query_/cms/blogs/v3/tags/cursor/query',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description: 'Filter tags created after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description: 'Filter tags by their exact creation date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description: 'Filter tags created before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'Specify a property to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'Specify the sort order of the results. Accepts an array of fields to sort by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description: 'Filter tags updated after the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description: 'Filter tags by their exact update date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description: 'Filter tags updated before the specified date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: CursorPagedResultTagLongSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})
