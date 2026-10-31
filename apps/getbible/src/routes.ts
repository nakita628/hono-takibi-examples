import { createRoute, z } from '@hono/zod-openapi'

const DirectionSchema = z
  .enum(['LTR', 'RTL'])
  .openapi({ description: 'Writing direction of the text' })
  .openapi('Direction')

const Sha1Schema = z
  .string()
  .regex(/^[0-9a-f]{40}$/)
  .openapi({ description: 'SHA-1 checksum of a JSON file, as 40 lowercase hexadecimal characters' })
  .openapi('Sha1')

const Sha1FileSchema = z
  .string()
  .regex(/^[0-9a-f]{40}\s*$/)
  .openapi({
    description:
      'The content of a .sha file: the SHA-1 checksum of the JSON file with the same name, as 40 lowercase hexadecimal characters followed by a newline',
  })
  .openapi('Sha1File')

const TabSeparatedIndexSchema = z
  .string()
  .openapi({
    description:
      'The content of a .txt index file: a header line starting with # that names the columns, then one tab-separated line per file',
  })
  .openapi('TabSeparatedIndex')

const VerseSchema = z
  .object({
    chapter: z.int().min(1).openapi({ description: 'Chapter number' }),
    verse: z.int().min(1).openapi({ description: 'Verse number' }),
    name: z.string().openapi({ description: 'Name of the verse, as book name, chapter and verse' }),
    text: z.string().openapi({ description: 'Text of the verse' }),
  })
  .openapi({ description: 'One verse', required: ['chapter', 'verse', 'name', 'text'] })
  .openapi('Verse')

const BookChapterSchema = z
  .object({
    chapter: z.int().min(1).openapi({ description: 'Chapter number' }),
    name: z.string().openapi({ description: 'Name of the chapter, as book name and chapter' }),
    verses: z.array(VerseSchema).openapi({ description: 'Verses of the chapter' }),
  })
  .openapi({ description: 'One chapter with its verses', required: ['chapter', 'name', 'verses'] })
  .openapi('BookChapter')

const TranslationBookSchema = z
  .object({
    nr: z.int().min(1).openapi({ description: 'Book number' }),
    name: z.string().openapi({ description: 'Name of the book in the translation' }),
    chapters: z.array(BookChapterSchema).openapi({ description: 'Chapters of the book' }),
  })
  .openapi({ description: 'One book with its chapters', required: ['nr', 'name', 'chapters'] })
  .openapi('TranslationBook')

const TranslationSchema = z
  .object({
    translation: z.string().openapi({ description: 'Name of the translation' }),
    abbreviation: z
      .string()
      .regex(/^[a-z0-9]+$/)
      .openapi({
        description: 'Abbreviation of the translation, used as its file and folder name',
      }),
    description: z
      .string()
      .openapi({ description: 'Description of the translation from the source module' }),
    lang: z.string().openapi({ description: 'Language code of the translation' }),
    language: z.string().openapi({ description: 'Name of the language in English' }),
    direction: DirectionSchema,
    encoding: z.string().openapi({ description: 'Character encoding of the source module' }),
    books: z.array(TranslationBookSchema).openapi({ description: 'Books of the translation' }),
    distribution_lcsh: z
      .string()
      .openapi({ description: 'Library of Congress subject heading of the source module' }),
    distribution_version: z.string().openapi({ description: 'Version of the source module' }),
    distribution_version_date: z
      .string()
      .openapi({ description: 'Date of the source module version' }),
    distribution_abbreviation: z
      .string()
      .openapi({ description: 'Abbreviation of the source module' }),
    distribution_about: z.string().openapi({ description: 'About text of the source module' }),
    distribution_license: z
      .string()
      .openapi({ description: 'Distribution license of the source module text' }),
    distribution_sourcetype: z
      .string()
      .openapi({ description: 'Markup type of the source module text' }),
    distribution_source: z.string().openapi({ description: 'Origin of the source module text' }),
    distribution_versification: z
      .string()
      .openapi({ description: 'Versification of the source module' }),
    distribution_history: z
      .record(z.string(), z.string())
      .openapi({ description: 'Change history of the source module, keyed by history entry' }),
  })
  .openapi({
    description: 'A complete translation file',
    required: [
      'translation',
      'abbreviation',
      'description',
      'lang',
      'language',
      'direction',
      'encoding',
      'books',
      'distribution_lcsh',
      'distribution_version',
      'distribution_version_date',
      'distribution_abbreviation',
      'distribution_about',
      'distribution_license',
      'distribution_sourcetype',
      'distribution_source',
      'distribution_versification',
      'distribution_history',
    ],
  })
  .openapi('Translation')

