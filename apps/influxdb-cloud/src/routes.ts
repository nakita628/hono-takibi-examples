import { createRoute, z } from '@hono/zod-openapi'

const ExpressionSchema: z.ZodType<ExpressionType> = z
  .lazy(() =>
    z.xor([
      ArrayExpressionSchema,
      DictExpressionSchema,
      FunctionExpressionSchema,
      BinaryExpressionSchema,
      CallExpressionSchema,
      ConditionalExpressionSchema,
      LogicalExpressionSchema,
      MemberExpressionSchema,
      IndexExpressionSchema,
      ObjectExpressionSchema,
      ParenExpressionSchema,
      PipeExpressionSchema,
      UnaryExpressionSchema,
      BooleanLiteralSchema,
      DateTimeLiteralSchema,
      DurationLiteralSchema,
      FloatLiteralSchema,
      IntegerLiteralSchema,
      PipeLiteralSchema,
      RegexpLiteralSchema,
      StringLiteralSchema,
      UnsignedIntegerLiteralSchema,
      IdentifierSchema,
    ]),
  )
  .openapi('Expression')

const BlockSchema: z.ZodType<BlockType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        body: z.array(StatementSchema).exactOptional().openapi({ description: 'Block body' }),
      })
      .openapi({ description: 'A set of statements', required: [] }),
  )
  .openapi('Block')

type NodeType = z.infer<typeof ExpressionSchema> | z.infer<typeof BlockSchema>

type NodeTypeType = string

const NodeTypeSchema: z.ZodType<NodeTypeType> = z
  .string()
  .openapi({ description: 'Type of AST node' })
  .openapi('NodeType')

const StatementSchema: z.ZodType<StatementType> = z
  .lazy(() =>
    z.xor([
      BadStatementSchema,
      VariableAssignmentSchema,
      MemberAssignmentSchema,
      ExpressionStatementSchema,
      ReturnStatementSchema,
      OptionStatementSchema,
      BuiltinStatementSchema,
      TestStatementSchema,
    ]),
  )
  .openapi('Statement')

type BlockType = { type?: z.infer<typeof NodeTypeSchema>; body?: z.infer<typeof StatementSchema>[] }

type BadStatementType = { type?: z.infer<typeof NodeTypeSchema>; text?: string }

const BadStatementSchema: z.ZodType<BadStatementType> = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    text: z.string().exactOptional().openapi({ description: 'Raw source text' }),
  })
  .openapi({
    description: 'A placeholder for statements for which no correct statement nodes can be created',
    required: [],
  })
  .openapi('BadStatement')

const VariableAssignmentSchema: z.ZodType<VariableAssignmentType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        id: IdentifierSchema.exactOptional(),
        init: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'Represents the declaration of a variable', required: [] }),
  )
  .openapi('VariableAssignment')

const MemberAssignmentSchema: z.ZodType<MemberAssignmentType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        member: MemberExpressionSchema.exactOptional(),
        init: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'Object property assignment', required: [] }),
  )
  .openapi('MemberAssignment')

const ExpressionStatementSchema: z.ZodType<ExpressionStatementType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        expression: ExpressionSchema.exactOptional(),
      })
      .openapi({
        description:
          "May consist of an expression that doesn't return a value and is executed solely for its side-effects",
        required: [],
      }),
  )
  .openapi('ExpressionStatement')

const ReturnStatementSchema: z.ZodType<ReturnStatementType> = z
  .lazy(() =>
    z
      .object({ type: NodeTypeSchema.exactOptional(), argument: ExpressionSchema.exactOptional() })
      .openapi({ description: 'Defines an expression to return', required: [] }),
  )
  .openapi('ReturnStatement')

const OptionStatementSchema: z.ZodType<OptionStatementType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        assignment: z.xor([VariableAssignmentSchema, MemberAssignmentSchema]).exactOptional(),
      })
      .openapi({ description: 'A single variable declaration', required: [] }),
  )
  .openapi('OptionStatement')

type IdentifierType = { type?: z.infer<typeof NodeTypeSchema>; name?: string }

const IdentifierSchema: z.ZodType<IdentifierType> = z
  .object({ type: NodeTypeSchema.exactOptional(), name: z.string().exactOptional() })
  .openapi({ description: 'A valid Flux identifier', required: [] })
  .openapi('Identifier')

type BuiltinStatementType = {
  type?: z.infer<typeof NodeTypeSchema>
  id?: z.infer<typeof IdentifierSchema>
}

const BuiltinStatementSchema: z.ZodType<BuiltinStatementType> = z
  .object({ type: NodeTypeSchema.exactOptional(), id: IdentifierSchema.exactOptional() })
  .openapi({ description: 'Declares a builtin identifier and its type', required: [] })
  .openapi('BuiltinStatement')

const TestStatementSchema: z.ZodType<TestStatementType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        assignment: VariableAssignmentSchema.exactOptional(),
      })
      .openapi({ description: 'Declares a Flux test case', required: [] }),
  )
  .openapi('TestStatement')

type StatementType =
  | z.infer<typeof BadStatementSchema>
  | z.infer<typeof VariableAssignmentSchema>
  | z.infer<typeof MemberAssignmentSchema>
  | z.infer<typeof ExpressionStatementSchema>
  | z.infer<typeof ReturnStatementSchema>
  | z.infer<typeof OptionStatementSchema>
  | z.infer<typeof BuiltinStatementSchema>
  | z.infer<typeof TestStatementSchema>

type VariableAssignmentType = {
  type?: z.infer<typeof NodeTypeSchema>
  id?: z.infer<typeof IdentifierSchema>
  init?: z.infer<typeof ExpressionSchema>
}

const MemberExpressionSchema: z.ZodType<MemberExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        object: ExpressionSchema.exactOptional(),
        property: PropertyKeySchema.exactOptional(),
      })
      .openapi({ description: 'Represents accessing a property of an object', required: [] }),
  )
  .openapi('MemberExpression')

type MemberAssignmentType = {
  type?: z.infer<typeof NodeTypeSchema>
  member?: z.infer<typeof MemberExpressionSchema>
  init?: z.infer<typeof ExpressionSchema>
}

type ExpressionStatementType = {
  type?: z.infer<typeof NodeTypeSchema>
  expression?: z.infer<typeof ExpressionSchema>
}

type ReturnStatementType = {
  type?: z.infer<typeof NodeTypeSchema>
  argument?: z.infer<typeof ExpressionSchema>
}

type OptionStatementType = {
  type?: z.infer<typeof NodeTypeSchema>
  assignment?: z.infer<typeof VariableAssignmentSchema> | z.infer<typeof MemberAssignmentSchema>
}

type TestStatementType = {
  type?: z.infer<typeof NodeTypeSchema>
  assignment?: z.infer<typeof VariableAssignmentSchema>
}

const ArrayExpressionSchema: z.ZodType<ArrayExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        elements: z
          .array(ExpressionSchema)
          .exactOptional()
          .openapi({ description: 'Elements of the array' }),
      })
      .openapi({
        description: 'Used to create and directly specify the elements of an array object',
        required: [],
      }),
  )
  .openapi('ArrayExpression')

const DictExpressionSchema: z.ZodType<DictExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        elements: z
          .array(DictItemSchema)
          .exactOptional()
          .openapi({ description: 'Elements of the dictionary' }),
      })
      .openapi({
        description: 'Used to create and directly specify the elements of a dictionary',
        required: [],
      }),
  )
  .openapi('DictExpression')

const FunctionExpressionSchema: z.ZodType<FunctionExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        params: z
          .array(PropertySchema)
          .exactOptional()
          .openapi({ description: 'Function parameters' }),
        body: NodeSchema.exactOptional(),
      })
      .openapi({ description: 'Function expression', required: [] }),
  )
  .openapi('FunctionExpression')

const BinaryExpressionSchema: z.ZodType<BinaryExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        operator: z.string().exactOptional(),
        left: ExpressionSchema.exactOptional(),
        right: ExpressionSchema.exactOptional(),
      })
      .openapi({
        description: 'uses binary operators to act on two operands in an expression',
        required: [],
      }),
  )
  .openapi('BinaryExpression')

const CallExpressionSchema: z.ZodType<CallExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        callee: ExpressionSchema.exactOptional(),
        arguments: z
          .array(ExpressionSchema)
          .exactOptional()
          .openapi({ description: 'Function arguments' }),
      })
      .openapi({ description: 'Represents a function call', required: [] }),
  )
  .openapi('CallExpression')

const ConditionalExpressionSchema: z.ZodType<ConditionalExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        test: ExpressionSchema.exactOptional(),
        alternate: ExpressionSchema.exactOptional(),
        consequent: ExpressionSchema.exactOptional(),
      })
      .openapi({
        description:
          'Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test`',
        required: [],
      }),
  )
  .openapi('ConditionalExpression')

const LogicalExpressionSchema: z.ZodType<LogicalExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        operator: z.string().exactOptional(),
        left: ExpressionSchema.exactOptional(),
        right: ExpressionSchema.exactOptional(),
      })
      .openapi({
        description:
          'Represents the rule conditions that collectively evaluate to either true or false',
        required: [],
      }),
  )
  .openapi('LogicalExpression')

const IndexExpressionSchema: z.ZodType<IndexExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        array: ExpressionSchema.exactOptional(),
        index: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'Represents indexing into an array', required: [] }),
  )
  .openapi('IndexExpression')

const ObjectExpressionSchema: z.ZodType<ObjectExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        properties: z
          .array(PropertySchema)
          .exactOptional()
          .openapi({ description: 'Object properties' }),
      })
      .openapi({
        description: 'Allows the declaration of an anonymous object within a declaration',
        required: [],
      }),
  )
  .openapi('ObjectExpression')

const ParenExpressionSchema: z.ZodType<ParenExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        expression: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'Represents an expression wrapped in parenthesis', required: [] }),
  )
  .openapi('ParenExpression')

const PipeExpressionSchema: z.ZodType<PipeExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        argument: ExpressionSchema.exactOptional(),
        call: CallExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'Call expression with pipe argument', required: [] }),
  )
  .openapi('PipeExpression')

const UnaryExpressionSchema: z.ZodType<UnaryExpressionType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        operator: z.string().exactOptional(),
        argument: ExpressionSchema.exactOptional(),
      })
      .openapi({
        description: 'Uses operators to act on a single operand in an expression',
        required: [],
      }),
  )
  .openapi('UnaryExpression')

type BooleanLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: boolean }

const BooleanLiteralSchema: z.ZodType<BooleanLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.boolean().exactOptional() })
  .openapi({ description: 'Represents boolean values', required: [] })
  .openapi('BooleanLiteral')

type DateTimeLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: string }

const DateTimeLiteralSchema: z.ZodType<DateTimeLiteralType> = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    value: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description:
      'Represents an instant in time with nanosecond precision in [RFC3339Nano date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339nano-timestamp).',
    required: [],
  })
  .openapi('DateTimeLiteral')

const DurationSchema = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    magnitude: z.int().exactOptional(),
    unit: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A pair consisting of length of time and the unit of time measured. It is the atomic unit from which all duration literals are composed.',
    required: [],
  })
  .openapi('Duration')

type DurationLiteralType = {
  type?: z.infer<typeof NodeTypeSchema>
  values?: z.infer<typeof DurationSchema>[]
}

const DurationLiteralSchema: z.ZodType<DurationLiteralType> = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    values: z.array(DurationSchema).exactOptional().openapi({ description: 'Duration values' }),
  })
  .openapi({
    description:
      "Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration",
    required: [],
  })
  .openapi('DurationLiteral')

type FloatLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: number }

const FloatLiteralSchema: z.ZodType<FloatLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.number().exactOptional() })
  .openapi({
    description:
      'Represents floating point numbers according to the double representations defined by the IEEE-754-1985',
    required: [],
  })
  .openapi('FloatLiteral')

type IntegerLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: string }

const IntegerLiteralSchema: z.ZodType<IntegerLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.string().exactOptional() })
  .openapi({ description: 'Represents integer numbers', required: [] })
  .openapi('IntegerLiteral')

type PipeLiteralType = { type?: z.infer<typeof NodeTypeSchema> }

const PipeLiteralSchema: z.ZodType<PipeLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional() })
  .openapi({
    description:
      'Represents a specialized literal value, indicating the left hand value of a pipe expression',
    required: [],
  })
  .openapi('PipeLiteral')

type RegexpLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: string }

const RegexpLiteralSchema: z.ZodType<RegexpLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.string().exactOptional() })
  .openapi({
    description:
      'Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2',
    required: [],
  })
  .openapi('RegexpLiteral')

type StringLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: string }

const StringLiteralSchema: z.ZodType<StringLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.string().exactOptional() })
  .openapi({ description: 'Expressions begin and end with double quote marks', required: [] })
  .openapi('StringLiteral')

type UnsignedIntegerLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: string }

const UnsignedIntegerLiteralSchema: z.ZodType<UnsignedIntegerLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.string().exactOptional() })
  .openapi({ description: 'Represents integer numbers', required: [] })
  .openapi('UnsignedIntegerLiteral')

type ExpressionType =
  | z.infer<typeof ArrayExpressionSchema>
  | z.infer<typeof DictExpressionSchema>
  | z.infer<typeof FunctionExpressionSchema>
  | z.infer<typeof BinaryExpressionSchema>
  | z.infer<typeof CallExpressionSchema>
  | z.infer<typeof ConditionalExpressionSchema>
  | z.infer<typeof LogicalExpressionSchema>
  | z.infer<typeof MemberExpressionSchema>
  | z.infer<typeof IndexExpressionSchema>
  | z.infer<typeof ObjectExpressionSchema>
  | z.infer<typeof ParenExpressionSchema>
  | z.infer<typeof PipeExpressionSchema>
  | z.infer<typeof UnaryExpressionSchema>
  | z.infer<typeof BooleanLiteralSchema>
  | z.infer<typeof DateTimeLiteralSchema>
  | z.infer<typeof DurationLiteralSchema>
  | z.infer<typeof FloatLiteralSchema>
  | z.infer<typeof IntegerLiteralSchema>
  | z.infer<typeof PipeLiteralSchema>
  | z.infer<typeof RegexpLiteralSchema>
  | z.infer<typeof StringLiteralSchema>
  | z.infer<typeof UnsignedIntegerLiteralSchema>
  | z.infer<typeof IdentifierSchema>

type ArrayExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  elements?: z.infer<typeof ExpressionSchema>[]
}

const DictItemSchema: z.ZodType<DictItemType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        key: ExpressionSchema.exactOptional(),
        val: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'A key-value pair in a dictionary.', required: [] }),
  )
  .openapi('DictItem')

type DictExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  elements?: z.infer<typeof DictItemSchema>[]
}

type DictItemType = {
  type?: z.infer<typeof NodeTypeSchema>
  key?: z.infer<typeof ExpressionSchema>
  val?: z.infer<typeof ExpressionSchema>
}

const PropertySchema: z.ZodType<PropertyType> = z
  .lazy(() =>
    z
      .object({
        type: NodeTypeSchema.exactOptional(),
        key: PropertyKeySchema.exactOptional(),
        value: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'The value associated with a key', required: [] }),
  )
  .openapi('Property')

const NodeSchema: z.ZodType<NodeType> = z
  .lazy(() => z.xor([ExpressionSchema, BlockSchema]))
  .openapi('Node')

type FunctionExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  params?: z.infer<typeof PropertySchema>[]
  body?: z.infer<typeof NodeSchema>
}

type BinaryExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  operator?: string
  left?: z.infer<typeof ExpressionSchema>
  right?: z.infer<typeof ExpressionSchema>
}

type CallExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  callee?: z.infer<typeof ExpressionSchema>
  arguments?: z.infer<typeof ExpressionSchema>[]
}

type ConditionalExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  test?: z.infer<typeof ExpressionSchema>
  alternate?: z.infer<typeof ExpressionSchema>
  consequent?: z.infer<typeof ExpressionSchema>
}

type LogicalExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  operator?: string
  left?: z.infer<typeof ExpressionSchema>
  right?: z.infer<typeof ExpressionSchema>
}

type PropertyKeyType = z.infer<typeof IdentifierSchema> | z.infer<typeof StringLiteralSchema>

const PropertyKeySchema: z.ZodType<PropertyKeyType> = z
  .xor([IdentifierSchema, StringLiteralSchema])
  .openapi('PropertyKey')

type MemberExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  object?: z.infer<typeof ExpressionSchema>
  property?: z.infer<typeof PropertyKeySchema>
}

type IndexExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  array?: z.infer<typeof ExpressionSchema>
  index?: z.infer<typeof ExpressionSchema>
}

type ObjectExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  properties?: z.infer<typeof PropertySchema>[]
}

type ParenExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  expression?: z.infer<typeof ExpressionSchema>
}

type PipeExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  argument?: z.infer<typeof ExpressionSchema>
  call?: z.infer<typeof CallExpressionSchema>
}

type UnaryExpressionType = {
  type?: z.infer<typeof NodeTypeSchema>
  operator?: string
  argument?: z.infer<typeof ExpressionSchema>
}

type PropertyType = {
  type?: z.infer<typeof NodeTypeSchema>
  key?: z.infer<typeof PropertyKeySchema>
  value?: z.infer<typeof ExpressionSchema>
}

type FieldType = {
  value?: string
  type?: 'func' | 'field' | 'integer' | 'number' | 'regex' | 'wildcard'
  alias?: string
  args?: FieldType[]
}

const QueryVariablePropertiesSchema = z
  .object({
    type: z.literal('query').exactOptional(),
    values: z
      .object({ query: z.string().exactOptional(), language: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('QueryVariableProperties')

const ConstantVariablePropertiesSchema = z
  .object({
    type: z.literal('constant').exactOptional(),
    values: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConstantVariableProperties')

const MapVariablePropertiesSchema = z
  .object({
    type: z.literal('map').exactOptional(),
    values: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MapVariableProperties')

type VariablePropertiesType =
  | z.infer<typeof QueryVariablePropertiesSchema>
  | z.infer<typeof ConstantVariablePropertiesSchema>
  | z.infer<typeof MapVariablePropertiesSchema>

const QueryEditModeSchema = z.enum(['builder', 'advanced']).openapi('QueryEditMode')

const BuilderAggregateFunctionTypeSchema = z
  .enum(['filter', 'group'])
  .openapi('BuilderAggregateFunctionType')

const BuilderTagsTypeSchema = z
  .object({
    key: z.string().exactOptional(),
    values: z.array(z.string()).exactOptional(),
    aggregateFunctionType: BuilderAggregateFunctionTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuilderTagsType')

const BuilderFunctionsTypeSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BuilderFunctionsType')

const BuilderConfigSchema = z
  .object({
    buckets: z.array(z.string()).exactOptional(),
    tags: z.array(BuilderTagsTypeSchema).exactOptional(),
    functions: z.array(BuilderFunctionsTypeSchema).exactOptional(),
    aggregateWindow: z
      .object({ period: z.string().exactOptional(), fillValues: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('BuilderConfig')

const DashboardQuerySchema = z
  .object({
    text: z.string().exactOptional().openapi({ description: 'The text of the Flux query.' }),
    editMode: QueryEditModeSchema.exactOptional(),
    name: z.string().exactOptional(),
    builderConfig: BuilderConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardQuery')

const DashboardColorSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique ID of the view color.' }),
    type: z
      .enum(['min', 'max', 'threshold', 'scale', 'text', 'background'])
      .openapi({ description: 'Type is how the color is used.' }),
    hex: z.string().length(7).openapi({ description: 'The hex number of the color' }),
    name: z.string().openapi({ description: 'The user-facing name of the hex color.' }),
    value: z.float32().openapi({ description: 'The data value mapped to this color.' }),
  })
  .openapi({
    description: 'Defines an encoding of data value into color space.',
    required: ['id', 'type', 'hex', 'name', 'value'],
  })
  .openapi('DashboardColor')

const AxisScaleSchema = z
  .enum(['log', 'linear'])
  .openapi({ description: 'Scale is the axis formatting scale. Supported: "log", "linear"' })
  .openapi('AxisScale')

const AxisSchema = z
  .object({
    bounds: z
      .array(z.string())
      .min(0)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'The extents of the axis in the form [lower, upper]. Clients determine whether bounds are inclusive or exclusive of their limits.',
      }),
    label: z.string().exactOptional().openapi({ description: 'Description of the axis.' }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label prefix for formatting axis values.' }),
    suffix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label suffix for formatting axis values.' }),
    base: z
      .enum(['', '2', '10'])
      .exactOptional()
      .openapi({ description: 'Radix for formatting axis values.' }),
    scale: AxisScaleSchema.exactOptional(),
  })
  .openapi({ description: 'Axis used in a visualization.', required: [] })
  .openapi('Axis')

const AxesSchema = z
  .object({ x: AxisSchema, y: AxisSchema })
  .openapi({ description: "The viewport for a View's visualizations", required: ['x', 'y'] })
  .openapi('Axes')

const StaticLegendSchema = z
  .object({
    colorizeRows: z.boolean().exactOptional(),
    heightRatio: z.float32().exactOptional(),
    show: z.boolean().exactOptional(),
    opacity: z.float32().exactOptional(),
    orientationThreshold: z.int().exactOptional(),
    valueAxis: z.string().exactOptional(),
    widthRatio: z.float32().exactOptional(),
  })
  .openapi({
    description: 'StaticLegend represents the options specific to the static legend',
    required: [],
  })
  .openapi('StaticLegend')

const DecimalPlacesSchema = z
  .object({
    isEnforced: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether decimal point setting should be enforced' }),
    digits: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of digits after decimal to display' }),
  })
  .openapi({
    description:
      'Indicates whether decimal places should be enforced, and how many digits it should show.',
    required: [],
  })
  .openapi('DecimalPlaces')

const LinePlusSingleStatPropertiesSchema = z
  .object({
    adaptiveZoomHide: z.boolean().exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('line-plus-single-stat'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    axes: AxesSchema,
    staticLegend: StaticLegendSchema.exactOptional(),
    xColumn: z.string().exactOptional(),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    yColumn: z.string().exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    yTotalTicks: z.int().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    shadeBelow: z.boolean().exactOptional(),
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    position: z.enum(['overlaid', 'stacked']),
    prefix: z.string(),
    suffix: z.string(),
    decimalPlaces: DecimalPlacesSchema,
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'queries',
      'shape',
      'axes',
      'colors',
      'note',
      'showNoteWhenEmpty',
      'prefix',
      'suffix',
      'decimalPlaces',
      'position',
    ],
  })
  .openapi('LinePlusSingleStatProperties')

const ColorMappingSchema = z
  .record(z.string(), z.string())
  .openapi({
    description:
      'A color mapping is an object that maps time series data to a UI color scheme to allow the UI to render graphs consistent colors across reloads.',
    example: {
      series_id_1: '#edf529',
      series_id_2: '#edf529',
      measurement_birdmigration_europe: '#663cd0',
      'configcat_deployments-autopromotionblocker': '#663cd0',
    },
  })
  .openapi('ColorMapping')

const XYGeomSchema = z
  .enum(['line', 'step', 'stacked', 'bar', 'monotoneX', 'stepBefore', 'stepAfter'])
  .openapi('XYGeom')

const XYViewPropertiesSchema = z
  .object({
    adaptiveZoomHide: z.boolean().exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('xy'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    colorMapping: ColorMappingSchema.exactOptional().openapi({
      description: 'An object that contains information about the color mapping',
    }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    axes: AxesSchema,
    staticLegend: StaticLegendSchema.exactOptional(),
    xColumn: z.string().exactOptional(),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    yColumn: z.string().exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    yTotalTicks: z.int().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    shadeBelow: z.boolean().exactOptional(),
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    position: z.enum(['overlaid', 'stacked']),
    geom: XYGeomSchema,
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'geom',
      'queries',
      'shape',
      'axes',
      'colors',
      'note',
      'showNoteWhenEmpty',
      'position',
    ],
  })
  .openapi('XYViewProperties')

const SingleStatViewPropertiesSchema = z
  .object({
    type: z.literal('single-stat'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    prefix: z.string(),
    tickPrefix: z.string(),
    suffix: z.string(),
    tickSuffix: z.string(),
    staticLegend: StaticLegendSchema.exactOptional(),
    decimalPlaces: DecimalPlacesSchema,
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'prefix',
      'tickPrefix',
      'suffix',
      'tickSuffix',
      'decimalPlaces',
    ],
  })
  .openapi('SingleStatViewProperties')

const HistogramViewPropertiesSchema = z
  .object({
    type: z.literal('histogram'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    xColumn: z.string(),
    fillColumns: z.array(z.string()),
    xDomain: z.array(z.float32()),
    xAxisLabel: z.string(),
    position: z.enum(['overlaid', 'stacked']),
    binCount: z.int(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'xColumn',
      'fillColumns',
      'xDomain',
      'xAxisLabel',
      'position',
      'binCount',
    ],
  })
  .openapi('HistogramViewProperties')

const GaugeViewPropertiesSchema = z
  .object({
    type: z.literal('gauge'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    prefix: z.string(),
    tickPrefix: z.string(),
    suffix: z.string(),
    tickSuffix: z.string(),
    decimalPlaces: DecimalPlacesSchema,
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'prefix',
      'tickPrefix',
      'suffix',
      'tickSuffix',
      'decimalPlaces',
    ],
  })
  .openapi('GaugeViewProperties')

const RenamableFieldSchema = z
  .object({
    internalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The calculated name of a field.', readOnly: true }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name that a field is renamed to by the user.' }),
    visible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this field should be visible on the table.' }),
  })
  .openapi({
    description: 'Describes a field that can be renamed and made visible or invisible.',
    required: [],
  })
  .openapi('RenamableField')

const TableViewPropertiesSchema = z
  .object({
    type: z.literal('table'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    tableOptions: z
      .object({
        verticalTimeAxis: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'verticalTimeAxis describes the orientation of the table by indicating whether the time axis will be displayed vertically',
          }),
        sortBy: RenamableFieldSchema.exactOptional(),
        wrapping: z
          .enum(['truncate', 'wrap', 'single-line'])
          .exactOptional()
          .openapi({
            description: 'Wrapping describes the text wrapping style to be used in table views',
          }),
        fixFirstColumn: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'fixFirstColumn indicates whether the first column of the table should be locked',
          }),
      })
      .openapi({ required: [] }),
    fieldOptions: z
      .array(RenamableFieldSchema)
      .openapi({
        description:
          'fieldOptions represent the fields retrieved by the query with customization options',
      }),
    timeFormat: z
      .string()
      .openapi({
        description:
          'timeFormat describes the display format for time values according to moment.js date formatting',
      }),
    decimalPlaces: DecimalPlacesSchema,
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'tableOptions',
      'fieldOptions',
      'timeFormat',
      'decimalPlaces',
    ],
  })
  .openapi('TableViewProperties')

const SimpleTableViewPropertiesSchema = z
  .object({
    type: z.literal('simple-table'),
    showAll: z.boolean(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
  })
  .openapi({ required: ['type', 'showAll', 'queries', 'shape', 'note', 'showNoteWhenEmpty'] })
  .openapi('SimpleTableViewProperties')

const MarkdownViewPropertiesSchema = z
  .object({ type: z.literal('markdown'), shape: z.literal('chronograf-v2'), note: z.string() })
  .openapi({ required: ['type', 'shape', 'note'] })
  .openapi('MarkdownViewProperties')

const TaskStatusTypeSchema = z
  .enum(['active', 'inactive'])
  .openapi({
    description: '`inactive` cancels scheduled runs and prevents manual runs of the task.\n',
  })
  .openapi('TaskStatusType')

const LabelSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    orgID: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs associated with this label.\nTo remove a property, send an update with an empty value (`""`) for the key.\n',
        example: { color: 'ffb3b3', description: 'this is a description' },
      }),
  })
  .openapi({ required: [] })
  .openapi('Label')

const LabelsSchema = z.array(LabelSchema).openapi('Labels')

const LinkSchema = z
  .url()
  .openapi({ readOnly: true, description: 'URI of resource.' })
  .openapi('Link')

const CheckBaseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    orgID: z.string().openapi({ description: 'The ID of the organization that owns this check.' }),
    taskID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the task associated with this check.' }),
    ownerID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of creator used to create this check.', readOnly: true }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    query: DashboardQuerySchema,
    status: TaskStatusTypeSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the check.' }),
    latestCompleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)) of the latest scheduled and completed run.',
        readOnly: true,
      }),
    lastRunStatus: z
      .enum(['failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    lastRunError: z.string().exactOptional().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({
        self: LinkSchema.exactOptional().openapi({ description: 'The URL for this check.' }),
        labels: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve labels for this check.',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve members for this check.',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve owners for this check.',
        }),
        query: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve the Flux script for this check.',
        }),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          self: '/api/v2/checks/1',
          labels: '/api/v2/checks/1/labels',
          members: '/api/v2/checks/1/members',
          owners: '/api/v2/checks/1/owners',
          query: '/api/v2/checks/1/query',
        },
        required: [],
      }),
  })
  .openapi({ required: ['name', 'orgID', 'query'] })
  .openapi('CheckBase')

const CheckStatusLevelSchema = z
  .enum(['UNKNOWN', 'OK', 'INFO', 'CRIT', 'WARN'])
  .openapi({ description: 'The state to record if check matches a criteria.' })
  .openapi('CheckStatusLevel')

const DeadmanCheckSchema = CheckBaseSchema.and(
  z
    .object({
      type: z.literal('deadman'),
      timeSince: z
        .string()
        .exactOptional()
        .openapi({ description: 'String duration before deadman triggers.' }),
      staleTime: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'String duration for time that a series is considered stale and should not trigger deadman.',
        }),
      reportZero: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'If only zero values reported since time, trigger an alert' }),
      level: CheckStatusLevelSchema.exactOptional(),
      every: z.string().exactOptional().openapi({ description: 'Check repetition interval.' }),
      offset: z
        .string()
        .exactOptional()
        .openapi({ description: 'Duration to delay after the schedule, before executing check.' }),
      tags: z
        .array(
          z
            .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'List of tags to write to each status.' }),
      statusMessageTemplate: z
        .string()
        .exactOptional()
        .openapi({ description: 'The template used to generate and write a status message.' }),
    })
    .openapi({ required: ['type'] }),
).openapi('DeadmanCheck')

const ThresholdSchema: z.ZodType<ThresholdType> = z
  .lazy(() =>
    z
      .xor([GreaterThresholdSchema, LesserThresholdSchema, RangeThresholdSchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            greater: '#/components/schemas/GreaterThreshold',
            lesser: '#/components/schemas/LesserThreshold',
            range: '#/components/schemas/RangeThreshold',
          },
        },
      }),
  )
  .openapi('Threshold')

const ThresholdCheckSchema = CheckBaseSchema.and(
  z
    .object({
      type: z.literal('threshold'),
      thresholds: z.array(ThresholdSchema).exactOptional(),
      every: z.string().exactOptional().openapi({ description: 'Check repetition interval.' }),
      offset: z
        .string()
        .exactOptional()
        .openapi({ description: 'Duration to delay after the schedule, before executing check.' }),
      tags: z
        .array(
          z
            .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'List of tags to write to each status.' }),
      statusMessageTemplate: z
        .string()
        .exactOptional()
        .openapi({ description: 'The template used to generate and write a status message.' }),
    })
    .openapi({ required: ['type'] }),
).openapi('ThresholdCheck')

const CustomCheckSchema = CheckBaseSchema.and(
  z.object({ type: z.literal('custom') }).openapi({ required: ['type'] }),
).openapi('CustomCheck')

const CheckDiscriminatorSchema = z
  .xor([DeadmanCheckSchema, ThresholdCheckSchema, CustomCheckSchema])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        deadman: '#/components/schemas/DeadmanCheck',
        threshold: '#/components/schemas/ThresholdCheck',
        custom: '#/components/schemas/CustomCheck',
      },
    },
  })
  .openapi('CheckDiscriminator')

const CheckSchema = CheckDiscriminatorSchema.openapi('Check')

const CheckViewPropertiesSchema = z
  .object({
    adaptiveZoomHide: z.boolean().exactOptional(),
    type: z.literal('check'),
    shape: z.literal('chronograf-v2'),
    checkID: z.string(),
    check: CheckSchema.exactOptional(),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({ required: ['type', 'shape', 'checkID', 'queries', 'colors'] })
  .openapi('CheckViewProperties')

const ScatterViewPropertiesSchema = z
  .object({
    adaptiveZoomHide: z.boolean().exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('scatter'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(z.string())
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    xColumn: z.string(),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    yColumn: z.string(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    yTotalTicks: z.int().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    fillColumns: z.array(z.string()),
    symbolColumns: z.array(z.string()),
    xDomain: z.array(z.number()).max(2),
    yDomain: z.array(z.number()).max(2),
    xAxisLabel: z.string(),
    yAxisLabel: z.string(),
    xPrefix: z.string(),
    xSuffix: z.string(),
    yPrefix: z.string(),
    ySuffix: z.string(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'xColumn',
      'yColumn',
      'fillColumns',
      'symbolColumns',
      'xDomain',
      'yDomain',
      'xAxisLabel',
      'yAxisLabel',
      'xPrefix',
      'yPrefix',
      'xSuffix',
      'ySuffix',
    ],
  })
  .openapi('ScatterViewProperties')

const HeatmapViewPropertiesSchema = z
  .object({
    adaptiveZoomHide: z.boolean().exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('heatmap'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(z.string())
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    xColumn: z.string(),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    yColumn: z.string(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    yTotalTicks: z.int().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    xDomain: z.array(z.number()).max(2),
    yDomain: z.array(z.number()).max(2),
    xAxisLabel: z.string(),
    yAxisLabel: z.string(),
    xPrefix: z.string(),
    xSuffix: z.string(),
    yPrefix: z.string(),
    ySuffix: z.string(),
    binSize: z.number(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'xColumn',
      'yColumn',
      'xDomain',
      'yDomain',
      'xAxisLabel',
      'yAxisLabel',
      'xPrefix',
      'yPrefix',
      'xSuffix',
      'ySuffix',
      'binSize',
    ],
  })
  .openapi('HeatmapViewProperties')

const MosaicViewPropertiesSchema = z
  .object({
    timeFormat: z.string().exactOptional(),
    type: z.literal('mosaic'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(z.string())
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    xColumn: z.string(),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    yLabelColumnSeparator: z.string().exactOptional(),
    yLabelColumns: z.array(z.string()).exactOptional(),
    ySeriesColumns: z.array(z.string()),
    fillColumns: z.array(z.string()),
    xDomain: z.array(z.number()).max(2),
    yDomain: z.array(z.number()).max(2),
    xAxisLabel: z.string(),
    yAxisLabel: z.string(),
    xPrefix: z.string(),
    xSuffix: z.string(),
    yPrefix: z.string(),
    ySuffix: z.string(),
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'type',
      'queries',
      'colors',
      'shape',
      'note',
      'showNoteWhenEmpty',
      'xColumn',
      'ySeriesColumns',
      'fillColumns',
      'xDomain',
      'yDomain',
      'xAxisLabel',
      'yAxisLabel',
      'xPrefix',
      'yPrefix',
      'xSuffix',
      'ySuffix',
    ],
  })
  .openapi('MosaicViewProperties')

const BandViewPropertiesSchema = z
  .object({
    adaptiveZoomHide: z.boolean().exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('band'),
    queries: z.array(DashboardQuerySchema),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    shape: z.literal('chronograf-v2'),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    axes: AxesSchema,
    staticLegend: StaticLegendSchema.exactOptional(),
    xColumn: z.string().exactOptional(),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    yColumn: z.string().exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    yTotalTicks: z.int().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    upperColumn: z.string().exactOptional(),
    mainColumn: z.string().exactOptional(),
    lowerColumn: z.string().exactOptional(),
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    geom: XYGeomSchema,
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
  })
  .openapi({
    required: ['type', 'geom', 'queries', 'shape', 'axes', 'colors', 'note', 'showNoteWhenEmpty'],
  })
  .openapi('BandViewProperties')

const LatLonColumnSchema = z
  .object({
    key: z.string().openapi({ description: 'Key to determine whether the column is tag/field' }),
    column: z.string().openapi({ description: 'Column to look up Lat/Lon' }),
  })
  .openapi({
    description: 'Object type for key and column definitions',
    required: ['key', 'column'],
  })
  .openapi('LatLonColumn')

const LatLonColumnsSchema = z
  .object({ lat: LatLonColumnSchema, lon: LatLonColumnSchema })
  .openapi({ description: 'Object type to define lat/lon columns', required: ['lat', 'lon'] })
  .openapi('LatLonColumns')

const GeoViewLayerPropertiesSchema = z
  .object({ type: z.enum(['heatmap', 'circleMap', 'pointMap', 'trackMap']) })
  .openapi({ required: ['type'] })
  .openapi('GeoViewLayerProperties')

const GeoCircleViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({
      radiusField: z.string().openapi({ description: 'Radius field' }),
      radiusDimension: AxisSchema,
      colorField: z.string().openapi({ description: 'Circle color field' }),
      colorDimension: AxisSchema,
      colors: z
        .array(DashboardColorSchema)
        .openapi({ description: 'Colors define color encoding of data into a visualization' }),
      radius: z.int().exactOptional().openapi({ description: 'Maximum radius size in pixels' }),
      interpolateColors: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Interpolate circle color based on displayed value' }),
    })
    .openapi({
      required: ['radiusField', 'radiusDimension', 'colorField', 'colorDimension', 'colors'],
    }),
).openapi('GeoCircleViewLayer')

const GeoHeatMapViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({
      intensityField: z.string().openapi({ description: 'Intensity field' }),
      intensityDimension: AxisSchema,
      radius: z.int().openapi({ description: 'Radius size in pixels' }),
      blur: z.int().openapi({ description: 'Blur for heatmap points' }),
      colors: z
        .array(DashboardColorSchema)
        .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    })
    .openapi({ required: ['intensityField', 'intensityDimension', 'radius', 'blur', 'colors'] }),
).openapi('GeoHeatMapViewLayer')

const GeoPointMapViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({
      colorField: z.string().openapi({ description: 'Marker color field' }),
      colorDimension: AxisSchema,
      colors: z
        .array(DashboardColorSchema)
        .openapi({ description: 'Colors define color encoding of data into a visualization' }),
      isClustered: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Cluster close markers together' }),
      tooltipColumns: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'An array for which columns to display in tooltip' }),
    })
    .openapi({ required: ['colorField', 'colorDimension', 'colors'] }),
).openapi('GeoPointMapViewLayer')

const GeoTrackMapViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({})
    .openapi({ required: ['trackWidth', 'speed', 'randomColors', 'trackPointVisualization'] }),
)
  .and(
    z
      .object({
        trackWidth: z.int().exactOptional().openapi({ description: 'Width of the track' }),
        speed: z.int().exactOptional().openapi({ description: 'Speed of the track animation' }),
        randomColors: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Assign different colors to different tracks' }),
        colors: z
          .array(DashboardColorSchema)
          .exactOptional()
          .openapi({ description: 'Colors define color encoding of data into a visualization' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('GeoTrackMapViewLayer')

const GeoViewLayerSchema = z
  .xor([
    GeoCircleViewLayerSchema,
    GeoHeatMapViewLayerSchema,
    GeoPointMapViewLayerSchema,
    GeoTrackMapViewLayerSchema,
  ])
  .openapi('GeoViewLayer')

const GeoViewPropertiesSchema = z
  .object({
    type: z.literal('geo'),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    center: z
      .object({
        lat: z.float64().openapi({ description: 'Latitude of the center of the map' }),
        lon: z.float64().openapi({ description: 'Longitude of the center of the map' }),
      })
      .openapi({ description: 'Coordinates of the center of the map', required: ['lat', 'lon'] }),
    zoom: z
      .float64()
      .min(1)
      .max(28)
      .openapi({ description: 'Zoom level used for initial display of the map' }),
    allowPanAndZoom: z
      .boolean()
      .default(true)
      .openapi({
        description: 'If true, map zoom and pan controls are enabled on the dashboard view',
      }),
    detectCoordinateFields: z
      .boolean()
      .default(true)
      .openapi({
        description:
          'If true, search results get automatically regroupped so that lon,lat and value are treated as columns',
      }),
    useS2CellID: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, S2 column is used to calculate lat/lon' }),
    s2Column: z.string().exactOptional().openapi({ description: 'String to define the column' }),
    latLonColumns: LatLonColumnsSchema.exactOptional(),
    mapStyle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Define map type - regular, satellite etc.' }),
    note: z.string(),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    colors: z
      .array(DashboardColorSchema)
      .exactOptional()
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    layers: z
      .array(GeoViewLayerSchema)
      .openapi({ description: 'List of individual layers shown in the map' }),
  })
  .openapi({
    required: [
      'type',
      'shape',
      'queries',
      'note',
      'showNoteWhenEmpty',
      'center',
      'zoom',
      'allowPanAndZoom',
      'detectCoordinateFields',
      'layers',
    ],
  })
  .openapi('GeoViewProperties')

type ViewPropertiesType =
  | z.infer<typeof LinePlusSingleStatPropertiesSchema>
  | z.infer<typeof XYViewPropertiesSchema>
  | z.infer<typeof SingleStatViewPropertiesSchema>
  | z.infer<typeof HistogramViewPropertiesSchema>
  | z.infer<typeof GaugeViewPropertiesSchema>
  | z.infer<typeof TableViewPropertiesSchema>
  | z.infer<typeof SimpleTableViewPropertiesSchema>
  | z.infer<typeof MarkdownViewPropertiesSchema>
  | z.infer<typeof CheckViewPropertiesSchema>
  | z.infer<typeof ScatterViewPropertiesSchema>
  | z.infer<typeof HeatmapViewPropertiesSchema>
  | z.infer<typeof MosaicViewPropertiesSchema>
  | z.infer<typeof BandViewPropertiesSchema>
  | z.infer<typeof GeoViewPropertiesSchema>

type HealthCheckType = {
  name: string
  message?: string
  checks?: HealthCheckType[]
  status: 'pass' | 'fail'
  version?: string
  commit?: string
}

const ThresholdBaseSchema = z
  .object({
    level: CheckStatusLevelSchema.exactOptional(),
    allValues: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, only alert if all values meet threshold.' }),
  })
  .openapi({ required: [] })
  .openapi('ThresholdBase')

const GreaterThresholdSchema = ThresholdBaseSchema.and(
  z
    .object({ type: z.literal('greater'), value: z.float32() })
    .openapi({ required: ['type', 'value'] }),
).openapi('GreaterThreshold')

const LesserThresholdSchema = ThresholdBaseSchema.and(
  z
    .object({ type: z.literal('lesser'), value: z.float32() })
    .openapi({ required: ['type', 'value'] }),
).openapi('LesserThreshold')

const RangeThresholdSchema = ThresholdBaseSchema.and(
  z
    .object({ type: z.literal('range'), min: z.float32(), max: z.float32(), within: z.boolean() })
    .openapi({ required: ['type', 'min', 'max', 'within'] }),
).openapi('RangeThreshold')

type ThresholdType =
  | z.infer<typeof GreaterThresholdSchema>
  | z.infer<typeof LesserThresholdSchema>
  | z.infer<typeof RangeThresholdSchema>

const LanguageRequestSchema = z
  .object({ query: z.string().openapi({ description: 'The Flux query script to be analyzed.\n' }) })
  .openapi({ description: 'Flux query to be analyzed.', required: ['query'] })
  .openapi('LanguageRequest')

const PackageClauseSchema = z
  .object({ type: NodeTypeSchema.exactOptional(), name: IdentifierSchema.exactOptional() })
  .openapi({ description: 'Defines a package identifier', required: [] })
  .openapi('PackageClause')

const ImportDeclarationSchema = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    as: IdentifierSchema.exactOptional(),
    path: StringLiteralSchema.exactOptional(),
  })
  .openapi({ description: 'Declares a package import', required: [] })
  .openapi('ImportDeclaration')

const FileSchema = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The name of the file.' }),
    package: PackageClauseSchema.exactOptional(),
    imports: z
      .array(ImportDeclarationSchema)
      .exactOptional()
      .openapi({ description: 'A list of package imports' }),
    body: z
      .array(StatementSchema)
      .exactOptional()
      .openapi({ description: 'List of Flux statements' }),
  })
  .openapi({ description: 'Represents a source from a single file', required: [] })
  .openapi('File')

const DialectSchema = z
  .object({
    header: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If true, the results contain a header row.' }),
    delimiter: z
      .string()
      .length(1)
      .default(',')
      .exactOptional()
      .openapi({ description: 'The separator used between cells. Default is a comma (`,`).' }),
    annotations: z
      .array(z.enum(['group', 'datatype', 'default']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Annotation rows to include in the results.\nAn _annotation_ is metadata associated with an object (column) in the data model.\n\n#### Related guides\n\n- See [Annotated CSV annotations](https://docs.influxdata.com/influxdb/cloud/reference/syntax/annotated-csv/#annotations) for examples and more information.\n\nFor more information about **annotations** in tabular data,\nsee [W3 metadata vocabulary for tabular data](https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#columns).\n',
      }),
    commentPrefix: z
      .string()
      .min(0)
      .max(1)
      .default('#')
      .exactOptional()
      .openapi({
        description: 'The character prefixed to comment strings. Default is a number sign (`#`).',
      }),
    dateTimeFormat: z
      .enum(['RFC3339', 'RFC3339Nano'])
      .default('RFC3339')
      .exactOptional()
      .openapi({
        description:
          'The format for timestamps in results.\nDefault is [`RFC3339` date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp).\nTo include nanoseconds in timestamps, use `RFC3339Nano`.\n\n#### Example formatted date/time values\n\n| Format      | Value                       |\n|:------------|:----------------------------|\n| `RFC3339`    | `"2006-01-02T15:04:05Z07:00"` |\n| `RFC3339Nano` | `"2006-01-02T15:04:05.999999999Z07:00"` |\n',
      }),
  })
  .openapi({
    description:
      'Options for tabular data output.\nDefault output is [annotated CSV](https://docs.influxdata.com/influxdb/cloud/reference/syntax/annotated-csv/#csv-response-format) with headers.\n\nFor more information about tabular data **dialect**,\nsee [W3 metadata vocabulary for tabular data](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions).\n',
    required: [],
  })
  .openapi('Dialect')

const QuerySchema = z
  .object({
    extern: FileSchema.exactOptional(),
    query: z.string().openapi({ description: 'The query script to execute.' }),
    type: z
      .literal('flux')
      .exactOptional()
      .openapi({ description: 'The type of query. Must be "flux".' }),
    params: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs passed as parameters during query execution.\n\nTo use parameters in your query, pass a _`query`_ with `params` references (in dot notation)--for example:\n\n```json\n  query: "from(bucket: params.mybucket)\\\n              |> range(start: params.rangeStart) |> limit(n:1)"\n```\n\nand pass _`params`_ with the key-value pairs--for example:\n\n```json\n  params: {\n    "mybucket": "environment",\n    "rangeStart": "-30d"\n  }\n```\n\nDuring query execution, InfluxDB passes _`params`_ to your script and substitutes the values.\n\n#### Limitations\n\n- If you use _`params`_, you can\'t use _`extern`_.\n',
      }),
    dialect: DialectSchema.exactOptional(),
    now: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Specifies the time that should be reported as `now` in the query.\nDefault is the server `now` time.\n',
      }),
  })
  .openapi({ description: 'Query InfluxDB with the Flux language', required: ['query'] })
  .openapi('Query')

const PackageSchema = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    path: z.string().exactOptional().openapi({ description: 'Package import path' }),
    package: z.string().exactOptional().openapi({ description: 'Package name' }),
    files: z.array(FileSchema).exactOptional().openapi({ description: 'Package files' }),
  })
  .openapi({ description: 'Represents a complete package source tree.', required: [] })
  .openapi('Package')

const DeletePredicateRequestSchema = z
  .object({
    start: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)).\nThe earliest time to delete from.\n',
      }),
    stop: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)).\nThe latest time to delete from.\n',
      }),
    predicate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An expression in [delete predicate syntax](https://docs.influxdata.com/influxdb/cloud/reference/syntax/delete-predicate/).\n',
        example: 'tag1="value1" and (tag2="value2" and tag3!="value3")',
      }),
  })
  .openapi({ description: 'The delete predicate request.', required: ['start', 'stop'] })
  .openapi('DeletePredicateRequest')

const AuthorizationUpdateRequestSchema = z
  .object({
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({
        description:
          'Status of the token. If `inactive`, InfluxDB rejects requests that use the token.',
      }),
    description: z.string().exactOptional().openapi({ description: 'A description of the token.' }),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationUpdateRequest')

const ResourceSchema = z
  .object({
    type: z
      .enum([
        'authorizations',
        'buckets',
        'dashboards',
        'orgs',
        'tasks',
        'telegrafs',
        'users',
        'variables',
        'secrets',
        'labels',
        'views',
        'documents',
        'notificationRules',
        'notificationEndpoints',
        'checks',
        'dbrp',
        'annotations',
        'sources',
        'scrapers',
        'notebooks',
        'remotes',
        'replications',
        'instance',
        'flows',
        'functions',
        'subscriptions',
      ])
      .openapi({
        description: "A resource type.\nIdentifies the API resource's type (or _kind_).\n",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A resource ID.\nIdentifies a specific resource.\n' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the resource.\n_Note: not all resource types have a `name` property_.\n',
      }),
    orgID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An organization ID.\nIdentifies the organization that owns the resource.\n',
      }),
    org: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An organization name.\nThe organization that owns the resource.\n',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('Resource')

const PermissionSchema = z
  .object({ action: z.enum(['read', 'write']), resource: ResourceSchema })
  .openapi({ required: ['action', 'resource'] })
  .openapi('Permission')

const AuthorizationSchema = AuthorizationUpdateRequestSchema.and(
  z
    .object({
      createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The organization ID.\nSpecifies the [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) that the authorization is scoped to.\n',
        }),
      permissions: z
        .array(PermissionSchema)
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'The list of permissions.\nAn authorization must have at least one permission.\n',
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({ readOnly: true, description: 'The authorization ID.' }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          readOnly: true,
          description:
            'The API token.\nThe token value is unique to the authorization.\n[API tokens](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token) are\nused to authenticate and authorize InfluxDB API requests and `influx`\nCLI commands--after receiving the request, InfluxDB checks that the\ntoken is valid and that the `permissions` allow the requested action(s).\n',
        }),
      userID: z
        .string()
        .exactOptional()
        .openapi({
          readOnly: true,
          description:
            'The user ID. Specifies the [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) that owns the authorization. If _scoped_, the user that the authorization is scoped to; otherwise, the creator of the authorization.',
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          readOnly: true,
          description:
            'The user name.\nSpecifies the [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) that owns the authorization.\nIf the authorization is _scoped_ to a user, the user;\notherwise, the creator of the authorization.\n',
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          readOnly: true,
          description:
            'The organization name.\nSpecifies the [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization)\nthat the token is scoped to.\n',
        }),
      links: z
        .object({
          self: LinkSchema.exactOptional().openapi({ readOnly: true }),
          user: LinkSchema.exactOptional().openapi({ readOnly: true }),
        })
        .exactOptional()
        .openapi({
          readOnly: true,
          example: { self: '/api/v2/authorizations/1', user: '/api/v2/users/12' },
          required: [],
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['orgID', 'permissions'] })
  .openapi('Authorization')

const LinksSchema = z
  .object({ next: LinkSchema.exactOptional(), self: LinkSchema, prev: LinkSchema.exactOptional() })
  .openapi({ description: 'URI pointers for additional paged results.\n', required: ['self'] })
  .openapi('Links')

const AuthorizationsSchema = z
  .object({
    links: LinksSchema.exactOptional().openapi({ readOnly: true }),
    authorizations: z.array(AuthorizationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Authorizations')

const AuthorizationPostRequestSchema = AuthorizationUpdateRequestSchema.and(
  z
    .object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'An organization ID.\nSpecifies the organization that owns the authorization.\n',
        }),
      userID: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "A user ID.\nSpecifies the user that the authorization is scoped to.\n\nWhen a user authenticates with username and password,\nInfluxDB generates a _user session_ with all the permissions\nspecified by all the user's authorizations.\n",
        }),
      permissions: z
        .array(PermissionSchema)
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'A list of permissions for an authorization.\nIn the list, provide at least one `permission` object.\n\nIn a `permission`, the `resource.type` property grants access to all\nresources of the specified type.\nTo grant access to only a specific resource, specify the\n`resource.id` property.\n',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['orgID', 'permissions'] })
  .openapi('AuthorizationPostRequest')

const RetentionRuleSchema = z
  .object({
    type: z.literal('expire').default('expire').exactOptional(),
    everySeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .default(2592000n)
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        default: 2592000,
        description:
          'The duration in seconds for how long data will be kept in the database.\nThe default duration is 2592000 (30 days).\n0 represents infinite retention.\n',
        example: 86400,
      }),
    shardGroupDurationSeconds: z
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
          'The shard group duration.\nThe duration or interval (in seconds) that each shard group covers.\n\n#### InfluxDB Cloud\n\n- Does not use `shardGroupDurationsSeconds`.\n\n#### InfluxDB OSS\n\n- Default value depends on the\n[bucket retention period](https://docs.influxdata.com/influxdb/cloud/reference/internals/shards/#shard-group-duration).\n',
      }),
  })
  .openapi({ required: ['everySeconds'] })
  .openapi('RetentionRule')

const RetentionRulesSchema = z
  .array(RetentionRuleSchema)
  .openapi({
    description:
      "Retention rules to expire or retain data.\nThe InfluxDB `/api/v2` API uses `RetentionRules` to configure the [retention period](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#retention-period).\n\n#### InfluxDB Cloud\n\n- `retentionRules` is required.\n\n#### InfluxDB OSS\n\n- `retentionRules` isn't required.\n",
  })
  .openapi('RetentionRules')

const SchemaTypeSchema = z.enum(['implicit', 'explicit']).openapi('SchemaType')

const PostBucketRequestSchema = z
  .object({
    orgID: z
      .string()
      .openapi({
        description: 'The organization ID.\nSpecifies the organization that owns the bucket.\n',
      }),
    name: z.string().openapi({ description: 'The bucket name.\n' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the bucket.\n' }),
    rp: z
      .string()
      .default('0')
      .exactOptional()
      .openapi({
        description:
          'The retention policy for the bucket.\nFor InfluxDB 1.x, specifies the duration of time that each data point\nin the retention policy persists.\n\nIf you need compatibility with InfluxDB 1.x, specify a value for the `rp` property;\notherwise, see the `retentionRules` property.\n\n[Retention policy](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#retention-policy-rp)\nis an InfluxDB 1.x concept.\nThe InfluxDB 2.x and Cloud equivalent is\n[retention period](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#retention-period).\nThe InfluxDB `/api/v2` API uses `RetentionRules` to configure the retention period.\n',
      }),
    retentionRules: RetentionRulesSchema.exactOptional(),
    schemaType: SchemaTypeSchema.default('implicit')
      .exactOptional()
      .openapi({
        description:
          "The schema Type. Default is `implicit`.\n\n#### InfluxDB Cloud\n\n- Use `explicit` to enforce column names, tags, fields, and data types for\nyour data.\n\n#### InfluxDB OSS\n\n- Doesn't support `explicit` bucket schemas.\n",
      }),
  })
  .openapi({ required: ['orgID', 'name'] })
  .openapi('PostBucketRequest')

const BucketSchema = z
  .object({
    links: z
      .object({
        labels: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve labels for this bucket.',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve members that can read this bucket.',
        }),
        org: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve parent organization for this bucket.',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve owners that can read and write to this bucket.',
        }),
        self: LinkSchema.exactOptional().openapi({ description: 'The URL for this bucket.' }),
        write: LinkSchema.exactOptional().openapi({
          description: 'The URL to write line protocol to this bucket.',
        }),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          labels: '/api/v2/buckets/1/labels',
          members: '/api/v2/buckets/1/members',
          org: '/api/v2/orgs/2',
          owners: '/api/v2/buckets/1/owners',
          self: '/api/v2/buckets/1',
          write: '/api/v2/write?org=2&bucket=1',
        },
        required: [],
      }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['user', 'system']).default('user').exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    description: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
    rp: z.string().exactOptional(),
    schemaType: SchemaTypeSchema.default('implicit').exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    retentionRules: RetentionRulesSchema,
    labels: LabelsSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'retentionRules'] })
  .openapi('Bucket')

const BucketsSchema = z
  .object({
    links: LinksSchema.exactOptional().openapi({ readOnly: true }),
    buckets: z.array(BucketSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Buckets')

const PatchRetentionRuleSchema = z
  .object({
    type: z.literal('expire').default('expire').exactOptional(),
    everySeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .default(2592000n)
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        default: 2592000,
        description:
          'The number of seconds to keep data.\nDefault duration is `2592000` (30 days).\n`0` represents infinite retention.\n',
        example: 86400,
      }),
    shardGroupDurationSeconds: z
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
          "The [shard group duration](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#shard).\nThe number of seconds that each shard group covers.\n\n#### InfluxDB Cloud\n\n- Doesn't use `shardGroupDurationsSeconds`.\n\n#### InfluxDB OSS\n\n- Default value depends on the [bucket retention period](https://docs.influxdata.com/influxdb/cloud/reference/internals/shards/#shard-group-duration).\n\n#### Related guides\n\n- InfluxDB [shards and shard groups](https://docs.influxdata.com/influxdb/cloud/reference/internals/shards/)\n",
      }),
  })
  .openapi({ required: ['everySeconds'] })
  .openapi('PatchRetentionRule')

const PatchRetentionRulesSchema = z
  .array(PatchRetentionRuleSchema)
  .openapi({ description: 'Updates to rules to expire or retain data. No rules means no updates.' })
  .openapi('PatchRetentionRules')

const PatchBucketRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the bucket.\n' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the bucket.\n' }),
    retentionRules: PatchRetentionRulesSchema.exactOptional(),
  })
  .openapi({
    description: 'An object that contains updated bucket properties to apply.\n',
    required: [],
  })
  .openapi('PatchBucketRequest')

const LogEventSchema = z
  .object({
    time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'The time ([RFC3339Nano date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339nano-timestamp)) that the event occurred.',
        example: '2006-01-02T15:04:05.999999999Z07:00',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'A description of the event that occurred.',
        example: 'Halt and catch fire',
      }),
    runID: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'The ID of the task run that generated the event.' }),
  })
  .openapi({ required: [] })
  .openapi('LogEvent')

const LogsSchema = z
  .object({ events: z.array(LogEventSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ required: [] })
  .openapi('Logs')

const OrganizationSchema = z
  .object({
    links: z
      .object({
        self: LinkSchema.exactOptional(),
        members: LinkSchema.exactOptional(),
        owners: LinkSchema.exactOptional(),
        labels: LinkSchema.exactOptional(),
        secrets: LinkSchema.exactOptional(),
        buckets: LinkSchema.exactOptional(),
        tasks: LinkSchema.exactOptional(),
        dashboards: LinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          self: '/api/v2/orgs/1',
          members: '/api/v2/orgs/1/members',
          owners: '/api/v2/orgs/1/owners',
          labels: '/api/v2/orgs/1/labels',
          secrets: '/api/v2/orgs/1/secrets',
          buckets: '/api/v2/buckets?org=myorg',
          tasks: '/api/v2/tasks?org=myorg',
          dashboards: '/api/v2/dashboards?org=myorg',
        },
        required: [],
      }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    defaultStorageType: z
      .enum(['tsm', 'iox'])
      .exactOptional()
      .openapi({ description: 'Discloses whether the organization uses TSM or IOx.' }),
    description: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'If inactive, the organization is inactive.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Organization')

const OrganizationsSchema = z
  .object({ links: LinksSchema.exactOptional(), orgs: z.array(OrganizationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Organizations')

const PostOrganizationRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the organization.\n' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the organization.\n' }),
  })
  .openapi({ required: ['name'] })
  .openapi('PostOrganizationRequest')

const PatchOrganizationRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the organization.\n' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the organization.\n' }),
  })
  .openapi({
    description: 'An object that contains updated organization properties to apply.\n',
    required: [],
  })
  .openapi('PatchOrganizationRequest')

const TemplateKindSchema = z
  .enum([
    'Bucket',
    'Check',
    'CheckDeadman',
    'CheckThreshold',
    'Dashboard',
    'Label',
    'NotificationEndpoint',
    'NotificationEndpointHTTP',
    'NotificationEndpointPagerDuty',
    'NotificationEndpointSlack',
    'NotificationRule',
    'Task',
    'Telegraf',
    'Variable',
  ])
  .openapi('TemplateKind')

const TemplateSchema = z
  .array(
    z
      .object({
        apiVersion: z.string().exactOptional().openapi({ example: 'influxdata.com/v2alpha1' }),
        kind: TemplateKindSchema.exactOptional(),
        metadata: z
          .object({ name: z.string().exactOptional() })
          .exactOptional()
          .openapi({
            description:
              'Metadata properties used for the resource when the template is applied.\n',
            required: [],
          }),
        spec: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Configuration properties used for the resource when the template is applied.\nKey-value pairs map to the specification for the resource.\n\nThe following code samples show `spec` configurations for template resources:\n\n- A bucket:\n\n```json\n{ "spec": {\n    "name": "iot_center",\n    "retentionRules": [{\n        "everySeconds": 2.592e+06,\n        "type": "expire"\n      }]\n  }\n}\n```\n\n- A variable:\n\n```json\n{ "spec": {\n    "language": "flux",\n    "name": "Node_Service",\n    "query": "import \\"influxdata/influxdb/v1\\"\\r\\nv1.tagValues(bucket: \\"iot_center\\",\n        tag: \\"service\\")",\n    "type": "query"\n  }\n}\n```\n',
          }),
      })
      .openapi({
        description: 'A template entry.\nDefines an InfluxDB resource in a template.\n',
        required: [],
      }),
  )
  .openapi('Template')

const TemplateApplySchema = z
  .object({
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Only applies a dry run of the templates passed in the request.\n\n- Validates the template and generates a resource diff and summary.\n- Doesn't install templates or make changes to the InfluxDB instance.\n",
      }),
    orgID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Organization ID.\nInfluxDB applies templates to this organization.\nThe organization owns all resources created by the template.\n\nTo find your organization, see how to\n[view organizations](https://docs.influxdata.com/influxdb/cloud/organizations/view-orgs/).\n',
      }),
    stackID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the stack to update.\n\nTo apply templates to an existing stack in the organization, use the `stackID` parameter.\nIf you apply templates without providing a stack ID,\nInfluxDB initializes a new stack with all new resources.\n\nTo find a stack ID, use the InfluxDB [`/api/v2/stacks` API endpoint](#operation/ListStacks) to list stacks.\n\n#### Related guides\n\n- [Stacks](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/stacks/)\n- [View stacks](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/stacks/view/)\n',
      }),
    template: z
      .object({
        contentType: z.string().exactOptional(),
        sources: z.array(z.string()).exactOptional(),
        contents: TemplateSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          "A template object to apply.\nA template object has a `contents` property\nwith an array of InfluxDB resource configurations.\n\nPass `template` to apply only one template object.\nIf you use `template`, you can't use the `templates` parameter.\nIf you want to apply multiple template objects, use `templates` instead.\n",
        required: [],
      }),
    templates: z
      .array(
        z
          .object({
            contentType: z.string().exactOptional(),
            sources: z.array(z.string()).exactOptional(),
            contents: TemplateSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          "A list of template objects to apply.\nA template object has a `contents` property\nwith an array of InfluxDB resource configurations.\n\nUse the `templates` parameter to apply multiple template objects.\nIf you use `templates`, you can't use the `template` parameter.\n",
      }),
    envRefs: z
      .record(z.string(), z.xor([z.string(), z.int(), z.number(), z.boolean()]))
      .exactOptional()
      .openapi({
        description:
          'An object with key-value pairs that map to **environment references** in templates.\n\nEnvironment references in templates are `envRef` objects with an `envRef.key`\nproperty.\nTo substitute a custom environment reference value when applying templates,\npass `envRefs` with the `envRef.key` and the value.\n\nWhen you apply a template, InfluxDB replaces `envRef` objects in the template\nwith the values that you provide in the `envRefs` parameter.\nFor more examples, see how to [define environment references](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/use/#define-environment-references).\n\nThe following template fields may use environment references:\n\n  - `metadata.name`\n  - `spec.endpointName`\n  - `spec.associations.name`\n\nFor more information about including environment references in template fields, see how to\n[include user-definable resource names](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/create/#include-user-definable-resource-names).\n',
      }),
    secrets: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'An object with key-value pairs that map to **secrets** in queries.\n\nQueries may reference secrets stored in InfluxDB--for example,\nthe following Flux script retrieves `POSTGRES_USERNAME` and `POSTGRES_PASSWORD`\nsecrets and then uses them to connect to a PostgreSQL database:\n\n```js\nimport "sql"\nimport "influxdata/influxdb/secrets"\n\nusername = secrets.get(key: "POSTGRES_USERNAME")\npassword = secrets.get(key: "POSTGRES_PASSWORD")\n\nsql.from(\n  driverName: "postgres",\n  dataSourceName: "postgresql://${username}:${password}@localhost:5432",\n  query: "SELECT * FROM example_table",\n)\n```\n\nTo define secret values in your `/api/v2/templates/apply` request,\npass the `secrets` parameter with key-value pairs--for example:\n\n```json\n{\n  ...\n  "secrets": {\n    "POSTGRES_USERNAME": "pguser",\n    "POSTGRES_PASSWORD": "foo"\n  }\n  ...\n}\n```\n\nInfluxDB stores the key-value pairs as secrets that you can access with `secrets.get()`.\nOnce stored, you can\'t view secret values in InfluxDB.\n\n#### Related guides\n\n- [How to pass secrets when installing a template](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/use/#pass-secrets-when-installing-a-template)\n',
      }),
    remotes: z
      .array(
        z
          .object({ url: z.string(), contentType: z.string().exactOptional() })
          .openapi({ required: ['url'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of URLs for template files.\n\nTo apply a template manifest file located at a URL, pass `remotes`\nwith an array that contains the URL.\n',
      }),
    actions: z
      .array(
        z.xor([
          z
            .object({
              action: z.literal('skipKind').exactOptional(),
              properties: z
                .object({ kind: TemplateKindSchema })
                .exactOptional()
                .openapi({ required: ['kind'] }),
            })
            .openapi({ required: [] }),
          z
            .object({
              action: z.literal('skipResource').exactOptional(),
              properties: z
                .object({ kind: TemplateKindSchema, resourceTemplateName: z.string() })
                .exactOptional()
                .openapi({ required: ['kind', 'resourceTemplateName'] }),
            })
            .openapi({ required: [] }),
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of `action` objects.\nActions let you customize how InfluxDB applies templates in the request.\n\nYou can use the following actions to prevent creating or updating resources:\n\n- A `skipKind` action skips template resources of a specified `kind`.\n- A `skipResource` action skips template resources with a specified `metadata.name`\n  and `kind`.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('TemplateApply')

const TemplateExportByIDSchema = z
  .object({
    stackID: z.string().exactOptional(),
    orgIDs: z
      .array(
        z
          .object({
            orgID: z.string().exactOptional(),
            resourceFilters: z
              .object({
                byLabel: z.array(z.string()).exactOptional(),
                byResourceKind: z.array(TemplateKindSchema).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    resources: z
      .array(
        z
          .object({
            id: z.string(),
            kind: TemplateKindSchema,
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'if defined with id, name is used for resource exported by id. if defined independently, resources strictly matching name are exported',
              }),
          })
          .openapi({ required: ['id', 'kind'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateExportByID')

const TemplateExportByNameSchema = z
  .object({
    stackID: z.string().exactOptional(),
    orgIDs: z
      .array(
        z
          .object({
            orgID: z.string().exactOptional(),
            resourceFilters: z
              .object({
                byLabel: z.array(z.string()).exactOptional(),
                byResourceKind: z.array(TemplateKindSchema).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    resources: z
      .array(
        z
          .object({ kind: TemplateKindSchema, name: z.string() })
          .openapi({ required: ['name', 'kind'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateExportByName')

const TemplateEnvReferencesSchema = z
  .array(
    z
      .object({
        resourceField: z
          .string()
          .openapi({ description: 'Field the environment reference corresponds too' }),
        envRefKey: z
          .string()
          .openapi({
            description:
              'Key identified as environment reference and is the key identified in the template',
          }),
        value: z
          .xor([
            z.string().nullable(),
            z.int().nullable(),
            z.number().nullable(),
            z.boolean().nullable(),
          ])
          .exactOptional()
          .openapi({ description: 'Value provided to fulfill reference' }),
        defaultValue: z
          .xor([
            z.string().nullable(),
            z.int().nullable(),
            z.number().nullable(),
            z.boolean().nullable(),
          ])
          .exactOptional()
          .openapi({
            description:
              'Default value that will be provided for the reference when no value is provided',
          }),
      })
      .openapi({ required: ['resourceField', 'envRefKey'] }),
  )
  .openapi('TemplateEnvReferences')

const TemplateSummaryLabelSchema = z
  .object({
    id: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
    kind: TemplateKindSchema.exactOptional(),
    templateMetaName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    properties: z
      .object({ color: z.string().exactOptional(), description: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    envReferences: TemplateEnvReferencesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateSummaryLabel')

const ViewPropertiesSchema: z.ZodType<ViewPropertiesType> = z
  .lazy(() =>
    z.xor([
      LinePlusSingleStatPropertiesSchema,
      XYViewPropertiesSchema,
      SingleStatViewPropertiesSchema,
      HistogramViewPropertiesSchema,
      GaugeViewPropertiesSchema,
      TableViewPropertiesSchema,
      SimpleTableViewPropertiesSchema,
      MarkdownViewPropertiesSchema,
      CheckViewPropertiesSchema,
      ScatterViewPropertiesSchema,
      HeatmapViewPropertiesSchema,
      MosaicViewPropertiesSchema,
      BandViewPropertiesSchema,
      GeoViewPropertiesSchema,
    ]),
  )
  .openapi('ViewProperties')

const TemplateChartSchema = z
  .object({
    xPos: z.int().exactOptional(),
    yPos: z.int().exactOptional(),
    height: z.int().exactOptional(),
    width: z.int().exactOptional(),
    properties: ViewPropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateChart')

const NotificationEndpointTypeSchema = z
  .enum(['slack', 'pagerduty', 'http', 'telegram'])
  .openapi('NotificationEndpointType')

const NotificationEndpointBaseSchema = z
  .object({
    id: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
    userID: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the notification endpoint.' }),
    name: z.string(),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'The status of the endpoint.' }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({
        self: LinkSchema.exactOptional().openapi({ description: 'The URL for this endpoint.' }),
        labels: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve labels for this endpoint.',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve members for this endpoint.',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve owners for this endpoint.',
        }),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          self: '/api/v2/notificationEndpoints/1',
          labels: '/api/v2/notificationEndpoints/1/labels',
          members: '/api/v2/notificationEndpoints/1/members',
          owners: '/api/v2/notificationEndpoints/1/owners',
        },
        required: [],
      }),
    type: NotificationEndpointTypeSchema,
  })
  .openapi({ required: ['type', 'name'] })
  .openapi('NotificationEndpointBase')

const SlackNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Specifies the URL of the Slack endpoint. Specify either `URL` or `Token`.',
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Specifies the API token string. Specify either `URL` or `Token`.',
        }),
    })
    .openapi({ required: [] }),
).openapi('SlackNotificationEndpoint')

const PagerDutyNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({ clientURL: z.string().exactOptional(), routingKey: z.string() })
    .openapi({ required: ['routingKey'] }),
).openapi('PagerDutyNotificationEndpoint')

const HTTPNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({
      url: z.string(),
      username: z.string().exactOptional(),
      password: z.string().exactOptional(),
      token: z.string().exactOptional(),
      method: z.enum(['POST', 'GET', 'PUT']),
      authMethod: z.enum(['none', 'basic', 'bearer']),
      contentTemplate: z.string().exactOptional(),
      headers: z
        .record(z.string(), z.string())
        .exactOptional()
        .openapi({ description: 'Customized headers.' }),
    })
    .openapi({ required: ['url', 'authMethod', 'method'] }),
).openapi('HTTPNotificationEndpoint')

const TelegramNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({
      token: z
        .string()
        .openapi({
          description:
            'Specifies the Telegram bot token. See https://core.telegram.org/bots#creating-a-new-bot .',
        }),
      channel: z
        .string()
        .openapi({
          description:
            'The ID of the telegram channel; a chat_id in https://core.telegram.org/bots/api#sendmessage .',
        }),
    })
    .openapi({ required: ['token', 'channel'] }),
).openapi('TelegramNotificationEndpoint')

const NotificationEndpointDiscriminatorSchema = z
  .xor([
    SlackNotificationEndpointSchema,
    PagerDutyNotificationEndpointSchema,
    HTTPNotificationEndpointSchema,
    TelegramNotificationEndpointSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        slack: '#/components/schemas/SlackNotificationEndpoint',
        pagerduty: '#/components/schemas/PagerDutyNotificationEndpoint',
        http: '#/components/schemas/HTTPNotificationEndpoint',
        telegram: '#/components/schemas/TelegramNotificationEndpoint',
      },
    },
  })
  .openapi('NotificationEndpointDiscriminator')

const TelegrafRequestSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    metadata: z
      .object({ buckets: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    config: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafRequest')

const VariablePropertiesSchema: z.ZodType<VariablePropertiesType> = z
  .lazy(() =>
    z.xor([
      QueryVariablePropertiesSchema,
      ConstantVariablePropertiesSchema,
      MapVariablePropertiesSchema,
    ]),
  )
  .openapi('VariableProperties')

const TemplateSummarySchema = z
  .object({
    sources: z.array(z.string()).exactOptional(),
    stackID: z.string().exactOptional(),
    summary: z
      .object({
        buckets: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                orgID: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                templateMetaName: z.string().exactOptional(),
                name: z.string().exactOptional(),
                description: z.string().exactOptional(),
                retentionPeriod: z.int().exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        checks: z
          .array(
            CheckDiscriminatorSchema.and(
              z
                .object({
                  kind: TemplateKindSchema.exactOptional(),
                  templateMetaName: z.string().exactOptional(),
                  labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                  envReferences: TemplateEnvReferencesSchema.exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional(),
        dashboards: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                orgID: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                templateMetaName: z.string().exactOptional(),
                name: z.string().exactOptional(),
                description: z.string().exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                charts: z.array(TemplateChartSchema).exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labels: z.array(TemplateSummaryLabelSchema).exactOptional(),
        labelMappings: z
          .array(
            z
              .object({
                status: z.string().exactOptional(),
                resourceTemplateMetaName: z.string().exactOptional(),
                resourceName: z.string().exactOptional(),
                resourceID: z.string().exactOptional(),
                resourceType: z.string().exactOptional(),
                labelTemplateMetaName: z.string().exactOptional(),
                labelName: z.string().exactOptional(),
                labelID: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        missingEnvRefs: z.array(z.string()).exactOptional(),
        missingSecrets: z.array(z.string()).exactOptional(),
        notificationEndpoints: z
          .array(
            NotificationEndpointDiscriminatorSchema.and(
              z
                .object({
                  kind: TemplateKindSchema.exactOptional(),
                  templateMetaName: z.string().exactOptional(),
                  labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                  envReferences: TemplateEnvReferencesSchema.exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional(),
        notificationRules: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                templateMetaName: z.string().exactOptional(),
                name: z.string().exactOptional(),
                description: z.string().exactOptional(),
                endpointTemplateMetaName: z.string().exactOptional(),
                endpointID: z.string().exactOptional(),
                endpointType: z.string().exactOptional(),
                every: z.string().exactOptional(),
                offset: z.string().exactOptional(),
                messageTemplate: z.string().exactOptional(),
                status: z.string().exactOptional(),
                statusRules: z
                  .array(
                    z
                      .object({
                        currentLevel: z.string().exactOptional(),
                        previousLevel: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                tagRules: z
                  .array(
                    z
                      .object({
                        key: z.string().exactOptional(),
                        value: z.string().exactOptional(),
                        operator: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        tasks: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                templateMetaName: z.string().exactOptional(),
                id: z.string().exactOptional(),
                name: z.string().exactOptional(),
                cron: z.string().exactOptional(),
                description: z.string().exactOptional(),
                every: z.string().exactOptional(),
                offset: z.string().exactOptional(),
                query: z.string().exactOptional(),
                status: z.string().exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        telegrafConfigs: z
          .array(
            TelegrafRequestSchema.and(
              z
                .object({
                  kind: TemplateKindSchema.exactOptional(),
                  templateMetaName: z.string().exactOptional(),
                  labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                  envReferences: TemplateEnvReferencesSchema.exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional(),
        variables: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                templateMetaName: z.string().exactOptional(),
                id: z.string().exactOptional(),
                orgID: z.string().exactOptional(),
                name: z.string().exactOptional(),
                description: z.string().exactOptional(),
                arguments: VariablePropertiesSchema.exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    diff: z
      .object({
        buckets: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    retentionRules: RetentionRulesSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    retentionRules: RetentionRulesSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        checks: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: CheckDiscriminatorSchema.exactOptional(),
                old: CheckDiscriminatorSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        dashboards: z
          .array(
            z
              .object({
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    charts: z.array(TemplateChartSchema).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    charts: z.array(TemplateChartSchema).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labels: z
          .array(
            z
              .object({
                stateStatus: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: z
                  .object({
                    name: z.string().exactOptional(),
                    color: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    name: z.string().exactOptional(),
                    color: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labelMappings: z
          .array(
            z
              .object({
                status: z.string().exactOptional(),
                resourceType: z.string().exactOptional(),
                resourceID: z.string().exactOptional(),
                resourceTemplateMetaName: z.string().exactOptional(),
                resourceName: z.string().exactOptional(),
                labelID: z.string().exactOptional(),
                labelTemplateMetaName: z.string().exactOptional(),
                labelName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        notificationEndpoints: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: NotificationEndpointDiscriminatorSchema.exactOptional(),
                old: NotificationEndpointDiscriminatorSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        notificationRules: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    endpointName: z.string().exactOptional(),
                    endpointID: z.string().exactOptional(),
                    endpointType: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    messageTemplate: z.string().exactOptional(),
                    status: z.string().exactOptional(),
                    statusRules: z
                      .array(
                        z
                          .object({
                            currentLevel: z.string().exactOptional(),
                            previousLevel: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                    tagRules: z
                      .array(
                        z
                          .object({
                            key: z.string().exactOptional(),
                            value: z.string().exactOptional(),
                            operator: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    endpointName: z.string().exactOptional(),
                    endpointID: z.string().exactOptional(),
                    endpointType: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    messageTemplate: z.string().exactOptional(),
                    status: z.string().exactOptional(),
                    statusRules: z
                      .array(
                        z
                          .object({
                            currentLevel: z.string().exactOptional(),
                            previousLevel: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                    tagRules: z
                      .array(
                        z
                          .object({
                            key: z.string().exactOptional(),
                            value: z.string().exactOptional(),
                            operator: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        tasks: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: z
                  .object({
                    name: z.string().exactOptional(),
                    cron: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    query: z.string().exactOptional(),
                    status: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    name: z.string().exactOptional(),
                    cron: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    query: z.string().exactOptional(),
                    status: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        telegrafConfigs: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: TelegrafRequestSchema.exactOptional(),
                old: TelegrafRequestSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        variables: z
          .array(
            z
              .object({
                kind: TemplateKindSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                id: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
                new: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    args: VariablePropertiesSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    args: VariablePropertiesSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z
      .array(
        z
          .object({
            kind: TemplateKindSchema.exactOptional(),
            reason: z.string().exactOptional(),
            fields: z.array(z.string()).exactOptional(),
            indexes: z.array(z.int()).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateSummary')

const StackSchema = z
  .object({
    id: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    events: z
      .array(
        z
          .object({
            eventType: z.string().exactOptional(),
            name: z.string().exactOptional(),
            description: z.string().exactOptional(),
            sources: z.array(z.string()).exactOptional(),
            resources: z
              .array(
                z
                  .object({
                    apiVersion: z.string().exactOptional(),
                    resourceID: z.string().exactOptional(),
                    kind: TemplateKindSchema.exactOptional(),
                    templateMetaName: z.string().exactOptional(),
                    associations: z
                      .array(
                        z
                          .object({
                            kind: TemplateKindSchema.exactOptional(),
                            metaName: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                    links: z
                      .object({ self: z.string().exactOptional() })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            urls: z.array(z.string()).exactOptional(),
            updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stack')

const RunSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    taskID: z.string().exactOptional().openapi({ readOnly: true }),
    status: z
      .enum(['scheduled', 'started', 'failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    scheduledFor: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The time [RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp) used for the run's `now` option.",
      }),
    log: z
      .array(LogEventSchema)
      .exactOptional()
      .openapi({ description: 'An array of logs associated with the run.', readOnly: true }),
    flux: z
      .string()
      .exactOptional()
      .openapi({ description: 'Flux used for the task', readOnly: true }),
    startedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'The time ([RFC3339Nano date/time format](https://go.dev/src/time/format.go)) the run started executing.',
        example: '2006-01-02T15:04:05.999999999Z07:00',
      }),
    finishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'The time ([RFC3339Nano date/time format](https://go.dev/src/time/format.go)) the run finished executing.',
        example: '2006-01-02T15:04:05.999999999Z07:00',
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'The time ([RFC3339Nano date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339nano-timestamp)) the run was manually requested.',
        example: '2006-01-02T15:04:05.999999999Z07:00',
      }),
    links: z
      .object({
        self: z.url().exactOptional(),
        task: z.url().exactOptional(),
        retry: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          self: '/api/v2/tasks/1/runs/1',
          task: '/api/v2/tasks/1',
          retry: '/api/v2/tasks/1/runs/1/retry',
        },
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Run')

const RunsSchema = z
  .object({ links: LinksSchema.exactOptional(), runs: z.array(RunSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Runs')

const RunManuallySchema = z
  .object({
    scheduledFor: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The time [RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)\nused for the run's `now` option.\nDefault is the server _now_ time.\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('RunManually')

const UserResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true, description: 'The user ID.\n' }),
    name: z.string().openapi({ description: 'The user name.\n' }),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({
        description: "The status of a user.\nAn inactive user can't read or write resources.\n",
      }),
    links: z
      .object({ self: z.url().exactOptional() })
      .exactOptional()
      .openapi({ readOnly: true, example: { self: '/api/v2/users/1' }, required: [] }),
  })
  .openapi({ required: ['name'] })
  .openapi('UserResponse')

const FlagsSchema = z.looseObject({}).openapi('Flags')

const ResourceMemberSchema = UserResponseSchema.and(
  z
    .object({ role: z.literal('member').default('member').exactOptional() })
    .openapi({ required: [] }),
).openapi('ResourceMember')

const ResourceMembersSchema = z
  .object({
    links: z.object({ self: z.url().exactOptional() }).exactOptional().openapi({ required: [] }),
    users: z.array(ResourceMemberSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceMembers')

const ResourceOwnerSchema = UserResponseSchema.and(
  z.object({ role: z.literal('owner').default('owner').exactOptional() }).openapi({ required: [] }),
).openapi('ResourceOwner')

const ResourceOwnersSchema = z
  .object({
    links: z.object({ self: z.url().exactOptional() }).exactOptional().openapi({ required: [] }),
    users: z.array(ResourceOwnerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceOwners')

const FluxSuggestionSchema = z
  .object({
    name: z.string().exactOptional(),
    params: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FluxSuggestion')

const FluxSuggestionsSchema = z
  .object({ funcs: z.array(FluxSuggestionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FluxSuggestions')

const RoutesSchema = z
  .object({
    authorizations: z.url().exactOptional(),
    backup: z.url().exactOptional(),
    buckets: z.url().exactOptional(),
    dashboards: z.url().exactOptional(),
    external: z
      .object({ statusFeed: z.url().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    variables: z.url().exactOptional(),
    me: z.url().exactOptional(),
    notificationRules: z.url().exactOptional(),
    notificationEndpoints: z.url().exactOptional(),
    flags: z.url().exactOptional(),
    invocableScripts: z.url().exactOptional(),
    labels: z.url().exactOptional(),
    orgs: z.url().exactOptional(),
    query: z
      .object({
        self: z.url().exactOptional(),
        ast: z.url().exactOptional(),
        analyze: z.url().exactOptional(),
        suggestions: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    restore: z.url().exactOptional(),
    setup: z.url().exactOptional(),
    signin: z.url().exactOptional(),
    signout: z.url().exactOptional(),
    sources: z.url().exactOptional(),
    scrapers: z.url().exactOptional(),
    swagger: z.url().exactOptional(),
    system: z
      .object({
        metrics: z.url().exactOptional(),
        debug: z.url().exactOptional(),
        health: z.url().exactOptional(),
        ready: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    tasks: z.url().exactOptional(),
    checks: z.url().exactOptional(),
    telegraf: z
      .object({ plugins: z.url().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    telegrafs: z.url().exactOptional(),
    plugins: z.url().exactOptional(),
    users: z.url().exactOptional(),
    write: z.url().exactOptional(),
    delete: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Routes')

const ErrorSchema = z
  .object({
    code: z
      .enum([
        'internal error',
        'not implemented',
        'not found',
        'conflict',
        'invalid',
        'unprocessable entity',
        'empty value',
        'unavailable',
        'forbidden',
        'too many requests',
        'unauthorized',
        'method not allowed',
        'request too large',
        'unsupported media type',
      ])
      .openapi({ description: 'code is the machine-readable error code.', readOnly: true }),
    message: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Human-readable message.' }),
    op: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Describes the logical code operation when the error occurred. Useful for debugging.',
      }),
    err: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Stack of errors that occurred during processing of the request. Useful for debugging.',
      }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const LineProtocolErrorSchema = z
  .object({
    code: z
      .enum(['internal error', 'not found', 'conflict', 'invalid', 'empty value', 'unavailable'])
      .openapi({ description: 'Code is the machine-readable error code.', readOnly: true }),
    message: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Human-readable message.' }),
    op: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Describes the logical code operation when the error occurred. Useful for debugging.',
      }),
    err: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Stack of errors that occurred during processing of the request. Useful for debugging.',
      }),
    line: z
      .int32()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'First line in the request body that contains malformed data.',
      }),
  })
  .openapi({ required: ['code'] })
  .openapi('LineProtocolError')

const LineProtocolLengthErrorSchema = z
  .object({
    code: z
      .literal('invalid')
      .openapi({ description: 'Code is the machine-readable error code.', readOnly: true }),
    message: z.string().openapi({ readOnly: true, description: 'Human-readable message.' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('LineProtocolLengthError')

const FieldSchema: z.ZodType<FieldType> = z
  .lazy(() =>
    z
      .object({
        value: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'value is the value of the field.  Meaning of the value is implied by the `type` key',
          }),
        type: z
          .enum(['func', 'field', 'integer', 'number', 'regex', 'wildcard'])
          .exactOptional()
          .openapi({
            description:
              '`type` describes the field type. `func` is a function. `field` is a field reference.',
          }),
        alias: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Alias overrides the field name in the returned response.  Applies only if type is `func`',
          }),
        args: z
          .array(FieldSchema)
          .exactOptional()
          .openapi({ description: 'Args are the arguments to the function' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Field')

const ViewSchema = z
  .object({
    links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ readOnly: true, required: [] }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    properties: ViewPropertiesSchema,
  })
  .openapi({ required: ['name', 'properties'] })
  .openapi('View')

const ViewsSchema = z
  .object({
    links: z.object({ self: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    views: z.array(ViewSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Views')

const CellUpdateSchema = z
  .object({
    x: z.int32().exactOptional(),
    y: z.int32().exactOptional(),
    w: z.int32().exactOptional(),
    h: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CellUpdate')

const CreateCellSchema = z
  .object({
    name: z.string().exactOptional(),
    x: z.int32().exactOptional(),
    y: z.int32().exactOptional(),
    w: z.int32().exactOptional(),
    h: z.int32().exactOptional(),
    usingView: z
      .string()
      .exactOptional()
      .openapi({ description: 'Makes a copy of the provided view.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateCell')

const AnalyzeQueryResponseSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            line: z.int().exactOptional(),
            column: z.int().exactOptional(),
            character: z.int().exactOptional(),
            message: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyzeQueryResponse')

const CellSchema = z
  .object({
    id: z.string().exactOptional(),
    links: z
      .object({ self: z.string().exactOptional(), view: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    x: z.int32().exactOptional(),
    y: z.int32().exactOptional(),
    w: z.int32().exactOptional(),
    h: z.int32().exactOptional(),
    viewID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference to a view from the views API.' }),
  })
  .openapi({ required: [] })
  .openapi('Cell')

const CellWithViewPropertiesSchema = CellSchema.and(
  z
    .object({ name: z.string().exactOptional(), properties: ViewPropertiesSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('CellWithViewProperties')

const CellsWithViewPropertiesSchema = z
  .array(CellWithViewPropertiesSchema)
  .openapi('CellsWithViewProperties')

const CellsSchema = z.array(CellSchema).openapi('Cells')

const SecretsSchema = z
  .record(z.string(), z.string())
  .openapi({ example: { apikey: 'abc123xyz' } })
  .openapi('Secrets')

const SecretKeysSchema = z
  .object({ secrets: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('SecretKeys')

const SecretKeysResponseSchema = SecretKeysSchema.and(
  z
    .object({
      links: z
        .object({ self: z.string().exactOptional(), org: z.string().exactOptional() })
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
    })
    .openapi({ required: [] }),
).openapi('SecretKeysResponse')

const CreateDashboardRequestSchema = z
  .object({
    orgID: z
      .string()
      .openapi({ description: 'The ID of the organization that owns the dashboard.' }),
    name: z.string().openapi({ description: 'The user-facing name of the dashboard.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-facing description of the dashboard.' }),
  })
  .openapi({ required: ['orgID', 'name'] })
  .openapi('CreateDashboardRequest')

const DashboardWithViewPropertiesSchema = CreateDashboardRequestSchema.and(
  z
    .object({
      links: z
        .object({
          self: LinkSchema.exactOptional(),
          cells: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
          labels: LinkSchema.exactOptional(),
          org: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          example: {
            self: '/api/v2/dashboards/1',
            cells: '/api/v2/dashboards/1/cells',
            owners: '/api/v2/dashboards/1/owners',
            members: '/api/v2/dashboards/1/members',
            labels: '/api/v2/dashboards/1/labels',
            org: '/api/v2/labels/1',
          },
          required: [],
        }),
      id: z.string().exactOptional().openapi({ readOnly: true }),
      meta: z
        .object({
          createdAt: z.iso.datetime({ offset: true }).exactOptional(),
          updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
      cells: CellsWithViewPropertiesSchema.exactOptional(),
      labels: LabelsSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('DashboardWithViewProperties')

const DashboardSchema = CreateDashboardRequestSchema.and(
  z
    .object({
      links: z
        .object({
          self: LinkSchema.exactOptional(),
          cells: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
          labels: LinkSchema.exactOptional(),
          org: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          example: {
            self: '/api/v2/dashboards/1',
            cells: '/api/v2/dashboards/1/cells',
            owners: '/api/v2/dashboards/1/owners',
            members: '/api/v2/dashboards/1/members',
            labels: '/api/v2/dashboards/1/labels',
            org: '/api/v2/labels/1',
          },
          required: [],
        }),
      id: z.string().exactOptional().openapi({ readOnly: true }),
      meta: z
        .object({
          createdAt: z.iso.datetime({ offset: true }).exactOptional(),
          updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
      cells: CellsSchema.exactOptional(),
      labels: LabelsSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Dashboard')

const DashboardsSchema = z
  .object({
    links: LinksSchema.exactOptional(),
    dashboards: z.array(DashboardSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dashboards')

const TelegrafPluginRequestSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    plugins: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            name: z.string().exactOptional(),
            alias: z.string().exactOptional(),
            description: z.string().exactOptional(),
            config: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    metadata: z
      .object({ buckets: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    config: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafPluginRequest')

const TelegrafSchema = TelegrafRequestSchema.and(
  z
    .object({
      id: z.string().exactOptional().openapi({ readOnly: true }),
      links: z
        .object({
          self: LinkSchema.exactOptional(),
          labels: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          readOnly: true,
          example: {
            self: '/api/v2/telegrafs/1',
            lables: '/api/v2/telegrafs/1/labels',
            owners: '/api/v2/telegrafs/1/owners',
            members: '/api/v2/telegrafs/1/members',
          },
          required: [],
        }),
      labels: LabelsSchema.exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
).openapi('Telegraf')

const TelegrafsSchema = z
  .object({ configurations: z.array(TelegrafSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Telegrafs')

const TelegrafPluginSchema = z
  .object({
    type: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    config: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafPlugin')

const TelegrafPluginsSchema = z
  .object({
    version: z.string().exactOptional(),
    os: z.string().exactOptional(),
    plugins: z.array(TelegrafPluginSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafPlugins')

const IsOnboardingSchema = z
  .object({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If `true`, the InfluxDB instance hasn't had initial setup;\n`false` otherwise.\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('IsOnboarding')

const PasswordResetBodySchema = z
  .object({ password: z.string() })
  .openapi({ required: ['password'] })
  .openapi('PasswordResetBody')

const AddResourceMemberRequestBodySchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the user to add to the resource.\n' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the user to add to the resource.\n' }),
  })
  .openapi({ required: ['id'] })
  .openapi('AddResourceMemberRequestBody')

const HealthCheckMeasureSchema = z
  .object({ unit: z.string().openapi({ example: 'shards' }) })
  .catchall(z.number())
  .openapi({
    description:
      'A measure group: one or more numeric values that share a unit.\nDurations are float seconds with `unit: seconds`.\n',
    required: ['unit'],
    example: { completed: 94, total: 200, unit: 'shards' },
  })
  .openapi('HealthCheckMeasure')

const HealthCheckSchema: z.ZodType<HealthCheckType> = z
  .lazy(() =>
    z
      .object({
        name: z.string(),
        message: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Status detail. For a failing check, may contain the raw error text.\n',
          }),
        checks: z.array(HealthCheckSchema).exactOptional(),
        status: z.enum(['pass', 'fail']),
        version: z
          .string()
          .exactOptional()
          .openapi({ description: 'Build version. Returned only at the top level.' }),
        commit: z
          .string()
          .exactOptional()
          .openapi({ description: 'Build commit. Returned only at the top level.' }),
      })
      .catchall(HealthCheckMeasureSchema)
      .openapi({
        description:
          'A health check.\nA check can also report measure groups, such as `progress` or `failures`.\nEach key other than `name`, `status`, `message`, and `checks` whose value\nis an object is a measure group.\n',
        required: ['name', 'status'],
      }),
  )
  .openapi('HealthCheck')

const ReadySchema = z
  .object({
    status: z.enum(['ready', 'starting']).exactOptional(),
    started: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-03-13T10:09:33.891196-04:00' }),
    up: z.string().exactOptional().openapi({ example: '14m45.911966424s' }),
    uptime: HealthCheckMeasureSchema.exactOptional().openapi({
      description: 'Time since `started`, in float seconds.',
    }),
    checks: z
      .array(HealthCheckSchema)
      .exactOptional()
      .openapi({
        description: "Ready gates that haven't passed.\nOmitted when `status` is `ready`.\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('Ready')

const LabelCreateRequestSchema = z
  .object({
    orgID: z.string(),
    name: z.string(),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs associated with this label.\n\nTo remove a property, send an update with an empty value (`""`) for the key.\n',
        example: { color: 'ffb3b3', description: 'this is a description' },
      }),
  })
  .openapi({ required: ['orgID', 'name'] })
  .openapi('LabelCreateRequest')

const LabelUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    properties: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              'Key-value pairs associated with this label.\n\nTo remove a property, send an update with an empty value (`""`) for the key.\n',
          }),
      )
      .exactOptional()
      .openapi({ example: { color: 'ffb3b3', description: 'this is a description' } }),
  })
  .openapi({ required: [] })
  .openapi('LabelUpdate')

const LabelMappingSchema = z
  .object({
    labelID: z.string().openapi({ description: 'A label ID.\nSpecifies the label to attach.\n' }),
  })
  .openapi({
    description: 'A _label mapping_ contains a `label` ID to attach to a resource.',
    required: ['labelID'],
  })
  .openapi('LabelMapping')

const LabelsResponseSchema = z
  .object({ labels: LabelsSchema.exactOptional(), links: LinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LabelsResponse')

const LabelResponseSchema = z
  .object({ label: LabelSchema.exactOptional(), links: LinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LabelResponse')

const ASTResponseSchema = z
  .object({ ast: PackageSchema.exactOptional() })
  .openapi({ description: 'Contains the AST for the supplied Flux query', required: [] })
  .openapi('ASTResponse')

const WritePrecisionSchema = z.enum(['ms', 's', 'us', 'ns']).openapi('WritePrecision')

const FluxResponseSchema = z
  .object({ flux: z.string().exactOptional() })
  .openapi({ description: 'Rendered flux that backs the check or notification.', required: [] })
  .openapi('FluxResponse')

const CheckPatchSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckPatch')

const PostCheckSchema = CheckDiscriminatorSchema.openapi('PostCheck')

const ChecksSchema = z
  .object({ checks: z.array(CheckSchema).exactOptional(), links: LinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Checks')

const RuleStatusLevelSchema = z
  .enum(['UNKNOWN', 'OK', 'INFO', 'CRIT', 'WARN', 'ANY'])
  .openapi({ description: 'The state to record if check matches a criteria.' })
  .openapi('RuleStatusLevel')

const NotificationRuleUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationRuleUpdate')

const TagRuleSchema = z
  .object({
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
    operator: z.enum(['equal', 'notequal', 'equalregex', 'notequalregex']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagRule')

const StatusRuleSchema = z
  .object({
    currentLevel: RuleStatusLevelSchema.exactOptional(),
    previousLevel: RuleStatusLevelSchema.exactOptional(),
    count: z.int().exactOptional(),
    period: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatusRule')

const NotificationRuleBaseSchema = z
  .object({
    latestCompleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)) of the latest scheduled and completed run.',
        readOnly: true,
      }),
    lastRunStatus: z
      .enum(['failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    lastRunError: z.string().exactOptional().openapi({ readOnly: true }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    endpointID: z.string(),
    orgID: z
      .string()
      .openapi({ description: 'The ID of the organization that owns this notification rule.' }),
    taskID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the task associated with this notification rule.' }),
    ownerID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of creator used to create this notification rule.',
        readOnly: true,
      }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    status: TaskStatusTypeSchema,
    name: z
      .string()
      .openapi({ description: 'Human-readable name describing the notification rule.' }),
    sleepUntil: z.string().exactOptional(),
    every: z
      .string()
      .exactOptional()
      .openapi({ description: 'The notification repetition interval.' }),
    offset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration to delay after the schedule, before executing check.' }),
    runbookLink: z.string().exactOptional(),
    limitEvery: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Don't notify me more than <limit> times every <limitEvery> seconds. If set, limit cannot be empty.",
      }),
    limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Don't notify me more than <limit> times every <limitEvery> seconds. If set, limitEvery cannot be empty.",
      }),
    tagRules: z
      .array(TagRuleSchema)
      .exactOptional()
      .openapi({ description: 'List of tag rules the notification rule attempts to match.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the notification rule.' }),
    statusRules: z
      .array(StatusRuleSchema)
      .min(1)
      .openapi({ description: 'List of status rules the notification rule attempts to match.' }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({
        self: LinkSchema.exactOptional().openapi({ description: 'The URL for this endpoint.' }),
        labels: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve labels for this notification rule.',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve members for this notification rule.',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve owners for this notification rule.',
        }),
        query: LinkSchema.exactOptional().openapi({
          description: 'The URL to retrieve the Flux script for this notification rule.',
        }),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          self: '/api/v2/notificationRules/1',
          labels: '/api/v2/notificationRules/1/labels',
          members: '/api/v2/notificationRules/1/members',
          owners: '/api/v2/notificationRules/1/owners',
          query: '/api/v2/notificationRules/1/query',
        },
        required: [],
      }),
  })
  .openapi({ required: ['orgID', 'status', 'name', 'statusRules', 'endpointID'] })
  .openapi('NotificationRuleBase')

const SlackNotificationRuleBaseSchema = z
  .object({
    type: z.literal('slack'),
    channel: z.string().exactOptional(),
    messageTemplate: z.string(),
  })
  .openapi({ required: ['type', 'messageTemplate'] })
  .openapi('SlackNotificationRuleBase')

const SlackNotificationRuleSchema = NotificationRuleBaseSchema.and(
  SlackNotificationRuleBaseSchema,
).openapi('SlackNotificationRule')

const SMTPNotificationRuleBaseSchema = z
  .object({
    type: z.literal('smtp'),
    subjectTemplate: z.string(),
    bodyTemplate: z.string().exactOptional(),
    to: z.string(),
  })
  .openapi({ required: ['type', 'subjectTemplate', 'to'] })
  .openapi('SMTPNotificationRuleBase')

const SMTPNotificationRuleSchema = NotificationRuleBaseSchema.and(
  SMTPNotificationRuleBaseSchema,
).openapi('SMTPNotificationRule')

const PagerDutyNotificationRuleBaseSchema = z
  .object({ type: z.literal('pagerduty'), messageTemplate: z.string() })
  .openapi({ required: ['type', 'messageTemplate'] })
  .openapi('PagerDutyNotificationRuleBase')

const PagerDutyNotificationRuleSchema = NotificationRuleBaseSchema.and(
  PagerDutyNotificationRuleBaseSchema,
).openapi('PagerDutyNotificationRule')

const HTTPNotificationRuleBaseSchema = z
  .object({ type: z.literal('http'), url: z.string().exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('HTTPNotificationRuleBase')

const HTTPNotificationRuleSchema = NotificationRuleBaseSchema.and(
  HTTPNotificationRuleBaseSchema,
).openapi('HTTPNotificationRule')

const TelegramNotificationRuleBaseSchema = z
  .object({
    type: z
      .literal('telegram')
      .openapi({
        description: 'The discriminator between other types of notification rules is "telegram".',
      }),
    messageTemplate: z
      .string()
      .openapi({ description: 'The message template as a flux interpolated string.' }),
    parseMode: z
      .enum(['MarkdownV2', 'HTML', 'Markdown'])
      .exactOptional()
      .openapi({
        description:
          'Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options. Defaults to "MarkdownV2".',
      }),
    disableWebPagePreview: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disables preview of web links in the sent messages when "true". Defaults to "false".',
      }),
  })
  .openapi({ required: ['type', 'messageTemplate', 'channel'] })
  .openapi('TelegramNotificationRuleBase')

const TelegramNotificationRuleSchema = NotificationRuleBaseSchema.and(
  TelegramNotificationRuleBaseSchema,
).openapi('TelegramNotificationRule')

const NotificationRuleDiscriminatorSchema = z
  .xor([
    SlackNotificationRuleSchema,
    SMTPNotificationRuleSchema,
    PagerDutyNotificationRuleSchema,
    HTTPNotificationRuleSchema,
    TelegramNotificationRuleSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        slack: '#/components/schemas/SlackNotificationRule',
        smtp: '#/components/schemas/SMTPNotificationRule',
        pagerduty: '#/components/schemas/PagerDutyNotificationRule',
        http: '#/components/schemas/HTTPNotificationRule',
        telegram: '#/components/schemas/TelegramNotificationRule',
      },
    },
  })
  .openapi('NotificationRuleDiscriminator')

const NotificationRuleSchema = NotificationRuleDiscriminatorSchema.openapi('NotificationRule')

const PostNotificationRuleSchema =
  NotificationRuleDiscriminatorSchema.openapi('PostNotificationRule')

const NotificationRulesSchema = z
  .object({
    notificationRules: z.array(NotificationRuleSchema).exactOptional(),
    links: LinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationRules')

const NotificationEndpointUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationEndpointUpdate')

const NotificationEndpointSchema =
  NotificationEndpointDiscriminatorSchema.openapi('NotificationEndpoint')

const PostNotificationEndpointSchema = NotificationEndpointDiscriminatorSchema.openapi(
  'PostNotificationEndpoint',
)

const NotificationEndpointsSchema = z
  .object({
    notificationEndpoints: z.array(NotificationEndpointSchema).exactOptional(),
    links: LinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationEndpoints')

const DBRPSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The resource ID that InfluxDB uses to uniquely identify the database retention policy (DBRP) mapping.\n',
        readOnly: true,
      }),
    orgID: z
      .string()
      .openapi({
        description:
          'An organization ID.\nIdentifies the [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) that owns the mapping.\n',
      }),
    bucketID: z
      .string()
      .openapi({
        description:
          'A bucket ID.\nIdentifies the bucket used as the target for the translation.\n',
      }),
    database: z
      .string()
      .openapi({ description: 'A database name.\nIdentifies the InfluxDB v1 database.\n' }),
    retention_policy: z
      .string()
      .openapi({
        description:
          'A [retention policy](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#retention-policy-rp) name.\nIdentifies the InfluxDB v1 retention policy mapping.\n',
      }),
    default: z
      .boolean()
      .openapi({
        description:
          "If set to `true`, this DBRP mapping is the default retention policy\nfor the database (specified by the `database` property's value).\n",
      }),
    virtual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates an autogenerated, virtual mapping based on the bucket name. Currently only available in OSS.',
      }),
    links: LinksSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'orgID', 'bucketID', 'database', 'retention_policy', 'default'] })
  .openapi('DBRP')

const DBRPsSchema = z
  .object({ content: z.array(DBRPSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DBRPs')

const DBRPUpdateSchema = z
  .object({
    retention_policy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A [retention policy](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#retention-policy-rp) name.\nIdentifies the InfluxDB v1 retention policy mapping.\n',
      }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` to use this DBRP mapping as the default retention policy\nfor the database (specified by the `database` property's value).\nTo remove the default mapping, set to `false`.\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('DBRPUpdate')

const DBRPCreateSchema = z
  .object({
    org: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An organization name.\nIdentifies the [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) that owns the mapping.\n',
      }),
    orgID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An organization ID.\nIdentifies the [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) that owns the mapping.\n',
      }),
    bucketID: z
      .string()
      .openapi({
        description:
          'A bucket ID.\nIdentifies the bucket used as the target for the translation.\n',
      }),
    database: z
      .string()
      .openapi({ description: 'A database name.\nIdentifies the InfluxDB v1 database.\n' }),
    retention_policy: z
      .string()
      .openapi({
        description:
          'A [retention policy](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#retention-policy-rp) name.\nIdentifies the InfluxDB v1 retention policy mapping.\n',
      }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to `true` to use this DBRP mapping as the default retention policy\nfor the database (specified by the `database` property's value).\n",
      }),
  })
  .openapi({ required: ['bucketID', 'database', 'retention_policy'] })
  .openapi('DBRPCreate')

const DBRPGetSchema = z
  .object({ content: DBRPSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DBRPGet')

const UserSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'If inactive the user is inactive.' }),
    role: z.enum(['owner', 'member']).exactOptional(),
    org_id: z.string().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('User')

const UsersSchema = z
  .object({
    links: z.object({ self: z.url().exactOptional() }).exactOptional().openapi({ required: [] }),
    users: z.array(UserResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Users')

const LimitSchema = z
  .object({
    orgID: z.string().exactOptional(),
    rate: z
      .object({
        queryTime: z.int().openapi({ description: 'Query Time in nanoseconds' }),
        readKBs: z.int().openapi({ description: 'Query limit in kb/sec. 0 is unlimited.' }),
        concurrentReadRequests: z
          .int()
          .openapi({ description: 'Allowed concurrent queries. 0 is unlimited.' }),
        writeKBs: z.int().openapi({ description: 'Write limit in kb/sec. 0 is unlimited.' }),
        concurrentWriteRequests: z
          .int()
          .openapi({ description: 'Allowed concurrent writes. 0 is unlimited.' }),
        cardinality: z
          .int()
          .openapi({ description: 'Allowed organization total cardinality. 0 is unlimited.' }),
        concurrentDeleteRequests: z
          .int()
          .exactOptional()
          .openapi({ description: 'Allowed organization concurrent outstanding delete requests.' }),
        deleteRequestsPerSecond: z
          .int()
          .exactOptional()
          .openapi({ description: 'Allowed organization delete request rate.' }),
      })
      .openapi({
        required: [
          'readKBs',
          'queryTime',
          'concurrentReadRequests',
          'writeKBs',
          'concurrentWriteRequests',
          'cardinality',
        ],
      }),
    bucket: z
      .object({
        maxBuckets: z.int(),
        maxRetentionDuration: z
          .int()
          .openapi({
            description: 'Max bucket retention duration in nanoseconds. 0 is unlimited.',
          }),
      })
      .openapi({ required: ['maxBuckets', 'maxRetentionDuration'] }),
    task: z.object({ maxTasks: z.int() }).openapi({ required: ['maxTasks'] }),
    dashboard: z.object({ maxDashboards: z.int() }).openapi({ required: ['maxDashboards'] }),
    check: z.object({ maxChecks: z.int() }).openapi({ required: ['maxChecks'] }),
    notificationRule: z
      .object({
        maxNotifications: z.int(),
        blockedNotificationRules: z
          .string()
          .exactOptional()
          .openapi({
            description: 'comma separated list of notification rules',
            example: 'http,pagerduty',
          }),
      })
      .openapi({ required: ['maxNotifications', 'blockNotificationRules'] }),
    notificationEndpoint: z
      .object({
        blockedNotificationEndpoints: z
          .string()
          .exactOptional()
          .openapi({
            description: 'comma separated list of notification endpoints',
            example: 'http,pagerduty',
          }),
      })
      .openapi({ required: ['blockNotificationEndpoints'] }),
    stack: z
      .object({ enabled: z.boolean() })
      .exactOptional()
      .openapi({ required: ['enabled'] }),
    timeout: z
      .object({ queryUnconditionalTimeoutSeconds: z.int(), queryidleWriteTimeoutSeconds: z.int() })
      .exactOptional()
      .openapi({ required: ['queryUnconditionalTimeoutSeconds', 'queryidleWriteTimeoutSeconds'] }),
    ioxQuery: z
      .object({ partitions: z.int(), parquetFiles: z.int() })
      .exactOptional()
      .openapi({ required: ['partitions', 'parquetFiles'] }),
    features: z
      .object({
        allowDelete: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'allow delete predicate endpoint' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'These are org limits similar to those configured in/by quartz.',
    required: [
      'rate',
      'bucket',
      'task',
      'dashboard',
      'check',
      'notificationRule',
      'notificationEndpoint',
    ],
  })
  .openapi('Limit')

const OnboardingRequestSchema = z
  .object({
    username: z.string(),
    password: z.string().exactOptional(),
    org: z.string(),
    bucket: z.string(),
    retentionPeriodHrs: z.int().exactOptional().openapi({ deprecated: true }),
    retentionPeriodSeconds: z.int().exactOptional(),
    limit: LimitSchema.exactOptional(),
  })
  .openapi({ required: ['username', 'org', 'bucket'] })
  .openapi('OnboardingRequest')

const OnboardingResponseSchema = z
  .object({
    user: UserResponseSchema.exactOptional(),
    org: OrganizationSchema.exactOptional(),
    bucket: BucketSchema.exactOptional(),
    auth: AuthorizationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnboardingResponse')

const VariableSchema = z
  .object({
    links: z
      .object({
        self: z.url().exactOptional(),
        org: z.url().exactOptional(),
        labels: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ readOnly: true, required: [] }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    orgID: z.string(),
    name: z.string(),
    description: z.string().exactOptional(),
    selected: z.array(z.string()).exactOptional(),
    sort_order: z.int().exactOptional(),
    labels: LabelsSchema.exactOptional(),
    arguments: VariablePropertiesSchema,
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['name', 'orgID', 'arguments'] })
  .openapi('Variable')

const VariablesSchema = z
  .object({ variables: z.array(VariableSchema).exactOptional() })
  .openapi({
    example: {
      variables: [
        {
          id: '1221432',
          name: ':ok:',
          selected: ['hello'],
          arguments: { type: 'constant', values: ['howdy', 'hello', 'hi', 'yo', 'oy'] },
        },
        {
          id: '1221432',
          name: ':ok:',
          selected: ['c'],
          arguments: {
            type: 'map',
            values: {
              a: 'fdjaklfdjkldsfjlkjdsa',
              b: 'dfaksjfkljekfajekdljfas',
              c: 'fdjksajfdkfeawfeea',
            },
          },
        },
        {
          id: '1221432',
          name: ':ok:',
          selected: ['host'],
          arguments: {
            type: 'query',
            query: 'from(bucket: "foo") |> showMeasurements()',
            language: 'flux',
          },
        },
      ],
    },
    required: [],
  })
  .openapi('Variables')

const ColumnDataTypeSchema = z
  .enum(['integer', 'float', 'boolean', 'string', 'unsigned'])
  .openapi('ColumnDataType')

const ColumnSemanticTypeSchema = z.enum(['timestamp', 'tag', 'field']).openapi('ColumnSemanticType')

const MeasurementSchemaColumnSchema = z
  .object({
    name: z.string(),
    type: ColumnSemanticTypeSchema,
    dataType: ColumnDataTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Definition of a measurement schema column.',
    example: { name: 'time', type: 'integer', format: 'unix timestamp' },
    required: ['name', 'type'],
  })
  .openapi('MeasurementSchemaColumn')

const MeasurementSchemaSchema = z
  .object({
    id: z.string().openapi({ readOnly: true }),
    orgID: z.string().exactOptional().openapi({ description: 'The ID of the organization.' }),
    bucketID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the bucket that the measurement schema is associated with.',
      }),
    name: z.string(),
    columns: z
      .array(MeasurementSchemaColumnSchema)
      .openapi({ description: 'Ordered collection of column definitions.' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ readOnly: true }),
  })
  .openapi({
    description: 'Definition of a measurement schema.',
    example: {
      id: '1a3c5e7f9b0a8642',
      orgID: '0a3c5e7f9b0a0001',
      bucketID: 'ba3c5e7f9b0a0010',
      name: 'cpu',
      columns: [
        { name: 'time', type: 'integer', format: 'unix timestamp' },
        { name: 'host', type: 'tag' },
        { name: 'region', type: 'tag' },
        { name: 'usage_user', type: 'field', dataType: 'float' },
        { name: 'usage_user', type: 'field', dataType: 'float' },
      ],
      createdAt: '2021-01-21T00:48:40.993Z',
      updatedAt: '2021-01-21T00:48:40.993Z',
    },
    required: ['id', 'name', 'columns', 'createdAt', 'updatedAt'],
  })
  .openapi('MeasurementSchema')

const MeasurementSchemaCreateRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The [measurement](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#measurement)\nname.\n',
      }),
    columns: z
      .array(MeasurementSchemaColumnSchema)
      .openapi({ description: 'Ordered collection of column definitions.' }),
  })
  .openapi({
    description: 'Create a new measurement schema.',
    example: {
      name: 'cpu',
      columns: [
        { name: 'time', type: 'integer', format: 'unix timestamp' },
        { name: 'host', type: 'tag' },
        { name: 'region', type: 'tag' },
        { name: 'usage_user', type: 'field', dataType: 'float' },
        { name: 'usage_user', type: 'field', dataType: 'float' },
      ],
    },
    required: ['name', 'columns'],
  })
  .openapi('MeasurementSchemaCreateRequest')

const MeasurementSchemaListSchema = z
  .object({ measurementSchemas: z.array(MeasurementSchemaSchema) })
  .openapi({
    description: 'A list of measurement schemas returning summary information',
    example: {
      measurementSchemas: [
        {
          id: '1a3c5e7f9b0a8642',
          orgID: '0a3c5e7f9b0a0001',
          bucketID: 'ba3c5e7f9b0a0010',
          name: 'cpu',
          createdAt: '2021-01-21T00:48:40.993Z',
          updatedAt: '2021-01-21T00:48:40.993Z',
        },
        {
          id: '1a3c5e7f9b0a8643',
          orgID: '0a3c5e7f9b0a0001',
          bucketID: 'ba3c5e7f9b0a0010',
          name: 'memory',
          createdAt: '2021-01-21T00:48:40.993Z',
          updatedAt: '2021-01-21T00:48:40.993Z',
        },
        {
          id: '1a3c5e7f9b0a8644',
          orgID: '0a3c5e7f9b0a0001',
          bucketID: 'ba3c5e7f9b0a0010',
          name: 'disk',
          createdAt: '2021-01-21T00:48:40.993Z',
          updatedAt: '2021-01-21T00:48:40.993Z',
        },
      ],
    },
    required: ['measurementSchemas'],
  })
  .openapi('MeasurementSchemaList')

const MeasurementSchemaUpdateRequestSchema = z
  .object({
    columns: z
      .array(MeasurementSchemaColumnSchema)
      .openapi({ description: 'An ordered collection of column definitions' }),
  })
  .openapi({
    description: 'Update an existing measurement schema',
    example: {
      columns: [
        { name: 'time', type: 'integer', format: 'unix timestamp' },
        { name: 'host', type: 'tag' },
        { name: 'region', type: 'tag' },
        { name: 'usage_user', type: 'field', dataType: 'float' },
        { name: 'usage_user', type: 'field', dataType: 'float' },
      ],
    },
    required: ['columns'],
  })
  .openapi('MeasurementSchemaUpdateRequest')

const TaskSchema = z
  .object({
    id: z.string().openapi({ readOnly: true }),
    orgID: z
      .string()
      .openapi({
        description:
          'An [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) ID.\nSpecifies the organization that owns the task.\n',
      }),
    org: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) name.\nSpecifies the organization that owns the task.\n',
      }),
    name: z.string().openapi({ description: 'The name of the task.' }),
    ownerID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) ID.\nSpecifies the owner of the task.\n\nTo find a user ID, you can use the\n[`GET /api/v2/users` endpoint](#operation/GetUsers) to\nlist users.\n',
      }),
    description: z.string().exactOptional().openapi({ description: 'A description of the task.' }),
    status: TaskStatusTypeSchema.exactOptional(),
    labels: LabelsSchema.exactOptional(),
    authorizationID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An authorization ID.\nSpecifies the authorization used when the task communicates with the query engine.\n\nTo find an authorization ID, use the\n[`GET /api/v2/authorizations` endpoint](#operation/GetAuthorizations) to\nlist authorizations.\n',
      }),
    flux: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Flux script that the task executes.\n\n#### Limitations\n  - If you use the `flux` property, you can't use the `scriptID` and `scriptParameters` properties.\n",
      }),
    every: z.iso
      .duration()
      .exactOptional()
      .openapi({
        description:
          'The interval ([duration literal](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)) at which the task runs. `every` also determines when the task first runs, depending on the specified time.',
      }),
    cron: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A [Cron expression](https://en.wikipedia.org/wiki/Cron#Overview) that defines the schedule on which the task runs. InfluxDB uses the system time when evaluating Cron expressions.',
      }),
    offset: z.iso
      .duration()
      .exactOptional()
      .openapi({
        description:
          'A [duration](https://docs.influxdata.com/flux/v0.x/spec/lexical-elements/#duration-literals) to delay execution of the task after the scheduled time has elapsed. `0` removes the offset.',
      }),
    latestCompleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)) of the latest scheduled and completed run.',
        readOnly: true,
      }),
    lastRunStatus: z
      .enum(['failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    lastRunError: z.string().exactOptional().openapi({ readOnly: true }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    links: z
      .object({
        self: LinkSchema.exactOptional(),
        owners: LinkSchema.exactOptional(),
        members: LinkSchema.exactOptional(),
        runs: LinkSchema.exactOptional(),
        logs: LinkSchema.exactOptional(),
        labels: LinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        example: {
          self: '/api/v2/tasks/1',
          owners: '/api/v2/tasks/1/owners',
          members: '/api/v2/tasks/1/members',
          labels: '/api/v2/tasks/1/labels',
          runs: '/api/v2/tasks/1/runs',
          logs: '/api/v2/tasks/1/logs',
        },
        required: [],
      }),
    scriptID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A script ID.\nSpecifies the [invokable script](#tag/Invokable-Scripts) that the task executes.\n\n#### Limitations\n\n- If you use the `scriptID` property, you can't use the `flux` property.\n\n#### Related guides\n\n- [Create a task that references a script](https://docs.influxdata.com/influxdb/cloud/process-data/manage-tasks/create-task/#create-a-task-that-references-a-script)\n",
      }),
    scriptParameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "Key-value pairs for `params` in the script.\nDefines the invocation parameter values passed to the script specified by `scriptID`.\nWhen running the task, InfluxDB executes the script with the parameters\nyou provide.\n\n#### Limitations\n\n- To use `scriptParameters`, you must provide a `scriptID`.\n- If you use the `scriptID` and `scriptParameters` properties, you can't use the `flux` property.\n",
      }),
  })
  .openapi({ required: ['id', 'name', 'orgID'] })
  .openapi('Task')

const TasksSchema = z
  .object({
    links: LinksSchema.exactOptional().openapi({ readOnly: true }),
    tasks: z.array(TaskSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tasks')

const TaskCreateRequestSchema = z
  .object({
    orgID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the organization that owns the task.' }),
    org: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organization that owns the task.' }),
    status: TaskStatusTypeSchema.exactOptional(),
    flux: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Flux script that the task runs.\n\n#### Limitations\n\n- If you use the `flux` property, you can't use the `scriptID` and `scriptParameters` properties.\n",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the task.' }),
    scriptID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the script that the task runs.\n\n#### Limitations\n\n- If you use the `scriptID` property, you can't use the `flux` property.\n",
      }),
    scriptParameters: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "The parameter key-value pairs passed to the script (referenced by `scriptID`) during the task run.\n\n#### Limitations\n\n- `scriptParameters` requires `scriptID`.\n- If you use the `scriptID` and `scriptParameters` properties, you can't use the `flux` property.\n",
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the task' }),
    every: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The interval ([duration literal](https://docs.influxdata.com/flux/v0.x/spec/lexical-elements/#duration-literals))) at which the task runs.\n`every` also determines when the task first runs, depending on the specified time.\n',
      }),
    cron: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A [Cron expression](https://en.wikipedia.org/wiki/Cron#Overview) that defines the schedule on which the task runs. InfluxDB bases cron runs on the system time.',
      }),
    offset: z.iso
      .duration()
      .exactOptional()
      .openapi({
        description:
          'A [duration](https://docs.influxdata.com/flux/v0.x/spec/lexical-elements/#duration-literals) to delay execution of the task after the scheduled time has elapsed. `0` removes the offset.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaskCreateRequest')

const TaskUpdateRequestSchema = z
  .object({
    status: TaskStatusTypeSchema.exactOptional(),
    flux: z
      .string()
      .exactOptional()
      .openapi({ description: 'Update the Flux script that the task runs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Update the 'name' option in the flux script." }),
    every: z
      .string()
      .exactOptional()
      .openapi({ description: "Update the 'every' option in the flux script." }),
    cron: z
      .string()
      .exactOptional()
      .openapi({ description: "Update the 'cron' option in the flux script." }),
    offset: z
      .string()
      .exactOptional()
      .openapi({ description: "Update the 'offset' option in the flux script." }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Update the description of the task.' }),
    scriptID: z
      .string()
      .exactOptional()
      .openapi({ description: "Update the 'scriptID' of the task." }),
    scriptParameters: z
      .object({})
      .exactOptional()
      .openapi({ description: "Update the 'scriptParameters' of the task." }),
  })
  .openapi({ required: [] })
  .openapi('TaskUpdateRequest')

const AuthorizationErrorResponse = {
  description:
    "Unauthorized. The error may indicate one of the following:\n\n  * The `Authorization: Token` header is missing or malformed.\n  * The API token value is missing from the header.\n  * The token doesn't have sufficient permissions to write to this organization and bucket.\n",
  content: {
    'application/json': {
      schema: z
        .object({
          code: z
            .literal('unauthorized')
            .exactOptional()
            .openapi({
              description: 'The HTTP status code description. Default is `unauthorized`.\n',
              readOnly: true,
            }),
          message: z
            .string()
            .exactOptional()
            .openapi({
              readOnly: true,
              description: 'A human-readable message that may contain detail about the error.',
            }),
        })
        .openapi({ required: [] }),
      examples: {
        tokenNotAuthorized: {
          summary: 'Token is not authorized to access a resource',
          value: { code: 'unauthorized', message: 'unauthorized access' },
        },
      },
    },
  },
}

const BadRequestErrorResponse = {
  description:
    'Bad request.\nThe response body contains detail about the error.\n\n#### InfluxDB OSS\n\n- Returns this error if an incorrect value is passed in the `org` parameter or `orgID` parameter.\n',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        orgProvidedNotFound: {
          summary: "The org or orgID passed doesn't own the token passed in the header",
          value: {
            code: 'invalid',
            message: 'failed to decode request body: organization not found',
          },
        },
      },
    },
  },
}

const GeneralServerErrorResponse = {
  description: 'Non 2XX error response from server.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const InternalServerErrorResponse = {
  description: 'Internal server error.\nThe server encountered an unexpected situation.\n',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ResourceNotFoundErrorResponse = {
  description:
    'Not found.\nA requested resource was not found.\nThe response body contains the requested resource type and the name value\n(if you passed it)--for example:\n\n- `"organization name \\"my-org\\" not found"`\n- `"organization not found"`: indicates you passed an ID that did not match\n   an organization.\n',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        'org-not-found': {
          summary: 'Organization name not found',
          value: { code: 'not found', message: 'organization name "my-org" not found' },
        },
        'bucket-not-found': {
          summary: 'Bucket name not found',
          value: { code: 'not found', message: 'bucket "air_sensor" not found' },
        },
        'orgID-not-found': {
          summary: 'Organization ID not found',
          value: { code: 'not found', message: 'organization not found' },
        },
      },
    },
  },
}

const TraceSpanParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Zap-Trace-Span',
      description: 'OpenTracing span context',
      example: { trace_id: '1', span_id: '1', baggage: { key: 'value' } },
      required: false,
      schema: { type: 'string' },
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'offset',
      required: false,
      description:
        'The offset for pagination.\nThe number of records to skip.\n\nFor more information about pagination parameters, see [Pagination](https://docs.influxdata.com/influxdb/cloud/api/#tag/Pagination).\n',
      schema: { type: 'integer', minimum: 0 },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'limit',
      required: false,
      description: 'Limits the number of records returned. Default is `20`.\n',
      schema: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
    },
  })

const DescendingParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'descending',
      required: false,
      schema: { type: 'boolean', default: false },
    },
  })

const SortByParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'sortBy', required: false, schema: { type: 'string' } } })

const AfterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'after',
      required: false,
      schema: { type: 'string' },
      description:
        "A resource ID to seek from.\nReturns records created after the specified record;\nresults don't include the specified record.\n\nUse `after` instead of the `offset` parameter.\nFor more information about pagination parameters, see [Pagination](https://docs.influxdata.com/influxdb/cloud/api/#tag/Pagination).\n",
    },
  })

const AuthorizationPostRequestExample = {
  summary: 'An authorization for a resource type',
  description: 'Creates an authorization.',
  value: {
    orgID: 'INFLUX_ORG_ID',
    description: 'iot_users read buckets',
    permissions: [{ action: 'read', resource: { type: 'buckets' } }],
  },
}

const AuthorizationWithResourcePostRequestExample = {
  summary: 'An authorization for a resource',
  description: 'Creates an authorization for access to a specific resource.',
  value: {
    orgID: 'INFLUX_ORG_ID',
    description: 'iot_users read buckets',
    permissions: [{ action: 'read', resource: { type: 'buckets', id: 'INFLUX_BUCKET_ID' } }],
  },
}

const AuthorizationWithUserPostRequestExample = {
  summary: 'An authorization scoped to a user',
  description: 'Creates an authorization scoped to a specific user.',
  value: {
    orgID: 'INFLUX_ORG_ID',
    userID: 'INFLUX_USER_ID',
    description: 'iot_user write to bucket',
    permissions: [{ action: 'write', resource: { type: 'buckets', id: 'INFLUX_BUCKET_ID' } }],
  },
}

const TaskWithFluxRequestExample = {
  summary: 'A task with Flux',
  description: 'Sets the `flux` property with Flux task options and a query.',
  value: {
    flux: 'option task = {name: "CPU Total 1 Hour New", every: 1h}from(bucket: "telegraf") |> range(start: -1h) |> filter(fn: (r) => (r._measurement == "cpu")) |> filter(fn: (r) =>\n\t\t(r._field == "usage_system")) |> filter(fn: (r) => (r.cpu == "cpu-total")) |> aggregateWindow(every: 1h, fn: max) |> to(bucket: "cpu_usage_user_total_1h", org: "INFLUX_ORG")',
    status: 'active',
    description:
      'This task contains Flux that configures the task schedule and downsamples CPU data every hour.',
  },
}

const TaskWithScriptRequestExample = {
  summary: 'A task with an invokable script',
  description: 'Sets properties for a task that runs an _invokable script_.\n',
  value: {
    name: 'CPU Total 1 Hour New',
    every: '1h',
    scriptID: 'SCRIPT_ID',
    scriptParameters: { rangeStart: '-1h', bucket: 'telegraf', filterField: 'cpu-total' },
    status: 'active',
    description: 'This task runs an invokable script every hour with the defined parameters.',
  },
}

const TokenAuthenticationSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description:
    'Use the [Token authentication](#section/Authentication/TokenAuthentication)\nscheme to authenticate to the InfluxDB API.\n\nIn your API requests, send an `Authorization` header.\nFor the header value, provide the word `Token` followed by a space and an InfluxDB API token.\nThe word `Token` is case-sensitive.\n\n### Syntax\n\n`Authorization: Token INFLUX_API_TOKEN`\n\n### Example\n\n#### Use Token authentication with cURL\n\nThe following example shows how to use cURL to send an API request that uses Token authentication:\n\n```sh\ncurl --request GET "INFLUX_URL/api/v2/buckets" \\\n     --header "Authorization: Token INFLUX_API_TOKEN"\n```\n\nReplace the following:\n\n  - *`INFLUX_URL`*: your InfluxDB Cloud URL\n  - *`INFLUX_API_TOKEN`*: your [InfluxDB API token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token)\n\n### Related endpoints\n\n- [`/authorizations` endpoints](#tag/Authorizations-(API-tokens))\n\n### Related guides\n\n- [Authorize API requests](https://docs.influxdata.com/influxdb/cloud/api-guide/api_intro/#authentication)\n- [Manage API tokens](https://docs.influxdata.com/influxdb/cloud/security/tokens/)\n',
}

const BasicAuthenticationSecurityScheme = {
  type: 'http',
  scheme: 'basic',
  description:
    '### Basic authentication scheme\n\nUse the HTTP Basic authentication scheme for InfluxDB `/api/v2` API operations that support it:\n\n### Syntax\n\n`Authorization: Basic BASE64_ENCODED_CREDENTIALS`\n\nTo construct the `BASE64_ENCODED_CREDENTIALS`, combine the username and\nthe password with a colon (`USERNAME:PASSWORD`), and then encode the\nresulting string in [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64).\nMany HTTP clients encode the credentials for you before sending the\nrequest.\n\n_**Warning**: Base64-encoding can easily be reversed to obtain the original\nusername and password. It is used to keep the data intact and does not provide\nsecurity. You should always use HTTPS when authenticating or sending a request with\nsensitive information._\n\n### Examples\n\nIn the examples, replace the following:\n\n- **`EMAIL_ADDRESS`**: InfluxDB Cloud username (the email address the user signed up with)\n- **`PASSWORD`**: InfluxDB Cloud [API token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token)\n- **`INFLUX_URL`**: your InfluxDB Cloud URL\n\n#### Encode credentials with cURL\n\nThe following example shows how to use cURL to send an API request that uses Basic authentication.\nWith the `--user` option, cURL encodes the credentials and passes them\nin the `Authorization: Basic` header.\n\n```sh\ncurl --get "INFLUX_URL/api/v2/signin"\n    --user "EMAIL_ADDRESS":"PASSWORD"\n```\n\n#### Encode credentials with Flux\n\nThe Flux [`http.basicAuth()` function](https://docs.influxdata.com/flux/v0.x/stdlib/http/basicauth/) returns a Base64-encoded\nbasic authentication header using a specified username and password combination.\n\n#### Encode credentials with JavaScript\n\nThe following example shows how to use the JavaScript `btoa()` function\nto create a Base64-encoded string:\n\n```js\nbtoa(\'EMAIL_ADDRESS:PASSWORD\')\n```\n\nThe output is the following:\n\n```js\n\'VVNFUk5BTUU6UEFTU1dPUkQ=\'\n```\n\nOnce you have the Base64-encoded credentials, you can pass them in the\n`Authorization` header--for example:\n\n```sh\ncurl --get "INFLUX_URL/api/v2/signin"\n    --header "Authorization: Basic VVNFUk5BTUU6UEFTU1dPUkQ="\n```\n\nTo learn more about HTTP authentication, see\n[Mozilla Developer Network (MDN) Web Docs, HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)._\n',
}

export const postSigninRoute = createRoute({
  method: 'post',
  path: '/signin',
  tags: ['Security and access endpoints', 'Signin'],
  summary: 'Create a user session.',
  description:
    "Authenticates [Basic authentication credentials](#section/Authentication/BasicAuthentication)\nfor a [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user),\nand then, if successful, generates a user session.\n\nTo authenticate a user, pass the HTTP `Authorization` header with the\n`Basic` scheme and the base64-encoded username and password.\nFor syntax and more information, see [Basic Authentication](#section/Authentication/BasicAuthentication) for\nsyntax and more information.\n\nIf authentication is successful, InfluxDB creates a new session for the user\nand then returns the session cookie in the `Set-Cookie` response header.\n\nInfluxDB stores user sessions in memory only.\nThey expire within ten minutes and during restarts of the InfluxDB instance.\n\n#### User sessions with authorizations\n\n- In InfluxDB Cloud, a user session inherits all the user's permissions for\n  the organization.\n- In InfluxDB OSS, a user session inherits all the user's permissions for all\n  the organizations that the user belongs to.\n\n#### Related endpoints\n\n- [Signout](#tag/Signout)\n",
  operationId: 'PostSignin',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    204: {
      description:
        'Success.\nThe user is authenticated.\nThe `Set-Cookie` response header contains the session cookie.\n',
    },
    401: {
      description:
        "Unauthorized.\nThis error may be caused by one of the following problems:\n\n- The user doesn't have access.\n- The user passed incorrect credentials in the request.\n- The credentials are formatted incorrectly in the request.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Forbidden. The user account is disabled.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unsuccessful authentication.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ BasicAuthentication: [] }],
})

export const postSignoutRoute = createRoute({
  method: 'post',
  path: '/signout',
  tags: ['Security and access endpoints', 'Signout'],
  summary: 'Expire a user session',
  description:
    "Expires a user session specified by a session cookie.\n\nUse this endpoint to expire a user session that was generated when the user\nauthenticated with the InfluxDB Developer Console (UI) or the `POST /api/v2/signin` endpoint.\n\nFor example, the `POST /api/v2/signout` endpoint represents the third step\nin the following three-step process\nto authenticate a user, retrieve the `user` resource, and then expire the session:\n\n1. Send a request with the user's [Basic authentication credentials](#section/Authentication/BasicAuthentication)\n   to the `POST /api/v2/signin` endpoint to create a user session and\n   generate a session cookie.\n2. Send a request to the `GET /api/v2/me` endpoint, passing the stored session cookie\n   from step 1 to retrieve user information.\n3. Send a request to the `POST /api/v2/signout` endpoint, passing the stored session\n   cookie to expire the session.\n\n_See the complete example in request samples._\n\nInfluxDB stores user sessions in memory only.\nIf a user doesn't sign out, then the user session automatically expires within ten minutes or\nduring a restart of the InfluxDB instance.\n\nTo learn more about cookies in HTTP requests, see\n[Mozilla Developer Network (MDN) Web Docs, HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).\n\n#### Related endpoints\n\n- [Signin](#tag/Signin)\n",
  operationId: 'PostSignout',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    204: { description: 'Success. The session is expired.' },
    401: { description: 'Unauthorized.', content: { 'application/json': { schema: ErrorSchema } } },
    default: {
      description: 'The session expiry is unsuccessful.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPingRoute = createRoute({
  method: 'get',
  path: '/ping',
  tags: ['Ping', 'System information endpoints'],
  summary: 'Get the status of the instance',
  description:
    "Retrieves the status and InfluxDB version of the instance.\n\nUse this endpoint to monitor uptime for the InfluxDB instance. The response\nreturns a HTTP `204` status code to inform you the instance is available.\n\n#### InfluxDB Cloud\n\n- Isn't versioned and doesn't return `X-Influxdb-Version` in the headers.\n\n#### Related guides\n\n- [Influx ping](https://docs.influxdata.com/influxdb/cloud/reference/cli/influx/ping/)\n",
  operationId: 'GetPing',
  responses: {
    204: {
      description: 'Success.\nHeaders contain InfluxDB version information.\n',
      headers: z.object({
        'X-Influxdb-Build': {
          description: 'The type of InfluxDB build.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'The type of InfluxDB build.\n', param: { required: false } }),
        },
        'X-Influxdb-Version': {
          description:
            "The version of InfluxDB.\n\n#### InfluxDB Cloud\n  - Doesn't return version.\n",
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                "The version of InfluxDB.\n\n#### InfluxDB Cloud\n  - Doesn't return version.\n",
              param: { required: false },
            }),
        },
      }),
    },
  },
  servers: [{ url: '' }],
})

export const headPingRoute = createRoute({
  method: 'head',
  path: '/ping',
  tags: ['Ping'],
  summary: 'Get the status of the instance',
  description:
    "Returns the status and InfluxDB version of the instance.\n\nUse this endpoint to monitor uptime for the InfluxDB instance. The response\nreturns a HTTP `204` status code to inform you the instance is available.\n\n#### InfluxDB Cloud\n\n- Isn't versioned and doesn't return `X-Influxdb-Version` in the headers.\n\n#### Related guides\n\n- [Influx ping](https://docs.influxdata.com/influxdb/cloud/reference/cli/influx/ping/)\n",
  operationId: 'HeadPing',
  responses: {
    204: {
      description: 'Success.\nHeaders contain InfluxDB version information.\n',
      headers: z.object({
        'X-Influxdb-Build': {
          description: 'The type of InfluxDB build.',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'The type of InfluxDB build.', param: { required: false } }),
        },
        'X-Influxdb-Version': {
          description:
            "The version of InfluxDB.\n\n#### InfluxDB Cloud\n- Doesn't return version.\n",
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                "The version of InfluxDB.\n\n#### InfluxDB Cloud\n- Doesn't return version.\n",
              param: { required: false },
            }),
        },
      }),
    },
  },
  servers: [{ url: '' }],
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Routes', 'System information endpoints'],
  summary: 'List all top level routes',
  description:
    'Retrieves all the top level routes for the InfluxDB API.\n\n#### Limitations\n\n- Only returns top level routes--for example, the response contains\n`"tasks":"/api/v2/tasks"`, and doesn\'t contain resource-specific routes\nfor tasks (`/api/v2/tasks/TASK_ID/...`).\n',
  operationId: 'GetRoutes',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description:
        'Success.\nThe response body contains key-value pairs with the resource name and\ntop-level route.\n',
      content: { 'application/json': { schema: RoutesSchema } },
    },
  },
})

export const getDbrpsRoute = createRoute({
  method: 'get',
  path: '/dbrps',
  tags: ['DBRPs'],
  summary: 'List database retention policy mappings',
  description:
    'Lists database retention policy (DBRP) mappings.\n\n#### Related guide\n\n- [Database and retention policy mapping](https://docs.influxdata.com/influxdb/cloud/reference/api/influxdb-1x/dbrp/)\n',
  operationId: 'GetDBRPs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              'An organization ID.\nOnly returns DBRP mappings for the specified organization.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nOnly returns DBRP mappings for the specified organization.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            description: 'A DBPR mapping ID.\nOnly returns the specified DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bucketID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bucketID',
            description:
              'A bucket ID.\nOnly returns DBRP mappings that belong to the specified bucket.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      default: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'default',
            description: 'Specifies filtering on default',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      db: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'db',
            description:
              'A database.\nOnly returns DBRP mappings that belong to the 1.x database.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'rp',
            description:
              'A [retention policy](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#retention-policy-rp).\nSpecifies the 1.x retention policy to filter on.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. The response body contains a list of database retention policy mappings.',
      content: {
        'application/json': {
          schema: DBRPsSchema,
          examples: {
            successResponse: {
              value: {
                content: [
                  {
                    id: '0a3cbb5dd526a000',
                    database: 'example_database_1',
                    retention_policy: 'autogen',
                    default: true,
                    orgID: 'bea7ea952287f70d',
                    bucketID: '4d4d9d5b61dee751',
                  },
                  {
                    id: '0a3cbcde20e38000',
                    database: 'example_database_2',
                    retention_policy: 'example_retention_policy',
                    default: false,
                    orgID: 'bea7ea952287f70d',
                    bucketID: '4d4d9d5b61dee751',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request. The request has one or more invalid parameters.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidRequest: {
              description: 'The query parameters contain invalid values.\n',
              value: { code: 'invalid', message: 'invalid ID' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDbrpsRoute = createRoute({
  method: 'post',
  path: '/dbrps',
  tags: ['DBRPs'],
  summary: 'Add a database retention policy mapping',
  description:
    'Creates a database retention policy (DBRP) mapping and returns the mapping.\n\nUse this endpoint to add InfluxDB 1.x API compatibility to your\nInfluxDB Cloud or InfluxDB OSS 2.x buckets. Your buckets must contain a\nDBRP mapping in order to query and write using the InfluxDB 1.x API.\nobject.\n\n#### Related guide\n\n- [Database and retention policy mapping](https://docs.influxdata.com/influxdb/cloud/reference/api/influxdb-1x/dbrp/)\n',
  operationId: 'PostDBRP',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description:
        "The database retention policy mapping to add.\n\nNote that _`retention_policy`_ is a required parameter in the request body.\nThe value of _`retention_policy`_ can be any arbitrary `string` name or\nvalue, with the default value commonly set as `autogen`.\nThe value of _`retention_policy`_ isn't a [retention_policy](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#retention-policy-rp)\n",
      content: { 'application/json': { schema: DBRPCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created. The response body contains the database retention policy mapping.',
      content: {
        'application/json': {
          schema: DBRPSchema,
          examples: {
            successResponse: {
              value: {
                id: '0a3cbb5dd526a000',
                database: 'example_database',
                retention_policy: 'autogen',
                default: true,
                orgID: 'bea7ea952287f70d',
                bucketID: '4d4d9d5b61dee751',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request. The mapping in the request has one or more invalid IDs.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidRequest: {
              description: 'The query parameters contain invalid values.\n',
              value: { code: 'invalid', message: 'invalid ID' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDbrpsDbrpIDRoute = createRoute({
  method: 'get',
  path: '/dbrps/{dbrpID}',
  tags: ['DBRPs'],
  summary: 'Retrieve a database retention policy mapping',
  description:
    'Retrieves the specified retention policy (DBRP) mapping.\n\n#### Related guide\n\n- [Database and retention policy mapping](https://docs.influxdata.com/influxdb/cloud/reference/api/influxdb-1x/dbrp/)\n',
  operationId: 'GetDBRPsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              'An organization ID.\nSpecifies the organization that owns the DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nSpecifies the organization that owns the DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      dbrpID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dbrpID',
            schema: { type: 'string' },
            required: true,
            description: 'A DBRP mapping ID.\nSpecifies the DBRP mapping.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the DBRP mapping.',
      content: {
        'application/json': {
          schema: DBRPGetSchema,
          examples: {
            successResponse: {
              value: {
                content: {
                  id: '0a3cbb5dd526a000',
                  database: 'example_database_1',
                  retention_policy: 'autogen',
                  default: true,
                  orgID: 'bea7ea952287f70d',
                  bucketID: '4d4d9d5b61dee751',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request. Query parameters contain invalid values.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidRequest: {
              description: 'The query parameters contain invalid values.\n',
              value: { code: 'invalid', message: 'invalid ID' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDbrpsDbrpIDRoute = createRoute({
  method: 'delete',
  path: '/dbrps/{dbrpID}',
  tags: ['DBRPs'],
  summary: 'Delete a database retention policy',
  description:
    'Deletes the specified database retention policy (DBRP) mapping.\n\n#### Related guide\n\n- [Database and retention policy mapping](https://docs.influxdata.com/influxdb/cloud/reference/api/influxdb-1x/dbrp/)\n',
  operationId: 'DeleteDBRPID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              'An organization ID.\nSpecifies the organization that owns the DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nSpecifies the organization that owns the DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      dbrpID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dbrpID',
            schema: { type: 'string' },
            required: true,
            description: 'A DBRP mapping ID.\nOnly returns the specified DBRP mapping.\n',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success. The delete is accepted.' },
    400: {
      description: 'Bad Request. Query parameters contain invalid values.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidRequest: {
              description: 'The query parameters contain invalid values.\n',
              value: { code: 'invalid', message: 'invalid ID' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchDbrpsDbrpIDRoute = createRoute({
  method: 'patch',
  path: '/dbrps/{dbrpID}',
  tags: ['DBRPs'],
  summary: 'Update a database retention policy mapping',
  operationId: 'PatchDBRPID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              'An organization ID.\nSpecifies the organization that owns the DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nSpecifies the organization that owns the DBRP mapping.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      dbrpID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dbrpID',
            schema: { type: 'string' },
            required: true,
            description: 'A DBRP mapping ID.\nSpecifies the DBRP mapping.\n',
          },
        }),
    }),
    body: {
      description:
        'Updates the database retention policy (DBRP) mapping and returns the mapping.\n\nUse this endpoint to modify the _retention policy_ (`retention_policy` property) of a DBRP mapping.\n\n#### Related guide\n\n- [Database and retention policy mapping](https://docs.influxdata.com/influxdb/cloud/reference/api/influxdb-1x/dbrp/)\n',
      content: { 'application/json': { schema: DBRPUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated mapping',
      content: {
        'application/json': {
          schema: DBRPGetSchema,
          examples: {
            successResponse: {
              value: {
                content: {
                  id: '0a3cbb5dd526a000',
                  database: 'example_database',
                  retention_policy: 'example_retention_policy',
                  default: false,
                  orgID: 'bea7ea952287f70d',
                  bucketID: '4d4d9d5b61dee751',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request. Query parameters contain invalid values.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidRequest: {
              description: 'The query parameters contain invalid values.\n',
              value: { code: 'invalid', message: 'invalid ID' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTelegrafPluginsRoute = createRoute({
  method: 'get',
  path: '/telegraf/plugins',
  tags: ['Telegraf Plugins'],
  summary: 'List all Telegraf plugins',
  operationId: 'GetTelegrafPlugins',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            description: 'The type of plugin desired.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of Telegraf plugins.',
      content: { 'application/json': { schema: TelegrafPluginsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTelegrafsRoute = createRoute({
  method: 'get',
  path: '/telegrafs',
  tags: ['Telegrafs'],
  summary: 'List all Telegraf configurations',
  operationId: 'GetTelegrafs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'The organization ID the Telegraf config belongs to.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of Telegraf configurations',
      content: { 'application/json': { schema: TelegrafsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTelegrafsRoute = createRoute({
  method: 'post',
  path: '/telegrafs',
  tags: ['Telegrafs'],
  summary: 'Create a Telegraf configuration',
  operationId: 'PostTelegrafs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Telegraf configuration to create',
      content: { 'application/json': { schema: TelegrafPluginRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Telegraf configuration created',
      content: { 'application/json': { schema: TelegrafSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTelegrafsTelegrafIDRoute = createRoute({
  method: 'get',
  path: '/telegrafs/{telegrafID}',
  tags: ['Telegrafs'],
  summary: 'Retrieve a Telegraf configuration',
  operationId: 'GetTelegrafsID',
  request: {
    headers: z.object({
      'Zap-Trace-Span': TraceSpanParamsSchema,
      Accept: z
        .enum(['application/toml', 'application/json', 'application/octet-stream'])
        .default('application/toml')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept',
            required: false,
            schema: {
              type: 'string',
              default: 'application/toml',
              enum: ['application/toml', 'application/json', 'application/octet-stream'],
            },
          },
        }),
    }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf configuration ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Telegraf configuration details',
      content: {
        'application/toml': { schema: z.string(), example: '[agent]\ninterval = "10s"' },
        'application/json': { schema: TelegrafSchema },
        'application/octet-stream': { schema: z.string(), example: '[agent]\ninterval = "10s"' },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putTelegrafsTelegrafIDRoute = createRoute({
  method: 'put',
  path: '/telegrafs/{telegrafID}',
  tags: ['Telegrafs'],
  summary: 'Update a Telegraf configuration',
  operationId: 'PutTelegrafsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
    body: {
      description: 'Telegraf configuration update to apply',
      content: { 'application/json': { schema: TelegrafPluginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated Telegraf configurations',
      content: { 'application/json': { schema: TelegrafSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTelegrafsTelegrafIDRoute = createRoute({
  method: 'delete',
  path: '/telegrafs/{telegrafID}',
  tags: ['Telegrafs'],
  summary: 'Delete a Telegraf configuration',
  operationId: 'DeleteTelegrafsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf configuration ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTelegrafsTelegrafIDLabelsRoute = createRoute({
  method: 'get',
  path: '/telegrafs/{telegrafID}/labels',
  tags: ['Telegrafs'],
  summary: 'List all labels for a Telegraf config',
  operationId: 'GetTelegrafsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a Telegraf config',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTelegrafsTelegrafIDLabelsRoute = createRoute({
  method: 'post',
  path: '/telegrafs/{telegrafID}/labels',
  tags: ['Telegrafs'],
  summary: 'Add a label to a Telegraf config',
  operationId: 'PostTelegrafsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
    body: {
      description: 'Label to add',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The label added to the Telegraf config',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTelegrafsTelegrafIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/telegrafs/{telegrafID}/labels/{labelID}',
  tags: ['Telegrafs'],
  summary: 'Delete a label from a Telegraf config',
  operationId: 'DeleteTelegrafsIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The label ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Telegraf config not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTelegrafsTelegrafIDMembersRoute = createRoute({
  method: 'get',
  path: '/telegrafs/{telegrafID}/members',
  tags: ['Telegrafs'],
  summary: 'List all users with member privileges for a Telegraf config',
  operationId: 'GetTelegrafsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of Telegraf config members',
      content: { 'application/json': { schema: ResourceMembersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTelegrafsTelegrafIDMembersRoute = createRoute({
  method: 'post',
  path: '/telegrafs/{telegrafID}/members',
  tags: ['Telegrafs'],
  summary: 'Add a member to a Telegraf config',
  operationId: 'PostTelegrafsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
    body: {
      description: 'User to add as member',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Member added to Telegraf config',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTelegrafsTelegrafIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/telegrafs/{telegrafID}/members/{userID}',
  tags: ['Telegrafs'],
  summary: 'Remove a member from a Telegraf config',
  operationId: 'DeleteTelegrafsIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the member to remove.',
          },
        }),
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Member removed' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTelegrafsTelegrafIDOwnersRoute = createRoute({
  method: 'get',
  path: '/telegrafs/{telegrafID}/owners',
  tags: ['Telegrafs'],
  summary: 'List all owners of a Telegraf configuration',
  operationId: 'GetTelegrafsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf configuration ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns Telegraf configuration owners as a ResourceOwners list',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTelegrafsTelegrafIDOwnersRoute = createRoute({
  method: 'post',
  path: '/telegrafs/{telegrafID}/owners',
  tags: ['Telegrafs'],
  summary: 'Add an owner to a Telegraf configuration',
  operationId: 'PostTelegrafsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf configuration ID.',
          },
        }),
    }),
    body: {
      description: 'User to add as owner',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Telegraf configuration owner was added. Returns a ResourceOwner that references the User.',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTelegrafsTelegrafIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/telegrafs/{telegrafID}/owners/{userID}',
  tags: ['Telegrafs'],
  summary: 'Remove an owner from a Telegraf config',
  operationId: 'DeleteTelegrafsIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the owner to remove.',
          },
        }),
      telegrafID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'telegrafID',
            schema: { type: 'string' },
            required: true,
            description: 'The Telegraf config ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Owner removed' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getVariablesVariableIDLabelsRoute = createRoute({
  method: 'get',
  path: '/variables/{variableID}/labels',
  tags: ['Variables'],
  summary: 'List all labels for a variable',
  operationId: 'GetVariablesIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            schema: { type: 'string' },
            required: true,
            description: 'The variable ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a variable',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postVariablesVariableIDLabelsRoute = createRoute({
  method: 'post',
  path: '/variables/{variableID}/labels',
  tags: ['Variables'],
  summary: 'Add a label to a variable',
  operationId: 'PostVariablesIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            schema: { type: 'string' },
            required: true,
            description: 'The variable ID.',
          },
        }),
    }),
    body: {
      description: 'Label to add',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The newly added label',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteVariablesVariableIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/variables/{variableID}/labels/{labelID}',
  tags: ['Variables'],
  summary: 'Delete a label from a variable',
  operationId: 'DeleteVariablesIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            schema: { type: 'string' },
            required: true,
            description: 'The variable ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The label ID to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Variable not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postWriteRoute = createRoute({
  method: 'post',
  path: '/write',
  tags: ['Data I/O endpoints', 'Write'],
  summary: 'Write data',
  description:
    'Writes data to a bucket.\n\nUse this endpoint to send data in [line protocol](https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol/) format to InfluxDB.\n\n#### InfluxDB Cloud\n\n- Does the following when you send a write request:\n\n  1. Validates the request and queues the write.\n  2. If queued, responds with _success_ (HTTP `2xx` status code); _error_ otherwise.\n  3. Handles the delete asynchronously and reaches eventual consistency.\n\n  To ensure that InfluxDB Cloud handles writes and deletes in the order you request them,\n  wait for a success response (HTTP `2xx` status code) before you send the next request.\n\n  Because writes and deletes are asynchronous, your change might not yet be readable\n  when you receive the response.\n\n#### InfluxDB OSS\n\n- Validates the request and handles the write synchronously.\n- If all points were written successfully, responds with HTTP `2xx` status code;\n  otherwise, returns the first line that failed.\n\n#### Required permissions\n\n- `write-buckets` or `write-bucket BUCKET_ID`.\n\n *`BUCKET_ID`* is the ID of the destination bucket.\n\n#### Rate limits (with InfluxDB Cloud)\n\n`write` rate limits apply.\nFor more information, see [limits and adjustable quotas](https://docs.influxdata.com/influxdb/cloud/account-management/limits/).\n\n#### Related guides\n\n- [Write data with the InfluxDB API](https://docs.influxdata.com/influxdb/cloud/write-data/developer-tools/api)\n- [Optimize writes to InfluxDB](https://docs.influxdata.com/influxdb/cloud/write-data/best-practices/optimize-writes/)\n- [Troubleshoot issues writing data](https://docs.influxdata.com/influxdb/cloud/write-data/troubleshoot/)\n',
  operationId: 'PostWrite',
  request: {
    headers: z.object({
      'Zap-Trace-Span': TraceSpanParamsSchema,
      'Content-Encoding': z
        .enum(['gzip', 'identity'])
        .default('identity')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Encoding',
            description:
              'The compression applied to the line protocol in the request payload.\nTo send a GZIP payload, pass `Content-Encoding: gzip` header.\n',
            schema: {
              type: 'string',
              description:
                'Content coding.\nUse `gzip` for compressed data or `identity` for unmodified, uncompressed data.\n',
              default: 'identity',
              enum: ['gzip', 'identity'],
            },
            required: false,
          },
          description:
            'Content coding.\nUse `gzip` for compressed data or `identity` for unmodified, uncompressed data.\n',
        }),
      'Content-Type': z
        .enum(['text/plain', 'text/plain; charset=utf-8'])
        .default('text/plain; charset=utf-8')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            description:
              'The format of the data in the request body.\nTo send a line protocol payload, pass `Content-Type: text/plain; charset=utf-8`.\n',
            schema: {
              type: 'string',
              description:
                '`text/plain` is the content type for line protocol. `UTF-8` is the default character set.\n',
              default: 'text/plain; charset=utf-8',
              enum: ['text/plain', 'text/plain; charset=utf-8'],
            },
            required: false,
          },
          description:
            '`text/plain` is the content type for line protocol. `UTF-8` is the default character set.\n',
        }),
      'Content-Length': z
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
            in: 'header',
            name: 'Content-Length',
            description:
              'The size of the entity-body, in bytes, sent to InfluxDB.\nIf the length is greater than the `max body` configuration option,\nthe server responds with status code `413`.\n',
            schema: { type: 'integer', description: 'The length in decimal number of octets.' },
            required: false,
          },
          description: 'The length in decimal number of octets.',
        }),
      Accept: z
        .literal('application/json')
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept',
            description:
              'The content type that the client can understand.\nWrites only return a response body if they fail--for example,\ndue to a formatting problem or quota limit.\n\n#### InfluxDB Cloud\n\n  - Returns only `application/json` for format and limit errors.\n  - Returns only `text/html` for some quota limit errors.\n\n#### InfluxDB OSS\n\n  - Returns only `application/json` for format and limit errors.\n\n#### Related guides\n\n- [Troubleshoot issues writing data](https://docs.influxdata.com/influxdb/cloud/write-data/troubleshoot/)\n',
            schema: {
              type: 'string',
              description: 'Error content type.',
              default: 'application/json',
              enum: ['application/json'],
            },
            required: false,
          },
          description: 'Error content type.',
        }),
    }),
    query: z.object({
      org: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              "An organization name or ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Writes data to the bucket in the organization\n  associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or the `orgID` parameter.\n- If you pass both `orgID` and `org`, they must both be valid.\n- Writes data to the bucket in the specified organization.\n",
            required: true,
            schema: { type: 'string', description: 'The organization name or ID.' },
          },
          description: 'The organization name or ID.',
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              "An organization ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Writes data to the bucket in the organization\n  associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or the `orgID` parameter.\n- If you pass both `orgID` and `org`, they must both be valid.\n- Writes data to the bucket in the specified organization.\n",
            schema: { type: 'string' },
            required: false,
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'bucket',
            description:
              'A bucket name or ID.\nInfluxDB writes all points in the batch to the specified bucket.\n',
            required: true,
            schema: { type: 'string', description: 'The bucket name or ID.' },
          },
          description: 'The bucket name or ID.',
        }),
      precision: WritePrecisionSchema.openapi({
        param: {
          in: 'query',
          name: 'precision',
          description: 'The precision for unix timestamps in the line protocol batch.',
          schema: { $ref: '#/components/schemas/WritePrecision' },
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      description:
        'In the request body, provide data in [line protocol format](https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol/).\n\nTo send compressed data, do the following:\n\n  1. Use [GZIP](https://www.gzip.org/) to compress the line protocol data.\n  2. In your request, send the compressed data and the\n     `Content-Encoding: gzip` header.\n\n#### Related guides\n\n- [Best practices for optimizing writes](https://docs.influxdata.com/influxdb/cloud/write-data/best-practices/optimize-writes/)\n',
      content: {
        'text/plain': {
          schema: z.string(),
          examples: {
            'plain-utf8': {
              value:
                'airSensors,sensor_id=TLM0201 temperature=73.97038159354763,humidity=35.23103248356096,co=0.48445310567793615 1630424257000000000\nairSensors,sensor_id=TLM0202 temperature=75.30007505999716,humidity=35.651929918691714,co=0.5141876544505826 1630424257000000000\n',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Success.\n\n#### InfluxDB Cloud\n\n- Validated and queued the request.\n- Handles the write asynchronously - the write might not have completed yet.\n\n#### InfluxDB OSS\n\n- Successfully wrote all points in the batch.\n\n#### Related guides\n\n- [How to check for write errors](https://docs.influxdata.com/influxdb/cloud/write-data/troubleshoot/)\n',
    },
    400: {
      description:
        "Bad request. The response body contains detail about the error.\n\nInfluxDB returns this error if the line protocol data in the request is malformed.\nThe response body contains the first malformed line in the data, and indicates what was expected.\nFor partial writes, the number of points written and the number of points rejected are also included.\nFor more information, check the `rejected_points` measurement in your `_monitoring` bucket.\n\n#### InfluxDB Cloud\n\n- Returns this error for bucket schema conflicts.\n\n#### InfluxDB OSS\n\n- Returns this error if the `org` parameter or `orgID` parameter doesn't match an organization.\n",
      content: {
        'application/json': {
          schema: LineProtocolErrorSchema,
          examples: {
            measurementSchemaFieldTypeConflict: {
              summary: '(Cloud) field type conflict thrown by an explicit bucket schema',
              value: {
                code: 'invalid',
                message:
                  'partial write error (2 written): unable to parse \'air_sensor,service=S1,sensor=L1 temperature="90.5",humidity=70.0 1632850122\': schema: field type for field "temperature" not permitted by schema; got String but expected Float',
              },
            },
            orgNotFound: {
              summary: '(OSS) organization not found',
              value: {
                code: 'invalid',
                message: 'failed to decode request body: organization not found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    413: {
      description:
        'The request payload is too large.\nInfluxDB rejected the batch and did not write any data.\n\n#### InfluxDB Cloud:\n\n - Returns this error if the payload exceeds the 50MB size limit.\n - Returns `Content-Type: text/html` for this error.\n\n#### InfluxDB OSS:\n\n - Returns this error only if the [Go (golang) `ioutil.ReadAll()`](https://pkg.go.dev/io/ioutil#ReadAll) function raises an error.\n - Returns `Content-Type: application/json` for this error.\n',
      content: {
        'application/json': {
          schema: LineProtocolLengthErrorSchema,
          examples: {
            dataExceedsSizeLimitOSS: {
              summary: 'InfluxDB OSS response',
              value:
                '{"code":"request too large","message":"unable to read data: points batch is too large"}\n',
            },
          },
        },
        'text/html': {
          schema: z.string(),
          examples: {
            dataExceedsSizeLimit: {
              summary: 'InfluxDB Cloud response',
              value:
                '<html>\n  <head><title>413 Request Entity Too Large</title></head>\n  <body>\n    <center><h1>413 Request Entity Too Large</h1></center>\n    <hr>\n    <center>nginx</center>\n  </body>\n</html>\n',
            },
          },
        },
      },
    },
    429: {
      description:
        "Too many requests.\n\n#### InfluxDB Cloud\n\n  - Returns this error if a **read** or **write** request exceeds your plan's [adjustable service quotas](https://docs.influxdata.com/influxdb/cloud/account-management/limits/#adjustable-service-quotas)\n    or if a **delete** request exceeds the maximum [global limit](https://docs.influxdata.com/influxdb/cloud/account-management/limits/#global-limits).\n  - For rate limits that reset automatically, returns a `Retry-After` header that describes when to try the write again.\n  - For limits that can't reset (for example, **cardinality limit**), doesn't return a `Retry-After` header.\n\n  Rates (data-in (writes), queries (reads), and deletes) accrue within a fixed five-minute window.\n  Once a rate limit is exceeded, InfluxDB returns an error response until the current five-minute window resets.\n\n#### InfluxDB OSS\n\n  - Doesn't return this error.\n",
      headers: z.object({
        'Retry-After': {
          description:
            'Non-negative decimal integer indicating seconds to wait before retrying the request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description:
                'Non-negative decimal integer indicating seconds to wait before retrying the request.',
              param: { required: false },
            }),
        },
      }),
    },
    500: InternalServerErrorResponse,
    503: {
      description:
        'Service unavailable.\n\n- Returns this error if\n  the server is temporarily unavailable to accept writes.\n- Returns a `Retry-After` header that describes when to try the write again.\n',
      headers: z.object({
        'Retry-After': {
          description:
            'Non-negative decimal integer indicating seconds to wait before retrying the request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description:
                'Non-negative decimal integer indicating seconds to wait before retrying the request.',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralServerErrorResponse,
  },
})

export const postDeleteRoute = createRoute({
  method: 'post',
  path: '/delete',
  tags: ['Data I/O endpoints', 'Delete'],
  summary: 'Delete data',
  description:
    'Deletes data from a bucket.\n\nUse this endpoint to delete points from a bucket in a specified time range.\n\n#### InfluxDB Cloud\n\n- Does the following when you send a delete request:\n\n  1. Validates the request and queues the delete.\n  2. If queued, responds with _success_ (HTTP `2xx` status code); _error_ otherwise.\n  3. Handles the delete asynchronously and reaches eventual consistency.\n\nTo ensure that InfluxDB Cloud handles writes and deletes in the order you request them,\nwait for a success response (HTTP `2xx` status code) before you send the next request.\n\nBecause writes and deletes are asynchronous, your change might not yet be readable\nwhen you receive the response.\n\n#### InfluxDB OSS\n\n- Validates the request, handles the delete synchronously,\n  and then responds with success or failure.\n\n#### Required permissions\n\n- `write-buckets` or `write-bucket BUCKET_ID`.\n\n*`BUCKET_ID`* is the ID of the destination bucket.\n\n#### Rate limits (with InfluxDB Cloud)\n\n`write` rate limits apply.\nFor more information, see [limits and adjustable quotas](https://docs.influxdata.com/influxdb/cloud/account-management/limits/).\n\n#### Related guides\n\n- [Delete data](https://docs.influxdata.com/influxdb/cloud/write-data/delete-data/)\n- Learn how to use [delete predicate syntax](https://docs.influxdata.com/influxdb/cloud/reference/syntax/delete-predicate/).\n- Learn how InfluxDB handles [deleted tags](https://docs.influxdata.com/flux/v0.x/stdlib/influxdata/influxdb/schema/measurementtagkeys/)\n  and [deleted fields](https://docs.influxdata.com/flux/v0.x/stdlib/influxdata/influxdb/schema/measurementfieldkeys/).\n',
  operationId: 'PostDelete',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              "An organization name or ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Deletes data from the bucket in the organization\n  associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or the `orgID` parameter.\n- Deletes data from the bucket in the specified organization.\n- If you pass both `orgID` and `org`, they must both be valid.\n",
            schema: { type: 'string', description: 'The organization name or ID.' },
            required: false,
          },
          description: 'The organization name or ID.',
        }),
      bucket: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bucket',
            description:
              'A bucket name or ID.\nSpecifies the bucket to delete data from.\nIf you pass both `bucket` and `bucketID`, `bucketID` takes precedence.\n',
            schema: { type: 'string', description: 'The bucket name or ID.' },
            required: false,
          },
          description: 'The bucket name or ID.',
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              "An organization ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Deletes data from the bucket in the organization\n  associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or the `orgID` parameter.\n- Deletes data from the bucket in the specified organization.\n- If you pass both `orgID` and `org`, they must both be valid.\n",
            schema: { type: 'string', description: 'The organization ID.' },
            required: false,
          },
          description: 'The organization ID.',
        }),
      bucketID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bucketID',
            description:
              'A bucket ID.\nSpecifies the bucket to delete data from.\nIf you pass both `bucket` and `bucketID`, `bucketID` takes precedence.\n',
            schema: { type: 'string', description: 'The bucket ID.' },
            required: false,
          },
          description: 'The bucket ID.',
        }),
    }),
    body: {
      description:
        "Time range parameters and an optional **delete predicate expression**.\n\nTo select points to delete within the specified time range, pass a\n**delete predicate expression** in the `predicate` property of the request body.\nIf you don't pass a `predicate`, InfluxDB deletes all data with timestamps\nin the specified time range.\n\n#### Related guides\n\n- [Delete data](https://docs.influxdata.com/influxdb/cloud/write-data/delete-data/)\n- Learn how to use [delete predicate syntax](https://docs.influxdata.com/influxdb/cloud/reference/syntax/delete-predicate/).\n",
      content: { 'application/json': { schema: DeletePredicateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Success.\n\n#### InfluxDB Cloud\n\n- Validated and queued the request.\n- Handles the delete asynchronously - the deletion might not have completed yet.\n\nAn HTTP `2xx` status code acknowledges that the write or delete is queued.\nTo ensure that InfluxDB Cloud handles writes and deletes in the order you request them,\nwait for a response before you send the next request.\n\nBecause writes are asynchronous, data might not yet be written\nwhen you receive the response.\n\n#### InfluxDB OSS\n\n- Deleted the data.\n',
    },
    400: {
      description:
        "Bad request.\nThe response body contains detail about the error.\n\n#### InfluxDB OSS\n\n- Returns this error if the `org` parameter or `orgID` parameter doesn't match an organization.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            orgNotFound: {
              summary: 'Organization not found',
              value: {
                code: 'invalid',
                message: 'failed to decode request body: organization not found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getLabelsRoute = createRoute({
  method: 'get',
  path: '/labels',
  tags: ['Labels'],
  summary: 'List all labels',
  operationId: 'GetLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'The organization ID.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains a list of labels.',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postLabelsRoute = createRoute({
  method: 'post',
  path: '/labels',
  tags: ['Labels'],
  summary: 'Create a label',
  operationId: 'PostLabels',
  request: {
    body: {
      description: 'The label to create.',
      content: { 'application/json': { schema: LabelCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success. The label was created.',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getLabelsLabelIDRoute = createRoute({
  method: 'get',
  path: '/labels/{labelID}',
  tags: ['Labels'],
  summary: 'Retrieve a label',
  operationId: 'GetLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to update.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the label.',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const deleteLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/labels/{labelID}',
  tags: ['Labels'],
  summary: 'Delete a label',
  operationId: 'DeleteLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success. The delete was accepted.' },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const patchLabelsLabelIDRoute = createRoute({
  method: 'patch',
  path: '/labels/{labelID}',
  tags: ['Labels'],
  summary: 'Update a label',
  operationId: 'PatchLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to update.',
          },
        }),
    }),
    body: {
      description: 'A label update.',
      content: { 'application/json': { schema: LabelUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success. The response body contains the updated label.',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getDashboardsDashboardIDRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardID}',
  tags: ['Dashboards'],
  summary: 'Retrieve a dashboard',
  operationId: 'GetDashboardsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
    }),
    query: z.object({
      include: z
        .literal('properties')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            required: false,
            schema: { type: 'string', enum: ['properties'] },
            description: 'If `properties`, includes the cell view properties in the response.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve a single dashboard',
      content: {
        'application/json': { schema: z.xor([DashboardSchema, DashboardWithViewPropertiesSchema]) },
      },
    },
    404: {
      description: 'Dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDashboardsDashboardIDRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardID}',
  tags: ['Dashboards'],
  summary: 'Delete a dashboard',
  operationId: 'DeleteDashboardsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchDashboardsDashboardIDRoute = createRoute({
  method: 'patch',
  path: '/dashboards/{dashboardID}',
  tags: ['Dashboards'],
  summary: 'Update a dashboard',
  operationId: 'PatchDashboardsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
    }),
    body: {
      description: 'Patching of a dashboard',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, when provided will replace the name' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, when provided will replace the description' }),
              cells: CellWithViewPropertiesSchema.exactOptional().openapi({
                description:
                  'optional, when provided will replace all existing cells with the cells provided',
              }),
            })
            .openapi({ title: 'PatchDashboardRequest', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated dashboard',
      content: { 'application/json': { schema: DashboardSchema } },
    },
    404: {
      description: 'Dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putDashboardsDashboardIDCellsRoute = createRoute({
  method: 'put',
  path: '/dashboards/{dashboardID}/cells',
  tags: ['Cells', 'Dashboards'],
  summary: 'Replace cells in a dashboard',
  description:
    'Replaces all cells in a dashboard. This is used primarily to update the positional information of all cells.',
  operationId: 'PutDashboardsIDCells',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CellsSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Replaced dashboard cells',
      content: { 'application/json': { schema: DashboardSchema } },
    },
    404: {
      description: 'Dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDashboardsDashboardIDCellsRoute = createRoute({
  method: 'post',
  path: '/dashboards/{dashboardID}/cells',
  tags: ['Cells', 'Dashboards'],
  summary: 'Create a dashboard cell',
  operationId: 'PostDashboardsIDCells',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
    }),
    body: {
      description: 'Cell that will be added',
      content: { 'application/json': { schema: CreateCellSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Cell successfully added',
      content: { 'application/json': { schema: CellSchema } },
    },
    404: {
      description: 'Dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDashboardsDashboardIDCellsCellIDRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardID}/cells/{cellID}',
  tags: ['Cells', 'Dashboards'],
  summary: 'Delete a dashboard cell',
  operationId: 'DeleteDashboardsIDCellsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to delete.',
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'cellID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the cell to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Cell successfully deleted' },
    404: {
      description: 'Cell or dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchDashboardsDashboardIDCellsCellIDRoute = createRoute({
  method: 'patch',
  path: '/dashboards/{dashboardID}/cells/{cellID}',
  tags: ['Cells', 'Dashboards'],
  summary: 'Update the non-positional information related to a cell',
  description:
    "Updates the non positional information related to a cell. Updates to a single cell's positional data could cause grid conflicts.",
  operationId: 'PatchDashboardsIDCellsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'cellID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the cell to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CellUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated dashboard cell',
      content: { 'application/json': { schema: CellSchema } },
    },
    404: {
      description: 'Cell or dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDashboardsDashboardIDCellsCellIDViewRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardID}/cells/{cellID}/view',
  tags: ['Cells', 'Dashboards', 'Views'],
  summary: 'Retrieve the view for a cell',
  operationId: 'GetDashboardsIDCellsIDView',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'cellID',
            schema: { type: 'string' },
            required: true,
            description: 'The cell ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A dashboard cells view',
      content: { 'application/json': { schema: ViewSchema } },
    },
    404: {
      description: 'Cell or dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchDashboardsDashboardIDCellsCellIDViewRoute = createRoute({
  method: 'patch',
  path: '/dashboards/{dashboardID}/cells/{cellID}/view',
  tags: ['Cells', 'Dashboards', 'Views'],
  summary: 'Update the view for a cell',
  operationId: 'PatchDashboardsIDCellsIDView',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the dashboard to update.',
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'cellID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the cell to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ViewSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated cell view',
      content: { 'application/json': { schema: ViewSchema } },
    },
    404: {
      description: 'Cell or dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDashboardsDashboardIDLabelsRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardID}/labels',
  tags: ['Dashboards'],
  summary: 'List all labels for a dashboard',
  operationId: 'GetDashboardsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a dashboard',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDashboardsDashboardIDLabelsRoute = createRoute({
  method: 'post',
  path: '/dashboards/{dashboardID}/labels',
  tags: ['Dashboards'],
  summary: 'Add a label to a dashboard',
  operationId: 'PostDashboardsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
    body: {
      description: 'Label to add',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The label added to the dashboard',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDashboardsDashboardIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardID}/labels/{labelID}',
  tags: ['Dashboards'],
  summary: 'Delete a label from a dashboard',
  operationId: 'DeleteDashboardsIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Dashboard not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDashboardsDashboardIDMembersRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardID}/members',
  tags: ['Dashboards'],
  summary: 'List all dashboard members',
  operationId: 'GetDashboardsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of users who have member privileges for a dashboard',
      content: { 'application/json': { schema: ResourceMembersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDashboardsDashboardIDMembersRoute = createRoute({
  method: 'post',
  path: '/dashboards/{dashboardID}/members',
  tags: ['Dashboards'],
  summary: 'Add a member to a dashboard',
  operationId: 'PostDashboardsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
    body: {
      description: 'User to add as member',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Added to dashboard members',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDashboardsDashboardIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardID}/members/{userID}',
  tags: ['Dashboards'],
  summary: 'Remove a member from a dashboard',
  operationId: 'DeleteDashboardsIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the member to remove.',
          },
        }),
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Member removed' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDashboardsDashboardIDOwnersRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardID}/owners',
  tags: ['Dashboards'],
  summary: 'List all dashboard owners',
  operationId: 'GetDashboardsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of users who have owner privileges for a dashboard',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDashboardsDashboardIDOwnersRoute = createRoute({
  method: 'post',
  path: '/dashboards/{dashboardID}/owners',
  tags: ['Dashboards'],
  summary: 'Add an owner to a dashboard',
  operationId: 'PostDashboardsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
    body: {
      description: 'User to add as owner',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Added to dashboard owners',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDashboardsDashboardIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardID}/owners/{userID}',
  tags: ['Dashboards'],
  summary: 'Remove an owner from a dashboard',
  operationId: 'DeleteDashboardsIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the owner to remove.',
          },
        }),
      dashboardID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dashboardID',
            schema: { type: 'string' },
            required: true,
            description: 'The dashboard ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Owner removed' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postQueryAstRoute = createRoute({
  method: 'post',
  path: '/query/ast',
  tags: ['Query'],
  summary: 'Generate a query Abstract Syntax Tree (AST)',
  description:
    'Analyzes a Flux query and returns a complete package source [Abstract Syntax\nTree (AST)](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#abstract-syntax-tree-ast)\nfor the query.\n\nUse this endpoint for deep query analysis such as debugging unexpected query\nresults.\n\nA Flux query AST provides a semantic, tree-like representation with contextual\ninformation about the query. The AST illustrates how the query is distributed\ninto different components for execution.\n\n#### Limitations\n\n-  The endpoint doesn\'t validate values in the query--for example:\n\n    The following sample Flux query has correct syntax, but contains an incorrect `from()` property key:\n\n    ```js\n    from(foo: "iot_center")\n        |> range(start: -90d)\n        |> filter(fn: (r) => r._measurement == "environment")\n    ```\n\n    The following sample JSON shows how to pass the query in the request body:\n\n    ```js\n    from(foo: "iot_center")\n    |> range(start: -90d)\n    |> filter(fn: (r) => r._measurement == "environment")\n    ```\n\n    The following code sample shows how to pass the query as JSON in the request body:\n\n    ```json\n    { "query": "from(foo: \\"iot_center\\")\\\n                    |> range(start: -90d)\\\n                    |> filter(fn: (r) => r._measurement == \\"environment\\")"\n    }\n    ```\n\n    Passing this to `/api/v2/query/ast` will return a successful response\n    with a generated AST.\n',
  operationId: 'PostQueryAst',
  request: {
    headers: z.object({
      'Zap-Trace-Span': TraceSpanParamsSchema,
      'Content-Type': z
        .literal('application/json')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            schema: { type: 'string', enum: ['application/json'] },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The Flux query to analyze.',
      content: { 'application/json': { schema: LanguageRequestSchema } },
    },
  },
  responses: {
    200: {
      description:
        'Success.\nThe response body contains an Abstract Syntax Tree (AST) of the Flux query.\n',
      content: {
        'application/json': {
          schema: ASTResponseSchema,
          examples: {
            successResponse: {
              value: {
                ast: {
                  type: 'Package',
                  package: 'main',
                  files: [
                    {
                      type: 'File',
                      location: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 109 },
                        source:
                          'from(bucket: "example-bucket") |> range(start: -5m) |> filter(fn: (r) => r._measurement == "example-measurement")',
                      },
                      metadata: 'parser-type=rust',
                      package: null,
                      imports: null,
                      body: [
                        {
                          type: 'ExpressionStatement',
                          location: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 109 },
                            source:
                              'from(bucket: "example-bucket") |> range(start: -5m) |> filter(fn: (r) => r._measurement == "example-measurement")',
                          },
                          expression: {
                            type: 'PipeExpression',
                            location: {
                              start: { line: 1, column: 1 },
                              end: { line: 1, column: 109 },
                              source:
                                'from(bucket: "example-bucket") |> range(start: -5m) |> filter(fn: (r) => r._measurement == "example-measurement")',
                            },
                            argument: {
                              type: 'PipeExpression',
                              location: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 47 },
                                source: 'from(bucket: "example-bucket") |> range(start: -5m)',
                              },
                              argument: {
                                type: 'CallExpression',
                                location: {
                                  start: { line: 1, column: 1 },
                                  end: { line: 1, column: 26 },
                                  source: 'from(bucket: "example-bucket")',
                                },
                                callee: {
                                  type: 'Identifier',
                                  location: {
                                    start: { line: 1, column: 1 },
                                    end: { line: 1, column: 5 },
                                    source: 'from',
                                  },
                                  name: 'from',
                                },
                                arguments: [
                                  {
                                    type: 'ObjectExpression',
                                    location: {
                                      start: { line: 1, column: 6 },
                                      end: { line: 1, column: 25 },
                                      source: 'bucket: "example-bucket"',
                                    },
                                    properties: [
                                      {
                                        type: 'Property',
                                        location: {
                                          start: { line: 1, column: 6 },
                                          end: { line: 1, column: 25 },
                                          source: 'bucket: "example-bucket"',
                                        },
                                        key: {
                                          type: 'Identifier',
                                          location: {
                                            start: { line: 1, column: 6 },
                                            end: { line: 1, column: 12 },
                                            source: 'bucket',
                                          },
                                          name: 'bucket',
                                        },
                                        value: {
                                          type: 'StringLiteral',
                                          location: {
                                            start: { line: 1, column: 14 },
                                            end: { line: 1, column: 25 },
                                            source: '"example-bucket"',
                                          },
                                          value: 'example-bucket',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                              call: {
                                type: 'CallExpression',
                                location: {
                                  start: { line: 1, column: 30 },
                                  end: { line: 1, column: 47 },
                                  source: 'range(start: -5m)',
                                },
                                callee: {
                                  type: 'Identifier',
                                  location: {
                                    start: { line: 1, column: 30 },
                                    end: { line: 1, column: 35 },
                                    source: 'range',
                                  },
                                  name: 'range',
                                },
                                arguments: [
                                  {
                                    type: 'ObjectExpression',
                                    location: {
                                      start: { line: 1, column: 36 },
                                      end: { line: 1, column: 46 },
                                      source: 'start: -5m',
                                    },
                                    properties: [
                                      {
                                        type: 'Property',
                                        location: {
                                          start: { line: 1, column: 36 },
                                          end: { line: 1, column: 46 },
                                          source: 'start: -5m',
                                        },
                                        key: {
                                          type: 'Identifier',
                                          location: {
                                            start: { line: 1, column: 36 },
                                            end: { line: 1, column: 41 },
                                            source: 'start',
                                          },
                                          name: 'start',
                                        },
                                        value: {
                                          type: 'UnaryExpression',
                                          location: {
                                            start: { line: 1, column: 43 },
                                            end: { line: 1, column: 46 },
                                            source: '-5m',
                                          },
                                          operator: '-',
                                          argument: {
                                            type: 'DurationLiteral',
                                            location: {
                                              start: { line: 1, column: 44 },
                                              end: { line: 1, column: 46 },
                                              source: '5m',
                                            },
                                            values: [{ magnitude: 5, unit: 'm' }],
                                          },
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                            call: {
                              type: 'CallExpression',
                              location: {
                                start: { line: 1, column: 51 },
                                end: { line: 1, column: 109 },
                                source:
                                  'filter(fn: (r) => r._measurement == "example-measurement")',
                              },
                              callee: {
                                type: 'Identifier',
                                location: {
                                  start: { line: 1, column: 51 },
                                  end: { line: 1, column: 57 },
                                  source: 'filter',
                                },
                                name: 'filter',
                              },
                              arguments: [
                                {
                                  type: 'ObjectExpression',
                                  location: {
                                    start: { line: 1, column: 58 },
                                    end: { line: 1, column: 108 },
                                    source: 'fn: (r) => r._measurement == "example-measurement"',
                                  },
                                  properties: [
                                    {
                                      type: 'Property',
                                      location: {
                                        start: { line: 1, column: 58 },
                                        end: { line: 1, column: 108 },
                                        source:
                                          'fn: (r) => r._measurement == "example-measurement"',
                                      },
                                      key: {
                                        type: 'Identifier',
                                        location: {
                                          start: { line: 1, column: 58 },
                                          end: { line: 1, column: 60 },
                                          source: 'fn',
                                        },
                                        name: 'fn',
                                      },
                                      value: {
                                        type: 'FunctionExpression',
                                        location: {
                                          start: { line: 1, column: 62 },
                                          end: { line: 1, column: 108 },
                                          source: '(r) => r._measurement == "example-measurement"',
                                        },
                                        params: [
                                          {
                                            type: 'Property',
                                            location: {
                                              start: { line: 1, column: 63 },
                                              end: { line: 1, column: 64 },
                                              source: 'r',
                                            },
                                            key: {
                                              type: 'Identifier',
                                              location: {
                                                start: { line: 1, column: 63 },
                                                end: { line: 1, column: 64 },
                                                source: 'r',
                                              },
                                              name: 'r',
                                            },
                                            value: null,
                                          },
                                        ],
                                        body: {
                                          type: 'BinaryExpression',
                                          location: {
                                            start: { line: 1, column: 69 },
                                            end: { line: 1, column: 108 },
                                            source: 'r._measurement == "example-measurement"',
                                          },
                                          operator: '==',
                                          left: {
                                            type: 'MemberExpression',
                                            location: {
                                              start: { line: 1, column: 69 },
                                              end: { line: 1, column: 83 },
                                              source: 'r._measurement',
                                            },
                                            object: {
                                              type: 'Identifier',
                                              location: {
                                                start: { line: 1, column: 69 },
                                                end: { line: 1, column: 70 },
                                                source: 'r',
                                              },
                                              name: 'r',
                                            },
                                            property: {
                                              type: 'Identifier',
                                              location: {
                                                start: { line: 1, column: 71 },
                                                end: { line: 1, column: 83 },
                                                source: '_measurement',
                                              },
                                              name: '_measurement',
                                            },
                                          },
                                          right: {
                                            type: 'StringLiteral',
                                            location: {
                                              start: { line: 1, column: 87 },
                                              end: { line: 1, column: 108 },
                                              source: '"example-measurement"',
                                            },
                                            value: 'example-measurement',
                                          },
                                        },
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request.\nInfluxDB is unable to parse the request.\nThe response body contains detail about the problem.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidASTValue: {
              summary: 'Invalid AST',
              description:
                'If the request body contains a missing property key in `from()`,\nreturns `invalid` and problem detail.\n',
              value: {
                code: 'invalid',
                message: 'invalid AST: loc 1:6-1:19: missing property key',
              },
            },
          },
        },
      },
      headers: z.object({
        'X-Platform-Error-Code': {
          description: 'The reason for the error.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The reason for the error.\n',
              param: { required: false },
              example: 'invalid',
            }),
        },
      }),
    },
    default: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getQuerySuggestionsRoute = createRoute({
  method: 'get',
  path: '/query/suggestions',
  tags: ['Query'],
  summary: 'List Flux query suggestions',
  description:
    'Lists Flux query suggestions. Each suggestion contains a\n[Flux function](https://docs.influxdata.com/flux/v0.x/stdlib/all-functions/)\nname and parameters.\n\nUse this endpoint to retrieve a list of Flux query suggestions used in the\nInfluxDB Flux Query Builder.\n\n#### Limitations\n\n- When writing a query, avoid using `_functionName()` helper functions\nexposed by this endpoint.  Helper function names have an underscore (`_`)\nprefix and aren\'t meant to be used directly in queries--for example:\n\n  - To sort on a column and keep the top n records, use the\n    `top(n, columns=["_value"], tables=<-)` function instead of the `_sortLimit`\n    helper function. `top` uses `_sortLimit`.\n\n#### Related Guides\n\n- [List of all Flux functions](https://docs.influxdata.com/flux/v0.x/stdlib/all-functions/)\n',
  operationId: 'GetQuerySuggestions',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description:
        'Success.\nThe response body contains a list of Flux query suggestions--function\nnames used in the Flux Query Builder autocomplete suggestions.\n',
      content: {
        'application/json': {
          schema: FluxSuggestionsSchema,
          examples: {
            successResponse: {
              value: {
                funcs: [
                  { name: '_fillEmpty', params: { createEmpty: 'bool', tables: 'stream' } },
                  {
                    name: '_highestOrLowest',
                    params: {
                      _sortLimit: 'function',
                      column: 'invalid',
                      groupColumns: 'array',
                      n: 'invalid',
                      reducer: 'function',
                      tables: 'stream',
                    },
                  },
                  {
                    name: '_hourSelection',
                    params: {
                      location: 'object',
                      start: 'int',
                      stop: 'int',
                      tables: 'stream',
                      timeColumn: 'string',
                    },
                  },
                  {
                    name: '_sortLimit',
                    params: { columns: 'array', desc: 'bool', n: 'int', tables: 'stream' },
                  },
                  {
                    name: '_window',
                    params: {
                      createEmpty: 'bool',
                      every: 'duration',
                      location: 'object',
                      offset: 'duration',
                      period: 'duration',
                      startColumn: 'string',
                      stopColumn: 'string',
                      tables: 'stream',
                      timeColumn: 'string',
                    },
                  },
                  {
                    name: 'aggregateWindow',
                    params: {
                      column: 'invalid',
                      createEmpty: 'bool',
                      every: 'duration',
                      fn: 'function',
                      location: 'object',
                      offset: 'duration',
                      period: 'duration',
                      tables: 'stream',
                      timeDst: 'string',
                      timeSrc: 'string',
                    },
                  },
                  { name: 'bool', params: { v: 'invalid' } },
                  { name: 'bottom', params: { columns: 'array', n: 'int', tables: 'stream' } },
                  {
                    name: 'buckets',
                    params: { host: 'string', org: 'string', orgID: 'string', token: 'string' },
                  },
                  { name: 'bytes', params: { v: 'invalid' } },
                  {
                    name: 'cardinality',
                    params: {
                      bucket: 'string',
                      bucketID: 'string',
                      host: 'string',
                      org: 'string',
                      orgID: 'string',
                      predicate: 'function',
                      start: 'invalid',
                      stop: 'invalid',
                      token: 'string',
                    },
                  },
                  {
                    name: 'chandeMomentumOscillator',
                    params: { columns: 'array', n: 'int', tables: 'stream' },
                  },
                  { name: 'columns', params: { column: 'string', tables: 'stream' } },
                  { name: 'contains', params: { set: 'array', value: 'invalid' } },
                  { name: 'count', params: { column: 'string', tables: 'stream' } },
                  {
                    name: 'cov',
                    params: { on: 'array', pearsonr: 'bool', x: 'invalid', y: 'invalid' },
                  },
                  {
                    name: 'covariance',
                    params: {
                      columns: 'array',
                      pearsonr: 'bool',
                      tables: 'stream',
                      valueDst: 'string',
                    },
                  },
                  { name: 'cumulativeSum', params: { columns: 'array', tables: 'stream' } },
                  {
                    name: 'derivative',
                    params: {
                      columns: 'array',
                      initialZero: 'bool',
                      nonNegative: 'bool',
                      tables: 'stream',
                      timeColumn: 'string',
                      unit: 'duration',
                    },
                  },
                  { name: 'die', params: { msg: 'string' } },
                  {
                    name: 'difference',
                    params: {
                      columns: 'array',
                      initialZero: 'bool',
                      keepFirst: 'bool',
                      nonNegative: 'bool',
                      tables: 'stream',
                    },
                  },
                  { name: 'display', params: { v: 'invalid' } },
                  { name: 'distinct', params: { column: 'string', tables: 'stream' } },
                  { name: 'doubleEMA', params: { n: 'int', tables: 'stream' } },
                  { name: 'drop', params: { columns: 'array', fn: 'function', tables: 'stream' } },
                  {
                    name: 'duplicate',
                    params: { as: 'string', column: 'string', tables: 'stream' },
                  },
                  { name: 'duration', params: { v: 'invalid' } },
                  {
                    name: 'elapsed',
                    params: {
                      columnName: 'string',
                      tables: 'stream',
                      timeColumn: 'string',
                      unit: 'duration',
                    },
                  },
                  { name: 'exponentialMovingAverage', params: { n: 'int', tables: 'stream' } },
                  {
                    name: 'fill',
                    params: {
                      column: 'string',
                      tables: 'stream',
                      usePrevious: 'bool',
                      value: 'invalid',
                    },
                  },
                  {
                    name: 'filter',
                    params: { fn: 'function', onEmpty: 'string', tables: 'stream' },
                  },
                  {
                    name: 'findColumn',
                    params: { column: 'string', fn: 'function', tables: 'stream' },
                  },
                  { name: 'findRecord', params: { fn: 'function', idx: 'int', tables: 'stream' } },
                  { name: 'first', params: { column: 'string', tables: 'stream' } },
                  { name: 'float', params: { v: 'invalid' } },
                  {
                    name: 'from',
                    params: {
                      bucket: 'string',
                      bucketID: 'string',
                      host: 'string',
                      org: 'string',
                      orgID: 'string',
                      token: 'string',
                    },
                  },
                  { name: 'getColumn', params: { column: 'string' } },
                  { name: 'getRecord', params: { idx: 'int' } },
                  { name: 'group', params: { columns: 'array', mode: 'string', tables: 'stream' } },
                  {
                    name: 'highestAverage',
                    params: { column: 'string', groupColumns: 'array', n: 'int', tables: 'stream' },
                  },
                  {
                    name: 'highestCurrent',
                    params: { column: 'string', groupColumns: 'array', n: 'int', tables: 'stream' },
                  },
                  {
                    name: 'highestMax',
                    params: { column: 'string', groupColumns: 'array', n: 'int', tables: 'stream' },
                  },
                  {
                    name: 'histogram',
                    params: {
                      bins: 'array',
                      column: 'string',
                      countColumn: 'string',
                      normalize: 'bool',
                      tables: 'stream',
                      upperBoundColumn: 'string',
                    },
                  },
                  {
                    name: 'histogramQuantile',
                    params: {
                      countColumn: 'string',
                      minValue: 'float',
                      quantile: 'float',
                      tables: 'stream',
                      upperBoundColumn: 'string',
                      valueColumn: 'string',
                    },
                  },
                  {
                    name: 'holtWinters',
                    params: {
                      column: 'string',
                      interval: 'duration',
                      n: 'int',
                      seasonality: 'int',
                      tables: 'stream',
                      timeColumn: 'string',
                      withFit: 'bool',
                    },
                  },
                  {
                    name: 'hourSelection',
                    params: {
                      location: 'object',
                      start: 'int',
                      stop: 'int',
                      tables: 'stream',
                      timeColumn: 'string',
                    },
                  },
                  { name: 'increase', params: { columns: 'array', tables: 'stream' } },
                  { name: 'int', params: { v: 'invalid' } },
                  {
                    name: 'integral',
                    params: {
                      column: 'string',
                      interpolate: 'string',
                      tables: 'stream',
                      timeColumn: 'string',
                      unit: 'duration',
                    },
                  },
                  { name: 'join', params: { method: 'string', on: 'array', tables: 'invalid' } },
                  { name: 'kaufmansAMA', params: { column: 'string', n: 'int', tables: 'stream' } },
                  { name: 'kaufmansER', params: { n: 'int', tables: 'stream' } },
                  { name: 'keep', params: { columns: 'array', fn: 'function', tables: 'stream' } },
                  { name: 'keyValues', params: { keyColumns: 'array', tables: 'stream' } },
                  { name: 'keys', params: { column: 'string', tables: 'stream' } },
                  { name: 'last', params: { column: 'string', tables: 'stream' } },
                  { name: 'length', params: { arr: 'array' } },
                  { name: 'limit', params: { n: 'int', offset: 'int', tables: 'stream' } },
                  {
                    name: 'linearBins',
                    params: { count: 'int', infinity: 'bool', start: 'float', width: 'float' },
                  },
                  {
                    name: 'logarithmicBins',
                    params: { count: 'int', factor: 'float', infinity: 'bool', start: 'float' },
                  },
                  {
                    name: 'lowestAverage',
                    params: { column: 'string', groupColumns: 'array', n: 'int', tables: 'stream' },
                  },
                  {
                    name: 'lowestCurrent',
                    params: { column: 'string', groupColumns: 'array', n: 'int', tables: 'stream' },
                  },
                  {
                    name: 'lowestMin',
                    params: { column: 'string', groupColumns: 'array', n: 'int', tables: 'stream' },
                  },
                  { name: 'map', params: { fn: 'function', mergeKey: 'bool', tables: 'stream' } },
                  { name: 'max', params: { column: 'string', tables: 'stream' } },
                  { name: 'mean', params: { column: 'string', tables: 'stream' } },
                  {
                    name: 'median',
                    params: {
                      column: 'string',
                      compression: 'float',
                      method: 'string',
                      tables: 'stream',
                    },
                  },
                  { name: 'min', params: { column: 'string', tables: 'stream' } },
                  { name: 'mode', params: { column: 'string', tables: 'stream' } },
                  { name: 'movingAverage', params: { n: 'int', tables: 'stream' } },
                  { name: 'now', params: {} },
                  { name: 'pearsonr', params: { on: 'array', x: 'invalid', y: 'invalid' } },
                  {
                    name: 'pivot',
                    params: {
                      columnKey: 'array',
                      rowKey: 'array',
                      tables: 'stream',
                      valueColumn: 'string',
                    },
                  },
                  {
                    name: 'quantile',
                    params: {
                      column: 'string',
                      compression: 'float',
                      method: 'string',
                      q: 'float',
                      tables: 'stream',
                    },
                  },
                  {
                    name: 'range',
                    params: { start: 'invalid', stop: 'invalid', tables: 'stream' },
                  },
                  {
                    name: 'reduce',
                    params: { fn: 'function', identity: 'invalid', tables: 'stream' },
                  },
                  {
                    name: 'relativeStrengthIndex',
                    params: { columns: 'array', n: 'int', tables: 'stream' },
                  },
                  {
                    name: 'rename',
                    params: { columns: 'invalid', fn: 'function', tables: 'stream' },
                  },
                  {
                    name: 'sample',
                    params: { column: 'string', n: 'int', pos: 'int', tables: 'stream' },
                  },
                  { name: 'set', params: { key: 'string', tables: 'stream', value: 'string' } },
                  { name: 'skew', params: { column: 'string', tables: 'stream' } },
                  { name: 'sort', params: { columns: 'array', desc: 'bool', tables: 'stream' } },
                  { name: 'spread', params: { column: 'string', tables: 'stream' } },
                  {
                    name: 'stateCount',
                    params: { column: 'string', fn: 'function', tables: 'stream' },
                  },
                  {
                    name: 'stateDuration',
                    params: {
                      column: 'string',
                      fn: 'function',
                      tables: 'stream',
                      timeColumn: 'string',
                      unit: 'duration',
                    },
                  },
                  {
                    name: 'stateTracking',
                    params: {
                      countColumn: 'string',
                      durationColumn: 'string',
                      durationUnit: 'duration',
                      fn: 'function',
                      tables: 'stream',
                      timeColumn: 'string',
                    },
                  },
                  {
                    name: 'stddev',
                    params: { column: 'string', mode: 'string', tables: 'stream' },
                  },
                  { name: 'string', params: { v: 'invalid' } },
                  { name: 'sum', params: { column: 'string', tables: 'stream' } },
                  { name: 'tableFind', params: { fn: 'function', tables: 'stream' } },
                  { name: 'tail', params: { n: 'int', offset: 'int', tables: 'stream' } },
                  { name: 'time', params: { v: 'invalid' } },
                  {
                    name: 'timeShift',
                    params: { columns: 'array', duration: 'duration', tables: 'stream' },
                  },
                  { name: 'timeWeightedAvg', params: { tables: 'stream', unit: 'duration' } },
                  {
                    name: 'timedMovingAverage',
                    params: {
                      column: 'string',
                      every: 'duration',
                      period: 'duration',
                      tables: 'stream',
                    },
                  },
                  {
                    name: 'to',
                    params: {
                      bucket: 'string',
                      bucketID: 'string',
                      fieldFn: 'function',
                      host: 'string',
                      measurementColumn: 'string',
                      org: 'string',
                      orgID: 'string',
                      tables: 'stream',
                      tagColumns: 'array',
                      timeColumn: 'string',
                      token: 'string',
                    },
                  },
                  { name: 'toBool', params: { tables: 'stream' } },
                  { name: 'toFloat', params: { tables: 'stream' } },
                  { name: 'toInt', params: { tables: 'stream' } },
                  { name: 'toString', params: { tables: 'stream' } },
                  { name: 'toTime', params: { tables: 'stream' } },
                  { name: 'toUInt', params: { tables: 'stream' } },
                  { name: 'today', params: {} },
                  { name: 'top', params: { columns: 'array', n: 'int', tables: 'stream' } },
                  { name: 'tripleEMA', params: { n: 'int', tables: 'stream' } },
                  { name: 'tripleExponentialDerivative', params: { n: 'int', tables: 'stream' } },
                  {
                    name: 'truncateTimeColumn',
                    params: { tables: 'stream', timeColumn: 'invalid', unit: 'duration' },
                  },
                  { name: 'uint', params: { v: 'invalid' } },
                  { name: 'union', params: { tables: 'array' } },
                  { name: 'unique', params: { column: 'string', tables: 'stream' } },
                  {
                    name: 'wideTo',
                    params: {
                      bucket: 'string',
                      bucketID: 'string',
                      host: 'string',
                      org: 'string',
                      orgID: 'string',
                      tables: 'stream',
                      token: 'string',
                    },
                  },
                  {
                    name: 'window',
                    params: {
                      createEmpty: 'bool',
                      every: 'duration',
                      location: 'object',
                      offset: 'duration',
                      period: 'duration',
                      startColumn: 'string',
                      stopColumn: 'string',
                      tables: 'stream',
                      timeColumn: 'string',
                    },
                  },
                  { name: 'yield', params: { name: 'string', tables: 'stream' } },
                ],
              },
            },
          },
        },
      },
    },
    301: {
      description:
        'Moved Permanently.\nInfluxData has moved the URL of the endpoint.\nUse `/api/v2/query/suggestions` (without a trailing slash).\n',
      content: {
        'text/html': {
          schema: z
            .object({
              body: z
                .string()
                .exactOptional()
                .openapi({
                  readOnly: true,
                  description: 'Response message with URL of requested resource.',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            movedPermanently: {
              summary: 'Invalid URL',
              description: 'The URL has been permanently moved. Use `/api/v2/query/suggestions`.\n',
              value:
                '<a href="/api/v2/query/suggestions?orgID=INFLUX_ORG_ID">Moved Permanently</a>\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getQuerySuggestionsNameRoute = createRoute({
  method: 'get',
  path: '/query/suggestions/{name}',
  tags: ['Query'],
  summary: 'Retrieve a query suggestion for a branching suggestion',
  description:
    'Retrieves a query suggestion that contains the name and parameters of the\nrequested function.\n\nUse this endpoint to pass a branching suggestion (a Flux function name) and\nretrieve the parameters of the requested function.\n\n#### Limitations\n\n- Use `/api/v2/query/suggestions/{name}` (without a trailing slash).\n`/api/v2/query/suggestions/{name}/` (note the trailing slash) results in a\nHTTP `301 Moved Permanently` status.\n\n- The function `name` must exist and must be spelled correctly.\n\n#### Related Guides\n\n- [List of all Flux functions](https://docs.influxdata.com/flux/v0.x/stdlib/all-functions/)\n',
  operationId: 'GetQuerySuggestionsName',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            schema: { type: 'string' },
            required: true,
            description:
              'A [Flux function](https://docs.influxdata.com/flux/v0.x/stdlib/all-functions/) name.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains the function name and parameters.\n',
      content: {
        'application/json': {
          schema: FluxSuggestionSchema,
          examples: {
            successResponse: {
              value: { name: 'sum', params: { column: 'string', tables: 'stream' } },
            },
          },
        },
      },
    },
    500: {
      description:
        'Internal server error.\nThe value passed for _`name`_ may have been misspelled.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            internalError: {
              summary: 'Invalid function',
              description: "The requested function doesn't exist.\n",
              value: { code: 'internal error', message: 'An internal error has occurred' },
            },
          },
        },
      },
    },
  },
})

export const postQueryAnalyzeRoute = createRoute({
  method: 'post',
  path: '/query/analyze',
  tags: ['Query'],
  summary: 'Analyze a Flux query',
  description:
    'Analyzes a [Flux query](https://docs.influxdata.com/flux/v0.x/) for syntax\nerrors and returns the list of errors.\n\nIn the following sample query, `from()` is missing the property key.\n\n    ```json\n    { "query": "from(: \\"iot_center\\")\\\n                |> range(start: -90d)\\\n                |> filter(fn: (r) => r._measurement == \\"environment\\")",\n      "type": "flux"\n    }\n    ```\n\nIf you pass this in a request to the `/api/v2/analyze` endpoint,\nInfluxDB returns an `errors` list that contains an error object for the missing key.\n\n#### Limitations\n\n-  The endpoint doesn\'t validate values in the query--for example:\n\n  - The following sample query has correct syntax, but contains an incorrect `from()` property key:\n\n    ```json\n    { "query": "from(foo: \\"iot_center\\")\\\n                |> range(start: -90d)\\\n                |> filter(fn: (r) => r._measurement == \\"environment\\")",\n      "type": "flux"\n    }\n    ```\n\n    If you pass this in a request to the `/api/v2/analyze` endpoint,\n    InfluxDB returns an empty `errors` list.\n',
  operationId: 'PostQueryAnalyze',
  request: {
    headers: z.object({
      'Zap-Trace-Span': TraceSpanParamsSchema,
      'Content-Type': z
        .literal('application/json')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            schema: { type: 'string', enum: ['application/json'] },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Flux query to analyze',
      content: { 'application/json': { schema: QuerySchema } },
    },
  },
  responses: {
    200: {
      description:
        'Success.\nThe response body contains the list of `errors`.\nIf the query syntax is valid, the endpoint returns an empty `errors` list.\n',
      content: {
        'application/json': {
          schema: AnalyzeQueryResponseSchema,
          examples: {
            missingQueryPropertyKey: {
              summary: 'Missing property key error',
              description:
                'Returns an error object if the Flux query is missing a property key.\n\nThe following sample query is missing the _`bucket`_ property key:\n\n```json\n{\n  "query": "from(: \\"iot_center\\")\\\n  ...\n}\n```\n',
              value: {
                errors: [{ line: 1, column: 6, character: 0, message: 'missing property key' }],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request.\nInfluxDB is unable to parse the request.\nThe response body contains detail about the problem.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidJSONStringValue: {
              summary: 'Invalid JSON',
              description:
                'If the request body contains invalid JSON, returns `invalid` and problem detail.',
              value: {
                code: 'invalid',
                message: "invalid json: invalid character '\\'' looking for beginning of value",
              },
            },
          },
        },
      },
      headers: z.object({
        'X-Platform-Error-Code': {
          description: 'The reason for the error.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The reason for the error.\n',
              param: { required: false },
              example: 'invalid',
            }),
        },
      }),
    },
    default: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            emptyJSONObject: {
              summary: 'Empty JSON object in request body',
              description:
                'If the request body contains an empty JSON object, returns `internal error`.\n',
              value: {
                code: 'internal error',
                message: 'An internal error has occurred - check server logs',
              },
            },
          },
        },
      },
      headers: z.object({
        'X-Platform-Error-Code': {
          description: 'The reason for the error.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The reason for the error.',
              param: { required: false },
              example: 'internal error',
            }),
        },
        'X-Influx-Error': {
          description: 'A string that describes the problem.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A string that describes the problem.',
              param: { required: false },
            }),
        },
        'X-Influx-Reference': {
          description: 'The numeric reference code for the error type.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The numeric reference code for the error type.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  tags: ['Data I/O endpoints', 'Query'],
  summary: 'Query data',
  description:
    'Retrieves data from buckets.\n\nUse this endpoint to send a Flux query request and retrieve data from a bucket.\n\n#### Rate limits (with InfluxDB Cloud)\n\n`read` rate limits apply.\nFor more information, see [limits and adjustable quotas](https://docs.influxdata.com/influxdb/cloud/account-management/limits/).\n\n#### Related guides\n\n- [Query with the InfluxDB API](https://docs.influxdata.com/influxdb/cloud/query-data/execute-queries/influx-api/)\n- [Get started with Flux](https://docs.influxdata.com/flux/v0.x/get-started/)\n',
  operationId: 'PostQuery',
  request: {
    headers: z.object({
      'Zap-Trace-Span': TraceSpanParamsSchema,
      'Accept-Encoding': z
        .enum(['gzip', 'identity'])
        .default('identity')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Encoding',
            description:
              'The content encoding (usually a compression algorithm) that the client can understand.',
            schema: {
              type: 'string',
              description:
                'The content coding.  Use `gzip` for compressed data or `identity` for unmodified, uncompressed data.',
              default: 'identity',
              enum: ['gzip', 'identity'],
            },
            required: false,
          },
          description:
            'The content coding.  Use `gzip` for compressed data or `identity` for unmodified, uncompressed data.',
        }),
      'Content-Type': z
        .enum(['application/json', 'application/vnd.flux'])
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            schema: { type: 'string', enum: ['application/json', 'application/vnd.flux'] },
            required: false,
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              "An organization name or ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Queries the bucket in the organization associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or `orgID` parameter.\n- Queries the bucket in the specified organization.\n",
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              "An organization ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Queries the bucket in the organization associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or `orgID` parameter.\n- Queries the bucket in the specified organization.\n",
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Flux query or specification to execute',
      content: {
        'application/json': { schema: QuerySchema },
        'application/vnd.flux': {
          schema: z.string(),
          example:
            'from(bucket: "example-bucket")\n    |> range(start: -5m)\n    |> filter(fn: (r) => r._measurement == "example-measurement")\n',
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success. The response body contains query results.',
      content: {
        'application/csv': {
          schema: z.string(),
          example:
            'result,table,_start,_stop,_time,region,host,_value\nmean,0,2018-05-08T20:50:00Z,2018-05-08T20:51:00Z,2018-05-08T20:50:00Z,east,A,15.43\nmean,0,2018-05-08T20:50:00Z,2018-05-08T20:51:00Z,2018-05-08T20:50:20Z,east,B,59.25\nmean,0,2018-05-08T20:50:00Z,2018-05-08T20:51:00Z,2018-05-08T20:50:40Z,east,C,52.62\n',
        },
      },
      headers: z.object({
        'Content-Encoding': {
          description:
            'Lists encodings (usually compression algorithms) that have been applied to the response payload.',
          schema: z
            .enum(['gzip', 'identity'])
            .default('identity')
            .exactOptional()
            .openapi({
              description:
                'Lists encodings (usually compression algorithms) that have been applied to the response payload.',
              param: { required: false },
            }),
        },
        'Trace-Id': {
          description: 'The trace ID, if generated, of the request.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The trace ID, if generated, of the request.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description:
        "Bad request.\nThe response body contains detail about the error.\n\n#### InfluxDB OSS\n\n- Returns this error if the `org` parameter or `orgID` parameter doesn't match an organization.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            orgNotFound: {
              summary: 'Organization not found',
              value: {
                code: 'invalid',
                message: 'failed to decode request body: organization not found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    429: {
      description:
        "#### InfluxDB Cloud:\n  - returns this error if a **read** or **write** request exceeds your\n    plan's [adjustable service quotas](https://docs.influxdata.com/influxdb/cloud/account-management/limits/#adjustable-service-quotas)\n    or if a **delete** request exceeds the maximum\n    [global limit](https://docs.influxdata.com/influxdb/cloud/account-management/limits/#global-limits)\n  - returns `Retry-After` header that describes when to try the write again.\n\n#### InfluxDB OSS:\n  - doesn't return this error.\n",
      headers: z.object({
        'Retry-After': {
          description:
            'Non-negative decimal integer indicating seconds to wait before retrying the request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description:
                'Non-negative decimal integer indicating seconds to wait before retrying the request.',
              param: { required: false },
            }),
        },
      }),
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getBucketsRoute = createRoute({
  method: 'get',
  path: '/buckets',
  tags: ['Buckets'],
  summary: 'List buckets',
  description:
    'Lists [buckets](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#bucket).\n\nInfluxDB retrieves buckets owned by the\n[organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization)\nassociated with the authorization\n([API token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token)).\nTo limit which buckets are returned, pass query parameters in your request.\nIf no query parameters are passed, InfluxDB returns all buckets up to the\ndefault `limit`.\n\n#### InfluxDB OSS\n\n- If you use an _[operator token](https://docs.influxdata.com/influxdb/cloud/security/tokens/#operator-token)_\n  to authenticate your request, InfluxDB retrieves resources for _all\n  organizations_ in the instance.\n  To retrieve resources for only a specific organization, use the\n  `org` parameter or the `orgID` parameter to specify the organization.\n\n#### Required permissions\n\n| Action                    | Permission required |\n|:--------------------------|:--------------------|\n| Retrieve _user buckets_   | `read-buckets`      |\n| Retrieve [_system buckets_](https://docs.influxdata.com/influxdb/cloud/reference/internals/system-buckets/) | `read-orgs`         |\n\n#### Related Guides\n\n- [Manage buckets](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/)\n',
  operationId: 'GetBuckets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      after: AfterParamsSchema,
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              "An organization name.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Lists buckets for the organization associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Lists buckets for the specified organization.\n",
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              "An organization ID.\n\n#### InfluxDB Cloud\n\n- Doesn't use the `org` parameter or `orgID` parameter.\n- Lists buckets for the organization associated with the authorization (API token).\n\n#### InfluxDB OSS\n\n- Requires either the `org` parameter or `orgID` parameter.\n- Lists buckets for the specified organization.\n",
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            description: 'A bucket name.\nOnly returns buckets with the specified name.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            description: 'A bucket ID.\nOnly returns the bucket with the specified ID.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains a list of `buckets`.\n',
      content: {
        'application/json': {
          schema: BucketsSchema,
          examples: {
            successResponse: {
              value: {
                links: {
                  self: '/api/v2/buckets?descending=false&limit=20&name=_monitoring&offset=0&orgID=ORG_ID',
                },
                buckets: [
                  {
                    id: '77ca9dace40a9bfc',
                    orgID: 'INFLUX_ORG_ID',
                    type: 'system',
                    schemaType: 'implicit',
                    description: 'System bucket for monitoring logs',
                    name: '_monitoring',
                    retentionRules: [{ type: 'expire', everySeconds: 604800 }],
                    createdAt: '2022-03-15T17:22:33.72617939Z',
                    updatedAt: '2022-03-15T17:22:33.726179487Z',
                    links: {
                      labels: '/api/v2/buckets/77ca9dace40a9bfc/labels',
                      members: '/api/v2/buckets/77ca9dace40a9bfc/members',
                      org: '/api/v2/orgs/INFLUX_ORG_ID',
                      owners: '/api/v2/buckets/77ca9dace40a9bfc/owners',
                      self: '/api/v2/buckets/77ca9dace40a9bfc',
                      write: '/api/v2/write?org=ORG_ID&bucket=77ca9dace40a9bfc',
                    },
                    labels: [],
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBucketsRoute = createRoute({
  method: 'post',
  path: '/buckets',
  tags: ['Buckets'],
  summary: 'Create a bucket',
  description:
    'Creates a [bucket](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#bucket)\nand returns the bucket resource.\nThe default data\n[retention period](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#retention-period)\nis 30 days.\n\n#### InfluxDB OSS\n\n- A single InfluxDB OSS instance supports active writes or queries for\napproximately 20 buckets across all organizations at a given time.\nReading or writing to more than 20 buckets at a time can adversely affect\nperformance.\n\n#### Limitations\n\n- InfluxDB Cloud Free Plan allows users to create up to two buckets.\nExceeding the bucket quota will result in an HTTP `403` status code.\nFor additional information regarding InfluxDB Cloud offerings, see\n[InfluxDB Cloud Pricing](https://www.influxdata.com/influxdb-cloud-pricing/).\n\n#### Related Guides\n\n- [Create a bucket](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/create-bucket/)\n- [Create bucket CLI reference](https://docs.influxdata.com/influxdb/cloud/reference/cli/influx/bucket/create)\n',
  operationId: 'PostBuckets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'The bucket to create.',
      content: { 'application/json': { schema: PostBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success.\nThe bucket is created.\n',
      content: {
        'application/json': {
          schema: BucketSchema,
          examples: {
            successResponse: {
              value: {
                id: '37407e232b3911d8',
                orgID: 'INFLUX_ORG_ID',
                type: 'user',
                schemaType: 'implicit',
                description: 'A bucket holding air sensor data',
                name: 'air_sensor',
                retentionRules: [{ type: 'expire', everySeconds: 2592000 }],
                createdAt: '2022-08-03T23:04:41.073704121Z',
                updatedAt: '2022-08-03T23:04:41.073704228Z',
                links: {
                  labels: '/api/v2/buckets/37407e232b3911d8/labels',
                  members: '/api/v2/buckets/37407e232b3911d8/members',
                  org: '/api/v2/orgs/INFLUX_ORG_ID',
                  owners: '/api/v2/buckets/37407e232b3911d8/owners',
                  self: '/api/v2/buckets/37407e232b3911d8',
                  write: '/api/v2/write?org=INFLUX_ORG_ID&bucket=37407e232b3911d8',
                },
                labels: [],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden.\nThe bucket quota is exceeded.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            quotaExceeded: {
              summary: 'Bucket quota exceeded',
              value: { code: 'forbidden', message: 'creating bucket would exceed quota' },
            },
          },
        },
      },
      headers: z.object({
        'X-Platform-Error-Code': {
          description: 'The reason for the error.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The reason for the error.\n',
              param: { required: false },
              example: 'forbidden',
            }),
        },
      }),
    },
    422: {
      description: 'Unprocessable Entity.\nThe request body failed validation.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBucketsBucketIDRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}',
  tags: ['Buckets'],
  summary: 'Retrieve a bucket',
  description:
    'Retrieves a bucket.\n\nUse this endpoint to retrieve information for a specific bucket.\n',
  operationId: 'GetBucketsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to retrieve.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains the bucket information.\n',
      content: {
        'application/json': {
          schema: BucketSchema,
          examples: {
            successResponse: {
              value: {
                id: '37407e232b3911d8',
                orgID: 'bea7ea952287f70d',
                type: 'user',
                schemaType: 'implicit',
                description: 'bucket for air sensor data',
                name: 'air-sensor',
                retentionRules: [{ type: 'expire', everySeconds: 2592000 }],
                createdAt: '2022-08-03T23:04:41.073704121Z',
                updatedAt: '2022-08-03T23:04:41.073704228Z',
                links: {
                  labels: '/api/v2/buckets/37407e232b3911d8/labels',
                  members: '/api/v2/buckets/37407e232b3911d8/members',
                  org: '/api/v2/orgs/INFLUX_ORG_ID',
                  owners: '/api/v2/buckets/37407e232b3911d8/owners',
                  self: '/api/v2/buckets/37407e232b3911d8',
                  write: '/api/v2/write?org=INFLUX_ORG_ID&bucket=37407e232b3911d8',
                },
                labels: [],
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description: 'Not found.\nBucket not found.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: "The requested bucket wasn't found.\n",
              value: { code: 'not found', message: 'bucket not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteBucketsBucketIDRoute = createRoute({
  method: 'delete',
  path: '/buckets/{bucketID}',
  tags: ['Buckets'],
  summary: 'Delete a bucket',
  description:
    'Deletes a bucket and all associated records.\n\n#### InfluxDB Cloud\n\n- Does the following when you send a delete request:\n\n  1. Validates the request and queues the delete.\n  2. Returns an HTTP `204` status code if queued; _error_ otherwise.\n  3. Handles the delete asynchronously.\n\n#### InfluxDB OSS\n\n- Validates the request, handles the delete synchronously,\nand then responds with success or failure.\n\n#### Limitations\n\n- Only one bucket can be deleted per request.\n\n#### Related Guides\n\n- [Delete a bucket](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/delete-bucket/#delete-a-bucket-in-the-influxdb-ui)\n',
  operationId: 'DeleteBucketsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'Bucket ID.\nThe ID of the bucket to delete.\n',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'Success.\n\n#### InfluxDB Cloud\n  - The bucket is queued for deletion.\n\n#### InfluxDB OSS\n  - The bucket is deleted.\n',
    },
    400: {
      description: 'Bad Request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidID: {
              summary: 'Invalid ID.\n',
              value: { code: 'invalid', message: 'id must have a length of 16 bytes' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description: 'Not found.\nBucket not found.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: 'The requested bucket was not found.\n',
              value: { code: 'not found', message: 'bucket not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchBucketsBucketIDRoute = createRoute({
  method: 'patch',
  path: '/buckets/{bucketID}',
  tags: ['Buckets'],
  summary: 'Update a bucket',
  description:
    "Updates a bucket.\n\nUse this endpoint to update properties\n(`name`, `description`, and `retentionRules`) of a bucket.\n\n#### InfluxDB Cloud\n\n- Requires the `retentionRules` property in the request body. If you don't\nprovide `retentionRules`, InfluxDB responds with an HTTP `403` status code.\n\n#### InfluxDB OSS\n\n- Doesn't require `retentionRules`.\n\n#### Related Guides\n\n- [Update a bucket](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/update-bucket/)\n",
  operationId: 'PatchBucketsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The bucket ID.',
          },
        }),
    }),
    body: {
      description: 'The bucket update to apply.',
      content: { 'application/json': { schema: PatchBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated bucket',
      content: {
        'application/json': {
          schema: BucketSchema,
          examples: {
            successResponse: {
              value: {
                id: '37407e232b3911d8',
                orgID: 'INFLUX_ORG_ID',
                type: 'user',
                schemaType: 'implicit',
                description: 'bucket holding air sensor data',
                name: 'air_sensor',
                retentionRules: [{ type: 'expire', everySeconds: 2592000 }],
                createdAt: '2022-08-03T23:04:41.073704121Z',
                updatedAt: '2022-08-07T22:49:49.422962913Z',
                links: {
                  labels: '/api/v2/buckets/37407e232b3911d8/labels',
                  members: '/api/v2/buckets/37407e232b3911d8/members',
                  org: '/api/v2/orgs/INFLUX_ORG_ID',
                  owners: '/api/v2/buckets/37407e232b3911d8/owners',
                  self: '/api/v2/buckets/37407e232b3911d8',
                  write: '/api/v2/write?org=INFLUX_ORG_ID&bucket=37407e232b3911d8',
                },
                labels: [],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidJSONStringValue: {
              summary: 'Invalid JSON',
              description:
                'If the request body contains invalid JSON, InfluxDB returns `invalid`\nwith detail about the problem.\n',
              value: {
                code: 'invalid',
                message: "invalid json: invalid character '\\'' looking for beginning of value",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidRetention: {
              summary:
                'The retention policy provided exceeds the max retention for the\norganization.\n',
              value: {
                code: 'forbidden',
                message: 'provided retention exceeds orgs maximum retention duration',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found.\nBucket not found.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: "The requested bucket wasn't found.\n",
              value: { code: 'not found', message: 'bucket not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBucketsBucketIDLabelsRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}/labels',
  tags: ['Buckets'],
  summary: 'List all labels for a bucket',
  description:
    'Lists all labels for a bucket.\n\nLabels are objects that contain `labelID`, `name`, `description`, and `color`\nkey-value pairs. They may be used for grouping and filtering InfluxDB\nresources.\nLabels are also capable of grouping across different resources--for example,\nyou can apply a label named `air_sensor` to a bucket and a task to quickly\norganize resources.\n\n#### Related guides\n\n- Use the [`/api/v2/labels` InfluxDB API endpoint](#tag/Labels) to retrieve and manage labels.\n- [Manage labels in the InfluxDB UI](https://docs.influxdata.com/influxdb/cloud/visualize-data/labels/)\n',
  operationId: 'GetBucketsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to retrieve labels for.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains a list of all labels for the bucket.\n',
      content: {
        'application/json': {
          schema: LabelsResponseSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/labels' },
                labels: [
                  { id: '09cbd068e7ebb000', orgID: 'INFLUX_ORG_ID', name: 'production_buckets' },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBucketsBucketIDLabelsRoute = createRoute({
  method: 'post',
  path: '/buckets/{bucketID}/labels',
  tags: ['Buckets'],
  summary: 'Add a label to a bucket',
  description:
    "Adds a label to a bucket and returns the new label information.\n\nLabels are objects that contain `labelID`, `name`, `description`, and `color`\nkey-value pairs. They may be used for grouping and filtering across one or\nmore kinds of **resources**--for example, you can apply a label named\n`air_sensor` to a bucket and a task to quickly organize resources.\n\n#### Limitations\n\n- Before adding a label to a bucket, you must create the label if you\n  haven't already. To create a label with the InfluxDB API, send a `POST`\n  request to the [`/api/v2/labels` endpoint](#operation/PostLabels)).\n\n#### Related guides\n\n- Use the [`/api/v2/labels` InfluxDB API endpoint](#tag/Labels) to retrieve and manage labels.\n- [Manage labels in the InfluxDB UI](https://docs.influxdata.com/influxdb/cloud/visualize-data/labels/)\n",
  operationId: 'PostBucketsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'Bucket ID.\nThe ID of the bucket to label.\n',
          },
        }),
    }),
    body: {
      description: 'An object that contains a _`labelID`_ to add to the bucket.',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success.\nThe response body contains the label information.\n',
      content: {
        'application/json': {
          schema: LabelResponseSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/labels' },
                label: {
                  id: '09cbd068e7ebb000',
                  orgID: 'INFLUX_ORG_ID',
                  name: 'production_buckets',
                },
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    422: {
      description: 'Unprocessable entity.\nLabel already exists on the resource.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            conflictingResource: {
              summary: 'Label already exists on the resource.\n',
              value: {
                code: 'conflict',
                message: 'Cannot add label, label already exists on resource',
              },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteBucketsBucketIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/buckets/{bucketID}/labels/{labelID}',
  tags: ['Buckets'],
  summary: 'Delete a label from a bucket',
  operationId: 'DeleteBucketsIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The bucket ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Bucket not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBucketsBucketIDMembersRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}/members',
  tags: ['Buckets'],
  summary: 'List all users with member privileges for a bucket',
  description:
    'Lists all users for a bucket.\n\nInfluxDB [users](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) have\npermission to access InfluxDB.\n\n[Members](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#member) are users in\nan organization with access to the specified resource.\n\nUse this endpoint to retrieve all users with access to a bucket.\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n- [Manage members](https://docs.influxdata.com/influxdb/cloud/organizations/members/)\n',
  operationId: 'GetBucketsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to retrieve users for.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains a list of all users for the bucket.\n',
      content: {
        'application/json': {
          schema: ResourceMembersSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/buckets/37407e232b3911d8/members' },
                users: [
                  {
                    role: 'member',
                    links: { self: '/api/v2/users/791df274afd48a83' },
                    id: '791df274afd48a83',
                    name: 'example_user_1',
                    status: 'active',
                  },
                  {
                    role: 'owner',
                    links: { self: '/api/v2/users/09cfb87051cbe000' },
                    id: '09cfb87051cbe000',
                    name: 'example_user_2',
                    status: 'active',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBucketsBucketIDMembersRoute = createRoute({
  method: 'post',
  path: '/buckets/{bucketID}/members',
  tags: ['Buckets'],
  summary: 'Add a member to a bucket',
  description:
    'Add a user to a bucket and return the new user information.\n\nInfluxDB [users](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) have\npermission to access InfluxDB.\n\n[Members](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#member) are users in\nan organization.\n\nUse this endpoint to give a user member privileges to a bucket.\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n- [Manage members](https://docs.influxdata.com/influxdb/cloud/organizations/members/)\n',
  operationId: 'PostBucketsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to retrieve users for.\n',
          },
        }),
    }),
    body: {
      description: 'A user to add as a member to the bucket.',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success.\nThe response body contains the user information.\n',
      content: {
        'application/json': {
          schema: ResourceMemberSchema,
          examples: {
            successResponse: {
              value: {
                role: 'member',
                links: { self: '/api/v2/users/09cfb87051cbe000' },
                id: '09cfb87051cbe000',
                name: 'example_user_1',
                status: 'active',
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteBucketsBucketIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/buckets/{bucketID}/members/{userID}',
  tags: ['Buckets'],
  summary: 'Remove a member from a bucket',
  description:
    "Removes a member from a bucket.\n\nUse this endpoint to remove a user's member privileges from a bucket. This\nremoves the user's `read` and `write` permissions for the bucket.\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n- [Manage members](https://docs.influxdata.com/influxdb/cloud/organizations/members/)\n",
  operationId: 'DeleteBucketsIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the user to remove.\n',
          },
        }),
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to remove a user from.\n',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success.\nThe user is no longer a member of the bucket.\n' },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBucketsBucketIDOwnersRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}/owners',
  tags: ['Buckets'],
  summary: 'List all owners of a bucket',
  description:
    "Lists all [owners](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#owner)\nof a bucket.\n\nBucket owners have permission to delete buckets and remove user and member\npermissions from the bucket.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Owner permissions are separate from API token permissions.\n- Owner permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `read-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to retrieve a\nlist of owners for.\n\n#### Related endpoints\n\n- [Authorizations](#tag/Authorizations-(API-tokens))\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n",
  operationId: 'GetBucketsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to retrieve owners for.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains a list of all owners for the bucket.\n',
      content: {
        'application/json': {
          schema: ResourceOwnersSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/buckets/BUCKET_ID/owners' },
                users: [
                  {
                    role: 'owner',
                    links: { self: '/api/v2/users/d88d182d91b0950f' },
                    id: 'd88d182d91b0950f',
                    name: 'example-owner',
                    status: 'active',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBucketsBucketIDOwnersRoute = createRoute({
  method: 'post',
  path: '/buckets/{bucketID}/owners',
  tags: ['Buckets'],
  summary: 'Add an owner to a bucket',
  description:
    "Adds an owner to a bucket and returns the [owners](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#owner)\nwith role and user detail.\n\nUse this endpoint to create a _resource owner_ for the bucket.\nBucket owners have permission to delete buckets and remove user and member\npermissions from the bucket.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Owner permissions are separate from API token permissions.\n- Owner permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `write-orgs INFLUX_ORG_ID`\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to add\n  an owner for.\n\n#### Related endpoints\n\n- [Authorizations](#tag/Authorizations-(API-tokens))\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n",
  operationId: 'PostBucketsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to add an owner for.\n',
          },
        }),
    }),
    body: {
      description: 'A user to add as an owner for the bucket.',
      content: {
        'application/json': {
          schema: AddResourceMemberRequestBodySchema,
          examples: {
            successResponse: {
              value: {
                role: 'owner',
                links: { self: '/api/v2/users/d88d182d91b0950f' },
                id: 'd88d182d91b0950f',
                name: 'example-user',
                status: 'active',
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
      description:
        'Created.\nThe bucket `owner` role is assigned to the user.\nThe response body contains the resource owner with\nrole and user detail.\n',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteBucketsBucketIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/buckets/{bucketID}/owners/{userID}',
  tags: ['Buckets'],
  summary: 'Remove an owner from a bucket',
  description:
    "Removes an owner from a bucket.\n\nUse this endpoint to remove a user's `owner` role for a bucket.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Owner permissions are separate from API token permissions.\n- Owner permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `write-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to remove an owner\nfrom.\n\n#### Related endpoints\n\n- [Authorizations](#tag/Authorizations-(API-tokens))\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n",
  operationId: 'DeleteBucketsIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the owner to remove.\n',
          },
        }),
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the bucket to remove an owner from.\n',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success.\nThe user is no longer an owner of the bucket.\n' },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsRoute = createRoute({
  method: 'get',
  path: '/orgs',
  tags: ['Organizations', 'Security and access endpoints'],
  summary: 'List organizations',
  description:
    'Lists [organizations](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization/).\n\nTo limit which organizations are returned, pass query parameters in your request.\nIf no query parameters are passed, InfluxDB returns all organizations up to the default `limit`.\n\n#### InfluxDB Cloud\n\n- Only returns the organization that owns the token passed in the request.\n\n#### Related guides\n\n- [View organizations](https://docs.influxdata.com/influxdb/cloud/organizations/view-orgs/)\n',
  operationId: 'GetOrgs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      descending: DescendingParamsSchema,
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description: 'An organization name.\nOnly returns the specified organization.\n',
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            description: 'An organization ID.\nOnly returns the specified organization.\n',
            required: false,
          },
        }),
      userID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userID',
            schema: { type: 'string' },
            description:
              'A user ID.\nOnly returns organizations where the specified user is a member or owner.\n',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains a list of organizations.',
      content: {
        'application/json': {
          schema: OrganizationsSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/orgs' },
                orgs: [
                  {
                    links: {
                      buckets: '/api/v2/buckets?org=INFLUX_ORG',
                      dashboards: '/api/v2/dashboards?org=INFLUX_ORG',
                      labels: '/api/v2/orgs/INFLUX_ORG_ID/labels',
                      logs: '/api/v2/orgs/INFLUX_ORG_ID/logs',
                      members: '/api/v2/orgs/INFLUX_ORG_ID/members',
                      owners: '/api/v2/orgs/INFLUX_ORG_ID/owners',
                      secrets: '/api/v2/orgs/INFLUX_ORG_ID/secrets',
                      self: '/api/v2/orgs/INFLUX_ORG_ID',
                      tasks: '/api/v2/tasks?org=InfluxData',
                    },
                    id: 'INFLUX_ORG_ID',
                    name: 'INFLUX_ORG',
                    description: 'Example InfluxDB organization',
                    createdAt: '2022-07-17T23:00:30.778487Z',
                    updatedAt: '2022-07-17T23:00:30.778487Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postOrgsRoute = createRoute({
  method: 'post',
  path: '/orgs',
  tags: ['Organizations'],
  summary: 'Create an organization',
  description:
    "Creates an [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization)\nand returns the newly created organization.\n\n#### InfluxDB Cloud\n\n- Doesn't allow you to use this endpoint to create organizations.\n\n#### Related guides\n\n- [Manage organizations](https://docs.influxdata.com/influxdb/cloud/organizations)\n",
  operationId: 'PostOrgs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'The organization to create.',
      content: { 'application/json': { schema: PostOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created. The response body contains the organization information.',
      content: {
        'application/json': {
          schema: OrganizationSchema,
          examples: {
            successResponse: {
              value: {
                links: {
                  buckets: '/api/v2/buckets?org=INFLUX_ORG',
                  dashboards: '/api/v2/dashboards?org=INFLUX_ORG',
                  labels: '/api/v2/orgs/INFLUX_ORG_ID/labels',
                  logs: '/api/v2/orgs/INFLUX_ORG_ID/logs',
                  members: '/api/v2/orgs/INFLUX_ORG_ID/members',
                  owners: '/api/v2/orgs/INFLUX_ORG_ID/owners',
                  secrets: '/api/v2/orgs/INFLUX_ORG_ID/secrets',
                  self: '/api/v2/orgs/INFLUX_ORG_ID',
                  tasks: '/api/v2/tasks?org=INFLUX_ORG',
                },
                id: 'INFLUX_ORG_ID',
                name: 'INFLUX_ORG',
                description: '',
                createdAt: '2022-08-24T23:05:52.881317Z',
                updatedAt: '2022-08-24T23:05:52.881318Z',
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsOrgIDRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}',
  tags: ['Organizations', 'Security and access endpoints'],
  summary: 'Retrieve an organization',
  description:
    'Retrieves an organization.\n\nUse this endpoint to retrieve information for a specific organization.\n\n#### Related guides\n\n- [View organizations](https://docs.influxdata.com/influxdb/cloud/organizations/view-orgs/)\n',
  operationId: 'GetOrgsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to retrieve.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains the organization information.\n',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    401: AuthorizationErrorResponse,
    404: {
      description: 'Not found.\nOrganization not found.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: "The requested organization wasn't found.\n",
              value: { code: 'not found', message: 'organization not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteOrgsOrgIDRoute = createRoute({
  method: 'delete',
  path: '/orgs/{orgID}',
  tags: ['Organizations'],
  summary: 'Delete an organization',
  description:
    "Deletes an organization.\n\nDeleting an organization from InfluxDB Cloud can't be undone.\nOnce deleted, all data associated with the organization is removed.\n\n#### InfluxDB Cloud\n\n- Does the following when you send a delete request:\n\n  1. Validates the request and queues the delete.\n  2. Returns an HTTP `204` status code if queued; _error_ otherwise.\n  3. Handles the delete asynchronously.\n\n#### InfluxDB OSS\n\n- Validates the request, handles the delete synchronously,\nand then responds with success or failure.\n\n#### Limitations\n\n- Only one organization can be deleted per request.\n\n#### Related guides\n\n- [Delete organizations](https://docs.influxdata.com/influxdb/cloud/organizations/delete-orgs/)\n",
  operationId: 'DeleteOrgsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to delete.\n',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'Success.\n\n#### InfluxDB Cloud\n  - The organization is queued for deletion.\n\n#### InfluxDB OSS\n  - The organization is deleted.\n',
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: {
      description: "Not found.\nInfluxDB can't find the organization.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: 'The requested organization was not found.\n',
              value: { code: 'not found', message: 'org not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchOrgsOrgIDRoute = createRoute({
  method: 'patch',
  path: '/orgs/{orgID}',
  tags: ['Organizations'],
  summary: 'Update an organization',
  description:
    'Updates an organization.\n\nUse this endpoint to update properties\n(`name`, `description`) of an organization.\n\nUpdating an organization’s name affects all resources that reference the\norganization by name, including the following:\n\n- Queries\n- Dashboards\n- Tasks\n- Telegraf configurations\n- Templates\n\nIf you change an organization name, be sure to update the organization name\nin these resources as well.\n\n#### Related Guides\n\n- [Update an organization](https://docs.influxdata.com/influxdb/cloud/organizations/update-org/)\n',
  operationId: 'PatchOrgsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to update.\n',
          },
        }),
    }),
    body: {
      description: 'The organization update to apply.',
      content: { 'application/json': { schema: PatchOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success. The response body contains the updated organization.',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsOrgIDSecretsRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/secrets',
  tags: ['Secrets', 'Security and access endpoints'],
  summary: 'List all secret keys for an organization',
  operationId: 'GetOrgsIDSecrets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The organization ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all secret keys',
      content: { 'application/json': { schema: SecretKeysResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchOrgsOrgIDSecretsRoute = createRoute({
  method: 'patch',
  path: '/orgs/{orgID}/secrets',
  tags: ['Secrets'],
  summary: 'Update secrets in an organization',
  operationId: 'PatchOrgsIDSecrets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The organization ID.',
          },
        }),
    }),
    body: {
      description: 'Secret key value pairs to update/add',
      content: { 'application/json': { schema: SecretsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Keys successfully patched' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsOrgIDMembersRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/members',
  tags: ['Organizations', 'Security and access endpoints'],
  summary: 'List all members of an organization',
  description:
    "Lists all users that belong to an organization.\n\nInfluxDB [users](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) have\npermission to access InfluxDB.\n\n[Members](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#member) are users\nwithin the organization.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Member permissions are separate from API token permissions.\n- Member permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `read-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to retrieve\nmembers for.\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n- [Manage members](https://docs.influxdata.com/influxdb/cloud/organizations/members/)\n",
  operationId: 'GetOrgsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to retrieve users for.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success.\nThe response body contains a list of all users within the organization.\n',
      content: {
        'application/json': {
          schema: ResourceMembersSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/orgs/055aa4783aa38398/members' },
                users: [
                  {
                    role: 'member',
                    links: { self: '/api/v2/users/791df274afd48a83' },
                    id: '791df274afd48a83',
                    name: 'example_user_1',
                    status: 'active',
                  },
                  {
                    role: 'owner',
                    links: { self: '/api/v2/users/09cfb87051cbe000' },
                    id: '09cfb87051cbe000',
                    name: 'example_user_2',
                    status: 'active',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: {
      description: "Not found.\nInfluxDB can't find the organization.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: "The requested organization wasn't found.\n",
              value: { code: 'not found', message: '404 page not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOrgsOrgIDMembersRoute = createRoute({
  method: 'post',
  path: '/orgs/{orgID}/members',
  tags: ['Organizations'],
  summary: 'Add a member to an organization',
  description:
    "Add a user to an organization.\n\nInfluxDB [users](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) have\npermission to access InfluxDB.\n\n[Members](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#member) are users\nwithin the organization.\n\n#### InfluxDB Cloud\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Member permissions are separate from API token permissions.\n- Member permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `write-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to add a member to.\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/users/)\n- [Manage members](https://docs.influxdata.com/influxdb/cloud/organizations/members/)\n",
  operationId: 'PostOrgsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization.\n',
          },
        }),
    }),
    body: {
      description: 'The user to add to the organization.\n',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success.\nThe response body contains the user information.\n',
      content: {
        'application/json': {
          schema: ResourceMemberSchema,
          examples: {
            successResponse: {
              value: {
                role: 'member',
                links: { self: '/api/v2/users/09cfb87051cbe000' },
                id: '09cfb87051cbe000',
                name: 'example_user_1',
                status: 'active',
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteOrgsOrgIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/orgs/{orgID}/members/{userID}',
  tags: ['Organizations', 'Security and access endpoints'],
  summary: 'Remove a member from an organization',
  description:
    "Removes a member from an organization.\n\nUse this endpoint to remove a user's member privileges for an organization.\nRemoving member privileges removes the user's `read` and `write` permissions\nfrom the organization.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Member permissions are separate from API token permissions.\n- Member permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `write-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to remove an\nowner from.\n\n#### Related guides\n\n- [Manage members](https://docs.influxdata.com/influxdb/cloud/organizations/members/)\n",
  operationId: 'DeleteOrgsIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the user to remove.',
          },
        }),
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to remove a user from.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success.\nThe user is no longer a member of the organization.\n' },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsOrgIDOwnersRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/owners',
  tags: ['Organizations', 'Security and access endpoints'],
  summary: 'List all owners of an organization',
  description:
    "Lists all owners of an organization.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Required permissions\n\n- `read-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to retrieve a\nlist of owners from.\n",
  operationId: 'GetOrgsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to list owners for.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of organization owners',
      content: {
        'application/json': {
          schema: ResourceOwnersSchema,
          examples: {
            successResponse: {
              value: {
                links: { self: '/api/v2/orgs/055aa4783aa38398/owners' },
                users: [
                  {
                    role: 'owner',
                    links: { self: '/api/v2/users/09cfb87051cbe000' },
                    id: '09cfb87051cbe000',
                    name: 'example_user_2',
                    status: 'active',
                  },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Organization not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOrgsOrgIDOwnersRoute = createRoute({
  method: 'post',
  path: '/orgs/{orgID}/owners',
  tags: ['Organizations'],
  summary: 'Add an owner to an organization',
  description:
    "Adds an owner to an organization.\n\nUse this endpoint to assign the organization `owner` role to a user.\n\n#### InfluxDB Cloud\n\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Required permissions\n\n- `write-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to add an owner for.\n\n#### Related endpoints\n\n- [Authorizations](#tag/Authorizations-(API-tokens))\n",
  operationId: 'PostOrgsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization that you want to add an owner for.',
          },
        }),
    }),
    body: {
      description: 'The user to add as an owner of the organization.',
      content: {
        'application/json': {
          schema: AddResourceMemberRequestBodySchema,
          examples: {
            successResponse: {
              value: {
                role: 'owner',
                links: { self: '/api/v2/users/09cfb87051cbe000' },
                id: '09cfb87051cbe000',
                name: 'example_user_1',
                status: 'active',
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
      description:
        'Success. The user is an owner of the organization.\nThe response body contains the owner with role and user detail.\n',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteOrgsOrgIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/orgs/{orgID}/owners/{userID}',
  tags: ['Organizations', 'Security and access endpoints'],
  summary: 'Remove an owner from an organization',
  description:
    "Removes an [owner](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#owner) from\nthe organization.\n\nOrganization owners have permission to delete organizations and remove user and member\npermissions from the organization.\n\n#### InfluxDB Cloud\n- Doesn't use `owner` and `member` roles.\n  Use [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\n#### Limitations\n\n- Owner permissions are separate from API token permissions.\n- Owner permissions are used in the context of the InfluxDB UI.\n\n#### Required permissions\n\n- `write-orgs INFLUX_ORG_ID`\n\n*`INFLUX_ORG_ID`* is the ID of the organization that you want to\nremove an owner from.\n\n#### Related endpoints\n- [Authorizations](#tag/Authorizations-(API-tokens))\n",
  operationId: 'DeleteOrgsIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the user to remove.',
          },
        }),
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the organization to remove an owner from.\n',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success.\nThe user is no longer an owner of the organization.\n' },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOrgsOrgIDSecretsDeleteRoute = createRoute({
  method: 'post',
  path: '/orgs/{orgID}/secrets/delete',
  tags: ['Secrets', 'Security and access endpoints'],
  summary: 'Delete secrets from an organization',
  operationId: 'PostOrgsIDSecrets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The organization ID.',
          },
        }),
    }),
    body: {
      description: 'Secret key to delete',
      content: { 'application/json': { schema: SecretKeysSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Keys successfully patched' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteOrgsOrgIDSecretsSecretIDRoute = createRoute({
  method: 'delete',
  path: '/orgs/{orgID}/secrets/{secretID}',
  tags: ['Secrets', 'Security and access endpoints'],
  summary: 'Delete a secret from an organization',
  operationId: 'DeleteOrgsIDSecretsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            schema: { type: 'string' },
            required: true,
            description: 'The organization ID.',
          },
        }),
      secretID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'secretID',
            schema: { type: 'string' },
            required: true,
            description: 'The secret ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Keys successfully deleted' },
    default: GeneralServerErrorResponse,
  },
})

export const getResourcesRoute = createRoute({
  method: 'get',
  path: '/resources',
  tags: ['Resources', 'System information endpoints'],
  summary: 'List all known resources',
  operationId: 'GetResources',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'All resources targets',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getStacksRoute = createRoute({
  method: 'get',
  path: '/stacks',
  tags: ['Templates'],
  summary: 'List installed stacks',
  description:
    'Lists installed InfluxDB stacks.\n\nTo limit stacks in the response, pass query parameters in your request.\nIf no query parameters are passed, InfluxDB returns all installed stacks\nfor the organization.\n\n#### Related guides\n\n- [View InfluxDB stacks](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/stacks/).\n',
  operationId: 'ListStacks',
  request: {
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
            description:
              "An organization ID.\nOnly returns stacks owned by the specified [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization).\n\n#### InfluxDB Cloud\n\n- Doesn't require this parameter;\n  InfluxDB only returns resources allowed by the API token.\n",
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            description:
              'A stack name.\nFinds stack `events` with this name and returns the stacks.\n\nRepeatable.\nTo filter for more than one stack name,\nrepeat this parameter with each name--for example:\n\n- `INFLUX_URL/api/v2/stacks?&orgID=INFLUX_ORG_ID&name=project-stack-0&name=project-stack-1`\n',
            examples: {
              findStackByName: {
                summary: 'Find stacks with the event name',
                value: 'project-stack-0',
              },
            },
            required: false,
          },
        }),
      stackID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'stackID',
            schema: { type: 'string' },
            description:
              'A stack ID.\nOnly returns the specified stack.\n\nRepeatable.\nTo filter for more than one stack ID,\nrepeat this parameter with each ID--for example:\n\n- `INFLUX_URL/api/v2/stacks?&orgID=INFLUX_ORG_ID&stackID=09bd87cd33be3000&stackID=09bef35081fe3000`\n',
            examples: {
              findStackByID: { summary: 'Find a stack with the ID', value: '09bd87cd33be3000' },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the list of stacks.',
      content: {
        'application/json': {
          schema: z
            .object({ stacks: z.array(StackSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad request.\nThe response body contains detail about the error.\n\n#### InfluxDB OSS\n\n- Returns this error if an incorrect value is passed in the `org` parameter or `orgID` parameter.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            orgIdMissing: {
              summary: 'The orgID query parameter is missing',
              value: {
                code: 'invalid',
                message: 'organization id[""] is invalid: id must have a length of 16 bytes',
              },
            },
            orgProvidedNotFound: {
              summary: "The org or orgID passed doesn't own the token passed in the header",
              value: {
                code: 'invalid',
                message: 'failed to decode request body: organization not found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStacksRoute = createRoute({
  method: 'post',
  path: '/stacks',
  tags: ['Templates'],
  summary: 'Create a stack',
  description:
    'Creates or initializes a stack.\n\nUse this endpoint to _manually_ initialize a new stack with the following\noptional information:\n\n  - Stack name\n  - Stack description\n  - URLs for template manifest files\n\nTo automatically create a stack when applying templates,\nuse the [/api/v2/templates/apply endpoint](#operation/ApplyTemplate).\n\n#### Required permissions\n\n- `write` permission for the organization\n\n#### Related guides\n\n- [Initialize an InfluxDB stack](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/stacks/init/).\n- [Use InfluxDB templates](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/use/#apply-templates-to-an-influxdb-instance).\n',
  operationId: 'CreateStack',
  request: {
    body: {
      description: 'The stack to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              orgID: z.string().exactOptional(),
              name: z.string().exactOptional(),
              description: z.string().exactOptional(),
              urls: z.array(z.string()).exactOptional(),
            })
            .openapi({ title: 'PostStackRequest', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success. Returns the newly created stack.',
      content: { 'application/json': { schema: StackSchema } },
    },
    401: AuthorizationErrorResponse,
    422: {
      description:
        "Unprocessable entity.\n\nThe error may indicate one of the following problems:\n\n- The request body isn't valid--the request is well-formed, but InfluxDB can't process it due to semantic errors.\n- You passed a parameter combination that InfluxDB doesn't support.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getStacksStackIdRoute = createRoute({
  method: 'get',
  path: '/stacks/{stack_id}',
  tags: ['Templates'],
  summary: 'Retrieve a stack',
  operationId: 'ReadStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the stack.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the stack.',
      content: { 'application/json': { schema: StackSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteStacksStackIdRoute = createRoute({
  method: 'delete',
  path: '/stacks/{stack_id}',
  tags: ['Templates'],
  summary: 'Delete a stack and associated resources',
  operationId: 'DeleteStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the stack.',
          },
        }),
    }),
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the organization.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The stack and its associated resources were deleted.' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchStacksStackIdRoute = createRoute({
  method: 'patch',
  path: '/stacks/{stack_id}',
  tags: ['Templates'],
  summary: 'Update a stack',
  operationId: 'UpdateStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the stack.',
          },
        }),
    }),
    body: {
      description: 'The stack to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().nullable().exactOptional(),
              description: z.string().nullable().exactOptional(),
              templateURLs: z.array(z.string()).nullable().exactOptional(),
              additionalResources: z
                .array(
                  z
                    .object({
                      resourceID: z.string(),
                      kind: z.string(),
                      templateMetaName: z.string().exactOptional(),
                    })
                    .openapi({ required: ['kind', 'resourceID'] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'PatchStackRequest', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated stack.',
      content: { 'application/json': { schema: StackSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStacksStackIdUninstallRoute = createRoute({
  method: 'post',
  path: '/stacks/{stack_id}/uninstall',
  tags: ['Templates'],
  summary: 'Uninstall a stack',
  operationId: 'UninstallStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the stack.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the uninstalled stack.',
      content: { 'application/json': { schema: StackSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTemplatesApplyRoute = createRoute({
  method: 'post',
  path: '/templates/apply',
  tags: ['Templates'],
  summary: 'Apply or dry-run a template',
  description:
    "Applies a template to\ncreate or update a [stack](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/stacks/) of InfluxDB\n[resources](https://docs.influxdata.com/influxdb/cloud/reference/cli/influx/export/all/#resources).\nThe response contains the diff of changes and the stack ID.\n\nUse this endpoint to install an InfluxDB template to an organization.\nProvide template URLs or template objects in your request.\nTo customize which template resources are installed, use the `actions`\nparameter.\n\nBy default, when you apply a template, InfluxDB installs the template to\ncreate and update stack resources and then generates a diff of the changes.\nIf you pass `dryRun: true` in the request body, InfluxDB validates the\ntemplate and generates the resource diff, but doesn’t make any\nchanges to your instance.\n\n#### Custom values for templates\n\n- Some templates may contain [environment references](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/create/#include-user-definable-resource-names) for custom metadata.\n  To provide custom values for environment references, pass the _`envRefs`_\n  property in the request body.\n  For more information and examples, see how to\n  [define environment references](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/use/#define-environment-references).\n\n- Some templates may contain queries that use\n  [secrets](https://docs.influxdata.com/influxdb/cloud/security/secrets/).\n  To provide custom secret values, pass the _`secrets`_ property\n  in the request body.\n  Don't expose secret values in templates.\n  For more information, see [how to pass secrets when installing a template](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/use/#pass-secrets-when-installing-a-template).\n\n#### Required permissions\n\n- `write` permissions for resource types in the template.\n\n#### Rate limits (with InfluxDB Cloud)\n\n- Adjustable service quotas apply.\n  For more information, see [limits and adjustable quotas](https://docs.influxdata.com/influxdb/cloud/account-management/limits/).\n\n#### Related guides\n\n- [Use templates](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/use/)\n- [Stacks](https://docs.influxdata.com/influxdb/cloud/influxdb-templates/stacks/)\n",
  operationId: 'ApplyTemplate',
  request: {
    body: {
      description: 'Parameters for applying templates.\n',
      content: {
        'application/json': {
          schema: TemplateApplySchema,
          examples: {
            skipKindAction: {
              summary: 'Skip all bucket and task resources in the provided templates',
              value: {
                orgID: 'INFLUX_ORG_ID',
                actions: [
                  { action: 'skipKind', properties: { kind: 'Bucket' } },
                  { action: 'skipKind', properties: { kind: 'Task' } },
                ],
                templates: [{ contents: [{ '[object Object]': null }] }],
              },
            },
            skipResourceAction: {
              summary: 'Skip specific resources in the provided templates',
              value: {
                orgID: 'INFLUX_ORG_ID',
                actions: [
                  {
                    action: 'skipResource',
                    properties: { kind: 'Label', resourceTemplateName: 'foo-001' },
                  },
                  {
                    action: 'skipResource',
                    properties: { kind: 'Bucket', resourceTemplateName: 'bar-020' },
                  },
                  {
                    action: 'skipResource',
                    properties: { kind: 'Bucket', resourceTemplateName: 'baz-500' },
                  },
                ],
                templates: [
                  {
                    contents: [
                      {
                        apiVersion: 'influxdata.com/v2alpha1',
                        kind: 'Bucket',
                        metadata: { name: 'baz-500' },
                      },
                    ],
                  },
                ],
              },
            },
            templateObjectEnvRefs: {
              summary: 'envRefs for template objects',
              value: {
                orgID: 'INFLUX_ORG_ID',
                envRefs: {
                  'linux-cpu-label': 'MY_CPU_LABEL',
                  'docker-bucket': 'MY_DOCKER_BUCKET',
                  'docker-spec-1': 'MY_DOCKER_SPEC',
                },
                templates: [
                  {
                    contents: [
                      {
                        apiVersion: 'influxdata.com/v2alpha1',
                        kind: 'Label',
                        metadata: { name: { envRef: { key: 'linux-cpu-label' } } },
                        spec: { color: '#326BBA', name: 'inputs.cpu' },
                      },
                    ],
                  },
                  {
                    contents: [
                      {
                        apiVersion: 'influxdata.com/v2alpha1',
                        kind: 'Bucket',
                        metadata: { name: { envRef: { key: 'docker-bucket' } } },
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
        'application/x-jsonnet': { schema: TemplateApplySchema },
        'text/yml': { schema: TemplateApplySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        "Success.\nThe template dry run succeeded.\nThe response body contains a resource diff of changes that the\ntemplate would have made if installed.\nNo resources were created or updated.\nThe diff and summary won't contain IDs for resources\nthat didn't exist at the time of the dry run.\n",
      content: { 'application/json': { schema: TemplateSummarySchema } },
    },
    201: {
      description:
        'Success.\nThe template applied successfully.\nThe response body contains the stack ID, a diff, and a summary.\nThe diff compares the initial state to the state after the template installation.\nThe summary contains newly created resources.\n',
      content: { 'application/json': { schema: TemplateSummarySchema } },
    },
    422: {
      description:
        "Unprocessable entity.\n\n\nThe error may indicate one of the following problems:\n\n- The template failed validation.\n- You passed a parameter combination that InfluxDB doesn't support.\n",
      content: {
        'application/json': {
          schema: TemplateSummarySchema.and(
            z
              .object({ message: z.string(), code: z.string() })
              .openapi({ required: ['message', 'code'] }),
          ),
        },
      },
    },
    500: {
      description:
        'Internal server error.\n\n#### InfluxDB Cloud\n\n- Returns this error if creating one of the template\n  resources (bucket, dashboard, task, user) exceeds your plan’s\n  adjustable service quotas.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            createExceedsQuota: {
              summary: 'InfluxDB Cloud: Creating resource would exceed quota.',
              value: {
                code: 'internal error',
                message:
                  'resource_type="tasks" err="failed to apply resource"\n\tmetadata_name="alerting-gates-b84003" err_msg="failed to create tasks[\\"alerting-gates-b84003\\"]: creating task would exceed quota"',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTemplatesExportRoute = createRoute({
  method: 'post',
  path: '/templates/export',
  tags: ['Templates'],
  summary: 'Export a new template',
  operationId: 'ExportTemplate',
  request: {
    body: {
      description: 'Export resources as an InfluxDB template.',
      content: {
        'application/json': {
          schema: z.xor([TemplateExportByIDSchema, TemplateExportByNameSchema]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The template was created successfully. Returns the newly created template.',
      content: {
        'application/json': { schema: TemplateSchema },
        'application/x-yaml': { schema: TemplateSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDRunsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/runs',
  tags: ['Tasks'],
  summary: 'List runs for a task',
  description:
    'Retrieves a list of runs for a [task](https://docs.influxdata.com/influxdb/cloud/process-data/).\n\nTo limit which task runs are returned, pass query parameters in your request.\nIf no query parameters are passed, InfluxDB returns all task runs up to the default `limit`.\n',
  operationId: 'GetTasksIDRuns',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to get runs for.\nOnly returns runs for this task.\n',
          },
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            description: 'A task run ID. Only returns runs created after this run.',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 100 },
            description: 'Limits the number of task runs returned. Default is `100`.\n',
            required: false,
          },
        }),
      afterTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterTime',
            schema: { type: 'string', format: 'date-time' },
            description:
              'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)).\nOnly returns runs scheduled after this time.\n',
            required: false,
          },
        }),
      beforeTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeTime',
            schema: { type: 'string', format: 'date-time' },
            description:
              'A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#rfc3339-timestamp)).\nOnly returns runs scheduled before this time.\n',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the list of task runs.',
      content: { 'application/json': { schema: RunsSchema } },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postTasksTaskIDRunsRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/runs',
  tags: ['Data I/O endpoints', 'Tasks'],
  summary: 'Start a task run, overriding the schedule',
  description:
    'Schedules a task run to start immediately, ignoring scheduled runs.\n\nUse this endpoint to manually start a task run.\nScheduled runs will continue to run as scheduled.\nThis may result in concurrently running tasks.\n\nTo _retry_ a previous run (and avoid creating a new run),\nuse the [`POST /api/v2/tasks/{taskID}/runs/{runID}/retry` endpoint](#operation/PostTasksIDRunsIDRetry).\n',
  operationId: 'PostTasksIDRuns',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'taskID', schema: { type: 'string' }, required: true },
        }),
    }),
    body: { content: { 'application/json': { schema: RunManuallySchema } } },
  },
  responses: {
    201: {
      description: 'Success. The run is scheduled to start.',
      content: { 'application/json': { schema: RunSchema } },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getTasksTaskIDRunsRunIDRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/runs/{runID}',
  tags: ['Tasks'],
  summary: 'Retrieve a run for a task.',
  description:
    'Retrieves a specific run for a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n\nUse this endpoint to retrieve detail and logs for a specific task run.\n',
  operationId: 'GetTasksIDRunsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to retrieve runs for.',
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'runID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the run to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the task run.',
      content: {
        'application/json': {
          schema: RunSchema,
          examples: {
            runSuccess: {
              summary: 'A successful task run.',
              value: {
                links: {
                  logs: '/api/v2/tasks/0996e56b2f378000/runs/09b070dadaa7d000/logs',
                  retry: '/api/v2/tasks/0996e56b2f378000/runs/09b070dadaa7d000/retry',
                  self: '/api/v2/tasks/0996e56b2f378000/runs/09b070dadaa7d000',
                  task: '/api/v2/tasks/0996e56b2f378000',
                },
                id: '09b070dadaa7d000',
                taskID: '0996e56b2f378000',
                status: 'success',
                scheduledFor: '2022-07-18T14:46:06Z',
                startedAt: '2022-07-18T14:46:07.16222Z',
                finishedAt: '2022-07-18T14:46:07.308254Z',
                requestedAt: '2022-07-18T14:46:06Z',
                log: [
                  {
                    runID: '09b070dadaa7d000',
                    time: '2022-07-18T14:46:07.101231Z',
                    message:
                      'Started task from script: "option task = {name: \\"task1\\", every: 30m} from(bucket: \\"iot_center\\") |> range(start: -90d) |> filter(fn: (r) => r._measurement == \\"environment\\")               |> aggregateWindow(every: 1h, fn: mean)"',
                  },
                  {
                    runID: '09b070dadaa7d000',
                    time: '2022-07-18T14:46:07.242859Z',
                    message: 'Completed(success)',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const deleteTasksTaskIDRunsRunIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/runs/{runID}',
  tags: ['Tasks'],
  summary: 'Cancel a running task',
  description:
    "Cancels a running [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n\nUse this endpoint with InfluxDB OSS to cancel a running task.\n\n#### InfluxDB Cloud\n\n- Doesn't support this operation.\n",
  operationId: 'DeleteTasksIDRunsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to cancel.',
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'runID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task run to cancel.',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        "Success. The `DELETE` is accepted and the run will be cancelled.\n\n#### InfluxDB Cloud\n\n- Doesn't support this operation.\n- Doesn't return this status.\n",
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    405: {
      description:
        "Method not allowed.\n\n#### InfluxDB Cloud\n\n  - Always returns this error; doesn't support cancelling tasks.\n\n#### InfluxDB OSS\n\n  - Doesn't return this error.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postTasksTaskIDRunsRunIDRetryRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/runs/{runID}/retry',
  tags: ['Tasks'],
  summary: 'Retry a task run',
  description:
    'Queues a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task)  run to\nretry and returns the scheduled run.\n\nTo manually start a _new_ task run, use the\n[`POST /api/v2/tasks/{taskID}/runs` endpoint](#operation/PostTasksIDRuns).\n\n#### Limitations\n\n- The task must be _active_ (`status: "active"`).\n',
  operationId: 'PostTasksIDRunsIDRetry',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task)  ID.\nSpecifies the task to retry.\n',
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'runID',
            schema: { type: 'string' },
            required: true,
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) run ID.\nSpecifies the task run to retry.\n\nTo find a task run ID, use the\n[`GET /api/v2/tasks/{taskID}/runs` endpoint](#operation/GetTasksIDRuns)\nto list task runs.\n',
          },
        }),
    }),
    body: { content: { 'application/json; charset=utf-8': { schema: z.object({}) } } },
  },
  responses: {
    200: {
      description: 'Success. The response body contains the queued run.',
      content: {
        'application/json': {
          schema: RunSchema,
          examples: {
            retryTaskRun: {
              summary: 'A task run scheduled to retry',
              value: {
                links: {
                  logs: '/api/v2/tasks/09a776832f381000/runs/09d60ffe08738000/logs',
                  retry: '/api/v2/tasks/09a776832f381000/runs/09d60ffe08738000/retry',
                  self: '/api/v2/tasks/09a776832f381000/runs/09d60ffe08738000',
                  task: '/api/v2/tasks/09a776832f381000',
                },
                id: '09d60ffe08738000',
                taskID: '09a776832f381000',
                status: 'scheduled',
                scheduledFor: '2022-08-15T00:00:00Z',
                requestedAt: '2022-08-16T20:05:11.84145Z',
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request.\nThe response body contains detail about the error.\n\nInfluxDB may return this error for the following reasons:\n\n- The task has `status: inactive`.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            inactiveTask: {
              summary: "Can't retry an inactive task",
              value: { code: 'invalid', message: 'failed to retry run: inactive task' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getTasksTaskIDLogsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/logs',
  tags: ['Tasks'],
  summary: 'Retrieve all logs for a task',
  description:
    'Retrieves a list of all logs for a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n\nWhen an InfluxDB task runs, a “run” record is created in the task’s history.\nLogs associated with each run provide relevant log messages, timestamps, and the exit status of the run attempt.\n\nUse this endpoint to retrieve only the log events for a task,\nwithout additional task metadata.\n',
  operationId: 'GetTasksIDLogs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The task ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. The response body contains an `events` list with logs for the task.\nEach log event `message` contains detail about the event.\nIf a task run fails, InfluxDB logs an event with the reason for the failure.\n',
      content: {
        'application/json': {
          schema: LogsSchema,
          examples: {
            taskSuccess: {
              summary: 'Events for a successful task run.',
              value: {
                events: [
                  {
                    runID: '09b070dadaa7d000',
                    time: '2022-07-18T14:46:07.101231Z',
                    message:
                      'Started task from script: "option task = {name: \\"task1\\", every: 30m} from(bucket: \\"iot_center\\") |> range(start: -90d) |> filter(fn: (r) => r._measurement == \\"environment\\") |> aggregateWindow(every: 1h, fn: mean)"',
                  },
                  {
                    runID: '09b070dadaa7d000',
                    time: '2022-07-18T14:46:07.242859Z',
                    message: 'Completed(success)',
                  },
                ],
              },
            },
            taskFailure: {
              summary: 'Events for a failed task run.',
              value: {
                events: [
                  {
                    runID: '09a946fc3167d000',
                    time: '2022-07-13T07:06:54.198167Z',
                    message:
                      'Started task from script: "option task = {name: \\"test task\\", every: 3d, offset: 0s}"',
                  },
                  {
                    runID: '09a946fc3167d000',
                    time: '2022-07-13T07:07:13.104037Z',
                    message: 'Completed(failed)',
                  },
                  {
                    runID: '09a946fc3167d000',
                    time: '2022-07-13T08:24:37.115323Z',
                    message:
                      'error exhausting result iterator: error in query specification while starting program: this Flux script returns no streaming data. Consider adding a "yield" or invoking streaming functions directly, without performing an assignment',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getTasksTaskIDRunsRunIDLogsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/runs/{runID}/logs',
  tags: ['Tasks'],
  summary: 'Retrieve all logs for a run',
  description:
    'Retrieves all logs for a task run.\nA log is a list of run events with `runID`, `time`, and `message` properties.\n\nUse this endpoint to help analyze task performance and troubleshoot failed task runs.\n',
  operationId: 'GetTasksIDRunsIDLogs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to get logs for.',
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'runID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the run to get logs for.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. The response body contains an `events` list with logs for the task run.\nEach log event `message` contains detail about the event.\nIf a run fails, InfluxDB logs an event with the reason for the failure.\n',
      content: {
        'application/json': {
          schema: LogsSchema,
          examples: {
            taskSuccess: {
              summary: 'Events for a successful task run.',
              value: {
                events: [
                  {
                    runID: '09b070dadaa7d000',
                    time: '2022-07-18T14:46:07.101231Z',
                    message:
                      'Started task from script: "option task = {name: \\"task1\\", every: 30m} from(bucket: \\"iot_center\\") |> range(start: -90d) |> filter(fn: (r) => r._measurement == \\"environment\\") |> aggregateWindow(every: 1h, fn: mean)"',
                  },
                  {
                    runID: '09b070dadaa7d000',
                    time: '2022-07-18T14:46:07.242859Z',
                    message: 'Completed(success)',
                  },
                ],
              },
            },
            taskFailure: {
              summary: 'Events for a failed task.',
              value: {
                events: [
                  {
                    runID: '09a946fc3167d000',
                    time: '2022-07-13T07:06:54.198167Z',
                    message:
                      'Started task from script: "option task = {name: \\"test task\\", every: 3d, offset: 0s}"',
                  },
                  {
                    runID: '09a946fc3167d000',
                    time: '2022-07-13T07:07:13.104037Z',
                    message: 'Completed(failed)',
                  },
                  {
                    runID: '09a946fc3167d000',
                    time: '2022-07-13T08:24:37.115323Z',
                    message:
                      'error exhausting result iterator: error in query specification while starting program: this Flux script returns no streaming data. Consider adding a "yield" or invoking streaming functions directly, without performing an assignment',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getTasksTaskIDLabelsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/labels',
  tags: ['Tasks'],
  summary: 'List labels for a task',
  description:
    'Retrieves a list of all labels for a task.\n\nLabels may be used for grouping and filtering tasks.\n',
  operationId: 'GetTasksIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to retrieve labels for.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains a list of all labels for the task.',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postTasksTaskIDLabelsRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/labels',
  tags: ['Tasks'],
  summary: 'Add a label to a task',
  description:
    'Adds a label to a task.\n\nUse this endpoint to add a label that you can use to filter tasks in the InfluxDB UI.\n',
  operationId: 'PostTasksIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to label.',
          },
        }),
    }),
    body: {
      description: 'An object that contains a _`labelID`_ to add to the task.',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success. The response body contains a list of all labels for the task.',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const deleteTasksTaskIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/labels/{labelID}',
  tags: ['Tasks'],
  summary: 'Delete a label from a task',
  description: 'Deletes a label from a task.\n',
  operationId: 'DeleteTasksIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to delete the label from.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success. The label is deleted.' },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getFlagsRoute = createRoute({
  method: 'get',
  path: '/flags',
  tags: ['Config'],
  summary: 'Retrieve feature flags',
  description:
    'Retrieves the feature flag key-value pairs configured for the InfluxDB\ninstance.\n_Feature flags_ are configuration options used to develop and test\nexperimental InfluxDB features and are intended for internal use only.\n\nThis endpoint represents the first step in the following three-step process\nto configure feature flags:\n\n1. Use [token authentication](#section/Authentication/TokenAuthentication) or a [user session](#tag/Signin) with this endpoint to retrieve\n   feature flags and their values.\n2. Follow the instructions to [enable, disable, or override values for feature flags](https://docs.influxdata.com/influxdb/cloud/reference/config-options/#feature-flags).\n3. **Optional**: To confirm that your change is applied, do one of the following:\n\n   - Send a request to this endpoint to retrieve the current feature flag values.\n   - Send a request to the [`GET /api/v2/config` endpoint](#operation/GetConfig) to retrieve the\n     current runtime server configuration.\n\n#### Related guides\n\n- [InfluxDB configuration options](https://docs.influxdata.com/influxdb/cloud/reference/config-options/)\n',
  operationId: 'GetFlags',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'Success. The response body contains feature flags.',
      content: { 'application/json': { schema: FlagsSchema } },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Users'],
  summary: 'Retrieve the currently authenticated user',
  operationId: 'GetMe',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'Success. The response body contains the currently authenticated user.',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const putMePasswordRoute = createRoute({
  method: 'put',
  path: '/me/password',
  tags: ['Users'],
  summary: 'Update a password',
  description:
    'Updates the password for the signed-in [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n\nThis endpoint represents the third step in the following three-step process to let a\nuser with a user session update their password:\n  1. Pass the user\'s [Basic authentication credentials](#section/Authentication/BasicAuthentication) to the `POST /api/v2/signin`\n     endpoint to create a user session and generate a session cookie.\n  2. From the response in the first step, extract the session cookie (`Set-Cookie`) header.\n  3. Pass the following in a request to the `PUT /api/v2/me/password` endpoint:\n     - The `Set-Cookie` header from the second step\n     - The `Authorization Basic` header with the user\'s _Basic authentication_ credentials\n     - `{"password": "NEW_PASSWORD"}` in the request body\n\n#### InfluxDB Cloud\n\n- Doesn\'t let you manage user passwords through the API.\n  Use the InfluxDB Cloud user interface (UI) to update your password.\n\n#### Related endpoints\n\n- [Signin](#tag/Signin)\n- [Signout](#tag/Signout)\n- [Users](#tag/Users)\n\n#### Related guides\n\n- [InfluxDB Cloud - Change your password](https://docs.influxdata.com/influxdb/cloud/account-management/change-password/)\n- [InfluxDB OSS - Change your password](https://docs.influxdata.com/influxdb/latest/users/change-password/)\n',
  operationId: 'PutMePassword',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    cookies: z.object({
      'influxdb-oss-session': z
        .string()
        .openapi({
          param: {
            name: 'influxdb-oss-session',
            in: 'cookie',
            schema: { type: 'string' },
            required: true,
            description:
              'The user session cookie for the\n[user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user)\nsigned in with [Basic authentication credentials](#section/Authentication/BasicAuthentication).\n\n#### Related guides\n\n- [Manage users]({{% INFLUXDB_DOCS_URL%}}/users/)\n',
            example:
              'influxdb-oss-session=19aaaZZZGOvP2GGryXVT2qYftlFKu3bIopurM6AGFow1yF1abhtOlbHfsc-d8gozZFC_6WxmlQIAwLMW5xs523w==',
          },
        }),
    }),
    body: {
      description: 'The new password.',
      content: { 'application/json': { schema: PasswordResetBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success. The password is updated.' },
    400: {
      description:
        "Bad request.\n\n#### InfluxDB Cloud\n\n- Doesn't let you manage user passwords through the API; always responds with this status.\n\n#### InfluxDB OSS\n\n- Doesn't understand a value passed in the request.\n",
    },
    401: AuthorizationErrorResponse,
    default: {
      description: 'Unsuccessful authentication',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ BasicAuthentication: [] }],
})

export const getTasksTaskIDMembersRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/members',
  tags: ['Tasks'],
  summary: 'List all task members',
  description:
    "**Deprecated**: Tasks don't use `owner` and `member` roles.\nUse [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\nLists all users that have the `member` role for the specified [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n",
  operationId: 'GetTasksIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The task ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. The response body contains a list of `users` that have\nthe `member` role for a task.\n',
      content: { 'application/json': { schema: ResourceMembersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const postTasksTaskIDMembersRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/members',
  tags: ['Tasks'],
  summary: 'Add a member to a task',
  description:
    "**Deprecated**: Tasks don't use `owner` and `member` roles.\nUse [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\nAdds a user to members of a task and returns the member.\n",
  operationId: 'PostTasksIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The task ID.',
          },
        }),
    }),
    body: {
      description: 'A user to add as a member of the task.',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created. The user is added to task members.',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteTasksTaskIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/members/{userID}',
  tags: ['Tasks'],
  summary: 'Remove a member from a task',
  description:
    "**Deprecated**: Tasks don't use `owner` and `member` roles.\nUse [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\nRemoves a member from a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n",
  operationId: 'DeleteTasksIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the member to remove.',
          },
        }),
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The task ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Member removed' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const getTasksTaskIDOwnersRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/owners',
  tags: ['Tasks'],
  summary: 'List all owners of a task',
  description:
    "**Deprecated**: Tasks don't use `owner` and `member` roles.\nUse [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\nRetrieves all users that have owner permission for a task.\n",
  operationId: 'GetTasksIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the task to retrieve owners for.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success.\nThe response contains a list of `users` that have the `owner` role for the task.\n\nIf the task has no owners, the response contains an empty `users` array.\n',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
    },
    401: AuthorizationErrorResponse,
    422: {
      description:
        "Unprocessable entity.\n\nThe error may indicate one of the following problems:\n\n- The request body isn't valid--the request is well-formed, but InfluxDB can't process it due to semantic errors.\n- You passed a parameter combination that InfluxDB doesn't support.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const postTasksTaskIDOwnersRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/owners',
  tags: ['Tasks'],
  summary: 'Add an owner for a task',
  description:
    "**Deprecated**: Tasks don't use `owner` and `member` roles.\nUse [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n\nAssigns a task `owner` role to a user.\n\nUse this endpoint to create a _resource owner_ for the task.\nA _resource owner_ is a user with `role: owner` for a specific resource.\n",
  operationId: 'PostTasksIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The task ID.',
          },
        }),
    }),
    body: {
      description: 'A user to add as an owner of the task.',
      content: { 'application/json': { schema: AddResourceMemberRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Created. The task `owner` role is assigned to the user.\nThe response body contains the resource owner with\nrole and user detail.\n',
      content: {
        'application/json': {
          schema: ResourceOwnerSchema,
          examples: {
            createdOwner: {
              summary: 'User has the owner role for the resource',
              value: {
                role: 'owner',
                links: {
                  logs: '/api/v2/users/0772396d1f411000/logs',
                  self: '/api/v2/users/0772396d1f411000',
                },
                id: '0772396d1f411000',
                name: 'USER_NAME',
                status: 'active',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    422: {
      description:
        "Unprocessable entity.\n\nThe error may indicate one of the following problems:\n\n- The request body isn't valid--the request is well-formed, but InfluxDB can't process it due to semantic errors.\n- You passed a parameter combination that InfluxDB doesn't support.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteTasksTaskIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/owners/{userID}',
  tags: ['Tasks'],
  summary: 'Remove an owner from a task',
  description:
    "**Deprecated**: Tasks don't use `owner` and `member` roles.\nUse [`/api/v2/authorizations`](#tag/Authorizations-(API-tokens)) to assign user permissions.\n",
  operationId: 'DeleteTasksIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the owner to remove.',
          },
        }),
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description: 'The task ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Owner removed' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
})

export const putUsersUserIDPasswordRoute = createRoute({
  method: 'put',
  path: '/users/{userID}/password',
  tags: ['Security and access endpoints', 'Users'],
  summary: 'Update a password',
  description:
    "Updates a user password.\n\nUse this endpoint to let a user authenticate with\n[Basic authentication credentials](#section/Authentication/BasicAuthentication)\nand set a new password.\n\n#### InfluxDB Cloud\n\n- Doesn't allow you to manage user passwords through the API.\n  Use the InfluxDB Cloud user interface (UI) to update a password.\n\n#### Related guides\n\n- [InfluxDB Cloud - Change your password](https://docs.influxdata.com/influxdb/cloud/account-management/change-password/)\n- [InfluxDB OSS - Change your password](https://docs.influxdata.com/influxdb/latest/users/change-password/)\n",
  operationId: 'PutUsersIDPassword',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the user to set the password for.',
          },
        }),
    }),
    body: {
      description: 'The new password to set for the user.',
      content: { 'application/json': { schema: PasswordResetBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success. The password is updated.' },
    400: {
      description:
        "Bad request.\n\n#### InfluxDB Cloud\n\n- Doesn't allow you to manage passwords through the API; always responds with this status.\n\n#### InfluxDB OSS\n\n- Doesn't understand a value passed in the request.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            updatePasswordNotAllowed: {
              summary: "Cloud API can't update passwords",
              value: {
                code: 'invalid',
                message: 'passwords cannot be changed through the InfluxDB Cloud API',
              },
            },
          },
        },
      },
    },
    default: GeneralServerErrorResponse,
  },
  security: [{ BasicAuthentication: [] }],
})

export const postUsersUserIDPasswordRoute = createRoute({
  method: 'post',
  path: '/users/{userID}/password',
  tags: ['Security and access endpoints', 'Users'],
  summary: 'Update a password',
  description:
    "Updates a user password.\n\n#### InfluxDB Cloud\n\n- Doesn't allow you to manage user passwords through the API.\n  Use the InfluxDB Cloud user interface (UI) to update a password.\n\n#### Related guides\n\n- [InfluxDB Cloud - Change your password](https://docs.influxdata.com/influxdb/cloud/account-management/change-password/)\n- [InfluxDB OSS - Change your password](https://docs.influxdata.com/influxdb/latest/users/change-password/)\n",
  operationId: 'PostUsersIDPassword',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the user to set the password for.',
          },
        }),
    }),
    body: {
      description: 'The new password to set for the user.',
      content: { 'application/json': { schema: PasswordResetBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success. The password is updated.' },
    400: {
      description:
        "Bad request.\n\n#### InfluxDB Cloud\n\n- Doesn't allow you to manage passwords through the API; always responds with this status.\n\n#### InfluxDB OSS\n\n- Doesn't understand a value passed in the request.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            updatePasswordNotAllowed: {
              summary: "Cloud API can't update passwords",
              value: {
                code: 'invalid',
                message: 'passwords cannot be changed through the InfluxDB Cloud API',
              },
            },
          },
        },
      },
    },
    default: GeneralServerErrorResponse,
  },
})

export const getChecksRoute = createRoute({
  method: 'get',
  path: '/checks',
  tags: ['Checks'],
  summary: 'List all checks',
  operationId: 'GetChecks',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            required: true,
            description: 'Only show checks that belong to a specific organization ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of checks',
      content: { 'application/json': { schema: ChecksSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postChecksRoute = createRoute({
  method: 'post',
  path: '/checks',
  tags: ['Checks'],
  summary: 'Add new check',
  operationId: 'CreateCheck',
  request: {
    body: {
      description: 'Check to create',
      content: { 'application/json': { schema: PostCheckSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Check created', content: { 'application/json': { schema: CheckSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getChecksCheckIDRoute = createRoute({
  method: 'get',
  path: '/checks/{checkID}',
  tags: ['Checks'],
  summary: 'Retrieve a check',
  operationId: 'GetChecksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The check requested',
      content: { 'application/json': { schema: CheckSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putChecksCheckIDRoute = createRoute({
  method: 'put',
  path: '/checks/{checkID}',
  tags: ['Checks'],
  summary: 'Update a check',
  operationId: 'PutChecksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
    body: {
      description: 'Check update to apply',
      content: { 'application/json': { schema: CheckSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated check',
      content: { 'application/json': { schema: CheckSchema } },
    },
    404: {
      description: 'The check was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteChecksCheckIDRoute = createRoute({
  method: 'delete',
  path: '/checks/{checkID}',
  tags: ['Checks'],
  summary: 'Delete a check',
  operationId: 'DeleteChecksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'The check was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchChecksCheckIDRoute = createRoute({
  method: 'patch',
  path: '/checks/{checkID}',
  tags: ['Checks'],
  summary: 'Update a check',
  operationId: 'PatchChecksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
    body: {
      description: 'Check update to apply',
      content: { 'application/json': { schema: CheckPatchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated check',
      content: { 'application/json': { schema: CheckSchema } },
    },
    404: {
      description: 'The check was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getChecksCheckIDLabelsRoute = createRoute({
  method: 'get',
  path: '/checks/{checkID}/labels',
  tags: ['Checks'],
  summary: 'List all labels for a check',
  operationId: 'GetChecksIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a check',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postChecksCheckIDLabelsRoute = createRoute({
  method: 'post',
  path: '/checks/{checkID}/labels',
  tags: ['Checks'],
  summary: 'Add a label to a check',
  operationId: 'PostChecksIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
    body: {
      description: 'Label to add',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The label was added to the check',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteChecksCheckIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/checks/{checkID}/labels/{labelID}',
  tags: ['Checks'],
  summary: 'Delete label from a check',
  operationId: 'DeleteChecksIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Check or label not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationRulesRoute = createRoute({
  method: 'get',
  path: '/notificationRules',
  tags: ['NotificationRules'],
  summary: 'List all notification rules',
  operationId: 'GetNotificationRules',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            required: true,
            description: 'Only show notification rules that belong to a specific organization ID.',
            schema: { type: 'string' },
          },
        }),
      checkID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'checkID',
            description: 'Only show notifications that belong to the specific check ID.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tag: z
        .string()
        .regex(/^[a-zA-Z0-9_]+:[a-zA-Z0-9_]+$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            description:
              'Only return notification rules that "would match" statuses which contain the tag key value pairs provided.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9_]+:[a-zA-Z0-9_]+$',
              example: 'env:prod',
            },
            required: false,
          },
          example: 'env:prod',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of notification rules',
      content: { 'application/json': { schema: NotificationRulesSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNotificationRulesRoute = createRoute({
  method: 'post',
  path: '/notificationRules',
  tags: ['NotificationRules'],
  summary: 'Add a notification rule',
  operationId: 'CreateNotificationRule',
  request: {
    body: {
      description: 'Notification rule to create',
      content: { 'application/json': { schema: PostNotificationRuleSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Notification rule created',
      content: { 'application/json': { schema: NotificationRuleSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getChecksCheckIDQueryRoute = createRoute({
  method: 'get',
  path: '/checks/{checkID}/query',
  tags: ['Checks'],
  summary: 'Retrieve a check query',
  operationId: 'GetChecksIDQuery',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      checkID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'checkID',
            schema: { type: 'string' },
            required: true,
            description: 'The check ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The check query requested',
      content: { 'application/json': { schema: FluxResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Check not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationRulesRuleIDRoute = createRoute({
  method: 'get',
  path: '/notificationRules/{ruleID}',
  tags: ['NotificationRules'],
  summary: 'Retrieve a notification rule',
  operationId: 'GetNotificationRulesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The notification rule requested',
      content: { 'application/json': { schema: NotificationRuleSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putNotificationRulesRuleIDRoute = createRoute({
  method: 'put',
  path: '/notificationRules/{ruleID}',
  tags: ['NotificationRules'],
  summary: 'Update a notification rule',
  operationId: 'PutNotificationRulesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
    body: {
      description: 'Notification rule update to apply',
      content: { 'application/json': { schema: NotificationRuleSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated notification rule',
      content: { 'application/json': { schema: NotificationRuleSchema } },
    },
    404: {
      description: 'The notification rule was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteNotificationRulesRuleIDRoute = createRoute({
  method: 'delete',
  path: '/notificationRules/{ruleID}',
  tags: ['NotificationRules'],
  summary: 'Delete a notification rule',
  operationId: 'DeleteNotificationRulesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'The check was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchNotificationRulesRuleIDRoute = createRoute({
  method: 'patch',
  path: '/notificationRules/{ruleID}',
  tags: ['NotificationRules'],
  summary: 'Update a notification rule',
  operationId: 'PatchNotificationRulesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
    body: {
      description: 'Notification rule update to apply',
      content: { 'application/json': { schema: NotificationRuleUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated notification rule',
      content: { 'application/json': { schema: NotificationRuleSchema } },
    },
    404: {
      description: 'The notification rule was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationRulesRuleIDLabelsRoute = createRoute({
  method: 'get',
  path: '/notificationRules/{ruleID}/labels',
  tags: ['NotificationRules'],
  summary: 'List all labels for a notification rule',
  operationId: 'GetNotificationRulesIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a notification rule',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNotificationRulesRuleIDLabelsRoute = createRoute({
  method: 'post',
  path: '/notificationRules/{ruleID}/labels',
  tags: ['NotificationRules'],
  summary: 'Add a label to a notification rule',
  operationId: 'PostNotificationRuleIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
    body: {
      description: 'Label to add',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The label was added to the notification rule',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteNotificationRulesRuleIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/notificationRules/{ruleID}/labels/{labelID}',
  tags: ['NotificationRules'],
  summary: 'Delete label from a notification rule',
  operationId: 'DeleteNotificationRulesIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Rule or label not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationRulesRuleIDQueryRoute = createRoute({
  method: 'get',
  path: '/notificationRules/{ruleID}/query',
  tags: ['Rules'],
  summary: 'Retrieve a notification rule query',
  operationId: 'GetNotificationRulesIDQuery',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      ruleID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification rule ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The notification rule query requested',
      content: { 'application/json': { schema: FluxResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Notification rule not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationEndpointsRoute = createRoute({
  method: 'get',
  path: '/notificationEndpoints',
  tags: ['NotificationEndpoints'],
  summary: 'List all notification endpoints',
  operationId: 'GetNotificationEndpoints',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            required: true,
            description:
              'Only show notification endpoints that belong to specific organization ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of notification endpoints',
      content: { 'application/json': { schema: NotificationEndpointsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNotificationEndpointsRoute = createRoute({
  method: 'post',
  path: '/notificationEndpoints',
  tags: ['NotificationEndpoints'],
  summary: 'Add a notification endpoint',
  operationId: 'CreateNotificationEndpoint',
  request: {
    body: {
      description: 'Notification endpoint to create',
      content: { 'application/json': { schema: PostNotificationEndpointSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Notification endpoint created',
      content: { 'application/json': { schema: NotificationEndpointSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationEndpointsEndpointIDRoute = createRoute({
  method: 'get',
  path: '/notificationEndpoints/{endpointID}',
  tags: ['NotificationEndpoints'],
  summary: 'Retrieve a notification endpoint',
  operationId: 'GetNotificationEndpointsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The notification endpoint requested',
      content: { 'application/json': { schema: NotificationEndpointSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putNotificationEndpointsEndpointIDRoute = createRoute({
  method: 'put',
  path: '/notificationEndpoints/{endpointID}',
  tags: ['NotificationEndpoints'],
  summary: 'Update a notification endpoint',
  operationId: 'PutNotificationEndpointsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
    }),
    body: {
      description: 'A new notification endpoint to replace the existing endpoint with',
      content: { 'application/json': { schema: NotificationEndpointSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated notification endpoint',
      content: { 'application/json': { schema: NotificationEndpointSchema } },
    },
    404: {
      description: 'The notification endpoint was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteNotificationEndpointsEndpointIDRoute = createRoute({
  method: 'delete',
  path: '/notificationEndpoints/{endpointID}',
  tags: ['NotificationEndpoints'],
  summary: 'Delete a notification endpoint',
  operationId: 'DeleteNotificationEndpointsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'The endpoint was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchNotificationEndpointsEndpointIDRoute = createRoute({
  method: 'patch',
  path: '/notificationEndpoints/{endpointID}',
  tags: ['NotificationEndpoints'],
  summary: 'Update a notification endpoint',
  operationId: 'PatchNotificationEndpointsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
    }),
    body: {
      description: 'Check update to apply',
      content: { 'application/json': { schema: NotificationEndpointUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated notification endpoint',
      content: { 'application/json': { schema: NotificationEndpointSchema } },
    },
    404: {
      description: 'The notification endpoint was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNotificationEndpointsEndpointIDLabelsRoute = createRoute({
  method: 'get',
  path: '/notificationEndpoints/{endpointID}/labels',
  tags: ['NotificationEndpoints'],
  summary: 'List all labels for a notification endpoint',
  operationId: 'GetNotificationEndpointsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a notification endpoint',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNotificationEndpointsEndpointIDLabelsRoute = createRoute({
  method: 'post',
  path: '/notificationEndpoints/{endpointID}/labels',
  tags: ['NotificationEndpoints'],
  summary: 'Add a label to a notification endpoint',
  operationId: 'PostNotificationEndpointIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
    }),
    body: {
      description: 'Label to add',
      content: { 'application/json': { schema: LabelMappingSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The label was added to the notification endpoint',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/notificationEndpoints/{endpointID}/labels/{labelID}',
  tags: ['NotificationEndpoints'],
  summary: 'Delete a label from a notification endpoint',
  operationId: 'DeleteNotificationEndpointsIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      endpointID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'endpointID',
            schema: { type: 'string' },
            required: true,
            description: 'The notification endpoint ID.',
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'labelID',
            schema: { type: 'string' },
            required: true,
            description: 'The ID of the label to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Endpoint or label not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getAuthorizationsRoute = createRoute({
  method: 'get',
  path: '/authorizations',
  tags: ['Authorizations (API tokens)', 'Security and access endpoints'],
  summary: 'List authorizations',
  description:
    "Lists authorizations.\n\nTo limit which authorizations are returned, pass query parameters in your request.\nIf no query parameters are passed, InfluxDB returns all authorizations.\n\n#### InfluxDB Cloud\n\n- InfluxDB Cloud doesn't expose [API token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token)\n  values in `GET /api/v2/authorizations` responses;\n  returns `token: redacted` for all authorizations.\n\n#### Required permissions\n\nTo retrieve an authorization, the request must use an API token that has the\nfollowing permissions:\n\n- `read-authorizations`\n- `read-user` for the user that the authorization is scoped to\n\n#### Related guides\n\n- [View tokens](https://docs.influxdata.com/influxdb/cloud/security/tokens/view-tokens/)\n",
  operationId: 'GetAuthorizations',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      userID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userID',
            schema: { type: 'string' },
            description:
              'A user ID.\nOnly returns authorizations scoped to the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            description:
              'A user name.\nOnly returns authorizations scoped to the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            description:
              'An organization ID. Only returns authorizations that belong to the specified [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization).',
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'An organization name.\nOnly returns authorizations that belong to the specified [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization).\n',
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            description:
              "An API [token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token) value.\nSpecifies an authorization by its `token` property value\nand returns the authorization.\n\n#### InfluxDB OSS\n\n- Doesn't support this parameter. InfluxDB OSS ignores the `token=` parameter,\n  applies other parameters, and then returns the result.\n\n#### Limitations\n\n- The parameter is non-repeatable. If you specify more than one,\n  only the first one is used. If a resource with the specified\n  property value doesn't exist, then the response body contains an empty list.\n",
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. The response body contains a list of authorizations.\n\nIf the response body is missing authorizations that you expect, check that the API\ntoken used in the request has `read-user` permission for the users (`userID` property value)\nin those authorizations.\n\n#### InfluxDB OSS\n\n- **Warning**: The response body contains authorizations with their\n  [API token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token) values in clear text.\n- If the request uses an  _[operator token](https://docs.influxdata.com/influxdb/latest/security/tokens/#operator-token)_,\n  InfluxDB OSS returns authorizations for all organizations in the instance.\n',
      content: { 'application/json': { schema: AuthorizationsSchema } },
    },
    400: GeneralServerErrorResponse,
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postAuthorizationsRoute = createRoute({
  method: 'post',
  path: '/authorizations',
  tags: ['Authorizations (API tokens)', 'Security and access endpoints'],
  summary: 'Create an authorization',
  description:
    "Creates an authorization and returns the authorization with the\ngenerated API [token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token).\n\nUse this endpoint to create an authorization, which generates an API token\nwith permissions to `read` or `write` to a specific resource or `type` of resource.\nThe API token is the authorization's `token` property value.\n\nTo follow best practices for secure API token generation and retrieval,\nInfluxDB enforces access restrictions on API tokens.\n\n  - InfluxDB allows access to the API token value immediately after the authorization is created.\n  - You can’t change access (read/write) permissions for an API token after it’s created.\n  - Tokens stop working when the user who created the token is deleted.\n\nWe recommend the following for managing your tokens:\n\n  - Create a generic user to create and manage tokens for writing data.\n  - Store your tokens in a secure password vault for future access.\n\n#### Required permissions\n\n- `write-authorizations`\n- `write-user` for the user that the authorization is scoped to\n\n#### Related guides\n\n- [Create a token](https://docs.influxdata.com/influxdb/cloud/security/tokens/create-token/)\n",
  operationId: 'PostAuthorizations',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'The authorization to create.',
      content: {
        'application/json': {
          schema: AuthorizationPostRequestSchema,
          examples: {
            AuthorizationPostRequest: AuthorizationPostRequestExample,
            AuthorizationWithResourcePostRequest: AuthorizationWithResourcePostRequestExample,
            AuthorizationWithUserPostRequest: AuthorizationWithUserPostRequestExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Success. The authorization is created. The response body contains the\nauthorization.\n',
      content: { 'application/json': { schema: AuthorizationSchema } },
    },
    400: GeneralServerErrorResponse,
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getAuthorizationsAuthIDRoute = createRoute({
  method: 'get',
  path: '/authorizations/{authID}',
  tags: ['Authorizations (API tokens)', 'Security and access endpoints'],
  summary: 'Retrieve an authorization',
  description:
    "Retrieves an authorization.\n\nUse this endpoint to retrieve information about an API token, including\nthe token's permissions and the user that the token is scoped to.\n\n#### InfluxDB OSS\n\n- InfluxDB OSS returns\n  [API token](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#token) values in authorizations.\n- If the request uses an _[operator token](https://docs.influxdata.com/influxdb/latest/security/tokens/#operator-token)_,\n  InfluxDB OSS returns authorizations for all organizations in the instance.\n\n#### Related guides\n\n- [View tokens](https://docs.influxdata.com/influxdb/cloud/security/tokens/view-tokens/)\n",
  externalDocs: {
    url: 'https://docs.influxdata.com/influxdb/cloud/security/tokens/view-tokens/',
    description: 'View tokens',
  },
  operationId: 'GetAuthorizationsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      authID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'authID',
            schema: { type: 'string' },
            required: true,
            description: 'An authorization ID. Specifies the authorization to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the authorization.',
      content: { 'application/json': { schema: AuthorizationSchema } },
    },
    400: {
      description: 'Bad request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: 'The specified resource ID is invalid.\n',
              value: { code: 'invalid', message: 'id must have a length of 16 bytes' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description: 'Not found.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: "The requested authorization doesn't exist.\n",
              value: { code: 'not found', message: 'authorization not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const deleteAuthorizationsAuthIDRoute = createRoute({
  method: 'delete',
  path: '/authorizations/{authID}',
  tags: ['Authorizations (API tokens)', 'Security and access endpoints'],
  summary: 'Delete an authorization',
  description:
    "Deletes an authorization.\n\nUse the endpoint to delete an API token.\n\nIf you want to disable an API token instead of delete it,\n[update the authorization's status to `inactive`](#operation/PatchAuthorizationsID).\n",
  operationId: 'DeleteAuthorizationsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      authID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'authID',
            schema: { type: 'string' },
            required: true,
            description: 'An authorization ID. Specifies the authorization to delete.',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success. The authorization is deleted.' },
    400: {
      description: 'Bad request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: 'The specified resource ID is invalid.\n',
              value: { code: 'invalid', message: 'id must have a length of 16 bytes' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description: 'Not found.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            notFound: {
              summary: "The requested authorization doesn't exist.\n",
              value: { code: 'not found', message: 'authorization not found' },
            },
          },
        },
      },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const patchAuthorizationsAuthIDRoute = createRoute({
  method: 'patch',
  path: '/authorizations/{authID}',
  tags: ['Authorizations (API tokens)', 'Security and access endpoints'],
  summary: 'Update an API token to be active or inactive',
  description:
    "Updates an authorization.\n\nUse this endpoint to set an API token's status to be _active_ or _inactive_.\nInfluxDB rejects requests that use inactive API tokens.\n",
  operationId: 'PatchAuthorizationsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      authID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'authID',
            schema: { type: 'string' },
            required: true,
            description: 'An authorization ID. Specifies the authorization to update.',
          },
        }),
    }),
    body: {
      description: 'In the request body, provide the authorization properties to update.',
      content: { 'application/json': { schema: AuthorizationUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success. The response body contains the updated authorization.',
      content: { 'application/json': { schema: AuthorizationSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Security and access endpoints', 'Users'],
  summary: 'List users',
  description:
    "Lists [users](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n\nTo limit which users are returned, pass query parameters in your request.\n\n#### InfluxDB Cloud\n\n- InfluxDB Cloud doesn't allow listing all users through the API.\n  Use the InfluxDB Cloud user interface (UI) to manage account information.\n\n#### Required permissions for InfluxDB Cloud\n\n| Action | Permission required | Restriction |\n|:-------|:--------------------|:------------|\n| List all users | Operator token | InfluxData internal use only |\n| List a specific user | `read-users` or `read-user USER_ID` |\n\n*`USER_ID`* is the ID of the user that you want to retrieve.\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/organizations/users/)\n",
  operationId: 'GetUsers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            description:
              'A user name.\nOnly lists the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            description:
              'A user id.\nOnly lists the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Success. The response contains a list of `users`.\n\n#### InfluxDB Cloud\n\n- Returns an empty `users` list if you don't pass _`id`_ or _`name`_ parameters and don't use an\n  _operator token_.\n  Only InfluxData can access InfluxDB Cloud operator tokens.\n",
      content: { 'application/json': { schema: UsersSchema } },
    },
    401: {
      description: 'Unauthorized.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        "Unprocessable entity.\n\nThe error may indicate one of the following problems:\n\n- The request body isn't valid--the request is well-formed,\n  but InfluxDB can't process it due to semantic errors.\n- You passed a parameter combination that InfluxDB doesn't support.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create a user',
  description:
    "(InfluxData internal use only)\n\nCreates and returns a [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user)\nthat can access InfluxDB.\n\n#### InfluxDB Cloud\n\n- InfluxDB Cloud Doesn't let you manage users through the API.\n  Use the InfluxDB Cloud user interface (UI) to manage account information.\n\n#### Required permissions for InfluxDB Cloud\n\n| Action | Permission required | Restriction |\n|:-------|:--------------------|:------------|\n| Create user | Operator token | InfluxData internal use only |\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/organizations/users/)\n",
  operationId: 'PostUsers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'In the request body, provide the user.',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success.\nThe response body contains the user.\n',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    401: {
      description:
        "Unauthorized.\n\n#### InfluxDB Cloud\n\n- Returns this error if the request doesn't use an _operator token_.\n  Only InfluxData can access InfluxDB Cloud operator tokens.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        "Unprocessable entity.\n\nThe error may indicate one of the following problems:\n\n- The request body isn't valid--the request is well-formed,\n  but InfluxDB can't process it due to semantic errors.\n- You passed a parameter combination that InfluxDB doesn't support.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getUsersUserIDRoute = createRoute({
  method: 'get',
  path: '/users/{userID}',
  tags: ['Users'],
  summary: 'Retrieve a user',
  description:
    'Retrieves a [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/organizations/users/)\n',
  operationId: 'GetUsersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description:
              'A user ID.\nRetrieves the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the user.',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const deleteUsersUserIDRoute = createRoute({
  method: 'delete',
  path: '/users/{userID}',
  tags: ['Users'],
  summary: 'Delete a user',
  description:
    "(InfluxData internal use only)\n\nDeletes a [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n\nFor security purposes, once an InfluxDB user account is deleted from an\norganization, the user (and their token) cannot be reactivated.\n\n#### InfluxDB Cloud\n\n- Doesn't let you manage users through the API.\n  Use the InfluxDB Cloud user interface (UI) to manage account information.\n\n#### Required permissions\n\n| Action | Permission required | Restriction |\n|:-------|:--------------------|:------------|\n| Delete user | Operator token | InfluxData internal use only |\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/organizations/users/)\n",
  operationId: 'DeleteUsersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description:
              'A user ID.\nDeletes the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success. The user is deleted.' },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const patchUsersUserIDRoute = createRoute({
  method: 'patch',
  path: '/users/{userID}',
  tags: ['Users'],
  summary: 'Update a user',
  description:
    "(InfluxData internal use only)\n\nUpdates a [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) and returns the user.\n\n#### InfluxDB Cloud\n\n- Doesn't let you manage users through the API.\n  Use the InfluxDB Cloud user interface (UI) to manage account information.\n\n#### Required permissions for InfluxDB Cloud\n\n| Action | Permission required | Restriction |\n|:-------|:--------------------|:------------|\n| Update user | Operator token | InfluxData internal use only |\n\n#### Related guides\n\n- [Manage users](https://docs.influxdata.com/influxdb/cloud/organizations/users/)\n",
  operationId: 'PatchUsersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            schema: { type: 'string' },
            required: true,
            description:
              'A user ID.\nUpdates the specified [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user).\n',
          },
        }),
    }),
    body: {
      description: 'The user update to apply.',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success. The response body contains the updated user.',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const getSetupRoute = createRoute({
  method: 'get',
  path: '/setup',
  tags: ['Setup'],
  summary: 'Retrieve setup status',
  description:
    'Check if setup is allowed. Returns `true` if no default user, organization, or bucket have been created.',
  operationId: 'GetSetup',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'Setup is allowed, true or false',
      content: { 'application/json': { schema: IsOnboardingSchema } },
    },
  },
})

export const postSetupRoute = createRoute({
  method: 'post',
  path: '/setup',
  tags: ['Setup'],
  summary: 'Create an initial user, organization, and bucket',
  description: 'Post an onboarding request to create an initial user, organization, and bucket.',
  operationId: 'PostSetup',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Source to create',
      content: { 'application/json': { schema: OnboardingRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The created default user, bucket, and organization',
      content: { 'application/json': { schema: OnboardingResponseSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const postSetupUserRoute = createRoute({
  method: 'post',
  path: '/setup/user',
  tags: ['Setup'],
  summary: 'Create a new user, organization, and bucket',
  description: 'Post an onboarding request to create a new user, organization, and bucket.',
  operationId: 'PostSetupUser',
  request: {
    body: {
      description: 'Source to create',
      content: { 'application/json': { schema: OnboardingRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The created default user, bucket, and organization.',
      content: { 'application/json': { schema: OnboardingResponseSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const getVariablesRoute = createRoute({
  method: 'get',
  path: '/variables',
  tags: ['Variables'],
  summary: 'List all variables',
  operationId: 'GetVariables',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description: 'The name of the organization.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'The organization ID.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of variables for an organization.',
      content: { 'application/json': { schema: VariablesSchema } },
    },
    400: GeneralServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postVariablesRoute = createRoute({
  method: 'post',
  path: '/variables',
  tags: ['Variables'],
  summary: 'Create a variable',
  operationId: 'PostVariables',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Variable to create',
      content: { 'application/json': { schema: VariableSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Variable created',
      content: { 'application/json': { schema: VariableSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const getVariablesVariableIDRoute = createRoute({
  method: 'get',
  path: '/variables/{variableID}',
  tags: ['Variables'],
  summary: 'Retrieve a variable',
  operationId: 'GetVariablesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
            description: 'The variable ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Variable found',
      content: { 'application/json': { schema: VariableSchema } },
    },
    404: GeneralServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const putVariablesVariableIDRoute = createRoute({
  method: 'put',
  path: '/variables/{variableID}',
  tags: ['Variables'],
  summary: 'Replace a variable',
  operationId: 'PutVariablesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
            description: 'The variable ID.',
          },
        }),
    }),
    body: {
      description: 'Variable to replace',
      content: { 'application/json': { schema: VariableSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Variable updated',
      content: { 'application/json': { schema: VariableSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const deleteVariablesVariableIDRoute = createRoute({
  method: 'delete',
  path: '/variables/{variableID}',
  tags: ['Variables'],
  summary: 'Delete a variable',
  operationId: 'DeleteVariablesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
            description: 'The variable ID.',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Variable deleted' }, default: GeneralServerErrorResponse },
})

export const patchVariablesVariableIDRoute = createRoute({
  method: 'patch',
  path: '/variables/{variableID}',
  tags: ['Variables'],
  summary: 'Update a variable',
  operationId: 'PatchVariablesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      variableID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
            description: 'The variable ID.',
          },
        }),
    }),
    body: {
      description: 'Variable update to apply',
      content: { 'application/json': { schema: VariableSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Variable updated',
      content: { 'application/json': { schema: VariableSchema } },
    },
    default: GeneralServerErrorResponse,
  },
})

export const getBucketsBucketIDSchemaMeasurementsRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}/schema/measurements',
  tags: ['Bucket Schemas'],
  summary: 'List measurement schemas of a bucket',
  description:
    'Lists _explicit_\n[schemas](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#schema)\n(`"schemaType": "explicit"`) for a bucket.\n\n_Explicit_ schemas are used to enforce column names, tags, fields, and data\ntypes for your data.\n\nBy default, buckets have an _implicit_ schema-type (`"schemaType": "implicit"`)\nthat conforms to your data.\n\n#### Related guides\n\n- [Using bucket schemas](https://www.influxdata.com/blog/new-bucket-schema-option-protect-from-unwanted-schema-changes/)\n',
  operationId: 'getMeasurementSchemas',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'An organization ID.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            description:
              'A measurement name.\nOnly returns measurement schemas with the specified name.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            description: 'A bucket ID.\nLists measurement schemas for the specified bucket.\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of measurement schemas returning summary information.',
      content: { 'application/json': { schema: MeasurementSchemaListSchema } },
      headers: z.object({
        ETag: {
          description: 'The current version of the bucket schema',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The current version of the bucket schema',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalidSchemaType: {
              summary: 'Invalid schema type.',
              value: { code: 'invalid', message: 'bucket schemaType must be explicit' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postBucketsBucketIDSchemaMeasurementsRoute = createRoute({
  method: 'post',
  path: '/buckets/{bucketID}/schema/measurements',
  tags: ['Bucket Schemas'],
  summary: 'Create a measurement schema for a bucket',
  description:
    'Creates an _explict_ measurement [schema](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#schema)\nfor a bucket.\n\n_Explicit_ schemas are used to enforce column names, tags, fields, and data\ntypes for your data.\n\nBy default, buckets have an _implicit_ schema-type (`"schemaType": "implicit"`)\nthat conforms to your data.\n\nUse this endpoint to create schemas that prevent non-conforming write requests.\n\n#### Limitations\n\n- Buckets must be created with the "explict" `schemaType` in order to use\nschemas.\n\n#### Related guides\n\n- [Manage bucket schemas](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/bucket-schema/).\n- [Create a bucket with an explicit schema](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/create-bucket/#create-a-bucket-with-an-explicit-schema)\n',
  operationId: 'createMeasurementSchema',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'An organization ID.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            description: 'A bucket ID.\nAdds a schema for the specified bucket.\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MeasurementSchemaCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The current version of the measurement schema.',
      content: { 'application/json': { schema: MeasurementSchemaSchema } },
      headers: z.object({
        ETag: {
          description: 'The current version of the measurement schema',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The current version of the measurement schema',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            badNameExample: {
              summary: 'Invalid name',
              description:
                'The error returned when the name is invalid, such as too few or too many characters or the name contains non-printable ASCII or is not valid UTF-8.',
              value: { code: 'invalid', message: 'name is invalid' },
            },
            missingColumnsExample: {
              summary: 'Missing columns',
              description:
                'The error returned when the request body is missing the columns property.',
              value: { code: 'invalid', message: 'columns is required' },
            },
            missingTimestampExample: {
              summary: 'Missing timestamp',
              description:
                'The error returned when the request body is missing a timestamp type column.',
              value: { code: 'invalid', message: 'Timestamp column is required' },
            },
            duplicateColumnNamesExample: {
              summary: 'Duplicate column names',
              description:
                'The error returned when the request body contains duplicate column names.',
              value: { code: 'invalid', message: 'Duplicate column names' },
            },
            missingFieldExample: {
              summary: 'Missing field',
              description:
                'The error returned when the request body is missing at least one field type column.',
              value: { code: 'invalid', message: 'At least one field column is required' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getBucketsBucketIDSchemaMeasurementsMeasurementIDRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}/schema/measurements/{measurementID}',
  tags: ['Bucket Schemas'],
  summary: 'Retrieve a measurement schema',
  description:
    'Retrieves an explicit measurement [schema](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#schema).\n',
  operationId: 'getMeasurementSchema',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description: 'Organization name.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'Organization ID.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            description: 'A bucket ID.\nRetrieves schemas for the specified bucket.\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
      measurementID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'measurementID',
            description:
              'The measurement schema ID.\nSpecifies the measurement schema to retrieve.\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Schema definition for a single measurement',
      content: { 'application/json': { schema: MeasurementSchemaSchema } },
      headers: z.object({
        ETag: {
          description: 'The current version of the measurement schema',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The current version of the measurement schema',
              param: { required: false },
            }),
        },
      }),
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchBucketsBucketIDSchemaMeasurementsMeasurementIDRoute = createRoute({
  method: 'patch',
  path: '/buckets/{bucketID}/schema/measurements/{measurementID}',
  tags: ['Bucket Schemas'],
  summary: 'Update a measurement schema',
  description:
    "Updates a measurement [schema](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#schema).\n\nUse this endpoint to update the fields (`name`, `type`, and `dataType`) of a\nmeasurement schema.\n\n#### Limitations\n\n- You can't update the `name` of a measurement.\n\n#### Related guides\n\n- [Manage bucket schemas](https://docs.influxdata.com/influxdb/cloud/organizations/buckets/bucket-schema/).\n- [Using bucket schemas](https://www.influxdata.com/blog/new-bucket-schema-option-protect-from-unwanted-schema-changes/).\n",
  operationId: 'updateMeasurementSchema',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description: 'An organization ID.\nSpecifies the organization that owns the schema.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bucketID',
            description: 'A bucket ID.\nSpecifies the bucket to retrieve schemas for.\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
      measurementID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'measurementID',
            description: 'A measurement schema ID.\nRetrieves the specified measurement schema.\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MeasurementSchemaUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains the measurement schema.\n',
      content: { 'application/json': { schema: MeasurementSchemaSchema } },
    },
    400: {
      description: 'Bad request.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            missingColumnsExample: {
              summary: 'Deleted columns',
              description:
                'The error returned when the request body does not contain all the columns from the source.',
              value: { code: 'invalid', message: 'Unable to delete columns from schema' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgsOrgIDLimitsRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/limits',
  tags: ['Limits'],
  summary: 'Retrieve limits for an organization',
  operationId: 'GetOrgLimitsID',
  request: {
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            description: 'The ID of the organization.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Limits defined for the organization.',
      content: {
        'application/json': {
          schema: z
            .object({ links: LinksSchema.exactOptional(), limits: LimitSchema.exactOptional() })
            .openapi({
              description: 'These are org limits similar to those configured in/by quartz.',
              required: [],
            }),
        },
      },
    },
    default: GeneralServerErrorResponse,
  },
})

export const getOrgsOrgIDUsageRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/usage',
  tags: ['Usage'],
  summary: 'Retrieve usage for an organization',
  operationId: 'GetOrgUsageID',
  request: {
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'orgID',
            description: 'The ID of the organization.',
            required: true,
            schema: { type: 'string' },
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
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            description:
              'Earliest time to include in results.\nFor more information about timestamps, see [Manipulate timestamps with Flux](https://docs.influxdata.com/influxdb/cloud/query-data/flux/manipulate-timestamps/).\n',
            required: true,
            schema: { type: 'integer', format: 'unix timestamp' },
          },
        }),
      stop: z
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
            in: 'query',
            name: 'stop',
            description:
              'Latest time to include in results.\nFor more information about timestamps, see [Manipulate timestamps with Flux](https://docs.influxdata.com/influxdb/cloud/query-data/flux/manipulate-timestamps/).\n',
            required: false,
            schema: { type: 'integer', format: 'unix timestamp' },
          },
        }),
      raw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'raw',
            description: 'return raw usage data',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Usage data',
      content: {
        'text/csv': {
          schema: z
            .string()
            .openapi({
              example:
                '#group,false,false,true,true,false,false,true,true,true,true #datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string,string #default,_result,,,,,,,,, ,result,table,_start,_stop,_time,_value,_field,_measurement,bucket_id,org_id ,,0,2021-05-10T14:25:10.865702397Z,2021-05-10T15:25:10.865702397Z,2021-05-10T15:00:00Z,5434066,gauge,storage_usage_bucket_bytes,2f6ba0cf9a2fdcbb,cec6fc1d2176dc11 ,,1,2021-05-10T14:25:10.865702397Z,2021-05-10T15:25:10.865702397Z,2021-05-10T15:00:00Z,9924053.966666665,gauge,storage_usage_bucket_bytes,8af67bcaf69d9daf,cec6fc1d2176dc11\n',
            }),
        },
      },
      headers: z.object({
        'Content-Encoding': {
          description:
            'Lists any encodings (usually compression algorithms) that have been applied to the response payload.',
          schema: z
            .enum(['gzip', 'identity'])
            .default('identity')
            .exactOptional()
            .openapi({
              description:
                'Lists any encodings (usually compression algorithms) that have been applied to the response payload.',
              param: { required: false },
            }),
        },
      }),
    },
    default: GeneralServerErrorResponse,
  },
})

export const getDashboardsRoute = createRoute({
  method: 'get',
  path: '/dashboards',
  tags: ['Dashboards'],
  summary: 'List dashboards',
  description:
    'Lists [dashboards](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#dashboard).\n\n#### Related guides\n\n- [Manage dashboards](https://docs.influxdata.com/influxdb/cloud/visualize-data/dashboards/).\n',
  operationId: 'GetDashboards',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      descending: DescendingParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: -1, maximum: 100, default: 20 },
            description:
              'The maximum number of [dashboards](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#dashboard) to return.\nDefault is `20`.\nThe minimum is `-1` and the maximum is `100`.\n',
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'owner',
            description:
              'A user ID. Only returns [dashboards](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#dashboard) where the specified user has the `owner` role.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortBy: z
        .enum(['ID', 'CreatedAt', 'UpdatedAt'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sortBy',
            description: 'The column to sort by.',
            schema: { type: 'string', enum: ['ID', 'CreatedAt', 'UpdatedAt'] },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            description:
              'A list of dashboard IDs.\nReturns only the specified [dashboards](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#dashboard).\nIf you specify `id` and `owner`, only `id` is used.\n',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            description:
              'An organization ID.\nOnly returns [dashboards](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#dashboard) that belong to the specified\n[organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization).\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            description:
              'An organization name.\nOnly returns [dashboards](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#dashboard) that belong to the specified\n[organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization).\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains dashboards.',
      content: { 'application/json': { schema: DashboardsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDashboardsRoute = createRoute({
  method: 'post',
  path: '/dashboards',
  tags: ['Dashboards'],
  summary: 'Create a dashboard',
  operationId: 'PostDashboards',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Dashboard to create',
      content: { 'application/json': { schema: CreateDashboardRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success. The dashboard is created.',
      content: {
        'application/json': { schema: z.xor([DashboardSchema, DashboardWithViewPropertiesSchema]) },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Data I/O endpoints', 'Tasks'],
  summary: 'List all tasks',
  description:
    'Retrieves a list of [tasks](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n\nTo limit which tasks are returned, pass query parameters in your request.\nIf no query parameters are passed, InfluxDB returns all tasks up to the default `limit`.\n',
  operationId: 'GetTasks',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) name.\nOnly returns tasks with the specified name.\nDifferent tasks may have the same name.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) ID.\nOnly returns tasks created after the specified task.\n',
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            description:
              'A [user](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#user) ID.\nOnly returns tasks owned by the specified user.\n',
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            description:
              'An [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) name.\nOnly returns tasks owned by the specified organization.\n',
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            description:
              'An [organization](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#organization) ID.\nOnly returns tasks owned by the specified organization.\n',
            required: false,
          },
        }),
      status: z
        .enum(['active', 'inactive'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: { type: 'string', enum: ['active', 'inactive'] },
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) status.\nOnly returns tasks that have the specified status (`active` or `inactive`).\n',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: -1, maximum: 500, default: 100 },
            description:
              'The maximum number of [tasks](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) to return.\nDefault is `100`.\nThe minimum is `1` and the maximum is `500`.\n\nTo reduce the payload size, combine _`type=basic`_ and _`limit`_ (see _Request samples_).\nFor more information about the `basic` response, see the _`type`_ parameter.\n',
            examples: {
              minPaginated: { summary: 'Return a maximum of 50 tasks.', value: '50' },
              all: { summary: 'Return all tasks, without pagination.', value: '-1' },
            },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0 },
            description: 'The number of records to skip.',
          },
        }),
      sortBy: z
        .literal('name')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sortBy',
            description:
              'The sort field. Only `name` is supported.\nSpecifies the field used to sort records in the list.\n',
            required: false,
            schema: { type: 'string', enum: ['name'] },
          },
        }),
      type: z
        .enum(['basic', 'system'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) type (`basic` or `system`).\nDefault is `system`.\nSpecifies the level of detail for tasks in the response.\nThe default (`system`) response contains all the metadata properties for tasks.\nTo reduce the response size, pass `basic` to omit some task properties (`flux`, `createdAt`, `updatedAt`).\n',
            required: false,
            schema: { default: '', type: 'string', enum: ['basic', 'system'] },
          },
          default: '',
        }),
      scriptID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'scriptID',
            description:
              'A [script](#tag/Invokable-Scripts) ID.\nOnly returns tasks that use the specified invokable script.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.\nThe response body contains the list of tasks.\n',
      content: {
        'application/json': {
          schema: TasksSchema,
          examples: {
            basicTypeTaskOutput: {
              summary: 'Basic output',
              description:
                'A sample response body for the `?type=basic` parameter.\n`type=basic` omits some task fields (`createdAt` and `updatedAt`)\nand field values (`org`, `flux`) in the response.\n',
              value: {
                links: { self: '/api/v2/tasks?limit=100' },
                tasks: [
                  {
                    links: {
                      labels: '/api/v2/tasks/09956cbb6d378000/labels',
                      logs: '/api/v2/tasks/09956cbb6d378000/logs',
                      members: '/api/v2/tasks/09956cbb6d378000/members',
                      owners: '/api/v2/tasks/09956cbb6d378000/owners',
                      runs: '/api/v2/tasks/09956cbb6d378000/runs',
                      self: '/api/v2/tasks/09956cbb6d378000',
                    },
                    labels: [],
                    id: '09956cbb6d378000',
                    orgID: '48c88459ee424a04',
                    org: '',
                    ownerID: '0772396d1f411000',
                    name: 'task1',
                    status: 'active',
                    flux: '',
                    every: '30m',
                    latestCompleted: '2022-06-30T15:00:00Z',
                    lastRunStatus: 'success',
                  },
                ],
              },
            },
            systemTypeTaskOutput: {
              summary: 'System output',
              description:
                'A sample response body for the `?type=system` parameter.\n`type=system` returns all task fields.\n',
              value: {
                links: { self: '/api/v2/tasks?limit=100' },
                tasks: [
                  {
                    links: {
                      labels: '/api/v2/tasks/09956cbb6d378000/labels',
                      logs: '/api/v2/tasks/09956cbb6d378000/logs',
                      members: '/api/v2/tasks/09956cbb6d378000/members',
                      owners: '/api/v2/tasks/09956cbb6d378000/owners',
                      runs: '/api/v2/tasks/09956cbb6d378000/runs',
                      self: '/api/v2/tasks/09956cbb6d378000',
                    },
                    labels: [],
                    id: '09956cbb6d378000',
                    orgID: '48c88459ee424a04',
                    org: 'my-iot-center',
                    ownerID: '0772396d1f411000',
                    name: 'task1',
                    description: 'IoT Center 90-day environment average.',
                    status: 'active',
                    flux: 'option task = {name: "task1", every: 30m}\n\nfrom(bucket: "iot_center")\n    |> range(start: -90d)\n    |> filter(fn: (r) => r._measurement == "environment")\n    |> aggregateWindow(every: 1h, fn: mean)',
                    every: '30m',
                    latestCompleted: '2022-06-30T15:00:00Z',
                    lastRunStatus: 'success',
                    createdAt: '2022-06-27T15:09:06Z',
                    updatedAt: '2022-06-28T18:10:15Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const postTasksRoute = createRoute({
  method: 'post',
  path: '/tasks',
  tags: ['Data I/O endpoints', 'Tasks'],
  summary: 'Create a task',
  description:
    'Creates a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) and returns the task.\n\nUse this endpoint to create a scheduled task that runs a Flux script.\n\n#### InfluxDB Cloud\n\n- You can use either `flux` or `scriptID` to provide the task script.\n\n  - `flux`: a string of "raw" Flux that contains task options and the script--for example:\n\n    ```json\n    {\n      "flux": "option task = {name: \\"CPU Total 1 Hour New\\", every: 1h}\\\n      from(bucket: \\"telegraf\\")\n        |> range(start: -1h)\n        |> filter(fn: (r) => (r._measurement == \\"cpu\\"))\n        |> filter(fn: (r) =>\\n\\t\\t(r._field == \\"usage_system\\"))\n        |> filter(fn: (r) => (r.cpu == \\"cpu-total\\"))\n        |> aggregateWindow(every: 1h, fn: max)\n        |> to(bucket: \\"cpu_usage_user_total_1h\\", org: \\"INFLUX_ORG\\")",\n      "status": "active",\n      "description": "This task downsamples CPU data every hour"\n    }\n    ```\n\n  - `scriptID`: the ID of an [invokable script](#tag/Invokable-Scripts)\n    for the task to run.\n    To pass task options when using `scriptID`, pass the options as\n    properties in the request body--for example:\n\n    ```json\n    {\n      "name": "CPU Total 1 Hour New",\n      "description": "This task downsamples CPU data every hour",\n      "every": "1h",\n      "scriptID": "SCRIPT_ID",\n      "scriptParameters":\n        {\n          "rangeStart": "-1h",\n          "bucket": "telegraf",\n          "filterField": "cpu-total"\n        }\n      }\n    ```\n\n#### Limitations:\n\n- You can\'t use `flux` and `scriptID` for the same task.\n\n#### Related guides\n\n- [Get started with tasks](https://docs.influxdata.com/influxdb/cloud/process-data/get-started/)\n- [Create a task](https://docs.influxdata.com/influxdb/cloud/process-data/manage-tasks/create-task/)\n- [Common tasks](https://docs.influxdata.com/influxdb/cloud/process-data/common-tasks/)\n- [Task configuration options](https://docs.influxdata.com/influxdb/cloud/process-data/task-options/)\n',
  operationId: 'PostTasks',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'The task to create',
      content: { 'application/json': { schema: TaskCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success. The response body contains a `tasks` list with the new task.',
      content: { 'application/json': { schema: TaskSchema } },
    },
    400: {
      description:
        "Bad request.\nThe response body contains detail about the error.\n\n#### InfluxDB Cloud\n\n- Returns this error if the task doesn't contain one of _`flux`_ or _`scriptID`_.\n- Returns this error if the task contains _`flux`_ _and_ _`scriptID`_.\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            fluxAndScriptError: {
              summary: "The request body can't contain both flux and scriptID",
              value: {
                code: 'invalid',
                message: 'failed to decode request: can not provide both scriptID and flux',
              },
            },
            missingFluxError: {
              summary: 'The request body requires either a flux parameter or scriptID parameter',
              value: { code: 'invalid', message: 'failed to decode request: flux required' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    500: InternalServerErrorResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}',
  tags: ['Data I/O endpoints', 'Tasks'],
  summary: 'Retrieve a task',
  description:
    'Retrieves a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task).\n',
  operationId: 'GetTasksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) ID.\nSpecifies the task to retrieve.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body contains the task.',
      content: { 'application/json': { schema: TaskSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const deleteTasksTaskIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}',
  tags: ['Tasks'],
  summary: 'Delete a task',
  description:
    'Deletes a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) and associated records.\n\nUse this endpoint to delete a task and all associated records (task runs, logs, and labels).\nOnce the task is deleted, InfluxDB cancels all scheduled runs of the task.\n\nIf you want to disable a task instead of delete it, [update the task status to `inactive`](#operation/PatchTasksID).\n',
  operationId: 'DeleteTasksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) ID. Specifies the task to delete.',
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success. The task and task runs are deleted. Scheduled runs are canceled.',
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})

export const patchTasksTaskIDRoute = createRoute({
  method: 'patch',
  path: '/tasks/{taskID}',
  tags: ['Tasks'],
  summary: 'Update a task',
  description:
    'Updates a [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task),\nand then cancels all scheduled runs of the task.\n\nUse this endpoint to set, modify, or clear task properties--for example: `cron`, `name`, `flux`, `status`.\nOnce InfluxDB applies the update, it cancels all previously scheduled runs of the task.\n\nTo update a task, pass an object that contains the updated key-value pairs.\nTo activate or inactivate a task, set the `status` property.\n_`"status": "inactive"`_ cancels scheduled runs and prevents manual runs of the task.\n\n#### InfluxDB Cloud\n\n- Use either `flux` or `scriptID` to provide the task script.\n\n  - `flux`: a string of "raw" Flux that contains task options and the script--for example:\n\n    ```json\n    {\n      "flux": "option task = {name: \\"CPU Total 1 Hour New\\", every: 1h}\\\n      from(bucket: \\"telegraf\\")\n        |> range(start: -1h)\n        |> filter(fn: (r) => (r._measurement == \\"cpu\\"))\n        |> filter(fn: (r) =>\\n\\t\\t(r._field == \\"usage_system\\"))\n        |> filter(fn: (r) => (r.cpu == \\"cpu-total\\"))\n        |> aggregateWindow(every: 1h, fn: max)\n        |> to(bucket: \\"cpu_usage_user_total_1h\\", org: \\"INFLUX_ORG\\")",\n      "status": "active",\n      "description": "This task downsamples CPU data every hour"\n    }\n    ```\n\n  - `scriptID`: the ID of an [invokable script](#tag/Invokable-Scripts)\n    for the task to run.\n    To pass task options when using `scriptID`, pass the options as\n    properties in the request body--for example:\n\n    ```json\n    {\n      "name": "CPU Total 1 Hour New",\n      "description": "This task downsamples CPU data every hour",\n      "every": "1h",\n      "scriptID": "SCRIPT_ID",\n      "scriptParameters":\n        {\n          "rangeStart": "-1h",\n          "bucket": "telegraf",\n          "filterField": "cpu-total"\n        }\n      }\n    ```\n\n#### Limitations:\n\n- You can\'t use `flux` and `scriptID` for the same task.\n',
  operationId: 'PatchTasksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'taskID',
            schema: { type: 'string' },
            required: true,
            description:
              'A [task](https://docs.influxdata.com/influxdb/cloud/reference/glossary/#task) ID.\nSpecifies the task to update.\n',
          },
        }),
    }),
    body: {
      description: 'An task update to apply.',
      content: { 'application/json': { schema: TaskUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success. The response body contains the updated task.',
      content: { 'application/json': { schema: TaskSchema } },
    },
    400: BadRequestErrorResponse,
    401: AuthorizationErrorResponse,
    404: ResourceNotFoundErrorResponse,
    500: InternalServerErrorResponse,
    default: GeneralServerErrorResponse,
  },
})
