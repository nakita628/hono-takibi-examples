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

type NodeTypeType = string

const NodeTypeSchema: z.ZodType<NodeTypeType> = z
  .string()
  .openapi({ description: 'Type of AST node' })
  .openapi('NodeType')

type ArrayExpressionType = {
  elements?: z.infer<typeof ExpressionSchema>[]
  type?: z.infer<typeof NodeTypeSchema>
}

type BadStatementType = { text?: string; type?: z.infer<typeof NodeTypeSchema> }

type BinaryExpressionType = {
  left?: z.infer<typeof ExpressionSchema>
  operator?: string
  right?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

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

type BlockType = { body?: z.infer<typeof StatementSchema>[]; type?: z.infer<typeof NodeTypeSchema> }

type BooleanLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: boolean }

type IdentifierType = { name?: string; type?: z.infer<typeof NodeTypeSchema> }

const IdentifierSchema: z.ZodType<IdentifierType> = z
  .object({ name: z.string().exactOptional(), type: NodeTypeSchema.exactOptional() })
  .openapi({ description: 'A valid Flux identifier', required: [] })
  .openapi('Identifier')

type BuiltinStatementType = {
  id?: z.infer<typeof IdentifierSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type CallExpressionType = {
  arguments?: z.infer<typeof ExpressionSchema>[]
  callee?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type ConditionalExpressionType = {
  alternate?: z.infer<typeof ExpressionSchema>
  consequent?: z.infer<typeof ExpressionSchema>
  test?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type DateTimeLiteralType = { type?: z.infer<typeof NodeTypeSchema>; value?: string }

const DictItemSchema: z.ZodType<DictItemType> = z
  .lazy(() =>
    z
      .object({
        key: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
        val: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'A key/value pair in a dictionary', required: [] }),
  )
  .openapi('DictItem')

type DictExpressionType = {
  elements?: z.infer<typeof DictItemSchema>[]
  type?: z.infer<typeof NodeTypeSchema>
}

type DictItemType = {
  key?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
  val?: z.infer<typeof ExpressionSchema>
}

const DurationSchema = z
  .object({
    magnitude: z.int().exactOptional(),
    type: NodeTypeSchema.exactOptional(),
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

const ArrayExpressionSchema: z.ZodType<ArrayExpressionType> = z
  .lazy(() =>
    z
      .object({
        elements: z
          .array(ExpressionSchema)
          .exactOptional()
          .openapi({ description: 'Elements of the array' }),
        type: NodeTypeSchema.exactOptional(),
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
        elements: z
          .array(DictItemSchema)
          .exactOptional()
          .openapi({ description: 'Elements of the dictionary' }),
        type: NodeTypeSchema.exactOptional(),
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
        body: NodeSchema.exactOptional(),
        params: z
          .array(PropertySchema)
          .exactOptional()
          .openapi({ description: 'Function parameters' }),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Function expression', required: [] }),
  )
  .openapi('FunctionExpression')

const BinaryExpressionSchema: z.ZodType<BinaryExpressionType> = z
  .lazy(() =>
    z
      .object({
        left: ExpressionSchema.exactOptional(),
        operator: z.string().exactOptional(),
        right: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
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
        arguments: z
          .array(ExpressionSchema)
          .exactOptional()
          .openapi({ description: 'Function arguments' }),
        callee: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Represents a function call', required: [] }),
  )
  .openapi('CallExpression')

const ConditionalExpressionSchema: z.ZodType<ConditionalExpressionType> = z
  .lazy(() =>
    z
      .object({
        alternate: ExpressionSchema.exactOptional(),
        consequent: ExpressionSchema.exactOptional(),
        test: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
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
        left: ExpressionSchema.exactOptional(),
        operator: z.string().exactOptional(),
        right: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({
        description:
          'Represents the rule conditions that collectively evaluate to either true or false',
        required: [],
      }),
  )
  .openapi('LogicalExpression')

const MemberExpressionSchema: z.ZodType<MemberExpressionType> = z
  .lazy(() =>
    z
      .object({
        object: ExpressionSchema.exactOptional(),
        property: PropertyKeySchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Represents accessing a property of an object', required: [] }),
  )
  .openapi('MemberExpression')

const IndexExpressionSchema: z.ZodType<IndexExpressionType> = z
  .lazy(() =>
    z
      .object({
        array: ExpressionSchema.exactOptional(),
        index: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Represents indexing into an array', required: [] }),
  )
  .openapi('IndexExpression')

const ObjectExpressionSchema: z.ZodType<ObjectExpressionType> = z
  .lazy(() =>
    z
      .object({
        properties: z
          .array(PropertySchema)
          .exactOptional()
          .openapi({ description: 'Object properties' }),
        type: NodeTypeSchema.exactOptional(),
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
        expression: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Represents an expression wrapped in parenthesis', required: [] }),
  )
  .openapi('ParenExpression')

const PipeExpressionSchema: z.ZodType<PipeExpressionType> = z
  .lazy(() =>
    z
      .object({
        argument: ExpressionSchema.exactOptional(),
        call: CallExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Call expression with pipe argument', required: [] }),
  )
  .openapi('PipeExpression')

const UnaryExpressionSchema: z.ZodType<UnaryExpressionType> = z
  .lazy(() =>
    z
      .object({
        argument: ExpressionSchema.exactOptional(),
        operator: z.string().exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({
        description: 'Uses operators to act on a single operand in an expression',
        required: [],
      }),
  )
  .openapi('UnaryExpression')

const BooleanLiteralSchema: z.ZodType<BooleanLiteralType> = z
  .object({ type: NodeTypeSchema.exactOptional(), value: z.boolean().exactOptional() })
  .openapi({ description: 'Represents boolean values', required: [] })
  .openapi('BooleanLiteral')

const DateTimeLiteralSchema: z.ZodType<DateTimeLiteralType> = z
  .object({
    type: NodeTypeSchema.exactOptional(),
    value: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description:
      "Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant",
    required: [],
  })
  .openapi('DateTimeLiteral')

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

type ExpressionStatementType = {
  expression?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type FieldType = {
  alias?: string
  args?: FieldType[]
  type?: 'func' | 'field' | 'integer' | 'number' | 'regex' | 'wildcard'
  value?: string
}

const NodeSchema: z.ZodType<NodeType> = z
  .lazy(() => z.xor([ExpressionSchema, BlockSchema]))
  .openapi('Node')

const PropertySchema: z.ZodType<PropertyType> = z
  .lazy(() =>
    z
      .object({
        key: PropertyKeySchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
        value: ExpressionSchema.exactOptional(),
      })
      .openapi({ description: 'The value associated with a key', required: [] }),
  )
  .openapi('Property')

type FunctionExpressionType = {
  body?: z.infer<typeof NodeSchema>
  params?: z.infer<typeof PropertySchema>[]
  type?: z.infer<typeof NodeTypeSchema>
}

type HealthCheckType = {
  checks?: HealthCheckType[]
  commit?: string
  message?: string
  name: string
  status: 'pass' | 'fail'
  version?: string
}

type IndexExpressionType = {
  array?: z.infer<typeof ExpressionSchema>
  index?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type LogicalExpressionType = {
  left?: z.infer<typeof ExpressionSchema>
  operator?: string
  right?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type MemberAssignmentType = {
  init?: z.infer<typeof ExpressionSchema>
  member?: z.infer<typeof MemberExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type PropertyKeyType = z.infer<typeof IdentifierSchema> | z.infer<typeof StringLiteralSchema>

const PropertyKeySchema: z.ZodType<PropertyKeyType> = z
  .xor([IdentifierSchema, StringLiteralSchema])
  .openapi('PropertyKey')

type MemberExpressionType = {
  object?: z.infer<typeof ExpressionSchema>
  property?: z.infer<typeof PropertyKeySchema>
  type?: z.infer<typeof NodeTypeSchema>
}

const BlockSchema: z.ZodType<BlockType> = z
  .lazy(() =>
    z
      .object({
        body: z.array(StatementSchema).exactOptional().openapi({ description: 'Block body' }),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'A set of statements', required: [] }),
  )
  .openapi('Block')

type NodeType = z.infer<typeof ExpressionSchema> | z.infer<typeof BlockSchema>

type ObjectExpressionType = {
  properties?: z.infer<typeof PropertySchema>[]
  type?: z.infer<typeof NodeTypeSchema>
}

const VariableAssignmentSchema: z.ZodType<VariableAssignmentType> = z
  .lazy(() =>
    z
      .object({
        id: IdentifierSchema.exactOptional(),
        init: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Represents the declaration of a variable', required: [] }),
  )
  .openapi('VariableAssignment')

const MemberAssignmentSchema: z.ZodType<MemberAssignmentType> = z
  .lazy(() =>
    z
      .object({
        init: ExpressionSchema.exactOptional(),
        member: MemberExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'Object property assignment', required: [] }),
  )
  .openapi('MemberAssignment')

type OptionStatementType = {
  assignment?: z.infer<typeof VariableAssignmentSchema> | z.infer<typeof MemberAssignmentSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type ParenExpressionType = {
  expression?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type PipeExpressionType = {
  argument?: z.infer<typeof ExpressionSchema>
  call?: z.infer<typeof CallExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

type PropertyType = {
  key?: z.infer<typeof PropertyKeySchema>
  type?: z.infer<typeof NodeTypeSchema>
  value?: z.infer<typeof ExpressionSchema>
}

type ReturnStatementType = {
  argument?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

const BadStatementSchema: z.ZodType<BadStatementType> = z
  .object({
    text: z.string().exactOptional().openapi({ description: 'Raw source text' }),
    type: NodeTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'A placeholder for statements for which no correct statement nodes can be created',
    required: [],
  })
  .openapi('BadStatement')

const ExpressionStatementSchema: z.ZodType<ExpressionStatementType> = z
  .lazy(() =>
    z
      .object({
        expression: ExpressionSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({
        description:
          'May consist of an expression that does not return a value and is executed solely for its side-effects',
        required: [],
      }),
  )
  .openapi('ExpressionStatement')

const ReturnStatementSchema: z.ZodType<ReturnStatementType> = z
  .lazy(() =>
    z
      .object({ argument: ExpressionSchema.exactOptional(), type: NodeTypeSchema.exactOptional() })
      .openapi({ description: 'Defines an expression to return', required: [] }),
  )
  .openapi('ReturnStatement')

const OptionStatementSchema: z.ZodType<OptionStatementType> = z
  .lazy(() =>
    z
      .object({
        assignment: z.xor([VariableAssignmentSchema, MemberAssignmentSchema]).exactOptional(),
        type: NodeTypeSchema.exactOptional(),
      })
      .openapi({ description: 'A single variable declaration', required: [] }),
  )
  .openapi('OptionStatement')

const BuiltinStatementSchema: z.ZodType<BuiltinStatementType> = z
  .object({ id: IdentifierSchema.exactOptional(), type: NodeTypeSchema.exactOptional() })
  .openapi({ description: 'Declares a builtin identifier and its type', required: [] })
  .openapi('BuiltinStatement')

const TestStatementSchema: z.ZodType<TestStatementType> = z
  .lazy(() =>
    z
      .object({
        assignment: VariableAssignmentSchema.exactOptional(),
        type: NodeTypeSchema.exactOptional(),
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

type TestStatementType = {
  assignment?: z.infer<typeof VariableAssignmentSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

const CheckStatusLevelSchema = z
  .enum(['UNKNOWN', 'OK', 'INFO', 'CRIT', 'WARN'])
  .openapi({ description: 'The state to record if check matches a criteria.' })
  .openapi('CheckStatusLevel')

const ThresholdBaseSchema = z
  .object({
    allValues: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, only alert if all values meet threshold.' }),
    level: CheckStatusLevelSchema.exactOptional(),
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
    .object({ max: z.float32(), min: z.float32(), type: z.literal('range'), within: z.boolean() })
    .openapi({ required: ['type', 'min', 'max', 'within'] }),
).openapi('RangeThreshold')

type ThresholdType =
  | z.infer<typeof GreaterThresholdSchema>
  | z.infer<typeof LesserThresholdSchema>
  | z.infer<typeof RangeThresholdSchema>

type UnaryExpressionType = {
  argument?: z.infer<typeof ExpressionSchema>
  operator?: string
  type?: z.infer<typeof NodeTypeSchema>
}

type VariableAssignmentType = {
  id?: z.infer<typeof IdentifierSchema>
  init?: z.infer<typeof ExpressionSchema>
  type?: z.infer<typeof NodeTypeSchema>
}

const QueryVariablePropertiesSchema = z
  .object({
    type: z.literal('query').exactOptional(),
    values: z
      .object({ language: z.string().exactOptional(), query: z.string().exactOptional() })
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

const AxisScaleSchema = z
  .enum(['log', 'linear'])
  .openapi({ description: 'Scale is the axis formatting scale. Supported: "log", "linear"' })
  .openapi('AxisScale')

const AxisSchema = z
  .object({
    base: z
      .enum(['', '2', '10'])
      .exactOptional()
      .openapi({ description: 'Base represents the radix for formatting axis values.' }),
    bounds: z
      .array(z.string())
      .min(0)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'The extents of an axis in the form [lower, upper]. Clients determine whether bounds are to be inclusive or exclusive of their limits',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label is a description of this Axis' }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Prefix represents a label prefix for formatting axis values.' }),
    scale: AxisScaleSchema.exactOptional(),
    suffix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Suffix represents a label suffix for formatting axis values.' }),
  })
  .openapi({
    description: 'The description of a particular axis for a visualization.',
    required: [],
  })
  .openapi('Axis')

const AxesSchema = z
  .object({ x: AxisSchema, y: AxisSchema })
  .openapi({ description: "The viewport for a View's visualizations", required: ['x', 'y'] })
  .openapi('Axes')

const DashboardColorSchema = z
  .object({
    hex: z.string().length(7).openapi({ description: 'The hex number of the color' }),
    id: z.string().openapi({ description: 'The unique ID of the view color.' }),
    name: z.string().openapi({ description: 'The user-facing name of the hex color.' }),
    type: z
      .enum(['min', 'max', 'threshold', 'scale', 'text', 'background'])
      .openapi({ description: 'Type is how the color is used.' }),
    value: z.float32().openapi({ description: 'The data value mapped to this color.' }),
  })
  .openapi({
    description: 'Defines an encoding of data value into color space.',
    required: ['id', 'type', 'hex', 'name', 'value'],
  })
  .openapi('DashboardColor')

const DecimalPlacesSchema = z
  .object({
    digits: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of digits after decimal to display' }),
    isEnforced: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether decimal point setting should be enforced' }),
  })
  .openapi({
    description:
      'Indicates whether decimal places should be enforced, and how many digits it should show.',
    required: [],
  })
  .openapi('DecimalPlaces')

const BuilderFunctionsTypeSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BuilderFunctionsType')

const BuilderAggregateFunctionTypeSchema = z
  .enum(['filter', 'group'])
  .openapi('BuilderAggregateFunctionType')

const BuilderTagsTypeSchema = z
  .object({
    aggregateFunctionType: BuilderAggregateFunctionTypeSchema.exactOptional(),
    key: z.string().exactOptional(),
    values: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuilderTagsType')

const BuilderConfigSchema = z
  .object({
    aggregateWindow: z
      .object({ fillValues: z.boolean().exactOptional(), period: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    buckets: z.array(z.string()).exactOptional(),
    functions: z.array(BuilderFunctionsTypeSchema).exactOptional(),
    tags: z.array(BuilderTagsTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuilderConfig')

const QueryEditModeSchema = z.enum(['builder', 'advanced']).openapi('QueryEditMode')

const DashboardQuerySchema = z
  .object({
    builderConfig: BuilderConfigSchema.exactOptional(),
    editMode: QueryEditModeSchema.exactOptional(),
    name: z.string().exactOptional(),
    text: z.string().exactOptional().openapi({ description: 'The text of the Flux query.' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardQuery')

const StaticLegendSchema = z
  .object({
    colorizeRows: z.boolean().exactOptional(),
    heightRatio: z.float32().exactOptional(),
    hide: z.boolean().exactOptional(),
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

const LinePlusSingleStatPropertiesSchema = z
  .object({
    axes: AxesSchema,
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    decimalPlaces: DecimalPlacesSchema,
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    note: z.string(),
    position: z.enum(['overlaid', 'stacked']),
    prefix: z.string(),
    queries: z.array(DashboardQuerySchema),
    shadeBelow: z.boolean().exactOptional(),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    staticLegend: StaticLegendSchema.exactOptional(),
    suffix: z.string(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('line-plus-single-stat'),
    xColumn: z.string().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    yColumn: z.string().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    yTotalTicks: z.int().exactOptional(),
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

const XYGeomSchema = z.enum(['line', 'step', 'stacked', 'bar', 'monotoneX']).openapi('XYGeom')

const XYViewPropertiesSchema = z
  .object({
    axes: AxesSchema,
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    geom: XYGeomSchema,
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    note: z.string(),
    position: z.enum(['overlaid', 'stacked']),
    queries: z.array(DashboardQuerySchema),
    shadeBelow: z.boolean().exactOptional(),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    staticLegend: StaticLegendSchema.exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('xy'),
    xColumn: z.string().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    yColumn: z.string().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    yTotalTicks: z.int().exactOptional(),
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
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    decimalPlaces: DecimalPlacesSchema,
    note: z.string(),
    prefix: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    staticLegend: StaticLegendSchema.exactOptional(),
    suffix: z.string(),
    tickPrefix: z.string(),
    tickSuffix: z.string(),
    type: z.literal('single-stat'),
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
    binCount: z.int(),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    fillColumns: z.array(z.string()),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    note: z.string(),
    position: z.enum(['overlaid', 'stacked']),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    type: z.literal('histogram'),
    xAxisLabel: z.string(),
    xColumn: z.string(),
    xDomain: z.array(z.float32()),
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
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    decimalPlaces: DecimalPlacesSchema,
    note: z.string(),
    prefix: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    suffix: z.string(),
    tickPrefix: z.string(),
    tickSuffix: z.string(),
    type: z.literal('gauge'),
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
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name that a field is renamed to by the user.' }),
    internalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The calculated name of a field.', readOnly: true }),
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
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    decimalPlaces: DecimalPlacesSchema,
    fieldOptions: z
      .array(RenamableFieldSchema)
      .openapi({
        description:
          'fieldOptions represent the fields retrieved by the query with customization options',
      }),
    note: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    tableOptions: z
      .object({
        fixFirstColumn: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'fixFirstColumn indicates whether the first column of the table should be locked',
          }),
        sortBy: RenamableFieldSchema.exactOptional(),
        verticalTimeAxis: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'verticalTimeAxis describes the orientation of the table by indicating whether the time axis will be displayed vertically',
          }),
        wrapping: z
          .enum(['truncate', 'wrap', 'single-line'])
          .exactOptional()
          .openapi({
            description: 'Wrapping describes the text wrapping style to be used in table views',
          }),
      })
      .openapi({ required: [] }),
    timeFormat: z
      .string()
      .openapi({
        description:
          'timeFormat describes the display format for time values according to moment.js date formatting',
      }),
    type: z.literal('table'),
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

const MarkdownViewPropertiesSchema = z
  .object({ note: z.string(), shape: z.literal('chronograf-v2'), type: z.literal('markdown') })
  .openapi({ required: ['type', 'shape', 'note'] })
  .openapi('MarkdownViewProperties')

const LabelSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
    orgID: z.string().exactOptional().openapi({ readOnly: true }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.',
        example: { color: 'ffb3b3', description: 'this is a description' },
      }),
  })
  .openapi({ required: [] })
  .openapi('Label')

const LabelsSchema = z.array(LabelSchema).openapi('Labels')

const LinkSchema = z
  .url()
  .openapi({ description: 'URI of resource.', readOnly: true })
  .openapi('Link')

const TaskStatusTypeSchema = z.enum(['active', 'inactive']).openapi('TaskStatusType')

const CheckBaseSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the check.' }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    lastRunError: z.string().exactOptional().openapi({ readOnly: true }),
    lastRunStatus: z
      .enum(['failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    latestCompleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of latest scheduled, completed run, RFC3339.',
        readOnly: true,
      }),
    links: z
      .object({
        labels: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve labels for this check',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve members for this check',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve owners for this check',
        }),
        query: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve flux script for this check',
        }),
        self: LinkSchema.exactOptional().openapi({ description: 'URL for this check' }),
      })
      .exactOptional()
      .openapi({
        example: {
          labels: '/api/v2/checks/1/labels',
          members: '/api/v2/checks/1/members',
          owners: '/api/v2/checks/1/owners',
          query: '/api/v2/checks/1/query',
          self: '/api/v2/checks/1',
        },
        readOnly: true,
        required: [],
      }),
    name: z.string(),
    orgID: z.string().openapi({ description: 'The ID of the organization that owns this check.' }),
    ownerID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of creator used to create this check.', readOnly: true }),
    query: DashboardQuerySchema,
    status: TaskStatusTypeSchema.exactOptional(),
    taskID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the task associated with this check.' }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'orgID', 'query'] })
  .openapi('CheckBase')

const DeadmanCheckSchema = CheckBaseSchema.and(
  z
    .object({
      every: z.string().exactOptional().openapi({ description: 'Check repetition interval.' }),
      level: CheckStatusLevelSchema.exactOptional(),
      offset: z
        .string()
        .exactOptional()
        .openapi({ description: 'Duration to delay after the schedule, before executing check.' }),
      reportZero: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'If only zero values reported since time, trigger an alert' }),
      staleTime: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'String duration for time that a series is considered stale and should not trigger deadman.',
        }),
      statusMessageTemplate: z
        .string()
        .exactOptional()
        .openapi({ description: 'The template used to generate and write a status message.' }),
      tags: z
        .array(
          z
            .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'List of tags to write to each status.' }),
      timeSince: z
        .string()
        .exactOptional()
        .openapi({ description: 'String duration before deadman triggers.' }),
      type: z.literal('deadman'),
    })
    .openapi({ required: ['type'] }),
).openapi('DeadmanCheck')

const ThresholdSchema: z.ZodType<ThresholdType> = z
  .lazy(() =>
    z
      .xor([GreaterThresholdSchema, LesserThresholdSchema, RangeThresholdSchema])
      .openapi({
        discriminator: {
          mapping: {
            greater: '#/components/schemas/GreaterThreshold',
            lesser: '#/components/schemas/LesserThreshold',
            range: '#/components/schemas/RangeThreshold',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('Threshold')

const ThresholdCheckSchema = CheckBaseSchema.and(
  z
    .object({
      every: z.string().exactOptional().openapi({ description: 'Check repetition interval.' }),
      offset: z
        .string()
        .exactOptional()
        .openapi({ description: 'Duration to delay after the schedule, before executing check.' }),
      statusMessageTemplate: z
        .string()
        .exactOptional()
        .openapi({ description: 'The template used to generate and write a status message.' }),
      tags: z
        .array(
          z
            .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'List of tags to write to each status.' }),
      thresholds: z.array(ThresholdSchema).exactOptional(),
      type: z.literal('threshold'),
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
      mapping: {
        custom: '#/components/schemas/CustomCheck',
        deadman: '#/components/schemas/DeadmanCheck',
        threshold: '#/components/schemas/ThresholdCheck',
      },
      propertyName: 'type',
    },
  })
  .openapi('CheckDiscriminator')

const CheckSchema = CheckDiscriminatorSchema.openapi('Check')

const CheckViewPropertiesSchema = z
  .object({
    check: CheckSchema.exactOptional(),
    checkID: z.string(),
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    type: z.literal('check'),
  })
  .openapi({ required: ['type', 'shape', 'checkID', 'queries', 'colors'] })
  .openapi('CheckViewProperties')

const ScatterViewPropertiesSchema = z
  .object({
    colors: z
      .array(z.string())
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    fillColumns: z.array(z.string()),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    note: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    symbolColumns: z.array(z.string()),
    timeFormat: z.string().exactOptional(),
    type: z.literal('scatter'),
    xAxisLabel: z.string(),
    xColumn: z.string(),
    xDomain: z.array(z.number()).max(2),
    xPrefix: z.string(),
    xSuffix: z.string(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    yAxisLabel: z.string(),
    yColumn: z.string(),
    yDomain: z.array(z.number()).max(2),
    yPrefix: z.string(),
    ySuffix: z.string(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    yTotalTicks: z.int().exactOptional(),
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
    binSize: z.number(),
    colors: z
      .array(z.string())
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    note: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    timeFormat: z.string().exactOptional(),
    type: z.literal('heatmap'),
    xAxisLabel: z.string(),
    xColumn: z.string(),
    xDomain: z.array(z.number()).max(2),
    xPrefix: z.string(),
    xSuffix: z.string(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    yAxisLabel: z.string(),
    yColumn: z.string(),
    yDomain: z.array(z.number()).max(2),
    yPrefix: z.string(),
    ySuffix: z.string(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    yTotalTicks: z.int().exactOptional(),
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
    colors: z
      .array(z.string())
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    fillColumns: z.array(z.string()),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    note: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    timeFormat: z.string().exactOptional(),
    type: z.literal('mosaic'),
    xAxisLabel: z.string(),
    xColumn: z.string(),
    xDomain: z.array(z.number()).max(2),
    xPrefix: z.string(),
    xSuffix: z.string(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    yAxisLabel: z.string(),
    yDomain: z.array(z.number()).max(2),
    yLabelColumnSeparator: z.string().exactOptional(),
    yLabelColumns: z.array(z.string()).exactOptional(),
    yPrefix: z.string(),
    ySeriesColumns: z.array(z.string()),
    ySuffix: z.string(),
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
    axes: AxesSchema,
    colors: z
      .array(DashboardColorSchema)
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    generateXAxisTicks: z.array(z.string()).exactOptional(),
    generateYAxisTicks: z.array(z.string()).exactOptional(),
    geom: XYGeomSchema,
    hoverDimension: z.enum(['auto', 'x', 'y', 'xy']).exactOptional(),
    legendColorizeRows: z.boolean().exactOptional(),
    legendHide: z.boolean().exactOptional(),
    legendOpacity: z.float32().exactOptional(),
    legendOrientationThreshold: z.int().exactOptional(),
    lowerColumn: z.string().exactOptional(),
    mainColumn: z.string().exactOptional(),
    note: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    staticLegend: StaticLegendSchema.exactOptional(),
    timeFormat: z.string().exactOptional(),
    type: z.literal('band'),
    upperColumn: z.string().exactOptional(),
    xColumn: z.string().exactOptional(),
    xTickStart: z.float32().exactOptional(),
    xTickStep: z.float32().exactOptional(),
    xTotalTicks: z.int().exactOptional(),
    yColumn: z.string().exactOptional(),
    yTickStart: z.float32().exactOptional(),
    yTickStep: z.float32().exactOptional(),
    yTotalTicks: z.int().exactOptional(),
  })
  .openapi({
    required: ['type', 'geom', 'queries', 'shape', 'axes', 'colors', 'note', 'showNoteWhenEmpty'],
  })
  .openapi('BandViewProperties')

const GeoViewLayerPropertiesSchema = z
  .object({ type: z.enum(['heatmap', 'circleMap', 'pointMap', 'trackMap']) })
  .openapi({ required: ['type'] })
  .openapi('GeoViewLayerProperties')

const GeoCircleViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({
      colorDimension: AxisSchema,
      colorField: z.string().openapi({ description: 'Circle color field' }),
      colors: z
        .array(DashboardColorSchema)
        .openapi({ description: 'Colors define color encoding of data into a visualization' }),
      interpolateColors: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Interpolate circle color based on displayed value' }),
      radius: z.int().exactOptional().openapi({ description: 'Maximum radius size in pixels' }),
      radiusDimension: AxisSchema,
      radiusField: z.string().openapi({ description: 'Radius field' }),
    })
    .openapi({
      required: ['radiusField', 'radiusDimension', 'colorField', 'colorDimension', 'colors'],
    }),
).openapi('GeoCircleViewLayer')

const GeoHeatMapViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({
      blur: z.int().openapi({ description: 'Blur for heatmap points' }),
      colors: z
        .array(DashboardColorSchema)
        .openapi({ description: 'Colors define color encoding of data into a visualization' }),
      intensityDimension: AxisSchema,
      intensityField: z.string().openapi({ description: 'Intensity field' }),
      radius: z.int().openapi({ description: 'Radius size in pixels' }),
    })
    .openapi({ required: ['intensityField', 'intensityDimension', 'radius', 'blur', 'colors'] }),
).openapi('GeoHeatMapViewLayer')

const GeoPointMapViewLayerSchema = GeoViewLayerPropertiesSchema.and(
  z
    .object({
      colorDimension: AxisSchema,
      colorField: z.string().openapi({ description: 'Marker color field' }),
      colors: z
        .array(DashboardColorSchema)
        .openapi({ description: 'Colors define color encoding of data into a visualization' }),
      isClustered: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Cluster close markers together' }),
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
        colors: z
          .array(DashboardColorSchema)
          .exactOptional()
          .openapi({ description: 'Colors define color encoding of data into a visualization' }),
        randomColors: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Assign different colors to different tracks' }),
        speed: z.int().exactOptional().openapi({ description: 'Speed of the track animation' }),
        trackWidth: z.int().exactOptional().openapi({ description: 'Width of the track' }),
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
    allowPanAndZoom: z
      .boolean()
      .default(true)
      .openapi({
        description: 'If true, map zoom and pan controls are enabled on the dashboard view',
      }),
    center: z
      .object({
        lat: z.float64().openapi({ description: 'Latitude of the center of the map' }),
        lon: z.float64().openapi({ description: 'Longitude of the center of the map' }),
      })
      .openapi({ description: 'Coordinates of the center of the map', required: ['lat', 'lon'] }),
    colors: z
      .array(DashboardColorSchema)
      .exactOptional()
      .openapi({ description: 'Colors define color encoding of data into a visualization' }),
    detectCoordinateFields: z
      .boolean()
      .default(true)
      .openapi({
        description:
          'If true, search results get automatically regroupped so that lon,lat and value are treated as columns',
      }),
    layers: z
      .array(GeoViewLayerSchema)
      .openapi({ description: 'List of individual layers shown in the map' }),
    mapStyle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Define map type - regular, satellite etc.' }),
    note: z.string(),
    queries: z.array(DashboardQuerySchema),
    shape: z.literal('chronograf-v2'),
    showNoteWhenEmpty: z
      .boolean()
      .openapi({ description: 'If true, will display note when empty' }),
    type: z.literal('geo'),
    zoom: z
      .float64()
      .min(1)
      .max(28)
      .openapi({ description: 'Zoom level used for initial display of the map' }),
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
  | z.infer<typeof MarkdownViewPropertiesSchema>
  | z.infer<typeof CheckViewPropertiesSchema>
  | z.infer<typeof ScatterViewPropertiesSchema>
  | z.infer<typeof HeatmapViewPropertiesSchema>
  | z.infer<typeof MosaicViewPropertiesSchema>
  | z.infer<typeof BandViewPropertiesSchema>
  | z.infer<typeof GeoViewPropertiesSchema>

const ImportDeclarationSchema = z
  .object({
    as: IdentifierSchema.exactOptional(),
    path: StringLiteralSchema.exactOptional(),
    type: NodeTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Declares a package import', required: [] })
  .openapi('ImportDeclaration')

const PackageClauseSchema = z
  .object({ name: IdentifierSchema.exactOptional(), type: NodeTypeSchema.exactOptional() })
  .openapi({ description: 'Defines a package identifier', required: [] })
  .openapi('PackageClause')

const FileSchema = z
  .object({
    body: z
      .array(StatementSchema)
      .exactOptional()
      .openapi({ description: 'List of Flux statements' }),
    imports: z
      .array(ImportDeclarationSchema)
      .exactOptional()
      .openapi({ description: 'A list of package imports' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the file.' }),
    package: PackageClauseSchema.exactOptional(),
    type: NodeTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Represents a source from a single file', required: [] })
  .openapi('File')

const PackageSchema = z
  .object({
    files: z.array(FileSchema).exactOptional().openapi({ description: 'Package files' }),
    package: z.string().exactOptional().openapi({ description: 'Package name' }),
    path: z.string().exactOptional().openapi({ description: 'Package import path' }),
    type: NodeTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Represents a complete package source tree.', required: [] })
  .openapi('Package')

const ASTResponseSchema = z
  .object({ ast: PackageSchema.exactOptional() })
  .openapi({ description: 'Contains the AST for the supplied Flux query', required: [] })
  .openapi('ASTResponse')

const AddResourceMemberRequestBodySchema = z
  .object({ id: z.string(), name: z.string().exactOptional() })
  .openapi({ required: ['id'] })
  .openapi('AddResourceMemberRequestBody')

const AnalyzeQueryResponseSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            character: z.int().exactOptional(),
            column: z.int().exactOptional(),
            line: z.int().exactOptional(),
            message: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyzeQueryResponse')

const AuthorizationUpdateRequestSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'A description of the token.' }),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({
        description:
          'If inactive the token is inactive and requests using the token will be rejected.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationUpdateRequest')

const ResourceSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If ID is set that is a permission for a specific resource. if it is not set it is a permission for all resources of that resource type.',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional name of the resource if the resource has a name field.' }),
    org: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional name of the organization of the organization with orgID.',
      }),
    orgID: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If orgID is set that is a permission for all resources owned my that org. if it is not set it is a permission for all resources of that resource type.',
      }),
    type: z.enum([
      'authorizations',
      'buckets',
      'dashboards',
      'orgs',
      'sources',
      'tasks',
      'telegrafs',
      'users',
      'variables',
      'scrapers',
      'secrets',
      'labels',
      'views',
      'documents',
      'notificationRules',
      'notificationEndpoints',
      'checks',
      'dbrp',
      'notebooks',
    ]),
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
      id: z.string().exactOptional().openapi({ readOnly: true }),
      links: z
        .object({
          self: LinkSchema.exactOptional().openapi({ readOnly: true }),
          user: LinkSchema.exactOptional().openapi({ readOnly: true }),
        })
        .exactOptional()
        .openapi({
          example: { self: '/api/v2/authorizations/1', user: '/api/v2/users/12' },
          readOnly: true,
          required: [],
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({ description: 'Name of the org token is scoped to.', readOnly: true }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({ description: 'ID of org that authorization is scoped to.' }),
      permissions: z
        .array(PermissionSchema)
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'List of permissions for an auth.  An auth must have at least one Permission.',
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Passed via the Authorization Header and Token Authentication type.',
          readOnly: true,
        }),
      updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      user: z
        .string()
        .exactOptional()
        .openapi({ description: 'Name of user that created and owns the token.', readOnly: true }),
      userID: z
        .string()
        .exactOptional()
        .openapi({ description: 'ID of user that created and owns the token.', readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['orgID', 'permissions'] })
  .openapi('Authorization')

const AuthorizationPostRequestSchema = AuthorizationUpdateRequestSchema.and(
  z
    .object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({ description: 'ID of org that authorization is scoped to.' }),
      permissions: z
        .array(PermissionSchema)
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'List of permissions for an auth.  An auth must have at least one Permission.',
        }),
      userID: z
        .string()
        .exactOptional()
        .openapi({ description: 'ID of user that authorization is scoped to.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['orgID', 'permissions'] })
  .openapi('AuthorizationPostRequest')

const LinksSchema = z
  .object({ next: LinkSchema.exactOptional(), prev: LinkSchema.exactOptional(), self: LinkSchema })
  .openapi({ required: ['self'] })
  .openapi('Links')

const AuthorizationsSchema = z
  .object({
    authorizations: z.array(AuthorizationSchema).exactOptional(),
    links: LinksSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Authorizations')

const RetentionRuleSchema = z
  .object({
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
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Duration in seconds for how long data will be kept in the database. 0 means infinite.',
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
        description: 'Shard duration measured in seconds.',
      }),
    type: z.literal('expire').default('expire'),
  })
  .openapi({ required: ['type', 'everySeconds'] })
  .openapi('RetentionRule')

const RetentionRulesSchema = z
  .array(RetentionRuleSchema)
  .openapi({ description: 'Rules to expire or retain data.  No rules means data never expires.' })
  .openapi('RetentionRules')

const SchemaTypeSchema = z.enum(['implicit', 'explicit']).openapi('SchemaType')

const BucketSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({
        labels: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve labels for this bucket',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve members that can read this bucket',
        }),
        org: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve parent organization for this bucket',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve owners that can read and write to this bucket.',
        }),
        self: LinkSchema.exactOptional().openapi({ description: 'URL for this bucket' }),
        write: LinkSchema.exactOptional().openapi({
          description: 'URL to write line protocol for this bucket',
        }),
      })
      .exactOptional()
      .openapi({
        example: {
          labels: '/api/v2/buckets/1/labels',
          members: '/api/v2/buckets/1/members',
          org: '/api/v2/orgs/2',
          owners: '/api/v2/buckets/1/owners',
          self: '/api/v2/buckets/1',
          write: '/api/v2/write?org=2&amp;bucket=1',
        },
        readOnly: true,
        required: [],
      }),
    name: z.string(),
    orgID: z.string().exactOptional(),
    retentionRules: RetentionRulesSchema,
    rp: z.string().exactOptional(),
    schemaType: SchemaTypeSchema.default('implicit').exactOptional(),
    type: z.enum(['user', 'system']).default('user').exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'retentionRules'] })
  .openapi('Bucket')

const BucketsSchema = z
  .object({
    buckets: z.array(BucketSchema).exactOptional(),
    links: LinksSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Buckets')

const CellSchema = z
  .object({
    h: z.int32().exactOptional(),
    id: z.string().exactOptional(),
    links: z
      .object({ self: z.string().exactOptional(), view: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    viewID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference to a view from the views API.' }),
    w: z.int32().exactOptional(),
    x: z.int32().exactOptional(),
    y: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Cell')

const CellUpdateSchema = z
  .object({
    h: z.int32().exactOptional(),
    w: z.int32().exactOptional(),
    x: z.int32().exactOptional(),
    y: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CellUpdate')

const ViewPropertiesSchema: z.ZodType<ViewPropertiesType> = z
  .lazy(() =>
    z.xor([
      LinePlusSingleStatPropertiesSchema,
      XYViewPropertiesSchema,
      SingleStatViewPropertiesSchema,
      HistogramViewPropertiesSchema,
      GaugeViewPropertiesSchema,
      TableViewPropertiesSchema,
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

const CellWithViewPropertiesSchema = CellSchema.and(
  z
    .object({ name: z.string().exactOptional(), properties: ViewPropertiesSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('CellWithViewProperties')

const CellsSchema = z.array(CellSchema).openapi('Cells')

const CellsWithViewPropertiesSchema = z
  .array(CellWithViewPropertiesSchema)
  .openapi('CellsWithViewProperties')

const CheckPatchSchema = z
  .object({
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckPatch')

const ChecksSchema = z
  .object({ checks: z.array(CheckSchema).exactOptional(), links: LinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Checks')

const CreateCellSchema = z
  .object({
    h: z.int32().exactOptional(),
    name: z.string().exactOptional(),
    usingView: z
      .string()
      .exactOptional()
      .openapi({ description: 'Makes a copy of the provided view.' }),
    w: z.int32().exactOptional(),
    x: z.int32().exactOptional(),
    y: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCell')

const CreateDashboardRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-facing description of the dashboard.' }),
    name: z.string().openapi({ description: 'The user-facing name of the dashboard.' }),
    orgID: z
      .string()
      .openapi({ description: 'The ID of the organization that owns the dashboard.' }),
  })
  .openapi({ required: ['orgID', 'name'] })
  .openapi('CreateDashboardRequest')

const DBRPSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'orgID')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'bucketID')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'database')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'retention_policy')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['orgID', 'bucketID', 'database', 'retention_policy'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'org')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'bucketID')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'database')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'retention_policy')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['org', 'bucketID', 'database', 'retention_policy'] }),
  ])
  .openapi('DBRP')

const DBRPUpdateSchema = z
  .object({
    database: z.string().exactOptional().openapi({ description: 'InfluxDB v1 database' }),
    default: z.boolean().exactOptional(),
    links: LinksSchema.exactOptional(),
    retention_policy: z
      .string()
      .exactOptional()
      .openapi({ description: 'InfluxDB v1 retention policy' }),
  })
  .openapi({ required: [] })
  .openapi('DBRPUpdate')

const DBRPsSchema = z
  .object({ content: z.array(DBRPSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DBRPs')

const DashboardSchema = CreateDashboardRequestSchema.and(
  z
    .object({
      cells: CellsSchema.exactOptional(),
      id: z.string().exactOptional().openapi({ readOnly: true }),
      labels: LabelsSchema.exactOptional(),
      links: z
        .object({
          cells: LinkSchema.exactOptional(),
          labels: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          org: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
          self: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          example: {
            cells: '/api/v2/dashboards/1/cells',
            labels: '/api/v2/dashboards/1/labels',
            members: '/api/v2/dashboards/1/members',
            org: '/api/v2/labels/1',
            owners: '/api/v2/dashboards/1/owners',
            self: '/api/v2/dashboards/1',
          },
          required: [],
        }),
      meta: z
        .object({
          createdAt: z.iso.datetime({ offset: true }).exactOptional(),
          updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('Dashboard')

const DashboardWithViewPropertiesSchema = CreateDashboardRequestSchema.and(
  z
    .object({
      cells: CellsWithViewPropertiesSchema.exactOptional(),
      id: z.string().exactOptional().openapi({ readOnly: true }),
      labels: LabelsSchema.exactOptional(),
      links: z
        .object({
          cells: LinkSchema.exactOptional(),
          labels: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          org: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
          self: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          example: {
            cells: '/api/v2/dashboards/1/cells',
            labels: '/api/v2/dashboards/1/labels',
            members: '/api/v2/dashboards/1/members',
            org: '/api/v2/labels/1',
            owners: '/api/v2/dashboards/1/owners',
            self: '/api/v2/dashboards/1',
          },
          required: [],
        }),
      meta: z
        .object({
          createdAt: z.iso.datetime({ offset: true }).exactOptional(),
          updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('DashboardWithViewProperties')

const DashboardsSchema = z
  .object({
    dashboards: z.array(DashboardSchema).exactOptional(),
    links: LinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dashboards')

const DeletePredicateRequestSchema = z
  .object({
    predicate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'InfluxQL-like delete statement',
        example: 'tag1="value1" and (tag2="value2" and tag3!="value3")',
      }),
    start: z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339Nano' }),
    stop: z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339Nano' }),
  })
  .openapi({ description: 'The delete predicate request.', required: ['start', 'stop'] })
  .openapi('DeletePredicateRequest')

const DialectSchema = z
  .object({
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
        description: 'https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#columns',
      }),
    commentPrefix: z
      .string()
      .min(0)
      .max(1)
      .default('#')
      .exactOptional()
      .openapi({ description: 'Character prefixed to comment strings' }),
    dateTimeFormat: z
      .enum(['RFC3339', 'RFC3339Nano'])
      .default('RFC3339')
      .exactOptional()
      .openapi({ description: 'Format of timestamps' }),
    delimiter: z
      .string()
      .length(1)
      .default(',')
      .exactOptional()
      .openapi({ description: 'Separator between cells; the default is ,' }),
    header: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If true, the results will contain a header row' }),
  })
  .openapi({
    description:
      'Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions',
    required: [],
  })
  .openapi('Dialect')

const DocumentMetaSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional(),
    name: z.string(),
    templateID: z.string().exactOptional(),
    type: z.string().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    version: z.string(),
  })
  .openapi({ required: ['name', 'version'] })
  .openapi('DocumentMeta')

const DocumentSchema = z
  .object({
    content: z.object({}),
    id: z.string().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({ self: LinkSchema.exactOptional().openapi({ description: 'The document URL.' }) })
      .exactOptional()
      .openapi({
        example: { self: '/api/v2/documents/templates/1' },
        readOnly: true,
        required: [],
      }),
    meta: DocumentMetaSchema,
  })
  .openapi({ required: ['id', 'meta', 'content'] })
  .openapi('Document')

const DocumentCreateSchema = z
  .object({
    content: z.object({}),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An array of label IDs to be added as labels to the document.' }),
    meta: DocumentMetaSchema,
    org: z
      .string()
      .exactOptional()
      .openapi({ description: 'The organization Name. Specify either `orgID` or `org`.' }),
    orgID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The organization Name. Specify either `orgID` or `org`.' }),
  })
  .openapi({ required: ['meta', 'content'] })
  .openapi('DocumentCreate')

const DocumentListEntrySchema = z
  .object({
    id: z.string().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({ self: LinkSchema.exactOptional().openapi({ description: 'The document URL.' }) })
      .exactOptional()
      .openapi({
        example: { self: '/api/v2/documents/templates/1' },
        readOnly: true,
        required: [],
      }),
    meta: DocumentMetaSchema,
  })
  .openapi({ required: ['id', 'meta'] })
  .openapi('DocumentListEntry')

const DocumentUpdateSchema = z
  .object({ content: z.object({}).exactOptional(), meta: DocumentMetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DocumentUpdate')

const DocumentsSchema = z
  .object({ documents: z.array(DocumentListEntrySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Documents')

const ErrorSchema = z
  .object({
    code: z
      .enum([
        'internal error',
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
    err: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'err is a stack of errors that occurred during processing of the request. Useful for debugging.',
        readOnly: true,
      }),
    message: z
      .string()
      .openapi({ description: 'message is a human-readable message.', readOnly: true }),
    op: z
      .string()
      .exactOptional()
      .openapi({
        description: 'op describes the logical code operation during error. Useful for debugging.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const FieldSchema: z.ZodType<FieldType> = z
  .lazy(() =>
    z
      .object({
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
        type: z
          .enum(['func', 'field', 'integer', 'number', 'regex', 'wildcard'])
          .exactOptional()
          .openapi({
            description:
              '`type` describes the field type. `func` is a function. `field` is a field reference.',
          }),
        value: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'value is the value of the field.  Meaning of the value is implied by the `type` key',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Field')

const FlagsSchema = z.looseObject({}).openapi('Flags')

const FluxResponseSchema = z
  .object({ flux: z.string().exactOptional() })
  .openapi({ description: 'Rendered flux that backs the check or notification.', required: [] })
  .openapi('FluxResponse')

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

const NotificationEndpointTypeSchema = z
  .enum(['slack', 'pagerduty', 'http', 'telegram'])
  .openapi('NotificationEndpointType')

const NotificationEndpointBaseSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the notification endpoint.' }),
    id: z.string().exactOptional(),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({
        labels: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve labels for this endpoint.',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve members for this endpoint.',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve owners for this endpoint.',
        }),
        self: LinkSchema.exactOptional().openapi({ description: 'URL for this endpoint.' }),
      })
      .exactOptional()
      .openapi({
        example: {
          labels: '/api/v2/notificationEndpoints/1/labels',
          members: '/api/v2/notificationEndpoints/1/members',
          owners: '/api/v2/notificationEndpoints/1/owners',
          self: '/api/v2/notificationEndpoints/1',
        },
        readOnly: true,
        required: [],
      }),
    name: z.string(),
    orgID: z.string().exactOptional(),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'The status of the endpoint.' }),
    type: NotificationEndpointTypeSchema,
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    userID: z.string().exactOptional(),
  })
  .openapi({ required: ['type', 'name'] })
  .openapi('NotificationEndpointBase')

const HTTPNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({
      authMethod: z.enum(['none', 'basic', 'bearer']),
      contentTemplate: z.string().exactOptional(),
      headers: z
        .record(z.string(), z.string())
        .exactOptional()
        .openapi({ description: 'Customized headers.' }),
      method: z.enum(['POST', 'GET', 'PUT']),
      password: z.string().exactOptional(),
      token: z.string().exactOptional(),
      url: z.string(),
      username: z.string().exactOptional(),
    })
    .openapi({ required: ['url', 'authMethod', 'method'] }),
).openapi('HTTPNotificationEndpoint')

const RuleStatusLevelSchema = z
  .enum(['UNKNOWN', 'OK', 'INFO', 'CRIT', 'WARN', 'ANY'])
  .openapi({ description: 'The state to record if check matches a criteria.' })
  .openapi('RuleStatusLevel')

const StatusRuleSchema = z
  .object({
    count: z.int().exactOptional(),
    currentLevel: RuleStatusLevelSchema.exactOptional(),
    period: z.string().exactOptional(),
    previousLevel: RuleStatusLevelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatusRule')

const TagRuleSchema = z
  .object({
    key: z.string().exactOptional(),
    operator: z.enum(['equal', 'notequal', 'equalregex', 'notequalregex']).exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagRule')

const NotificationRuleBaseSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the notification rule.' }),
    endpointID: z.string(),
    every: z
      .string()
      .exactOptional()
      .openapi({ description: 'The notification repetition interval.' }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    lastRunError: z.string().exactOptional().openapi({ readOnly: true }),
    lastRunStatus: z
      .enum(['failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    latestCompleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of latest scheduled, completed run, RFC3339.',
        readOnly: true,
      }),
    limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty.",
      }),
    limitEvery: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty.",
      }),
    links: z
      .object({
        labels: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve labels for this notification rule.',
        }),
        members: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve members for this notification rule.',
        }),
        owners: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve owners for this notification rule.',
        }),
        query: LinkSchema.exactOptional().openapi({
          description: 'URL to retrieve flux script for this notification rule.',
        }),
        self: LinkSchema.exactOptional().openapi({ description: 'URL for this endpoint.' }),
      })
      .exactOptional()
      .openapi({
        example: {
          labels: '/api/v2/notificationRules/1/labels',
          members: '/api/v2/notificationRules/1/members',
          owners: '/api/v2/notificationRules/1/owners',
          query: '/api/v2/notificationRules/1/query',
          self: '/api/v2/notificationRules/1',
        },
        readOnly: true,
        required: [],
      }),
    name: z
      .string()
      .openapi({ description: 'Human-readable name describing the notification rule.' }),
    offset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration to delay after the schedule, before executing check.' }),
    orgID: z
      .string()
      .openapi({ description: 'The ID of the organization that owns this notification rule.' }),
    ownerID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of creator used to create this notification rule.',
        readOnly: true,
      }),
    runbookLink: z.string().exactOptional(),
    sleepUntil: z.string().exactOptional(),
    status: TaskStatusTypeSchema,
    statusRules: z
      .array(StatusRuleSchema)
      .min(1)
      .openapi({ description: 'List of status rules the notification rule attempts to match.' }),
    tagRules: z
      .array(TagRuleSchema)
      .exactOptional()
      .openapi({ description: 'List of tag rules the notification rule attempts to match.' }),
    taskID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the task associated with this notification rule.' }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['orgID', 'status', 'name', 'statusRules', 'endpointID'] })
  .openapi('NotificationRuleBase')

const HTTPNotificationRuleBaseSchema = z
  .object({ type: z.literal('http'), url: z.string().exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('HTTPNotificationRuleBase')

const HTTPNotificationRuleSchema = NotificationRuleBaseSchema.and(
  HTTPNotificationRuleBaseSchema,
).openapi('HTTPNotificationRule')

const HealthCheckSchema: z.ZodType<HealthCheckType> = z
  .lazy(() =>
    z
      .object({
        checks: z.array(HealthCheckSchema).exactOptional(),
        commit: z.string().exactOptional(),
        message: z.string().exactOptional(),
        name: z.string(),
        status: z.enum(['pass', 'fail']),
        version: z.string().exactOptional(),
      })
      .openapi({ required: ['name', 'status'] }),
  )
  .openapi('HealthCheck')

const InfluxQLQuerySchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Bucket is to be used instead of the database and retention policy specified in the InfluxQL query.',
      }),
    query: z.string().openapi({ description: 'InfluxQL query execute.' }),
    type: z
      .literal('influxql')
      .exactOptional()
      .openapi({ description: 'The type of query. Must be "influxql".' }),
  })
  .openapi({ description: 'Query influx using the InfluxQL language', required: ['query'] })
  .openapi('InfluxQLQuery')

const IsOnboardingSchema = z
  .object({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True means that the influxdb instance has NOT had initial setup; false means that the database has been setup.',
      }),
  })
  .openapi({ required: [] })
  .openapi('IsOnboarding')

const LabelCreateRequestSchema = z
  .object({
    name: z.string(),
    orgID: z.string(),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.',
        example: { color: 'ffb3b3', description: 'this is a description' },
      }),
  })
  .openapi({ required: ['orgID', 'name'] })
  .openapi('LabelCreateRequest')

const LabelMappingSchema = z
  .object({ labelID: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LabelMapping')

const LabelResponseSchema = z
  .object({ label: LabelSchema.exactOptional(), links: LinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LabelResponse')

const LabelUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value.',
        example: { color: 'ffb3b3', description: 'this is a description' },
      }),
  })
  .openapi({ required: [] })
  .openapi('LabelUpdate')

const LabelsResponseSchema = z
  .object({ labels: LabelsSchema.exactOptional(), links: LinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LabelsResponse')

const LanguageRequestSchema = z
  .object({ query: z.string().openapi({ description: 'Flux query script to be analyzed' }) })
  .openapi({ description: 'Flux query to be analyzed.', required: ['query'] })
  .openapi('LanguageRequest')

const LineProtocolErrorSchema = z
  .object({
    code: z
      .enum(['internal error', 'not found', 'conflict', 'invalid', 'empty value', 'unavailable'])
      .openapi({ description: 'Code is the machine-readable error code.', readOnly: true }),
    err: z
      .string()
      .openapi({
        description:
          'Err is a stack of errors that occurred during processing of the request. Useful for debugging.',
        readOnly: true,
      }),
    line: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'First line within sent body containing malformed data',
        readOnly: true,
      }),
    message: z
      .string()
      .openapi({ description: 'Message is a human-readable message.', readOnly: true }),
    op: z
      .string()
      .openapi({
        description: 'Op describes the logical code operation during error. Useful for debugging.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['code', 'message', 'op', 'err'] })
  .openapi('LineProtocolError')

const LineProtocolLengthErrorSchema = z
  .object({
    code: z
      .literal('invalid')
      .openapi({ description: 'Code is the machine-readable error code.', readOnly: true }),
    maxLength: z
      .int32()
      .openapi({ description: 'Max length in bytes for a body of line-protocol.', readOnly: true }),
    message: z
      .string()
      .openapi({ description: 'Message is a human-readable message.', readOnly: true }),
  })
  .openapi({ required: ['code', 'message', 'maxLength'] })
  .openapi('LineProtocolLengthError')

const LogEventSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the event that occurred.',
        example: 'Halt and catch fire',
        readOnly: true,
      }),
    runID: z
      .string()
      .exactOptional()
      .openapi({ description: 'the ID of the task that logged', readOnly: true }),
    time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time event occurred, RFC3339Nano.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('LogEvent')

const LogsSchema = z
  .object({ events: z.array(LogEventSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ required: [] })
  .openapi('Logs')

const SlackNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Specifies the API token string. Specify either `URL` or `Token`.',
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Specifies the URL of the Slack endpoint. Specify either `URL` or `Token`.',
        }),
    })
    .openapi({ required: [] }),
).openapi('SlackNotificationEndpoint')

const PagerDutyNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({ clientURL: z.string().exactOptional(), routingKey: z.string() })
    .openapi({ required: ['routingKey'] }),
).openapi('PagerDutyNotificationEndpoint')

const TelegramNotificationEndpointSchema = NotificationEndpointBaseSchema.and(
  z
    .object({
      channel: z
        .string()
        .openapi({
          description:
            'ID of the telegram channel, a chat_id in https://core.telegram.org/bots/api#sendmessage .',
        }),
      token: z
        .string()
        .openapi({
          description:
            'Specifies the Telegram bot token. See https://core.telegram.org/bots#creating-a-new-bot .',
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
      mapping: {
        http: '#/components/schemas/HTTPNotificationEndpoint',
        pagerduty: '#/components/schemas/PagerDutyNotificationEndpoint',
        slack: '#/components/schemas/SlackNotificationEndpoint',
        telegram: '#/components/schemas/TelegramNotificationEndpoint',
      },
      propertyName: 'type',
    },
  })
  .openapi('NotificationEndpointDiscriminator')

const NotificationEndpointSchema =
  NotificationEndpointDiscriminatorSchema.openapi('NotificationEndpoint')

const NotificationEndpointUpdateSchema = z
  .object({
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationEndpointUpdate')

const NotificationEndpointsSchema = z
  .object({
    links: LinksSchema.exactOptional(),
    notificationEndpoints: z.array(NotificationEndpointSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationEndpoints')

const SlackNotificationRuleBaseSchema = z
  .object({
    channel: z.string().exactOptional(),
    messageTemplate: z.string(),
    type: z.literal('slack'),
  })
  .openapi({ required: ['type', 'messageTemplate'] })
  .openapi('SlackNotificationRuleBase')

const SlackNotificationRuleSchema = NotificationRuleBaseSchema.and(
  SlackNotificationRuleBaseSchema,
).openapi('SlackNotificationRule')

const SMTPNotificationRuleBaseSchema = z
  .object({
    bodyTemplate: z.string().exactOptional(),
    subjectTemplate: z.string(),
    to: z.string(),
    type: z.literal('smtp'),
  })
  .openapi({ required: ['type', 'subjectTemplate', 'to'] })
  .openapi('SMTPNotificationRuleBase')

const SMTPNotificationRuleSchema = NotificationRuleBaseSchema.and(
  SMTPNotificationRuleBaseSchema,
).openapi('SMTPNotificationRule')

const PagerDutyNotificationRuleBaseSchema = z
  .object({ messageTemplate: z.string(), type: z.literal('pagerduty') })
  .openapi({ required: ['type', 'messageTemplate'] })
  .openapi('PagerDutyNotificationRuleBase')

const PagerDutyNotificationRuleSchema = NotificationRuleBaseSchema.and(
  PagerDutyNotificationRuleBaseSchema,
).openapi('PagerDutyNotificationRule')

const TelegramNotificationRuleBaseSchema = z
  .object({
    disableWebPagePreview: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disables preview of web links in the sent messages when "true". Defaults to "false" .',
      }),
    messageTemplate: z
      .string()
      .openapi({ description: 'The message template as a flux interpolated string.' }),
    parseMode: z
      .enum(['MarkdownV2', 'HTML', 'Markdown'])
      .exactOptional()
      .openapi({
        description:
          'Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" .',
      }),
    type: z
      .literal('telegram')
      .openapi({
        description: 'The discriminator between other types of notification rules is "telegram".',
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
      mapping: {
        http: '#/components/schemas/HTTPNotificationRule',
        pagerduty: '#/components/schemas/PagerDutyNotificationRule',
        slack: '#/components/schemas/SlackNotificationRule',
        smtp: '#/components/schemas/SMTPNotificationRule',
        telegram: '#/components/schemas/TelegramNotificationRule',
      },
      propertyName: 'type',
    },
  })
  .openapi('NotificationRuleDiscriminator')

const NotificationRuleSchema = NotificationRuleDiscriminatorSchema.openapi('NotificationRule')

const NotificationRuleUpdateSchema = z
  .object({
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationRuleUpdate')

const NotificationRulesSchema = z
  .object({
    links: LinksSchema.exactOptional(),
    notificationRules: z.array(NotificationRuleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationRules')

const OnboardingRequestSchema = z
  .object({
    bucket: z.string(),
    org: z.string(),
    password: z.string().exactOptional(),
    retentionPeriodHrs: z
      .int()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "Retention period *in nanoseconds* for the new bucket. This key's name has been misleading since OSS 2.0 GA, please transition to use `retentionPeriodSeconds`\n",
      }),
    retentionPeriodSeconds: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authentication token to set on the initial user. If not specified, the server will generate a token.\n',
      }),
    username: z.string(),
  })
  .openapi({ required: ['username', 'org', 'bucket'] })
  .openapi('OnboardingRequest')

const OrganizationSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    links: z
      .object({
        buckets: LinkSchema.exactOptional(),
        dashboards: LinkSchema.exactOptional(),
        labels: LinkSchema.exactOptional(),
        members: LinkSchema.exactOptional(),
        owners: LinkSchema.exactOptional(),
        secrets: LinkSchema.exactOptional(),
        self: LinkSchema.exactOptional(),
        tasks: LinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        example: {
          buckets: '/api/v2/buckets?org=myorg',
          dashboards: '/api/v2/dashboards?org=myorg',
          labels: '/api/v2/orgs/1/labels',
          members: '/api/v2/orgs/1/members',
          owners: '/api/v2/orgs/1/owners',
          secrets: '/api/v2/orgs/1/secrets',
          self: '/api/v2/orgs/1',
          tasks: '/api/v2/tasks?org=myorg',
        },
        readOnly: true,
        required: [],
      }),
    name: z.string(),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'If inactive the organization is inactive.' }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('Organization')

const UserResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    links: z
      .object({ self: z.url().exactOptional() })
      .exactOptional()
      .openapi({ example: { self: '/api/v2/users/1' }, readOnly: true, required: [] }),
    name: z.string(),
    oauthID: z.string().exactOptional(),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'If inactive the user is inactive.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('UserResponse')

const OnboardingResponseSchema = z
  .object({
    auth: AuthorizationSchema.exactOptional(),
    bucket: BucketSchema.exactOptional(),
    org: OrganizationSchema.exactOptional(),
    user: UserResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnboardingResponse')

const OrganizationsSchema = z
  .object({ links: LinksSchema.exactOptional(), orgs: z.array(OrganizationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Organizations')

const PasswordResetBodySchema = z
  .object({ password: z.string() })
  .openapi({ required: ['password'] })
  .openapi('PasswordResetBody')

const PatchRetentionRuleSchema = z
  .object({
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Duration in seconds for how long data will be kept in the database. 0 means infinite.',
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
        description: 'Shard duration measured in seconds.',
      }),
    type: z.literal('expire').default('expire'),
  })
  .openapi({ description: 'Updates to a rule to expire or retain data.', required: ['type'] })
  .openapi('PatchRetentionRule')

const PatchRetentionRulesSchema = z
  .array(PatchRetentionRuleSchema)
  .openapi({ description: 'Updates to rules to expire or retain data. No rules means no updates.' })
  .openapi('PatchRetentionRules')

const PatchBucketRequestSchema = z
  .object({
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    retentionRules: PatchRetentionRulesSchema.exactOptional(),
  })
  .openapi({ description: 'Updates to an existing bucket resource.', required: [] })
  .openapi('PatchBucketRequest')

const PatchOrganizationRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'New description to set on the organization' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'New name to set on the organization' }),
  })
  .openapi({ required: [] })
  .openapi('PatchOrganizationRequest')

const PostBucketRequestSchema = z
  .object({
    description: z.string().exactOptional(),
    name: z.string(),
    orgID: z.string(),
    retentionRules: RetentionRulesSchema,
    rp: z.string().exactOptional(),
    schemaType: SchemaTypeSchema.default('implicit').exactOptional(),
  })
  .openapi({ required: ['orgID', 'name', 'retentionRules'] })
  .openapi('PostBucketRequest')

const PostCheckSchema = CheckDiscriminatorSchema.openapi('PostCheck')

const PostNotificationEndpointSchema = NotificationEndpointDiscriminatorSchema.openapi(
  'PostNotificationEndpoint',
)

const PostNotificationRuleSchema =
  NotificationRuleDiscriminatorSchema.openapi('PostNotificationRule')

const PostOrganizationRequestSchema = z
  .object({ description: z.string().exactOptional(), name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('PostOrganizationRequest')

const QuerySchema = z
  .object({
    dialect: DialectSchema.exactOptional(),
    extern: FileSchema.exactOptional(),
    now: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Specifies the time that should be reported as "now" in the query. Default is the server\'s now time.',
      }),
    params: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)\n',
      }),
    query: z.string().openapi({ description: 'Query script to execute.' }),
    type: z
      .literal('flux')
      .exactOptional()
      .openapi({ description: 'The type of query. Must be "flux".' }),
  })
  .openapi({ description: 'Query influx using the Flux language', required: ['query'] })
  .openapi('Query')

const ReadySchema = z
  .object({
    started: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-03-13T10:09:33.891196-04:00' }),
    status: z.literal('ready').exactOptional(),
    up: z.string().exactOptional().openapi({ example: '14m45.911966424s' }),
  })
  .openapi({ required: [] })
  .openapi('Ready')

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

const RoutesSchema = z
  .object({
    authorizations: z.url().exactOptional(),
    buckets: z.url().exactOptional(),
    dashboards: z.url().exactOptional(),
    external: z
      .object({ statusFeed: z.url().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    flags: z.url().exactOptional(),
    me: z.url().exactOptional(),
    orgs: z.url().exactOptional(),
    query: z
      .object({
        analyze: z.url().exactOptional(),
        ast: z.url().exactOptional(),
        self: z.url().exactOptional(),
        suggestions: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    setup: z.url().exactOptional(),
    signin: z.url().exactOptional(),
    signout: z.url().exactOptional(),
    sources: z.url().exactOptional(),
    system: z
      .object({
        debug: z.url().exactOptional(),
        health: z.url().exactOptional(),
        metrics: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    tasks: z.url().exactOptional(),
    telegrafs: z.url().exactOptional(),
    users: z.url().exactOptional(),
    variables: z.url().exactOptional(),
    write: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Routes')

const RunSchema = z
  .object({
    finishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time run finished executing, RFC3339Nano.', readOnly: true }),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    links: z
      .object({
        retry: z.url().exactOptional(),
        self: z.url().exactOptional(),
        task: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({
        example: {
          retry: '/api/v2/tasks/1/runs/1/retry',
          self: '/api/v2/tasks/1/runs/1',
          task: '/api/v2/tasks/1',
        },
        readOnly: true,
        required: [],
      }),
    log: z
      .array(LogEventSchema)
      .exactOptional()
      .openapi({ description: 'An array of logs associated with the run.', readOnly: true }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time run was manually requested, RFC3339Nano.', readOnly: true }),
    scheduledFor: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time used for run\'s "now" option, RFC3339.' }),
    startedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time run started executing, RFC3339Nano.', readOnly: true }),
    status: z
      .enum(['scheduled', 'started', 'failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    taskID: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Run')

const RunManuallySchema = z
  .object({
    scheduledFor: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Time used for run\'s "now" option, RFC3339.  Default is the server\'s now time.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RunManually')

const RunsSchema = z
  .object({ links: LinksSchema.exactOptional(), runs: z.array(RunSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Runs')

const ScraperTargetRequestSchema = z
  .object({
    allowInsecure: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Skip TLS verification on endpoint.' }),
    bucketID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the bucket to write to.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the scraper target.' }),
    orgID: z.string().exactOptional().openapi({ description: 'The organization ID.' }),
    type: z
      .literal('prometheus')
      .exactOptional()
      .openapi({ description: 'The type of the metrics to be parsed.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the metrics endpoint.',
        example: 'http://localhost:9090/metrics',
      }),
  })
  .openapi({ required: [] })
  .openapi('ScraperTargetRequest')

const ScraperTargetResponseSchema = ScraperTargetRequestSchema.and(
  z
    .object({
      bucket: z.string().exactOptional().openapi({ description: 'The bucket name.' }),
      id: z.string().exactOptional().openapi({ readOnly: true }),
      links: z
        .object({
          bucket: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          organization: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
          self: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          example: {
            bucket: '/api/v2/buckets/1',
            members: '/api/v2/scrapers/1/members',
            organization: '/api/v2/orgs/1',
            owners: '/api/v2/scrapers/1/owners',
            self: '/api/v2/scrapers/1',
          },
          readOnly: true,
          required: [],
        }),
      org: z.string().exactOptional().openapi({ description: 'The name of the organization.' }),
    })
    .openapi({ required: [] }),
).openapi('ScraperTargetResponse')

const ScraperTargetResponsesSchema = z
  .object({ configurations: z.array(ScraperTargetResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ScraperTargetResponses')

const SecretKeysSchema = z
  .object({ secrets: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('SecretKeys')

const SecretKeysResponseSchema = SecretKeysSchema.and(
  z
    .object({
      links: z
        .object({ org: z.string().exactOptional(), self: z.string().exactOptional() })
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
    })
    .openapi({ required: [] }),
).openapi('SecretKeysResponse')

const SecretsSchema = z
  .record(z.string(), z.string())
  .openapi({ example: { apikey: 'abc123xyz' } })
  .openapi('Secrets')

const SourceSchema = z
  .object({
    default: z.boolean().exactOptional(),
    defaultRP: z.string().exactOptional(),
    id: z.string().exactOptional(),
    insecureSkipVerify: z.boolean().exactOptional(),
    languages: z
      .array(z.enum(['flux', 'influxql']))
      .exactOptional()
      .openapi({ readOnly: true }),
    links: z
      .object({
        buckets: z.string().exactOptional(),
        health: z.string().exactOptional(),
        query: z.string().exactOptional(),
        self: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    metaUrl: z.url().exactOptional(),
    name: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
    password: z.string().exactOptional(),
    sharedSecret: z.string().exactOptional(),
    telegraf: z.string().exactOptional(),
    token: z.string().exactOptional(),
    type: z.enum(['v1', 'v2', 'self']).exactOptional(),
    url: z.url().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Source')

const SourcesSchema = z
  .object({
    links: z.object({ self: z.url().exactOptional() }).exactOptional().openapi({ required: [] }),
    sources: z.array(SourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sources')

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

const StackSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    events: z
      .array(
        z
          .object({
            description: z.string().exactOptional(),
            eventType: z.string().exactOptional(),
            name: z.string().exactOptional(),
            resources: z
              .array(
                z
                  .object({
                    apiVersion: z.string().exactOptional(),
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
                    kind: TemplateKindSchema.exactOptional(),
                    links: z
                      .object({ self: z.string().exactOptional() })
                      .exactOptional()
                      .openapi({ required: [] }),
                    resourceID: z.string().exactOptional(),
                    templateMetaName: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            sources: z.array(z.string()).exactOptional(),
            updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
            urls: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    id: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stack')

const TaskSchema = z
  .object({
    authorizationID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the authorization used when this task communicates with the query engine.',
      }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    cron: z
      .string()
      .exactOptional()
      .openapi({
        description: "A task repetition schedule in the form '* * * * * *'; parsed from Flux.",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the task.' }),
    every: z
      .string()
      .exactOptional()
      .openapi({ description: 'A simple task repetition schedule; parsed from Flux.' }),
    flux: z.string().openapi({ description: 'The Flux script to run for this task.' }),
    id: z.string().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    lastRunError: z.string().exactOptional().openapi({ readOnly: true }),
    lastRunStatus: z
      .enum(['failed', 'success', 'canceled'])
      .exactOptional()
      .openapi({ readOnly: true }),
    latestCompleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of latest scheduled, completed run, RFC3339.',
        readOnly: true,
      }),
    links: z
      .object({
        labels: LinkSchema.exactOptional(),
        logs: LinkSchema.exactOptional(),
        members: LinkSchema.exactOptional(),
        owners: LinkSchema.exactOptional(),
        runs: LinkSchema.exactOptional(),
        self: LinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        example: {
          labels: '/api/v2/tasks/1/labels',
          logs: '/api/v2/tasks/1/logs',
          members: '/api/v2/tasks/1/members',
          owners: '/api/v2/tasks/1/owners',
          runs: '/api/v2/tasks/1/runs',
          self: '/api/v2/tasks/1',
        },
        readOnly: true,
        required: [],
      }),
    name: z.string().openapi({ description: 'The name of the task.' }),
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration to delay after the schedule, before executing the task; parsed from flux, if set to zero it will remove this option and use 0 as the default.',
      }),
    org: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organization that owns this Task.' }),
    orgID: z.string().openapi({ description: 'The ID of the organization that owns this Task.' }),
    status: TaskStatusTypeSchema.exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of task, this can be used for filtering tasks on list actions.',
      }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'orgID', 'flux'] })
  .openapi('Task')

const TaskCreateRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the task.' }),
    flux: z.string().openapi({ description: 'The Flux script to run for this task.' }),
    org: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the organization that owns this Task.' }),
    orgID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the organization that owns this Task.' }),
    status: TaskStatusTypeSchema.exactOptional(),
  })
  .openapi({ required: ['flux'] })
  .openapi('TaskCreateRequest')

const TaskUpdateRequestSchema = z
  .object({
    cron: z
      .string()
      .exactOptional()
      .openapi({ description: "Override the 'cron' option in the flux script." }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of the task.' }),
    every: z
      .string()
      .exactOptional()
      .openapi({ description: "Override the 'every' option in the flux script." }),
    flux: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Flux script to run for this task.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Override the 'name' option in the flux script." }),
    offset: z
      .string()
      .exactOptional()
      .openapi({ description: "Override the 'offset' option in the flux script." }),
    status: TaskStatusTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskUpdateRequest')

const TasksSchema = z
  .object({
    links: LinksSchema.exactOptional().openapi({ readOnly: true }),
    tasks: z.array(TaskSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tasks')

const TelegrafRequestSchema = z
  .object({
    config: z.string().exactOptional(),
    description: z.string().exactOptional(),
    metadata: z
      .object({ buckets: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafRequest')

const TelegrafSchema = TelegrafRequestSchema.and(
  z
    .object({
      id: z.string().exactOptional().openapi({ readOnly: true }),
      labels: LabelsSchema.exactOptional().openapi({ readOnly: true }),
      links: z
        .object({
          labels: LinkSchema.exactOptional(),
          members: LinkSchema.exactOptional(),
          owners: LinkSchema.exactOptional(),
          self: LinkSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          example: {
            lables: '/api/v2/telegrafs/1/labels',
            members: '/api/v2/telegrafs/1/members',
            owners: '/api/v2/telegrafs/1/owners',
            self: '/api/v2/telegrafs/1',
          },
          readOnly: true,
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('Telegraf')

const TelegrafPluginSchema = z
  .object({
    config: z.string().exactOptional(),
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafPlugin')

const TelegrafPluginsSchema = z
  .object({
    os: z.string().exactOptional(),
    plugins: z.array(TelegrafPluginSchema).exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelegrafPlugins')

const TelegrafsSchema = z
  .object({ configurations: z.array(TelegrafSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Telegrafs')

const TemplateSchema = z
  .array(
    z
      .object({
        apiVersion: z.string().exactOptional(),
        kind: TemplateKindSchema.exactOptional(),
        meta: z
          .object({ name: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        spec: z.object({}).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Template')

const TemplateApplySchema = z
  .object({
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
      .exactOptional(),
    dryRun: z.boolean().exactOptional(),
    envRefs: z
      .record(z.string(), z.xor([z.string(), z.int(), z.number(), z.boolean()]))
      .exactOptional(),
    orgID: z.string().exactOptional(),
    remotes: z
      .array(
        z
          .object({ contentType: z.string().exactOptional(), url: z.string() })
          .openapi({ required: ['url'] }),
      )
      .exactOptional(),
    secrets: z.record(z.string(), z.string()).exactOptional(),
    stackID: z.string().exactOptional(),
    template: z
      .object({
        contentType: z.string().exactOptional(),
        contents: TemplateSchema.exactOptional(),
        sources: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    templates: z
      .array(
        z
          .object({
            contentType: z.string().exactOptional(),
            contents: TemplateSchema.exactOptional(),
            sources: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateApply')

const TemplateChartSchema = z
  .object({
    height: z.int().exactOptional(),
    properties: ViewPropertiesSchema.exactOptional(),
    width: z.int().exactOptional(),
    xPos: z.int().exactOptional(),
    yPos: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateChart')

const TemplateEnvReferencesSchema = z
  .array(
    z
      .object({
        defaultValue: z
          .xor([z.string(), z.int(), z.number(), z.boolean()])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Default value that will be provided for the reference when no value is provided',
          }),
        envRefKey: z
          .string()
          .openapi({
            description:
              'Key identified as environment reference and is the key identified in the template',
          }),
        resourceField: z
          .string()
          .openapi({ description: 'Field the environment reference corresponds too' }),
        value: z
          .xor([z.string(), z.int(), z.number(), z.boolean()])
          .nullable()
          .exactOptional()
          .openapi({ description: 'Value provided to fulfill reference' }),
      })
      .openapi({ required: ['resourceField', 'envRefKey'] }),
  )
  .openapi('TemplateEnvReferences')

const TemplateExportByIDSchema = z
  .object({
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
      .exactOptional()
      .openapi({ required: ['id', 'kind'] }),
    stackID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateExportByID')

const TemplateExportByNameSchema = z
  .object({
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
      .object({ kind: TemplateKindSchema, name: z.string() })
      .exactOptional()
      .openapi({ required: ['name', 'kind'] }),
    stackID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateExportByName')

const VariablePropertiesSchema: z.ZodType<VariablePropertiesType> = z
  .lazy(() =>
    z.xor([
      QueryVariablePropertiesSchema,
      ConstantVariablePropertiesSchema,
      MapVariablePropertiesSchema,
    ]),
  )
  .openapi('VariableProperties')

const TemplateSummaryLabelSchema = z
  .object({
    envReferences: TemplateEnvReferencesSchema.exactOptional(),
    id: z.string().exactOptional(),
    kind: TemplateKindSchema.exactOptional(),
    name: z.string().exactOptional(),
    orgID: z.string().exactOptional(),
    properties: z
      .object({ color: z.string().exactOptional(), description: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    templateMetaName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateSummaryLabel')

const TemplateSummarySchema = z
  .object({
    diff: z
      .object({
        buckets: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: z
                  .object({
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    retentionRules: RetentionRulesSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    retentionRules: RetentionRulesSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        checks: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: CheckDiscriminatorSchema.exactOptional(),
                old: CheckDiscriminatorSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        dashboards: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: z
                  .object({
                    charts: z.array(TemplateChartSchema).exactOptional(),
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    charts: z.array(TemplateChartSchema).exactOptional(),
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labelMappings: z
          .array(
            z
              .object({
                labelID: z.string().exactOptional(),
                labelName: z.string().exactOptional(),
                labelTemplateMetaName: z.string().exactOptional(),
                resourceID: z.string().exactOptional(),
                resourceName: z.string().exactOptional(),
                resourceTemplateMetaName: z.string().exactOptional(),
                resourceType: z.string().exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labels: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: z
                  .object({
                    color: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    color: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        notificationEndpoints: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: NotificationEndpointDiscriminatorSchema.exactOptional(),
                old: NotificationEndpointDiscriminatorSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        notificationRules: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: z
                  .object({
                    description: z.string().exactOptional(),
                    endpointID: z.string().exactOptional(),
                    endpointName: z.string().exactOptional(),
                    endpointType: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    messageTemplate: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
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
                            operator: z.string().exactOptional(),
                            value: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    description: z.string().exactOptional(),
                    endpointID: z.string().exactOptional(),
                    endpointName: z.string().exactOptional(),
                    endpointType: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    messageTemplate: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
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
                            operator: z.string().exactOptional(),
                            value: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        tasks: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: z
                  .object({
                    cron: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    query: z.string().exactOptional(),
                    status: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    cron: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    every: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    query: z.string().exactOptional(),
                    status: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        telegrafConfigs: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: TelegrafRequestSchema.exactOptional(),
                old: TelegrafRequestSchema.exactOptional(),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        variables: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                new: z
                  .object({
                    args: VariablePropertiesSchema.exactOptional(),
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                old: z
                  .object({
                    args: VariablePropertiesSchema.exactOptional(),
                    description: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                stateStatus: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
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
            fields: z.array(z.string()).exactOptional(),
            indexes: z.array(z.int()).exactOptional(),
            kind: TemplateKindSchema.exactOptional(),
            reason: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    sources: z.array(z.string()).exactOptional(),
    stackID: z.string().exactOptional(),
    summary: z
      .object({
        buckets: z
          .array(
            z
              .object({
                description: z.string().exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                name: z.string().exactOptional(),
                orgID: z.string().exactOptional(),
                retentionPeriod: z.int().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        checks: z
          .array(
            CheckDiscriminatorSchema.and(
              z
                .object({
                  envReferences: TemplateEnvReferencesSchema.exactOptional(),
                  kind: TemplateKindSchema.exactOptional(),
                  labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                  templateMetaName: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional(),
        dashboards: z
          .array(
            z
              .object({
                charts: z.array(TemplateChartSchema).exactOptional(),
                description: z.string().exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                name: z.string().exactOptional(),
                orgID: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labelMappings: z
          .array(
            z
              .object({
                labelID: z.string().exactOptional(),
                labelName: z.string().exactOptional(),
                labelTemplateMetaName: z.string().exactOptional(),
                resourceID: z.string().exactOptional(),
                resourceName: z.string().exactOptional(),
                resourceTemplateMetaName: z.string().exactOptional(),
                resourceType: z.string().exactOptional(),
                status: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        labels: z.array(TemplateSummaryLabelSchema).exactOptional(),
        missingEnvRefs: z.array(z.string()).exactOptional(),
        missingSecrets: z.array(z.string()).exactOptional(),
        notificationEndpoints: z
          .array(
            NotificationEndpointDiscriminatorSchema.and(
              z
                .object({
                  envReferences: TemplateEnvReferencesSchema.exactOptional(),
                  kind: TemplateKindSchema.exactOptional(),
                  labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                  templateMetaName: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional(),
        notificationRules: z
          .array(
            z
              .object({
                description: z.string().exactOptional(),
                endpointID: z.string().exactOptional(),
                endpointTemplateMetaName: z.string().exactOptional(),
                endpointType: z.string().exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
                every: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                messageTemplate: z.string().exactOptional(),
                name: z.string().exactOptional(),
                offset: z.string().exactOptional(),
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
                        operator: z.string().exactOptional(),
                        value: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        tasks: z
          .array(
            z
              .object({
                cron: z.string().exactOptional(),
                description: z.string().exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
                every: z.string().exactOptional(),
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                name: z.string().exactOptional(),
                offset: z.string().exactOptional(),
                query: z.string().exactOptional(),
                status: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        telegrafConfigs: z
          .array(
            TelegrafRequestSchema.and(
              z
                .object({
                  envReferences: TemplateEnvReferencesSchema.exactOptional(),
                  kind: TemplateKindSchema.exactOptional(),
                  labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                  templateMetaName: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          )
          .exactOptional(),
        variables: z
          .array(
            z
              .object({
                arguments: VariablePropertiesSchema.exactOptional(),
                description: z.string().exactOptional(),
                envReferences: TemplateEnvReferencesSchema.exactOptional(),
                id: z.string().exactOptional(),
                kind: TemplateKindSchema.exactOptional(),
                labelAssociations: z.array(TemplateSummaryLabelSchema).exactOptional(),
                name: z.string().exactOptional(),
                orgID: z.string().exactOptional(),
                templateMetaName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TemplateSummary')

const UserSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    oauthID: z.string().exactOptional(),
    status: z
      .enum(['active', 'inactive'])
      .default('active')
      .exactOptional()
      .openapi({ description: 'If inactive the user is inactive.' }),
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

const VariableSchema = z
  .object({
    arguments: VariablePropertiesSchema,
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ readOnly: true }),
    labels: LabelsSchema.exactOptional(),
    links: z
      .object({
        labels: z.url().exactOptional(),
        org: z.url().exactOptional(),
        self: z.url().exactOptional(),
      })
      .exactOptional()
      .openapi({ readOnly: true, required: [] }),
    name: z.string(),
    orgID: z.string(),
    selected: z.array(z.string()).exactOptional(),
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
          arguments: { type: 'constant', values: ['howdy', 'hello', 'hi', 'yo', 'oy'] },
          id: '1221432',
          name: ':ok:',
          selected: ['hello'],
        },
        {
          arguments: {
            type: 'map',
            values: {
              a: 'fdjaklfdjkldsfjlkjdsa',
              b: 'dfaksjfkljekfajekdljfas',
              c: 'fdjksajfdkfeawfeea',
            },
          },
          id: '1221432',
          name: ':ok:',
          selected: ['c'],
        },
        {
          arguments: {
            language: 'flux',
            query: 'from(bucket: "foo") |&gt; showMeasurements()',
            type: 'query',
          },
          id: '1221432',
          name: ':ok:',
          selected: ['host'],
        },
      ],
    },
    required: [],
  })
  .openapi('Variables')

const ViewSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ readOnly: true, required: [] }),
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

const WritePrecisionSchema = z.enum(['ms', 's', 'us', 'ns']).openapi('WritePrecision')

const ServerErrorResponse = {
  description: 'Non 2XX error response from server.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const AfterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.\n',
      in: 'query',
      name: 'after',
      required: false,
      schema: { type: 'string' },
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
      schema: { default: false, type: 'boolean' },
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
      schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
      schema: { minimum: 0, type: 'integer' },
    },
  })

const SortByParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'sortBy', required: false, schema: { type: 'string' } } })

const TraceSpanParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OpenTracing span context',
      example: { baggage: { key: 'value' }, span_id: '1', trace_id: '1' },
      in: 'header',
      name: 'Zap-Trace-Span',
      required: false,
      schema: { type: 'string' },
    },
  })

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Routes'],
  summary: 'List all top level routes',
  operationId: 'GetRoutes',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    default: {
      description: 'All routes',
      content: { 'application/json': { schema: RoutesSchema } },
    },
  },
})

export const getAuthorizationsRoute = createRoute({
  method: 'get',
  path: '/authorizations',
  tags: ['Authorizations'],
  summary: 'List all authorizations',
  operationId: 'GetAuthorizations',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      userID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only show authorizations that belong to a user ID.',
            in: 'query',
            name: 'userID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only show authorizations that belong to a user name.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only show authorizations that belong to an organization ID.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only show authorizations that belong to a organization name.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of authorizations',
      content: { 'application/json': { schema: AuthorizationsSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const postAuthorizationsRoute = createRoute({
  method: 'post',
  path: '/authorizations',
  tags: ['Authorizations'],
  summary: 'Create an authorization',
  operationId: 'PostAuthorizations',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Authorization to create',
      content: { 'application/json': { schema: AuthorizationPostRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Authorization created',
      content: { 'application/json': { schema: AuthorizationSchema } },
    },
    400: ServerErrorResponse,
    default: ServerErrorResponse,
  },
})

export const getAuthorizationsAuthIDRoute = createRoute({
  method: 'get',
  path: '/authorizations/{authID}',
  tags: ['Authorizations'],
  summary: 'Retrieve an authorization',
  operationId: 'GetAuthorizationsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      authID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization to get.',
            in: 'path',
            name: 'authID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Authorization details',
      content: { 'application/json': { schema: AuthorizationSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const deleteAuthorizationsAuthIDRoute = createRoute({
  method: 'delete',
  path: '/authorizations/{authID}',
  tags: ['Authorizations'],
  summary: 'Delete an authorization',
  operationId: 'DeleteAuthorizationsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      authID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization to delete.',
            in: 'path',
            name: 'authID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Authorization deleted' }, default: ServerErrorResponse },
})

export const patchAuthorizationsAuthIDRoute = createRoute({
  method: 'patch',
  path: '/authorizations/{authID}',
  tags: ['Authorizations'],
  summary: 'Update an authorization to be active or inactive',
  operationId: 'PatchAuthorizationsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      authID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the authorization to update.',
            in: 'path',
            name: 'authID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Authorization to update',
      content: { 'application/json': { schema: AuthorizationUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The active or inactie authorization',
      content: { 'application/json': { schema: AuthorizationSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const getBucketsRoute = createRoute({
  method: 'get',
  path: '/buckets',
  tags: ['Buckets'],
  summary: 'List all buckets',
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
            description: 'The name of the organization.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only returns buckets with a specific name.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only returns buckets with a specific ID.',
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of buckets',
      content: { 'application/json': { schema: BucketsSchema } },
    },
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
  operationId: 'PostBuckets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Bucket to create',
      content: { 'application/json': { schema: PostBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Bucket created',
      content: { 'application/json': { schema: BucketSchema } },
    },
    422: {
      description: 'Request body failed validation',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
  operationId: 'GetBucketsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bucket details',
      content: { 'application/json': { schema: BucketSchema } },
    },
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
  operationId: 'DeleteBucketsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the bucket to delete.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
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

export const patchBucketsBucketIDRoute = createRoute({
  method: 'patch',
  path: '/buckets/{bucketID}',
  tags: ['Buckets'],
  summary: 'Update a bucket',
  operationId: 'PatchBucketsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Bucket update to apply',
      content: { 'application/json': { schema: PatchBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated bucket',
      content: { 'application/json': { schema: BucketSchema } },
    },
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
  operationId: 'GetBucketsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a bucket',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
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
  operationId: 'PostBucketsIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
  operationId: 'GetBucketsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of bucket members',
      content: { 'application/json': { schema: ResourceMembersSchema } },
    },
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
  operationId: 'PostBucketsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Member added to bucket',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
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
  operationId: 'DeleteBucketsIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the member to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
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

export const getBucketsBucketIDOwnersRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucketID}/owners',
  tags: ['Buckets'],
  summary: 'List all owners of a bucket',
  operationId: 'GetBucketsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of bucket owners',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
    },
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
  operationId: 'PostBucketsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Bucket owner added',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
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
  operationId: 'DeleteBucketsIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the owner to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucketID: z
        .string()
        .openapi({
          param: {
            description: 'The bucket ID.',
            in: 'path',
            name: 'bucketID',
            required: true,
            schema: { type: 'string' },
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
            description: 'Only show checks that belong to a specific organization ID.',
            in: 'query',
            name: 'orgID',
            required: true,
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The check ID.',
            in: 'path',
            name: 'checkID',
            required: true,
            schema: { type: 'string' },
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

export const getDashboardsRoute = createRoute({
  method: 'get',
  path: '/dashboards',
  tags: ['Dashboards'],
  summary: 'List all dashboards',
  operationId: 'GetDashboards',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      descending: DescendingParamsSchema,
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A user identifier. Returns only dashboards where this user has the `owner` role.',
            in: 'query',
            name: 'owner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortBy: z
        .enum(['ID', 'CreatedAt', 'UpdatedAt'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The column to sort by.',
            in: 'query',
            name: 'sortBy',
            schema: { enum: ['ID', 'CreatedAt', 'UpdatedAt'], type: 'string' },
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
            description:
              'A list of dashboard identifiers. Returns only the listed dashboards. If both `id` and `owner` are specified, only `id` is used.',
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The identifier of the organization.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the organization.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All dashboards',
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
      description: 'Added dashboard',
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

export const getDashboardsDashboardIDRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardID}',
  tags: ['Dashboards'],
  summary: 'Retrieve a Dashboard',
  operationId: 'GetDashboardsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      dashboardID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include: z
        .literal('properties')
        .exactOptional()
        .openapi({
          param: {
            description: 'Includes the cell view properties in the response if set to `properties`',
            in: 'query',
            name: 'include',
            required: false,
            schema: { enum: ['properties'], type: 'string' },
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
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Patching of a dashboard',
      content: {
        'application/json': {
          schema: z
            .object({
              cells: CellWithViewPropertiesSchema.exactOptional().openapi({
                description:
                  'optional, when provided will replace all existing cells with the cells provided',
              }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, when provided will replace the description' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, when provided will replace the name' }),
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
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the dashboard to delete.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cell to delete.',
            in: 'path',
            name: 'cellID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cell to update.',
            in: 'path',
            name: 'cellID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            description: 'The cell ID.',
            in: 'path',
            name: 'cellID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the dashboard to update.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cellID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cell to update.',
            in: 'path',
            name: 'cellID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the member to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dashboardID: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the owner to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dashboardID: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard ID.',
            in: 'path',
            name: 'dashboardID',
            required: true,
            schema: { type: 'string' },
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

export const getDbrpsRoute = createRoute({
  method: 'get',
  path: '/dbrps',
  tags: ['DBRPs'],
  summary: 'List all database retention policy mappings',
  operationId: 'GetDBRPs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the organization ID to filter on',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the mapping ID to filter on',
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bucketID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the bucket ID to filter on',
            in: 'query',
            name: 'bucketID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      default: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies filtering on default',
            in: 'query',
            name: 'default',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      db: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the database to filter on',
            in: 'query',
            name: 'db',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the retention policy to filter on',
            in: 'query',
            name: 'rp',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all database retention policy mappings',
      content: { 'application/json': { schema: DBRPsSchema } },
    },
    400: {
      description: 'if any of the parameter passed is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
  operationId: 'PostDBRP',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'The database retention policy mapping to add',
      content: { 'application/json': { schema: DBRPSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Database retention policy mapping created',
      content: { 'application/json': { schema: DBRPSchema } },
    },
    400: {
      description: 'if any of the IDs in the mapping is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
  operationId: 'GetDBRPsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the organization ID of the mapping',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      dbrpID: z
        .string()
        .openapi({
          param: {
            description: 'The database retention policy mapping ID',
            in: 'path',
            name: 'dbrpID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The database retention policy requested',
      content: { 'application/json': { schema: DBRPSchema } },
    },
    400: {
      description: 'if any of the IDs passed is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
  operationId: 'DeleteDBRPID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the organization ID of the mapping',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      dbrpID: z
        .string()
        .openapi({
          param: {
            description: 'The database retention policy mapping',
            in: 'path',
            name: 'dbrpID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    400: {
      description: 'if any of the IDs passed is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
        .openapi({
          param: {
            description: 'Specifies the organization ID of the mapping',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      dbrpID: z
        .string()
        .openapi({
          param: {
            description: 'The database retention policy mapping.',
            in: 'path',
            name: 'dbrpID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Database retention policy update to apply',
      content: { 'application/json': { schema: DBRPUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'An updated mapping',
      content: { 'application/json': { schema: DBRPSchema } },
    },
    400: {
      description: 'if any of the IDs passed is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'The mapping was not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDeleteRoute = createRoute({
  method: 'post',
  path: '/delete',
  tags: ['Delete'],
  summary: 'Delete time series data from InfluxDB',
  operationId: 'PostDelete',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the organization to delete data from.',
            in: 'query',
            name: 'org',
            schema: {
              description: 'Only points from this organization are deleted.',
              type: 'string',
            },
            required: false,
          },
          description: 'Only points from this organization are deleted.',
        }),
      bucket: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the bucket to delete data from.',
            in: 'query',
            name: 'bucket',
            schema: { description: 'Only points from this bucket are deleted.', type: 'string' },
            required: false,
          },
          description: 'Only points from this bucket are deleted.',
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the organization ID of the resource.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bucketID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the bucket ID to delete data from.',
            in: 'query',
            name: 'bucketID',
            schema: { description: 'Only points from this bucket ID are deleted.', type: 'string' },
            required: false,
          },
          description: 'Only points from this bucket ID are deleted.',
        }),
    }),
    body: {
      description: 'Predicate delete request',
      content: { 'application/json': { schema: DeletePredicateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'delete has been accepted' },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'no token was sent or does not have sufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'the bucket or organization is not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDocumentsTemplatesRoute = createRoute({
  method: 'get',
  path: '/documents/templates',
  tags: ['Templates'],
  summary: 'List all templates',
  operationId: 'GetDocumentsTemplates',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the name of the organization of the template.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the organization ID of the template.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of template documents',
      content: { 'application/json': { schema: DocumentsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDocumentsTemplatesRoute = createRoute({
  method: 'post',
  path: '/documents/templates',
  tags: ['Templates'],
  summary: 'Create a template',
  operationId: 'PostDocumentsTemplates',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Template that will be created',
      content: { 'application/json': { schema: DocumentCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Template created',
      content: { 'application/json': { schema: DocumentSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getDocumentsTemplatesTemplateIDRoute = createRoute({
  method: 'get',
  path: '/documents/templates/{templateID}',
  tags: ['Templates'],
  summary: 'Retrieve a template',
  operationId: 'GetDocumentsTemplatesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      templateID: z
        .string()
        .openapi({
          param: {
            description: 'The template ID.',
            in: 'path',
            name: 'templateID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The template requested',
      content: { 'application/json': { schema: DocumentSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putDocumentsTemplatesTemplateIDRoute = createRoute({
  method: 'put',
  path: '/documents/templates/{templateID}',
  tags: ['Templates'],
  summary: 'Update a template',
  operationId: 'PutDocumentsTemplatesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      templateID: z
        .string()
        .openapi({
          param: {
            description: 'The template ID.',
            in: 'path',
            name: 'templateID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Template that will be updated',
      content: { 'application/json': { schema: DocumentUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The newly updated template',
      content: { 'application/json': { schema: DocumentSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDocumentsTemplatesTemplateIDRoute = createRoute({
  method: 'delete',
  path: '/documents/templates/{templateID}',
  tags: ['Templates'],
  summary: 'Delete a template',
  operationId: 'DeleteDocumentsTemplatesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      templateID: z
        .string()
        .openapi({
          param: {
            description: 'The template ID.',
            in: 'path',
            name: 'templateID',
            required: true,
            schema: { type: 'string' },
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

export const getDocumentsTemplatesTemplateIDLabelsRoute = createRoute({
  method: 'get',
  path: '/documents/templates/{templateID}/labels',
  tags: ['Templates'],
  summary: 'List all labels for a template',
  operationId: 'GetDocumentsTemplatesIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      templateID: z
        .string()
        .openapi({
          param: {
            description: 'The template ID.',
            in: 'path',
            name: 'templateID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a template',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDocumentsTemplatesTemplateIDLabelsRoute = createRoute({
  method: 'post',
  path: '/documents/templates/{templateID}/labels',
  tags: ['Templates'],
  summary: 'Add a label to a template',
  operationId: 'PostDocumentsTemplatesIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      templateID: z
        .string()
        .openapi({
          param: {
            description: 'The template ID.',
            in: 'path',
            name: 'templateID',
            required: true,
            schema: { type: 'string' },
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
      description: 'The label added to the template',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteDocumentsTemplatesTemplateIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/documents/templates/{templateID}/labels/{labelID}',
  tags: ['Templates'],
  summary: 'Delete a label from a template',
  operationId: 'DeleteDocumentsTemplatesIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      templateID: z
        .string()
        .openapi({
          param: {
            description: 'The template ID.',
            in: 'path',
            name: 'templateID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The label ID.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Template not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getFlagsRoute = createRoute({
  method: 'get',
  path: '/flags',
  tags: ['Users'],
  summary: 'Return the feature flags for the currently authenticated user',
  operationId: 'GetFlags',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'Feature flags for the currently authenticated user',
      content: { 'application/json': { schema: FlagsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  summary: 'Get the health of an instance',
  operationId: 'GetHealth',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'The instance is healthy',
      content: { 'application/json': { schema: HealthCheckSchema } },
    },
    503: {
      description: 'The instance is unhealthy',
      content: { 'application/json': { schema: HealthCheckSchema } },
    },
    default: ServerErrorResponse,
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
            description: 'The organization ID.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of labels',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
      description: 'Label to create',
      content: { 'application/json': { schema: LabelCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Added label',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
            description: 'The ID of the label to update.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A label',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Label not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
            description: 'The ID of the label to update.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Label update',
      content: { 'application/json': { schema: LabelUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated label',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    404: {
      description: 'Label not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
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
      description: 'The currently authenticated user.',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putMePasswordRoute = createRoute({
  method: 'put',
  path: '/me/password',
  tags: ['Users'],
  summary: 'Update a password',
  operationId: 'PutMePassword',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'New password',
      content: { 'application/json': { schema: PasswordResetBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Password successfully updated' },
    default: {
      description: 'Unsuccessful authentication',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
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
            description:
              'Only show notification endpoints that belong to specific organization ID.',
            in: 'query',
            name: 'orgID',
            required: true,
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification endpoint ID.',
            in: 'path',
            name: 'endpointID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
            description: 'Only show notification rules that belong to a specific organization ID.',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      checkID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only show notifications that belong to the specific check ID.',
            in: 'query',
            name: 'checkID',
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
            description:
              'Only return notification rules that "would match" statuses which contain the tag key value pairs provided.',
            in: 'query',
            name: 'tag',
            schema: {
              example: 'env:prod',
              pattern: '^[a-zA-Z0-9_]+:[a-zA-Z0-9_]+$',
              type: 'string',
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The notification rule ID.',
            in: 'path',
            name: 'ruleID',
            required: true,
            schema: { type: 'string' },
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

export const getOrgsRoute = createRoute({
  method: 'get',
  path: '/orgs',
  tags: ['Organizations'],
  summary: 'List all organizations',
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
            description: 'Filter organizations to a specific organization name.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter organizations to a specific organization ID.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter organizations to a specific user ID.',
            in: 'query',
            name: 'userID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of organizations',
      content: { 'application/json': { schema: OrganizationsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOrgsRoute = createRoute({
  method: 'post',
  path: '/orgs',
  tags: ['Organizations'],
  summary: 'Create an organization',
  operationId: 'PostOrgs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Organization to create',
      content: { 'application/json': { schema: PostOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Organization created',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsOrgIDRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}',
  tags: ['Organizations'],
  summary: 'Retrieve an organization',
  operationId: 'GetOrgsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the organization to get.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
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
  operationId: 'DeleteOrgsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the organization to delete.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
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

export const patchOrgsOrgIDRoute = createRoute({
  method: 'patch',
  path: '/orgs/{orgID}',
  tags: ['Organizations'],
  summary: 'Update an organization',
  operationId: 'PatchOrgsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the organization to get.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Organization update to apply',
      content: { 'application/json': { schema: PatchOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Organization updated',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrgsOrgIDMembersRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/members',
  tags: ['Organizations'],
  summary: 'List all members of an organization',
  operationId: 'GetOrgsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of organization members',
      content: { 'application/json': { schema: ResourceMembersSchema } },
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

export const postOrgsOrgIDMembersRoute = createRoute({
  method: 'post',
  path: '/orgs/{orgID}/members',
  tags: ['Organizations'],
  summary: 'Add a member to an organization',
  operationId: 'PostOrgsIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Added to organization created',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteOrgsOrgIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/orgs/{orgID}/members/{userID}',
  tags: ['Organizations'],
  summary: 'Remove a member from an organization',
  operationId: 'DeleteOrgsIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the member to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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

export const getOrgsOrgIDOwnersRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/owners',
  tags: ['Organizations'],
  summary: 'List all owners of an organization',
  operationId: 'GetOrgsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of organization owners',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
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
  operationId: 'PostOrgsIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Organization owner added',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteOrgsOrgIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/orgs/{orgID}/owners/{userID}',
  tags: ['Organizations'],
  summary: 'Remove an owner from an organization',
  operationId: 'DeleteOrgsIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the owner to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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

export const getOrgsOrgIDSecretsRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgID}/secrets',
  tags: ['Secrets', 'Organizations'],
  summary: 'List all secret keys for an organization',
  operationId: 'GetOrgsIDSecrets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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
  tags: ['Secrets', 'Organizations'],
  summary: 'Update secrets in an organization',
  operationId: 'PatchOrgsIDSecrets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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

export const postOrgsOrgIDSecretsDeleteRoute = createRoute({
  method: 'post',
  path: '/orgs/{orgID}/secrets/delete',
  tags: ['Secrets', 'Organizations'],
  summary: 'Delete secrets from an organization',
  operationId: 'PostOrgsIDSecrets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'path',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
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
})

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  tags: ['Query'],
  summary: 'Query InfluxDB',
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
            description:
              'The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand.',
            in: 'header',
            name: 'Accept-Encoding',
            schema: {
              default: 'identity',
              description:
                'Specifies that the query response in the body should be encoded with gzip or not encoded with identity.',
              enum: ['gzip', 'identity'],
              type: 'string',
            },
            required: false,
          },
          description:
            'Specifies that the query response in the body should be encoded with gzip or not encoded with identity.',
        }),
      'Content-Type': z
        .enum(['application/json', 'application/vnd.flux'])
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            schema: { enum: ['application/json', 'application/vnd.flux'], type: 'string' },
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
            description:
              'Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Flux query or specification to execute',
      content: {
        'application/json': { schema: z.xor([QuerySchema, InfluxQLQuerySchema]) },
        'application/vnd.flux': { schema: z.string() },
      },
    },
  },
  responses: {
    200: {
      description: 'Query results',
      content: {
        'application/vnd.influx.arrow': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'text/csv': {
          schema: z
            .string()
            .openapi({
              example:
                'result,table,_start,_stop,_time,region,host,_value mean,0,2018-05-08T20:50:00Z,2018-05-08T20:51:00Z,2018-05-08T20:50:00Z,east,A,15.43 mean,0,2018-05-08T20:50:00Z,2018-05-08T20:51:00Z,2018-05-08T20:50:20Z,east,B,59.25 mean,0,2018-05-08T20:50:00Z,2018-05-08T20:51:00Z,2018-05-08T20:50:40Z,east,C,52.62\n',
            }),
        },
      },
      headers: z.object({
        'Content-Encoding': {
          description:
            'The Content-Encoding entity header is used to compress the media-type.  When present, its value indicates which encodings were applied to the entity-body',
          schema: z
            .enum(['gzip', 'identity'])
            .default('identity')
            .exactOptional()
            .openapi({
              description:
                'The Content-Encoding entity header is used to compress the media-type.  When present, its value indicates which encodings were applied to the entity-body',
              param: { required: false },
            }),
        },
        'Trace-Id': {
          description: "The Trace-Id header reports the request's trace ID, if one was generated.",
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "The Trace-Id header reports the request's trace ID, if one was generated.",
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description:
        'Token is temporarily over quota. The Retry-After header describes when to try the read again.',
      headers: z.object({
        'Retry-After': {
          description:
            'A non-negative decimal integer indicating the seconds to delay after the response is received.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description:
                'A non-negative decimal integer indicating the seconds to delay after the response is received.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Error processing query',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postQueryAnalyzeRoute = createRoute({
  method: 'post',
  path: '/query/analyze',
  tags: ['Query'],
  summary: 'Analyze an InfluxQL or Flux query',
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
            schema: { enum: ['application/json'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Flux or InfluxQL query to analyze',
      content: { 'application/json': { schema: QuerySchema } },
    },
  },
  responses: {
    200: {
      description: 'Query analyze results. Errors will be empty if the query is valid.',
      content: { 'application/json': { schema: AnalyzeQueryResponseSchema } },
    },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'X-Influx-Error': {
          description: 'Error string describing the problem',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Error string describing the problem',
              param: { required: false },
            }),
        },
        'X-Influx-Reference': {
          description: 'Reference code unique to the error type',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Reference code unique to the error type',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postQueryAstRoute = createRoute({
  method: 'post',
  path: '/query/ast',
  tags: ['Query'],
  summary: 'Generate an Abstract Syntax Tree (AST) from a query',
  description: 'Analyzes flux query and generates a query specification.',
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
            schema: { enum: ['application/json'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Analyzed Flux query to generate abstract syntax tree.',
      content: { 'application/json': { schema: LanguageRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Abstract syntax tree of the flux query.',
      content: { 'application/json': { schema: ASTResponseSchema } },
    },
    default: {
      description: 'Any response other than 200 is an internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getQuerySuggestionsRoute = createRoute({
  method: 'get',
  path: '/query/suggestions',
  tags: ['Query'],
  summary: 'Retrieve query suggestions',
  operationId: 'GetQuerySuggestions',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'Suggestions for next functions in call chain',
      content: { 'application/json': { schema: FluxSuggestionsSchema } },
    },
    default: {
      description: 'Any response other than 200 is an internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getQuerySuggestionsNameRoute = createRoute({
  method: 'get',
  path: '/query/suggestions/{name}',
  tags: ['Query'],
  summary: 'Retrieve query suggestions for a branching suggestion',
  operationId: 'GetQuerySuggestionsName',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the branching suggestion.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Suggestions for next functions in call chain',
      content: { 'application/json': { schema: FluxSuggestionSchema } },
    },
    default: {
      description: 'Any response other than 200 is an internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getReadyRoute = createRoute({
  method: 'get',
  path: '/ready',
  tags: ['Ready'],
  summary: 'Get the readiness of an instance at startup',
  operationId: 'GetReady',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'The instance is ready',
      content: { 'application/json': { schema: ReadySchema } },
    },
    default: ServerErrorResponse,
  },
})

export const getScrapersRoute = createRoute({
  method: 'get',
  path: '/scrapers',
  tags: ['Scraper Targets'],
  summary: 'List all scraper targets',
  operationId: 'GetScrapers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the name of the scraper target.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
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
            description:
              'List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used.',
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the organization ID of the scraper target.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the organization name of the scraper target.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All scraper targets',
      content: { 'application/json': { schema: ScraperTargetResponsesSchema } },
    },
  },
})

export const postScrapersRoute = createRoute({
  method: 'post',
  path: '/scrapers',
  tags: ['Scraper Targets'],
  summary: 'Create a scraper target',
  operationId: 'PostScrapers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Scraper target to create',
      content: { 'application/json': { schema: ScraperTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Scraper target created',
      content: { 'application/json': { schema: ScraperTargetResponseSchema } },
    },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getScrapersScraperTargetIDRoute = createRoute({
  method: 'get',
  path: '/scrapers/{scraperTargetID}',
  tags: ['Scraper Targets'],
  summary: 'Retrieve a scraper target',
  operationId: 'GetScrapersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the scraper target.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The scraper target',
      content: { 'application/json': { schema: ScraperTargetResponseSchema } },
    },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteScrapersScraperTargetIDRoute = createRoute({
  method: 'delete',
  path: '/scrapers/{scraperTargetID}',
  tags: ['Scraper Targets'],
  summary: 'Delete a scraper target',
  operationId: 'DeleteScrapersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the scraper target.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Scraper target deleted' },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchScrapersScraperTargetIDRoute = createRoute({
  method: 'patch',
  path: '/scrapers/{scraperTargetID}',
  tags: ['Scraper Targets'],
  summary: 'Update a scraper target',
  operationId: 'PatchScrapersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the scraper target.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Scraper target update to apply',
      content: { 'application/json': { schema: ScraperTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Scraper target updated',
      content: { 'application/json': { schema: ScraperTargetResponseSchema } },
    },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getScrapersScraperTargetIDLabelsRoute = createRoute({
  method: 'get',
  path: '/scrapers/{scraperTargetID}/labels',
  tags: ['Scraper Targets'],
  summary: 'List all labels for a scraper target',
  operationId: 'GetScrapersIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of labels for a scraper target.',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postScrapersScraperTargetIDLabelsRoute = createRoute({
  method: 'post',
  path: '/scrapers/{scraperTargetID}/labels',
  tags: ['Scraper Targets'],
  summary: 'Add a label to a scraper target',
  operationId: 'PostScrapersIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
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

export const deleteScrapersScraperTargetIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/scrapers/{scraperTargetID}/labels/{labelID}',
  tags: ['Scraper Targets'],
  summary: 'Delete a label from a scraper target',
  operationId: 'DeleteScrapersIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The label ID.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Scraper target not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getScrapersScraperTargetIDMembersRoute = createRoute({
  method: 'get',
  path: '/scrapers/{scraperTargetID}/members',
  tags: ['Scraper Targets'],
  summary: 'List all users with member privileges for a scraper target',
  operationId: 'GetScrapersIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of scraper target members',
      content: { 'application/json': { schema: ResourceMembersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postScrapersScraperTargetIDMembersRoute = createRoute({
  method: 'post',
  path: '/scrapers/{scraperTargetID}/members',
  tags: ['Scraper Targets'],
  summary: 'Add a member to a scraper target',
  operationId: 'PostScrapersIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Member added to scraper targets',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteScrapersScraperTargetIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/scrapers/{scraperTargetID}/members/{userID}',
  tags: ['Scraper Targets'],
  summary: 'Remove a member from a scraper target',
  operationId: 'DeleteScrapersIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of member to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
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

export const getScrapersScraperTargetIDOwnersRoute = createRoute({
  method: 'get',
  path: '/scrapers/{scraperTargetID}/owners',
  tags: ['Scraper Targets'],
  summary: 'List all owners of a scraper target',
  operationId: 'GetScrapersIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of scraper target owners',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postScrapersScraperTargetIDOwnersRoute = createRoute({
  method: 'post',
  path: '/scrapers/{scraperTargetID}/owners',
  tags: ['Scraper Targets'],
  summary: 'Add an owner to a scraper target',
  operationId: 'PostScrapersIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Scraper target owner added',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteScrapersScraperTargetIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/scrapers/{scraperTargetID}/owners/{userID}',
  tags: ['Scraper Targets'],
  summary: 'Remove an owner from a scraper target',
  operationId: 'DeleteScrapersIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of owner to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scraperTargetID: z
        .string()
        .openapi({
          param: {
            description: 'The scraper target ID.',
            in: 'path',
            name: 'scraperTargetID',
            required: true,
            schema: { type: 'string' },
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

export const getSetupRoute = createRoute({
  method: 'get',
  path: '/setup',
  tags: ['Setup'],
  summary: 'Check if database has default user, org, bucket',
  description: 'Returns `true` if no default user, organization, or bucket has been created.',
  operationId: 'GetSetup',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    200: {
      description: 'allowed true or false',
      content: { 'application/json': { schema: IsOnboardingSchema } },
    },
  },
})

export const postSetupRoute = createRoute({
  method: 'post',
  path: '/setup',
  tags: ['Setup'],
  summary: 'Set up initial user, org and bucket',
  description: 'Post an onboarding request to set up initial user, org and bucket.',
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
      description: 'Created default user, bucket, org',
      content: { 'application/json': { schema: OnboardingResponseSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const postSigninRoute = createRoute({
  method: 'post',
  path: '/signin',
  summary: 'Exchange basic auth credentials for session',
  operationId: 'PostSignin',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    204: { description: 'Successfully authenticated' },
    401: {
      description: 'Unauthorized access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'user account is disabled',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unsuccessful authentication',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const postSignoutRoute = createRoute({
  method: 'post',
  path: '/signout',
  summary: 'Expire the current session',
  operationId: 'PostSignout',
  request: { headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }) },
  responses: {
    204: { description: 'Session successfully expired' },
    401: {
      description: 'Unauthorized access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unsuccessful session expiry',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSourcesRoute = createRoute({
  method: 'get',
  path: '/sources',
  tags: ['Sources'],
  summary: 'List all sources',
  operationId: 'GetSources',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the organization.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of sources',
      content: { 'application/json': { schema: SourcesSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSourcesRoute = createRoute({
  method: 'post',
  path: '/sources',
  tags: ['Sources'],
  summary: 'Create a source',
  operationId: 'PostSources',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Source to create',
      content: { 'application/json': { schema: SourceSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created Source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSourcesSourceIDRoute = createRoute({
  method: 'get',
  path: '/sources/{sourceID}',
  tags: ['Sources'],
  summary: 'Retrieve a source',
  operationId: 'GetSourcesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      sourceID: z
        .string()
        .openapi({
          param: {
            description: 'The source ID.',
            in: 'path',
            name: 'sourceID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A source', content: { 'application/json': { schema: SourceSchema } } },
    404: {
      description: 'Source not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteSourcesSourceIDRoute = createRoute({
  method: 'delete',
  path: '/sources/{sourceID}',
  tags: ['Sources'],
  summary: 'Delete a source',
  operationId: 'DeleteSourcesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      sourceID: z
        .string()
        .openapi({
          param: {
            description: 'The source ID.',
            in: 'path',
            name: 'sourceID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'View not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchSourcesSourceIDRoute = createRoute({
  method: 'patch',
  path: '/sources/{sourceID}',
  tags: ['Sources'],
  summary: 'Update a Source',
  operationId: 'PatchSourcesID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      sourceID: z
        .string()
        .openapi({
          param: {
            description: 'The source ID.',
            in: 'path',
            name: 'sourceID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Source update',
      content: { 'application/json': { schema: SourceSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Created Source',
      content: { 'application/json': { schema: SourceSchema } },
    },
    404: {
      description: 'Source not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSourcesSourceIDBucketsRoute = createRoute({
  method: 'get',
  path: '/sources/{sourceID}/buckets',
  tags: ['Sources', 'Buckets'],
  summary: 'Get buckets in a source',
  operationId: 'GetSourcesIDBuckets',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      sourceID: z
        .string()
        .openapi({
          param: {
            description: 'The source ID.',
            in: 'path',
            name: 'sourceID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the organization.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A source', content: { 'application/json': { schema: BucketsSchema } } },
    404: {
      description: 'Source not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSourcesSourceIDHealthRoute = createRoute({
  method: 'get',
  path: '/sources/{sourceID}/health',
  tags: ['Sources'],
  summary: 'Get the health of a source',
  operationId: 'GetSourcesIDHealth',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      sourceID: z
        .string()
        .openapi({
          param: {
            description: 'The source ID.',
            in: 'path',
            name: 'sourceID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The source is healthy',
      content: { 'application/json': { schema: HealthCheckSchema } },
    },
    503: {
      description: 'The source is not healthy',
      content: { 'application/json': { schema: HealthCheckSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getStacksRoute = createRoute({
  method: 'get',
  path: '/stacks',
  tags: ['InfluxDB Templates'],
  summary: 'List all installed InfluxDB templates',
  operationId: 'ListStacks',
  request: {
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The organization id of the stacks',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A collection of names to filter the list by.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      stackID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A collection of stackIDs to filter the list by.',
            in: 'query',
            name: 'stackID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Influx stacks found',
      content: {
        'application/json': {
          schema: z
            .object({ stacks: z.array(StackSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStacksRoute = createRoute({
  method: 'post',
  path: '/stacks',
  tags: ['InfluxDB Templates'],
  summary: 'Create a new stack',
  operationId: 'CreateStack',
  request: {
    body: {
      description: 'Stack to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              description: z.string().exactOptional(),
              name: z.string().exactOptional(),
              orgID: z.string().exactOptional(),
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
      description: 'InfluxDB Stack created',
      content: { 'application/json': { schema: StackSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getStacksStackIdRoute = createRoute({
  method: 'get',
  path: '/stacks/{stack_id}',
  tags: ['InfluxDB Templates'],
  summary: 'Retrieve a stack',
  operationId: 'ReadStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            description: 'Theidentifier of the stack.',
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The InfluxDB stack',
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
  tags: ['InfluxDB Templates'],
  summary: 'Delete a stack and associated resources',
  operationId: 'DeleteStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            description: 'Theidentifier of the stack.',
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      orgID: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the organization.',
            in: 'query',
            name: 'orgID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The stack and its associated resources are deleted' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchStacksStackIdRoute = createRoute({
  method: 'patch',
  path: '/stacks/{stack_id}',
  tags: ['InfluxDB Templates'],
  summary: 'Update an InfluxDB Stack',
  operationId: 'UpdateStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            description: 'Theidentifier of the stack.',
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Influx stack to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              additionalResources: z
                .array(
                  z
                    .object({
                      kind: z.string(),
                      resourceID: z.string(),
                      templateMetaName: z.string().exactOptional(),
                    })
                    .openapi({ required: ['kind', 'resourceID'] }),
                )
                .exactOptional(),
              description: z.string().nullable().exactOptional(),
              name: z.string().nullable().exactOptional(),
              templateURLs: z.array(z.string()).nullable().exactOptional(),
            })
            .openapi({ title: 'PatchStackRequest', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Influx stack updated',
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
  tags: ['InfluxDB Templates'],
  summary: 'Uninstall an InfluxDB Stack',
  operationId: 'UninstallStack',
  request: {
    params: z.object({
      stack_id: z
        .string()
        .openapi({
          param: {
            description: 'The stack id',
            in: 'path',
            name: 'stack_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Influx stack uninstalled',
      content: { 'application/json': { schema: StackSchema } },
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
  tags: ['Tasks'],
  summary: 'List all tasks',
  operationId: 'GetTasks',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns task with a specific name.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return tasks after a specified ID.',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tasks to a specific user ID.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tasks to a specific organization name.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tasks to a specific organization ID.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .enum(['active', 'inactive'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter tasks by a status--"inactive" or "active".',
            in: 'query',
            name: 'status',
            schema: { enum: ['active', 'inactive'], type: 'string' },
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
            description: 'The number of tasks to return',
            in: 'query',
            name: 'limit',
            schema: { default: 100, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of tasks',
      content: { 'application/json': { schema: TasksSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTasksRoute = createRoute({
  method: 'post',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Create a new task',
  operationId: 'PostTasks',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'Task to create',
      content: { 'application/json': { schema: TaskCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Task created', content: { 'application/json': { schema: TaskSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}',
  tags: ['Tasks'],
  summary: 'Retrieve a task',
  operationId: 'GetTasksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Task details', content: { 'application/json': { schema: TaskSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTasksTaskIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}',
  tags: ['Tasks'],
  summary: 'Delete a task',
  description: 'Deletes a task and all associated records',
  operationId: 'DeleteTasksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the task to delete.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Task deleted' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchTasksTaskIDRoute = createRoute({
  method: 'patch',
  path: '/tasks/{taskID}',
  tags: ['Tasks'],
  summary: 'Update a task',
  description: 'Update a task. This will cancel all queued runs.',
  operationId: 'PatchTasksID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Task update to apply',
      content: { 'application/json': { schema: TaskUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Task updated', content: { 'application/json': { schema: TaskSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDLabelsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/labels',
  tags: ['Tasks'],
  summary: 'List all labels for a task',
  operationId: 'GetTasksIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of all labels for a task',
      content: { 'application/json': { schema: LabelsResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTasksTaskIDLabelsRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/labels',
  tags: ['Tasks'],
  summary: 'Add a label to a task',
  operationId: 'PostTasksIDLabels',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
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
      description: 'A list of all labels for a task',
      content: { 'application/json': { schema: LabelResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTasksTaskIDLabelsLabelIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/labels/{labelID}',
  tags: ['Tasks'],
  summary: 'Delete a label from a task',
  operationId: 'DeleteTasksIDLabelsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The label ID.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Delete has been accepted' },
    404: {
      description: 'Task not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDLogsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/logs',
  tags: ['Tasks'],
  summary: 'Retrieve all logs for a task',
  operationId: 'GetTasksIDLogs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All logs for a task',
      content: { 'application/json': { schema: LogsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDMembersRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/members',
  tags: ['Tasks'],
  summary: 'List all task members',
  operationId: 'GetTasksIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of users who have member privileges for a task',
      content: { 'application/json': { schema: ResourceMembersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTasksTaskIDMembersRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/members',
  tags: ['Tasks'],
  summary: 'Add a member to a task',
  operationId: 'PostTasksIDMembers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Added to task members',
      content: { 'application/json': { schema: ResourceMemberSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTasksTaskIDMembersUserIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/members/{userID}',
  tags: ['Tasks'],
  summary: 'Remove a member from a task',
  operationId: 'DeleteTasksIDMembersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the member to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
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

export const getTasksTaskIDOwnersRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/owners',
  tags: ['Tasks'],
  summary: 'List all owners of a task',
  operationId: 'GetTasksIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of users who have owner privileges for a task',
      content: { 'application/json': { schema: ResourceOwnersSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTasksTaskIDOwnersRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/owners',
  tags: ['Tasks'],
  summary: 'Add an owner to a task',
  operationId: 'PostTasksIDOwners',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
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
      description: 'Added to task owners',
      content: { 'application/json': { schema: ResourceOwnerSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTasksTaskIDOwnersUserIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/owners/{userID}',
  tags: ['Tasks'],
  summary: 'Remove an owner from a task',
  operationId: 'DeleteTasksIDOwnersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the owner to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
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

export const getTasksTaskIDRunsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/runs',
  tags: ['Tasks'],
  summary: 'List runs for a task',
  operationId: 'GetTasksIDRuns',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the task to get runs for.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns runs after a specific ID.',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
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
            description: 'The number of runs to return',
            in: 'query',
            name: 'limit',
            schema: { default: 100, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      afterTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter runs to those scheduled after this time, RFC3339',
            in: 'query',
            name: 'afterTime',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      beforeTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter runs to those scheduled before this time, RFC3339',
            in: 'query',
            name: 'beforeTime',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of task runs',
      content: { 'application/json': { schema: RunsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTasksTaskIDRunsRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/runs',
  tags: ['Tasks'],
  summary: 'Manually start a task run, overriding the current schedule',
  operationId: 'PostTasksIDRuns',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'taskID', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: RunManuallySchema } } },
  },
  responses: {
    201: {
      description: 'Run scheduled to start',
      content: { 'application/json': { schema: RunSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTasksTaskIDRunsRunIDRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/runs/{runID}',
  tags: ['Tasks'],
  summary: 'Retrieve a single run for a task',
  operationId: 'GetTasksIDRunsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            description: 'The run ID.',
            in: 'path',
            name: 'runID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The run record', content: { 'application/json': { schema: RunSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteTasksTaskIDRunsRunIDRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskID}/runs/{runID}',
  tags: ['Tasks'],
  summary: 'Cancel a running task',
  operationId: 'DeleteTasksIDRunsID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            description: 'The run ID.',
            in: 'path',
            name: 'runID',
            required: true,
            schema: { type: 'string' },
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

export const getTasksTaskIDRunsRunIDLogsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskID}/runs/{runID}/logs',
  tags: ['Tasks'],
  summary: 'Retrieve all logs for a run',
  operationId: 'GetTasksIDRunsIDLogs',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'ID of task to get logs for.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            description: 'ID of run to get logs for.',
            in: 'path',
            name: 'runID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All logs for a run',
      content: { 'application/json': { schema: LogsSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTasksTaskIDRunsRunIDRetryRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskID}/runs/{runID}/retry',
  tags: ['Tasks'],
  summary: 'Retry a task run',
  operationId: 'PostTasksIDRunsIDRetry',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      taskID: z
        .string()
        .openapi({
          param: {
            description: 'The task ID.',
            in: 'path',
            name: 'taskID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      runID: z
        .string()
        .openapi({
          param: {
            description: 'The run ID.',
            in: 'path',
            name: 'runID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json; charset=utf-8': { schema: z.object({}) } } },
  },
  responses: {
    200: {
      description: 'Run that has been queued',
      content: { 'application/json': { schema: RunSchema } },
    },
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
            description: 'The type of plugin desired.',
            in: 'query',
            name: 'type',
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
            description: 'The organization ID the Telegraf config belongs to.',
            in: 'query',
            name: 'orgID',
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
      content: { 'application/json': { schema: TelegrafRequestSchema } },
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
              default: 'application/toml',
              enum: ['application/toml', 'application/json', 'application/octet-stream'],
              type: 'string',
            },
          },
        }),
    }),
    params: z.object({
      telegrafID: z
        .string()
        .openapi({
          param: {
            description: 'The Telegraf configuration ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Telegraf configuration details',
      content: {
        'application/json': { schema: TelegrafSchema },
        'application/octet-stream': { schema: z.string(), example: '[agent]\ninterval = "10s"' },
        'application/toml': { schema: z.string(), example: '[agent]\ninterval = "10s"' },
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
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Telegraf configuration update to apply',
      content: { 'application/json': { schema: TelegrafRequestSchema } },
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
            description: 'The Telegraf configuration ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The label ID.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the member to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      telegrafID: z
        .string()
        .openapi({
          param: {
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf configuration ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The Telegraf configuration ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The ID of the owner to remove.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      telegrafID: z
        .string()
        .openapi({
          param: {
            description: 'The Telegraf config ID.',
            in: 'path',
            name: 'telegrafID',
            required: true,
            schema: { type: 'string' },
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

export const postTemplatesApplyRoute = createRoute({
  method: 'post',
  path: '/templates/apply',
  tags: ['InfluxDB Templates'],
  summary: 'Apply or dry-run an InfluxDB Template',
  operationId: 'ApplyTemplate',
  request: {
    body: {
      content: {
        'application/json': { schema: TemplateApplySchema },
        'application/x-jsonnet': { schema: TemplateApplySchema },
        'text/yml': { schema: TemplateApplySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Influx package dry-run successful, no new resources created. The provided diff and summary will not have IDs for resources that do not exist at the time of the dry run.\n',
      content: { 'application/json': { schema: TemplateSummarySchema } },
    },
    201: {
      description:
        'Influx package applied successfully. Newly created resources created available in summary. The diff compares the state of the world before the package is applied with the changes the application will impose. This corresponds to `"dryRun": true`\n',
      content: { 'application/json': { schema: TemplateSummarySchema } },
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
  tags: ['InfluxDB Templates'],
  summary: 'Export a new Influx Template',
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
      description: 'InfluxDB template created',
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

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'List all users',
  operationId: 'GetUsers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      after: AfterParamsSchema,
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of users',
      content: { 'application/json': { schema: UsersSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create a user',
  operationId: 'PostUsers',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    body: {
      description: 'User to create',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'User created',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const getUsersUserIDRoute = createRoute({
  method: 'get',
  path: '/users/{userID}',
  tags: ['Users'],
  summary: 'Retrieve a user',
  operationId: 'GetUsersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The user ID.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User details',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const deleteUsersUserIDRoute = createRoute({
  method: 'delete',
  path: '/users/{userID}',
  tags: ['Users'],
  summary: 'Delete a user',
  operationId: 'DeleteUsersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user to delete.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'User deleted' }, default: ServerErrorResponse },
})

export const patchUsersUserIDRoute = createRoute({
  method: 'patch',
  path: '/users/{userID}',
  tags: ['Users'],
  summary: 'Update a user',
  operationId: 'PatchUsersID',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user to update.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'User update to apply',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User updated',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: ServerErrorResponse,
  },
})

export const postUsersUserIDPasswordRoute = createRoute({
  method: 'post',
  path: '/users/{userID}/password',
  tags: ['Users'],
  summary: 'Update a password',
  operationId: 'PostUsersIDPassword',
  request: {
    headers: z.object({ 'Zap-Trace-Span': TraceSpanParamsSchema }),
    params: z.object({
      userID: z
        .string()
        .openapi({
          param: {
            description: 'The user ID.',
            in: 'path',
            name: 'userID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'New password',
      content: { 'application/json': { schema: PasswordResetBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Password successfully updated' },
    default: {
      description: 'Unsuccessful authentication',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
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
            description: 'The name of the organization.',
            in: 'query',
            name: 'org',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization ID.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of variables for an organization',
      content: { 'application/json': { schema: VariablesSchema } },
    },
    400: ServerErrorResponse,
    default: ServerErrorResponse,
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
    default: ServerErrorResponse,
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Variable found',
      content: { 'application/json': { schema: VariableSchema } },
    },
    404: ServerErrorResponse,
    default: ServerErrorResponse,
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
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
    default: ServerErrorResponse,
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Variable deleted' }, default: ServerErrorResponse },
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
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
    default: ServerErrorResponse,
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
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
            description: 'The variable ID.',
            in: 'path',
            name: 'variableID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelID: z
        .string()
        .openapi({
          param: {
            description: 'The label ID to delete.',
            in: 'path',
            name: 'labelID',
            required: true,
            schema: { type: 'string' },
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
  tags: ['Write'],
  summary: 'Write time series data into InfluxDB',
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
            description:
              'When present, its value indicates to the database that compression is applied to the line-protocol body.',
            in: 'header',
            name: 'Content-Encoding',
            schema: {
              default: 'identity',
              description:
                'Specifies that the line protocol in the body is encoded with gzip or not encoded with identity.',
              enum: ['gzip', 'identity'],
              type: 'string',
            },
            required: false,
          },
          description:
            'Specifies that the line protocol in the body is encoded with gzip or not encoded with identity.',
        }),
      'Content-Type': z
        .enum(['text/plain', 'text/plain; charset=utf-8', 'application/vnd.influx.arrow'])
        .default('text/plain; charset=utf-8')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Content-Type is used to indicate the format of the data sent to the server.',
            in: 'header',
            name: 'Content-Type',
            schema: {
              default: 'text/plain; charset=utf-8',
              description:
                'Text/plain specifies the text line protocol; charset is assumed to be utf-8.',
              enum: ['text/plain', 'text/plain; charset=utf-8', 'application/vnd.influx.arrow'],
              type: 'string',
            },
            required: false,
          },
          description:
            'Text/plain specifies the text line protocol; charset is assumed to be utf-8.',
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
            description:
              'Content-Length is an entity header is indicating the size of the entity-body, in bytes, sent to the database. If the length is greater than the database max body configuration option, a 413 response is sent.',
            in: 'header',
            name: 'Content-Length',
            schema: { description: 'The length in decimal number of octets.', type: 'integer' },
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
            description: 'Specifies the return content format.',
            in: 'header',
            name: 'Accept',
            schema: {
              default: 'application/json',
              description: 'The return format for errors.',
              enum: ['application/json'],
              type: 'string',
            },
            required: false,
          },
          description: 'The return format for errors.',
        }),
    }),
    query: z.object({
      org: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the destination organization for writes. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence.',
            in: 'query',
            name: 'org',
            required: true,
            schema: {
              description: 'All points within batch are written to this organization.',
              type: 'string',
            },
          },
          description: 'All points within batch are written to this organization.',
        }),
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the ID of the destination organization for writes. If both `orgID` and `org` are specified, `org` takes precedence.',
            in: 'query',
            name: 'orgID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The destination bucket for writes.',
            in: 'query',
            name: 'bucket',
            required: true,
            schema: {
              description: 'All points within batch are written to this bucket.',
              type: 'string',
            },
          },
          description: 'All points within batch are written to this bucket.',
        }),
      precision: WritePrecisionSchema.openapi({
        param: {
          description: 'The precision for the unix timestamps within the body line-protocol.',
          in: 'query',
          name: 'precision',
          schema: { $ref: '#/components/schemas/WritePrecision' },
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      description: 'Line protocol body',
      content: { 'text/plain': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Write data is correctly formatted and accepted for writing to the bucket.',
    },
    400: {
      description:
        'Line protocol poorly formed and no points were written.  Response can be used to determine the first malformed line in the body line-protocol. All data in body was rejected and not written.',
      content: { 'application/json': { schema: LineProtocolErrorSchema } },
    },
    401: {
      description:
        'Token does not have sufficient permissions to write to this organization and bucket or the organization and bucket do not exist.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'No token was sent and they are required.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    413: {
      description:
        'Write has been rejected because the payload is too large. Error message returns max size supported. All data in body was rejected and not written.',
      content: { 'application/json': { schema: LineProtocolLengthErrorSchema } },
    },
    429: {
      description:
        'Token is temporarily over quota. The Retry-After header describes when to try the write again.',
      headers: z.object({
        'Retry-After': {
          description:
            'A non-negative decimal integer indicating the seconds to delay after the response is received.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description:
                'A non-negative decimal integer indicating the seconds to delay after the response is received.',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description:
        'Server is temporarily unavailable to accept writes.  The Retry-After header describes when to try the write again.',
      headers: z.object({
        'Retry-After': {
          description:
            'A non-negative decimal integer indicating the seconds to delay after the response is received.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description:
                'A non-negative decimal integer indicating the seconds to delay after the response is received.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