const TranslationSummarySchema = z
  .object({
    translation: z.string().openapi({ description: 'Name of the translation' }),
    abbreviation: z
      .string()
      .regex(/^[a-z0-9]+$/)
      .openapi({
        description: 'Abbreviation of the translation, used as its file and folder name',
      }),
    description: z
      .string()
      .openapi({ description: 'Description of the translation from the source module' }),
    lang: z.string().openapi({ description: 'Language code of the translation' }),
    language: z.string().openapi({ description: 'Name of the language in English' }),
    direction: DirectionSchema,
    encoding: z.string().openapi({ description: 'Character encoding of the source module' }),
    distribution_lcsh: z
      .string()
      .openapi({ description: 'Library of Congress subject heading of the source module' }),
    distribution_version: z.string().openapi({ description: 'Version of the source module' }),
    distribution_version_date: z
      .string()
      .openapi({ description: 'Date of the source module version' }),
    distribution_abbreviation: z
      .string()
      .openapi({ description: 'Abbreviation of the source module' }),
    distribution_about: z.string().openapi({ description: 'About text of the source module' }),
    distribution_license: z
      .string()
      .openapi({ description: 'Distribution license of the source module text' }),
    distribution_sourcetype: z
      .string()
      .openapi({ description: 'Markup type of the source module text' }),
    distribution_source: z.string().openapi({ description: 'Origin of the source module text' }),
    distribution_versification: z
      .string()
      .openapi({ description: 'Versification of the source module' }),
    distribution_history: z
      .record(z.string(), z.string())
      .openapi({ description: 'Change history of the source module, keyed by history entry' }),
    url: z.url().openapi({ description: 'Address of the translation file' }),
    sha: Sha1Schema.openapi({ description: 'SHA-1 checksum of the translation file' }),
  })
  .openapi({
    description:
      'A translation as listed in translations.json (the translation file without its books)',
    required: [
      'translation',
      'abbreviation',
      'description',
      'lang',
      'language',
      'direction',
      'encoding',
      'distribution_lcsh',
      'distribution_version',
      'distribution_version_date',
      'distribution_abbreviation',
      'distribution_about',
      'distribution_license',
      'distribution_sourcetype',
      'distribution_source',
      'distribution_versification',
      'distribution_history',
      'url',
      'sha',
    ],
  })
  .openapi('TranslationSummary')

const TranslationIndexSchema = z
  .record(z.string(), TranslationSummarySchema)
  .superRefine((o, ctx) => {
    const regex = new RegExp('^[a-z0-9]+$')
    for (const k of Object.keys(o)) {
      if (!regex.test(k)) {
        ctx.addIssue({ code: 'custom', path: [k] })
      }
    }
  })
  .openapi({ description: 'Every translation in the tree, keyed by abbreviation' })
  .openapi('TranslationIndex')

const BookSchema = z
  .object({
    translation: z.string().openapi({ description: 'Name of the translation' }),
    abbreviation: z
      .string()
      .regex(/^[a-z0-9]+$/)
      .openapi({
        description: 'Abbreviation of the translation, used as its file and folder name',
      }),
    lang: z.string().openapi({ description: 'Language code of the translation' }),
    language: z.string().openapi({ description: 'Name of the language in English' }),
    direction: DirectionSchema,
    encoding: z.string().openapi({ description: 'Character encoding of the source module' }),
    nr: z.int().min(1).openapi({ description: 'Book number' }),
    name: z.string().openapi({ description: 'Name of the book in the translation' }),
    chapters: z.array(BookChapterSchema).openapi({ description: 'Chapters of the book' }),
  })
  .openapi({
    description: 'A complete book file',
    required: [
      'translation',
      'abbreviation',
      'lang',
      'language',
      'direction',
      'encoding',
      'nr',
      'name',
      'chapters',
    ],
  })
  .openapi('Book')

