import { createRoute, z } from '@hono/zod-openapi'

const ParentRefSchema = z
  .strictObject({
    parentValueIdent: z.string().nullable().exactOptional(),
    parentVariableIdent: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParentRef')

const DataItemSchema = z
  .strictObject({
    ident: z.string().nullable().exactOptional(),
    parentIdent: ParentRefSchema.nullable().exactOptional(),
    values: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataItem')

const LevelSchema = z
  .strictObject({ ident: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Level')

type HierarchicalInterviewType = {
  dataItems?: z.infer<typeof DataItemSchema>[] | null
  hierarchicalInterviews?: HierarchicalInterviewType[] | null
  ident?: string | null
  level?: z.infer<typeof LevelSchema> | null
}

const HierarchicalInterviewSchema: z.ZodType<HierarchicalInterviewType> = z
  .lazy(() =>
    z
      .strictObject({
        dataItems: z.array(DataItemSchema).nullable().exactOptional(),
        hierarchicalInterviews: z.array(HierarchicalInterviewSchema).nullable().exactOptional(),
        ident: z.string().nullable().exactOptional(),
        level: LevelSchema.nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('HierarchicalInterview')

type InterviewType = {
  dataItems?: z.infer<typeof DataItemSchema>[] | null
  hierarchicalInterviews?: z.infer<typeof HierarchicalInterviewSchema>[] | null
  ident?: string | null
}

const AltLabelModeSchema = z.union([z.literal(1), z.literal(2)]).openapi('AltLabelMode')

const AltLabelSchema = z
  .strictObject({
    langIdent: z.string().nullable().exactOptional(),
    mode: AltLabelModeSchema.exactOptional(),
    text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AltLabel')

type LabelType = { altLabels?: z.infer<typeof AltLabelSchema>[] | null; text?: string | null }

type LanguageType = {
  ident?: string | null
  name?: string | null
  subLanguages?: LanguageType[] | null
}

const LabelSchema: z.ZodType<LabelType> = z
  .lazy(() =>
    z
      .strictObject({
        altLabels: z.array(AltLabelSchema).nullable().exactOptional(),
        text: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Label')

const ParentTypeSchema = z.union([z.literal(1), z.literal(2), z.literal(3)]).openapi('ParentType')

const VariableTypeSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ])
  .openapi('VariableType')

const UseTypeSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi('UseType')

const ValueRangeSchema = z
  .strictObject({
    from: z.string().nullable().exactOptional(),
    to: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValueRange')

const ValueSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional(),
    ident: z.string().nullable().exactOptional(),
    label: LabelSchema.nullable().exactOptional(),
    score: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Value')

const VariableValuesSchema = z
  .strictObject({
    range: ValueRangeSchema.nullable().exactOptional(),
    values: z.array(ValueSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VariableValues')

type VariableType = {
  ident?: string | null
  label?: z.infer<typeof LabelSchema> | null
  maxResponses?: number
  name?: string | null
  parentType?: z.infer<typeof ParentTypeSchema>
  questions?: VariableType[] | null
  type?: z.infer<typeof VariableTypeSchema>
  use?: z.infer<typeof UseTypeSchema>
  variableValues?: z.infer<typeof VariableValuesSchema> | null
}

const LanguageSchema: z.ZodType<LanguageType> = z
  .lazy(() =>
    z
      .strictObject({
        ident: z.string().nullable().exactOptional(),
        name: z.string().nullable().exactOptional(),
        subLanguages: z.array(LanguageSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Language')

const VariableSchema: z.ZodType<VariableType> = z
  .lazy(() =>
    z
      .strictObject({
        ident: z.string().nullable().exactOptional(),
        label: LabelSchema.nullable().exactOptional(),
        maxResponses: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        parentType: ParentTypeSchema.exactOptional(),
        questions: z.array(VariableSchema).nullable().exactOptional(),
        type: VariableTypeSchema.exactOptional(),
        use: UseTypeSchema.exactOptional(),
        variableValues: VariableValuesSchema.nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Variable')

const SurveyMetadataBaseSchema = z
  .strictObject({
    interviewCount: z.int32().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    variables: z.array(VariableSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SurveyMetadataBase')

const ParentDetailsSchema = z
  .strictObject({
    level: z.string().nullable().exactOptional(),
    linkVar: z.string().nullable().exactOptional(),
    ordered: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParentDetails')

const HierarchySchema = z
  .strictObject({
    ident: z.string().nullable().exactOptional(),
    metadata: SurveyMetadataBaseSchema.nullable().exactOptional(),
    parent: ParentDetailsSchema.nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Hierarchy')

const InterviewSchema: z.ZodType<InterviewType> = z
  .lazy(() =>
    z
      .strictObject({
        dataItems: z.array(DataItemSchema).nullable().exactOptional(),
        hierarchicalInterviews: z.array(HierarchicalInterviewSchema).nullable().exactOptional(),
        ident: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Interview')

const SurveyDetailSchema = z
  .strictObject({
    id: z.uuid().exactOptional(),
    name: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SurveyDetail')

const SurveyMetadataSchema = z
  .strictObject({
    hierarchies: z.array(HierarchySchema).nullable().exactOptional(),
    interviewCount: z.int32().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    variables: z.array(VariableSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SurveyMetadata')

const BasicSecurityScheme = {
  description: 'Basic Authorization header using the Bearer scheme.',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getSurveysRoute = createRoute({
  method: 'get',
  path: '/Surveys',
  tags: ['Surveys'],
  summary: 'Returns a list of available Surveys',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SurveyDetailSchema) },
        'text/json': { schema: z.array(SurveyDetailSchema) },
        'text/plain': { schema: z.array(SurveyDetailSchema) },
      },
    },
  },
})

export const getSurveysSurveyIdInterviewsRoute = createRoute({
  method: 'get',
  path: '/Surveys/{surveyId}/Interviews',
  tags: ['Surveys'],
  summary: 'Fetches some interview records for a specific survey',
  request: {
    params: z.object({
      surveyId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'surveyId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
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
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxLength: z
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
            in: 'query',
            name: 'maxLength',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(InterviewSchema) },
        'text/json': { schema: z.array(InterviewSchema) },
        'text/plain': { schema: z.array(InterviewSchema) },
      },
    },
  },
})

export const getSurveysSurveyIdMetadataRoute = createRoute({
  method: 'get',
  path: '/Surveys/{surveyId}/Metadata',
  tags: ['Surveys'],
  summary: 'Fetches the metadata for a specific survey',
  request: {
    params: z.object({
      surveyId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'surveyId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SurveyMetadataSchema },
        'text/json': { schema: SurveyMetadataSchema },
        'text/plain': { schema: SurveyMetadataSchema },
      },
    },
  },
})
