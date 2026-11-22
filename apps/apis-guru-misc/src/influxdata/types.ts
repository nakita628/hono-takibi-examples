type Routes = {
  authorizations?: string | undefined
  buckets?: string | undefined
  dashboards?: string | undefined
  external?: { statusFeed?: string | undefined } | undefined
  flags?: string | undefined
  me?: string | undefined
  orgs?: string | undefined
  query?:
    | {
        analyze?: string | undefined
        ast?: string | undefined
        self?: string | undefined
        suggestions?: string | undefined
      }
    | undefined
  setup?: string | undefined
  signin?: string | undefined
  signout?: string | undefined
  sources?: string | undefined
  system?:
    | { debug?: string | undefined; health?: string | undefined; metrics?: string | undefined }
    | undefined
  tasks?: string | undefined
  telegrafs?: string | undefined
  users?: string | undefined
  variables?: string | undefined
  write?: string | undefined
}
type Link = string
type Resource = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  org?: (string | null) | undefined
  orgID?: (string | null) | undefined
  type:
    | 'authorizations'
    | 'buckets'
    | 'dashboards'
    | 'orgs'
    | 'sources'
    | 'tasks'
    | 'telegrafs'
    | 'users'
    | 'variables'
    | 'scrapers'
    | 'secrets'
    | 'labels'
    | 'views'
    | 'documents'
    | 'notificationRules'
    | 'notificationEndpoints'
    | 'checks'
    | 'dbrp'
    | 'notebooks'
}
type Permission = { action: 'read' | 'write'; resource: Resource }
type Authorization = {
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
  createdAt?: string | undefined
  id?: string | undefined
  links?: { self?: Link | undefined; user?: Link | undefined } | undefined
  org?: string | undefined
  orgID?: string | undefined
  permissions?: Permission[] | undefined
  token?: string | undefined
  updatedAt?: string | undefined
  user?: string | undefined
  userID?: string | undefined
}
type Links = { next?: Link | undefined; prev?: Link | undefined; self: Link }
type Authorizations = { authorizations?: Authorization[] | undefined; links?: Links | undefined }
type Error = {
  code:
    | 'internal error'
    | 'not found'
    | 'conflict'
    | 'invalid'
    | 'unprocessable entity'
    | 'empty value'
    | 'unavailable'
    | 'forbidden'
    | 'too many requests'
    | 'unauthorized'
    | 'method not allowed'
    | 'request too large'
    | 'unsupported media type'
  err?: string | undefined
  message: string
  op?: string | undefined
}
type AuthorizationPostRequest = {
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
  orgID?: string | undefined
  permissions?: Permission[] | undefined
  userID?: string | undefined
}
type AuthorizationUpdateRequest = {
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type Label = {
  id?: string | undefined
  name?: string | undefined
  orgID?: string | undefined
  properties?: { [x: string]: string } | undefined
}
type Labels = Label[]
type RetentionRule = {
  everySeconds: bigint
  shardGroupDurationSeconds?: bigint | undefined
  type: 'expire'
}
type RetentionRules = RetentionRule[]
type SchemaType = 'implicit' | 'explicit'
type Bucket = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        org?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
        write?: Link | undefined
      }
    | undefined
  name: string
  orgID?: string | undefined
  retentionRules: RetentionRules
  rp?: string | undefined
  schemaType?: SchemaType | undefined
  type?: 'user' | 'system' | undefined
  updatedAt?: string | undefined
}
type Buckets = { buckets?: Bucket[] | undefined; links?: Links | undefined }
type PostBucketRequest = {
  description?: string | undefined
  name: string
  orgID: string
  retentionRules: RetentionRules
  rp?: string | undefined
  schemaType?: SchemaType | undefined
}
type PatchRetentionRule = {
  everySeconds?: bigint | undefined
  shardGroupDurationSeconds?: bigint | undefined
  type: 'expire'
}
type PatchRetentionRules = PatchRetentionRule[]
type PatchBucketRequest = {
  description?: string | undefined
  name?: string | undefined
  retentionRules?: PatchRetentionRules | undefined
}
type LabelsResponse = { labels?: Labels | undefined; links?: Links | undefined }
type LabelMapping = { labelID?: string | undefined }
type LabelResponse = { label?: Label | undefined; links?: Links | undefined }
type ResourceMember = {
  id?: string | undefined
  links?: { self?: string | undefined } | undefined
  name: string
  oauthID?: string | undefined
  status?: 'active' | 'inactive' | undefined
  role?: 'member' | undefined
}
type ResourceMembers = {
  links?: { self?: string | undefined } | undefined
  users?: ResourceMember[] | undefined
}
type AddResourceMemberRequestBody = { id: string; name?: string | undefined }
type ResourceOwner = {
  id?: string | undefined
  links?: { self?: string | undefined } | undefined
  name: string
  oauthID?: string | undefined
  status?: 'active' | 'inactive' | undefined
  role?: 'owner' | undefined
}
type ResourceOwners = {
  links?: { self?: string | undefined } | undefined
  users?: ResourceOwner[] | undefined
}
type Check = {}
type Checks = { checks?: Check[] | undefined; links?: Links | undefined }
type PostCheck = {}
type CheckPatch = {
  description?: string | undefined
  name?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type FluxResponse = { flux?: string | undefined }
type Cell = {
  h?: number | undefined
  id?: string | undefined
  links?: { self?: string | undefined; view?: string | undefined } | undefined
  viewID?: string | undefined
  w?: number | undefined
  x?: number | undefined
  y?: number | undefined
}
type Cells = Cell[]
type Dashboard = {
  description?: string | undefined
  name: string
  orgID: string
  cells?: Cells | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        cells?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        org?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  meta?: { createdAt?: string | undefined; updatedAt?: string | undefined } | undefined
}
type Dashboards = { dashboards?: Dashboard[] | undefined; links?: Links | undefined }
type CreateDashboardRequest = { description?: string | undefined; name: string; orgID: string }
type AxisScale = 'log' | 'linear'
type Axis = {
  base?: '' | '2' | '10' | undefined
  bounds?: string[] | undefined
  label?: string | undefined
  prefix?: string | undefined
  scale?: AxisScale | undefined
  suffix?: string | undefined
}
type Axes = { x: Axis; y: Axis }
type DashboardColor = {
  hex: string
  id: string
  name: string
  type: 'min' | 'max' | 'threshold' | 'scale' | 'text' | 'background'
  value: number
}
type DecimalPlaces = { digits?: number | undefined; isEnforced?: boolean | undefined }
type BuilderFunctionsType = { name?: string | undefined }
type BuilderAggregateFunctionType = 'filter' | 'group'
type BuilderTagsType = {
  aggregateFunctionType?: BuilderAggregateFunctionType | undefined
  key?: string | undefined
  values?: string[] | undefined
}
type BuilderConfig = {
  aggregateWindow?: { fillValues?: boolean | undefined; period?: string | undefined } | undefined
  buckets?: string[] | undefined
  functions?: BuilderFunctionsType[] | undefined
  tags?: BuilderTagsType[] | undefined
}
type QueryEditMode = 'builder' | 'advanced'
type DashboardQuery = {
  builderConfig?: BuilderConfig | undefined
  editMode?: QueryEditMode | undefined
  name?: string | undefined
  text?: string | undefined
}
type StaticLegend = {
  colorizeRows?: boolean | undefined
  heightRatio?: number | undefined
  hide?: boolean | undefined
  opacity?: number | undefined
  orientationThreshold?: number | undefined
  valueAxis?: string | undefined
  widthRatio?: number | undefined
}
type LinePlusSingleStatProperties = {
  axes: Axes
  colors: DashboardColor[]
  decimalPlaces: DecimalPlaces
  generateXAxisTicks?: string[] | undefined
  generateYAxisTicks?: string[] | undefined
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  note: string
  position: 'overlaid' | 'stacked'
  prefix: string
  queries: DashboardQuery[]
  shadeBelow?: boolean | undefined
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  staticLegend?: StaticLegend | undefined
  suffix: string
  timeFormat?: string | undefined
  type: 'line-plus-single-stat'
  xColumn?: string | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  xTotalTicks?: number | undefined
  yColumn?: string | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  yTotalTicks?: number | undefined
}
type XYGeom = 'line' | 'step' | 'stacked' | 'bar' | 'monotoneX'
type XYViewProperties = {
  axes: Axes
  colors: DashboardColor[]
  generateXAxisTicks?: string[] | undefined
  generateYAxisTicks?: string[] | undefined
  geom: XYGeom
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  note: string
  position: 'overlaid' | 'stacked'
  queries: DashboardQuery[]
  shadeBelow?: boolean | undefined
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  staticLegend?: StaticLegend | undefined
  timeFormat?: string | undefined
  type: 'xy'
  xColumn?: string | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  xTotalTicks?: number | undefined
  yColumn?: string | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  yTotalTicks?: number | undefined
}
type SingleStatViewProperties = {
  colors: DashboardColor[]
  decimalPlaces: DecimalPlaces
  note: string
  prefix: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  staticLegend?: StaticLegend | undefined
  suffix: string
  tickPrefix: string
  tickSuffix: string
  type: 'single-stat'
}
type HistogramViewProperties = {
  binCount: number
  colors: DashboardColor[]
  fillColumns: string[]
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  note: string
  position: 'overlaid' | 'stacked'
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  type: 'histogram'
  xAxisLabel: string
  xColumn: string
  xDomain: number[]
}
type GaugeViewProperties = {
  colors: DashboardColor[]
  decimalPlaces: DecimalPlaces
  note: string
  prefix: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  suffix: string
  tickPrefix: string
  tickSuffix: string
  type: 'gauge'
}
type RenamableField = {
  displayName?: string | undefined
  internalName?: string | undefined
  visible?: boolean | undefined
}
type TableViewProperties = {
  colors: DashboardColor[]
  decimalPlaces: DecimalPlaces
  fieldOptions: RenamableField[]
  note: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  tableOptions: {
    fixFirstColumn?: boolean | undefined
    sortBy?: RenamableField | undefined
    verticalTimeAxis?: boolean | undefined
    wrapping?: 'truncate' | 'wrap' | 'single-line' | undefined
  }
  timeFormat: string
  type: 'table'
}
type MarkdownViewProperties = { note: string; shape: 'chronograf-v2'; type: 'markdown' }
type CheckViewProperties = {
  check?: Check | undefined
  checkID: string
  colors: DashboardColor[]
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  type: 'check'
}
type ScatterViewProperties = {
  colors: string[]
  fillColumns: string[]
  generateXAxisTicks?: string[] | undefined
  generateYAxisTicks?: string[] | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  note: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  symbolColumns: string[]
  timeFormat?: string | undefined
  type: 'scatter'
  xAxisLabel: string
  xColumn: string
  xDomain: number[]
  xPrefix: string
  xSuffix: string
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  xTotalTicks?: number | undefined
  yAxisLabel: string
  yColumn: string
  yDomain: number[]
  yPrefix: string
  ySuffix: string
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  yTotalTicks?: number | undefined
}
type HeatmapViewProperties = {
  binSize: number
  colors: string[]
  generateXAxisTicks?: string[] | undefined
  generateYAxisTicks?: string[] | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  note: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  timeFormat?: string | undefined
  type: 'heatmap'
  xAxisLabel: string
  xColumn: string
  xDomain: number[]
  xPrefix: string
  xSuffix: string
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  xTotalTicks?: number | undefined
  yAxisLabel: string
  yColumn: string
  yDomain: number[]
  yPrefix: string
  ySuffix: string
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  yTotalTicks?: number | undefined
}
type MosaicViewProperties = {
  colors: string[]
  fillColumns: string[]
  generateXAxisTicks?: string[] | undefined
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  note: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  timeFormat?: string | undefined
  type: 'mosaic'
  xAxisLabel: string
  xColumn: string
  xDomain: number[]
  xPrefix: string
  xSuffix: string
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  xTotalTicks?: number | undefined
  yAxisLabel: string
  yDomain: number[]
  yLabelColumnSeparator?: string | undefined
  yLabelColumns?: string[] | undefined
  yPrefix: string
  ySeriesColumns: string[]
  ySuffix: string
}
type BandViewProperties = {
  axes: Axes
  colors: DashboardColor[]
  generateXAxisTicks?: string[] | undefined
  generateYAxisTicks?: string[] | undefined
  geom: XYGeom
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
  lowerColumn?: string | undefined
  mainColumn?: string | undefined
  note: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  staticLegend?: StaticLegend | undefined
  timeFormat?: string | undefined
  type: 'band'
  upperColumn?: string | undefined
  xColumn?: string | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  xTotalTicks?: number | undefined
  yColumn?: string | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  yTotalTicks?: number | undefined
}
type GeoCircleViewLayer = {
  type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap'
  colorDimension: Axis
  colorField: string
  colors: DashboardColor[]
  interpolateColors?: boolean | undefined
  radius?: number | undefined
  radiusDimension: Axis
  radiusField: string
}
type GeoHeatMapViewLayer = {
  type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap'
  blur: number
  colors: DashboardColor[]
  intensityDimension: Axis
  intensityField: string
  radius: number
}
type GeoPointMapViewLayer = {
  type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap'
  colorDimension: Axis
  colorField: string
  colors: DashboardColor[]
  isClustered?: boolean | undefined
}
type GeoTrackMapViewLayer = { type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap' }
type GeoViewLayer =
  | GeoCircleViewLayer
  | GeoHeatMapViewLayer
  | GeoPointMapViewLayer
  | GeoTrackMapViewLayer
type GeoViewProperties = {
  allowPanAndZoom: boolean
  center: { lat: number; lon: number }
  colors?: DashboardColor[] | undefined
  detectCoordinateFields: boolean
  layers: GeoViewLayer[]
  mapStyle?: string | undefined
  note: string
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  showNoteWhenEmpty: boolean
  type: 'geo'
  zoom: number
}
type ViewProperties =
  | LinePlusSingleStatProperties
  | XYViewProperties
  | SingleStatViewProperties
  | HistogramViewProperties
  | GaugeViewProperties
  | TableViewProperties
  | MarkdownViewProperties
  | CheckViewProperties
  | ScatterViewProperties
  | HeatmapViewProperties
  | MosaicViewProperties
  | BandViewProperties
  | GeoViewProperties
type CellWithViewProperties = {
  h?: number | undefined
  id?: string | undefined
  links?: { self?: string | undefined; view?: string | undefined } | undefined
  viewID?: string | undefined
  w?: number | undefined
  x?: number | undefined
  y?: number | undefined
  name?: string | undefined
  properties?: ViewProperties | undefined
}
type CellsWithViewProperties = CellWithViewProperties[]
type DashboardWithViewProperties = {
  description?: string | undefined
  name: string
  orgID: string
  cells?: CellsWithViewProperties | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        cells?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        org?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  meta?: { createdAt?: string | undefined; updatedAt?: string | undefined } | undefined
}
type CreateCell = {
  h?: number | undefined
  name?: string | undefined
  usingView?: string | undefined
  w?: number | undefined
  x?: number | undefined
  y?: number | undefined
}
type CellUpdate = {
  h?: number | undefined
  w?: number | undefined
  x?: number | undefined
  y?: number | undefined
}
type View = {
  id?: string | undefined
  links?: { self?: string | undefined } | undefined
  name: string
  properties: ViewProperties
}
type DBRP = { [x: string]: unknown } | { [x: string]: unknown }
type DBRPs = { content?: DBRP[] | undefined }
type DBRPUpdate = {
  database?: string | undefined
  default?: boolean | undefined
  links?: Links | undefined
  retention_policy?: string | undefined
}
type DeletePredicateRequest = { predicate?: string | undefined; start: string; stop: string }
type DocumentMeta = {
  createdAt?: string | undefined
  description?: string | undefined
  name: string
  templateID?: string | undefined
  type?: string | undefined
  updatedAt?: string | undefined
  version: string
}
type DocumentListEntry = {
  id: string
  labels?: Labels | undefined
  links?: { self?: Link | undefined } | undefined
  meta: DocumentMeta
}
type Documents = { documents?: DocumentListEntry[] | undefined }
type DocumentCreate = {
  content: { [x: string]: unknown }
  labels?: string[] | undefined
  meta: DocumentMeta
  org?: string | undefined
  orgID?: string | undefined
}
type Document = {
  content: { [x: string]: unknown }
  id: string
  labels?: Labels | undefined
  links?: { self?: Link | undefined } | undefined
  meta: DocumentMeta
}
type DocumentUpdate = {
  content?: { [x: string]: unknown } | undefined
  meta?: DocumentMeta | undefined
}
type Flags = { [x: string]: unknown }
type HealthCheck = {
  checks?: HealthCheck[] | undefined
  commit?: string | undefined
  message?: string | undefined
  name: string
  status: 'pass' | 'fail'
  version?: string | undefined
}
type LabelCreateRequest = {
  name: string
  orgID: string
  properties?: { [x: string]: string } | undefined
}
type LabelUpdate = { name?: string | undefined; properties?: { [x: string]: string } | undefined }
type UserResponse = {
  id?: string | undefined
  links?: { self?: string | undefined } | undefined
  name: string
  oauthID?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type PasswordResetBody = { password: string }
type NotificationEndpoint = {}
type NotificationEndpoints = {
  links?: Links | undefined
  notificationEndpoints?: NotificationEndpoint[] | undefined
}
type PostNotificationEndpoint = {}
type NotificationEndpointUpdate = {
  description?: string | undefined
  name?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type NotificationRule = {}
type NotificationRules = {
  links?: Links | undefined
  notificationRules?: NotificationRule[] | undefined
}
type PostNotificationRule = {}
type NotificationRuleUpdate = {
  description?: string | undefined
  name?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type Organization = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  links?:
    | {
        buckets?: Link | undefined
        dashboards?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        secrets?: Link | undefined
        self?: Link | undefined
        tasks?: Link | undefined
      }
    | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  updatedAt?: string | undefined
}
type Organizations = { links?: Links | undefined; orgs?: Organization[] | undefined }
type PostOrganizationRequest = { description?: string | undefined; name: string }
type PatchOrganizationRequest = { description?: string | undefined; name?: string | undefined }
type SecretKeysResponse = {
  secrets?: string[] | undefined
  links?: { org?: string | undefined; self?: string | undefined } | undefined
}
type Secrets = { [x: string]: string }
type SecretKeys = { secrets?: string[] | undefined }
type Dialect = {
  annotations?: ('group' | 'datatype' | 'default')[] | undefined
  commentPrefix?: string | undefined
  dateTimeFormat?: 'RFC3339' | 'RFC3339Nano' | undefined
  delimiter?: string | undefined
  header?: boolean | undefined
}
type NodeType = string
type BadStatement = { text?: string | undefined; type?: NodeType | undefined }
type Identifier = { name?: string | undefined; type?: NodeType | undefined }
type ArrayExpression = { elements?: Expression[] | undefined; type?: NodeType | undefined }
type DictItem = {
  key?: Expression | undefined
  type?: NodeType | undefined
  val?: Expression | undefined
}
type DictExpression = { elements?: DictItem[] | undefined; type?: NodeType | undefined }
type Block = { body?: Statement[] | undefined; type?: NodeType | undefined }
type Node = Expression | Block
type StringLiteral = { type?: NodeType | undefined; value?: string | undefined }
type PropertyKey = Identifier | StringLiteral
type Property = {
  key?: PropertyKey | undefined
  type?: NodeType | undefined
  value?: Expression | undefined
}
type FunctionExpression = {
  body?: Node | undefined
  params?: Property[] | undefined
  type?: NodeType | undefined
}
type BinaryExpression = {
  left?: Expression | undefined
  operator?: string | undefined
  right?: Expression | undefined
  type?: NodeType | undefined
}
type CallExpression = {
  arguments?: Expression[] | undefined
  callee?: Expression | undefined
  type?: NodeType | undefined
}
type ConditionalExpression = {
  alternate?: Expression | undefined
  consequent?: Expression | undefined
  test?: Expression | undefined
  type?: NodeType | undefined
}
type LogicalExpression = {
  left?: Expression | undefined
  operator?: string | undefined
  right?: Expression | undefined
  type?: NodeType | undefined
}
type MemberExpression = {
  object?: Expression | undefined
  property?: PropertyKey | undefined
  type?: NodeType | undefined
}
type IndexExpression = {
  array?: Expression | undefined
  index?: Expression | undefined
  type?: NodeType | undefined
}
type ObjectExpression = { properties?: Property[] | undefined; type?: NodeType | undefined }
type ParenExpression = { expression?: Expression | undefined; type?: NodeType | undefined }
type PipeExpression = {
  argument?: Expression | undefined
  call?: CallExpression | undefined
  type?: NodeType | undefined
}
type UnaryExpression = {
  argument?: Expression | undefined
  operator?: string | undefined
  type?: NodeType | undefined
}
type BooleanLiteral = { type?: NodeType | undefined; value?: boolean | undefined }
type DateTimeLiteral = { type?: NodeType | undefined; value?: string | undefined }
type Duration = {
  magnitude?: number | undefined
  type?: NodeType | undefined
  unit?: string | undefined
}
type DurationLiteral = { type?: NodeType | undefined; values?: Duration[] | undefined }
type FloatLiteral = { type?: NodeType | undefined; value?: number | undefined }
type IntegerLiteral = { type?: NodeType | undefined; value?: string | undefined }
type PipeLiteral = { type?: NodeType | undefined }
type RegexpLiteral = { type?: NodeType | undefined; value?: string | undefined }
type UnsignedIntegerLiteral = { type?: NodeType | undefined; value?: string | undefined }
type Expression =
  | ArrayExpression
  | DictExpression
  | FunctionExpression
  | BinaryExpression
  | CallExpression
  | ConditionalExpression
  | LogicalExpression
  | MemberExpression
  | IndexExpression
  | ObjectExpression
  | ParenExpression
  | PipeExpression
  | UnaryExpression
  | BooleanLiteral
  | DateTimeLiteral
  | DurationLiteral
  | FloatLiteral
  | IntegerLiteral
  | PipeLiteral
  | RegexpLiteral
  | StringLiteral
  | UnsignedIntegerLiteral
  | Identifier
type VariableAssignment = {
  id?: Identifier | undefined
  init?: Expression | undefined
  type?: NodeType | undefined
}
type MemberAssignment = {
  init?: Expression | undefined
  member?: MemberExpression | undefined
  type?: NodeType | undefined
}
type ExpressionStatement = { expression?: Expression | undefined; type?: NodeType | undefined }
type ReturnStatement = { argument?: Expression | undefined; type?: NodeType | undefined }
type OptionStatement = {
  assignment?: VariableAssignment | MemberAssignment | undefined
  type?: NodeType | undefined
}
type BuiltinStatement = { id?: Identifier | undefined; type?: NodeType | undefined }
type TestStatement = { assignment?: VariableAssignment | undefined; type?: NodeType | undefined }
type Statement =
  | BadStatement
  | VariableAssignment
  | MemberAssignment
  | ExpressionStatement
  | ReturnStatement
  | OptionStatement
  | BuiltinStatement
  | TestStatement
type ImportDeclaration = {
  as?: Identifier | undefined
  path?: StringLiteral | undefined
  type?: NodeType | undefined
}
type PackageClause = { name?: Identifier | undefined; type?: NodeType | undefined }
type File2 = {
  body?: Statement[] | undefined
  imports?: ImportDeclaration[] | undefined
  name?: string | undefined
  package?: PackageClause | undefined
  type?: NodeType | undefined
}
type Query = {
  dialect?: Dialect | undefined
  extern?: File2 | undefined
  now?: string | undefined
  params?: { [x: string]: unknown } | undefined
  query: string
  type?: 'flux' | undefined
}
type InfluxQLQuery = { bucket?: string | undefined; query: string; type?: 'influxql' | undefined }
type AnalyzeQueryResponse = {
  errors?:
    | {
        character?: number | undefined
        column?: number | undefined
        line?: number | undefined
        message?: string | undefined
      }[]
    | undefined
}
type LanguageRequest = { query: string }
type Package = {
  files?: File2[] | undefined
  package?: string | undefined
  path?: string | undefined
  type?: NodeType | undefined
}
type ASTResponse = { ast?: Package | undefined }
type FluxSuggestion = { name?: string | undefined; params?: { [x: string]: string } | undefined }
type FluxSuggestions = { funcs?: FluxSuggestion[] | undefined }
type Ready = { started?: string | undefined; status?: 'ready' | undefined; up?: string | undefined }
type ScraperTargetResponse = {
  allowInsecure?: boolean | undefined
  bucketID?: string | undefined
  name?: string | undefined
  orgID?: string | undefined
  type?: 'prometheus' | undefined
  url?: string | undefined
  bucket?: string | undefined
  id?: string | undefined
  links?:
    | {
        bucket?: Link | undefined
        members?: Link | undefined
        organization?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  org?: string | undefined
}
type ScraperTargetResponses = { configurations?: ScraperTargetResponse[] | undefined }
type ScraperTargetRequest = {
  allowInsecure?: boolean | undefined
  bucketID?: string | undefined
  name?: string | undefined
  orgID?: string | undefined
  type?: 'prometheus' | undefined
  url?: string | undefined
}
type IsOnboarding = { allowed?: boolean | undefined }
type OnboardingRequest = {
  bucket: string
  org: string
  password?: string | undefined
  retentionPeriodHrs?: number | undefined
  retentionPeriodSeconds?: bigint | undefined
  token?: string | undefined
  username: string
}
type OnboardingResponse = {
  auth?: Authorization | undefined
  bucket?: Bucket | undefined
  org?: Organization | undefined
  user?: UserResponse | undefined
}
type Source = {
  default?: boolean | undefined
  defaultRP?: string | undefined
  id?: string | undefined
  insecureSkipVerify?: boolean | undefined
  languages?: ('flux' | 'influxql')[] | undefined
  links?:
    | {
        buckets?: string | undefined
        health?: string | undefined
        query?: string | undefined
        self?: string | undefined
      }
    | undefined
  metaUrl?: string | undefined
  name?: string | undefined
  orgID?: string | undefined
  password?: string | undefined
  sharedSecret?: string | undefined
  telegraf?: string | undefined
  token?: string | undefined
  type?: 'v1' | 'v2' | 'self' | undefined
  url?: string | undefined
  username?: string | undefined
}
type Sources = { links?: { self?: string | undefined } | undefined; sources?: Source[] | undefined }
type TemplateKind =
  | 'Bucket'
  | 'Check'
  | 'CheckDeadman'
  | 'CheckThreshold'
  | 'Dashboard'
  | 'Label'
  | 'NotificationEndpoint'
  | 'NotificationEndpointHTTP'
  | 'NotificationEndpointPagerDuty'
  | 'NotificationEndpointSlack'
  | 'NotificationRule'
  | 'Task'
  | 'Telegraf'
  | 'Variable'
type Stack = {
  createdAt?: string | undefined
  events?:
    | {
        description?: string | undefined
        eventType?: string | undefined
        name?: string | undefined
        resources?:
          | {
              apiVersion?: string | undefined
              associations?:
                | { kind?: TemplateKind | undefined; metaName?: string | undefined }[]
                | undefined
              kind?: TemplateKind | undefined
              links?: { self?: string | undefined } | undefined
              resourceID?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        sources?: string[] | undefined
        updatedAt?: string | undefined
        urls?: string[] | undefined
      }[]
    | undefined
  id?: string | undefined
  orgID?: string | undefined
}
type TaskStatusType = 'active' | 'inactive'
type Task = {
  authorizationID?: string | undefined
  createdAt?: string | undefined
  cron?: string | undefined
  description?: string | undefined
  every?: string | undefined
  flux: string
  id: string
  labels?: Labels | undefined
  lastRunError?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  latestCompleted?: string | undefined
  links?:
    | {
        labels?: Link | undefined
        logs?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        runs?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  offset?: string | undefined
  org?: string | undefined
  orgID: string
  status?: TaskStatusType | undefined
  type?: string | undefined
  updatedAt?: string | undefined
}
type Tasks = { links?: Links | undefined; tasks?: Task[] | undefined }
type TaskCreateRequest = {
  description?: string | undefined
  flux: string
  org?: string | undefined
  orgID?: string | undefined
  status?: TaskStatusType | undefined
}
type TaskUpdateRequest = {
  cron?: string | undefined
  description?: string | undefined
  every?: string | undefined
  flux?: string | undefined
  name?: string | undefined
  offset?: string | undefined
  status?: TaskStatusType | undefined
}
type LogEvent = {
  message?: string | undefined
  runID?: string | undefined
  time?: string | undefined
}
type Logs = { events?: LogEvent[] | undefined }
type Run = {
  finishedAt?: string | undefined
  id?: string | undefined
  links?:
    | { retry?: string | undefined; self?: string | undefined; task?: string | undefined }
    | undefined
  log?: LogEvent[] | undefined
  requestedAt?: string | undefined
  scheduledFor?: string | undefined
  startedAt?: string | undefined
  status?: 'scheduled' | 'started' | 'failed' | 'success' | 'canceled' | undefined
  taskID?: string | undefined
}
type Runs = { links?: Links | undefined; runs?: Run[] | undefined }
type RunManually = { scheduledFor?: (string | null) | undefined }
type TelegrafPlugin = {
  config?: string | undefined
  description?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
type TelegrafPlugins = {
  os?: string | undefined
  plugins?: TelegrafPlugin[] | undefined
  version?: string | undefined
}
type Telegraf = {
  config?: string | undefined
  description?: string | undefined
  metadata?: { buckets?: string[] | undefined } | undefined
  name?: string | undefined
  orgID?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
}
type Telegrafs = { configurations?: Telegraf[] | undefined }
type TelegrafRequest = {
  config?: string | undefined
  description?: string | undefined
  metadata?: { buckets?: string[] | undefined } | undefined
  name?: string | undefined
  orgID?: string | undefined
}
type Template = {
  apiVersion?: string | undefined
  kind?: TemplateKind | undefined
  meta?: { name?: string | undefined } | undefined
  spec?: { [x: string]: unknown } | undefined
}[]
type TemplateApply = {
  actions?:
    | (
        | { action?: 'skipKind' | undefined; properties?: { kind: TemplateKind } | undefined }
        | {
            action?: 'skipResource' | undefined
            properties?: { kind: TemplateKind; resourceTemplateName: string } | undefined
          }
      )[]
    | undefined
  dryRun?: boolean | undefined
  envRefs?: { [x: string]: string | number | number | boolean } | undefined
  orgID?: string | undefined
  remotes?: { contentType?: string | undefined; url: string }[] | undefined
  secrets?: { [x: string]: string } | undefined
  stackID?: string | undefined
  template?:
    | {
        contentType?: string | undefined
        contents?: Template | undefined
        sources?: string[] | undefined
      }
    | undefined
  templates?:
    | {
        contentType?: string | undefined
        contents?: Template | undefined
        sources?: string[] | undefined
      }[]
    | undefined
}
type CheckStatusLevel = 'UNKNOWN' | 'OK' | 'INFO' | 'CRIT' | 'WARN'
type DeadmanCheck = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  lastRunError?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  latestCompleted?: string | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        query?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID: string
  ownerID?: string | undefined
  query: DashboardQuery
  status?: TaskStatusType | undefined
  taskID?: string | undefined
  updatedAt?: string | undefined
  every?: string | undefined
  level?: CheckStatusLevel | undefined
  offset?: string | undefined
  reportZero?: boolean | undefined
  staleTime?: string | undefined
  statusMessageTemplate?: string | undefined
  tags?: { key?: string | undefined; value?: string | undefined }[] | undefined
  timeSince?: string | undefined
  type: 'deadman'
}
type GreaterThreshold = {
  allValues?: boolean | undefined
  level?: CheckStatusLevel | undefined
  type: 'greater'
  value: number
}
type LesserThreshold = {
  allValues?: boolean | undefined
  level?: CheckStatusLevel | undefined
  type: 'lesser'
  value: number
}
type RangeThreshold = {
  allValues?: boolean | undefined
  level?: CheckStatusLevel | undefined
  max: number
  min: number
  type: 'range'
  within: boolean
}
type Threshold = GreaterThreshold | LesserThreshold | RangeThreshold
type ThresholdCheck = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  lastRunError?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  latestCompleted?: string | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        query?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID: string
  ownerID?: string | undefined
  query: DashboardQuery
  status?: TaskStatusType | undefined
  taskID?: string | undefined
  updatedAt?: string | undefined
  every?: string | undefined
  offset?: string | undefined
  statusMessageTemplate?: string | undefined
  tags?: { key?: string | undefined; value?: string | undefined }[] | undefined
  thresholds?: Threshold[] | undefined
  type: 'threshold'
}
type CustomCheck = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  lastRunError?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  latestCompleted?: string | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        query?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID: string
  ownerID?: string | undefined
  query: DashboardQuery
  status?: TaskStatusType | undefined
  taskID?: string | undefined
  updatedAt?: string | undefined
  type: 'custom'
}
type CheckDiscriminator = DeadmanCheck | ThresholdCheck | CustomCheck
type TemplateChart = {
  height?: number | undefined
  properties?: ViewProperties | undefined
  width?: number | undefined
  xPos?: number | undefined
  yPos?: number | undefined
}
type NotificationEndpointType = 'slack' | 'pagerduty' | 'http' | 'telegram'
type SlackNotificationEndpoint = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID?: string | undefined
  status?: 'active' | 'inactive' | undefined
  type: NotificationEndpointType
  updatedAt?: string | undefined
  userID?: string | undefined
  token?: string | undefined
  url?: string | undefined
}
type PagerDutyNotificationEndpoint = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID?: string | undefined
  status?: 'active' | 'inactive' | undefined
  type: NotificationEndpointType
  updatedAt?: string | undefined
  userID?: string | undefined
  clientURL?: string | undefined
  routingKey: string
}
type HTTPNotificationEndpoint = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID?: string | undefined
  status?: 'active' | 'inactive' | undefined
  type: NotificationEndpointType
  updatedAt?: string | undefined
  userID?: string | undefined
  authMethod: 'none' | 'basic' | 'bearer'
  contentTemplate?: string | undefined
  headers?: { [x: string]: string } | undefined
  method: 'POST' | 'GET' | 'PUT'
  password?: string | undefined
  token?: string | undefined
  url: string
  username?: string | undefined
}
type TelegramNotificationEndpoint = {
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        self?: Link | undefined
      }
    | undefined
  name: string
  orgID?: string | undefined
  status?: 'active' | 'inactive' | undefined
  type: NotificationEndpointType
  updatedAt?: string | undefined
  userID?: string | undefined
  channel: string
  token: string
}
type NotificationEndpointDiscriminator =
  | SlackNotificationEndpoint
  | PagerDutyNotificationEndpoint
  | HTTPNotificationEndpoint
  | TelegramNotificationEndpoint
type QueryVariableProperties = {
  type?: 'query' | undefined
  values?: { language?: string | undefined; query?: string | undefined } | undefined
}
type ConstantVariableProperties = { type?: 'constant' | undefined; values?: string[] | undefined }
type MapVariableProperties = {
  type?: 'map' | undefined
  values?: { [x: string]: string } | undefined
}
type VariableProperties =
  | QueryVariableProperties
  | ConstantVariableProperties
  | MapVariableProperties
type TemplateEnvReferences = {
  defaultValue?: string | number | number | boolean | undefined
  envRefKey: string
  resourceField: string
  value?: string | number | number | boolean | undefined
}[]
type TemplateSummaryLabel = {
  envReferences?: TemplateEnvReferences | undefined
  id?: string | undefined
  kind?: TemplateKind | undefined
  name?: string | undefined
  orgID?: string | undefined
  properties?: { color?: string | undefined; description?: string | undefined } | undefined
  templateMetaName?: string | undefined
}
type TemplateSummary = {
  diff?:
    | {
        buckets?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?:
                | {
                    description?: string | undefined
                    name?: string | undefined
                    retentionRules?: RetentionRules | undefined
                  }
                | undefined
              old?:
                | {
                    description?: string | undefined
                    name?: string | undefined
                    retentionRules?: RetentionRules | undefined
                  }
                | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        checks?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?: CheckDiscriminator | undefined
              old?: CheckDiscriminator | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        dashboards?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?:
                | {
                    charts?: TemplateChart[] | undefined
                    description?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              old?:
                | {
                    charts?: TemplateChart[] | undefined
                    description?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        labelMappings?:
          | {
              labelID?: string | undefined
              labelName?: string | undefined
              labelTemplateMetaName?: string | undefined
              resourceID?: string | undefined
              resourceName?: string | undefined
              resourceTemplateMetaName?: string | undefined
              resourceType?: string | undefined
              status?: string | undefined
            }[]
          | undefined
        labels?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?:
                | {
                    color?: string | undefined
                    description?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              old?:
                | {
                    color?: string | undefined
                    description?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        notificationEndpoints?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?: NotificationEndpointDiscriminator | undefined
              old?: NotificationEndpointDiscriminator | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        notificationRules?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?:
                | {
                    description?: string | undefined
                    endpointID?: string | undefined
                    endpointName?: string | undefined
                    endpointType?: string | undefined
                    every?: string | undefined
                    messageTemplate?: string | undefined
                    name?: string | undefined
                    offset?: string | undefined
                    status?: string | undefined
                    statusRules?:
                      | { currentLevel?: string | undefined; previousLevel?: string | undefined }[]
                      | undefined
                    tagRules?:
                      | {
                          key?: string | undefined
                          operator?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              old?:
                | {
                    description?: string | undefined
                    endpointID?: string | undefined
                    endpointName?: string | undefined
                    endpointType?: string | undefined
                    every?: string | undefined
                    messageTemplate?: string | undefined
                    name?: string | undefined
                    offset?: string | undefined
                    status?: string | undefined
                    statusRules?:
                      | { currentLevel?: string | undefined; previousLevel?: string | undefined }[]
                      | undefined
                    tagRules?:
                      | {
                          key?: string | undefined
                          operator?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        tasks?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?:
                | {
                    cron?: string | undefined
                    description?: string | undefined
                    every?: string | undefined
                    name?: string | undefined
                    offset?: string | undefined
                    query?: string | undefined
                    status?: string | undefined
                  }
                | undefined
              old?:
                | {
                    cron?: string | undefined
                    description?: string | undefined
                    every?: string | undefined
                    name?: string | undefined
                    offset?: string | undefined
                    query?: string | undefined
                    status?: string | undefined
                  }
                | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        telegrafConfigs?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?: TelegrafRequest | undefined
              old?: TelegrafRequest | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        variables?:
          | {
              id?: string | undefined
              kind?: TemplateKind | undefined
              new?:
                | {
                    args?: VariableProperties | undefined
                    description?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              old?:
                | {
                    args?: VariableProperties | undefined
                    description?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              stateStatus?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
      }
    | undefined
  errors?:
    | {
        fields?: string[] | undefined
        indexes?: number[] | undefined
        kind?: TemplateKind | undefined
        reason?: string | undefined
      }[]
    | undefined
  sources?: string[] | undefined
  stackID?: string | undefined
  summary?:
    | {
        buckets?:
          | {
              description?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
              id?: string | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              name?: string | undefined
              orgID?: string | undefined
              retentionPeriod?: number | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        checks?:
          | {
              envReferences?: TemplateEnvReferences | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        dashboards?:
          | {
              charts?: TemplateChart[] | undefined
              description?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
              id?: string | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              name?: string | undefined
              orgID?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        labelMappings?:
          | {
              labelID?: string | undefined
              labelName?: string | undefined
              labelTemplateMetaName?: string | undefined
              resourceID?: string | undefined
              resourceName?: string | undefined
              resourceTemplateMetaName?: string | undefined
              resourceType?: string | undefined
              status?: string | undefined
            }[]
          | undefined
        labels?: TemplateSummaryLabel[] | undefined
        missingEnvRefs?: string[] | undefined
        missingSecrets?: string[] | undefined
        notificationEndpoints?:
          | {
              envReferences?: TemplateEnvReferences | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        notificationRules?:
          | {
              description?: string | undefined
              endpointID?: string | undefined
              endpointTemplateMetaName?: string | undefined
              endpointType?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
              every?: string | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              messageTemplate?: string | undefined
              name?: string | undefined
              offset?: string | undefined
              status?: string | undefined
              statusRules?:
                | { currentLevel?: string | undefined; previousLevel?: string | undefined }[]
                | undefined
              tagRules?:
                | {
                    key?: string | undefined
                    operator?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        tasks?:
          | {
              cron?: string | undefined
              description?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
              every?: string | undefined
              id?: string | undefined
              kind?: TemplateKind | undefined
              name?: string | undefined
              offset?: string | undefined
              query?: string | undefined
              status?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        telegrafConfigs?:
          | {
              config?: string | undefined
              description?: string | undefined
              metadata?: { buckets?: string[] | undefined } | undefined
              name?: string | undefined
              orgID?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
        variables?:
          | {
              arguments?: VariableProperties | undefined
              description?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
              id?: string | undefined
              kind?: TemplateKind | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              name?: string | undefined
              orgID?: string | undefined
              templateMetaName?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type TemplateExportByID = {
  orgIDs?:
    | {
        orgID?: string | undefined
        resourceFilters?:
          | { byLabel?: string[] | undefined; byResourceKind?: TemplateKind[] | undefined }
          | undefined
      }[]
    | undefined
  resources?: { id: string; kind: TemplateKind; name?: string | undefined } | undefined
  stackID?: string | undefined
}
type TemplateExportByName = {
  orgIDs?:
    | {
        orgID?: string | undefined
        resourceFilters?:
          | { byLabel?: string[] | undefined; byResourceKind?: TemplateKind[] | undefined }
          | undefined
      }[]
    | undefined
  resources?: { kind: TemplateKind; name: string } | undefined
  stackID?: string | undefined
}
type Users = {
  links?: { self?: string | undefined } | undefined
  users?: UserResponse[] | undefined
}
type User = {
  id?: string | undefined
  name: string
  oauthID?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type Variable = {
  arguments: VariableProperties
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Labels | undefined
  links?:
    | { labels?: string | undefined; org?: string | undefined; self?: string | undefined }
    | undefined
  name: string
  orgID: string
  selected?: string[] | undefined
  updatedAt?: string | undefined
}
type Variables = { variables?: Variable[] | undefined }
type WritePrecision = 'ms' | 's' | 'us' | 'ns'
type LineProtocolError = {
  code: 'internal error' | 'not found' | 'conflict' | 'invalid' | 'empty value' | 'unavailable'
  err: string
  line?: number | undefined
  message: string
  op: string
}
type LineProtocolLengthError = { code: 'invalid'; maxLength: number; message: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: { header: { 'Zap-Trace-Span'?: string | undefined } }
        output: Routes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/authorizations': {
      $get:
        | {
            input: {
              query: {
                userID?: string | undefined
                user?: string | undefined
                orgID?: string | undefined
                org?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Authorizations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userID?: string | undefined
                user?: string | undefined
                orgID?: string | undefined
                org?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: AuthorizationPostRequest
            }
            output: Authorization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: AuthorizationPostRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: AuthorizationPostRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorizations/:authID': {
      $delete:
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AuthorizationUpdateRequest }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AuthorizationUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                after?: string | undefined
                org?: string | undefined
                orgID?: string | undefined
                name?: string | undefined
                id?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Buckets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                after?: string | undefined
                org?: string | undefined
                orgID?: string | undefined
                name?: string | undefined
                id?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostBucketRequest
            }
            output: Bucket
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostBucketRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostBucketRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID': {
      $delete:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Bucket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: Bucket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID/labels': {
      $get:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID/labels/:labelID': {
      $delete:
        | {
            input: { param: { bucketID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bucketID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucketID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID/members': {
      $get:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID/members/:userID': {
      $delete:
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID/owners': {
      $get:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceOwner
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucketID/owners/:userID': {
      $delete:
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checks': {
      $get:
        | {
            input: {
              query: { offset?: number | undefined; limit?: number | undefined; orgID: string }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Checks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { offset?: number | undefined; limit?: number | undefined; orgID: string }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: PostCheck }; output: Check; outputFormat: 'json'; status: 201 }
        | { input: { json: PostCheck }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/checks/:checkID': {
      $delete:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Check
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CheckPatch }
            output: Check
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CheckPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CheckPatch }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Check }
            output: Check
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Check }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Check }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checks/:checkID/labels': {
      $get:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checks/:checkID/labels/:labelID': {
      $delete:
        | {
            input: { param: { checkID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { checkID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { checkID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checks/:checkID/query': {
      $get:
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: FluxResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { checkID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                descending?: boolean | undefined
                owner?: string | undefined
                sortBy?: 'ID' | 'CreatedAt' | 'UpdatedAt' | undefined
                id?: string[] | undefined
                orgID?: string | undefined
                org?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Dashboards
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                descending?: boolean | undefined
                owner?: string | undefined
                sortBy?: 'ID' | 'CreatedAt' | 'UpdatedAt' | undefined
                id?: string[] | undefined
                orgID?: string | undefined
                org?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: CreateDashboardRequest
            }
            output: Dashboard | DashboardWithViewProperties
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: CreateDashboardRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID': {
      $delete:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { dashboardID: string } } & {
              query: { include?: 'properties' | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Dashboard | DashboardWithViewProperties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string } } & {
              query: { include?: 'properties' | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string } } & {
              query: { include?: 'properties' | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & {
              json: {
                cells?: CellWithViewProperties | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: Dashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & {
              json: {
                cells?: CellWithViewProperties | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & {
              json: {
                cells?: CellWithViewProperties | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/cells': {
      $post:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CreateCell }
            output: Cell
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CreateCell }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CreateCell }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Cells }
            output: Dashboard
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Cells }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Cells }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/cells/:cellID': {
      $delete:
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CellUpdate }
            output: Cell
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CellUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: CellUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/cells/:cellID/view': {
      $get:
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: View
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: View }
            output: View
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: View }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string; cellID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: View }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/labels': {
      $get:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/labels/:labelID': {
      $delete:
        | {
            input: { param: { dashboardID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dashboardID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/members': {
      $get:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/members/:userID': {
      $delete:
        | {
            input: { param: { userID: string; dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/owners': {
      $get:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceOwner
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID/owners/:userID': {
      $delete:
        | {
            input: { param: { userID: string; dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; dashboardID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dbrps': {
      $get:
        | {
            input: {
              query: {
                orgID: string
                id?: string | undefined
                bucketID?: string | undefined
                default?: boolean | undefined
                db?: string | undefined
                rp?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: DBRPs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orgID: string
                id?: string | undefined
                bucketID?: string | undefined
                default?: boolean | undefined
                db?: string | undefined
                rp?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orgID: string
                id?: string | undefined
                bucketID?: string | undefined
                default?: boolean | undefined
                db?: string | undefined
                rp?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRP }
            output: DBRP
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRP }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRP }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dbrps/:dbrpID': {
      $delete:
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: DBRP
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: DBRPUpdate }
            output: DBRP
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dbrpID: string } } & { query: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/delete': {
      $post:
        | {
            input: {
              query: {
                org?: string | undefined
                bucket?: string | undefined
                orgID?: string | undefined
                bucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: DeletePredicateRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                org?: string | undefined
                bucket?: string | undefined
                orgID?: string | undefined
                bucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: DeletePredicateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                org?: string | undefined
                bucket?: string | undefined
                orgID?: string | undefined
                bucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: DeletePredicateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                org?: string | undefined
                bucket?: string | undefined
                orgID?: string | undefined
                bucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: DeletePredicateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                org?: string | undefined
                bucket?: string | undefined
                orgID?: string | undefined
                bucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: DeletePredicateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/templates': {
      $get:
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Documents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DocumentCreate }
            output: Document
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DocumentCreate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/templates/:templateID': {
      $delete:
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: DocumentUpdate }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: DocumentUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/templates/:templateID/labels': {
      $get:
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { templateID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/templates/:templateID/labels/:labelID': {
      $delete:
        | {
            input: { param: { templateID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { templateID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/flags': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Flags
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/health': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: HealthCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: HealthCheck
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/labels': {
      $get:
        | {
            input: { query: { orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: LabelCreateRequest }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: LabelCreateRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/labels/:labelID': {
      $delete:
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelUpdate }
            output: LabelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/me': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/me/password': {
      $put:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PasswordResetBody
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PasswordResetBody
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationEndpoints': {
      $get:
        | {
            input: {
              query: { offset?: number | undefined; limit?: number | undefined; orgID: string }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: NotificationEndpoints
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { offset?: number | undefined; limit?: number | undefined; orgID: string }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: PostNotificationEndpoint }
            output: NotificationEndpoint
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PostNotificationEndpoint }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationEndpoints/:endpointID': {
      $delete:
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: NotificationEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationEndpointUpdate }
            output: NotificationEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationEndpointUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationEndpointUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationEndpoint }
            output: NotificationEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationEndpoint }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationEndpoint }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationEndpoints/:endpointID/labels': {
      $get:
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { endpointID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationEndpoints/:endpointID/labels/:labelID': {
      $delete:
        | {
            input: { param: { endpointID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { endpointID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpointID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationRules': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orgID: string
                checkID?: string | undefined
                tag?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: NotificationRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orgID: string
                checkID?: string | undefined
                tag?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: PostNotificationRule }
            output: NotificationRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PostNotificationRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationRules/:ruleID': {
      $delete:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: NotificationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationRuleUpdate }
            output: NotificationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationRuleUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationRuleUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationRule }
            output: NotificationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: NotificationRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationRules/:ruleID/labels': {
      $get:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationRules/:ruleID/labels/:labelID': {
      $delete:
        | {
            input: { param: { ruleID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ruleID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notificationRules/:ruleID/query': {
      $get:
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: FluxResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                descending?: boolean | undefined
                org?: string | undefined
                orgID?: string | undefined
                userID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Organizations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                descending?: boolean | undefined
                org?: string | undefined
                orgID?: string | undefined
                userID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostOrganizationRequest
            }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostOrganizationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID': {
      $delete:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchOrganizationRequest }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchOrganizationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID/members': {
      $get:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID/members/:userID': {
      $delete:
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID/owners': {
      $get:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceOwner
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID/owners/:userID': {
      $delete:
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID/secrets': {
      $get:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: SecretKeysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Secrets }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Secrets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orgs/:orgID/secrets/delete': {
      $post:
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: SecretKeys }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: SecretKeys }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query': {
      $post:
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | InfluxQLQuery | string }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | InfluxQLQuery | string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | InfluxQLQuery | string }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | InfluxQLQuery | string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query/analyze': {
      $post:
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Type'?: 'application/json' | undefined
              }
            } & { json: Query }
            output: AnalyzeQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Type'?: 'application/json' | undefined
              }
            } & { json: Query }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query/ast': {
      $post:
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Type'?: 'application/json' | undefined
              }
            } & { json: LanguageRequest }
            output: ASTResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Type'?: 'application/json' | undefined
              }
            } & { json: LanguageRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query/suggestions': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: FluxSuggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query/suggestions/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: FluxSuggestion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ready': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Ready
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            id?: string[] | undefined
            orgID?: string | undefined
            org?: string | undefined
          }
        } & { header: { 'Zap-Trace-Span'?: string | undefined } }
        output: ScraperTargetResponses
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ScraperTargetRequest
            }
            output: ScraperTargetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ScraperTargetRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID': {
      $delete:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ScraperTargetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: ScraperTargetRequest }
            output: ScraperTargetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: ScraperTargetRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID/labels': {
      $get:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID/labels/:labelID': {
      $delete:
        | {
            input: { param: { scraperTargetID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { scraperTargetID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scraperTargetID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID/members': {
      $get:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID/members/:userID': {
      $delete:
        | {
            input: { param: { userID: string; scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID/owners': {
      $get:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceOwner
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrapers/:scraperTargetID/owners/:userID': {
      $delete:
        | {
            input: { param: { userID: string; scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; scraperTargetID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setup': {
      $get: {
        input: { header: { 'Zap-Trace-Span'?: string | undefined } }
        output: IsOnboarding
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: OnboardingRequest
            }
            output: OnboardingResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: OnboardingRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/signin': {
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/signout': {
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sources': {
      $get:
        | {
            input: { query: { org?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Sources
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: Source }
            output: Source
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: Source }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sources/:sourceID': {
      $delete:
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Source
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Source }
            output: Source
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Source }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Source }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sources/:sourceID/buckets': {
      $get:
        | {
            input: { param: { sourceID: string } } & { query: { org?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Buckets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceID: string } } & { query: { org?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceID: string } } & { query: { org?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sources/:sourceID/health': {
      $get:
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: HealthCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: HealthCheck
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { sourceID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stacks': {
      $get:
        | {
            input: {
              query: { orgID: string; name?: string | undefined; stackID?: string | undefined }
            }
            output: { stacks?: Stack[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { orgID: string; name?: string | undefined; stackID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                name?: string | undefined
                orgID?: string | undefined
                urls?: string[] | undefined
              }
            }
            output: Stack
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                description?: string | undefined
                name?: string | undefined
                orgID?: string | undefined
                urls?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stacks/:stack_id': {
      $delete:
        | {
            input: { param: { stack_id: string } } & { query: { orgID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { stack_id: string } } & { query: { orgID: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { stack_id: string } }
            output: Stack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stack_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { stack_id: string } } & {
              json: {
                additionalResources?:
                  | { kind: string; resourceID: string; templateMetaName?: string | undefined }[]
                  | undefined
                description?: (string | null) | undefined
                name?: (string | null) | undefined
                templateURLs?: (string[] | null) | undefined
              }
            }
            output: Stack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stack_id: string } } & {
              json: {
                additionalResources?:
                  | { kind: string; resourceID: string; templateMetaName?: string | undefined }[]
                  | undefined
                description?: (string | null) | undefined
                name?: (string | null) | undefined
                templateURLs?: (string[] | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stacks/:stack_id/uninstall': {
      $post:
        | {
            input: { param: { stack_id: string } }
            output: Stack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stack_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                after?: string | undefined
                user?: string | undefined
                org?: string | undefined
                orgID?: string | undefined
                status?: 'active' | 'inactive' | undefined
                limit?: number | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Tasks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                after?: string | undefined
                user?: string | undefined
                org?: string | undefined
                orgID?: string | undefined
                status?: 'active' | 'inactive' | undefined
                limit?: number | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: TaskCreateRequest
            }
            output: Task
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: TaskCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID': {
      $delete:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TaskUpdateRequest }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TaskUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/labels': {
      $get:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/labels/:labelID': {
      $delete:
        | {
            input: { param: { taskID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { taskID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/logs': {
      $get:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Logs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/members': {
      $get:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/members/:userID': {
      $delete:
        | {
            input: { param: { userID: string; taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/owners': {
      $get:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceOwner
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/owners/:userID': {
      $delete:
        | {
            input: { param: { userID: string; taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/runs': {
      $get:
        | {
            input: { param: { taskID: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                afterTime?: string | undefined
                beforeTime?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Runs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                afterTime?: string | undefined
                beforeTime?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RunManually }
            output: Run
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RunManually }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/runs/:runID': {
      $delete:
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Run
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/runs/:runID/logs': {
      $get:
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Logs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:taskID/runs/:runID/retry': {
      $post:
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Run
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegraf/plugins': {
      $get:
        | {
            input: { query: { type?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: TelegrafPlugins
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs': {
      $get:
        | {
            input: { query: { orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Telegrafs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: TelegrafRequest }
            output: Telegraf
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: TelegrafRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID': {
      $delete:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { telegrafID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                Accept?:
                  | 'application/toml'
                  | 'application/json'
                  | 'application/octet-stream'
                  | undefined
              }
            }
            output: Telegraf
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                Accept?:
                  | 'application/toml'
                  | 'application/json'
                  | 'application/octet-stream'
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                Accept?:
                  | 'application/toml'
                  | 'application/json'
                  | 'application/octet-stream'
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                Accept?:
                  | 'application/toml'
                  | 'application/json'
                  | 'application/octet-stream'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TelegrafRequest }
            output: Telegraf
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TelegrafRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID/labels': {
      $get:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID/labels/:labelID': {
      $delete:
        | {
            input: { param: { telegrafID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { telegrafID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { telegrafID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID/members': {
      $get:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID/members/:userID': {
      $delete:
        | {
            input: { param: { userID: string; telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID/owners': {
      $get:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: ResourceOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: ResourceOwner
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID/owners/:userID': {
      $delete:
        | {
            input: { param: { userID: string; telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string; telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/templates/apply': {
      $post:
        | {
            input: { json: TemplateApply }
            output: TemplateSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplateApply }
            output: TemplateSummary
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: TemplateApply }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/templates/export': {
      $post:
        | {
            input: { json: TemplateExportByID | TemplateExportByName }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplateExportByID | TemplateExportByName }
            output: Template
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TemplateExportByID | TemplateExportByName }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                after?: string | undefined
                name?: string | undefined
                id?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Users
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                after?: string | undefined
                name?: string | undefined
                id?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: User }
            output: UserResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:userID': {
      $delete:
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: User }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:userID/password': {
      $post:
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PasswordResetBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PasswordResetBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/variables': {
      $get:
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Variables
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: Variable }
            output: Variable
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/variables/:variableID': {
      $delete:
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Variable }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Variable }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/variables/:variableID/labels': {
      $get:
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: LabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { variableID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/variables/:variableID/labels/:labelID': {
      $delete:
        | {
            input: { param: { variableID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variableID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { variableID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/write': {
      $post:
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: LineProtocolError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: LineProtocolLengthError
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              query: {
                org: string
                orgID?: string | undefined
                bucket: string
                precision?: WritePrecision | undefined
              }
            } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?:
                  | 'text/plain'
                  | 'text/plain; charset=utf-8'
                  | 'application/vnd.influx.arrow'
                  | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