const BookSummarySchema = z
  .object({
    translation: z.string().openapi({ description: 'Name of the translation' }),
    abbreviation: z
      .string()
      .regex(/^[a-z0-9]+$/)
      .openapi({
        description: 'Abbreviation of the translation, used as its file and folder name',
      }),
    lang: z.string().openapi({ description: 'Language code of the translation' }),
    language: z.string().openapi({ description: 'Name of the language in English' }),
    direction: DirectionSchema,
    encoding: z.string().openapi({ description: 'Character encoding of the source module' }),
    nr: z.int().min(1).openapi({ description: 'Book number' }),
    name: z.string().openapi({ description: 'Name of the book in the translation' }),
    url: z.url().openapi({ description: 'Address of the book file' }),
    sha: Sha1Schema.openapi({ description: 'SHA-1 checksum of the book file' }),
  })
  .openapi({
    description: 'A book as listed in books.json (the book file without its chapters)',
    required: [
      'translation',
      'abbreviation',
      'lang',
      'language',
      'direction',
      'encoding',
      'nr',
      'name',
      'url',
      'sha',
    ],
  })
  .openapi('BookSummary')

const BookIndexSchema = z
  .record(z.string(), BookSummarySchema)
  .superRefine((o, ctx) => {
    const regex = new RegExp('^[0-9]+$')
    for (const k of Object.keys(o)) {
      if (!regex.test(k)) {
        ctx.addIssue({ code: 'custom', path: [k] })
      }
    }
  })
  .openapi({ description: 'Every book of a translation, keyed by book number' })
  .openapi('BookIndex')

const ChapterSchema = z
  .object({
    translation: z.string().openapi({ description: 'Name of the translation' }),
    abbreviation: z
      .string()
      .regex(/^[a-z0-9]+$/)
      .openapi({
        description: 'Abbreviation of the translation, used as its file and folder name',
      }),
    lang: z.string().openapi({ description: 'Language code of the translation' }),
    language: z.string().openapi({ description: 'Name of the language in English' }),
    direction: DirectionSchema,
    encoding: z.string().openapi({ description: 'Character encoding of the source module' }),
    book_nr: z.int().min(1).openapi({ description: 'Book number' }),
    book_name: z.string().openapi({ description: 'Name of the book in the translation' }),
    chapter: z.int().min(1).openapi({ description: 'Chapter number' }),
    name: z.string().openapi({ description: 'Name of the chapter, as book name and chapter' }),
    verses: z.array(VerseSchema).openapi({ description: 'Verses of the chapter' }),
  })
  .openapi({
    description: 'A complete chapter file',
    required: [
      'translation',
      'abbreviation',
      'lang',
      'language',
      'direction',
      'encoding',
      'book_nr',
      'book_name',
      'chapter',
      'name',
      'verses',
    ],
  })
  .openapi('Chapter')

const ChapterSummarySchema = z
  .object({
    translation: z.string().openapi({ description: 'Name of the translation' }),
    abbreviation: z
      .string()
      .regex(/^[a-z0-9]+$/)
      .openapi({
        description: 'Abbreviation of the translation, used as its file and folder name',
      }),
    lang: z.string().openapi({ description: 'Language code of the translation' }),
    language: z.string().openapi({ description: 'Name of the language in English' }),
    direction: DirectionSchema,
    encoding: z.string().openapi({ description: 'Character encoding of the source module' }),
    book_nr: z.int().min(1).openapi({ description: 'Book number' }),
    book_name: z.string().openapi({ description: 'Name of the book in the translation' }),
    chapter: z.int().min(1).openapi({ description: 'Chapter number' }),
    name: z.string().openapi({ description: 'Name of the chapter, as book name and chapter' }),
    url: z.url().openapi({ description: 'Address of the chapter file' }),
    sha: Sha1Schema.openapi({ description: 'SHA-1 checksum of the chapter file' }),
  })
  .openapi({
    description: 'A chapter as listed in chapters.json (the chapter file without its verses)',
    required: [
      'translation',
      'abbreviation',
      'lang',
      'language',
      'direction',
      'encoding',
      'book_nr',
      'book_name',
      'chapter',
      'name',
      'url',
      'sha',
    ],
  })
  .openapi('ChapterSummary')

