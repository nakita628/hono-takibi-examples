type Error = {
  code:
    | 'internal error'
    | 'not implemented'
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
  message?: string | undefined
  op?: string | undefined
  err?: string | undefined
}
type Routes = {
  authorizations?: string | undefined
  backup?: string | undefined
  buckets?: string | undefined
  dashboards?: string | undefined
  external?: { statusFeed?: string | undefined } | undefined
  variables?: string | undefined
  me?: string | undefined
  notificationRules?: string | undefined
  notificationEndpoints?: string | undefined
  flags?: string | undefined
  invocableScripts?: string | undefined
  labels?: string | undefined
  orgs?: string | undefined
  query?:
    | {
        self?: string | undefined
        ast?: string | undefined
        analyze?: string | undefined
        suggestions?: string | undefined
      }
    | undefined
  restore?: string | undefined
  setup?: string | undefined
  signin?: string | undefined
  signout?: string | undefined
  sources?: string | undefined
  scrapers?: string | undefined
  swagger?: string | undefined
  system?:
    | {
        metrics?: string | undefined
        debug?: string | undefined
        health?: string | undefined
        ready?: string | undefined
      }
    | undefined
  tasks?: string | undefined
  checks?: string | undefined
  telegraf?: { plugins?: string | undefined } | undefined
  telegrafs?: string | undefined
  plugins?: string | undefined
  users?: string | undefined
  write?: string | undefined
  delete?: string | undefined
}
type Link = string
type Links = { next?: Link | undefined; self: Link; prev?: Link | undefined }
type DBRP = {
  id: string
  orgID: string
  bucketID: string
  database: string
  retention_policy: string
  default: boolean
  virtual?: boolean | undefined
  links?: Links | undefined
}
type DBRPs = { content?: DBRP[] | undefined }
type DBRPCreate = {
  org?: string | undefined
  orgID?: string | undefined
  bucketID: string
  database: string
  retention_policy: string
  default?: boolean | undefined
}
type DBRPGet = { content?: DBRP | undefined }
type DBRPUpdate = { retention_policy?: string | undefined; default?: boolean | undefined }
type TelegrafPlugin = {
  type?: string | undefined
  name?: string | undefined
  description?: string | undefined
  config?: string | undefined
}
type TelegrafPlugins = {
  version?: string | undefined
  os?: string | undefined
  plugins?: TelegrafPlugin[] | undefined
}
type Label = {
  id?: string | undefined
  orgID?: string | undefined
  name?: string | undefined
  properties?: { [x: string]: string } | undefined
}
type Labels = Label[]
type Telegraf = {
  name?: string | undefined
  description?: string | undefined
  metadata?: { buckets?: string[] | undefined } | undefined
  config?: string | undefined
  orgID?: string | undefined
  id?: string | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
      }
    | undefined
  labels?: Labels | undefined
}
type Telegrafs = { configurations?: Telegraf[] | undefined }
type TelegrafPluginRequest = {
  name?: string | undefined
  description?: string | undefined
  plugins?:
    | {
        type?: string | undefined
        name?: string | undefined
        alias?: string | undefined
        description?: string | undefined
        config?: string | undefined
      }[]
    | undefined
  metadata?: { buckets?: string[] | undefined } | undefined
  config?: string | undefined
  orgID?: string | undefined
}
type LabelsResponse = { labels?: Labels | undefined; links?: Links | undefined }
type LabelMapping = { labelID: string }
type LabelResponse = { label?: Label | undefined; links?: Links | undefined }
type ResourceMember = {
  id?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  links?: { self?: string | undefined } | undefined
  role?: 'member' | undefined
}
type ResourceMembers = {
  links?: { self?: string | undefined } | undefined
  users?: ResourceMember[] | undefined
}
type AddResourceMemberRequestBody = { id: string; name?: string | undefined }
type ResourceOwner = {
  id?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  links?: { self?: string | undefined } | undefined
  role?: 'owner' | undefined
}
type ResourceOwners = {
  links?: { self?: string | undefined } | undefined
  users?: ResourceOwner[] | undefined
}
type WritePrecision = 'ms' | 's' | 'us' | 'ns'
type LineProtocolError = {
  code: 'internal error' | 'not found' | 'conflict' | 'invalid' | 'empty value' | 'unavailable'
  message?: string | undefined
  op?: string | undefined
  err?: string | undefined
  line?: number | undefined
}
type LineProtocolLengthError = { code: 'invalid'; message: string }
type DeletePredicateRequest = { start: string; stop: string; predicate?: string | undefined }
type LabelCreateRequest = {
  orgID: string
  name: string
  properties?: { [x: string]: string } | undefined
}
type LabelUpdate = { name?: string | undefined; properties?: { [x: string]: string } | undefined }
type Cell = {
  id?: string | undefined
  links?: { self?: string | undefined; view?: string | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  w?: number | undefined
  h?: number | undefined
  viewID?: string | undefined
}
type Cells = Cell[]
type Dashboard = {
  orgID: string
  name: string
  description?: string | undefined
  links?:
    | {
        self?: Link | undefined
        cells?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        labels?: Link | undefined
        org?: Link | undefined
      }
    | undefined
  id?: string | undefined
  meta?: { createdAt?: string | undefined; updatedAt?: string | undefined } | undefined
  cells?: Cells | undefined
  labels?: Labels | undefined
}
type QueryEditMode = 'builder' | 'advanced'
type BuilderAggregateFunctionType = 'filter' | 'group'
type BuilderTagsType = {
  key?: string | undefined
  values?: string[] | undefined
  aggregateFunctionType?: BuilderAggregateFunctionType | undefined
}
type BuilderFunctionsType = { name?: string | undefined }
type BuilderConfig = {
  buckets?: string[] | undefined
  tags?: BuilderTagsType[] | undefined
  functions?: BuilderFunctionsType[] | undefined
  aggregateWindow?: { period?: string | undefined; fillValues?: boolean | undefined } | undefined
}
type DashboardQuery = {
  text?: string | undefined
  editMode?: QueryEditMode | undefined
  name?: string | undefined
  builderConfig?: BuilderConfig | undefined
}
type DashboardColor = {
  id: string
  type: 'min' | 'max' | 'threshold' | 'scale' | 'text' | 'background'
  hex: string
  name: string
  value: number
}
type AxisScale = 'log' | 'linear'
type Axis = {
  bounds?: string[] | undefined
  label?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
  base?: '' | '2' | '10' | undefined
  scale?: AxisScale | undefined
}
type Axes = { x: Axis; y: Axis }
type StaticLegend = {
  colorizeRows?: boolean | undefined
  heightRatio?: number | undefined
  show?: boolean | undefined
  opacity?: number | undefined
  orientationThreshold?: number | undefined
  valueAxis?: string | undefined
  widthRatio?: number | undefined
}
type DecimalPlaces = { isEnforced?: boolean | undefined; digits?: number | undefined }
type LinePlusSingleStatProperties = {
  adaptiveZoomHide?: boolean | undefined
  timeFormat?: string | undefined
  type: 'line-plus-single-stat'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  axes: Axes
  staticLegend?: StaticLegend | undefined
  xColumn?: string | undefined
  generateXAxisTicks?: string[] | undefined
  xTotalTicks?: number | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  yColumn?: string | undefined
  generateYAxisTicks?: string[] | undefined
  yTotalTicks?: number | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  shadeBelow?: boolean | undefined
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  position: 'overlaid' | 'stacked'
  prefix: string
  suffix: string
  decimalPlaces: DecimalPlaces
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type ColorMapping = { [x: string]: string }
type XYGeom = 'line' | 'step' | 'stacked' | 'bar' | 'monotoneX' | 'stepBefore' | 'stepAfter'
type XYViewProperties = {
  adaptiveZoomHide?: boolean | undefined
  timeFormat?: string | undefined
  type: 'xy'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  colorMapping?: ColorMapping | undefined
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  axes: Axes
  staticLegend?: StaticLegend | undefined
  xColumn?: string | undefined
  generateXAxisTicks?: string[] | undefined
  xTotalTicks?: number | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  yColumn?: string | undefined
  generateYAxisTicks?: string[] | undefined
  yTotalTicks?: number | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  shadeBelow?: boolean | undefined
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  position: 'overlaid' | 'stacked'
  geom: XYGeom
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type SingleStatViewProperties = {
  type: 'single-stat'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  prefix: string
  tickPrefix: string
  suffix: string
  tickSuffix: string
  staticLegend?: StaticLegend | undefined
  decimalPlaces: DecimalPlaces
}
type HistogramViewProperties = {
  type: 'histogram'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  fillColumns: string[]
  xDomain: number[]
  xAxisLabel: string
  position: 'overlaid' | 'stacked'
  binCount: number
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type GaugeViewProperties = {
  type: 'gauge'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  prefix: string
  tickPrefix: string
  suffix: string
  tickSuffix: string
  decimalPlaces: DecimalPlaces
}
type RenamableField = {
  internalName?: string | undefined
  displayName?: string | undefined
  visible?: boolean | undefined
}
type TableViewProperties = {
  type: 'table'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  tableOptions: {
    verticalTimeAxis?: boolean | undefined
    sortBy?: RenamableField | undefined
    wrapping?: 'truncate' | 'wrap' | 'single-line' | undefined
    fixFirstColumn?: boolean | undefined
  }
  fieldOptions: RenamableField[]
  timeFormat: string
  decimalPlaces: DecimalPlaces
}
type SimpleTableViewProperties = {
  type: 'simple-table'
  showAll: boolean
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
}
type MarkdownViewProperties = { type: 'markdown'; shape: 'chronograf-v2'; note: string }
type Check = {}
type CheckViewProperties = {
  adaptiveZoomHide?: boolean | undefined
  type: 'check'
  shape: 'chronograf-v2'
  checkID: string
  check?: Check | undefined
  queries: DashboardQuery[]
  colors: DashboardColor[]
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type ScatterViewProperties = {
  adaptiveZoomHide?: boolean | undefined
  timeFormat?: string | undefined
  type: 'scatter'
  queries: DashboardQuery[]
  colors: string[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  generateXAxisTicks?: string[] | undefined
  xTotalTicks?: number | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  yColumn: string
  generateYAxisTicks?: string[] | undefined
  yTotalTicks?: number | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  fillColumns: string[]
  symbolColumns: string[]
  xDomain: number[]
  yDomain: number[]
  xAxisLabel: string
  yAxisLabel: string
  xPrefix: string
  xSuffix: string
  yPrefix: string
  ySuffix: string
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type HeatmapViewProperties = {
  adaptiveZoomHide?: boolean | undefined
  timeFormat?: string | undefined
  type: 'heatmap'
  queries: DashboardQuery[]
  colors: string[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  generateXAxisTicks?: string[] | undefined
  xTotalTicks?: number | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  yColumn: string
  generateYAxisTicks?: string[] | undefined
  yTotalTicks?: number | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  xDomain: number[]
  yDomain: number[]
  xAxisLabel: string
  yAxisLabel: string
  xPrefix: string
  xSuffix: string
  yPrefix: string
  ySuffix: string
  binSize: number
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type MosaicViewProperties = {
  timeFormat?: string | undefined
  type: 'mosaic'
  queries: DashboardQuery[]
  colors: string[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  generateXAxisTicks?: string[] | undefined
  xTotalTicks?: number | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  yLabelColumnSeparator?: string | undefined
  yLabelColumns?: string[] | undefined
  ySeriesColumns: string[]
  fillColumns: string[]
  xDomain: number[]
  yDomain: number[]
  xAxisLabel: string
  yAxisLabel: string
  xPrefix: string
  xSuffix: string
  yPrefix: string
  ySuffix: string
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type BandViewProperties = {
  adaptiveZoomHide?: boolean | undefined
  timeFormat?: string | undefined
  type: 'band'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  axes: Axes
  staticLegend?: StaticLegend | undefined
  xColumn?: string | undefined
  generateXAxisTicks?: string[] | undefined
  xTotalTicks?: number | undefined
  xTickStart?: number | undefined
  xTickStep?: number | undefined
  yColumn?: string | undefined
  generateYAxisTicks?: string[] | undefined
  yTotalTicks?: number | undefined
  yTickStart?: number | undefined
  yTickStep?: number | undefined
  upperColumn?: string | undefined
  mainColumn?: string | undefined
  lowerColumn?: string | undefined
  hoverDimension?: 'auto' | 'x' | 'y' | 'xy' | undefined
  geom: XYGeom
  legendColorizeRows?: boolean | undefined
  legendHide?: boolean | undefined
  legendOpacity?: number | undefined
  legendOrientationThreshold?: number | undefined
}
type LatLonColumn = { key: string; column: string }
type LatLonColumns = { lat: LatLonColumn; lon: LatLonColumn }
type GeoCircleViewLayer = {
  type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap'
  radiusField: string
  radiusDimension: Axis
  colorField: string
  colorDimension: Axis
  colors: DashboardColor[]
  radius?: number | undefined
  interpolateColors?: boolean | undefined
}
type GeoHeatMapViewLayer = {
  type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap'
  intensityField: string
  intensityDimension: Axis
  radius: number
  blur: number
  colors: DashboardColor[]
}
type GeoPointMapViewLayer = {
  type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap'
  colorField: string
  colorDimension: Axis
  colors: DashboardColor[]
  isClustered?: boolean | undefined
  tooltipColumns?: string[] | undefined
}
type GeoTrackMapViewLayer = { type: 'heatmap' | 'circleMap' | 'pointMap' | 'trackMap' }
type GeoViewLayer =
  | GeoCircleViewLayer
  | GeoHeatMapViewLayer
  | GeoPointMapViewLayer
  | GeoTrackMapViewLayer
type GeoViewProperties = {
  type: 'geo'
  queries: DashboardQuery[]
  shape: 'chronograf-v2'
  center: { lat: number; lon: number }
  zoom: number
  allowPanAndZoom: boolean
  detectCoordinateFields: boolean
  useS2CellID?: boolean | undefined
  s2Column?: string | undefined
  latLonColumns?: LatLonColumns | undefined
  mapStyle?: string | undefined
  note: string
  showNoteWhenEmpty: boolean
  colors?: DashboardColor[] | undefined
  layers: GeoViewLayer[]
}
type ViewProperties =
  | LinePlusSingleStatProperties
  | XYViewProperties
  | SingleStatViewProperties
  | HistogramViewProperties
  | GaugeViewProperties
  | TableViewProperties
  | SimpleTableViewProperties
  | MarkdownViewProperties
  | CheckViewProperties
  | ScatterViewProperties
  | HeatmapViewProperties
  | MosaicViewProperties
  | BandViewProperties
  | GeoViewProperties
type CellWithViewProperties = {
  id?: string | undefined
  links?: { self?: string | undefined; view?: string | undefined } | undefined
  x?: number | undefined
  y?: number | undefined
  w?: number | undefined
  h?: number | undefined
  viewID?: string | undefined
  name?: string | undefined
  properties?: ViewProperties | undefined
}
type CellsWithViewProperties = CellWithViewProperties[]
type DashboardWithViewProperties = {
  orgID: string
  name: string
  description?: string | undefined
  links?:
    | {
        self?: Link | undefined
        cells?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        labels?: Link | undefined
        org?: Link | undefined
      }
    | undefined
  id?: string | undefined
  meta?: { createdAt?: string | undefined; updatedAt?: string | undefined } | undefined
  cells?: CellsWithViewProperties | undefined
  labels?: Labels | undefined
}
type CreateCell = {
  name?: string | undefined
  x?: number | undefined
  y?: number | undefined
  w?: number | undefined
  h?: number | undefined
  usingView?: string | undefined
}
type CellUpdate = {
  x?: number | undefined
  y?: number | undefined
  w?: number | undefined
  h?: number | undefined
}
type View = {
  links?: { self?: string | undefined } | undefined
  id?: string | undefined
  name: string
  properties: ViewProperties
}
type LanguageRequest = { query: string }
type NodeType = string
type Identifier = { type?: NodeType | undefined; name?: string | undefined }
type PackageClause = { type?: NodeType | undefined; name?: Identifier | undefined }
type StringLiteral = { type?: NodeType | undefined; value?: string | undefined }
type ImportDeclaration = {
  type?: NodeType | undefined
  as?: Identifier | undefined
  path?: StringLiteral | undefined
}
type BadStatement = { type?: NodeType | undefined; text?: string | undefined }
type ArrayExpression = { type?: NodeType | undefined; elements?: Expression[] | undefined }
type DictItem = {
  type?: NodeType | undefined
  key?: Expression | undefined
  val?: Expression | undefined
}
type DictExpression = { type?: NodeType | undefined; elements?: DictItem[] | undefined }
type PropertyKey = Identifier | StringLiteral
type Property = {
  type?: NodeType | undefined
  key?: PropertyKey | undefined
  value?: Expression | undefined
}
type Block = { type?: NodeType | undefined; body?: Statement[] | undefined }
type Node = Expression | Block
type FunctionExpression = {
  type?: NodeType | undefined
  params?: Property[] | undefined
  body?: Node | undefined
}
type BinaryExpression = {
  type?: NodeType | undefined
  operator?: string | undefined
  left?: Expression | undefined
  right?: Expression | undefined
}
type CallExpression = {
  type?: NodeType | undefined
  callee?: Expression | undefined
  arguments?: Expression[] | undefined
}
type ConditionalExpression = {
  type?: NodeType | undefined
  test?: Expression | undefined
  alternate?: Expression | undefined
  consequent?: Expression | undefined
}
type LogicalExpression = {
  type?: NodeType | undefined
  operator?: string | undefined
  left?: Expression | undefined
  right?: Expression | undefined
}
type MemberExpression = {
  type?: NodeType | undefined
  object?: Expression | undefined
  property?: PropertyKey | undefined
}
type IndexExpression = {
  type?: NodeType | undefined
  array?: Expression | undefined
  index?: Expression | undefined
}
type ObjectExpression = { type?: NodeType | undefined; properties?: Property[] | undefined }
type ParenExpression = { type?: NodeType | undefined; expression?: Expression | undefined }
type PipeExpression = {
  type?: NodeType | undefined
  argument?: Expression | undefined
  call?: CallExpression | undefined
}
type UnaryExpression = {
  type?: NodeType | undefined
  operator?: string | undefined
  argument?: Expression | undefined
}
type BooleanLiteral = { type?: NodeType | undefined; value?: boolean | undefined }
type DateTimeLiteral = { type?: NodeType | undefined; value?: string | undefined }
type Duration = {
  type?: NodeType | undefined
  magnitude?: number | undefined
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
  type?: NodeType | undefined
  id?: Identifier | undefined
  init?: Expression | undefined
}
type MemberAssignment = {
  type?: NodeType | undefined
  member?: MemberExpression | undefined
  init?: Expression | undefined
}
type ExpressionStatement = { type?: NodeType | undefined; expression?: Expression | undefined }
type ReturnStatement = { type?: NodeType | undefined; argument?: Expression | undefined }
type OptionStatement = {
  type?: NodeType | undefined
  assignment?: VariableAssignment | MemberAssignment | undefined
}
type BuiltinStatement = { type?: NodeType | undefined; id?: Identifier | undefined }
type TestStatement = { type?: NodeType | undefined; assignment?: VariableAssignment | undefined }
type Statement =
  | BadStatement
  | VariableAssignment
  | MemberAssignment
  | ExpressionStatement
  | ReturnStatement
  | OptionStatement
  | BuiltinStatement
  | TestStatement
type File2 = {
  type?: NodeType | undefined
  name?: string | undefined
  package?: PackageClause | undefined
  imports?: ImportDeclaration[] | undefined
  body?: Statement[] | undefined
}
type Package = {
  type?: NodeType | undefined
  path?: string | undefined
  package?: string | undefined
  files?: File2[] | undefined
}
type ASTResponse = { ast?: Package | undefined }
type FluxSuggestion = { name?: string | undefined; params?: { [x: string]: string } | undefined }
type FluxSuggestions = { funcs?: FluxSuggestion[] | undefined }
type Dialect = {
  header?: boolean | undefined
  delimiter?: string | undefined
  annotations?: ('group' | 'datatype' | 'default')[] | undefined
  commentPrefix?: string | undefined
  dateTimeFormat?: 'RFC3339' | 'RFC3339Nano' | undefined
}
type Query = {
  extern?: File2 | undefined
  query: string
  type?: 'flux' | undefined
  params?: { [x: string]: unknown } | undefined
  dialect?: Dialect | undefined
  now?: string | undefined
}
type AnalyzeQueryResponse = {
  errors?:
    | {
        line?: number | undefined
        column?: number | undefined
        character?: number | undefined
        message?: string | undefined
      }[]
    | undefined
}
type SchemaType = 'implicit' | 'explicit'
type RetentionRule = {
  type?: 'expire' | undefined
  everySeconds: bigint
  shardGroupDurationSeconds?: bigint | undefined
}
type RetentionRules = RetentionRule[]
type Bucket = {
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
  id?: string | undefined
  type?: 'user' | 'system' | undefined
  name: string
  description?: string | undefined
  orgID?: string | undefined
  rp?: string | undefined
  schemaType?: SchemaType | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  retentionRules: RetentionRules
  labels?: Labels | undefined
}
type Buckets = { links?: Links | undefined; buckets?: Bucket[] | undefined }
type PostBucketRequest = {
  orgID: string
  name: string
  description?: string | undefined
  rp?: string | undefined
  retentionRules?: RetentionRules | undefined
  schemaType?: SchemaType | undefined
}
type PatchRetentionRule = {
  type?: 'expire' | undefined
  everySeconds: bigint
  shardGroupDurationSeconds?: bigint | undefined
}
type PatchRetentionRules = PatchRetentionRule[]
type PatchBucketRequest = {
  name?: string | undefined
  description?: string | undefined
  retentionRules?: PatchRetentionRules | undefined
}
type Organization = {
  links?:
    | {
        self?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        labels?: Link | undefined
        secrets?: Link | undefined
        buckets?: Link | undefined
        tasks?: Link | undefined
        dashboards?: Link | undefined
      }
    | undefined
  id?: string | undefined
  name: string
  defaultStorageType?: 'tsm' | 'iox' | undefined
  description?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type Organizations = { links?: Links | undefined; orgs?: Organization[] | undefined }
type PostOrganizationRequest = { name: string; description?: string | undefined }
type PatchOrganizationRequest = { name?: string | undefined; description?: string | undefined }
type SecretKeysResponse = {
  secrets?: string[] | undefined
  links?: { self?: string | undefined; org?: string | undefined } | undefined
}
type Secrets = { [x: string]: string }
type SecretKeys = { secrets?: string[] | undefined }
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
  id?: string | undefined
  orgID?: string | undefined
  createdAt?: string | undefined
  events?:
    | {
        eventType?: string | undefined
        name?: string | undefined
        description?: string | undefined
        sources?: string[] | undefined
        resources?:
          | {
              apiVersion?: string | undefined
              resourceID?: string | undefined
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              associations?:
                | { kind?: TemplateKind | undefined; metaName?: string | undefined }[]
                | undefined
              links?: { self?: string | undefined } | undefined
            }[]
          | undefined
        urls?: string[] | undefined
        updatedAt?: string | undefined
      }[]
    | undefined
}
type Template = {
  apiVersion?: string | undefined
  kind?: TemplateKind | undefined
  metadata?: { name?: string | undefined } | undefined
  spec?: { [x: string]: unknown } | undefined
}[]
type TemplateApply = {
  dryRun?: boolean | undefined
  orgID?: string | undefined
  stackID?: string | undefined
  template?:
    | {
        contentType?: string | undefined
        sources?: string[] | undefined
        contents?: Template | undefined
      }
    | undefined
  templates?:
    | {
        contentType?: string | undefined
        sources?: string[] | undefined
        contents?: Template | undefined
      }[]
    | undefined
  envRefs?: { [x: string]: string | number | number | boolean } | undefined
  secrets?: { [x: string]: string } | undefined
  remotes?: { url: string; contentType?: string | undefined }[] | undefined
  actions?:
    | (
        | { action?: 'skipKind' | undefined; properties?: { kind: TemplateKind } | undefined }
        | {
            action?: 'skipResource' | undefined
            properties?: { kind: TemplateKind; resourceTemplateName: string } | undefined
          }
      )[]
    | undefined
}
type TemplateEnvReferences = {
  resourceField: string
  envRefKey: string
  value?: (string | null) | (number | null) | (number | null) | (boolean | null) | undefined
  defaultValue?: (string | null) | (number | null) | (number | null) | (boolean | null) | undefined
}[]
type TemplateSummaryLabel = {
  id?: string | undefined
  orgID?: string | undefined
  kind?: TemplateKind | undefined
  templateMetaName?: string | undefined
  name?: string | undefined
  properties?: { color?: string | undefined; description?: string | undefined } | undefined
  envReferences?: TemplateEnvReferences | undefined
}
type TemplateChart = {
  xPos?: number | undefined
  yPos?: number | undefined
  height?: number | undefined
  width?: number | undefined
  properties?: ViewProperties | undefined
}
type QueryVariableProperties = {
  type?: 'query' | undefined
  values?: { query?: string | undefined; language?: string | undefined } | undefined
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
type TaskStatusType = 'active' | 'inactive'
type CheckStatusLevel = 'UNKNOWN' | 'OK' | 'INFO' | 'CRIT' | 'WARN'
type DeadmanCheck = {
  id?: string | undefined
  name: string
  orgID: string
  taskID?: string | undefined
  ownerID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  query: DashboardQuery
  status?: TaskStatusType | undefined
  description?: string | undefined
  latestCompleted?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  lastRunError?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        query?: Link | undefined
      }
    | undefined
  type: 'deadman'
  timeSince?: string | undefined
  staleTime?: string | undefined
  reportZero?: boolean | undefined
  level?: CheckStatusLevel | undefined
  every?: string | undefined
  offset?: string | undefined
  tags?: { key?: string | undefined; value?: string | undefined }[] | undefined
  statusMessageTemplate?: string | undefined
}
type GreaterThreshold = {
  level?: CheckStatusLevel | undefined
  allValues?: boolean | undefined
  type: 'greater'
  value: number
}
type LesserThreshold = {
  level?: CheckStatusLevel | undefined
  allValues?: boolean | undefined
  type: 'lesser'
  value: number
}
type RangeThreshold = {
  level?: CheckStatusLevel | undefined
  allValues?: boolean | undefined
  type: 'range'
  min: number
  max: number
  within: boolean
}
type Threshold = GreaterThreshold | LesserThreshold | RangeThreshold
type ThresholdCheck = {
  id?: string | undefined
  name: string
  orgID: string
  taskID?: string | undefined
  ownerID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  query: DashboardQuery
  status?: TaskStatusType | undefined
  description?: string | undefined
  latestCompleted?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  lastRunError?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        query?: Link | undefined
      }
    | undefined
  type: 'threshold'
  thresholds?: Threshold[] | undefined
  every?: string | undefined
  offset?: string | undefined
  tags?: { key?: string | undefined; value?: string | undefined }[] | undefined
  statusMessageTemplate?: string | undefined
}
type CustomCheck = {
  id?: string | undefined
  name: string
  orgID: string
  taskID?: string | undefined
  ownerID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  query: DashboardQuery
  status?: TaskStatusType | undefined
  description?: string | undefined
  latestCompleted?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  lastRunError?: string | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        query?: Link | undefined
      }
    | undefined
  type: 'custom'
}
type CheckDiscriminator = DeadmanCheck | ThresholdCheck | CustomCheck
type NotificationEndpointType = 'slack' | 'pagerduty' | 'http' | 'telegram'
type SlackNotificationEndpoint = {
  id?: string | undefined
  orgID?: string | undefined
  userID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  description?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
      }
    | undefined
  type: NotificationEndpointType
  url?: string | undefined
  token?: string | undefined
}
type PagerDutyNotificationEndpoint = {
  id?: string | undefined
  orgID?: string | undefined
  userID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  description?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
      }
    | undefined
  type: NotificationEndpointType
  clientURL?: string | undefined
  routingKey: string
}
type HTTPNotificationEndpoint = {
  id?: string | undefined
  orgID?: string | undefined
  userID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  description?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
      }
    | undefined
  type: NotificationEndpointType
  url: string
  username?: string | undefined
  password?: string | undefined
  token?: string | undefined
  method: 'POST' | 'GET' | 'PUT'
  authMethod: 'none' | 'basic' | 'bearer'
  contentTemplate?: string | undefined
  headers?: { [x: string]: string } | undefined
}
type TelegramNotificationEndpoint = {
  id?: string | undefined
  orgID?: string | undefined
  userID?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  description?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  labels?: Labels | undefined
  links?:
    | {
        self?: Link | undefined
        labels?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
      }
    | undefined
  type: NotificationEndpointType
  token: string
  channel: string
}
type NotificationEndpointDiscriminator =
  | SlackNotificationEndpoint
  | PagerDutyNotificationEndpoint
  | HTTPNotificationEndpoint
  | TelegramNotificationEndpoint
type TelegrafRequest = {
  name?: string | undefined
  description?: string | undefined
  metadata?: { buckets?: string[] | undefined } | undefined
  config?: string | undefined
  orgID?: string | undefined
}
type TemplateSummary = {
  sources?: string[] | undefined
  stackID?: string | undefined
  summary?:
    | {
        buckets?:
          | {
              id?: string | undefined
              orgID?: string | undefined
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              name?: string | undefined
              description?: string | undefined
              retentionPeriod?: number | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        checks?:
          | {
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        dashboards?:
          | {
              id?: string | undefined
              orgID?: string | undefined
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              name?: string | undefined
              description?: string | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              charts?: TemplateChart[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        labels?: TemplateSummaryLabel[] | undefined
        labelMappings?:
          | {
              status?: string | undefined
              resourceTemplateMetaName?: string | undefined
              resourceName?: string | undefined
              resourceID?: string | undefined
              resourceType?: string | undefined
              labelTemplateMetaName?: string | undefined
              labelName?: string | undefined
              labelID?: string | undefined
            }[]
          | undefined
        missingEnvRefs?: string[] | undefined
        missingSecrets?: string[] | undefined
        notificationEndpoints?:
          | {
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        notificationRules?:
          | {
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              name?: string | undefined
              description?: string | undefined
              endpointTemplateMetaName?: string | undefined
              endpointID?: string | undefined
              endpointType?: string | undefined
              every?: string | undefined
              offset?: string | undefined
              messageTemplate?: string | undefined
              status?: string | undefined
              statusRules?:
                | { currentLevel?: string | undefined; previousLevel?: string | undefined }[]
                | undefined
              tagRules?:
                | {
                    key?: string | undefined
                    value?: string | undefined
                    operator?: string | undefined
                  }[]
                | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        tasks?:
          | {
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              id?: string | undefined
              name?: string | undefined
              cron?: string | undefined
              description?: string | undefined
              every?: string | undefined
              offset?: string | undefined
              query?: string | undefined
              status?: string | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        telegrafConfigs?:
          | {
              name?: string | undefined
              description?: string | undefined
              metadata?: { buckets?: string[] | undefined } | undefined
              config?: string | undefined
              orgID?: string | undefined
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
        variables?:
          | {
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              id?: string | undefined
              orgID?: string | undefined
              name?: string | undefined
              description?: string | undefined
              arguments?: VariableProperties | undefined
              labelAssociations?: TemplateSummaryLabel[] | undefined
              envReferences?: TemplateEnvReferences | undefined
            }[]
          | undefined
      }
    | undefined
  diff?:
    | {
        buckets?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    retentionRules?: RetentionRules | undefined
                  }
                | undefined
              old?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    retentionRules?: RetentionRules | undefined
                  }
                | undefined
            }[]
          | undefined
        checks?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?: CheckDiscriminator | undefined
              old?: CheckDiscriminator | undefined
            }[]
          | undefined
        dashboards?:
          | {
              stateStatus?: string | undefined
              id?: string | undefined
              kind?: TemplateKind | undefined
              templateMetaName?: string | undefined
              new?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    charts?: TemplateChart[] | undefined
                  }
                | undefined
              old?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    charts?: TemplateChart[] | undefined
                  }
                | undefined
            }[]
          | undefined
        labels?:
          | {
              stateStatus?: string | undefined
              kind?: TemplateKind | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?:
                | {
                    name?: string | undefined
                    color?: string | undefined
                    description?: string | undefined
                  }
                | undefined
              old?:
                | {
                    name?: string | undefined
                    color?: string | undefined
                    description?: string | undefined
                  }
                | undefined
            }[]
          | undefined
        labelMappings?:
          | {
              status?: string | undefined
              resourceType?: string | undefined
              resourceID?: string | undefined
              resourceTemplateMetaName?: string | undefined
              resourceName?: string | undefined
              labelID?: string | undefined
              labelTemplateMetaName?: string | undefined
              labelName?: string | undefined
            }[]
          | undefined
        notificationEndpoints?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?: NotificationEndpointDiscriminator | undefined
              old?: NotificationEndpointDiscriminator | undefined
            }[]
          | undefined
        notificationRules?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    endpointName?: string | undefined
                    endpointID?: string | undefined
                    endpointType?: string | undefined
                    every?: string | undefined
                    offset?: string | undefined
                    messageTemplate?: string | undefined
                    status?: string | undefined
                    statusRules?:
                      | { currentLevel?: string | undefined; previousLevel?: string | undefined }[]
                      | undefined
                    tagRules?:
                      | {
                          key?: string | undefined
                          value?: string | undefined
                          operator?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              old?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    endpointName?: string | undefined
                    endpointID?: string | undefined
                    endpointType?: string | undefined
                    every?: string | undefined
                    offset?: string | undefined
                    messageTemplate?: string | undefined
                    status?: string | undefined
                    statusRules?:
                      | { currentLevel?: string | undefined; previousLevel?: string | undefined }[]
                      | undefined
                    tagRules?:
                      | {
                          key?: string | undefined
                          value?: string | undefined
                          operator?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        tasks?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?:
                | {
                    name?: string | undefined
                    cron?: string | undefined
                    description?: string | undefined
                    every?: string | undefined
                    offset?: string | undefined
                    query?: string | undefined
                    status?: string | undefined
                  }
                | undefined
              old?:
                | {
                    name?: string | undefined
                    cron?: string | undefined
                    description?: string | undefined
                    every?: string | undefined
                    offset?: string | undefined
                    query?: string | undefined
                    status?: string | undefined
                  }
                | undefined
            }[]
          | undefined
        telegrafConfigs?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?: TelegrafRequest | undefined
              old?: TelegrafRequest | undefined
            }[]
          | undefined
        variables?:
          | {
              kind?: TemplateKind | undefined
              stateStatus?: string | undefined
              id?: string | undefined
              templateMetaName?: string | undefined
              new?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    args?: VariableProperties | undefined
                  }
                | undefined
              old?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    args?: VariableProperties | undefined
                  }
                | undefined
            }[]
          | undefined
      }
    | undefined
  errors?:
    | {
        kind?: TemplateKind | undefined
        reason?: string | undefined
        fields?: string[] | undefined
        indexes?: number[] | undefined
      }[]
    | undefined
}
type TemplateExportByID = {
  stackID?: string | undefined
  orgIDs?:
    | {
        orgID?: string | undefined
        resourceFilters?:
          | { byLabel?: string[] | undefined; byResourceKind?: TemplateKind[] | undefined }
          | undefined
      }[]
    | undefined
  resources?: { id: string; kind: TemplateKind; name?: string | undefined }[] | undefined
}
type TemplateExportByName = {
  stackID?: string | undefined
  orgIDs?:
    | {
        orgID?: string | undefined
        resourceFilters?:
          | { byLabel?: string[] | undefined; byResourceKind?: TemplateKind[] | undefined }
          | undefined
      }[]
    | undefined
  resources?: { kind: TemplateKind; name: string }[] | undefined
}
type LogEvent = {
  time?: string | undefined
  message?: string | undefined
  runID?: string | undefined
}
type Run = {
  id?: string | undefined
  taskID?: string | undefined
  status?: 'scheduled' | 'started' | 'failed' | 'success' | 'canceled' | undefined
  scheduledFor?: string | undefined
  log?: LogEvent[] | undefined
  flux?: string | undefined
  startedAt?: string | undefined
  finishedAt?: string | undefined
  requestedAt?: string | undefined
  links?:
    | { self?: string | undefined; task?: string | undefined; retry?: string | undefined }
    | undefined
}
type Runs = { links?: Links | undefined; runs?: Run[] | undefined }
type RunManually = { scheduledFor?: (string | null) | undefined }
type Logs = { events?: LogEvent[] | undefined }
type Flags = { [x: string]: unknown }
type UserResponse = {
  id?: string | undefined
  name: string
  status?: 'active' | 'inactive' | undefined
  links?: { self?: string | undefined } | undefined
}
type PasswordResetBody = { password: string }
type Checks = { checks?: Check[] | undefined; links?: Links | undefined }
type PostCheck = {}
type CheckPatch = {
  name?: string | undefined
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type NotificationRule = {}
type NotificationRules = {
  notificationRules?: NotificationRule[] | undefined
  links?: Links | undefined
}
type PostNotificationRule = {}
type FluxResponse = { flux?: string | undefined }
type NotificationRuleUpdate = {
  name?: string | undefined
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type NotificationEndpoint = {}
type NotificationEndpoints = {
  notificationEndpoints?: NotificationEndpoint[] | undefined
  links?: Links | undefined
}
type PostNotificationEndpoint = {}
type NotificationEndpointUpdate = {
  name?: string | undefined
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type Resource = {
  type:
    | 'authorizations'
    | 'buckets'
    | 'dashboards'
    | 'orgs'
    | 'tasks'
    | 'telegrafs'
    | 'users'
    | 'variables'
    | 'secrets'
    | 'labels'
    | 'views'
    | 'documents'
    | 'notificationRules'
    | 'notificationEndpoints'
    | 'checks'
    | 'dbrp'
    | 'annotations'
    | 'sources'
    | 'scrapers'
    | 'notebooks'
    | 'remotes'
    | 'replications'
    | 'instance'
    | 'flows'
    | 'functions'
    | 'subscriptions'
  id?: string | undefined
  name?: string | undefined
  orgID?: string | undefined
  org?: string | undefined
}
type Permission = { action: 'read' | 'write'; resource: Resource }
type Authorization = {
  status?: 'active' | 'inactive' | undefined
  description?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  orgID?: string | undefined
  permissions?: Permission[] | undefined
  id?: string | undefined
  token?: string | undefined
  userID?: string | undefined
  user?: string | undefined
  org?: string | undefined
  links?: { self?: Link | undefined; user?: Link | undefined } | undefined
}
type Authorizations = { links?: Links | undefined; authorizations?: Authorization[] | undefined }
type AuthorizationPostRequest = {
  status?: 'active' | 'inactive' | undefined
  description?: string | undefined
  orgID?: string | undefined
  userID?: string | undefined
  permissions?: Permission[] | undefined
}
type AuthorizationUpdateRequest = {
  status?: 'active' | 'inactive' | undefined
  description?: string | undefined
}
type HealthCheck = {
  name: string
  message?: string | undefined
  checks?: HealthCheck[] | undefined
  status: 'pass' | 'fail'
  version?: string | undefined
  commit?: string | undefined
}
type Ready = {
  status?: 'ready' | 'starting' | undefined
  started?: string | undefined
  up?: string | undefined
  uptime?: { unit: string } | undefined
  checks?: HealthCheck[] | undefined
}
type Users = {
  links?: { self?: string | undefined } | undefined
  users?: UserResponse[] | undefined
}
type User = { id?: string | undefined; name: string; status?: 'active' | 'inactive' | undefined }
type IsOnboarding = { allowed?: boolean | undefined }
type OnboardingRequest = {
  username: string
  password?: string | undefined
  org: string
  bucket: string
  retentionPeriodSeconds?: bigint | undefined
  retentionPeriodHrs?: number | undefined
  token?: string | undefined
}
type OnboardingResponse = {
  user?: UserResponse | undefined
  org?: Organization | undefined
  bucket?: Bucket | undefined
  auth?: Authorization | undefined
}
type Variable = {
  links?:
    | { self?: string | undefined; org?: string | undefined; labels?: string | undefined }
    | undefined
  id?: string | undefined
  orgID: string
  name: string
  description?: string | undefined
  selected?: string[] | undefined
  labels?: Labels | undefined
  arguments: VariableProperties
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Variables = { variables?: Variable[] | undefined }
type Source = {
  links?:
    | {
        self?: string | undefined
        query?: string | undefined
        health?: string | undefined
        buckets?: string | undefined
      }
    | undefined
  id?: string | undefined
  orgID?: string | undefined
  default?: boolean | undefined
  name?: string | undefined
  type?: 'v1' | 'v2' | 'self' | undefined
  url?: string | undefined
  insecureSkipVerify?: boolean | undefined
  telegraf?: string | undefined
  token?: string | undefined
  username?: string | undefined
  password?: string | undefined
  sharedSecret?: string | undefined
  metaUrl?: string | undefined
  defaultRP?: string | undefined
  languages?: ('flux' | 'influxql')[] | undefined
}
type Sources = { links?: { self?: string | undefined } | undefined; sources?: Source[] | undefined }
type ScraperTargetResponse = {
  name?: string | undefined
  type?: 'prometheus' | undefined
  url?: string | undefined
  orgID?: string | undefined
  bucketID?: string | undefined
  allowInsecure?: boolean | undefined
  id?: string | undefined
  org?: string | undefined
  bucket?: string | undefined
  links?:
    | {
        self?: Link | undefined
        members?: Link | undefined
        owners?: Link | undefined
        bucket?: Link | undefined
        organization?: Link | undefined
      }
    | undefined
}
type ScraperTargetResponses = { configurations?: ScraperTargetResponse[] | undefined }
type ScraperTargetRequest = {
  name?: string | undefined
  type?: 'prometheus' | undefined
  url?: string | undefined
  orgID?: string | undefined
  bucketID?: string | undefined
  allowInsecure?: boolean | undefined
}
type ShardOwner = { nodeID: bigint }
type ShardOwners = ShardOwner[]
type ShardManifest = { id: bigint; shardOwners: ShardOwners }
type ShardManifests = ShardManifest[]
type ShardGroupManifest = {
  id: bigint
  startTime: string
  endTime: string
  deletedAt?: string | undefined
  truncatedAt?: string | undefined
  shards: ShardManifests
}
type ShardGroupManifests = ShardGroupManifest[]
type SubscriptionManifest = { name: string; mode: string; destinations: string[] }
type SubscriptionManifests = SubscriptionManifest[]
type RetentionPolicyManifest = {
  name: string
  replicaN: number
  duration: bigint
  shardGroupDuration: bigint
  shardGroups: ShardGroupManifests
  subscriptions: SubscriptionManifests
}
type RetentionPolicyManifests = RetentionPolicyManifest[]
type BucketMetadataManifest = {
  organizationID: string
  organizationName: string
  bucketID: string
  bucketName: string
  description?: string | undefined
  defaultRetentionPolicy: string
  retentionPolicies: RetentionPolicyManifests
}
type BucketMetadataManifests = BucketMetadataManifest[]
type MetadataBackup = { kv: File; sql: File; buckets: BucketMetadataManifests }
type BucketShardMapping = { oldId: bigint; newId: bigint }
type BucketShardMappings = BucketShardMapping[]
type RestoredBucketMappings = { id: string; name: string; shardMappings: BucketShardMappings }
type Config = { config?: { [x: string]: unknown } | undefined }
type RemoteConnection = {
  id: string
  name: string
  orgID: string
  description?: string | undefined
  remoteURL: string
  remoteOrgID?: string | undefined
  allowInsecureTLS: boolean
}
type RemoteConnections = { remotes?: RemoteConnection[] | undefined }
type RemoteConnectionCreationRequest = {
  name: string
  description?: string | undefined
  orgID: string
  remoteURL: string
  remoteAPIToken: string
  remoteOrgID?: string | undefined
  allowInsecureTLS: boolean
}
type RemoteConnectionUpdateRequest = {
  name?: string | undefined
  description?: string | undefined
  remoteURL?: string | undefined
  remoteAPIToken?: string | undefined
  remoteOrgID?: string | undefined
  allowInsecureTLS?: boolean | undefined
}
type Replication = {
  id: string
  name: string
  description?: string | undefined
  orgID: string
  remoteID: string
  localBucketID: string
  remoteBucketID?: string | undefined
  remoteBucketName?: string | undefined
  maxQueueSizeBytes: bigint
  currentQueueSizeBytes?: bigint | undefined
  remainingBytesToBeSynced?: bigint | undefined
  latestResponseCode?: number | undefined
  latestErrorMessage?: string | undefined
  dropNonRetryableData?: boolean | undefined
}
type Replications = { replications?: Replication[] | undefined }
type ReplicationCreationRequest = {
  name: string
  description?: string | undefined
  orgID: string
  remoteID: string
  localBucketID: string
  remoteBucketID?: string | undefined
  remoteBucketName?: string | undefined
  maxQueueSizeBytes: bigint
  dropNonRetryableData?: boolean | undefined
  maxAgeSeconds: bigint
}
type ReplicationUpdateRequest = {
  name?: string | undefined
  description?: string | undefined
  remoteID?: string | undefined
  remoteBucketID?: string | undefined
  remoteBucketName?: string | undefined
  maxQueueSizeBytes?: bigint | undefined
  dropNonRetryableData?: boolean | undefined
  maxAgeSeconds?: bigint | undefined
}
type CreateDashboardRequest = { orgID: string; name: string; description?: string | undefined }
type Dashboards = { links?: Links | undefined; dashboards?: Dashboard[] | undefined }
type Task = {
  id: string
  orgID: string
  org?: string | undefined
  name: string
  ownerID?: string | undefined
  description?: string | undefined
  status?: TaskStatusType | undefined
  labels?: Labels | undefined
  authorizationID?: string | undefined
  flux: string
  every?: string | undefined
  cron?: string | undefined
  offset?: string | undefined
  latestCompleted?: string | undefined
  lastRunStatus?: 'failed' | 'success' | 'canceled' | undefined
  lastRunError?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  links?:
    | {
        self?: Link | undefined
        owners?: Link | undefined
        members?: Link | undefined
        runs?: Link | undefined
        logs?: Link | undefined
        labels?: Link | undefined
      }
    | undefined
}
type Tasks = { links?: Links | undefined; tasks?: Task[] | undefined }
type TaskCreateRequest = {
  orgID?: string | undefined
  org?: string | undefined
  status?: TaskStatusType | undefined
  flux: string
  description?: string | undefined
}
type TaskUpdateRequest = {
  status?: TaskStatusType | undefined
  flux?: string | undefined
  name?: string | undefined
  every?: string | undefined
  cron?: string | undefined
  offset?: string | undefined
  description?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
    '/ping': {
      $get: { input: {}; output: {}; outputFormat: string; status: 204 }
      $head: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/': {
      $get: {
        input: { header: { 'Zap-Trace-Span'?: string | undefined } }
        output: Routes
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
                orgID?: string | undefined
                org?: string | undefined
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
                orgID?: string | undefined
                org?: string | undefined
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
                orgID?: string | undefined
                org?: string | undefined
                id?: string | undefined
                bucketID?: string | undefined
                default?: boolean | undefined
                db?: string | undefined
                rp?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                orgID?: string | undefined
                org?: string | undefined
                id?: string | undefined
                bucketID?: string | undefined
                default?: boolean | undefined
                db?: string | undefined
                rp?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                orgID?: string | undefined
                org?: string | undefined
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
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPCreate }
            output: DBRP
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPCreate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPCreate }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPCreate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPCreate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPCreate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dbrps/:dbrpID': {
      $get:
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: DBRPGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPUpdate }
            output: DBRPGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPUpdate }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: DBRPUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { dbrpID: string } } & {
              query: { orgID?: string | undefined; org?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
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
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: TelegrafPluginRequest
            }
            output: Telegraf
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: TelegrafPluginRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/telegrafs/:telegrafID': {
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
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TelegrafPluginRequest }
            output: Telegraf
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telegrafID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TelegrafPluginRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 404
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: string
            outputFormat: 'text'
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 500
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
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
                'Content-Type'?: 'text/plain' | 'text/plain; charset=utf-8' | undefined
                'Content-Length'?: number | undefined
                Accept?: 'application/json' | undefined
              }
            } & { json: string }
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
    '/labels': {
      $post:
        | {
            input: { json: LabelCreateRequest }
            output: LabelResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: LabelCreateRequest }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: LabelCreateRequest }; output: Error; outputFormat: 'json'; status: 200 }
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
            status: 500
          }
        | {
            input: { query: { orgID?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/labels/:labelID': {
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
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
          }
        | {
            input: { param: { labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards/:dashboardID': {
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
                name?: string | undefined
                description?: string | undefined
                cells?: CellWithViewProperties | undefined
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
                name?: string | undefined
                description?: string | undefined
                cells?: CellWithViewProperties | undefined
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
                name?: string | undefined
                description?: string | undefined
                cells?: CellWithViewProperties | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/dashboards/:dashboardID/cells': {
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
    }
  } & {
    '/dashboards/:dashboardID/cells/:cellID': {
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
            status: 400
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
            output: { body?: string | undefined }
            outputFormat: 'text'
            status: 301
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
            status: 500
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
            status: 400
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
    '/query': {
      $post:
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | string }
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
            } & { json: Query | string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | string }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | string }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | string }
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
            } & { json: Query | string }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { org?: string | undefined; orgID?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/json' | 'application/vnd.flux' | undefined
              }
            } & { json: Query | string }
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostBucketRequest
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostBucketRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
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
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchBucketRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userID: string; bucketID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 404
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
            status: 500
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
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostOrganizationRequest
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostOrganizationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: PostOrganizationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchOrganizationRequest }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchOrganizationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchOrganizationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PatchOrganizationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
            status: 400
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
          }
        | {
            input: { param: { orgID: string } } & {
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
            status: 400
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            status: 400
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userID: string; orgID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
    '/orgs/:orgID/secrets/:secretID': {
      $delete:
        | {
            input: { param: { orgID: string; secretID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { orgID: string; secretID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/resources': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: string[]
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
            status: 400
          }
        | {
            input: {
              query: { orgID: string; name?: string | undefined; stackID?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { orgID: string; name?: string | undefined; stackID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
                orgID?: string | undefined
                name?: string | undefined
                description?: string | undefined
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
                orgID?: string | undefined
                name?: string | undefined
                description?: string | undefined
                urls?: string[] | undefined
              }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                orgID?: string | undefined
                name?: string | undefined
                description?: string | undefined
                urls?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                orgID?: string | undefined
                name?: string | undefined
                description?: string | undefined
                urls?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                orgID?: string | undefined
                name?: string | undefined
                description?: string | undefined
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
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                templateURLs?: (string[] | null) | undefined
                additionalResources?:
                  | { resourceID: string; kind: string; templateMetaName?: string | undefined }[]
                  | undefined
              }
            }
            output: Stack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stack_id: string } } & {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                templateURLs?: (string[] | null) | undefined
                additionalResources?:
                  | { resourceID: string; kind: string; templateMetaName?: string | undefined }[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
        | {
            input: { json: TemplateApply }
            output: {
              sources?: string[] | undefined
              stackID?: string | undefined
              summary?:
                | {
                    buckets?:
                      | {
                          id?: string | undefined
                          orgID?: string | undefined
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          name?: string | undefined
                          description?: string | undefined
                          retentionPeriod?: number | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    checks?:
                      | {
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    dashboards?:
                      | {
                          id?: string | undefined
                          orgID?: string | undefined
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          name?: string | undefined
                          description?: string | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          charts?: TemplateChart[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    labels?: TemplateSummaryLabel[] | undefined
                    labelMappings?:
                      | {
                          status?: string | undefined
                          resourceTemplateMetaName?: string | undefined
                          resourceName?: string | undefined
                          resourceID?: string | undefined
                          resourceType?: string | undefined
                          labelTemplateMetaName?: string | undefined
                          labelName?: string | undefined
                          labelID?: string | undefined
                        }[]
                      | undefined
                    missingEnvRefs?: string[] | undefined
                    missingSecrets?: string[] | undefined
                    notificationEndpoints?:
                      | {
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    notificationRules?:
                      | {
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          name?: string | undefined
                          description?: string | undefined
                          endpointTemplateMetaName?: string | undefined
                          endpointID?: string | undefined
                          endpointType?: string | undefined
                          every?: string | undefined
                          offset?: string | undefined
                          messageTemplate?: string | undefined
                          status?: string | undefined
                          statusRules?:
                            | {
                                currentLevel?: string | undefined
                                previousLevel?: string | undefined
                              }[]
                            | undefined
                          tagRules?:
                            | {
                                key?: string | undefined
                                value?: string | undefined
                                operator?: string | undefined
                              }[]
                            | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    tasks?:
                      | {
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          cron?: string | undefined
                          description?: string | undefined
                          every?: string | undefined
                          offset?: string | undefined
                          query?: string | undefined
                          status?: string | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    telegrafConfigs?:
                      | {
                          name?: string | undefined
                          description?: string | undefined
                          metadata?: { buckets?: string[] | undefined } | undefined
                          config?: string | undefined
                          orgID?: string | undefined
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                    variables?:
                      | {
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          id?: string | undefined
                          orgID?: string | undefined
                          name?: string | undefined
                          description?: string | undefined
                          arguments?: VariableProperties | undefined
                          labelAssociations?: TemplateSummaryLabel[] | undefined
                          envReferences?: TemplateEnvReferences | undefined
                        }[]
                      | undefined
                  }
                | undefined
              diff?:
                | {
                    buckets?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                retentionRules?: RetentionRules | undefined
                              }
                            | undefined
                          old?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                retentionRules?: RetentionRules | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    checks?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?: CheckDiscriminator | undefined
                          old?: CheckDiscriminator | undefined
                        }[]
                      | undefined
                    dashboards?:
                      | {
                          stateStatus?: string | undefined
                          id?: string | undefined
                          kind?: TemplateKind | undefined
                          templateMetaName?: string | undefined
                          new?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                charts?: TemplateChart[] | undefined
                              }
                            | undefined
                          old?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                charts?: TemplateChart[] | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    labels?:
                      | {
                          stateStatus?: string | undefined
                          kind?: TemplateKind | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?:
                            | {
                                name?: string | undefined
                                color?: string | undefined
                                description?: string | undefined
                              }
                            | undefined
                          old?:
                            | {
                                name?: string | undefined
                                color?: string | undefined
                                description?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    labelMappings?:
                      | {
                          status?: string | undefined
                          resourceType?: string | undefined
                          resourceID?: string | undefined
                          resourceTemplateMetaName?: string | undefined
                          resourceName?: string | undefined
                          labelID?: string | undefined
                          labelTemplateMetaName?: string | undefined
                          labelName?: string | undefined
                        }[]
                      | undefined
                    notificationEndpoints?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?: NotificationEndpointDiscriminator | undefined
                          old?: NotificationEndpointDiscriminator | undefined
                        }[]
                      | undefined
                    notificationRules?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                endpointName?: string | undefined
                                endpointID?: string | undefined
                                endpointType?: string | undefined
                                every?: string | undefined
                                offset?: string | undefined
                                messageTemplate?: string | undefined
                                status?: string | undefined
                                statusRules?:
                                  | {
                                      currentLevel?: string | undefined
                                      previousLevel?: string | undefined
                                    }[]
                                  | undefined
                                tagRules?:
                                  | {
                                      key?: string | undefined
                                      value?: string | undefined
                                      operator?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          old?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                endpointName?: string | undefined
                                endpointID?: string | undefined
                                endpointType?: string | undefined
                                every?: string | undefined
                                offset?: string | undefined
                                messageTemplate?: string | undefined
                                status?: string | undefined
                                statusRules?:
                                  | {
                                      currentLevel?: string | undefined
                                      previousLevel?: string | undefined
                                    }[]
                                  | undefined
                                tagRules?:
                                  | {
                                      key?: string | undefined
                                      value?: string | undefined
                                      operator?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    tasks?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?:
                            | {
                                name?: string | undefined
                                cron?: string | undefined
                                description?: string | undefined
                                every?: string | undefined
                                offset?: string | undefined
                                query?: string | undefined
                                status?: string | undefined
                              }
                            | undefined
                          old?:
                            | {
                                name?: string | undefined
                                cron?: string | undefined
                                description?: string | undefined
                                every?: string | undefined
                                offset?: string | undefined
                                query?: string | undefined
                                status?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    telegrafConfigs?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?: TelegrafRequest | undefined
                          old?: TelegrafRequest | undefined
                        }[]
                      | undefined
                    variables?:
                      | {
                          kind?: TemplateKind | undefined
                          stateStatus?: string | undefined
                          id?: string | undefined
                          templateMetaName?: string | undefined
                          new?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                args?: VariableProperties | undefined
                              }
                            | undefined
                          old?:
                            | {
                                name?: string | undefined
                                description?: string | undefined
                                args?: VariableProperties | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              errors?:
                | {
                    kind?: TemplateKind | undefined
                    reason?: string | undefined
                    fields?: string[] | undefined
                    indexes?: number[] | undefined
                  }[]
                | undefined
              message: string
              code: string
            }
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: TemplateApply }; output: Error; outputFormat: 'json'; status: 500 }
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RunManually }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
            status: 400
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string; runID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: LabelMapping }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string; labelID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
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
              cookie: { 'influxdb-oss-session': string }
            } & { json: PasswordResetBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              cookie: { 'influxdb-oss-session': string }
            } & { json: PasswordResetBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              cookie: { 'influxdb-oss-session': string }
            } & { json: PasswordResetBody }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              cookie: { 'influxdb-oss-session': string }
            } & { json: PasswordResetBody }
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: AddResourceMemberRequestBody }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: PasswordResetBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
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
            status: 400
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
    '/notificationRules/:ruleID': {
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
    '/authorizations': {
      $get:
        | {
            input: {
              query: {
                userID?: string | undefined
                user?: string | undefined
                orgID?: string | undefined
                org?: string | undefined
                token?: string | undefined
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
                token?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                userID?: string | undefined
                user?: string | undefined
                orgID?: string | undefined
                org?: string | undefined
                token?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                userID?: string | undefined
                user?: string | undefined
                orgID?: string | undefined
                org?: string | undefined
                token?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                userID?: string | undefined
                user?: string | undefined
                orgID?: string | undefined
                org?: string | undefined
                token?: string | undefined
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
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: AuthorizationPostRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { authID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/all': {
      $get:
        | {
            input: { query: { cpu?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { cpu?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/allocs': {
      $get:
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/block': {
      $get:
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/cmdline': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: string
            outputFormat: 'text'
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
    '/debug/pprof/goroutine': {
      $get:
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/heap': {
      $get:
        | {
            input: {
              query: {
                debug?: 0n | 1n | undefined
                seconds?: string | undefined
                gc?: 0n | 1n | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                debug?: 0n | 1n | undefined
                seconds?: string | undefined
                gc?: 0n | 1n | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                debug?: 0n | 1n | undefined
                seconds?: string | undefined
                gc?: 0n | 1n | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/mutex': {
      $get:
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/profile': {
      $get:
        | {
            input: { query: { seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/threadcreate': {
      $get:
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { debug?: 0n | 1n | undefined; seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debug/pprof/trace': {
      $get:
        | {
            input: { query: { seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seconds?: string | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
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
    '/metrics': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: string
            outputFormat: 'text'
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
            output: Ready
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
            status: 401
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
            status: 422
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
            status: 500
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
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: User }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
            status: 400
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userID: string } } & {
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
    '/sources': {
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
    '/backup/kv': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: File
            outputFormat: 'text'
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
    '/backup/metadata': {
      $get:
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
              }
            }
            output: MetadataBackup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/backup/shards/:shardID': {
      $get:
        | {
            input: { param: { shardID: bigint } } & { query: { since?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Gzip-Compression-Level'?: 'none' | 'default' | 'speedy' | 'full' | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shardID: bigint } } & { query: { since?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Gzip-Compression-Level'?: 'none' | 'default' | 'speedy' | 'full' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shardID: bigint } } & { query: { since?: string | undefined } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Accept-Encoding'?: 'gzip' | 'identity' | undefined
                'Gzip-Compression-Level'?: 'none' | 'default' | 'speedy' | 'full' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/restore/kv': {
      $post:
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: { token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/restore/sql': {
      $post:
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/restore/bucket/:bucketID': {
      $post:
        | {
            input: { param: { bucketID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucketID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/restore/bucketMetadata': {
      $post:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: BucketMetadataManifest
            }
            output: RestoredBucketMappings
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: BucketMetadataManifest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/restore/shards/:shardID': {
      $post:
        | {
            input: { param: { shardID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shardID: string } } & {
              header: {
                'Zap-Trace-Span'?: string | undefined
                'Content-Encoding'?: 'gzip' | 'identity' | undefined
                'Content-Type'?: 'application/octet-stream' | undefined
              }
            } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/config': {
      $get:
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Config
            outputFormat: 'json'
            status: 200
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
    '/remotes': {
      $get:
        | {
            input: {
              query: { orgID: string; name?: string | undefined; remoteURL?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: RemoteConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { orgID: string; name?: string | undefined; remoteURL?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { orgID: string; name?: string | undefined; remoteURL?: string | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: RemoteConnectionCreationRequest }
            output: RemoteConnection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RemoteConnectionCreationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RemoteConnectionCreationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/remotes/:remoteID': {
      $get:
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: RemoteConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RemoteConnectionUpdateRequest }
            output: RemoteConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RemoteConnectionUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RemoteConnectionUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: RemoteConnectionUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { remoteID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/replications': {
      $get:
        | {
            input: {
              query: {
                orgID: string
                name?: string | undefined
                remoteID?: string | undefined
                localBucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Replications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orgID: string
                name?: string | undefined
                remoteID?: string | undefined
                localBucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                orgID: string
                name?: string | undefined
                remoteID?: string | undefined
                localBucketID?: string | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { validate?: boolean | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: ReplicationCreationRequest }
            output: Replication
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { validate?: boolean | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: ReplicationCreationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { validate?: boolean | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: ReplicationCreationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { validate?: boolean | undefined } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: ReplicationCreationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/replications/:replicationID': {
      $get:
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Replication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { replicationID: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ReplicationUpdateRequest
            }
            output: Replication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { replicationID: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ReplicationUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { replicationID: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ReplicationUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { replicationID: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ReplicationUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { replicationID: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: ReplicationUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/replications/:replicationID/validate': {
      $post:
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { replicationID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dashboards': {
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
                type?: 'basic' | 'system' | undefined
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
                type?: 'basic' | 'system' | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
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
                type?: 'basic' | 'system' | undefined
              }
            } & { header: { 'Zap-Trace-Span'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
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
                type?: 'basic' | 'system' | undefined
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
            status: 400
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: TaskCreateRequest
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Zap-Trace-Span'?: string | undefined } } & {
              json: TaskCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
            status: 400
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TaskUpdateRequest }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TaskUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TaskUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            } & { json: TaskUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
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
            status: 400
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: { code?: 'unauthorized' | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskID: string } } & {
              header: { 'Zap-Trace-Span'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
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
  },
  '/'
>
export default routes
