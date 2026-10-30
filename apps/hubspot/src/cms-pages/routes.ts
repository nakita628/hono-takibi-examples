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
            description:
              'Contains style settings specific to different breakpoints. This property allows for responsive design adjustments based on screen size.',
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
      .openapi({ description: 'The CSS class applied to the row metadata.', example: null }),
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
          'An array of color values that make up the gradient. Each color is applied in sequence to create the gradient effect.',
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
          "A string indicating the unit of measurement for the size value, such as 'pixels', 'inches', or 'centimeters'.",
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description:
          'A numerical value representing the size dimension of the object. The data type is a number.',
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
      .openapi({
        description:
          'A boolean indicating whether the element should be hidden at this breakpoint. A value of true means the element is not visible.',
        example: null,
      }),
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

const AbTestCreateRequestVNextSchema = z
  .object({
    contentId: z.string().openapi({ description: 'ID of the object to test.', example: null }),
    variationName: z
      .string()
      .openapi({ description: 'Name of A/B test variation.', example: null }),
  })
  .openapi({ required: ['contentId', 'variationName'], example: null })
  .openapi('AbTestCreateRequestVNext')

const AbTestEndRequestVNextSchema = z
  .object({
    abTestId: z.string().openapi({ description: 'ID of the test to end.', example: null }),
    winnerId: z
      .string()
      .openapi({ description: 'ID of the object to designate as the test winner.', example: null }),
  })
  .openapi({ required: ['abTestId', 'winnerId'], example: null })
  .openapi('AbTestEndRequestVNext')

const AbTestRerunRequestVNextSchema = z
  .object({
    abTestId: z.string().openapi({ description: 'ID of the test to rerun.', example: null }),
    variationId: z
      .string()
      .openapi({
        description: 'ID of the object to reactivate as a test variation.',
        example: null,
      }),
  })
  .openapi({ required: ['abTestId', 'variationId'], example: null })
  .openapi('AbTestRerunRequestVNext')

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

const ContentFolderSchema = z
  .object({
    category: z
      .int32()
      .openapi({
        description: 'The type of object this folder applies to. Should always be LANDING_PAGE.',
        example: null,
      }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the content folder was created.',
        example: null,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp (ISO8601 format) when this content folder was deleted.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of the content folder.', example: null }),
    name: z
      .string()
      .openapi({
        description: 'The name of the folder which will show up in the app dashboard',
        example: null,
      }),
    parentFolderId: z
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
        description: 'The ID of the content folder this folder is nested under',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the content folder was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'created', 'deletedAt', 'id', 'name', 'parentFolderId', 'updated'],
    example: null,
  })
  .openapi('ContentFolder')