const ChapterIndexSchema = z
  .record(z.string(), ChapterSummarySchema)
  .superRefine((o, ctx) => {
    const regex = new RegExp('^[0-9]+$')
    for (const k of Object.keys(o)) {
      if (!regex.test(k)) {
        ctx.addIssue({ code: 'custom', path: [k] })
      }
    }
  })
  .openapi({ description: 'Every chapter of a book, keyed by chapter number' })
  .openapi('ChapterIndex')

const ChecksumIndexSchema = z
  .record(z.string(), Sha1Schema)
  .superRefine((o, ctx) => {
    const regex = new RegExp('^[a-z0-9]+$')
    for (const k of Object.keys(o)) {
      if (!regex.test(k)) {
        ctx.addIssue({ code: 'custom', path: [k] })
      }
    }
  })
  .openapi({
    description:
      'The SHA-1 checksum of every JSON file at this level, keyed by file name without extension',
  })
  .openapi('ChecksumIndex')

const NotFoundResponse = {
  description: 'No such file: the translation, book or chapter is not part of this tree',
}

const AbbreviationParamsSchema = z
  .enum([
    'akjv',
    'alb',
    'aleppo',
    'almeida',
    'aov',
    'arabicsv',
    'asv',
    'basicenglish',
    'basque',
    'bibelselskap',
    'bkr',
    'breton',
    'burcbcm',
    'calo',
    'canisius',
    'cep',
    'chamorro',
    'che1860',
    'chiunl',
    'cns',
    'cnt',
    'codex',
    'coptic',
    'cornilescu',
    'croatia',
    'csielizabeth',
    'cus',
    'cut',
    'danish',
    'danish1819',
    'danish1871',
    'darby',
    'dari',
    'douayrheims',
    'easternarmenian',
    'elberfelder',
    'elberfelder1905',
    'esperanto',
    'estonian',
    'finnish1776',
    'gaelic',
    'giovanni',
    'gothic',
    'japbungo',
    'japdenmo',
    'japkougo',
    'japraguet',
    'judson',
    'karoli',
    'kjv',
    'kjva',
    'klv',
    'korean',
    'koreankjv',
    'latvian',
    'lithuanian',
    'livre',
    'livretr',
    'ls1910',
    'luther1545',
    'lxx',
    'mal1910',
    'manxgaelic',
    'maori',
    'martin',
    'mg1865',
    'moderngreek',
    'modernhebrew',
    'monkjv',
    'ndebele',
    'norsmb',
    'peshitta',
    'pohnold',
    'pohnpeian',
    'polgdanska',
    'polugdanska',
    'potawatomi',
    'pyharaamattu1933',
    'pyharaamattu1992',
    'riveduta',
    'rv1858',
    'sahidic',
    'schlachter',
    'shona',
    'srkdekavski',
    'srkdijekav',
    'sse',
    'statenvertaling',
    'statenvertalinga',
    'swahili',
    'swedish',
    'swekarlxii',
    'swekarlxii1873',
    'synodal',
    'tagalog',
    'tausug',
    'textusreceptus',
    'thai',
    'tischendorf',
    'tpikjpb',
    'turhadi',
    'turkish',
    'tyndale',
    'ukranian',
    'ukrogienko',
    'uma',
    'valera',
    'vietnamese',
    'vulgate',
    'wb',
    'web',
    'westcotthort',
    'westernarmenian',
    'weymouth',
    'wycliffe',
    'ylt',
    'zhuromsky',
  ])
  .openapi({
    param: {
      name: 'abbreviation',
      in: 'path',
      required: true,
      description: 'Abbreviation of the translation, as listed in translations.json',
      schema: {
        type: 'string',
        pattern: '^[a-z0-9]+$',
        enum: [
          'akjv',
          'alb',
          'aleppo',
          'almeida',
          'aov',
          'arabicsv',
          'asv',
          'basicenglish',
          'basque',
          'bibelselskap',
          'bkr',
          'breton',
          'burcbcm',
          'calo',
          'canisius',
          'cep',
          'chamorro',
          'che1860',
          'chiunl',
          'cns',
          'cnt',
          'codex',
          'coptic',
          'cornilescu',
          'croatia',
          'csielizabeth',
          'cus',
          'cut',
          'danish',
          'danish1819',
          'danish1871',
          'darby',
          'dari',
          'douayrheims',
          'easternarmenian',
          'elberfelder',
          'elberfelder1905',
          'esperanto',
          'estonian',
          'finnish1776',
          'gaelic',
          'giovanni',
          'gothic',
          'japbungo',
          'japdenmo',
          'japkougo',
          'japraguet',
          'judson',
          'karoli',
          'kjv',
          'kjva',
          'klv',
          'korean',
          'koreankjv',
          'latvian',
          'lithuanian',
          'livre',
          'livretr',
          'ls1910',
          'luther1545',
          'lxx',
          'mal1910',
          'manxgaelic',
          'maori',
          'martin',
          'mg1865',
          'moderngreek',
          'modernhebrew',
          'monkjv',
          'ndebele',
          'norsmb',
          'peshitta',
          'pohnold',
          'pohnpeian',
          'polgdanska',
          'polugdanska',
          'potawatomi',
          'pyharaamattu1933',
          'pyharaamattu1992',
          'riveduta',
          'rv1858',
          'sahidic',
          'schlachter',
          'shona',
          'srkdekavski',
          'srkdijekav',
          'sse',
          'statenvertaling',
          'statenvertalinga',
          'swahili',
          'swedish',
          'swekarlxii',
          'swekarlxii1873',
          'synodal',
          'tagalog',
          'tausug',
          'textusreceptus',
          'thai',
          'tischendorf',
          'tpikjpb',
          'turhadi',
          'turkish',
          'tyndale',
          'ukranian',
          'ukrogienko',
          'uma',
          'valera',
          'vietnamese',
          'vulgate',
          'wb',
          'web',
          'westcotthort',
          'westernarmenian',
          'weymouth',
          'wycliffe',
          'ylt',
          'zhuromsky',
        ],
      },
      example: 'kjv',
    },
  })

const BookParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(89),
  )
  .openapi({
    param: {
      name: 'book',
      in: 'path',
      required: true,
      description: 'Book number, as listed in the books.json of the translation',
      schema: { type: 'integer', minimum: 1, maximum: 89 },
      example: 1,
    },
  })

const ChapterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .openapi({
    param: {
      name: 'chapter',
      in: 'path',
      required: true,
      description: 'Chapter number, as listed in the chapters.json of the book',
      schema: { type: 'integer', minimum: 1 },
      example: 1,
    },
  })

export const getTranslationsJsonRoute = createRoute({
  method: 'get',
  path: '/translations.json',
  tags: ['translations'],
  summary: 'Index of the translations',
  description:
    'Every translation in the tree with its details and checksum, keyed by abbreviation.',
  operationId: 'listTranslations',
  responses: {
    200: {
      description: 'Index of the translations',
      content: { 'application/json': { schema: TranslationIndexSchema } },
    },
  },
})

export const getTranslationsTxtRoute = createRoute({
  method: 'get',
  path: '/translations.txt',
  tags: ['translations'],
  summary: 'Index of the translations as text',
  description:
    'Every translation in the tree, one per line, with the columns: #, language, translation, abbreviation, direction, filename, sha.',
  operationId: 'listTranslationsText',
  responses: {
    200: {
      description: 'Index of the translations as text',
      content: { 'text/plain': { schema: TabSeparatedIndexSchema } },
    },
  },
})

