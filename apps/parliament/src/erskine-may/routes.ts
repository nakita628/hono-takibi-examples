import { createRoute, z } from '@hono/zod-openapi'

const ErskineMayParagraphSearchResultSchema = z
  .strictObject({
    chapterNumber: z.int32().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    paragraphReference: z.string().nullable().exactOptional(),
    partNumber: z.int32().exactOptional(),
    searchResultText: z.string().nullable().exactOptional(),
    sectionId: z.int32().exactOptional(),
    sectionTitle: z.string().nullable().exactOptional(),
    sectionTitleChain: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayParagraphSearchResult')

const ErskineMayIndexTermSeeLinkSchema = z
  .strictObject({
    indexTermId: z.int32().exactOptional(),
    seeType: z.string().nullable().exactOptional(),
    seeValue: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayIndexTermSeeLink')

type ErskineMayIndexTermType = {
  childTerms?: ErskineMayIndexTermType[] | null
  displayAs?: string | null
  id?: number
  parentTerm?: ErskineMayIndexTermType
  references?: z.infer<typeof ErskineMayParagraphSearchResultSchema>[] | null
  seeLinks?: z.infer<typeof ErskineMayIndexTermSeeLinkSchema>[] | null
  term?: string | null
}

type ErskineMaySectionOverviewType = {
  id?: number
  subSections?: ErskineMaySectionOverviewType[] | null
  title?: string | null
  titleChain?: string | null
}

const ErskineMaySectionOverviewSchema: z.ZodType<ErskineMaySectionOverviewType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        subSections: z.array(ErskineMaySectionOverviewSchema).nullable().exactOptional(),
        title: z.string().nullable().exactOptional(),
        titleChain: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ErskineMaySectionOverview')

const ErskineMayChapterOverviewSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    number: z.int32().exactOptional(),
    partNumber: z.int32().exactOptional(),
    sections: z.array(ErskineMaySectionOverviewSchema).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayChapterOverview')

const ErskineMayFootnoteSchema = z
  .strictObject({
    content: z.string().nullable().exactOptional(),
    number: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayFootnote')

const ErskineMayIndexTermSchema: z.ZodType<ErskineMayIndexTermType> = z
  .lazy(() =>
    z
      .strictObject({
        childTerms: z.array(ErskineMayIndexTermSchema).nullable().exactOptional(),
        displayAs: z.string().nullable().exactOptional(),
        id: z.int32().exactOptional(),
        parentTerm: ErskineMayIndexTermSchema.exactOptional(),
        references: z.array(ErskineMayParagraphSearchResultSchema).nullable().exactOptional(),
        seeLinks: z.array(ErskineMayIndexTermSeeLinkSchema).nullable().exactOptional(),
        term: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ErskineMayIndexTerm')

const ErskineMayIndexTermSearchResultSchema = z
  .strictObject({
    displayAs: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    seeValue: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayIndexTermSearchResult')

const ErskineMayIndexTermSearchResultErskineMaySearchSchema = z
  .strictObject({
    searchResults: z.array(ErskineMayIndexTermSearchResultSchema).nullable().exactOptional(),
    searchTerm: z.string().nullable().exactOptional(),
    searchTerms: z.array(z.string()).nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    suggestedSearch: z.string().nullable().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayIndexTermSearchResultErskineMaySearch')

const ErskineMayParagraphSearchResultErskineMaySearchSchema = z
  .strictObject({
    searchResults: z.array(ErskineMayParagraphSearchResultSchema).nullable().exactOptional(),
    searchTerm: z.string().nullable().exactOptional(),
    searchTerms: z.array(z.string()).nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    suggestedSearch: z.string().nullable().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayParagraphSearchResultErskineMaySearch')

const ErskineMayPartSchema = z
  .strictObject({
    chapters: z.array(ErskineMayChapterOverviewSchema).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    number: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMayPart')

const ErskineMaySectionDetailSchema = z
  .strictObject({
    chapterNumber: z.int32().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    contentHtml: z.string().nullable().exactOptional(),
    footnotes: z.array(ErskineMayFootnoteSchema).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    isUpdated: z.boolean().exactOptional(),
    parentSectionId: z.int32().nullable().exactOptional(),
    parentSectionTitle: z.string().nullable().exactOptional(),
    partNumber: z.int32().exactOptional(),
    partTitle: z.string().nullable().exactOptional(),
    subSections: z.array(ErskineMaySectionOverviewSchema).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    titleChain: z.string().nullable().exactOptional(),
    updatedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMaySectionDetail')

const ErskineMaySectionSearchResultSchema = z
  .strictObject({
    chapterNumber: z.int32().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    partNumber: z.int32().exactOptional(),
    sectionId: z.int32().exactOptional(),
    sectionTitle: z.string().nullable().exactOptional(),
    sectionTitleChain: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMaySectionSearchResult')

const ErskineMaySectionSearchResultErskineMaySearchSchema = z
  .strictObject({
    searchResults: z.array(ErskineMaySectionSearchResultSchema).nullable().exactOptional(),
    searchTerm: z.string().nullable().exactOptional(),
    searchTerms: z.array(z.string()).nullable().exactOptional(),
    skip: z.int32().exactOptional(),
    suggestedSearch: z.string().nullable().exactOptional(),
    take: z.int32().exactOptional(),
    totalResults: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErskineMaySectionSearchResultErskineMaySearch')

export const getApiChapterChapterNumberRoute = createRoute({
  method: 'get',
  path: '/api/Chapter/{chapterNumber}',
  tags: ['Chapter'],
  summary: 'Returns a single chapter overview by chapter number.',
  request: {
    params: z.object({
      chapterNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Chapter overview with the chapter number specified',
            in: 'path',
            name: 'chapterNumber',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMayChapterOverviewSchema },
        'text/json': { schema: ErskineMayChapterOverviewSchema },
        'text/plain': { schema: ErskineMayChapterOverviewSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiIndexTermBrowseRoute = createRoute({
  method: 'get',
  path: '/api/IndexTerm/browse',
  tags: ['IndexTerm'],
  summary: 'Returns a list of index terms by start letter.',
  request: {
    query: z.object({
      startLetter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Index terms by start letter',
            in: 'query',
            name: 'startLetter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20, maximum is 20.',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMayIndexTermSearchResultErskineMaySearchSchema },
        'text/json': { schema: ErskineMayIndexTermSearchResultErskineMaySearchSchema },
        'text/plain': { schema: ErskineMayIndexTermSearchResultErskineMaySearchSchema },
      },
    },
  },
})

export const getApiIndexTermIndexTermIdRoute = createRoute({
  method: 'get',
  path: '/api/IndexTerm/{indexTermId}',
  tags: ['IndexTerm'],
  summary: 'Returns an index term by id.',
  request: {
    params: z.object({
      indexTermId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Index term by if',
            in: 'path',
            name: 'indexTermId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMayIndexTermSchema },
        'text/json': { schema: ErskineMayIndexTermSchema },
        'text/plain': { schema: ErskineMayIndexTermSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiPartRoute = createRoute({
  method: 'get',
  path: '/api/Part',
  tags: ['Part'],
  summary: 'Returns a list of all parts.',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ErskineMayPartSchema) },
        'text/json': { schema: z.array(ErskineMayPartSchema) },
        'text/plain': { schema: z.array(ErskineMayPartSchema) },
      },
    },
  },
})

export const getApiPartPartNumberRoute = createRoute({
  method: 'get',
  path: '/api/Part/{partNumber}',
  tags: ['Part'],
  summary: 'Returns a part by part number.',
  request: {
    params: z.object({
      partNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Part by part number',
            in: 'path',
            name: 'partNumber',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMayPartSchema },
        'text/json': { schema: ErskineMayPartSchema },
        'text/plain': { schema: ErskineMayPartSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiSearchIndexTermSearchResultsSearchTermRoute = createRoute({
  method: 'get',
  path: '/api/Search/IndexTermSearchResults/{searchTerm}',
  tags: ['Search'],
  summary: 'Returns a list of index terms which contain the search term.',
  request: {
    params: z.object({
      searchTerm: z
        .string()
        .openapi({
          param: {
            description: 'Index terms which contain search term.',
            in: 'path',
            name: 'searchTerm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20, maximum is 20.',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMayIndexTermSearchResultErskineMaySearchSchema },
        'text/json': { schema: ErskineMayIndexTermSearchResultErskineMaySearchSchema },
        'text/plain': { schema: ErskineMayIndexTermSearchResultErskineMaySearchSchema },
      },
    },
  },
})

export const getApiSearchParagraphReferenceRoute = createRoute({
  method: 'get',
  path: '/api/Search/Paragraph/{reference}',
  tags: ['Search'],
  summary: 'Returns a section overview by reference.',
  request: {
    params: z.object({
      reference: z
        .string()
        .openapi({
          param: {
            description: 'Section overview by reference.',
            in: 'path',
            name: 'reference',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMaySectionOverviewSchema },
        'text/json': { schema: ErskineMaySectionOverviewSchema },
        'text/plain': { schema: ErskineMaySectionOverviewSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiSearchParagraphSearchResultsSearchTermRoute = createRoute({
  method: 'get',
  path: '/api/Search/ParagraphSearchResults/{searchTerm}',
  tags: ['Search'],
  summary: 'Returns a list of paragraphs which contain the search term.',
  request: {
    params: z.object({
      searchTerm: z
        .string()
        .openapi({
          param: {
            description: 'Paragraphs which contain search term in their content.',
            in: 'path',
            name: 'searchTerm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20, maximum is 20.',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMayParagraphSearchResultErskineMaySearchSchema },
        'text/json': { schema: ErskineMayParagraphSearchResultErskineMaySearchSchema },
        'text/plain': { schema: ErskineMayParagraphSearchResultErskineMaySearchSchema },
      },
    },
  },
})

export const getApiSearchSectionSearchResultsSearchTermRoute = createRoute({
  method: 'get',
  path: '/api/Search/SectionSearchResults/{searchTerm}',
  tags: ['Search'],
  summary: 'Returns a list of sections which contain the search term.',
  request: {
    params: z.object({
      searchTerm: z
        .string()
        .openapi({
          param: {
            description: 'Sections which contain search term in their title.',
            in: 'path',
            name: 'searchTerm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to skip from the first, default is 0.',
            in: 'query',
            name: 'skip',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return, default is 20, maximum is 20.',
            in: 'query',
            name: 'take',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMaySectionSearchResultErskineMaySearchSchema },
        'text/json': { schema: ErskineMaySectionSearchResultErskineMaySearchSchema },
        'text/plain': { schema: ErskineMaySectionSearchResultErskineMaySearchSchema },
      },
    },
  },
})

export const getApiSectionSectionIdRoute = createRoute({
  method: 'get',
  path: '/api/Section/{sectionId}',
  tags: ['Section'],
  summary: 'Returns a section by section id.',
  request: {
    params: z.object({
      sectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Section by id.',
            in: 'path',
            name: 'sectionId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMaySectionDetailSchema },
        'text/json': { schema: ErskineMaySectionDetailSchema },
        'text/plain': { schema: ErskineMaySectionDetailSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})

export const getApiSectionSectionIdStepRoute = createRoute({
  method: 'get',
  path: '/api/Section/{sectionId},{step}',
  tags: ['Section'],
  summary: 'Returns a section overview by section id and step.',
  request: {
    params: z.object({
      sectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Section by id.',
            in: 'path',
            name: 'sectionId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      step: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Number of sections to step over from given section.',
            in: 'path',
            name: 'step',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ErskineMaySectionOverviewSchema },
        'text/json': { schema: ErskineMaySectionOverviewSchema },
        'text/plain': { schema: ErskineMaySectionOverviewSchema },
      },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
  },
})