const BatchInputContentFolderSchema = z
  .object({
    inputs: z
      .array(ContentFolderSchema)
      .openapi({ description: 'Content folders to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputContentFolder')

const BatchInputJsonNodeSchema = z
  .object({
    inputs: z
      .array(z.object({}).openapi({ example: null }))
      .openapi({ description: 'JSON nodes to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputJsonNode')

const LayoutSectionSchema: z.ZodType<LayoutSectionType> = z
  .lazy(() =>
    z
      .object({
        cells: z
          .array(LayoutSectionSchema)
          .openapi({
            description:
              'The individual cells within the section, each representing a distinct area for content placement.',
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
        name: z.string().openapi({ description: 'The internal name of the page.', example: null }),
        params: z
          .record(z.string(), z.object({}).openapi({ example: null }))
          .openapi({
            description: 'Parameters associated with the layout section.',
            example: null,
          }),
        rowMetaData: z
          .array(RowMetaDataSchema)
          .openapi({
            description:
              'Metadata about the rows within the section, such as styling or configuration details.',
            example: null,
          }),
        rows: z
          .array(z.record(z.string(), LayoutSectionSchema).openapi({ example: null }))
          .openapi({
            description:
              'The number of rows contained within the section, used to organize content vertically.',
            example: null,
          }),
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
          'Indicates if the page is hidden from the dashboard, though it may still be live.',
        example: null,
      }),
    authorName: z
      .string()
      .openapi({ description: 'The name of the user that updated this page.', example: null }),
    campaign: z
      .string()
      .openapi({
        description: 'The GUID of the marketing campaign this page is a part of.',
        example: null,
      }),
    campaignName: z
      .string()
      .openapi({
        description: 'The name of the campaign associated with this language variation.',
        example: null,
      }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the content language variation was created.',
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
    name: z.string().openapi({ description: 'The internal name of the page.', example: null }),
    password: z
      .string()
      .openapi({ description: 'A password required to view the page, if set.', example: null }),
    publicAccessRules: z
      .array(PublicAccessRuleSchema)
      .openapi({
        description:
          'A list of rules defining public access permissions for this language variation.',
        example: null,
      }),
    publicAccessRulesEnabled: z
      .boolean()
      .openapi({
        description: 'Determines if public access rules should be respected.',
        example: null,
      }),
    publishDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the page is scheduled to be published.',
        example: null,
      }),
    slug: z
      .string()
      .openapi({
        description: 'The path of this page, appended to the domain to construct the URL.',
        example: null,
      }),
    state: z
      .string()
      .openapi({ description: 'An ENUM descibing the current state of this page.', example: null }),
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
        description: 'A list of tag IDs associated with this language variation.',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the content language variation was last updated.',
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

const PageSchema = z
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
        description: 'The status of the AB test associated with this page, if applicable',
        example: null,
      }),
    abTestId: z
      .string()
      .openapi({
        description: 'The ID of the AB test associated with this page, if applicable',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The timestamp when this page was deleted.', example: null }),
    archivedInDashboard: z
      .boolean()
      .openapi({
        description:
          'If True, the page will not show up in your dashboard, although the page could still be live.',
        example: null,
      }),
    attachedStylesheets: z
      .array(
        z.record(z.string(), z.object({}).openapi({ example: null })).openapi({ example: null }),
      )
      .openapi({
        description:
          'List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.',
        example: null,
      }),
    authorName: z
      .string()
      .openapi({ description: 'The name of the user that updated this page.', example: null }),
    campaign: z
      .string()
      .openapi({
        description: 'The GUID of the marketing campaign this page is a part of.',
        example: null,
      }),
    categoryId: z
      .int32()
      .openapi({ description: 'ID of the type of object this is. Should always .', example: null }),
    contentGroupId: z
      .string()
      .openapi({
        description:
          'Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. ',
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
        description:
          'An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.',
        example: null,
      }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the page was created.',
        example: null,
      }),
    createdById: z
      .string()
      .openapi({ description: 'The ID of the user that created this page.', example: null }),
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
        description: 'A generated ENUM descibing the current state of this page.',
        example: null,
      }),
    currentlyPublished: z
      .boolean()
      .openapi({
        description: 'Indicates whether the page is currently published.',
        example: null,
      }),
    domain: z
      .string()
      .openapi({
        description:
          'The domain this page will resolve to. If null, the page will default to the primary domain for this content type.',
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
        description: 'The ID of the HubDB table this page references, if applicable',
        example: null,
      }),
    enableDomainStylesheets: z
      .boolean()
      .openapi({
        description:
          'Boolean to determine whether or not the styles from the template should be applied.',
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
      .openapi({ description: 'The featuredImage of this page.', example: null }),
    featuredImageAltText: z
      .string()
      .openapi({ description: 'Alt Text of the featuredImage.', example: null }),
    folderId: z
      .string()
      .openapi({
        description:
          'The ID of the associated folder this landing page is organized under in the app dashboard.',
        example: null,
      }),
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
    htmlTitle: z.string().openapi({ description: 'The html title of this page.', example: null }),
    id: z.string().openapi({ description: 'The unique ID of the page.', example: null }),
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
          'The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.',
        example: null,
      }),
    layoutSections: z
      .record(z.string(), LayoutSectionSchema)
      .openapi({
        description: 'A structure detailing the layout sections of the page.',
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
      .openapi({
        description:
          'The ID of the MAB test (or dynamic test) associated with this page, if applicable',
        example: null,
      }),
    metaDescription: z
      .string()
      .openapi({
        description: 'A description that goes in <meta> tag on the page.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The internal name of the page.', example: null }),
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
          'The date at which this page should expire and begin redirecting to another url or page.',
        example: null,
      }),
    pageExpiryEnabled: z
      .boolean()
      .openapi({
        description: 'Boolean describing if the page expiration feature is enabled for this page',
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
          "The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.",
        example: null,
      }),
    pageExpiryRedirectUrl: z
      .string()
      .openapi({
        description:
          "The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.",
        example: null,
      }),
    pageRedirected: z
      .boolean()
      .openapi({
        description:
          'A generated Boolean describing whether or not this page is currently expired and being redirected.',
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
        description: 'The date (ISO8601 format) the page is to be published at.',
        example: null,
      }),
    publishImmediately: z
      .boolean()
      .openapi({
        description:
          'Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.',
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
      .max(25)
      .openapi({ description: 'An ENUM descibing the current state of this page.', example: null }),
    subcategory: z
      .string()
      .openapi({
        description: 'Details the type of page this is. Should always be landing_page or site_page',
        example: null,
      }),
    templatePath: z
      .string()
      .openapi({
        description: 'String detailing the path of the template used for this page.',
        example: null,
      }),
    themeSettingsValues: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description: 'A collection of settings specific to the theme applied to the page.',
        example: null,
      }),
    translatedFromId: z
      .string()
      .openapi({
        description: 'ID of the primary page this object was translated from.',
        example: null,
      }),
    translations: z
      .record(z.string(), ContentLanguageVariationSchema)
      .openapi({
        description:
          'A map of translations for the page, each associated with a specific language variation.',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the page was last updated.',
        example: null,
      }),
    updatedById: z
      .string()
      .openapi({ description: 'The ID of the user that updated this page.', example: null }),
    url: z
      .string()
      .openapi({
        description: 'A generated field representing the URL of this page.',
        example: null,
      }),
    useFeaturedImage: z
      .boolean()
      .openapi({
        description: 'Boolean to determine if this page should use a featuredImage.',
        example: null,
      }),
    widgetContainers: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description:
          'A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.',
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
      'pageRedirected',
      'password',
      'publicAccessRules',
      'publicAccessRulesEnabled',
      'publishDate',
      'publishImmediately',
      'slug',
      'state',
      'subcategory',
      'templatePath',
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
  .openapi('Page')

const BatchInputPageSchema = z
  .object({
    inputs: z.array(PageSchema).openapi({ description: 'Pages to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPage')

const BatchInputStringSchema = z
  .object({
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'Strings to input.', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputString')

const BatchResponseContentFolderSchema = z
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
      .array(ContentFolderSchema)
      .openapi({ description: 'Results of batch operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation start.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of batch operation.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseContentFolder')

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

const BatchResponseContentFolderWithErrorsSchema = z
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
      .array(ContentFolderSchema)
      .openapi({ description: 'Results of batch operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation start.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of batch operation.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseContentFolderWithErrors')

const BatchResponsePageSchema = z
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
      .array(PageSchema)
      .openapi({ description: 'Results of batch operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation start.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of batch operation.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePage')

const BatchResponsePageWithErrorsSchema = z
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
      .array(PageSchema)
      .openapi({ description: 'Results of batch operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of batch operation start.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of batch operation.', example: null }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePageWithErrors')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string that serves as the paging cursor token, indicating the position after the last successfully read resource. It is used to fetch the next set of results in a paginated response.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing the URL link to the next page of results in a paginated response.',
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

const CollectionResponseWithTotalContentFolderForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(ContentFolderSchema)
      .openapi({ description: 'Collection of content folders.', example: null }),
    total: z.int32().openapi({ description: 'Total number of content folders.', example: null }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalContentFolderForwardPaging')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor to retrieve the previous set of results in a paginated response.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that provides access to the previous page of results in a paginated response.',
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

const VersionUserSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of the user.', example: null }),
    fullName: z
      .string()
      .openapi({ description: 'First and last name of the user.', example: null }),
    id: z.string().openapi({ description: 'ID of the user.', example: null }),
  })
  .openapi({ required: ['email', 'fullName', 'id'], example: null })
  .openapi('VersionUser')

const ContentFolderVersionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this version of the content folder.',
        example: null,
      }),
    object: ContentFolderSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this version was last updated, in ISO 8601 format.',
        example: null,
      }),
    user: VersionUserSchema,
  })
  .openapi({ required: ['id', 'object', 'updatedAt', 'user'], example: null })
  .openapi('ContentFolderVersion')

const CollectionResponseWithTotalContentFolderVersionSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(ContentFolderVersionSchema)
      .openapi({
        description:
          'An array containing the content folder version objects returned in the current response.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'An integer representing the total number of content folder versions available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalContentFolderVersion')

const CollectionResponseWithTotalPageForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z.array(PageSchema).openapi({ description: 'Collection of pages.', example: null }),
    total: z.int32().openapi({ description: 'Total number of pages.', example: null }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPageForwardPaging')

const PageVersionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this specific version of the page.',
        example: null,
      }),
    object: PageSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this version was last updated, in ISO 8601 format.',
        example: null,
      }),
    user: VersionUserSchema,
  })
  .openapi({ required: ['id', 'object', 'updatedAt', 'user'], example: null })
  .openapi('PageVersion')

const CollectionResponseWithTotalPageVersionSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PageVersionSchema)
      .openapi({
        description: 'An array containing the individual items or results of the collection.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'An integer representing the total number of items in the collection.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPageVersion')

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

const ContentLanguageCloneRequestVNextSchema = z
  .object({
    id: z.string().openapi({ description: 'ID of content to clone.', example: null }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'Target language of new variant.', example: null }),
    primaryLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language of primary content to clone.', example: null }),
    usePublished: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the published version of the page should be used for creating the language variation. If true, the published version is used; otherwise, the draft version is used.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('ContentLanguageCloneRequestVNext')

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

export const getCmsPages202609LandingPagesRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages',
  tags: ['Landing pages'],
  summary: 'Get all landing pages',
  description:
    'Retrieve a list of landing pages in your HubSpot account. This endpoint allows you to filter landing pages based on creation and update timestamps, sort them, and paginate through results. You can also choose to include archived pages or specify certain properties to be included in the response.',
  operationId: 'get-/cms/pages/2026-09/landing-pages_getPage',
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
              'Filter landing pages that were created after a specific date. The format should be a date-time string.',
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
            description:
              'Filter landing pages by their exact creation date. The format should be a date-time string.',
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
              'Filter landing pages that were created before a specific date. The format should be a date-time string.',
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
            description:
              'Specify additional properties to include in the response for each landing page.',
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
              'Specify the sorting order of the results. This should be an array of strings indicating the fields to sort by.',
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
              'Filter landing pages that were updated after a specific date. The format should be a date-time string.',
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
            description:
              'Filter landing pages by their exact update date. The format should be a date-time string.',
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
              'Filter landing pages that were updated before a specific date. The format should be a date-time string.',
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
        'application/json': {
          schema: CollectionResponseWithTotalPageForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages',
  tags: ['Landing pages'],
  summary: 'Create a landing page',
  description: 'Create a new landing page.',
  operationId: 'post-/cms/pages/2026-09/landing-pages_create',
  request: { body: { content: { '*/*': { schema: PageSchema, example: null } }, required: true } },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
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

export const postCmsPages202609LandingPagesAbTestCreateVariationRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/ab-test/create-variation',
  tags: ['A/B tests'],
  summary: 'Create a new A/B test variation',
  description:
    'Create a new A/B test variation based on the information provided in the request body.\n',
  operationId:
    'post-/cms/pages/2026-09/landing-pages/ab-test/create-variation_createABTestVariation',
  request: {
    body: {
      content: { '*/*': { schema: AbTestCreateRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
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

export const postCmsPages202609LandingPagesAbTestEndRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/ab-test/end',
  tags: ['A/B tests'],
  summary: 'End an active A/B test',
  description: 'End an active A/B test and designate a winner.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/ab-test/end_endActiveABTest',
  request: {
    body: {
      content: { '*/*': { schema: AbTestEndRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesAbTestRerunRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/ab-test/rerun',
  tags: ['A/B tests'],
  summary: 'Rerun a previous A/B test',
  description: 'Rerun a previous A/B test.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/ab-test/rerun_rerunPreviousABTest',
  request: {
    body: {
      content: { '*/*': { schema: AbTestRerunRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/batch/archive',
  tags: ['Batch'],
  summary: 'Delete landing pages',
  description:
    'Delete landing pages specified by ID in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/batch/archive_archiveBatch',
  request: {
    body: { content: { '*/*': { schema: BatchInputStringSchema, example: null } }, required: true },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesBatchCreateRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/batch/create',
  tags: ['Batch'],
  summary: 'Create landing pages',
  description: 'Create a batch of landing pages as detailed in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/batch/create_createBatch',
  request: {
    body: { content: { '*/*': { schema: BatchInputPageSchema, example: null } }, required: true },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePageSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { 'application/json': { schema: BatchResponsePageWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesBatchReadRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/batch/read',
  tags: ['Batch'],
  summary: 'Retrieve landing pages',
  description: 'Retrieve a batch of landing pages as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/batch/read_readBatch',
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
      content: { 'application/json': { schema: BatchResponsePageSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { 'application/json': { schema: BatchResponsePageWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/batch/update',
  tags: ['Batch'],
  summary: 'Update landing pages',
  description: 'Update a batch of landing pages as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/batch/update_updateBatch',
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
      content: { 'application/json': { schema: BatchResponsePageSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { 'application/json': { schema: BatchResponsePageWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesCloneRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/clone',
  tags: ['Landing pages'],
  summary: 'Clone a landing page',
  description: 'Create a copy of an existing landing page.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/clone_clone',
  request: {
    body: {
      content: { '*/*': { schema: ContentCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesFoldersRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/folders',
  tags: ['Folders'],
  summary: 'Get all landing page folders',
  description:
    'Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.\n',
  operationId: 'get-/cms/pages/2026-09/landing-pages/folders_getFoldersPage',
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
            description: 'Filter folders created after the specified date and time.',
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
            description: 'Filter folders by the exact creation date and time.',
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
            description: 'Filter folders created before the specified date and time.',
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
            description: 'Specify the order of results. Accepts an array of strings.',
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
            description: 'Filter folders updated after the specified date and time.',
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
            description: 'Filter folders by the exact update date and time.',
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
            description: 'Filter folders updated before the specified date and time.',
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
        'application/json': {
          schema: CollectionResponseWithTotalContentFolderForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesFoldersRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/folders',
  tags: ['Folders'],
  summary: 'Create a landing page folder',
  description: 'Create a new folder for landing pages.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/folders_createFolder',
  request: {
    body: { content: { '*/*': { schema: ContentFolderSchema, example: null } }, required: true },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ContentFolderSchema, example: null } },
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

export const postCmsPages202609LandingPagesFoldersBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/folders/batch/archive',
  tags: ['Batch'],
  summary: 'Delete folders',
  description: 'Delete a batch of folders as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/folders/batch/archive_archiveFolders',
  request: {
    body: { content: { '*/*': { schema: BatchInputStringSchema, example: null } }, required: true },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesFoldersBatchCreateRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/folders/batch/create',
  tags: ['Batch'],
  summary: 'Create folders',
  description: 'Create a batch of folders as detailed in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/folders/batch/create_createFolders',
  request: {
    body: {
      content: { '*/*': { schema: BatchInputContentFolderSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponseContentFolderSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponseContentFolderWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesFoldersBatchReadRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/folders/batch/read',
  tags: ['Folders'],
  summary: 'Retrieve folders',
  description: 'Retrieve a batch of landing page folders as identified in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/folders/batch/read_readFolders',
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
      content: { 'application/json': { schema: BatchResponseContentFolderSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponseContentFolderWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesFoldersBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/folders/batch/update',
  tags: ['Batch'],
  summary: 'Update folders',
  description: 'Update a batch of landing page folders as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/folders/batch/update_updateFolders',
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
      content: { 'application/json': { schema: BatchResponseContentFolderSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponseContentFolderWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesFoldersObjectIdRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/folders/{objectId}',
  tags: ['Folders'],
  summary: 'Retrieve a landing page folder',
  description: 'Retrieve a landing page folder, specified by its ID.',
  operationId: 'get-/cms/pages/2026-09/landing-pages/folders/{objectId}_getFolderById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the folder to retrieve.',
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
            description:
              'A specific property to include in the response. This parameter allows you to filter the properties returned for the folder.',
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
      content: { 'application/json': { schema: ContentFolderSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsPages202609LandingPagesFoldersObjectIdRoute = createRoute({
  method: 'delete',
  path: '/cms/pages/2026-09/landing-pages/folders/{objectId}',
  tags: ['Folders'],
  summary: 'Delete a landing page folder',
  description: 'Delete a landing page folder, specified by its ID.',
  operationId: 'delete-/cms/pages/2026-09/landing-pages/folders/{objectId}_archiveFolder',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the folder to delete.',
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

export const patchCmsPages202609LandingPagesFoldersObjectIdRoute = createRoute({
  method: 'patch',
  path: '/cms/pages/2026-09/landing-pages/folders/{objectId}',
  tags: ['Folders'],
  summary: 'Update a landing page folder',
  description:
    'Partially update a landing page folder, specified by the folder ID. You only need to specify the details values that you are modifying.\n',
  operationId: 'patch-/cms/pages/2026-09/landing-pages/folders/{objectId}_updateFolder',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the folder to update.',
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
    body: { content: { '*/*': { schema: ContentFolderSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ContentFolderSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesFoldersObjectIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions',
  tags: ['Folders'],
  summary: 'Retrieves previous versions of a folder',
  description: 'Retrieves all the previous versions of a landing page folder.',
  operationId:
    'get-/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the landing page folder to retrieve revisions for.',
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
            description: 'A cursor token to retrieve results before a specific point in time.',
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
        'application/json': {
          schema: CollectionResponseWithTotalContentFolderVersionSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}',
  tags: ['Folders'],
  summary: 'Retrieve a previous version of a folder',
  description:
    'Retrieve a previous version of a folder, specified by the folder ID and revision ID.',
  operationId:
    'get-/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page folder.',
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
      content: { 'application/json': { schema: ContentFolderVersionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRoute =
  createRoute({
    method: 'post',
    path: '/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}/restore',
    tags: ['Folders'],
    summary: 'Restore a previous version of a folder',
    description: 'Takes a specified version of a landing page folder and restores it.',
    operationId:
      'post-/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description: 'The unique identifier of the landing page folder to restore.',
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
        content: { 'application/json': { schema: ContentFolderSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['content'] }],
  })

export const postCmsPages202609LandingPagesMultiLanguageAttachToLangGroupRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group',
  tags: ['Multi-language'],
  summary: 'Add a landing page to a multi-language group',
  description: 'Attach a landing page to a multi-language group.',
  operationId:
    'post-/cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup',
  request: {
    body: {
      content: { '*/*': { schema: AttachToLangPrimaryRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/multi-language/create-language-variation',
  tags: ['Multi-language'],
  summary: 'Create a new language variation',
  description:
    'Create a new language variation from an existing landing page. The variation will be a copy of the draft state of the source page. To preview the content, you can [retrieve the draft of the source landing page](/api-reference/latest/cms/pages/landing-pages/drafts/get-landing-page-draft).',
  operationId:
    'post-/cms/pages/2026-09/landing-pages/multi-language/create-language-variation_createLangVariation',
  request: {
    body: {
      content: { '*/*': { schema: ContentLanguageCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group',
  tags: ['Multi-language'],
  summary: 'Remove a landing page from a multi-language group',
  description: 'Detach a landing page from a multi-language group.',
  operationId:
    'post-/cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup',
  request: {
    body: {
      content: { '*/*': { schema: DetachFromLangGroupRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const putCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryRoute = createRoute({
  method: 'put',
  path: '/cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary',
  tags: ['Website pages'],
  summary: 'Set a new primary language',
  description: 'Set a landing page as the primary language of a multi-language group.',
  operationId:
    'put-/cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary_setLangPrimary',
  request: {
    body: {
      content: { '*/*': { schema: SetNewLanguagePrimaryRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesMultiLanguageUpdateLanguagesRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/multi-language/update-languages',
  tags: ['Multi-language'],
  summary: 'Update languages of multi-language group',
  description: 'Explicitly set new languages for each landing page in a multi-language group.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/multi-language/update-languages_updateLangs',
  request: {
    body: {
      content: { '*/*': { schema: UpdateLanguagesRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesScheduleRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/schedule',
  tags: ['Landing pages'],
  summary: 'Schedule landing page publishing',
  description: 'Schedule a landing page to be published.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/schedule_schedule',
  request: {
    body: {
      content: { '*/*': { schema: ContentScheduleRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesObjectIdRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/{objectId}',
  tags: ['Landing pages'],
  summary: 'Retrieve a landing page',
  description: 'Retrieve a landing page, specified by its ID.',
  operationId: 'get-/cms/pages/2026-09/landing-pages/{objectId}_getById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page to retrieve.',
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
            description: 'A specific property to include in the response.',
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
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsPages202609LandingPagesObjectIdRoute = createRoute({
  method: 'delete',
  path: '/cms/pages/2026-09/landing-pages/{objectId}',
  tags: ['Landing pages'],
  summary: 'Delete a landing page',
  description: 'Delete a landing page, specified by its ID.',
  operationId: 'delete-/cms/pages/2026-09/landing-pages/{objectId}_archive',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page to delete.',
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

export const patchCmsPages202609LandingPagesObjectIdRoute = createRoute({
  method: 'patch',
  path: '/cms/pages/2026-09/landing-pages/{objectId}',
  tags: ['Landing pages'],
  summary: 'Update a landing page',
  description:
    'Sparse updates a single Landing Page object identified by the id in the path.\nYou only need to specify the column values that you are modifying.',
  operationId: 'patch-/cms/pages/2026-09/landing-pages/{objectId}_update',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page to update.',
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
    body: { content: { '*/*': { schema: PageSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesObjectIdDraftRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/draft',
  tags: ['Landing pages'],
  summary: 'Retrieve a landing page draft',
  description: 'Retrieve the full draft version of a landing page, specified by page ID.',
  operationId: 'get-/cms/pages/2026-09/landing-pages/{objectId}/draft_getDraftById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the landing page whose draft version is to be retrieved.',
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
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const patchCmsPages202609LandingPagesObjectIdDraftRoute = createRoute({
  method: 'patch',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/draft',
  tags: ['Landing pages'],
  summary: 'Update the draft of a landing page',
  description:
    'Partially updates the draft version of a single landing page, specified by its ID. You only need to specify the column values that you are modifying.\n',
  operationId: 'patch-/cms/pages/2026-09/landing-pages/{objectId}/draft_updateDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page whose draft is to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: { content: { '*/*': { schema: PageSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesObjectIdDraftPushLiveRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/draft/push-live',
  tags: ['Landing pages'],
  summary: 'Push Landing Page draft edits live',
  description:
    'Take any changes from the draft version of the Landing Page and apply them to the live version.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/{objectId}/draft/push-live_pushLive',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page draft to be published live.',
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

export const postCmsPages202609LandingPagesObjectIdDraftResetRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/draft/reset',
  tags: ['Landing pages'],
  summary: 'Reset a landing page draft',
  description: 'Discards any edits and resets the draft to match the live version.',
  operationId: 'post-/cms/pages/2026-09/landing-pages/{objectId}/draft/reset_resetDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the landing page whose draft is to be reset.',
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

export const getCmsPages202609LandingPagesObjectIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/revisions',
  tags: ['Advanced'],
  summary: 'Retrieve all previous versions of a landing page',
  description: 'Retrieve all the previous versions of a landing page, specified by page ID.',
  operationId: 'get-/cms/pages/2026-09/landing-pages/{objectId}/revisions_getPreviousVersions',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the landing page for which to retrieve revisions.',
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
            description:
              'A cursor token for pagination, indicating the start of the page of results to return.',
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
        'application/json': { schema: CollectionResponseWithTotalPageVersionSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}',
  tags: ['Advanced'],
  summary: 'Retrieve a previous version of a landing page',
  description:
    'Retrieve a previous version of a landing page, specified by page ID and revision ID.',
  operationId:
    'get-/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the landing page whose revision is being retrieved.',
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
            description: 'The unique identifier of the specific revision to retrieve.',
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
      content: { 'application/json': { schema: PageVersionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore',
  tags: ['Advanced'],
  summary: 'Restore a previous version of a landing page',
  description:
    'Restores a previous version of a landing page, specified by page ID and revision ID.',
  operationId:
    'post-/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the landing page whose revision is to be restored.',
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
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRoute =
  createRoute({
    method: 'post',
    path: '/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft',
    tags: ['Advanced'],
    summary: 'Restore a previous version of a landing page',
    description: 'Specify a previous version of a landing page to set as the page draft.',
    operationId:
      'post-/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description: 'The unique identifier of the landing page to restore.',
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
              description: 'The unique identifier of the revision to restore to draft.',
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
        content: { 'application/json': { schema: PageSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['content'] }],
  })

export const getCmsPages202609SitePagesRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/site-pages',
  tags: ['Website pages'],
  summary: 'Retrieve all website pages',
  description:
    'Retrieve all website pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.',
  operationId: 'get-/cms/pages/2026-09/site-pages_getPage',
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
            description: 'Filter pages created after the specified date-time.',
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
            description:
              'Filter pages by their exact creation timestamp. Format should be date-time.',
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
            description: 'Filter pages created before the specified date-time.',
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
            description: 'Specify the order of the results. Accepts an array of strings.',
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
            description: 'Filter pages updated after the specified date-time.',
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
            description:
              'Filter pages by their exact update timestamp. Format should be date-time.',
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
            description: 'Filter pages updated before the specified date-time.',
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
        'application/json': {
          schema: CollectionResponseWithTotalPageForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages',
  tags: ['Website pages'],
  summary: 'Create a website page',
  description: 'Create a new website page.',
  operationId: 'post-/cms/pages/2026-09/site-pages_create',
  request: { body: { content: { '*/*': { schema: PageSchema, example: null } }, required: true } },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
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

export const postCmsPages202609SitePagesAbTestCreateVariationRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/ab-test/create-variation',
  tags: ['A/B tests'],
  summary: 'Create a new A/B test variation',
  description:
    'Create a new A/B test variation based on the information provided in the request body.\n',
  operationId: 'post-/cms/pages/2026-09/site-pages/ab-test/create-variation_createABTestVariation',
  request: {
    body: {
      content: { '*/*': { schema: AbTestCreateRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
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

export const postCmsPages202609SitePagesAbTestEndRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/ab-test/end',
  tags: ['A/B tests'],
  summary: 'End an active A/B test',
  description: 'End an active A/B test and designate a winner.',
  operationId: 'post-/cms/pages/2026-09/site-pages/ab-test/end_endActiveABTest',
  request: {
    body: {
      content: { '*/*': { schema: AbTestEndRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesAbTestRerunRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/ab-test/rerun',
  tags: ['A/B tests'],
  summary: 'Rerun a previous A/B test',
  description: 'Rerun a previous A/B test.',
  operationId: 'post-/cms/pages/2026-09/site-pages/ab-test/rerun_rerunPreviousABTest',
  request: {
    body: {
      content: { '*/*': { schema: AbTestRerunRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesBatchArchiveRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/batch/archive',
  tags: ['Batch'],
  summary: 'Delete website pages',
  description:
    'Delete a batch of website pages as specified in the request body. Note that this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.',
  operationId: 'post-/cms/pages/2026-09/site-pages/batch/archive_archiveBatch',
  request: {
    body: { content: { '*/*': { schema: BatchInputStringSchema, example: null } }, required: true },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesBatchCreateRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/batch/create',
  tags: ['Batch'],
  summary: 'Create website pages',
  description: 'Create a batch of website pages as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/site-pages/batch/create_createBatch',
  request: {
    body: { content: { '*/*': { schema: BatchInputPageSchema, example: null } }, required: true },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePageSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { 'application/json': { schema: BatchResponsePageWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesBatchReadRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/batch/read',
  tags: ['Batch'],
  summary: 'Retrieve website pages',
  description: 'Retrieve a batch of website pages as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/site-pages/batch/read_readBatch',
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
      content: { 'application/json': { schema: BatchResponsePageSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { 'application/json': { schema: BatchResponsePageWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/batch/update',
  tags: ['Batch'],
  summary: 'Update website pages',
  description: 'Update a batch of website pages as specified in the request body.',
  operationId: 'post-/cms/pages/2026-09/site-pages/batch/update_updateBatch',
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
      content: { 'application/json': { schema: BatchResponsePageSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: { 'application/json': { schema: BatchResponsePageWithErrorsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesCloneRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/clone',
  tags: ['Website pages'],
  summary: 'Clone a website page',
  description: 'Create a copy of an existing website page.',
  operationId: 'post-/cms/pages/2026-09/site-pages/clone_clone',
  request: {
    body: {
      content: { '*/*': { schema: ContentCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesMultiLanguageAttachToLangGroupRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group',
  tags: ['Multi-language'],
  summary: 'Add a website page to a multi-language group',
  description: 'Attach a site page to a multi-language group.',
  operationId:
    'post-/cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group_attachToLangGroup',
  request: {
    body: {
      content: { '*/*': { schema: AttachToLangPrimaryRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesMultiLanguageCreateLanguageVariationRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/multi-language/create-language-variation',
  tags: ['Multi-language'],
  summary: 'Create a new language variation',
  description:
    'Create a new language variation from an existing website page. The variation will be a copy of the draft state of the source page. To preview the content, you can [retrieve the draft of the source website page](/api-reference/latest/cms/pages/website-pages/drafts/get-website-page-draft).',
  operationId:
    'post-/cms/pages/2026-09/site-pages/multi-language/create-language-variation_createLangVariation',
  request: {
    body: {
      content: { '*/*': { schema: ContentLanguageCloneRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesMultiLanguageDetachFromLangGroupRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group',
  tags: ['Multi-language'],
  summary: 'Remove a website page from a multi-language group',
  description: 'Detach a website page from a multi-language group.',
  operationId:
    'post-/cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup',
  request: {
    body: {
      content: { '*/*': { schema: DetachFromLangGroupRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const putCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryRoute = createRoute({
  method: 'put',
  path: '/cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary',
  tags: ['Multi-language'],
  summary: 'Set a new primary language',
  description: 'Set a site page as the primary language of a multi-language group.',
  operationId:
    'put-/cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary_setLangPrimary',
  request: {
    body: {
      content: { '*/*': { schema: SetNewLanguagePrimaryRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesMultiLanguageUpdateLanguagesRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/multi-language/update-languages',
  tags: ['Multi-language'],
  summary: 'Update languages of multi-language group',
  description: 'Explicitly set new languages for each site page in a multi-language group.',
  operationId: 'post-/cms/pages/2026-09/site-pages/multi-language/update-languages_updateLangs',
  request: {
    body: {
      content: { '*/*': { schema: UpdateLanguagesRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesScheduleRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/schedule',
  tags: ['Website pages'],
  summary: 'Schedule a website page to be published',
  description: 'Schedule a website page to published at a future time.',
  operationId: 'post-/cms/pages/2026-09/site-pages/schedule_schedule',
  request: {
    body: {
      content: { '*/*': { schema: ContentScheduleRequestVNextSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609SitePagesObjectIdRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/site-pages/{objectId}',
  tags: ['Website pages'],
  summary: 'Retrieve a website page',
  description: 'Retrieve a website page by its ID.',
  operationId: 'get-/cms/pages/2026-09/site-pages/{objectId}_getById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page to retrieve.',
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
            description:
              'A specific property to include in the response. Use a comma-separated list for multiple properties.',
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
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsPages202609SitePagesObjectIdRoute = createRoute({
  method: 'delete',
  path: '/cms/pages/2026-09/site-pages/{objectId}',
  tags: ['Website pages'],
  summary: 'Delete a website page',
  description: 'Delete a website page, specified by its ID.',
  operationId: 'delete-/cms/pages/2026-09/site-pages/{objectId}_archive',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page to delete.',
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

export const patchCmsPages202609SitePagesObjectIdRoute = createRoute({
  method: 'patch',
  path: '/cms/pages/2026-09/site-pages/{objectId}',
  tags: ['Website pages'],
  summary: 'Update a website page',
  description:
    'Partially updates a single website page, specified by its ID. You only need to specify the column values that you are modifying.\n',
  operationId: 'patch-/cms/pages/2026-09/site-pages/{objectId}_update',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page to update.',
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
    body: { content: { '*/*': { schema: PageSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609SitePagesObjectIdDraftRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/site-pages/{objectId}/draft',
  tags: ['Website pages'],
  summary: 'Retrieve a website page draft',
  description: 'Retrieve the full draft version of a website page, specified by its ID.',
  operationId: 'get-/cms/pages/2026-09/site-pages/{objectId}/draft_getDraftById',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the site page whose draft version is to be retrieved.',
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
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const patchCmsPages202609SitePagesObjectIdDraftRoute = createRoute({
  method: 'patch',
  path: '/cms/pages/2026-09/site-pages/{objectId}/draft',
  tags: ['Website pages'],
  summary: 'Update a website page draft',
  description:
    "Partially update the draft version of a website page, specified by page ID. You only need to specify the values for the details that you're modifying.",
  operationId: 'patch-/cms/pages/2026-09/site-pages/{objectId}/draft_updateDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page draft to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: { content: { '*/*': { schema: PageSchema, example: null } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesObjectIdDraftPushLiveRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/{objectId}/draft/push-live',
  tags: ['Website pages'],
  summary: 'Publish website page draft',
  description:
    'Take any changes from the draft version of the website page and apply them to the live version.',
  operationId: 'post-/cms/pages/2026-09/site-pages/{objectId}/draft/push-live_pushLive',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the site page whose draft version is to be pushed live.',
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

export const postCmsPages202609SitePagesObjectIdDraftResetRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/{objectId}/draft/reset',
  tags: ['Basic'],
  summary: 'Reset the draft of a website page',
  description: 'Discards any edits and resets the draft to match the live version.',
  operationId: 'post-/cms/pages/2026-09/site-pages/{objectId}/draft/reset_resetDraft',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page whose draft is to be reset.',
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

export const getCmsPages202609SitePagesObjectIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/site-pages/{objectId}/revisions',
  tags: ['Basic'],
  summary: 'Retrieve all previous versions of a website page',
  description: 'Retrieves all the previous versions of a website page, specified by page ID.',
  operationId: 'get-/cms/pages/2026-09/site-pages/{objectId}/revisions_getPreviousVersions',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page for which to retrieve revisions.',
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
        'application/json': { schema: CollectionResponseWithTotalPageVersionSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsPages202609SitePagesObjectIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}',
  tags: ['Basic'],
  summary: 'Retrieve a previous version of a website page',
  description: 'Retrieve a previous version of a website page by the revision ID.',
  operationId:
    'get-/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}_getPreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the site page whose revision is to be retrieved.',
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
            description:
              'The unique identifier of the specific revision of the site page to retrieve.',
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
      content: { 'application/json': { schema: PageVersionSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreRoute = createRoute({
  method: 'post',
  path: '/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore',
  tags: ['Advanced'],
  summary: 'Restore a previous version of a website page',
  description:
    'Restores a website page to a previous version, specified by page ID and version ID.',
  operationId:
    'post-/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description: 'The unique identifier of the site page whose revision is to be restored.',
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
      content: { 'application/json': { schema: PageSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftRoute =
  createRoute({
    method: 'post',
    path: '/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft',
    tags: ['Basic'],
    summary: 'Restore a previous draft of a website page',
    description:
      'Takes a specified version of a website page and sets it as the new draft version of the page.',
    operationId:
      'post-/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft',
    request: {
      params: z.object({
        objectId: z
          .string()
          .openapi({
            param: {
              name: 'objectId',
              in: 'path',
              description: 'The unique identifier of the site page to restore.',
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
                'The unique identifier of the revision to restore to draft. Must be an integer.',
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
        content: { 'application/json': { schema: PageSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['content'] }],
  })