export const getTranslationsShaRoute = createRoute({
  method: 'get',
  path: '/translations.sha',
  tags: ['checksums'],
  summary: 'Checksum of the index of the translations',
  description: 'The SHA-1 checksum of translations.json.',
  operationId: 'getTranslationIndexChecksum',
  responses: {
    200: {
      description: 'Checksum of the index of the translations',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
  },
})

export const getChecksumJsonRoute = createRoute({
  method: 'get',
  path: '/checksum.json',
  tags: ['checksums'],
  summary: 'Checksums of the translations',
  description: 'The SHA-1 checksum of every translation file, keyed by abbreviation.',
  operationId: 'listTranslationChecksums',
  responses: {
    200: {
      description: 'Checksums of the translations',
      content: { 'application/json': { schema: ChecksumIndexSchema } },
    },
  },
})

export const getChecksumTxtRoute = createRoute({
  method: 'get',
  path: '/checksum.txt',
  tags: ['checksums'],
  summary: 'Checksums of the translations as text',
  description:
    'The SHA-1 checksum of every translation file, one per line, with the columns: #, filename, sha.',
  operationId: 'listTranslationChecksumsText',
  responses: {
    200: {
      description: 'Checksums of the translations as text',
      content: { 'text/plain': { schema: TabSeparatedIndexSchema } },
    },
  },
})

export const getChecksumShaRoute = createRoute({
  method: 'get',
  path: '/checksum.sha',
  tags: ['checksums'],
  summary: 'Checksum of the checksums of the translations',
  description: 'The SHA-1 checksum of checksum.json.',
  operationId: 'getTranslationChecksumIndexChecksum',
  responses: {
    200: {
      description: 'Checksum of the checksums of the translations',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
  },
})

export const getAbbreviationJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}.json',
  tags: ['translations'],
  summary: 'A complete translation',
  description:
    'The whole translation: every book with every chapter and verse, and the details of the source module.',
  operationId: 'getTranslation',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'A complete translation',
      content: { 'application/json': { schema: TranslationSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}.sha',
  tags: ['checksums'],
  summary: 'Checksum of a translation',
  description: 'The SHA-1 checksum of the translation file.',
  operationId: 'getTranslationChecksum',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Checksum of a translation',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBooksJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/books.json',
  tags: ['books'],
  summary: 'Index of the books of a translation',
  description: 'Every book of the translation with its details and checksum, keyed by book number.',
  operationId: 'listBooks',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Index of the books of a translation',
      content: { 'application/json': { schema: BookIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBooksTxtRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/books.txt',
  tags: ['books'],
  summary: 'Index of the books of a translation as text',
  description:
    'Every book of the translation, one per line, with the columns: #, language, translation, abbreviation, direction, name, filename, sha.',
  operationId: 'listBooksText',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Index of the books of a translation as text',
      content: { 'text/plain': { schema: TabSeparatedIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBooksShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/books.sha',
  tags: ['checksums'],
  summary: 'Checksum of the index of the books of a translation',
  description: 'The SHA-1 checksum of the books.json of the translation.',
  operationId: 'getBookIndexChecksum',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Checksum of the index of the books of a translation',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationChecksumJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/checksum.json',
  tags: ['checksums'],
  summary: 'Checksums of the books of a translation',
  description: 'The SHA-1 checksum of every book file of the translation, keyed by book number.',
  operationId: 'listBookChecksums',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Checksums of the books of a translation',
      content: { 'application/json': { schema: ChecksumIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationChecksumTxtRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/checksum.txt',
  tags: ['checksums'],
  summary: 'Checksums of the books of a translation as text',
  description:
    'The SHA-1 checksum of every book file of the translation, one per line, with the columns: #, filename, sha.',
  operationId: 'listBookChecksumsText',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Checksums of the books of a translation as text',
      content: { 'text/plain': { schema: TabSeparatedIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationChecksumShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/checksum.sha',
  tags: ['checksums'],
  summary: 'Checksum of the checksums of the books of a translation',
  description: 'The SHA-1 checksum of the checksum.json of the translation.',
  operationId: 'getBookChecksumIndexChecksum',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema }) },
  responses: {
    200: {
      description: 'Checksum of the checksums of the books of a translation',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}.json',
  tags: ['books'],
  summary: 'A complete book',
  description: 'One book of the translation with every chapter and verse.',
  operationId: 'getBook',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'A complete book',
      content: { 'application/json': { schema: BookSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}.sha',
  tags: ['checksums'],
  summary: 'Checksum of a book',
  description: 'The SHA-1 checksum of the book file.',
  operationId: 'getBookChecksum',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Checksum of a book',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChaptersJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/chapters.json',
  tags: ['chapters'],
  summary: 'Index of the chapters of a book',
  description: 'Every chapter of the book with its details and checksum, keyed by chapter number.',
  operationId: 'listChapters',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Index of the chapters of a book',
      content: { 'application/json': { schema: ChapterIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChaptersTxtRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/chapters.txt',
  tags: ['chapters'],
  summary: 'Index of the chapters of a book as text',
  description:
    'Every chapter of the book, one per line, with the columns: #, language, translation, abbreviation, textdirection, book_nr, book_name, filename, sha.',
  operationId: 'listChaptersText',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Index of the chapters of a book as text',
      content: { 'text/plain': { schema: TabSeparatedIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChaptersShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/chapters.sha',
  tags: ['checksums'],
  summary: 'Checksum of the index of the chapters of a book',
  description: 'The SHA-1 checksum of the chapters.json of the book.',
  operationId: 'getChapterIndexChecksum',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Checksum of the index of the chapters of a book',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChecksumJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/checksum.json',
  tags: ['checksums'],
  summary: 'Checksums of the chapters of a book',
  description: 'The SHA-1 checksum of every chapter file of the book, keyed by chapter number.',
  operationId: 'listChapterChecksums',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Checksums of the chapters of a book',
      content: { 'application/json': { schema: ChecksumIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChecksumTxtRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/checksum.txt',
  tags: ['checksums'],
  summary: 'Checksums of the chapters of a book as text',
  description:
    'The SHA-1 checksum of every chapter file of the book, one per line, with the columns: #, filename, sha.',
  operationId: 'listChapterChecksumsText',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Checksums of the chapters of a book as text',
      content: { 'text/plain': { schema: TabSeparatedIndexSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChecksumShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/checksum.sha',
  tags: ['checksums'],
  summary: 'Checksum of the checksums of the chapters of a book',
  description: 'The SHA-1 checksum of the checksum.json of the book.',
  operationId: 'getChapterChecksumIndexChecksum',
  request: { params: z.object({ abbreviation: AbbreviationParamsSchema, book: BookParamsSchema }) },
  responses: {
    200: {
      description: 'Checksum of the checksums of the chapters of a book',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChapterJsonRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/{chapter}.json',
  tags: ['chapters'],
  summary: 'A complete chapter',
  description: 'One chapter of a book with every verse.',
  operationId: 'getChapter',
  request: {
    params: z.object({
      abbreviation: AbbreviationParamsSchema,
      book: BookParamsSchema,
      chapter: ChapterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A complete chapter',
      content: { 'application/json': { schema: ChapterSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getAbbreviationBookChapterShaRoute = createRoute({
  method: 'get',
  path: '/{abbreviation}/{book}/{chapter}.sha',
  tags: ['checksums'],
  summary: 'Checksum of a chapter',
  description: 'The SHA-1 checksum of the chapter file.',
  operationId: 'getChapterChecksum',
  request: {
    params: z.object({
      abbreviation: AbbreviationParamsSchema,
      book: BookParamsSchema,
      chapter: ChapterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Checksum of a chapter',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  summary: 'This document',
  description:
    'The OpenAPI description of this tree, written at the end of the build that produced it.',
  operationId: 'getOpenApi',
  responses: {
    200: {
      description: 'OpenAPI 3.1 document',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const getOpenapiShaRoute = createRoute({
  method: 'get',
  path: '/openapi.sha',
  tags: ['checksums'],
  summary: 'Checksum of this document',
  description: 'The SHA-1 checksum of openapi.json.',
  operationId: 'getOpenApiChecksum',
  responses: {
    200: {
      description: 'Checksum of this document',
      content: { 'text/plain': { schema: Sha1FileSchema } },
    },
  },
})
