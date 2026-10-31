import { createRoute, z } from '@hono/zod-openapi'

const GraphQLExtensionSchema = z
  .object({
    component: z.string().exactOptional().openapi({ 'x-go-name': 'Component' }),
    path: z.string().exactOptional().openapi({ 'x-go-name': 'Path' }),
  })
  .openapi({
    description: 'GraphQLExtension describes the graphql server extension point in the backend',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('GraphQLExtension')

const GraphQLExtensionsSchema = z
  .array(GraphQLExtensionSchema)
  .openapi({
    description: 'GraphQLExtensions is a collection of GraphQLExtension endpoints',
    'x-go-package': 'github.com/layer5io/meshery/models',
  })
  .openapi('GraphQLExtensions')

const NavigatorExtensionsSchema: z.ZodType<NavigatorExtensionsType> = z
  .lazy(() =>
    z
      .array(NavigatorExtensionSchema)
      .openapi({
        description: 'NavigatorExtensions is a collection of NavigatorExtension',
        'x-go-package': 'github.com/layer5io/meshery/models',
      }),
  )
  .openapi('NavigatorExtensions')

const UserPrefsExtensionSchema = z
  .object({ component: z.string().exactOptional().openapi({ 'x-go-name': 'Component' }) })
  .openapi({
    description: 'UserPrefsExtension describes the user preference extension point in the UI',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('UserPrefsExtension')

const UserPrefsExtensionsSchema = z
  .array(UserPrefsExtensionSchema)
  .openapi({
    description: 'UserPrefsExtensions is a collection of UserPrefsExtension',
    'x-go-package': 'github.com/layer5io/meshery/models',
  })
  .openapi('UserPrefsExtensions')

type ExtensionsType = {
  graphql?: z.infer<typeof GraphQLExtensionsSchema>
  navigator?: z.infer<typeof NavigatorExtensionsSchema>
  user_prefs?: z.infer<typeof UserPrefsExtensionsSchema>
}

type HrefType = { external?: boolean; uri?: string }

const HrefSchema: z.ZodType<HrefType> = z
  .object({
    external: z.boolean().exactOptional().openapi({ 'x-go-name': 'External' }),
    uri: z.string().exactOptional().openapi({ 'x-go-name': 'URI' }),
  })
  .openapi({
    description: 'Href describes a link along with its type',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Href')

type NavigatorExtensionType = {
  children?: z.infer<typeof NavigatorExtensionsSchema>
  component?: string
  href?: z.infer<typeof HrefSchema>
  icon?: string
  link?: boolean
  show?: boolean
  title?: string
}

const NavigatorExtensionSchema: z.ZodType<NavigatorExtensionType> = z
  .lazy(() =>
    z
      .object({
        children: NavigatorExtensionsSchema.exactOptional(),
        component: z.string().exactOptional().openapi({ 'x-go-name': 'Component' }),
        href: HrefSchema.exactOptional(),
        icon: z.string().exactOptional().openapi({ 'x-go-name': 'Icon' }),
        link: z.boolean().exactOptional().openapi({ 'x-go-name': 'Link' }),
        show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }),
        title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
      })
      .openapi({
        description: 'NavigatorExtension describes the Navigator extension point in the UI',
        'x-go-package': 'github.com/layer5io/meshery/models',
        required: [],
      }),
  )
  .openapi('NavigatorExtension')

type NavigatorExtensionsType = z.infer<typeof NavigatorExtensionSchema>[]

const AlertEvaluatorSchema = z
  .object({
    params: z.array(z.float64()).exactOptional().openapi({ 'x-go-name': 'Params' }),
    type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('AlertEvaluator')

const AlertOperatorSchema = z
  .object({ type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }) })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('AlertOperator')

const AlertQuerySchema = z
  .object({ params: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Params' }) })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('AlertQuery')

const AlertReducerSchema = z
  .object({
    params: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Params' }),
    type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('AlertReducer')

const AlertConditionSchema = z
  .object({
    evaluator: AlertEvaluatorSchema.exactOptional(),
    operator: AlertOperatorSchema.exactOptional(),
    query: AlertQuerySchema.exactOptional(),
    reducer: AlertReducerSchema.exactOptional(),
    type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('AlertCondition')

const AlertNotificationSchema = z
  .object({
    disableResolveMessage: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-go-name': 'DisableResolveMessage' }),
    frequency: z.string().exactOptional().openapi({ 'x-go-name': 'Frequency' }),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'ID' }),
    isDefault: z.boolean().exactOptional().openapi({ 'x-go-name': 'IsDefault' }),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    sendReminder: z.boolean().exactOptional().openapi({ 'x-go-name': 'SendReminder' }),
    settings: z.object({}).exactOptional().openapi({ 'x-go-name': 'Settings' }),
    type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
    uid: z.string().exactOptional().openapi({ 'x-go-name': 'UID' }),
  })
  .openapi({
    description:
      'AlertNotification as described in the doc\nhttps://grafana.com/docs/grafana/latest/http_api/alerting_notification_channels/',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('AlertNotification')

const AlertSchema = z
  .object({
    alertRuleTags: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ 'x-go-name': 'AlertRuleTags' }),
    conditions: z
      .array(AlertConditionSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'Conditions' }),
    executionErrorState: z.string().exactOptional().openapi({ 'x-go-name': 'ExecutionErrorState' }),
    for: z.string().exactOptional().openapi({ 'x-go-name': 'For' }),
    frequency: z.string().exactOptional().openapi({ 'x-go-name': 'Frequency' }),
    handler: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Handler' }),
    message: z.string().exactOptional().openapi({ 'x-go-name': 'Message' }),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    noDataState: z.string().exactOptional().openapi({ 'x-go-name': 'NoDataState' }),
    notifications: z
      .array(AlertNotificationSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'Notifications' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('Alert')

const ColumnSchema = z
  .object({
    text: z.string().exactOptional().openapi({ 'x-go-name': 'TextType' }),
    value: z.string().exactOptional().openapi({ 'x-go-name': 'Value' }),
  })
  .openapi({
    description: 'for a table',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('Column')

const FieldConfigSchema = z
  .object({
    defaults: z
      .object({
        threshold: z
          .object({
            mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
            steps: z
              .array(
                z
                  .object({
                    color: z.string().exactOptional().openapi({ 'x-go-name': 'Color' }),
                    value: z.string().exactOptional().openapi({ 'x-go-name': 'Value' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ 'x-go-name': 'Steps' }),
          })
          .exactOptional()
          .openapi({ 'x-go-name': 'Threshold', required: [] }),
        unit: z.string().exactOptional().openapi({ 'x-go-name': 'Unit' }),
      })
      .exactOptional()
      .openapi({ 'x-go-name': 'Defaults', required: [] }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('FieldConfig')

const GaugeSchema = z
  .object({
    maxValue: z.float32().exactOptional().openapi({ 'x-go-name': 'MaxValue' }),
    minValue: z.float32().exactOptional().openapi({ 'x-go-name': 'MinValue' }),
    show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }),
    thresholdLabels: z.boolean().exactOptional().openapi({ 'x-go-name': 'ThresholdLabels' }),
    thresholdMarkers: z.boolean().exactOptional().openapi({ 'x-go-name': 'ThresholdMarkers' }),
  })
  .openapi({
    description: 'for a stat',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('Gauge')

const LegendSchema = z
  .object({
    alignAsTable: z.boolean().exactOptional().openapi({ 'x-go-name': 'AlignAsTable' }),
    avg: z.boolean().exactOptional().openapi({ 'x-go-name': 'Avg' }),
    current: z.boolean().exactOptional().openapi({ 'x-go-name': 'Current' }),
    hideEmpty: z.boolean().exactOptional().openapi({ 'x-go-name': 'HideEmpty' }),
    hideZero: z.boolean().exactOptional().openapi({ 'x-go-name': 'HideZero' }),
    max: z.boolean().exactOptional().openapi({ 'x-go-name': 'Max' }),
    min: z.boolean().exactOptional().openapi({ 'x-go-name': 'Min' }),
    rightSide: z.boolean().exactOptional().openapi({ 'x-go-name': 'RightSide' }),
    show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }),
    sideWidth: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'SideWidth' }),
    total: z.boolean().exactOptional().openapi({ 'x-go-name': 'Total' }),
    values: z.boolean().exactOptional().openapi({ 'x-go-name': 'Values' }),
  })
  .openapi({
    description: 'for a graph panel',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('Legend')

const LinkSchema = z
  .object({
    asDropdown: z.boolean().exactOptional().openapi({ 'x-go-name': 'AsDropdown' }),
    dashUri: z.string().exactOptional().openapi({ 'x-go-name': 'DashURI' }),
    dashboard: z.string().exactOptional().openapi({ 'x-go-name': 'Dashboard' }),
    icon: z.string().exactOptional().openapi({ 'x-go-name': 'Icon' }),
    includeVars: z.boolean().exactOptional().openapi({ 'x-go-name': 'IncludeVars' }),
    keepTime: z.boolean().exactOptional().openapi({ 'x-go-name': 'KeepTime' }),
    params: z.string().exactOptional().openapi({ 'x-go-name': 'Params' }),
    tags: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Tags' }),
    targetBlank: z.boolean().exactOptional().openapi({ 'x-go-name': 'TargetBlank' }),
    title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
    tooltip: z.string().exactOptional().openapi({ 'x-go-name': 'Tooltip' }),
    type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
    url: z.string().exactOptional().openapi({ 'x-go-name': 'URL' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('Link')

const MapTypeSchema = z
  .object({
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    value: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Value' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('MapType')

const IntStringSchema = z
  .object({
    Valid: z.boolean().exactOptional(),
    Value: z
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
  })
  .openapi({
    title:
      'IntString represents special type for json values that could be strings or ints: 100 or "100"',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('IntString')

const OptionsSchema = z
  .object({
    colorMode: z.string().exactOptional().openapi({ 'x-go-name': 'ColorMode' }),
    content: z.string().exactOptional().openapi({ 'x-go-name': 'Content' }),
    displayMode: z.string().exactOptional().openapi({ 'x-go-name': 'DisplayMode' }),
    graphMode: z.string().exactOptional().openapi({ 'x-go-name': 'GraphMode' }),
    justifyMode: z.string().exactOptional().openapi({ 'x-go-name': 'JustifyMode' }),
    mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
    orientation: z.string().exactOptional().openapi({ 'x-go-name': 'Orientation' }),
    reduceOptions: z
      .object({
        calcs: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Calcs' }),
        fields: z.string().exactOptional().openapi({ 'x-go-name': 'Fields' }),
        values: z.boolean().exactOptional().openapi({ 'x-go-name': 'Values' }),
      })
      .exactOptional()
      .openapi({ 'x-go-name': 'ReduceOptions', required: [] }),
    textMode: z.string().exactOptional().openapi({ 'x-go-name': 'TextMode' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('Options')

const RangeMapSchema = z
  .object({
    from: z.string().exactOptional().openapi({ 'x-go-name': 'From' }),
    text: z.string().exactOptional().openapi({ 'x-go-name': 'Text' }),
    to: z.string().exactOptional().openapi({ 'x-go-name': 'To' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('RangeMap')

const BoolStringSchema = z
  .object({ Flag: z.boolean().exactOptional(), Value: z.string().exactOptional() })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('BoolString')

const SeriesOverrideSchema = z
  .object({
    alias: z.string().exactOptional().openapi({ 'x-go-name': 'Alias' }),
    bars: z.boolean().exactOptional().openapi({ 'x-go-name': 'Bars' }),
    color: z.string().exactOptional().openapi({ 'x-go-name': 'Color' }),
    dashes: z.boolean().exactOptional().openapi({ 'x-go-name': 'Dashes' }),
    fill: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Fill' }),
    fillBelowTo: z.string().exactOptional().openapi({ 'x-go-name': 'FillBelowTo' }),
    legend: z.boolean().exactOptional().openapi({ 'x-go-name': 'Legend' }),
    lines: z.boolean().exactOptional().openapi({ 'x-go-name': 'Lines' }),
    linewidth: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'LineWidth' }),
    nullPointMode: z.string().exactOptional().openapi({ 'x-go-name': 'NullPointMode' }),
    stack: BoolStringSchema.exactOptional(),
    transform: z.string().exactOptional().openapi({ 'x-go-name': 'Transform' }),
    yaxis: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'YAxis' }),
    zindex: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'ZIndex' }),
  })
  .openapi({
    description: 'for a graph panel',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('SeriesOverride')

const SortSchema = z
  .object({
    col: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Col' }),
    desc: z.boolean().exactOptional().openapi({ 'x-go-name': 'Desc' }),
  })
  .openapi({
    description: 'for a graph panel',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('Sort')

const SparkLineSchema = z
  .object({
    fillColor: z.string().exactOptional().openapi({ 'x-go-name': 'FillColor' }),
    full: z.boolean().exactOptional().openapi({ 'x-go-name': 'Full' }),
    lineColor: z.string().exactOptional().openapi({ 'x-go-name': 'LineColor' }),
    show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }),
    ymax: z.float64().exactOptional().openapi({ 'x-go-name': 'YMax' }),
    ymin: z.float64().exactOptional().openapi({ 'x-go-name': 'YMin' }),
  })
  .openapi({
    description: 'for a stat',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('SparkLine')

const ValueMapSchema = z
  .object({
    op: z.string().exactOptional().openapi({ 'x-go-name': 'Op' }),
    text: z.string().exactOptional().openapi({ 'x-go-name': 'TextType' }),
    value: z.string().exactOptional().openapi({ 'x-go-name': 'Value' }),
  })
  .openapi({
    description: 'for a stat',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('ValueMap')

const ColumnStyleSchema = z
  .object({
    alias: z.string().exactOptional().openapi({ 'x-go-name': 'Alias' }),
    colorMode: z.string().exactOptional().openapi({ 'x-go-name': 'ColorMode' }),
    colors: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Colors' }),
    dateFormat: z.string().exactOptional().openapi({ 'x-go-name': 'DateFormat' }),
    decimals: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Decimals' }),
    link: z.boolean().exactOptional().openapi({ 'x-go-name': 'Link' }),
    linkTargetBlank: z.boolean().exactOptional().openapi({ 'x-go-name': 'LinkTargetBlank' }),
    linkTooltip: z.string().exactOptional().openapi({ 'x-go-name': 'LinkTooltip' }),
    linkUrl: z.string().exactOptional().openapi({ 'x-go-name': 'LinkUrl' }),
    mappingType: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'MappingType' }),
    pattern: z.string().exactOptional().openapi({ 'x-go-name': 'Pattern' }),
    thresholds: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Thresholds' }),
    type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
    unit: z.string().exactOptional().openapi({ 'x-go-name': 'Unit' }),
    valueMaps: z.array(ValueMapSchema).exactOptional().openapi({ 'x-go-name': 'ValueMaps' }),
  })
  .openapi({
    description: 'for a table',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('ColumnStyle')

const StackdriverAlignOptionSchema = z
  .object({
    label: z.string().exactOptional().openapi({ 'x-go-name': 'Label' }),
    metricKinds: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'MetricKinds' }),
    text: z.string().exactOptional().openapi({ 'x-go-name': 'Text' }),
    value: z.string().exactOptional().openapi({ 'x-go-name': 'Value' }),
    valueTypes: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'ValueTypes' }),
  })
  .openapi({
    description:
      'StackdriverAlignOption defines a single alignment option shown in Grafana\nduring query configuration.',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('StackdriverAlignOption')

const StackdriverAlignOptionsSchema = z
  .object({
    expanded: z.boolean().exactOptional().openapi({ 'x-go-name': 'Expanded' }),
    label: z.string().exactOptional().openapi({ 'x-go-name': 'Label' }),
    options: z
      .array(StackdriverAlignOptionSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'Options' }),
  })
  .openapi({
    description:
      'StackdriverAlignOptions defines the list of alignment options shown in\nGrafana during query configuration.',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('StackdriverAlignOptions')

const TargetSchema = z
  .object({
    alias: z.string().exactOptional().openapi({ 'x-go-name': 'Alias' }),
    aliasBy: z.string().exactOptional().openapi({ 'x-go-name': 'AliasBy' }),
    alignOptions: z
      .array(StackdriverAlignOptionsSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'AlignOptions' }),
    alignmentPeriod: z.string().exactOptional().openapi({ 'x-go-name': 'AlignmentPeriod' }),
    bucketAggs: z
      .array(
        z
          .object({
            field: z.string().exactOptional().openapi({ 'x-go-name': 'Field' }),
            id: z.string().exactOptional().openapi({ 'x-go-name': 'ID' }),
            settings: z
              .object({
                interval: z.string().exactOptional().openapi({ 'x-go-name': 'Interval' }),
                min_doc_count: z.object({}).exactOptional().openapi({ 'x-go-name': 'MinDocCount' }),
                order: z.string().exactOptional().openapi({ 'x-go-name': 'Order' }),
                orderBy: z.string().exactOptional().openapi({ 'x-go-name': 'OrderBy' }),
                size: z.string().exactOptional().openapi({ 'x-go-name': 'Size' }),
              })
              .exactOptional()
              .openapi({ 'x-go-name': 'Settings', required: [] }),
            type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ 'x-go-name': 'BucketAggs' }),
    crossSeriesReducer: z.string().exactOptional().openapi({ 'x-go-name': 'CrossSeriesReducer' }),
    datasource: z.string().exactOptional().openapi({ 'x-go-name': 'Datasource' }),
    dimensions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ 'x-go-name': 'Dimensions' }),
    dsType: z
      .string()
      .exactOptional()
      .openapi({ description: 'For Elasticsearch', 'x-go-name': 'DsType' }),
    expr: z
      .string()
      .exactOptional()
      .openapi({ description: 'For Prometheus', 'x-go-name': 'Expr' }),
    filters: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Filters' }),
    format: z.string().exactOptional().openapi({ 'x-go-name': 'Format' }),
    group: z
      .array(
        z
          .object({
            params: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Params' }),
            type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ 'x-go-name': 'Group' }),
    groupBys: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'GroupBys' }),
    hide: z.boolean().exactOptional().openapi({ 'x-go-name': 'Hide' }),
    instant: z.boolean().exactOptional().openapi({ 'x-go-name': 'Instant' }),
    interval: z.string().exactOptional().openapi({ 'x-go-name': 'Interval' }),
    intervalFactor: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'IntervalFactor' }),
    legendFormat: z.string().exactOptional().openapi({ 'x-go-name': 'LegendFormat' }),
    measurement: z
      .string()
      .exactOptional()
      .openapi({ description: 'For InfluxDB', 'x-go-name': 'Measurement' }),
    metricColumn: z.string().exactOptional().openapi({ 'x-go-name': 'MetricColumn' }),
    metricKind: z.string().exactOptional().openapi({ 'x-go-name': 'MetricKind' }),
    metricName: z.string().exactOptional().openapi({ 'x-go-name': 'MetricName' }),
    metricType: z.string().exactOptional().openapi({ 'x-go-name': 'MetricType' }),
    metrics: z
      .array(
        z
          .object({
            field: z.string().exactOptional().openapi({ 'x-go-name': 'Field' }),
            id: z.string().exactOptional().openapi({ 'x-go-name': 'ID' }),
            type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ 'x-go-name': 'Metrics' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'For CloudWatch', 'x-go-name': 'Namespace' }),
    perSeriesAligner: z.string().exactOptional().openapi({ 'x-go-name': 'PerSeriesAligner' }),
    period: z.string().exactOptional().openapi({ 'x-go-name': 'Period' }),
    projectName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For the Stackdriver data source. Find out more information at\nhttps:/grafana.com/docs/grafana/v6.0/features/datasources/stackdriver/',
        'x-go-name': 'ProjectName',
      }),
    query: z.string().exactOptional().openapi({ 'x-go-name': 'Query' }),
    rawQuery: z.boolean().exactOptional().openapi({ 'x-go-name': 'RawQuery' }),
    rawSql: z.string().exactOptional().openapi({ 'x-go-name': 'RawSql' }),
    refId: z.string().exactOptional().openapi({ 'x-go-name': 'RefID' }),
    region: z.string().exactOptional().openapi({ 'x-go-name': 'Region' }),
    select: z
      .array(
        z.array(
          z
            .object({
              params: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Params' }),
              type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional()
      .openapi({ 'x-go-name': 'Select' }),
    statistics: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Statistics' }),
    step: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Step' }),
    table: z
      .string()
      .exactOptional()
      .openapi({ description: 'For PostgreSQL', 'x-go-name': 'Table' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'For Graphite', 'x-go-name': 'Target' }),
    timeColumn: z.string().exactOptional().openapi({ 'x-go-name': 'TimeColumn' }),
    timeField: z.string().exactOptional().openapi({ 'x-go-name': 'TimeField' }),
    valueType: z.string().exactOptional().openapi({ 'x-go-name': 'ValueType' }),
    where: z
      .array(
        z
          .object({
            datatype: z.string().exactOptional().openapi({ 'x-go-name': 'Datatype' }),
            name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
            params: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Params' }),
            type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ 'x-go-name': 'Where' }),
  })
  .openapi({
    description: 'for an any panel',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('Target')

const TooltipSchema = z
  .object({
    msResolution: z.boolean().exactOptional().openapi({ 'x-go-name': 'MsResolution' }),
    shared: z.boolean().exactOptional().openapi({ 'x-go-name': 'Shared' }),
    sort: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Sort' }),
    value_type: z.string().exactOptional().openapi({ 'x-go-name': 'ValueType' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('Tooltip')

const FloatStringSchema = z
  .object({ Valid: z.boolean().exactOptional(), Value: z.float64().exactOptional() })
  .openapi({
    title:
      'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('FloatString')

const AxisSchema = z
  .object({
    decimals: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Decimals' }),
    format: z.string().exactOptional().openapi({ 'x-go-name': 'Format' }),
    label: z.string().exactOptional().openapi({ 'x-go-name': 'Label' }),
    logBase: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'LogBase' }),
    max: FloatStringSchema.exactOptional(),
    min: FloatStringSchema.exactOptional(),
    show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }),
  })
  .openapi({
    description: 'for a graph panel',
    'x-go-package': 'github.com/grafana-tools/sdk',
    required: [],
  })
  .openapi('Axis')

type PanelType = {
  alert?: z.infer<typeof AlertSchema>
  aliasColors?: { [key: string]: unknown }
  bars?: boolean
  cards?: { cardPadding?: number; cardRound?: number }
  collapsed?: boolean
  color?: {
    cardColor?: string
    colorScale?: string
    colorScheme?: string
    exponent?: number
    max?: number
    min?: number
    mode?: string
  }
  colorBackground?: boolean
  colorValue?: boolean
  colors?: string[]
  columns?: z.infer<typeof ColumnSchema>[]
  content?: string
  dashLength?: bigint
  dashboardTags?: string[]
  dashes?: boolean
  dataFormat?: string
  datasource?: string
  decimals?: bigint
  description?: string
  editable?: boolean
  error?: boolean
  fieldConfig?: z.infer<typeof FieldConfigSchema>
  fill?: bigint
  folderId?: bigint
  format?: string
  gauge?: z.infer<typeof GaugeSchema>
  gridPos?: { h?: bigint; w?: bigint; x?: bigint; y?: bigint }
  headings?: boolean
  height?: { [key: string]: unknown }
  hideTimeOverride?: boolean
  hideZeroBuckets?: boolean
  highlightCards?: boolean
  id?: bigint
  isNew?: boolean
  leftYAxisLabel?: string
  legend?: z.infer<typeof LegendSchema>
  limit?: bigint
  lines?: boolean
  linewidth?: bigint
  links?: z.infer<typeof LinkSchema>[]
  mappingType?: bigint
  mappingTypes?: z.infer<typeof MapTypeSchema>[]
  maxDataPoints?: z.infer<typeof IntStringSchema>
  minSpan?: number
  mode?: string
  nameFilter?: string
  nullPointMode?: string
  onlyAlertsOnDashboard?: boolean
  options?: z.infer<typeof OptionsSchema>
  pageSize?: bigint
  panels?: PanelType[]
  percentage?: boolean
  pointradius?: number
  points?: boolean
  postfix?: string
  postfixFontSize?: string
  prefix?: string
  prefixFontSize?: string
  query?: string
  rangeMaps?: z.infer<typeof RangeMapSchema>[]
  recent?: boolean
  renderer?: string
  repeat?: string
  repeatPanelId?: bigint
  reverseYBuckets?: boolean
  rightYAxisLabel?: string
  scopedVars?: { [key: string]: { selected?: boolean; text?: string; value?: string } }
  scroll?: boolean
  search?: boolean
  seriesOverrides?: z.infer<typeof SeriesOverrideSchema>[]
  show?: string
  showHeader?: boolean
  sort?: z.infer<typeof SortSchema>
  sortOrder?: bigint
  spaceLength?: bigint
  span?: number
  sparkline?: z.infer<typeof SparkLineSchema>
  stack?: boolean
  starred?: boolean
  stateFilter?: string[]
  steppedLine?: boolean
  styles?: z.infer<typeof ColumnStyleSchema>[]
  tags?: string[]
  targets?: z.infer<typeof TargetSchema>[]
  thresholds?: string
  timeFrom?: string
  timeShift?: string
  title?: string
  tooltip?: z.infer<typeof TooltipSchema>
  tooltipDecimals?: bigint
  transform?: string
  transparent?: boolean
  type?: string
  valueFontSize?: string
  valueMaps?: z.infer<typeof ValueMapSchema>[]
  valueName?: string
  'x-axis'?: boolean
  xAxis?: { show?: boolean }
  xBucketNumber?: number
  xBucketSize?: string
  xaxis?: z.infer<typeof AxisSchema>
  'y-axis'?: boolean
  yAxis?: {
    decimals?: bigint
    format?: string
    logBase?: bigint
    max?: string
    min?: string
    show?: boolean
    splitFactor?: number
  }
  yBucketBound?: string
  yBucketNumber?: number
  yBucketSize?: number
  y_formats?: string[]
  yaxes?: z.infer<typeof AxisSchema>[]
}

const OpCategorySchema = z
  .int32()
  .openapi({ 'x-go-package': 'github.com/layer5io/meshery/meshes' })
  .openapi('OpCategory')

const SupportedOperationSchema = z
  .object({
    category: OpCategorySchema.exactOptional(),
    key: z.string().exactOptional().openapi({ 'x-go-name': 'Key' }),
    value: z.string().exactOptional().openapi({ 'x-go-name': 'Value' }),
  })
  .openapi({ 'x-go-package': 'github.com/layer5io/meshery/meshes', required: [] })
  .openapi('SupportedOperation')

const AdapterSchema = z
  .object({
    adapter_location: z.string().exactOptional().openapi({ 'x-go-name': 'Location' }),
    git_commit_sha: z.string().exactOptional().openapi({ 'x-go-name': 'GitCommitSHA' }),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    ops: z.array(SupportedOperationSchema).exactOptional().openapi({ 'x-go-name': 'Ops' }),
    version: z.string().exactOptional().openapi({ 'x-go-name': 'Version' }),
  })
  .openapi({
    description: 'Adapter represents an adapter in Meshery',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Adapter')

const UUIDSchema = z
  .array(z.int())
  .openapi({
    title: 'UUID is an array type to represent the value of a UUID, as defined in RFC-4122.',
    'x-go-package': 'github.com/gofrs/uuid',
  })
  .openapi('UUID')

const MapSchema = z
  .record(z.string(), z.object({}))
  .openapi({
    description:
      'It implements native SQL driver interfaces and hence can\nbe used for SQL json or jsonb types as a drop in replacement\nof golang native maps',
    title: 'Map type is an alias for map[string]interface{}',
    'x-go-package': 'github.com/layer5io/meshery/internal/sql',
  })
  .openapi('Map')

const MesheryApplicationSchema = z
  .object({
    application_file: z.string().exactOptional().openapi({ 'x-go-name': 'ApplicationFile' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'CreatedAt' }),
    id: UUIDSchema.exactOptional(),
    location: MapSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'UpdatedAt' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Meshery doesn't have the user id fields\nbut the remote provider is allowed to provide one",
        'x-go-name': 'UserID',
      }),
  })
  .openapi({
    description: 'MesheryApplication represents the applications that needs to be saved',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('MesheryApplication')

const ApplicationsAPIResponseSchema = z
  .object({
    applications: z
      .array(MesheryApplicationSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'Applications' }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Page' }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'TotalCount' }),
  })
  .openapi({
    description:
      'ApplicationsAPIResponse response retruned by patternfile endpoint on meshery server',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('ApplicationsAPIResponse')

const AuthenticateOKBodySchema = z
  .object({
    IdentityToken: z
      .string()
      .openapi({
        description: 'An opaque token used to authenticate a user after a successful login',
      }),
    Status: z.string().openapi({ description: 'The status of the authentication' }),
  })
  .openapi({
    description: 'AuthenticateOKBody authenticate o k body',
    required: ['IdentityToken', 'Status'],
    'x-go-package': 'github.com/docker/docker/api/types/registry',
  })
  .openapi('AuthenticateOKBody')

const FeatureSchema = z
  .string()
  .openapi({
    description: 'Feature is a type to store the features of the provider',
    'x-go-package': 'github.com/layer5io/meshery/models',
  })
  .openapi('Feature')

const CapabilitySchema = z
  .object({
    endpoint: z.string().exactOptional().openapi({ 'x-go-name': 'Endpoint' }),
    feature: FeatureSchema.exactOptional(),
  })
  .openapi({
    description: 'Capability is a capability of Provider indicating whether a feature is present',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Capability')

const CapabilitiesSchema = z
  .array(CapabilitySchema)
  .openapi({
    description: 'Capabilities is the collection of capability',
    'x-go-package': 'github.com/layer5io/meshery/models',
  })
  .openapi('Capabilities')

const ClientIPConfigSchema = z
  .object({
    timeoutSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'timeoutSeconds specifies the seconds of ClientIP type session sticky time.\nThe value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP".\nDefault value is 10800(for 3 hours).\n+optional',
        'x-go-name': 'TimeoutSeconds',
      }),
  })
  .openapi({
    title: 'ClientIPConfig represents the configurations of Client IP based session affinity.',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('ClientIPConfig')

const ContainerChangeResponseItemSchema = z
  .object({
    Kind: z.int().openapi({ description: 'Kind of change' }),
    Path: z.string().openapi({ description: 'Path to file that has changed' }),
  })
  .openapi({
    description:
      'ContainerChangeResponseItem change item in response to ContainerChanges operation',
    required: ['Kind', 'Path'],
    'x-go-package': 'github.com/docker/docker/api/types/container',
  })
  .openapi('ContainerChangeResponseItem')

const ContainerCreateCreatedBodySchema = z
  .object({
    Id: z.string().openapi({ description: 'The ID of the created container', 'x-go-name': 'ID' }),
    Warnings: z
      .array(z.string())
      .openapi({ description: 'Warnings encountered when creating the container' }),
  })
  .openapi({
    description: 'ContainerCreateCreatedBody OK response to ContainerCreate operation',
    required: ['Id', 'Warnings'],
    'x-go-package': 'github.com/docker/docker/api/types/container',
  })
  .openapi('ContainerCreateCreatedBody')

const ContainerTopOKBodySchema = z
  .object({
    Processes: z
      .array(z.array(z.string()))
      .openapi({
        description:
          'Each process running in the container, where each is process is an array of values corresponding to the titles',
      }),
    Titles: z.array(z.string()).openapi({ description: 'The ps column titles' }),
  })
  .openapi({
    description: 'ContainerTopOKBody OK response to ContainerTop operation',
    required: ['Processes', 'Titles'],
    'x-go-package': 'github.com/docker/docker/api/types/container',
  })
  .openapi('ContainerTopOKBody')

const ContainerUpdateOKBodySchema = z
  .object({ Warnings: z.array(z.string()).openapi({ description: 'warnings' }) })
  .openapi({
    description: 'ContainerUpdateOKBody OK response to ContainerUpdate operation',
    required: ['Warnings'],
    'x-go-package': 'github.com/docker/docker/api/types/container',
  })
  .openapi('ContainerUpdateOKBody')

const ContainerWaitOKBodyErrorSchema = z
  .object({ Message: z.string().exactOptional().openapi({ description: 'Details of an error' }) })
  .openapi({
    description: 'ContainerWaitOKBodyError container waiting error, if any',
    'x-go-package': 'github.com/docker/docker/api/types/container',
    required: [],
  })
  .openapi('ContainerWaitOKBodyError')

const ContainerWaitOKBodySchema = z
  .object({
    Error: ContainerWaitOKBodyErrorSchema,
    StatusCode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Exit code of the container' }),
  })
  .openapi({
    description: 'ContainerWaitOKBody OK response to ContainerWait operation',
    required: ['Error', 'StatusCode'],
    'x-go-package': 'github.com/docker/docker/api/types/container',
  })
  .openapi('ContainerWaitOKBody')

const ErrorResponseSchema = z
  .object({
    message: z.string().openapi({ description: 'The error message.', 'x-go-name': 'Message' }),
  })
  .openapi({
    required: ['message'],
    title: 'ErrorResponse Represents an error.',
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('ErrorResponse')

const ExtensionsSchema: z.ZodType<ExtensionsType> = z
  .lazy(() =>
    z
      .object({
        graphql: GraphQLExtensionsSchema.exactOptional(),
        navigator: NavigatorExtensionsSchema.exactOptional(),
        user_prefs: UserPrefsExtensionsSchema.exactOptional(),
      })
      .openapi({
        description: 'Extensions defines the UI extension points',
        'x-go-package': 'github.com/layer5io/meshery/models',
        required: [],
      }),
  )
  .openapi('Extensions')

const FieldsV1Schema = z
  .object({})
  .openapi({
    description:
      "Each key is either a '.' representing the field itself, and will always map to an empty set,\nor a string representing a sub-field or item. The string will follow one of these four formats:\n'f:<name>', where <name> is the name of a field in a struct, or key in a map\n'v:<value>', where <value> is the exact json formatted value of a list item\n'i:<index>', where <index> is position of a item in a list\n'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values\nIf a key maps to an empty Fields value, the field that key represents is part of the set.\n\nThe exact format is defined in sigs.k8s.io/structured-merge-diff",
    title: 'FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.',
    'x-go-package': 'k8s.io/apimachinery/pkg/apis/meta/v1',
  })
  .openapi('FieldsV1')

const MesheryFilterSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'CreatedAt' }),
    filter_file: z.string().exactOptional().openapi({ 'x-go-name': 'FilterFile' }),
    id: UUIDSchema.exactOptional(),
    location: MapSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'UpdatedAt' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Meshery doesn't have the user id fields\nbut the remote provider is allowed to provide one",
        'x-go-name': 'UserID',
      }),
  })
  .openapi({
    description: 'MesheryFilter represents the filters that needs to be saved',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('MesheryFilter')

const FiltersAPIResponseSchema = z
  .object({
    filters: z.array(MesheryFilterSchema).exactOptional().openapi({ 'x-go-name': 'Filters' }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Page' }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'TotalCount' }),
  })
  .openapi({
    description: 'FiltersAPIResponse response retruned by filterfile endpoint on meshery server',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('FiltersAPIResponse')

const PanelSchema: z.ZodType<PanelType> = z
  .lazy(() =>
    z
      .object({
        alert: AlertSchema.exactOptional(),
        aliasColors: z.object({}).exactOptional().openapi({ 'x-go-name': 'AliasColors' }),
        bars: z.boolean().exactOptional().openapi({ 'x-go-name': 'Bars' }),
        cards: z
          .object({
            cardPadding: z.float64().exactOptional().openapi({ 'x-go-name': 'CardPadding' }),
            cardRound: z.float64().exactOptional().openapi({ 'x-go-name': 'CardRound' }),
          })
          .exactOptional()
          .openapi({ 'x-go-name': 'Cards', required: [] }),
        collapsed: z.boolean().exactOptional().openapi({ 'x-go-name': 'Collapsed' }),
        color: z
          .object({
            cardColor: z.string().exactOptional().openapi({ 'x-go-name': 'CardColor' }),
            colorScale: z.string().exactOptional().openapi({ 'x-go-name': 'ColorScale' }),
            colorScheme: z.string().exactOptional().openapi({ 'x-go-name': 'ColorScheme' }),
            exponent: z.float64().exactOptional().openapi({ 'x-go-name': 'Exponent' }),
            max: z.float64().exactOptional().openapi({ 'x-go-name': 'Max' }),
            min: z.float64().exactOptional().openapi({ 'x-go-name': 'Min' }),
            mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
          })
          .exactOptional()
          .openapi({ 'x-go-name': 'Color', required: [] }),
        colorBackground: z.boolean().exactOptional().openapi({ 'x-go-name': 'ColorBackground' }),
        colorValue: z.boolean().exactOptional().openapi({ 'x-go-name': 'ColorValue' }),
        colors: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Colors' }),
        columns: z.array(ColumnSchema).exactOptional().openapi({ 'x-go-name': 'Columns' }),
        content: z.string().exactOptional().openapi({ 'x-go-name': 'Content' }),
        dashLength: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'DashLength' }),
        dashboardTags: z
          .array(z.string())
          .exactOptional()
          .openapi({ 'x-go-name': 'DashboardTags' }),
        dashes: z.boolean().exactOptional().openapi({ 'x-go-name': 'Dashes' }),
        dataFormat: z.string().exactOptional().openapi({ 'x-go-name': 'DataFormat' }),
        datasource: z.string().exactOptional().openapi({ 'x-go-name': 'Datasource' }),
        decimals: z
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
          .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Decimals' }),
        description: z.string().exactOptional().openapi({ 'x-go-name': 'Description' }),
        editable: z.boolean().exactOptional().openapi({ 'x-go-name': 'Editable' }),
        error: z.boolean().exactOptional().openapi({ 'x-go-name': 'Error' }),
        fieldConfig: FieldConfigSchema.exactOptional(),
        fill: z
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
          .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Fill' }),
        folderId: z
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
          .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'FolderID' }),
        format: z.string().exactOptional().openapi({ 'x-go-name': 'Format' }),
        gauge: GaugeSchema.exactOptional(),
        gridPos: z
          .object({
            h: z
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
              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'H' }),
            w: z
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
              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'W' }),
            x: z
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
              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'X' }),
            y: z
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
              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Y' }),
          })
          .exactOptional()
          .openapi({ 'x-go-name': 'GridPos', required: [] }),
        headings: z.boolean().exactOptional().openapi({ 'x-go-name': 'Headings' }),
        height: z.object({}).exactOptional().openapi({ 'x-go-name': 'Height' }),
        hideTimeOverride: z.boolean().exactOptional().openapi({ 'x-go-name': 'HideTimeOverride' }),
        hideZeroBuckets: z.boolean().exactOptional().openapi({ 'x-go-name': 'HideZeroBuckets' }),
        highlightCards: z.boolean().exactOptional().openapi({ 'x-go-name': 'HighlightCards' }),
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'ID' }),
        isNew: z.boolean().exactOptional().openapi({ 'x-go-name': 'IsNew' }),
        leftYAxisLabel: z.string().exactOptional().openapi({ 'x-go-name': 'LeftYAxisLabel' }),
        legend: LegendSchema.exactOptional(),
        limit: z
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
          .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Limit' }),
        lines: z.boolean().exactOptional().openapi({ 'x-go-name': 'Lines' }),
        linewidth: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Linewidth' }),
        links: z.array(LinkSchema).exactOptional().openapi({ 'x-go-name': 'Links' }),
        mappingType: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'MappingType' }),
        mappingTypes: z
          .array(MapTypeSchema)
          .exactOptional()
          .openapi({ 'x-go-name': 'MappingTypes' }),
        maxDataPoints: IntStringSchema.exactOptional(),
        minSpan: z.float32().exactOptional().openapi({ 'x-go-name': 'MinSpan' }),
        mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
        nameFilter: z.string().exactOptional().openapi({ 'x-go-name': 'NameFilter' }),
        nullPointMode: z.string().exactOptional().openapi({ 'x-go-name': 'NullPointMode' }),
        onlyAlertsOnDashboard: z
          .boolean()
          .exactOptional()
          .openapi({ 'x-go-name': 'OnlyAlertsOnDashboard' }),
        options: OptionsSchema.exactOptional(),
        pageSize: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
        panels: z.array(PanelSchema).exactOptional().openapi({ 'x-go-name': 'Panels' }),
        percentage: z.boolean().exactOptional().openapi({ 'x-go-name': 'Percentage' }),
        pointradius: z.float32().exactOptional().openapi({ 'x-go-name': 'Pointradius' }),
        points: z.boolean().exactOptional().openapi({ 'x-go-name': 'Points' }),
        postfix: z.string().exactOptional().openapi({ 'x-go-name': 'Postfix' }),
        postfixFontSize: z.string().exactOptional().openapi({ 'x-go-name': 'PostfixFontSize' }),
        prefix: z.string().exactOptional().openapi({ 'x-go-name': 'Prefix' }),
        prefixFontSize: z.string().exactOptional().openapi({ 'x-go-name': 'PrefixFontSize' }),
        query: z.string().exactOptional().openapi({ 'x-go-name': 'Query' }),
        rangeMaps: z.array(RangeMapSchema).exactOptional().openapi({ 'x-go-name': 'RangeMaps' }),
        recent: z.boolean().exactOptional().openapi({ 'x-go-name': 'Recent' }),
        renderer: z.string().exactOptional().openapi({ 'x-go-name': 'Renderer' }),
        repeat: z.string().exactOptional().openapi({ 'x-go-name': 'Repeat' }),
        repeatPanelId: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'uint64',
            description: 'RepeatIteration *int64   `json:"repeatIteration,omitempty"`',
            'x-go-name': 'RepeatPanelID',
          }),
        reverseYBuckets: z.boolean().exactOptional().openapi({ 'x-go-name': 'ReverseYBuckets' }),
        rightYAxisLabel: z.string().exactOptional().openapi({ 'x-go-name': 'RightYAxisLabel' }),
        scopedVars: z
          .record(
            z.string(),
            z
              .object({
                selected: z.boolean().exactOptional().openapi({ 'x-go-name': 'Selected' }),
                text: z.string().exactOptional().openapi({ 'x-go-name': 'Text' }),
                value: z.string().exactOptional().openapi({ 'x-go-name': 'Value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ 'x-go-name': 'ScopedVars' }),
        scroll: z.boolean().exactOptional().openapi({ 'x-go-name': 'Scroll' }),
        search: z.boolean().exactOptional().openapi({ 'x-go-name': 'Search' }),
        seriesOverrides: z
          .array(SeriesOverrideSchema)
          .exactOptional()
          .openapi({ 'x-go-name': 'SeriesOverrides' }),
        show: z.string().exactOptional().openapi({ 'x-go-name': 'Show' }),
        showHeader: z.boolean().exactOptional().openapi({ 'x-go-name': 'ShowHeader' }),
        sort: SortSchema.exactOptional(),
        sortOrder: z
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
          .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'SortOrder' }),
        spaceLength: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'SpaceLength' }),
        span: z.float32().exactOptional().openapi({ 'x-go-name': 'Span' }),
        sparkline: SparkLineSchema.exactOptional(),
        stack: z.boolean().exactOptional().openapi({ 'x-go-name': 'Stack' }),
        starred: z.boolean().exactOptional().openapi({ 'x-go-name': 'Starred' }),
        stateFilter: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'StateFilter' }),
        steppedLine: z.boolean().exactOptional().openapi({ 'x-go-name': 'SteppedLine' }),
        styles: z.array(ColumnStyleSchema).exactOptional().openapi({ 'x-go-name': 'Styles' }),
        tags: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'Tags' }),
        targets: z.array(TargetSchema).exactOptional().openapi({ 'x-go-name': 'Targets' }),
        thresholds: z.string().exactOptional().openapi({ 'x-go-name': 'Thresholds' }),
        timeFrom: z.string().exactOptional().openapi({ 'x-go-name': 'TimeFrom' }),
        timeShift: z.string().exactOptional().openapi({ 'x-go-name': 'TimeShift' }),
        title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
        tooltip: TooltipSchema.exactOptional(),
        tooltipDecimals: z
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
          .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'TooltipDecimals' }),
        transform: z.string().exactOptional().openapi({ 'x-go-name': 'Transform' }),
        transparent: z.boolean().exactOptional().openapi({ 'x-go-name': 'Transparent' }),
        type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
        valueFontSize: z.string().exactOptional().openapi({ 'x-go-name': 'ValueFontSize' }),
        valueMaps: z.array(ValueMapSchema).exactOptional().openapi({ 'x-go-name': 'ValueMaps' }),
        valueName: z.string().exactOptional().openapi({ 'x-go-name': 'ValueName' }),
        'x-axis': z.boolean().exactOptional().openapi({ 'x-go-name': 'XAxis' }),
        xAxis: z
          .object({ show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }) })
          .exactOptional()
          .openapi({ 'x-go-name': 'XAxis', required: [] }),
        xBucketNumber: z.float64().exactOptional().openapi({ 'x-go-name': 'XBucketNumber' }),
        xBucketSize: z.string().exactOptional().openapi({ 'x-go-name': 'XBucketSize' }),
        xaxis: AxisSchema.exactOptional(),
        'y-axis': z.boolean().exactOptional().openapi({ 'x-go-name': 'YAxis' }),
        yAxis: z
          .object({
            decimals: z
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
              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Decimals' }),
            format: z.string().exactOptional().openapi({ 'x-go-name': 'Format' }),
            logBase: z
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
              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'LogBase' }),
            max: z.string().exactOptional().openapi({ 'x-go-name': 'Max' }),
            min: z.string().exactOptional().openapi({ 'x-go-name': 'Min' }),
            show: z.boolean().exactOptional().openapi({ 'x-go-name': 'Show' }),
            splitFactor: z.float64().exactOptional().openapi({ 'x-go-name': 'SplitFactor' }),
          })
          .exactOptional()
          .openapi({ 'x-go-name': 'YAxis', required: [] }),
        yBucketBound: z.string().exactOptional().openapi({ 'x-go-name': 'YBucketBound' }),
        yBucketNumber: z.float64().exactOptional().openapi({ 'x-go-name': 'YBucketNumber' }),
        yBucketSize: z.float64().exactOptional().openapi({ 'x-go-name': 'YBucketSize' }),
        y_formats: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'YFormats' }),
        yaxes: z.array(AxisSchema).exactOptional().openapi({ 'x-go-name': 'Yaxes' }),
      })
      .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] }),
  )
  .openapi('Panel')

const GrafanaDataSourceSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'ID' }),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
  })
  .openapi({
    description: 'GrafanaDataSource represents a Grafana datasource like Prometheus',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('GrafanaDataSource')

const GrafanaTemplateVarsSchema = z
  .object({
    datasource: GrafanaDataSourceSchema.exactOptional(),
    hide: z.int().exactOptional().openapi({ 'x-go-name': 'Hide' }),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    query: z.string().exactOptional().openapi({ 'x-go-name': 'Query' }),
    value: z.object({}).exactOptional().openapi({ 'x-go-name': 'Value' }),
  })
  .openapi({
    description: 'GrafanaTemplateVars represents template variables in a bboard',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('GrafanaTemplateVars')

const GrafanaBoardSchema = z
  .object({
    org_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'OrgID' }),
    panels: z.array(PanelSchema).exactOptional().openapi({ 'x-go-name': 'Panels' }),
    slug: z.string().exactOptional().openapi({ 'x-go-name': 'Slug' }),
    template_vars: z
      .array(GrafanaTemplateVarsSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'TemplateVars' }),
    title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
    uid: z.string().exactOptional().openapi({ 'x-go-name': 'UID' }),
    uri: z.string().exactOptional().openapi({ 'x-go-name': 'URI' }),
  })
  .openapi({
    description: 'GrafanaBoard represents a Grafana board',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('GrafanaBoard')

const SelectedGrafanaConfigSchema = z
  .object({
    board: GrafanaBoardSchema.exactOptional(),
    panels: z.array(PanelSchema).exactOptional().openapi({ 'x-go-name': 'GrafanaPanels' }),
    templateVars: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-go-name': 'SelectedTemplateVars' }),
  })
  .openapi({
    description:
      'SelectedGrafanaConfig represents the selected boards, panels, and template variables',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('SelectedGrafanaConfig')

const GrafanaSchema = z
  .object({
    grafanaAPIKey: z.string().exactOptional().openapi({ 'x-go-name': 'GrafanaAPIKey' }),
    grafanaURL: z.string().exactOptional().openapi({ 'x-go-name': 'GrafanaURL' }),
    selectedBoardsConfigs: z
      .array(SelectedGrafanaConfigSchema)
      .exactOptional()
      .openapi({
        description: 'GrafanaBoardSearch string          `json:"grafanaBoardSearch,omitempty"`',
        'x-go-name': 'GrafanaBoards',
      }),
  })
  .openapi({
    description: 'Grafana represents the Grafana session config',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Grafana')

const GrafanaConfigParamsSchema = z
  .object({
    grafanaAPIKey: z.string().exactOptional().openapi({ 'x-go-name': 'GrafanaAPIKey' }),
    grafanaURL: z.string().exactOptional().openapi({ 'x-go-name': 'GrafanaURL' }),
  })
  .openapi({
    description: 'Parameters to save Grafana configuration',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('GrafanaConfigParams')

const GraphDriverDataSchema = z
  .object({
    Data: z.record(z.string(), z.string()).openapi({ description: 'data' }),
    Name: z.string().openapi({ description: 'name' }),
  })
  .openapi({
    required: ['Data', 'Name'],
    title: "GraphDriverData Information about a container's graph driver.",
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('GraphDriverData')

const HistoryResponseItemSchema = z
  .object({
    Comment: z.string().openapi({ description: 'comment' }),
    Created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'created' }),
    CreatedBy: z.string().openapi({ description: 'created by' }),
    Id: z.string().openapi({ description: 'Id', 'x-go-name': 'ID' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'size' }),
    Tags: z.array(z.string()).openapi({ description: 'tags' }),
  })
  .openapi({
    description:
      'HistoryResponseItem individual image layer information in response to ImageHistory operation',
    required: ['Comment', 'Created', 'CreatedBy', 'Id', 'Size', 'Tags'],
    'x-go-package': 'github.com/docker/docker/api/types/image',
  })
  .openapi('HistoryResponseItem')

const IPFamilySchema = z
  .string()
  .openapi({
    description:
      'IPFamily represents the IP Family (IPv4 or IPv6). This type is used\nto express the family of an IP expressed by a type (i.e. service.Spec.IPFamily)',
    'x-go-package': 'k8s.io/api/core/v1',
  })
  .openapi('IPFamily')

const IdResponseSchema = z
  .object({
    Id: z
      .string()
      .openapi({ description: 'The id of the newly created object.', 'x-go-name': 'ID' }),
  })
  .openapi({
    description: 'IDResponse Response to an API call that returns just an Id',
    required: ['Id'],
    'x-go-name': 'IDResponse',
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('IdResponse')

const ImageDeleteResponseItemSchema = z
  .object({
    Deleted: z
      .string()
      .exactOptional()
      .openapi({ description: 'The image ID of an image that was deleted' }),
    Untagged: z
      .string()
      .exactOptional()
      .openapi({ description: 'The image ID of an image that was untagged' }),
  })
  .openapi({
    description: 'ImageDeleteResponseItem image delete response item',
    'x-go-package': 'github.com/docker/docker/api/types',
    required: [],
  })
  .openapi('ImageDeleteResponseItem')

const ImageSummarySchema = z
  .object({
    Containers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'containers' }),
    Created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'created' }),
    Id: z.string().openapi({ description: 'Id', 'x-go-name': 'ID' }),
    Labels: z.record(z.string(), z.string()).openapi({ description: 'labels' }),
    ParentId: z.string().openapi({ description: 'parent Id', 'x-go-name': 'ParentID' }),
    RepoDigests: z.array(z.string()).openapi({ description: 'repo digests' }),
    RepoTags: z.array(z.string()).openapi({ description: 'repo tags' }),
    SharedSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'shared size' }),
    Size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'size' }),
    VirtualSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'virtual size' }),
  })
  .openapi({
    description: 'ImageSummary image summary',
    required: [
      'Containers',
      'Created',
      'Id',
      'Labels',
      'ParentId',
      'RepoDigests',
      'RepoTags',
      'SharedSize',
      'Size',
      'VirtualSize',
    ],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('ImageSummary')

const TypeSchema = z
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
    title: 'Type represents the stored type of IntOrString.',
    'x-go-package': 'k8s.io/apimachinery/pkg/util/intstr',
  })
  .openapi('Type')

const IntOrStringSchema = z
  .object({
    IntVal: z.int32().exactOptional(),
    StrVal: z.string().exactOptional(),
    Type: TypeSchema.exactOptional(),
  })
  .openapi({
    description:
      '+protobuf=true\n+protobuf.options.(gogoproto.goproto_stringer)=false\n+k8s:openapi-gen=true',
    title:
      'IntOrString is a type that can hold an int32 or a string.  When used in\nJSON or YAML marshalling and unmarshalling, it produces or consumes the\ninner type.  This allows you to have, for example, a JSON field that can\naccept a name or number.\nTODO: Rename to Int32OrString',
    'x-go-package': 'k8s.io/apimachinery/pkg/util/intstr',
    required: [],
  })
  .openapi('IntOrString')

const K8SNodeSchema = z
  .object({
    allocatable_cpu: z.string().exactOptional().openapi({ 'x-go-name': 'AllocatableCPU' }),
    allocatable_memory: z.string().exactOptional().openapi({ 'x-go-name': 'AllocatableMemory' }),
    architecture: z.string().exactOptional().openapi({ 'x-go-name': 'Architecture' }),
    capacity_cpu: z.string().exactOptional().openapi({ 'x-go-name': 'CapacityCPU' }),
    capacity_memory: z.string().exactOptional().openapi({ 'x-go-name': 'CapacityMemory' }),
    container_runtime_version: z
      .string()
      .exactOptional()
      .openapi({ 'x-go-name': 'ContainerRuntimeVersion' }),
    hostname: z.string().exactOptional().openapi({ 'x-go-name': 'HostName' }),
    internal_ip: z.string().exactOptional().openapi({ 'x-go-name': 'InternalIP' }),
    kubelet_version: z.string().exactOptional().openapi({ 'x-go-name': 'KubeletVersion' }),
    kubeproxy_version: z.string().exactOptional().openapi({ 'x-go-name': 'KubeProxyVersion' }),
    operating_system: z.string().exactOptional().openapi({ 'x-go-name': 'OperatingSystem' }),
    os_image: z.string().exactOptional().openapi({ 'x-go-name': 'OSImage' }),
  })
  .openapi({
    description: 'K8SNode - represents a kubernetes node',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('K8SNode')

const K8SConfigSchema = z
  .object({
    clusterConfigured: z.boolean().exactOptional().openapi({ 'x-go-name': 'ClusterConfigured' }),
    config: z.array(z.int()).exactOptional().openapi({ 'x-go-name': 'Config' }),
    configuredServer: z.string().exactOptional().openapi({ 'x-go-name': 'Server' }),
    contextName: z.string().exactOptional().openapi({ 'x-go-name': 'ContextName' }),
    inClusterConfig: z.boolean().exactOptional().openapi({ 'x-go-name': 'InClusterConfig' }),
    k8sfile: z.string().exactOptional().openapi({ 'x-go-name': 'K8Sfile' }),
    nodes: z.array(K8SNodeSchema).exactOptional().openapi({ 'x-go-name': 'Nodes' }),
    server_version: z.string().exactOptional().openapi({ 'x-go-name': 'ServerVersion' }),
  })
  .openapi({
    description: 'K8SConfig represents all the k8s session config',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('K8SConfig')

const K8SContextSchema = z
  .object({
    clusterName: z.string().exactOptional().openapi({ 'x-go-name': 'ClusterName' }),
    contextName: z.string().exactOptional().openapi({ 'x-go-name': 'ContextName' }),
    currentContext: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'ContextDisplayName string `json:"context-display-name"`',
        'x-go-name': 'IsCurrentContext',
      }),
  })
  .openapi({
    description: 'K8SContext is just used to send contexts to the UI',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('K8SContext')

const LatenciesMsSchema = z
  .object({
    Average: z.float64().exactOptional(),
    Max: z.float64().exactOptional(),
    Min: z.float64().exactOptional(),
    P50: z.float64().exactOptional(),
    P90: z.float64().exactOptional(),
    P99: z.float64().exactOptional(),
  })
  .openapi({
    description: 'LatenciesMs - represents a collection of important latencies',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('LatenciesMs')

const LoadBalancerIngressSchema = z
  .object({
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hostname is set for load-balancer ingress points that are DNS based\n(typically AWS load-balancers)\n+optional',
        'x-go-name': 'Hostname',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IP is set for load-balancer ingress points that are IP based\n(typically GCE or OpenStack load-balancers)\n+optional',
        'x-go-name': 'IP',
      }),
  })
  .openapi({
    description: 'traffic intended for the service should be sent to an ingress point.',
    title: 'LoadBalancerIngress represents the status of a load-balancer ingress point:',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('LoadBalancerIngress')

const LoadBalancerStatusSchema = z
  .object({
    ingress: z
      .array(LoadBalancerIngressSchema)
      .exactOptional()
      .openapi({
        description:
          'Ingress is a list containing ingress points for the load-balancer.\nTraffic intended for the service should be sent to these ingress points.\n+optional',
        'x-go-name': 'Ingress',
      }),
  })
  .openapi({
    title: 'LoadBalancerStatus represents the status of a load-balancer.',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('LoadBalancerStatus')

const LoadTestPreferencesSchema = z
  .object({
    c: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'ConcurrentRequests' }),
    gen: z.string().exactOptional().openapi({ 'x-go-name': 'LoadGenerator' }),
    qps: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'QueriesPerSecond' }),
    t: z.string().exactOptional().openapi({ 'x-go-name': 'Duration' }),
  })
  .openapi({
    description: 'LoadTestPreferences represents the load test preferences',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('LoadTestPreferences')

const ManagedFieldsOperationTypeSchema = z
  .string()
  .openapi({
    title:
      'ManagedFieldsOperationType is the type of operation which lead to a ManagedFieldsEntry being created.',
    'x-go-package': 'k8s.io/apimachinery/pkg/apis/meta/v1',
  })
  .openapi('ManagedFieldsOperationType')

const TimeSchema = z
  .object({})
  .openapi({
    description:
      '+protobuf.options.marshal=false\n+protobuf.as=Timestamp\n+protobuf.options.(gogoproto.goproto_stringer)=false',
    title:
      'Time is a wrapper around time.Time which supports correct\nmarshaling to YAML and JSON.  Wrappers are provided for many\nof the factory methods that the time package offers.',
    'x-go-package': 'k8s.io/apimachinery/pkg/apis/meta/v1',
  })
  .openapi('Time')

const ManagedFieldsEntrySchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the version of this resource that this field set\napplies to. The format is "group/version" just like the top-level\nAPIVersion field. It is necessary to track the version of a field\nset because it cannot be automatically converted.',
        'x-go-name': 'APIVersion',
      }),
    fieldsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'FieldsType is the discriminator for the different fields format and version.\nThere is currently only one possible value: "FieldsV1"',
        'x-go-name': 'FieldsType',
      }),
    fieldsV1: FieldsV1Schema.exactOptional(),
    manager: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Manager is an identifier of the workflow managing these fields.',
        'x-go-name': 'Manager',
      }),
    operation: ManagedFieldsOperationTypeSchema.exactOptional(),
    time: TimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource\nthat the fieldset applies to.',
    'x-go-package': 'k8s.io/apimachinery/pkg/apis/meta/v1',
    required: [],
  })
  .openapi('ManagedFieldsEntry')

const MesheryPatternSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'CreatedAt' }),
    id: UUIDSchema.exactOptional(),
    location: MapSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    pattern_file: z.string().exactOptional().openapi({ 'x-go-name': 'PatternFile' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'UpdatedAt' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Meshery doesn't have the user id fields\nbut the remote provider is allowed to provide one",
        'x-go-name': 'UserID',
      }),
  })
  .openapi({
    description: 'MesheryPattern represents the patterns that needs to be saved',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('MesheryPattern')

const UIDSchema = z
  .string()
  .openapi({
    description:
      "UID is a type that holds unique ID values, including UUIDs.  Because we\ndon't ONLY use UUIDs, this is an alias to string.  Being a type captures\nintent and helps make sure that UIDs and names do not get conflated.",
    'x-go-package': 'k8s.io/apimachinery/pkg/types',
  })
  .openapi('UID')

const OwnerReferenceSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version of the referent.', 'x-go-name': 'APIVersion' }),
    blockOwnerDeletion: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, AND if the owner has the "foregroundDeletion" finalizer, then\nthe owner cannot be deleted from the key-value store until this\nreference is removed.\nDefaults to false.\nTo set this field, a user needs "delete" permission of the owner,\notherwise 422 (Unprocessable Entity) will be returned.\n+optional',
        'x-go-name': 'BlockOwnerDeletion',
      }),
    controller: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, this reference points to the managing controller.\n+optional',
        'x-go-name': 'Controller',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind of the referent.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
        'x-go-name': 'Kind',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the referent.\nMore info: http://kubernetes.io/docs/user-guide/identifiers#names',
        'x-go-name': 'Name',
      }),
    uid: UIDSchema.exactOptional(),
  })
  .openapi({
    description:
      'OwnerReference contains enough information to let you identify an owning\nobject. An owning object must be in the same namespace as the dependent, or\nbe cluster-scoped, so there is no namespace field.',
    'x-go-package': 'k8s.io/apimachinery/pkg/apis/meta/v1',
    required: [],
  })
  .openapi('OwnerReference')

const PatternsAPIResponseSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Page' }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
    patterns: z.array(MesheryPatternSchema).exactOptional().openapi({ 'x-go-name': 'Patterns' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'TotalCount' }),
  })
  .openapi({
    description: 'PatternsAPIResponse response retruned by patternfile endpoint on meshery server',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PatternsAPIResponse')

const StringArraySchema = z
  .array(z.string())
  .openapi({
    title: 'StringArray represents a one-dimensional array of the PostgreSQL character types.',
    'x-go-package': 'github.com/lib/pq',
  })
  .openapi('StringArray')

const PerformanceProfileSchema = z
  .object({
    concurrent_request: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'ConcurrentRequest' }),
    content_type: z.string().exactOptional().openapi({ 'x-go-name': 'ContentType' }),
    created_at: TimeSchema.exactOptional(),
    duration: z.string().exactOptional().openapi({ 'x-go-name': 'Duration' }),
    endpoints: StringArraySchema.exactOptional(),
    id: UUIDSchema.exactOptional(),
    last_run: TimeSchema.exactOptional(),
    load_generators: StringArraySchema.exactOptional(),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    qps: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'QPS' }),
    request_body: z.string().exactOptional().openapi({ 'x-go-name': 'RequestBody' }),
    request_cookies: z.string().exactOptional().openapi({ 'x-go-name': 'RequestCookies' }),
    request_headers: z.string().exactOptional().openapi({ 'x-go-name': 'RequestHeaders' }),
    schedule: UUIDSchema.exactOptional(),
    service_mesh: z.string().exactOptional().openapi({ 'x-go-name': 'ServiceMesh' }),
    total_results: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'TotalResults' }),
    updated_at: TimeSchema.exactOptional(),
  })
  .openapi({
    description: 'PerformanceProfile represents the performance profile that needs\nto be saved',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceProfile')

const PerformanceProfileParametersSchema = z
  .object({
    concurrent_request: z
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
        description: 'number of concurrent requests',
        'x-go-name': 'ConcurrentRequest',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'duration of tests e.g. 30s', 'x-go-name': 'Duration' }),
    endpoints: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'array of urls of performance results', 'x-go-name': 'Endpoints' }),
    load_generators: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'array of load generators', 'x-go-name': 'LoadGenerators' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of performance profile', 'x-go-name': 'Name' }),
    qps: z
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
        description: 'qps in integer',
        'x-go-name': 'QPS',
      }),
    service_mesh: z
      .string()
      .exactOptional()
      .openapi({ description: 'service mesh for performance tests', 'x-go-name': 'ServiceMesh' }),
  })
  .openapi({
    description:
      'PerformanceProfileParameters structs contains parameters to save a performance profile',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceProfileParameters')

const PerformanceProfilesAPIResponseSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Page' }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
    profiles: z
      .array(PerformanceProfileSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'Profiles' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'TotalCount' }),
  })
  .openapi({
    description:
      'PerformanceProfilesAPIResponse response retruned by performance endpoint on meshery server',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceProfilesAPIResponse')

const RunnerResultsSchema = z
  .object({
    ActualDuration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Duration' }),
    ActualQPS: z.float64().exactOptional().openapi({ 'x-go-name': 'QPS' }),
    DurationHistogram: z
      .object({
        Avg: z.float64().exactOptional().openapi({ 'x-go-name': 'Average' }),
        Max: z.float64().exactOptional(),
        Min: z.float64().exactOptional(),
        Percentiles: z
          .array(
            z
              .object({
                Percentile: z.float64().exactOptional(),
                Value: z.float64().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    StartTime: z.iso.datetime({ offset: true }).exactOptional(),
    URL: z.string().exactOptional(),
    'load-generator': z.string().exactOptional().openapi({ 'x-go-name': 'LoadGenerator' }),
  })
  .openapi({ 'x-go-package': 'github.com/layer5io/meshery/models', required: [] })
  .openapi('RunnerResults')

const PerformanceResultSchema = z
  .object({
    mesh: z.string().exactOptional().openapi({ 'x-go-name': 'Mesh' }),
    meshery_id: UUIDSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    performance_profile: UUIDSchema.exactOptional(),
    runner_results: RunnerResultsSchema.exactOptional(),
    server_board_config: z.object({}).exactOptional().openapi({ 'x-go-name': 'ServerBoardConfig' }),
    server_metrics: z.object({}).exactOptional().openapi({ 'x-go-name': 'ServerMatrics' }),
    test_start_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'TestStartTime' }),
    user_id: UUIDSchema.exactOptional(),
  })
  .openapi({
    description: 'PerformanceResult represents the result of a performance test',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceResult')

const PerformanceResultsAPIResponseSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Page' }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
    results: z.array(PerformanceResultSchema).exactOptional().openapi({ 'x-go-name': 'Results' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'TotalCount' }),
  })
  .openapi({
    description:
      'PerformanceResultsAPIResponse response retruned by performance endpoint on meshery server',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceResultsAPIResponse')

const PerformanceSpecSchema = z
  .object({
    ActualQPS: z.float64().exactOptional(),
    DetailsURI: z.string().exactOptional(),
    EndTime: z.iso.datetime({ offset: true }).exactOptional(),
    EnvID: z.string().exactOptional(),
    Latencies: LatenciesMsSchema.exactOptional(),
    MeshConfigID: z.string().exactOptional(),
    SMPVersion: z.string().exactOptional(),
    StartTime: z.iso.datetime({ offset: true }).exactOptional(),
    TestID: z.string().exactOptional(),
  })
  .openapi({
    description:
      'PerformanceSpec - represents SMP, see here https://github.com/layer5io/service-mesh-performance-specification',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceSpec')

const PerformanceTestConfigClientProtocolSchema = z
  .int32()
  .openapi({ 'x-go-package': 'github.com/layer5io/service-mesh-performance/spec' })
  .openapi('PerformanceTestConfigClientProtocol')

const PerformanceTestConfigClientSchema = z
  .object({
    body: z.string().exactOptional().openapi({ 'x-go-name': 'Body' }),
    connections: z.int32().exactOptional().openapi({ 'x-go-name': 'Connections' }),
    content_type: z.string().exactOptional().openapi({ 'x-go-name': 'ContentType' }),
    cookies: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-go-name': 'Cookies' }),
    endpoint_urls: z.array(z.string()).exactOptional().openapi({ 'x-go-name': 'EndpointUrls' }),
    headers: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-go-name': 'Headers' }),
    internal: z.boolean().exactOptional().openapi({ 'x-go-name': 'Internal' }),
    load_generator: z.string().exactOptional().openapi({ 'x-go-name': 'LoadGenerator' }),
    protocol: PerformanceTestConfigClientProtocolSchema.exactOptional(),
    rps: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Rps' }),
  })
  .openapi({ 'x-go-package': 'github.com/layer5io/service-mesh-performance/spec', required: [] })
  .openapi('PerformanceTestConfigClient')

const PerformanceTestConfigSchema = z
  .object({
    clients: z
      .array(PerformanceTestConfigClientSchema)
      .exactOptional()
      .openapi({ description: 'Single or distributed load generators', 'x-go-name': 'Clients' }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Length of time the endpoint will be under load',
        'x-go-name': 'Duration',
      }),
    id: z.string().exactOptional().openapi({ 'x-go-name': 'Id' }),
    labels: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-go-name': 'Labels' }),
    name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
    smp_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Spec version', 'x-go-name': 'SmpVersion' }),
  })
  .openapi({ 'x-go-package': 'github.com/layer5io/service-mesh-performance/spec', required: [] })
  .openapi('PerformanceTestConfig')

const PerformanceTestParametersSchema = z
  .object({
    c: z
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
        description: 'concurrent request in number',
        'x-go-name': 'ConcurrentRequest',
      }),
    dur: z
      .string()
      .exactOptional()
      .openapi({ description: 'duration e.g. s for second', 'x-go-name': 'Duration' }),
    loadGenerator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'load generator for performance test',
        'x-go-name': 'LoadGenerator',
      }),
    mesh: z
      .string()
      .exactOptional()
      .openapi({ description: 'service mesh for performance test', 'x-go-name': 'ServiceMesh' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of performance test', 'x-go-name': 'Name' }),
    qps: z
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
        description: 'qps in number',
        'x-go-name': 'QPS',
      }),
    t: z
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
        description: 'time in integer e.g. 30',
        'x-go-name': 'Time',
      }),
    url: z.string().exactOptional().openapi({ description: 'url for test', 'x-go-name': 'URL' }),
    uuid: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'test-id of pre-existing test', 'x-go-name': 'TestID' }),
  })
  .openapi({
    description: 'PerformanceTestParameters contains parameters to run a performance test',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PerformanceTestParameters')

const PluginConfigArgsSchema = z
  .object({
    Description: z.string().openapi({ description: 'description' }),
    Name: z.string().openapi({ description: 'name' }),
    Settable: z.array(z.string()).openapi({ description: 'settable' }),
    Value: z.array(z.string()).openapi({ description: 'value' }),
  })
  .openapi({
    description: 'PluginConfigArgs plugin config args',
    required: ['Description', 'Name', 'Settable', 'Value'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginConfigArgs')

const PluginEnvSchema = z
  .object({
    Description: z.string().openapi({ description: 'description' }),
    Name: z.string().openapi({ description: 'name' }),
    Settable: z.array(z.string()).openapi({ description: 'settable' }),
    Value: z.string().openapi({ description: 'value' }),
  })
  .openapi({
    description: 'PluginEnv plugin env',
    required: ['Description', 'Name', 'Settable', 'Value'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginEnv')

const PluginInterfaceTypeSchema = z
  .object({
    Capability: z.string().openapi({ description: 'capability' }),
    Prefix: z.string().openapi({ description: 'prefix' }),
    Version: z.string().openapi({ description: 'version' }),
  })
  .openapi({
    description: 'PluginInterfaceType plugin interface type',
    required: ['Capability', 'Prefix', 'Version'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginInterfaceType')

const PluginConfigInterfaceSchema = z
  .object({
    ProtocolScheme: z
      .string()
      .exactOptional()
      .openapi({ description: 'Protocol to use for clients connecting to the plugin.' }),
    Socket: z.string().openapi({ description: 'socket' }),
    Types: z.array(PluginInterfaceTypeSchema).openapi({ description: 'types' }),
  })
  .openapi({
    description: 'PluginConfigInterface The interface between Docker and the plugin',
    required: ['Socket', 'Types'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginConfigInterface')

const PluginDeviceSchema = z
  .object({
    Description: z.string().openapi({ description: 'description' }),
    Name: z.string().openapi({ description: 'name' }),
    Path: z.string().openapi({ description: 'path' }),
    Settable: z.array(z.string()).openapi({ description: 'settable' }),
  })
  .openapi({
    description: 'PluginDevice plugin device',
    required: ['Description', 'Name', 'Path', 'Settable'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginDevice')

const PluginConfigLinuxSchema = z
  .object({
    AllowAllDevices: z.boolean().openapi({ description: 'allow all devices' }),
    Capabilities: z.array(z.string()).openapi({ description: 'capabilities' }),
    Devices: z.array(PluginDeviceSchema).openapi({ description: 'devices' }),
  })
  .openapi({
    description: 'PluginConfigLinux plugin config linux',
    required: ['AllowAllDevices', 'Capabilities', 'Devices'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginConfigLinux')

const PluginMountSchema = z
  .object({
    Description: z.string().openapi({ description: 'description' }),
    Destination: z.string().openapi({ description: 'destination' }),
    Name: z.string().openapi({ description: 'name' }),
    Options: z.array(z.string()).openapi({ description: 'options' }),
    Settable: z.array(z.string()).openapi({ description: 'settable' }),
    Source: z.string().openapi({ description: 'source' }),
    Type: z.string().openapi({ description: 'type' }),
  })
  .openapi({
    description: 'PluginMount plugin mount',
    required: ['Description', 'Destination', 'Name', 'Options', 'Settable', 'Source', 'Type'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginMount')

const PluginConfigNetworkSchema = z
  .object({ Type: z.string().openapi({ description: 'type' }) })
  .openapi({
    description: 'PluginConfigNetwork plugin config network',
    required: ['Type'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginConfigNetwork')

const PluginConfigUserSchema = z
  .object({
    GID: z.uint32().exactOptional().openapi({ description: 'g ID' }),
    UID: z.uint32().exactOptional().openapi({ description: 'UID' }),
  })
  .openapi({
    description: 'PluginConfigUser plugin config user',
    'x-go-package': 'github.com/docker/docker/api/types',
    required: [],
  })
  .openapi('PluginConfigUser')

const PluginConfigRootfsSchema = z
  .object({
    diff_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'diff ids', 'x-go-name': 'DiffIds' }),
    type: z.string().exactOptional().openapi({ description: 'type', 'x-go-name': 'Type' }),
  })
  .openapi({
    description: 'PluginConfigRootfs plugin config rootfs',
    'x-go-package': 'github.com/docker/docker/api/types',
    required: [],
  })
  .openapi('PluginConfigRootfs')

const PluginConfigSchema = z
  .object({
    Args: PluginConfigArgsSchema,
    Description: z.string().openapi({ description: 'description' }),
    DockerVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Docker Version used to create the plugin' }),
    Documentation: z.string().openapi({ description: 'documentation' }),
    Entrypoint: z.array(z.string()).openapi({ description: 'entrypoint' }),
    Env: z.array(PluginEnvSchema).openapi({ description: 'env' }),
    Interface: PluginConfigInterfaceSchema,
    IpcHost: z.boolean().openapi({ description: 'ipc host' }),
    Linux: PluginConfigLinuxSchema,
    Mounts: z.array(PluginMountSchema).openapi({ description: 'mounts' }),
    Network: PluginConfigNetworkSchema,
    PidHost: z.boolean().openapi({ description: 'pid host' }),
    PropagatedMount: z.string().openapi({ description: 'propagated mount' }),
    User: PluginConfigUserSchema.exactOptional(),
    WorkDir: z.string().openapi({ description: 'work dir' }),
    rootfs: PluginConfigRootfsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'Args',
      'Description',
      'Documentation',
      'Entrypoint',
      'Env',
      'Interface',
      'IpcHost',
      'Linux',
      'Mounts',
      'Network',
      'PidHost',
      'PropagatedMount',
      'WorkDir',
    ],
    title: 'PluginConfig The config of a plugin.',
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginConfig')

const PluginSettingsSchema = z
  .object({
    Args: z.array(z.string()).openapi({ description: 'args' }),
    Devices: z.array(PluginDeviceSchema).openapi({ description: 'devices' }),
    Env: z.array(z.string()).openapi({ description: 'env' }),
    Mounts: z.array(PluginMountSchema).openapi({ description: 'mounts' }),
  })
  .openapi({
    required: ['Args', 'Devices', 'Env', 'Mounts'],
    title: 'PluginSettings Settings that can be modified by users.',
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('PluginSettings')

const PluginSchema = z
  .object({
    Config: PluginConfigSchema,
    Enabled: z
      .boolean()
      .openapi({
        description:
          'True if the plugin is running. False if the plugin is not running, only installed.',
      }),
    Id: z.string().exactOptional().openapi({ description: 'Id', 'x-go-name': 'ID' }),
    Name: z.string().openapi({ description: 'name' }),
    PluginReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'plugin remote reference used to push/pull the plugin' }),
    Settings: PluginSettingsSchema,
  })
  .openapi({
    description: 'Plugin A plugin for the Engine API',
    required: ['Config', 'Enabled', 'Name', 'Settings'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('Plugin')

const PortSchema = z
  .object({
    IP: z
      .string()
      .exactOptional()
      .openapi({ description: "Host IP address that the container's port is mapped to" }),
    PrivatePort: z.int().openapi({ description: 'Port on the container' }),
    PublicPort: z.int().exactOptional().openapi({ description: 'Port exposed on the host' }),
    Type: z.string().openapi({ description: 'type' }),
  })
  .openapi({
    description: 'Port An open port on a container',
    required: ['PrivatePort', 'Type'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('Port')

const PrometheusSchema = z
  .object({
    prometheusURL: z.string().exactOptional().openapi({ 'x-go-name': 'PrometheusURL' }),
    selectedPrometheusBoardsConfigs: z
      .array(SelectedGrafanaConfigSchema)
      .exactOptional()
      .openapi({ 'x-go-name': 'SelectedPrometheusBoardsConfigs' }),
  })
  .openapi({
    description: 'Prometheus represents the prometheus session config',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Prometheus')

const PreferenceSchema = z
  .object({
    anonymousPerfResults: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-go-name': 'AnonymousPerfResults' }),
    anonymousUsageStats: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-go-name': 'AnonymousUsageStats' }),
    grafana: GrafanaSchema.exactOptional(),
    k8sConfig: K8SConfigSchema.exactOptional(),
    loadTestPrefs: LoadTestPreferencesSchema.exactOptional(),
    meshAdapters: z.array(AdapterSchema).exactOptional().openapi({ 'x-go-name': 'MeshAdapters' }),
    prometheus: PrometheusSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-go-name': 'UpdatedAt' }),
  })
  .openapi({
    description: 'Preference represents the data stored in session / local DB',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Preference')

const PreferenceParamsSchema = z
  .object({
    anonymousPerfResults: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-go-name': 'AnonymousPerfResults' }),
    anonymousUsageStats: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-go-name': 'AnonymousUsageStats' }),
  })
  .openapi({
    description: 'Parameters to updates Anonymous stats',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('PreferenceParams')

const ProtocolSchema = z
  .string()
  .openapi({
    title: 'Protocol defines network protocols supported for things like container ports.',
    'x-go-package': 'k8s.io/api/core/v1',
  })
  .openapi('Protocol')

const ProviderTypeSchema = z
  .string()
  .openapi({
    description: 'ProviderType - for representing provider types',
    'x-go-package': 'github.com/layer5io/meshery/models',
  })
  .openapi('ProviderType')

const ProviderPropertiesSchema = z
  .object({
    capabilities: CapabilitiesSchema.exactOptional(),
    extensions: ExtensionsSchema.exactOptional(),
    package_url: z.string().exactOptional().openapi({ 'x-go-name': 'PackageURL' }),
    package_version: z.string().exactOptional().openapi({ 'x-go-name': 'PackageVersion' }),
    provider_description: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-go-name': 'ProviderDescription' }),
    provider_name: z.string().exactOptional().openapi({ 'x-go-name': 'ProviderName' }),
    provider_type: ProviderTypeSchema.exactOptional(),
    provider_url: z.string().exactOptional().openapi({ 'x-go-name': 'ProviderURL' }),
  })
  .openapi({
    description: 'ProviderProperties represents the structure of properties that a provider has',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('ProviderProperties')

const ScheduleSchema = z
  .object({
    cron_expression: z
      .string()
      .exactOptional()
      .openapi({
        description: 'CronExpression is the UNIX cron expression (quartz expression)',
        'x-go-name': 'CronExpression',
      }),
    id: UUIDSchema.exactOptional(),
  })
  .openapi({
    description: 'Schedule is the struct for representing schedules',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('Schedule')

const SchedulesAPIResponseSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'Page' }),
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'PageSize' }),
    schedules: z.array(ScheduleSchema).exactOptional().openapi({ 'x-go-name': 'Schedules' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'TotalCount' }),
  })
  .openapi({
    description: 'API response model for SchedulesAPI',
    'x-go-package': 'github.com/layer5io/meshery/models',
    required: [],
  })
  .openapi('SchedulesAPIResponse')

const ServiceExternalTrafficPolicyTypeSchema = z
  .string()
  .openapi({
    description: 'Service External Traffic Policy Type string',
    'x-go-package': 'k8s.io/api/core/v1',
  })
  .openapi('ServiceExternalTrafficPolicyType')

const ServicePortSchema = z
  .object({
    appProtocol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The application protocol for this port.\nThis field follows standard Kubernetes label syntax.\nUn-prefixed names are reserved for IANA standard service names (as per\nRFC-6335 and http://www.iana.org/assignments/service-names).\nNon-standard protocols should use prefixed names such as\nmycompany.com/my-custom-protocol.\nField can be enabled with ServiceAppProtocol feature gate.\n+optional',
        'x-go-name': 'AppProtocol',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of this port within the service. This must be a DNS_LABEL.\nAll ports within a ServiceSpec must have unique names. When considering\nthe endpoints for a Service, this must match the 'name' field in the\nEndpointPort.\nOptional if only one ServicePort is defined on this service.\n+optional",
        'x-go-name': 'Name',
      }),
    nodePort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The port on each node on which this service is exposed when type=NodePort or LoadBalancer.\nUsually assigned by the system. If specified, it will be allocated to the service\nif unused or else creation of the service will fail.\nDefault is to auto-allocate a port if the ServiceType of this Service requires one.\nMore info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport\n+optional',
        'x-go-name': 'NodePort',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The port that will be exposed by this service.',
        'x-go-name': 'Port',
      }),
    protocol: ProtocolSchema.exactOptional(),
    targetPort: IntOrStringSchema.exactOptional(),
  })
  .openapi({
    title: "ServicePort contains information on service's port.",
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('ServicePort')

const ServiceAffinitySchema = z
  .string()
  .openapi({ description: 'Session Affinity Type string', 'x-go-package': 'k8s.io/api/core/v1' })
  .openapi('ServiceAffinity')

const SessionAffinityConfigSchema = z
  .object({ clientIP: ClientIPConfigSchema.exactOptional() })
  .openapi({
    title: 'SessionAffinityConfig represents the configurations of session affinity.',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('SessionAffinityConfig')

const ServiceTypeSchema = z
  .string()
  .openapi({
    description: 'Service Type string describes ingress methods for a service',
    'x-go-package': 'k8s.io/api/core/v1',
  })
  .openapi('ServiceType')

const ServiceSpecSchema = z
  .object({
    clusterIP: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'clusterIP is the IP address of the service and is usually assigned\nrandomly by the master. If an address is specified manually and is not in\nuse by others, it will be allocated to the service; otherwise, creation\nof the service will fail. This field can not be changed through updates.\nValid values are "None", empty string (""), or a valid IP address. "None"\ncan be specified for headless services when proxying is not required.\nOnly applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if\ntype is ExternalName.\nMore info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies\n+optional',
        'x-go-name': 'ClusterIP',
      }),
    externalIPs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'externalIPs is a list of IP addresses for which nodes in the cluster\nwill also accept traffic for this service.  These IPs are not managed by\nKubernetes.  The user is responsible for ensuring that traffic arrives\nat a node with this IP.  A common example is external load-balancers\nthat are not part of the Kubernetes system.\n+optional',
        'x-go-name': 'ExternalIPs',
      }),
    externalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'externalName is the external reference that kubedns or equivalent will\nreturn as a CNAME record for this service. No proxying will be involved.\nMust be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123)\nand requires Type to be ExternalName.\n+optional',
        'x-go-name': 'ExternalName',
      }),
    externalTrafficPolicy: ServiceExternalTrafficPolicyTypeSchema.exactOptional(),
    healthCheckNodePort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'healthCheckNodePort specifies the healthcheck nodePort for the service.\nIf not specified, HealthCheckNodePort is created by the service api\nbackend with the allocated nodePort. Will use user-specified nodePort value\nif specified by the client. Only effects when Type is set to LoadBalancer\nand ExternalTrafficPolicy is set to Local.\n+optional',
        'x-go-name': 'HealthCheckNodePort',
      }),
    ipFamily: IPFamilySchema.exactOptional(),
    loadBalancerIP: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only applies to Service Type: LoadBalancer\nLoadBalancer will get created with the IP specified in this field.\nThis feature depends on whether the underlying cloud-provider supports specifying\nthe loadBalancerIP when a load balancer is created.\nThis field will be ignored if the cloud-provider does not support the feature.\n+optional',
        'x-go-name': 'LoadBalancerIP',
      }),
    loadBalancerSourceRanges: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If specified and supported by the platform, this will restrict traffic through the cloud-provider\nload-balancer will be restricted to the specified client IPs. This field will be ignored if the\ncloud-provider does not support the feature."\nMore info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/\n+optional',
        'x-go-name': 'LoadBalancerSourceRanges',
      }),
    ports: z
      .array(ServicePortSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of ports that are exposed by this service.\nMore info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies\n+patchMergeKey=port\n+patchStrategy=merge\n+listType=map\n+listMapKey=port\n+listMapKey=protocol',
        'x-go-name': 'Ports',
      }),
    publishNotReadyAddresses: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "publishNotReadyAddresses, when set to true, indicates that DNS implementations\nmust publish the notReadyAddresses of subsets for the Endpoints associated with\nthe Service. The default value is false.\nThe primary use case for setting this field is to use a StatefulSet's Headless Service\nto propagate SRV records for its Pods without respect to their readiness for purpose\nof peer discovery.\n+optional",
        'x-go-name': 'PublishNotReadyAddresses',
      }),
    selector: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Route service traffic to pods with label keys and values matching this\nselector. If empty or not present, the service is assumed to have an\nexternal process managing its endpoints, which Kubernetes will not\nmodify. Only applies to types ClusterIP, NodePort, and LoadBalancer.\nIgnored if type is ExternalName.\nMore info: https://kubernetes.io/docs/concepts/services-networking/service/\n+optional',
        'x-go-name': 'Selector',
      }),
    sessionAffinity: ServiceAffinitySchema.exactOptional(),
    sessionAffinityConfig: SessionAffinityConfigSchema.exactOptional(),
    topologyKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'topologyKeys is a preference-order list of topology keys which\nimplementations of services should use to preferentially sort endpoints\nwhen accessing this Service, it can not be used at the same time as\nexternalTrafficPolicy=Local.\nTopology keys must be valid label keys and at most 16 keys may be specified.\nEndpoints are chosen based on the first topology key with available backends.\nIf this field is specified and all entries have no backends that match\nthe topology of the client, the service has no backends for that client\nand connections should fail.\nThe special value "*" may be used to mean "any topology". This catch-all\nvalue, if used, only makes sense as the last value in the list.\nIf this is not specified or empty, no topology constraints will be applied.\n+optional',
        'x-go-name': 'TopologyKeys',
      }),
    type: ServiceTypeSchema.exactOptional(),
  })
  .openapi({
    title: 'ServiceSpec describes the attributes that a user creates on a service.',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('ServiceSpec')

const ServiceStatusSchema = z
  .object({ loadBalancer: LoadBalancerStatusSchema.exactOptional() })
  .openapi({
    title: 'ServiceStatus represents the current status of a service.',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('ServiceStatus')

const ServiceSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations is an unstructured key value map stored with a resource that may be\nset by external tools to store and retrieve arbitrary metadata. They are not\nqueryable and should be preserved when modifying objects.\nMore info: http://kubernetes.io/docs/user-guide/annotations\n+optional',
        'x-go-name': 'Annotations',
      }),
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources\n+optional',
        'x-go-name': 'APIVersion',
      }),
    clusterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the cluster which the object belongs to.\nThis is used to distinguish resources with same name and namespace in different clusters.\nThis field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.\n+optional',
        'x-go-name': 'ClusterName',
      }),
    creationTimestamp: TimeSchema.exactOptional(),
    deletionGracePeriodSeconds: z
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
          'Number of seconds allowed for this object to gracefully terminate before\nit will be removed from the system. Only set when deletionTimestamp is also set.\nMay only be shortened.\nRead-only.\n+optional',
        'x-go-name': 'DeletionGracePeriodSeconds',
      }),
    deletionTimestamp: TimeSchema.exactOptional(),
    finalizers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Must be empty before the object is deleted from the registry. Each entry\nis an identifier for the responsible component that will remove the entry\nfrom the list. If the deletionTimestamp of the object is non-nil, entries\nin this list can only be removed.\nFinalizers may be processed and removed in any order.  Order is NOT enforced\nbecause it introduces significant risk of stuck finalizers.\nfinalizers is a shared field, any actor with permission can reorder it.\nIf the finalizer list is processed in order, then this can lead to a situation\nin which the component responsible for the first finalizer in the list is\nwaiting for a signal (field value, external system, or other) produced by a\ncomponent responsible for a finalizer later in the list, resulting in a deadlock.\nWithout enforced ordering finalizers are free to order amongst themselves and\nare not vulnerable to ordering changes in the list.\n+optional\n+patchStrategy=merge',
        'x-go-name': 'Finalizers',
      }),
    generateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GenerateName is an optional prefix, used by the server, to generate a unique\nname ONLY IF the Name field has not been provided.\nIf this field is used, the name returned to the client will be different\nthan the name passed. This value will also be combined with a unique suffix.\nThe provided value has the same validation rules as the Name field,\nand may be truncated by the length of the suffix required to make the value\nunique on the server.\n\nIf this field is specified and the generated name exists, the server will\nNOT return a 409 - instead, it will either return 201 Created or 500 with Reason\nServerTimeout indicating a unique name could not be found in the time allotted, and the client\nshould retry (optionally after the time indicated in the Retry-After header).\n\nApplied only if Name is not specified.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency\n+optional',
        'x-go-name': 'GenerateName',
      }),
    generation: z
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
          'A sequence number representing a specific generation of the desired state.\nPopulated by the system. Read-only.\n+optional',
        'x-go-name': 'Generation',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds\n+optional',
        'x-go-name': 'Kind',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map of string keys and values that can be used to organize and categorize\n(scope and select) objects. May match selectors of replication controllers\nand services.\nMore info: http://kubernetes.io/docs/user-guide/labels\n+optional',
        'x-go-name': 'Labels',
      }),
    managedFields: z
      .array(ManagedFieldsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          "ManagedFields maps workflow-id and version to the set of fields\nthat are managed by that workflow. This is mostly for internal\nhousekeeping, and users typically shouldn't need to set or\nunderstand this field. A workflow can be the user's name, a\ncontroller's name, or the name of a specific apply path like\n\"ci-cd\". The set of fields is always in the version that the\nworkflow used when modifying the object.\n\n+optional",
        'x-go-name': 'ManagedFields',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name must be unique within a namespace. Is required when creating resources, although\nsome resources may allow a client to request the generation of an appropriate name\nautomatically. Name is primarily intended for creation idempotence and configuration\ndefinition.\nCannot be updated.\nMore info: http://kubernetes.io/docs/user-guide/identifiers#names\n+optional',
        'x-go-name': 'Name',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace defines the space within each name must be unique. An empty namespace is\nequivalent to the "default" namespace, but "default" is the canonical representation.\nNot all objects are required to be scoped to a namespace - the value of this field for\nthose objects will be empty.\n\nMust be a DNS_LABEL.\nCannot be updated.\nMore info: http://kubernetes.io/docs/user-guide/namespaces\n+optional',
        'x-go-name': 'Namespace',
      }),
    ownerReferences: z
      .array(OwnerReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'List of objects depended by this object. If ALL objects in the list have\nbeen deleted, this object will be garbage collected. If this object is managed by a controller,\nthen an entry in this list will point to this controller, with the controller field set to true.\nThere cannot be more than one managing controller.\n+optional\n+patchMergeKey=uid\n+patchStrategy=merge',
        'x-go-name': 'OwnerReferences',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque value that represents the internal version of this object that can\nbe used by clients to determine when objects have changed. May be used for optimistic\nconcurrency, change detection, and the watch operation on a resource or set of resources.\nClients must treat these values as opaque and passed unmodified back to the server.\nThey may only be valid for a particular resource or set of resources.\n\nPopulated by the system.\nRead-only.\nValue must be treated as opaque by clients and .\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency\n+optional',
        'x-go-name': 'ResourceVersion',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SelfLink is a URL representing this object.\nPopulated by the system.\nRead-only.\n\nDEPRECATED\nKubernetes will stop propagating this field in 1.20 release and the field is planned\nto be removed in 1.21 release.\n+optional',
        'x-go-name': 'SelfLink',
      }),
    spec: ServiceSpecSchema.exactOptional(),
    status: ServiceStatusSchema.exactOptional(),
    uid: UIDSchema.exactOptional(),
  })
  .openapi({
    description:
      'Service is a named abstraction of software service (for example, mysql) consisting of local port\n(for example 3306) that the proxy listens on, and the selector that determines which pods\nwill answer requests sent through the proxy.',
    'x-go-package': 'k8s.io/api/core/v1',
    required: [],
  })
  .openapi('Service')

const ServiceUpdateResponseSchema = z
  .object({
    Warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional warning messages' }),
  })
  .openapi({
    description: 'ServiceUpdateResponse service update response',
    'x-go-package': 'github.com/docker/docker/api/types',
    required: [],
  })
  .openapi('ServiceUpdateResponse')

const ThresholdSchema = z
  .object({
    colorMode: z
      .string()
      .exactOptional()
      .openapi({ description: 'critical, warning, ok, custom', 'x-go-name': 'ColorMode' }),
    fill: z.boolean().exactOptional().openapi({ 'x-go-name': 'Fill' }),
    fillColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'hexadecimal color (e.g. #629e51, only when ColorMode is "custom")',
        'x-go-name': 'FillColor',
      }),
    line: z.boolean().exactOptional().openapi({ 'x-go-name': 'Line' }),
    lineColor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'hexadecimal color (e.g. #629e51, only when ColorMode is "custom")',
        'x-go-name': 'LineColor',
      }),
    op: z.string().exactOptional().openapi({ description: 'gt or lt', 'x-go-name': 'Op' }),
    value: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'the alert threshold value, we do not omitempty, since 0 is a valid\nthreshold',
        'x-go-name': 'Value',
      }),
    yaxis: z
      .string()
      .exactOptional()
      .openapi({ description: 'left or right', 'x-go-name': 'Yaxis' }),
  })
  .openapi({ 'x-go-package': 'github.com/grafana-tools/sdk', required: [] })
  .openapi('Threshold')

const VersionSchema = z
  .object({
    build: z.string().exactOptional().openapi({ 'x-go-name': 'Build' }),
    commitsha: z.string().exactOptional().openapi({ 'x-go-name': 'CommitSHA' }),
    latest: z.string().exactOptional().openapi({ 'x-go-name': 'Latest' }),
    outdated: z.boolean().exactOptional().openapi({ 'x-go-name': 'Outdated' }),
    release_channel: z.string().exactOptional().openapi({ 'x-go-name': 'ReleaseChannel' }),
  })
  .openapi({
    title: 'Version defines the Json payload structure for version api\\',
    'x-go-package': 'github.com/layer5io/meshery/handlers',
    required: [],
  })
  .openapi('Version')

const VolumeUsageDataSchema = z
  .object({
    RefCount: z
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
          'The number of containers referencing this volume. This field\nis set to `-1` if the reference-count is not available.',
      }),
    Size: z
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
          'Amount of disk space used by the volume (in bytes). This information\nis only available for volumes created with the `"local"` volume\ndriver. For volumes created with other volume drivers, this field\nis set to `-1` ("not available")',
      }),
  })
  .openapi({
    description:
      'VolumeUsageData Usage details about the volume. This information is used by the\n`GET /system/df` endpoint, and omitted in other endpoints.',
    required: ['RefCount', 'Size'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('VolumeUsageData')

const VolumeSchema = z
  .object({
    CreatedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date/Time the volume was created.' }),
    Driver: z.string().openapi({ description: 'Name of the volume driver used by the volume.' }),
    Labels: z
      .record(z.string(), z.string())
      .openapi({ description: 'User-defined key/value metadata.' }),
    Mountpoint: z.string().openapi({ description: 'Mount path of the volume on the host.' }),
    Name: z.string().openapi({ description: 'Name of the volume.' }),
    Options: z
      .record(z.string(), z.string())
      .openapi({ description: 'The driver specific options used when creating the volume.' }),
    Scope: z
      .string()
      .openapi({
        description:
          'The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.',
      }),
    Status: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({
        description:
          'Low-level details about the volume, provided by the volume driver.\nDetails are returned as a map with key/value pairs:\n`{"key":"value","key2":"value2"}`.\n\nThe `Status` field is optional, and is omitted if the volume driver\ndoes not support this feature.',
      }),
    UsageData: VolumeUsageDataSchema.exactOptional(),
  })
  .openapi({
    description: 'Volume volume',
    required: ['Driver', 'Labels', 'Mountpoint', 'Name', 'Options', 'Scope'],
    'x-go-package': 'github.com/docker/docker/api/types',
  })
  .openapi('Volume')

const VolumeCreateBodySchema = z
  .object({
    Driver: z.string().openapi({ description: 'Name of the volume driver to use.' }),
    DriverOpts: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'A mapping of driver options and values. These options are passed directly to the driver and are driver specific.',
      }),
    Labels: z
      .record(z.string(), z.string())
      .openapi({ description: 'User-defined key/value metadata.' }),
    Name: z
      .string()
      .openapi({
        description: "The new volume's name. If not specified, Docker generates a name.",
      }),
  })
  .openapi({
    description: 'VolumeCreateBody Volume configuration',
    required: ['Driver', 'DriverOpts', 'Labels', 'Name'],
    'x-go-package': 'github.com/docker/docker/api/types/volume',
  })
  .openapi('VolumeCreateBody')

const VolumeListOKBodySchema = z
  .object({
    Volumes: z.array(VolumeSchema).openapi({ description: 'List of volumes' }),
    Warnings: z
      .array(z.string())
      .openapi({ description: 'Warnings that occurred when fetching the list of volumes' }),
  })
  .openapi({
    description: 'VolumeListOKBody Volume list response',
    required: ['Volumes', 'Warnings'],
    'x-go-package': 'github.com/docker/docker/api/types/volume',
  })
  .openapi('VolumeListOKBody')

const ApplicationFilesResponseWrapperResponse = {
  description: 'Returns the response of the application files',
  content: { 'application/json': { schema: MesheryApplicationSchema } },
}

const GrafanaBoardsResponseWrapperResponse = {
  description: 'Returns Grafana boards and panels',
  content: { 'application/json': { schema: z.array(GrafanaBoardSchema) } },
}

const GrafanaConfigResponseWrapperResponse = {
  description: 'Returns Grafana configs',
  content: { 'application/json': { schema: GrafanaSchema } },
}

const K8sConfigRespWrapperResponse = {
  description: 'Returns saved kubernetes config',
  content: { 'application/json': { schema: K8SConfigSchema } },
}

const K8sContextsRespWrapperResponse = {
  description: 'Returns kubernetes context list',
  content: { 'application/json': { schema: z.array(K8SContextSchema) } },
}

const ListProvidersRespWrapperResponse = {
  description: 'Returns a list of available providers',
  content: { 'application/json': { schema: z.record(z.string(), ProviderPropertiesSchema) } },
}

const LoadTestPreferencesWrapperResponse = {
  description: 'Returns load test preferences',
  content: { 'application/json': { schema: PerformanceTestConfigSchema } },
}

const MesheryAdaptersRespWrapperResponse = {
  description: 'Returns all the meshery adapters',
  content: { 'application/json': { schema: z.array(AdapterSchema) } },
}

const MesheryApplicationResponseWrapperResponse = {
  description: 'Fetches a single Meshery Application',
  content: { 'application/json': { schema: MesheryApplicationSchema } },
}

const MesheryApplicationsResponseWrapperResponse = {
  description: 'Returns all meshery applications',
  content: { 'application/json': { schema: ApplicationsAPIResponseSchema } },
}

const MesheryFilterResponseWrapperResponse = {
  description: 'Returns a single meshery filter',
  content: { 'application/json': { schema: MesheryFilterSchema } },
}

const MesheryFiltersResponseWrapperResponse = {
  description: 'Returns all meshery filters',
  content: { 'application/json': { schema: FiltersAPIResponseSchema } },
}

const MesheryPatternResponseWrapperResponse = {
  description: 'Returns a single meshery pattern',
  content: { 'application/json': { schema: MesheryPatternSchema } },
}

const MesheryPatternsResponseWrapperResponse = {
  description: 'Returns all meshery patterns',
  content: { 'application/json': { schema: PatternsAPIResponseSchema } },
}

const MesheryVersionRespWrapperResponse = {
  description: 'Returns Meshery version',
  content: { 'application/json': { schema: VersionSchema } },
}

const NoContentWrapperResponse = { description: '' }

const PerfSingleResultRespWrapperResponse = {
  description: 'Returns Single test result',
  content: { 'application/json': { schema: PerformanceSpecSchema } },
}

const PerfTestPrefsRespWrapperResponse = {
  description: 'Returns Perf test preference',
  content: { 'application/json': { schema: PreferenceSchema } },
}

const PerformanceProfileResponseWrapperResponse = {
  description: 'Returns a single performance profile',
  content: { 'application/json': { schema: PerformanceProfileSchema } },
}

const PerformanceProfilesResponseWrapperResponse = {
  description: 'Returns all the performance profiles',
  content: { 'application/json': { schema: PerformanceProfilesAPIResponseSchema } },
}

const PerformanceResultsResponseWrapperResponse = {
  description: 'Returns all performance results',
  content: { 'application/json': { schema: PerformanceResultsAPIResponseSchema } },
}

const PrometheusBoardImportRespWrapperResponse = {
  description: 'Response for prometheus board import',
  content: { 'application/json': { schema: GrafanaBoardSchema } },
}

const PrometheusConfigResponseWrapperResponse = {
  description: 'Returns prometheus configuration',
  content: { 'application/json': { schema: PrometheusSchema } },
}

const PrometheusStaticBoardRespWrapperResponse = {
  description: 'Returns Prometheus static board',
  content: { 'application/json': { schema: z.record(z.string(), GrafanaBoardSchema) } },
}

const SchedulesResponseWrapperResponse = {
  description: 'Returns List of saved schedules',
  content: { 'application/json': { schema: SchedulesAPIResponseSchema } },
}

const SingleScheduleResponseWrapperResponse = {
  description: 'Returns a single schedules',
  content: { 'application/json': { schema: ScheduleSchema } },
}

const SystemAdaptersRespWrapperResponse = {
  description: 'Return all the adapters',
  content: { 'application/json': { schema: z.array(AdapterSchema) } },
}

const UserLoadTestPrefsRespWrapperResponse = {
  description: 'Returns User Load Test Preferencee',
  content: { 'application/json': { schema: PreferenceSchema } },
}

const V1ServicesMapResponseWrapperResponse = {
  description: 'Returns a map for v1 services',
  content: { 'application/json': { schema: z.record(z.string(), z.array(ServiceSchema)) } },
}

const PerformanceTestConfigRequestBody = {
  content: {
    'application/json': { schema: PerformanceTestConfigSchema },
    'multipart/form-data': {
      schema: z
        .object({
          clients: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    body: z.string().exactOptional().openapi({ 'x-go-name': 'Body' }),
                    connections: z
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
                      .openapi({ 'x-go-name': 'Connections' }),
                    content_type: z
                      .string()
                      .exactOptional()
                      .openapi({ 'x-go-name': 'ContentType' }),
                    cookies: z
                      .record(z.string(), z.string())
                      .exactOptional()
                      .openapi({ 'x-go-name': 'Cookies' }),
                    endpoint_urls: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(z.string()),
                      )
                      .exactOptional()
                      .openapi({ 'x-go-name': 'EndpointUrls' }),
                    headers: z
                      .record(z.string(), z.string())
                      .exactOptional()
                      .openapi({ 'x-go-name': 'Headers' }),
                    internal: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        z.boolean(),
                      )
                      .exactOptional()
                      .openapi({ 'x-go-name': 'Internal' }),
                    load_generator: z
                      .string()
                      .exactOptional()
                      .openapi({ 'x-go-name': 'LoadGenerator' }),
                    protocol: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        PerformanceTestConfigClientProtocolSchema,
                      )
                      .exactOptional(),
                    rps: z
                      .preprocess((val) => {
                        if (
                          typeof val !== 'string' ||
                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                        )
                          return val
                        if (/^-?\d+$/.test(val)) return BigInt(val)
                        const num = Number(val)
                        return Number.isSafeInteger(num) ? BigInt(num) : val
                      }, z.int64())
                      .exactOptional()
                      .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Rps' }),
                  })
                  .openapi({
                    'x-go-package': 'github.com/layer5io/service-mesh-performance/spec',
                    required: [],
                  }),
              ),
            )
            .exactOptional()
            .openapi({
              description: 'Single or distributed load generators',
              'x-go-name': 'Clients',
            }),
          duration: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Length of time the endpoint will be under load',
              'x-go-name': 'Duration',
            }),
          id: z.string().exactOptional().openapi({ 'x-go-name': 'Id' }),
          labels: z
            .record(z.string(), z.string())
            .exactOptional()
            .openapi({ 'x-go-name': 'Labels' }),
          name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
          smp_version: z
            .string()
            .exactOptional()
            .openapi({ description: 'Spec version', 'x-go-name': 'SmpVersion' }),
        })
        .openapi({
          'x-go-package': 'github.com/layer5io/service-mesh-performance/spec',
          required: [],
        }),
    },
  },
}

const IdPostDeployApplicationFileRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          'Upload Yaml/Yml File': z
            .file()
            .exactOptional()
            .openapi({ type: 'string', format: 'binary', 'x-go-name': 'FormFile' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const TokenSecurityScheme = { in: 'cookie', name: 'token', type: 'apiKey' }

export const getApiApplicationIndexRoute = createRoute({
  method: 'get',
  path: '/api/application/',
  tags: ['ApplicationsAPI'],
  summary: 'Handle GET request for Application Files',
  description: 'Returns requests for all Meshery Applications',
  operationId: 'idGetApplicationFileRequest',
  responses: { 200: MesheryApplicationsResponseWrapperResponse },
})

export const postApiApplicationIndexRoute = createRoute({
  method: 'post',
  path: '/api/application/',
  tags: ['ApplicationsAPI'],
  summary: 'Handle POST request for Application Files',
  description: 'Save attached Meshery Application File',
  operationId: 'idPostApplicationFileRequest',
  responses: { 200: MesheryApplicationResponseWrapperResponse },
})

export const postApiApplicationDeployRoute = createRoute({
  method: 'post',
  path: '/api/application/deploy',
  tags: ['ApplicationsAPI'],
  summary: 'Handle POST request for Application File Deploy',
  description: 'Deploy an attached application file with the request',
  operationId: 'idPostDeployApplicationFile',
  request: { body: IdPostDeployApplicationFileRequestBody },
  responses: { 200: ApplicationFilesResponseWrapperResponse },
})

export const deleteApiApplicationDeployRoute = createRoute({
  method: 'delete',
  path: '/api/application/deploy',
  tags: ['ApplicationsAPI'],
  summary: 'Handle DELETE request for Application File Deploy',
  description: 'Delete a deployed application file with the request',
  operationId: 'idDeleteApplicationFile',
  responses: { 200: { description: '' } },
})

export const getApiApplicationIdRoute = createRoute({
  method: 'get',
  path: '/api/application/{id}',
  tags: ['ApplicationsAPI'],
  summary: 'Handle GET request for Meshery Application with the given id',
  description: 'Fetches the list of all applications saved by the current user',
  operationId: 'idGetMesheryApplication',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: MesheryApplicationResponseWrapperResponse },
})

export const deleteApiApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/api/application/{id}',
  tags: ['ApplicationsAPI'],
  summary: 'Handle Delete for a Meshery Application File',
  description: 'Deletes a meshery application file with ID: id',
  operationId: 'idDeleteMesheryApplicationFile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: NoContentWrapperResponse },
})

export const getApiFilterRoute = createRoute({
  method: 'get',
  path: '/api/filter',
  tags: ['FiltersAPI'],
  summary: 'Handle GET request for all filters',
  description: 'Returns all the Meshery Filters saved by the current user',
  operationId: 'idGetFilterFile',
  responses: { 200: MesheryFiltersResponseWrapperResponse },
})

export const postApiFilterRoute = createRoute({
  method: 'post',
  path: '/api/filter',
  tags: ['FiltersAPI'],
  summary: 'Handle POST requests for Meshery Filters',
  description: 'Used to save/update a Meshery Filter',
  operationId: 'idPostFilterFile',
  responses: { 200: MesheryFilterResponseWrapperResponse },
})

export const getApiFilterFileIdRoute = createRoute({
  method: 'get',
  path: '/api/filter/file/{id}',
  tags: ['FiltersAPI'],
  summary: 'Handle GET request for filter file with given id',
  description: 'Returns the Meshery Filter file saved by the current user with the given id',
  operationId: 'idGetFilterFiles',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: MesheryFilterResponseWrapperResponse },
})

export const getApiFilterIdRoute = createRoute({
  method: 'get',
  path: '/api/filter/{id}',
  tags: ['FiltersAPI'],
  summary: 'Handle GET request for a Meshery Filter',
  description: 'Fetches the Meshery Filter with the given id',
  operationId: 'idGetMesheryFilter',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: MesheryFilterResponseWrapperResponse },
})

export const deleteApiFilterIdRoute = createRoute({
  method: 'delete',
  path: '/api/filter/{id}',
  tags: ['FiltersAPI'],
  summary: 'Handle Delete for a Meshery Filter',
  description: 'Deletes a meshery filter with ID: id',
  operationId: 'idDeleteMesheryFilter',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: NoContentWrapperResponse },
})

export const getApiOamTypeRoute = createRoute({
  method: 'get',
  path: '/api/oam/{type}',
  tags: ['PatternsAPI'],
  summary: 'Handles the get requests for the OAM objects',
  description:
    'Getting list of workloads/traits/scopes\n\n{type} being of either trait, scope, workload; registration of adapter capabilities.',
  operationId: 'idGETOAMMesheryPattern',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postApiOamTypeRoute = createRoute({
  method: 'post',
  path: '/api/oam/{type}',
  tags: ['PatternsAPI'],
  summary: 'Handles registering OMA objects',
  description:
    'Adding a workload/trait/scope\n\n{type} being of either trait, scope, workload; registration of adapter capabilities.',
  operationId: 'idPOSTOAMMesheryPattern',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiPatternRoute = createRoute({
  method: 'get',
  path: '/api/pattern',
  tags: ['PatternsAPI'],
  summary: 'Handle GET request for patterns',
  description:
    'Returns the list of all the patterns saved by the current user\nThis will return all the patterns with their details',
  operationId: 'idGetPatternFiles',
  responses: { 200: MesheryPatternsResponseWrapperResponse },
})

export const postApiPatternRoute = createRoute({
  method: 'post',
  path: '/api/pattern',
  tags: ['PatternsAPI'],
  summary: 'Handle POST requests for patterns',
  description: 'Edit/update a meshery pattern',
  operationId: 'idPostPatternFile',
  responses: { 200: MesheryPatternResponseWrapperResponse },
})

export const postApiPatternDeployRoute = createRoute({
  method: 'post',
  path: '/api/pattern/deploy',
  tags: ['PatternsAPI'],
  summary: 'Handle POST request for Pattern Deploy',
  description: 'Deploy an attached pattern with the request',
  operationId: 'idPostDeployPattern',
  request: { body: IdPostDeployApplicationFileRequestBody },
  responses: { 200: { description: '' } },
})

export const deleteApiPatternDeployRoute = createRoute({
  method: 'delete',
  path: '/api/pattern/deploy',
  tags: ['PatternsAPI'],
  summary: 'Handle DELETE request for Pattern Deploy',
  description: 'Delete a deployed pattern with the request',
  operationId: 'idDeleteDeployPattern',
  responses: { 200: { description: '' } },
})

export const getApiPatternIdRoute = createRoute({
  method: 'get',
  path: '/api/pattern/{id}',
  tags: ['PatternsAPI'],
  summary: 'Handle GET for a Meshery Pattern',
  description: 'Fetches the pattern with the given id',
  operationId: 'idGetMesheryPattern',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: MesheryPatternResponseWrapperResponse },
})

export const deleteApiPatternIdRoute = createRoute({
  method: 'delete',
  path: '/api/pattern/{id}',
  tags: ['PatternsAPI'],
  summary: 'Handle Delete for a Meshery Pattern',
  description: 'Deletes a meshery pattern with ID: id',
  operationId: 'idDeleteMesheryPattern',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: NoContentWrapperResponse },
})

export const getApiPerfProfileRoute = createRoute({
  method: 'get',
  path: '/api/perf/profile',
  tags: ['PerfAPI'],
  summary: 'Handle GET request to run a test',
  description: 'Runs the load test with the given parameters',
  operationId: 'idRunPerfTest',
  request: { body: PerformanceTestConfigRequestBody },
  responses: { 200: { description: '' } },
})

export const getApiPerfProfileResultRoute = createRoute({
  method: 'get',
  path: '/api/perf/profile/result',
  tags: ['PerfAPI'],
  summary: 'Handles GET requests for perf results',
  description: 'Returns pages of all the perf results from Remote Provider',
  operationId: 'idGetAllPerfResults',
  responses: { 200: PerformanceResultsResponseWrapperResponse },
})

export const getApiPerfProfileResultIdRoute = createRoute({
  method: 'get',
  path: '/api/perf/profile/result/{id}',
  tags: ['PerfAPI'],
  summary: 'Handles GET requests for perf result',
  description: 'Returns an individual result from provider',
  operationId: 'idGetSinglePerfResult',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: PerfSingleResultRespWrapperResponse },
})

export const getApiProviderRoute = createRoute({
  method: 'get',
  path: '/api/provider',
  tags: ['ProvidersAPI'],
  summary: 'Handle GET request for the choice of provider',
  description: 'Update the choice of provider in system',
  operationId: 'idChoiceProvider',
  request: {
    query: z.object({
      provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'provider',
            schema: { type: 'string' },
            'x-go-name': 'Provider',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiProviderCapabilitiesRoute = createRoute({
  method: 'get',
  path: '/api/provider/capabilities',
  tags: ['ProvidersAPI'],
  summary: 'Handle GET requests for Provider',
  description: 'Returns the capabilities.json for the provider',
  operationId: 'idGetProviderCapabilities',
  responses: { 200: { description: '' } },
})

export const getApiProviderExtensionRoute = createRoute({
  method: 'get',
  path: '/api/provider/extension',
  tags: ['ProvidersAPI'],
  summary: 'Handle GET request for React Components',
  description: 'handles the requests to serve react components from the provider package',
  operationId: 'idReactComponents',
  responses: { 200: { description: '' } },
})

export const getApiProvidersRoute = createRoute({
  method: 'get',
  path: '/api/providers',
  tags: ['ProvidersAPI'],
  summary: 'Handle GET request for list of providers',
  description: 'Returns the available list of providers',
  operationId: 'idGetProvidersList',
  responses: { 200: ListProvidersRespWrapperResponse },
})

export const postApiSystemAdapterManageRoute = createRoute({
  method: 'post',
  path: '/api/system/adapter/manage',
  tags: ['SystemAPI'],
  summary: 'Handle POST requests to persist adapter config',
  description: 'Used to persist adapter config',
  operationId: 'idPostAdapterConfig',
  request: {
    body: {
      content: {
        'application/json': { schema: z.string() },
        'multipart/form-data': { schema: z.string() },
      },
    },
  },
  responses: { 200: MesheryAdaptersRespWrapperResponse },
})

export const deleteApiSystemAdapterManageRoute = createRoute({
  method: 'delete',
  path: '/api/system/adapter/manage',
  tags: ['SystemAPI'],
  summary: 'Handle DELETE requests to delete adapter config',
  description: 'Used to delete adapter configuration',
  operationId: 'idDeleteAdapterConfig',
  request: {
    query: z.object({
      adapter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'adapter',
            schema: { type: 'string' },
            'x-go-name': 'Adapter',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postApiSystemAdapterOperationRoute = createRoute({
  method: 'post',
  path: '/api/system/adapter/operation',
  tags: ['SystemAPI'],
  summary: 'Handle POST requests for Adapter Operations',
  description: 'Used to send operations to the adapters',
  operationId: 'idPostAdapterOperation',
  request: {
    query: z.object({
      adapter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'adapter',
            schema: { type: 'string' },
            'x-go-name': 'Adapter',
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            'x-go-name': 'Query',
            required: false,
          },
        }),
      customBody: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'customBody',
            schema: { type: 'string' },
            'x-go-name': 'CustomBody',
            required: false,
          },
        }),
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'namespace',
            schema: { type: 'string' },
            'x-go-name': 'Namespace',
            required: false,
          },
        }),
      deleteOp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'deleteOp',
            schema: { type: 'string' },
            'x-go-name': 'Delete',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiSystemAdaptersRoute = createRoute({
  method: 'get',
  path: '/api/system/adapters',
  tags: ['SystemAPI'],
  summary: 'Handle GET request for adapters',
  description: 'Fetches and returns all the adapters and ping adapters',
  operationId: 'idGetSystemAdapters',
  request: {
    query: z.object({
      adapter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'adapter',
            schema: { type: 'string' },
            'x-go-name': 'Adapter',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: SystemAdaptersRespWrapperResponse },
})

export const postApiSystemKubernetesRoute = createRoute({
  method: 'post',
  path: '/api/system/kubernetes',
  tags: ['SystemAPI'],
  summary: 'Handle POST request for Kubernetes Config',
  description: 'Used to add kubernetes config to System',
  operationId: 'idPostK8SConfig',
  responses: { 200: K8sConfigRespWrapperResponse },
})

export const deleteApiSystemKubernetesRoute = createRoute({
  method: 'delete',
  path: '/api/system/kubernetes',
  tags: ['SystemAPI'],
  summary: 'Handle DELETE request for Kubernetes Config',
  description: 'Used to delete kubernetes config to System',
  operationId: 'idDeleteK8SConfig',
  responses: { 200: { description: '' } },
})

export const postApiSystemKubernetesContextsRoute = createRoute({
  method: 'post',
  path: '/api/system/kubernetes/contexts',
  tags: ['SystemAPI'],
  summary: 'Handle POST requests for Kubernetes Context list',
  description: 'Returns the context list for a given k8s config',
  operationId: 'idPostK8SContexts',
  responses: { 200: K8sContextsRespWrapperResponse },
})

export const getApiSystemKubernetesPingRoute = createRoute({
  method: 'get',
  path: '/api/system/kubernetes/ping',
  tags: ['SystemAPI'],
  summary: 'Handle GET request for Kubernetes ping',
  description: 'Fetches server version to simulate ping',
  operationId: 'idGetKubernetesPing',
  responses: { 200: { description: '' } },
})

export const getApiSystemMeshsyncGrafanaRoute = createRoute({
  method: 'get',
  path: '/api/system/meshsync/grafana',
  tags: ['SystemAPI'],
  summary: 'Handle GET request for mesh-sync grafana',
  description: 'Fetches Prometheus and Grafana',
  operationId: 'idMeshSyncGrafana',
  responses: { 200: V1ServicesMapResponseWrapperResponse },
})

export const getApiSystemMeshsyncPrometheusRoute = createRoute({
  method: 'get',
  path: '/api/system/meshsync/prometheus',
  tags: ['SystemAPI'],
  summary: 'Handle GET request for fetching prometheus',
  description: 'Fetches Prometheus',
  operationId: 'idMeshSyncPrometheus',
  responses: { 200: V1ServicesMapResponseWrapperResponse },
})

export const getApiSystemSyncRoute = createRoute({
  method: 'get',
  path: '/api/system/sync',
  tags: ['SystemAPI'],
  summary: 'Handle GET request for config sync',
  description: 'Used to send session data to the UI for initial sync',
  operationId: 'idSystemSync',
  responses: { 200: UserLoadTestPrefsRespWrapperResponse },
})

export const getApiSystemVersionRoute = createRoute({
  method: 'get',
  path: '/api/system/version',
  tags: ['SystemAPI'],
  summary: 'Handle GET request for system/server version',
  description: 'Returns the running Meshery version',
  operationId: 'idGetSystemVersion',
  responses: { 200: MesheryVersionRespWrapperResponse },
})

export const postApiTelemetryMetricsBoardImportRoute = createRoute({
  method: 'post',
  path: '/api/telemetry/metrics/board_import',
  tags: ['PrometheusAPI'],
  summary: 'Handle POST request for Prometheus board import',
  description: 'Used for importing Grafana board for Prometheus',
  operationId: 'idPostPrometheusBoardImport',
  responses: { 200: PrometheusBoardImportRespWrapperResponse },
})

export const postApiTelemetryMetricsBoardsRoute = createRoute({
  method: 'post',
  path: '/api/telemetry/metrics/boards',
  tags: ['PrometheusAPI'],
  summary: 'Handle POST request for Prometheus board',
  description: 'Used to persist selected board and panels',
  operationId: 'idPostPrometheusBoard',
  request: {
    body: {
      content: {
        'application/json': { schema: z.array(SelectedGrafanaConfigSchema) },
        'multipart/form-data': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .object({
                  board: z
                    .object({
                      org_id: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.uint64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'OrgID' }),
                      panels: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                alert: z
                                  .object({
                                    alertRuleTags: z
                                      .record(z.string(), z.string())
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'AlertRuleTags' }),
                                    conditions: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z
                                            .object({
                                              evaluator: z
                                                .object({
                                                  params: z
                                                    .preprocess(
                                                      (val) =>
                                                        val === undefined || Array.isArray(val)
                                                          ? val
                                                          : [val],
                                                      z.array(
                                                        z.preprocess(
                                                          (val) =>
                                                            typeof val === 'string' &&
                                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                              val,
                                                            ) &&
                                                            (!/^-?\d+$/.test(val) ||
                                                              Number.isSafeInteger(Number(val)))
                                                              ? Number(val)
                                                              : val,
                                                          z.float64(),
                                                        ),
                                                      ),
                                                    )
                                                    .exactOptional()
                                                    .openapi({ 'x-go-name': 'Params' }),
                                                  type: z
                                                    .string()
                                                    .exactOptional()
                                                    .openapi({ 'x-go-name': 'Type' }),
                                                })
                                                .exactOptional()
                                                .openapi({
                                                  'x-go-package': 'github.com/grafana-tools/sdk',
                                                  required: [],
                                                }),
                                              operator: AlertOperatorSchema.exactOptional(),
                                              query: AlertQuerySchema.exactOptional(),
                                              reducer: AlertReducerSchema.exactOptional(),
                                              type: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Type' }),
                                            })
                                            .openapi({
                                              'x-go-package': 'github.com/grafana-tools/sdk',
                                              required: [],
                                            }),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Conditions' }),
                                    executionErrorState: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ExecutionErrorState' }),
                                    for: z.string().exactOptional().openapi({ 'x-go-name': 'For' }),
                                    frequency: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Frequency' }),
                                    handler: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'Handler',
                                      }),
                                    message: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Message' }),
                                    name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Name' }),
                                    noDataState: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'NoDataState' }),
                                    notifications: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z
                                            .object({
                                              disableResolveMessage: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'DisableResolveMessage' }),
                                              frequency: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Frequency' }),
                                              id: z
                                                .preprocess((val) => {
                                                  if (
                                                    typeof val !== 'string' ||
                                                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    )
                                                  )
                                                    return val
                                                  if (/^-?\d+$/.test(val)) return BigInt(val)
                                                  const num = Number(val)
                                                  return Number.isSafeInteger(num)
                                                    ? BigInt(num)
                                                    : val
                                                }, z.int64())
                                                .exactOptional()
                                                .openapi({
                                                  type: 'integer',
                                                  format: 'int64',
                                                  'x-go-name': 'ID',
                                                }),
                                              isDefault: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'IsDefault' }),
                                              name: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Name' }),
                                              sendReminder: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'SendReminder' }),
                                              settings: z
                                                .object({})
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Settings' }),
                                              type: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Type' }),
                                              uid: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'UID' }),
                                            })
                                            .openapi({
                                              description:
                                                'AlertNotification as described in the doc\nhttps://grafana.com/docs/grafana/latest/http_api/alerting_notification_channels/',
                                              'x-go-package': 'github.com/grafana-tools/sdk',
                                              required: [],
                                            }),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Notifications' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                aliasColors: z
                                  .object({})
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'AliasColors' }),
                                bars: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Bars' }),
                                cards: z
                                  .object({
                                    cardPadding: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'CardPadding' }),
                                    cardRound: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'CardRound' }),
                                  })
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Cards', required: [] }),
                                collapsed: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Collapsed' }),
                                color: z
                                  .object({
                                    cardColor: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'CardColor' }),
                                    colorScale: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ColorScale' }),
                                    colorScheme: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ColorScheme' }),
                                    exponent: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Exponent' }),
                                    max: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Max' }),
                                    min: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Min' }),
                                    mode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Mode' }),
                                  })
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Color', required: [] }),
                                colorBackground: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ColorBackground' }),
                                colorValue: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ColorValue' }),
                                colors: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Colors' }),
                                columns: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ColumnSchema),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Columns' }),
                                content: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Content' }),
                                dashLength: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'DashLength',
                                  }),
                                dashboardTags: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'DashboardTags' }),
                                dashes: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Dashes' }),
                                dataFormat: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'DataFormat' }),
                                datasource: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Datasource' }),
                                decimals: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Decimals',
                                  }),
                                description: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Description' }),
                                editable: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Editable' }),
                                error: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Error' }),
                                fieldConfig: FieldConfigSchema.exactOptional(),
                                fill: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Fill',
                                  }),
                                folderId: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'FolderID',
                                  }),
                                format: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Format' }),
                                gauge: z
                                  .object({
                                    maxValue: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'MaxValue' }),
                                    minValue: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'MinValue' }),
                                    show: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Show' }),
                                    thresholdLabels: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ThresholdLabels' }),
                                    thresholdMarkers: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ThresholdMarkers' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'for a stat',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                gridPos: z
                                  .object({
                                    h: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'H',
                                      }),
                                    w: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'W',
                                      }),
                                    x: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'X',
                                      }),
                                    y: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'Y',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'GridPos', required: [] }),
                                headings: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Headings' }),
                                height: z
                                  .object({})
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Height' }),
                                hideTimeOverride: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'HideTimeOverride' }),
                                hideZeroBuckets: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'HideZeroBuckets' }),
                                highlightCards: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'HighlightCards' }),
                                id: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'ID',
                                  }),
                                isNew: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'IsNew' }),
                                leftYAxisLabel: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'LeftYAxisLabel' }),
                                legend: z
                                  .object({
                                    alignAsTable: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'AlignAsTable' }),
                                    avg: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Avg' }),
                                    current: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Current' }),
                                    hideEmpty: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'HideEmpty' }),
                                    hideZero: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'HideZero' }),
                                    max: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Max' }),
                                    min: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Min' }),
                                    rightSide: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'RightSide' }),
                                    show: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Show' }),
                                    sideWidth: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.uint64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'uint64',
                                        'x-go-name': 'SideWidth',
                                      }),
                                    total: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Total' }),
                                    values: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Values' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'for a graph panel',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                limit: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Limit',
                                  }),
                                lines: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Lines' }),
                                linewidth: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'Linewidth',
                                  }),
                                links: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          asDropdown: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'AsDropdown' }),
                                          dashUri: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'DashURI' }),
                                          dashboard: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Dashboard' }),
                                          icon: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Icon' }),
                                          includeVars: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'IncludeVars' }),
                                          keepTime: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'KeepTime' }),
                                          params: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Params' }),
                                          tags: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(z.string()),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Tags' }),
                                          targetBlank: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'TargetBlank' }),
                                          title: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Title' }),
                                          tooltip: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Tooltip' }),
                                          type: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Type' }),
                                          url: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'URL' }),
                                        })
                                        .openapi({
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Links' }),
                                mappingType: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'MappingType',
                                  }),
                                mappingTypes: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          name: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Name' }),
                                          value: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'Value',
                                            }),
                                        })
                                        .openapi({
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'MappingTypes' }),
                                maxDataPoints: z
                                  .object({
                                    Valid: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                    Value: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({ type: 'integer', format: 'int64' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    title:
                                      'IntString represents special type for json values that could be strings or ints: 100 or "100"',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                minSpan: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'MinSpan' }),
                                mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
                                nameFilter: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'NameFilter' }),
                                nullPointMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'NullPointMode' }),
                                onlyAlertsOnDashboard: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'OnlyAlertsOnDashboard' }),
                                options: z
                                  .object({
                                    colorMode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ColorMode' }),
                                    content: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Content' }),
                                    displayMode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'DisplayMode' }),
                                    graphMode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'GraphMode' }),
                                    justifyMode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'JustifyMode' }),
                                    mode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Mode' }),
                                    orientation: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Orientation' }),
                                    reduceOptions: z
                                      .object({
                                        calcs: z
                                          .preprocess(
                                            (val) =>
                                              val === undefined || Array.isArray(val) ? val : [val],
                                            z.array(z.string()),
                                          )
                                          .exactOptional()
                                          .openapi({ 'x-go-name': 'Calcs' }),
                                        fields: z
                                          .string()
                                          .exactOptional()
                                          .openapi({ 'x-go-name': 'Fields' }),
                                        values: z
                                          .preprocess(
                                            ((read) => (val: unknown) => {
                                              const result = read.safeParse(val)
                                              return result.success ? result.data : val
                                            })(z.stringbool()),
                                            z.boolean(),
                                          )
                                          .exactOptional()
                                          .openapi({ 'x-go-name': 'Values' }),
                                      })
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ReduceOptions', required: [] }),
                                    textMode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'TextMode' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                pageSize: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'PageSize',
                                  }),
                                panels: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(PanelSchema),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Panels' }),
                                percentage: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Percentage' }),
                                pointradius: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Pointradius' }),
                                points: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Points' }),
                                postfix: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Postfix' }),
                                postfixFontSize: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'PostfixFontSize' }),
                                prefix: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Prefix' }),
                                prefixFontSize: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'PrefixFontSize' }),
                                query: z.string().exactOptional().openapi({ 'x-go-name': 'Query' }),
                                rangeMaps: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(RangeMapSchema),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'RangeMaps' }),
                                recent: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Recent' }),
                                renderer: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Renderer' }),
                                repeat: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Repeat' }),
                                repeatPanelId: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    description:
                                      'RepeatIteration *int64   `json:"repeatIteration,omitempty"`',
                                    'x-go-name': 'RepeatPanelID',
                                  }),
                                reverseYBuckets: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ReverseYBuckets' }),
                                rightYAxisLabel: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'RightYAxisLabel' }),
                                scopedVars: z
                                  .record(
                                    z.string(),
                                    z
                                      .object({
                                        selected: z
                                          .preprocess(
                                            ((read) => (val: unknown) => {
                                              const result = read.safeParse(val)
                                              return result.success ? result.data : val
                                            })(z.stringbool()),
                                            z.boolean(),
                                          )
                                          .exactOptional()
                                          .openapi({ 'x-go-name': 'Selected' }),
                                        text: z
                                          .string()
                                          .exactOptional()
                                          .openapi({ 'x-go-name': 'Text' }),
                                        value: z
                                          .string()
                                          .exactOptional()
                                          .openapi({ 'x-go-name': 'Value' }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ScopedVars' }),
                                scroll: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Scroll' }),
                                search: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Search' }),
                                seriesOverrides: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          alias: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Alias' }),
                                          bars: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Bars' }),
                                          color: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Color' }),
                                          dashes: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Dashes' }),
                                          fill: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'Fill',
                                            }),
                                          fillBelowTo: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'FillBelowTo' }),
                                          legend: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Legend' }),
                                          lines: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Lines' }),
                                          linewidth: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'LineWidth',
                                            }),
                                          nullPointMode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'NullPointMode' }),
                                          stack: z
                                            .object({
                                              Flag: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .exactOptional(),
                                              Value: z.string().exactOptional(),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              'x-go-package': 'github.com/grafana-tools/sdk',
                                              required: [],
                                            }),
                                          transform: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Transform' }),
                                          yaxis: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'YAxis',
                                            }),
                                          zindex: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'ZIndex',
                                            }),
                                        })
                                        .openapi({
                                          description: 'for a graph panel',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'SeriesOverrides' }),
                                show: z.string().exactOptional().openapi({ 'x-go-name': 'Show' }),
                                showHeader: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ShowHeader' }),
                                sort: z
                                  .object({
                                    col: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'Col',
                                      }),
                                    desc: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Desc' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'for a graph panel',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                sortOrder: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'SortOrder',
                                  }),
                                spaceLength: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'SpaceLength',
                                  }),
                                span: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Span' }),
                                sparkline: z
                                  .object({
                                    fillColor: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'FillColor' }),
                                    full: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Full' }),
                                    lineColor: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'LineColor' }),
                                    show: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Show' }),
                                    ymax: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'YMax' }),
                                    ymin: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'YMin' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'for a stat',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                stack: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Stack' }),
                                starred: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Starred' }),
                                stateFilter: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'StateFilter' }),
                                steppedLine: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'SteppedLine' }),
                                styles: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          alias: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Alias' }),
                                          colorMode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'ColorMode' }),
                                          colors: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(z.string()),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Colors' }),
                                          dateFormat: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'DateFormat' }),
                                          decimals: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.uint64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'uint64',
                                              'x-go-name': 'Decimals',
                                            }),
                                          link: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Link' }),
                                          linkTargetBlank: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'LinkTargetBlank' }),
                                          linkTooltip: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'LinkTooltip' }),
                                          linkUrl: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'LinkUrl' }),
                                          mappingType: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'MappingType',
                                            }),
                                          pattern: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Pattern' }),
                                          thresholds: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(z.string()),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Thresholds' }),
                                          type: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Type' }),
                                          unit: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Unit' }),
                                          valueMaps: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(ValueMapSchema),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'ValueMaps' }),
                                        })
                                        .openapi({
                                          description: 'for a table',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Styles' }),
                                tags: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Tags' }),
                                targets: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          alias: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Alias' }),
                                          aliasBy: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'AliasBy' }),
                                          alignOptions: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    expanded: z
                                                      .preprocess(
                                                        ((read) => (val: unknown) => {
                                                          const result = read.safeParse(val)
                                                          return result.success ? result.data : val
                                                        })(z.stringbool()),
                                                        z.boolean(),
                                                      )
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Expanded' }),
                                                    label: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Label' }),
                                                    options: z
                                                      .preprocess(
                                                        (val) =>
                                                          val === undefined || Array.isArray(val)
                                                            ? val
                                                            : [val],
                                                        z.array(StackdriverAlignOptionSchema),
                                                      )
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Options' }),
                                                  })
                                                  .openapi({
                                                    description:
                                                      'StackdriverAlignOptions defines the list of alignment options shown in\nGrafana during query configuration.',
                                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                                    required: [],
                                                  }),
                                              ),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'AlignOptions' }),
                                          alignmentPeriod: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'AlignmentPeriod' }),
                                          bucketAggs: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    field: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Field' }),
                                                    id: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'ID' }),
                                                    settings: z
                                                      .object({
                                                        interval: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'Interval' }),
                                                        min_doc_count: z
                                                          .object({})
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'MinDocCount' }),
                                                        order: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'Order' }),
                                                        orderBy: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'OrderBy' }),
                                                        size: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'Size' }),
                                                      })
                                                      .exactOptional()
                                                      .openapi({
                                                        'x-go-name': 'Settings',
                                                        required: [],
                                                      }),
                                                    type: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Type' }),
                                                  })
                                                  .openapi({ required: [] }),
                                              ),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'BucketAggs' }),
                                          crossSeriesReducer: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'CrossSeriesReducer' }),
                                          datasource: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Datasource' }),
                                          dimensions: z
                                            .record(z.string(), z.string())
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Dimensions' }),
                                          dsType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'For Elasticsearch',
                                              'x-go-name': 'DsType',
                                            }),
                                          expr: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'For Prometheus',
                                              'x-go-name': 'Expr',
                                            }),
                                          filters: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(z.string()),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Filters' }),
                                          format: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Format' }),
                                          group: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    params: z
                                                      .preprocess(
                                                        (val) =>
                                                          val === undefined || Array.isArray(val)
                                                            ? val
                                                            : [val],
                                                        z.array(z.string()),
                                                      )
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Params' }),
                                                    type: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Type' }),
                                                  })
                                                  .openapi({ required: [] }),
                                              ),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Group' }),
                                          groupBys: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(z.string()),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'GroupBys' }),
                                          hide: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Hide' }),
                                          instant: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Instant' }),
                                          interval: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Interval' }),
                                          intervalFactor: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'IntervalFactor',
                                            }),
                                          legendFormat: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'LegendFormat' }),
                                          measurement: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'For InfluxDB',
                                              'x-go-name': 'Measurement',
                                            }),
                                          metricColumn: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'MetricColumn' }),
                                          metricKind: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'MetricKind' }),
                                          metricName: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'MetricName' }),
                                          metricType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'MetricType' }),
                                          metrics: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    field: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Field' }),
                                                    id: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'ID' }),
                                                    type: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Type' }),
                                                  })
                                                  .openapi({ required: [] }),
                                              ),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Metrics' }),
                                          namespace: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'For CloudWatch',
                                              'x-go-name': 'Namespace',
                                            }),
                                          perSeriesAligner: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'PerSeriesAligner' }),
                                          period: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Period' }),
                                          projectName: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'For the Stackdriver data source. Find out more information at\nhttps:/grafana.com/docs/grafana/v6.0/features/datasources/stackdriver/',
                                              'x-go-name': 'ProjectName',
                                            }),
                                          query: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Query' }),
                                          rawQuery: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'RawQuery' }),
                                          rawSql: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'RawSql' }),
                                          refId: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'RefID' }),
                                          region: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Region' }),
                                          select: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z.preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(
                                                    z
                                                      .object({
                                                        params: z
                                                          .preprocess(
                                                            (val) =>
                                                              val === undefined ||
                                                              Array.isArray(val)
                                                                ? val
                                                                : [val],
                                                            z.array(z.string()),
                                                          )
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'Params' }),
                                                        type: z
                                                          .string()
                                                          .exactOptional()
                                                          .openapi({ 'x-go-name': 'Type' }),
                                                      })
                                                      .openapi({ required: [] }),
                                                  ),
                                                ),
                                              ),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Select' }),
                                          statistics: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(z.string()),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Statistics' }),
                                          step: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'Step',
                                            }),
                                          table: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'For PostgreSQL',
                                              'x-go-name': 'Table',
                                            }),
                                          target: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description: 'For Graphite',
                                              'x-go-name': 'Target',
                                            }),
                                          timeColumn: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'TimeColumn' }),
                                          timeField: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'TimeField' }),
                                          valueType: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'ValueType' }),
                                          where: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    datatype: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Datatype' }),
                                                    name: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Name' }),
                                                    params: z
                                                      .preprocess(
                                                        (val) =>
                                                          val === undefined || Array.isArray(val)
                                                            ? val
                                                            : [val],
                                                        z.array(z.string()),
                                                      )
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Params' }),
                                                    type: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Type' }),
                                                  })
                                                  .openapi({ required: [] }),
                                              ),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Where' }),
                                        })
                                        .openapi({
                                          description: 'for an any panel',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Targets' }),
                                thresholds: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Thresholds' }),
                                timeFrom: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'TimeFrom' }),
                                timeShift: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'TimeShift' }),
                                title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
                                tooltip: z
                                  .object({
                                    msResolution: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'MsResolution' }),
                                    shared: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Shared' }),
                                    sort: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'Sort',
                                      }),
                                    value_type: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'ValueType' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                tooltipDecimals: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'TooltipDecimals',
                                  }),
                                transform: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Transform' }),
                                transparent: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Transparent' }),
                                type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
                                valueFontSize: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ValueFontSize' }),
                                valueMaps: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ValueMapSchema),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ValueMaps' }),
                                valueName: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ValueName' }),
                                'x-axis': z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'XAxis' }),
                                xAxis: z
                                  .object({
                                    show: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Show' }),
                                  })
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'XAxis', required: [] }),
                                xBucketNumber: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'XBucketNumber' }),
                                xBucketSize: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'XBucketSize' }),
                                xaxis: z
                                  .object({
                                    decimals: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'Decimals',
                                      }),
                                    format: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Format' }),
                                    label: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Label' }),
                                    logBase: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'LogBase',
                                      }),
                                    max: z
                                      .object({
                                        Valid: z
                                          .preprocess(
                                            ((read) => (val: unknown) => {
                                              const result = read.safeParse(val)
                                              return result.success ? result.data : val
                                            })(z.stringbool()),
                                            z.boolean(),
                                          )
                                          .exactOptional(),
                                        Value: z
                                          .preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float64(),
                                          )
                                          .exactOptional(),
                                      })
                                      .exactOptional()
                                      .openapi({
                                        title:
                                          'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                        'x-go-package': 'github.com/grafana-tools/sdk',
                                        required: [],
                                      }),
                                    min: z
                                      .object({
                                        Valid: z
                                          .preprocess(
                                            ((read) => (val: unknown) => {
                                              const result = read.safeParse(val)
                                              return result.success ? result.data : val
                                            })(z.stringbool()),
                                            z.boolean(),
                                          )
                                          .exactOptional(),
                                        Value: z
                                          .preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float64(),
                                          )
                                          .exactOptional(),
                                      })
                                      .exactOptional()
                                      .openapi({
                                        title:
                                          'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                        'x-go-package': 'github.com/grafana-tools/sdk',
                                        required: [],
                                      }),
                                    show: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Show' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'for a graph panel',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                'y-axis': z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YAxis' }),
                                yAxis: z
                                  .object({
                                    decimals: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'Decimals',
                                      }),
                                    format: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Format' }),
                                    logBase: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'int64',
                                        'x-go-name': 'LogBase',
                                      }),
                                    max: z.string().exactOptional().openapi({ 'x-go-name': 'Max' }),
                                    min: z.string().exactOptional().openapi({ 'x-go-name': 'Min' }),
                                    show: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Show' }),
                                    splitFactor: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'SplitFactor' }),
                                  })
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YAxis', required: [] }),
                                yBucketBound: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YBucketBound' }),
                                yBucketNumber: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YBucketNumber' }),
                                yBucketSize: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YBucketSize' }),
                                y_formats: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YFormats' }),
                                yaxes: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          decimals: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'Decimals',
                                            }),
                                          format: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Format' }),
                                          label: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Label' }),
                                          logBase: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'LogBase',
                                            }),
                                          max: z
                                            .object({
                                              Valid: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .exactOptional(),
                                              Value: z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.float64(),
                                                )
                                                .exactOptional(),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              title:
                                                'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                              'x-go-package': 'github.com/grafana-tools/sdk',
                                              required: [],
                                            }),
                                          min: z
                                            .object({
                                              Valid: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .exactOptional(),
                                              Value: z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.float64(),
                                                )
                                                .exactOptional(),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              title:
                                                'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                              'x-go-package': 'github.com/grafana-tools/sdk',
                                              required: [],
                                            }),
                                          show: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Show' }),
                                        })
                                        .openapi({
                                          description: 'for a graph panel',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Yaxes' }),
                              })
                              .openapi({
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ 'x-go-name': 'Panels' }),
                      slug: z.string().exactOptional().openapi({ 'x-go-name': 'Slug' }),
                      template_vars: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                datasource: z
                                  .object({
                                    id: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.uint64())
                                      .exactOptional()
                                      .openapi({
                                        type: 'integer',
                                        format: 'uint64',
                                        'x-go-name': 'ID',
                                      }),
                                    name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Name' }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'GrafanaDataSource represents a Grafana datasource like Prometheus',
                                    'x-go-package': 'github.com/layer5io/meshery/models',
                                    required: [],
                                  }),
                                hide: z
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
                                  .openapi({ 'x-go-name': 'Hide' }),
                                name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
                                query: z.string().exactOptional().openapi({ 'x-go-name': 'Query' }),
                                value: z
                                  .object({})
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Value' }),
                              })
                              .openapi({
                                description:
                                  'GrafanaTemplateVars represents template variables in a bboard',
                                'x-go-package': 'github.com/layer5io/meshery/models',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ 'x-go-name': 'TemplateVars' }),
                      title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
                      uid: z.string().exactOptional().openapi({ 'x-go-name': 'UID' }),
                      uri: z.string().exactOptional().openapi({ 'x-go-name': 'URI' }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'GrafanaBoard represents a Grafana board',
                      'x-go-package': 'github.com/layer5io/meshery/models',
                      required: [],
                    }),
                  panels: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            alert: z
                              .object({
                                alertRuleTags: z
                                  .record(z.string(), z.string())
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'AlertRuleTags' }),
                                conditions: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          evaluator: z
                                            .object({
                                              params: z
                                                .preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(
                                                    z.preprocess(
                                                      (val) =>
                                                        typeof val === 'string' &&
                                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                          val,
                                                        ) &&
                                                        (!/^-?\d+$/.test(val) ||
                                                          Number.isSafeInteger(Number(val)))
                                                          ? Number(val)
                                                          : val,
                                                      z.float64(),
                                                    ),
                                                  ),
                                                )
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Params' }),
                                              type: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ 'x-go-name': 'Type' }),
                                            })
                                            .exactOptional()
                                            .openapi({
                                              'x-go-package': 'github.com/grafana-tools/sdk',
                                              required: [],
                                            }),
                                          operator: AlertOperatorSchema.exactOptional(),
                                          query: AlertQuerySchema.exactOptional(),
                                          reducer: AlertReducerSchema.exactOptional(),
                                          type: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Type' }),
                                        })
                                        .openapi({
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Conditions' }),
                                executionErrorState: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ExecutionErrorState' }),
                                for: z.string().exactOptional().openapi({ 'x-go-name': 'For' }),
                                frequency: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Frequency' }),
                                handler: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Handler',
                                  }),
                                message: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Message' }),
                                name: z.string().exactOptional().openapi({ 'x-go-name': 'Name' }),
                                noDataState: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'NoDataState' }),
                                notifications: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          disableResolveMessage: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'DisableResolveMessage' }),
                                          frequency: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Frequency' }),
                                          id: z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .exactOptional()
                                            .openapi({
                                              type: 'integer',
                                              format: 'int64',
                                              'x-go-name': 'ID',
                                            }),
                                          isDefault: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'IsDefault' }),
                                          name: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Name' }),
                                          sendReminder: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'SendReminder' }),
                                          settings: z
                                            .object({})
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Settings' }),
                                          type: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'Type' }),
                                          uid: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ 'x-go-name': 'UID' }),
                                        })
                                        .openapi({
                                          description:
                                            'AlertNotification as described in the doc\nhttps://grafana.com/docs/grafana/latest/http_api/alerting_notification_channels/',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Notifications' }),
                              })
                              .exactOptional()
                              .openapi({
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            aliasColors: z
                              .object({})
                              .exactOptional()
                              .openapi({ 'x-go-name': 'AliasColors' }),
                            bars: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Bars' }),
                            cards: z
                              .object({
                                cardPadding: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'CardPadding' }),
                                cardRound: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'CardRound' }),
                              })
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Cards', required: [] }),
                            collapsed: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Collapsed' }),
                            color: z
                              .object({
                                cardColor: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'CardColor' }),
                                colorScale: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ColorScale' }),
                                colorScheme: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ColorScheme' }),
                                exponent: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Exponent' }),
                                max: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Max' }),
                                min: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Min' }),
                                mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
                              })
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Color', required: [] }),
                            colorBackground: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ColorBackground' }),
                            colorValue: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ColorValue' }),
                            colors: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string()),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Colors' }),
                            columns: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ColumnSchema),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Columns' }),
                            content: z.string().exactOptional().openapi({ 'x-go-name': 'Content' }),
                            dashLength: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'uint64',
                                'x-go-name': 'DashLength',
                              }),
                            dashboardTags: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string()),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'DashboardTags' }),
                            dashes: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Dashes' }),
                            dataFormat: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'DataFormat' }),
                            datasource: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Datasource' }),
                            decimals: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'int64',
                                'x-go-name': 'Decimals',
                              }),
                            description: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Description' }),
                            editable: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Editable' }),
                            error: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Error' }),
                            fieldConfig: FieldConfigSchema.exactOptional(),
                            fill: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Fill' }),
                            folderId: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'int64',
                                'x-go-name': 'FolderID',
                              }),
                            format: z.string().exactOptional().openapi({ 'x-go-name': 'Format' }),
                            gauge: z
                              .object({
                                maxValue: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'MaxValue' }),
                                minValue: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'MinValue' }),
                                show: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Show' }),
                                thresholdLabels: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ThresholdLabels' }),
                                thresholdMarkers: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ThresholdMarkers' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'for a stat',
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            gridPos: z
                              .object({
                                h: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'H' }),
                                w: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'W' }),
                                x: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'X' }),
                                y: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Y' }),
                              })
                              .exactOptional()
                              .openapi({ 'x-go-name': 'GridPos', required: [] }),
                            headings: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Headings' }),
                            height: z.object({}).exactOptional().openapi({ 'x-go-name': 'Height' }),
                            hideTimeOverride: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'HideTimeOverride' }),
                            hideZeroBuckets: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'HideZeroBuckets' }),
                            highlightCards: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'HighlightCards' }),
                            id: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({ type: 'integer', format: 'uint64', 'x-go-name': 'ID' }),
                            isNew: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'IsNew' }),
                            leftYAxisLabel: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'LeftYAxisLabel' }),
                            legend: z
                              .object({
                                alignAsTable: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'AlignAsTable' }),
                                avg: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Avg' }),
                                current: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Current' }),
                                hideEmpty: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'HideEmpty' }),
                                hideZero: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'HideZero' }),
                                max: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Max' }),
                                min: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Min' }),
                                rightSide: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'RightSide' }),
                                show: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Show' }),
                                sideWidth: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.uint64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'uint64',
                                    'x-go-name': 'SideWidth',
                                  }),
                                total: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Total' }),
                                values: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Values' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'for a graph panel',
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            limit: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({ type: 'integer', format: 'int64', 'x-go-name': 'Limit' }),
                            lines: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Lines' }),
                            linewidth: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'uint64',
                                'x-go-name': 'Linewidth',
                              }),
                            links: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      asDropdown: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'AsDropdown' }),
                                      dashUri: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'DashURI' }),
                                      dashboard: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Dashboard' }),
                                      icon: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Icon' }),
                                      includeVars: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'IncludeVars' }),
                                      keepTime: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'KeepTime' }),
                                      params: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Params' }),
                                      tags: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(z.string()),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Tags' }),
                                      targetBlank: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'TargetBlank' }),
                                      title: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Title' }),
                                      tooltip: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Tooltip' }),
                                      type: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Type' }),
                                      url: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'URL' }),
                                    })
                                    .openapi({
                                      'x-go-package': 'github.com/grafana-tools/sdk',
                                      required: [],
                                    }),
                                ),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Links' }),
                            mappingType: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'uint64',
                                'x-go-name': 'MappingType',
                              }),
                            mappingTypes: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Name' }),
                                      value: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'Value',
                                        }),
                                    })
                                    .openapi({
                                      'x-go-package': 'github.com/grafana-tools/sdk',
                                      required: [],
                                    }),
                                ),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'MappingTypes' }),
                            maxDataPoints: z
                              .object({
                                Valid: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional(),
                                Value: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({ type: 'integer', format: 'int64' }),
                              })
                              .exactOptional()
                              .openapi({
                                title:
                                  'IntString represents special type for json values that could be strings or ints: 100 or "100"',
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            minSpan: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'MinSpan' }),
                            mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
                            nameFilter: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'NameFilter' }),
                            nullPointMode: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'NullPointMode' }),
                            onlyAlertsOnDashboard: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'OnlyAlertsOnDashboard' }),
                            options: z
                              .object({
                                colorMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ColorMode' }),
                                content: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Content' }),
                                displayMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'DisplayMode' }),
                                graphMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'GraphMode' }),
                                justifyMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'JustifyMode' }),
                                mode: z.string().exactOptional().openapi({ 'x-go-name': 'Mode' }),
                                orientation: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Orientation' }),
                                reduceOptions: z
                                  .object({
                                    calcs: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(z.string()),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Calcs' }),
                                    fields: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Fields' }),
                                    values: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Values' }),
                                  })
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ReduceOptions', required: [] }),
                                textMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'TextMode' }),
                              })
                              .exactOptional()
                              .openapi({
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            pageSize: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'uint64',
                                'x-go-name': 'PageSize',
                              }),
                            panels: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(PanelSchema),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Panels' }),
                            percentage: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Percentage' }),
                            pointradius: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Pointradius' }),
                            points: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Points' }),
                            postfix: z.string().exactOptional().openapi({ 'x-go-name': 'Postfix' }),
                            postfixFontSize: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'PostfixFontSize' }),
                            prefix: z.string().exactOptional().openapi({ 'x-go-name': 'Prefix' }),
                            prefixFontSize: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'PrefixFontSize' }),
                            query: z.string().exactOptional().openapi({ 'x-go-name': 'Query' }),
                            rangeMaps: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(RangeMapSchema),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'RangeMaps' }),
                            recent: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Recent' }),
                            renderer: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Renderer' }),
                            repeat: z.string().exactOptional().openapi({ 'x-go-name': 'Repeat' }),
                            repeatPanelId: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'uint64',
                                description:
                                  'RepeatIteration *int64   `json:"repeatIteration,omitempty"`',
                                'x-go-name': 'RepeatPanelID',
                              }),
                            reverseYBuckets: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ReverseYBuckets' }),
                            rightYAxisLabel: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'RightYAxisLabel' }),
                            scopedVars: z
                              .record(
                                z.string(),
                                z
                                  .object({
                                    selected: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Selected' }),
                                    text: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Text' }),
                                    value: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ 'x-go-name': 'Value' }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ScopedVars' }),
                            scroll: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Scroll' }),
                            search: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Search' }),
                            seriesOverrides: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      alias: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Alias' }),
                                      bars: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Bars' }),
                                      color: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Color' }),
                                      dashes: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Dashes' }),
                                      fill: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'Fill',
                                        }),
                                      fillBelowTo: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'FillBelowTo' }),
                                      legend: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Legend' }),
                                      lines: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Lines' }),
                                      linewidth: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'LineWidth',
                                        }),
                                      nullPointMode: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'NullPointMode' }),
                                      stack: z
                                        .object({
                                          Flag: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional(),
                                          Value: z.string().exactOptional(),
                                        })
                                        .exactOptional()
                                        .openapi({
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                      transform: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Transform' }),
                                      yaxis: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'YAxis',
                                        }),
                                      zindex: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'ZIndex',
                                        }),
                                    })
                                    .openapi({
                                      description: 'for a graph panel',
                                      'x-go-package': 'github.com/grafana-tools/sdk',
                                      required: [],
                                    }),
                                ),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'SeriesOverrides' }),
                            show: z.string().exactOptional().openapi({ 'x-go-name': 'Show' }),
                            showHeader: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ShowHeader' }),
                            sort: z
                              .object({
                                col: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Col',
                                  }),
                                desc: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Desc' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'for a graph panel',
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            sortOrder: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'int64',
                                'x-go-name': 'SortOrder',
                              }),
                            spaceLength: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.uint64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'uint64',
                                'x-go-name': 'SpaceLength',
                              }),
                            span: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Span' }),
                            sparkline: z
                              .object({
                                fillColor: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'FillColor' }),
                                full: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Full' }),
                                lineColor: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'LineColor' }),
                                show: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Show' }),
                                ymax: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YMax' }),
                                ymin: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'YMin' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'for a stat',
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            stack: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Stack' }),
                            starred: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Starred' }),
                            stateFilter: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string()),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'StateFilter' }),
                            steppedLine: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'SteppedLine' }),
                            styles: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      alias: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Alias' }),
                                      colorMode: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'ColorMode' }),
                                      colors: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(z.string()),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Colors' }),
                                      dateFormat: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'DateFormat' }),
                                      decimals: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.uint64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'uint64',
                                          'x-go-name': 'Decimals',
                                        }),
                                      link: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Link' }),
                                      linkTargetBlank: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'LinkTargetBlank' }),
                                      linkTooltip: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'LinkTooltip' }),
                                      linkUrl: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'LinkUrl' }),
                                      mappingType: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'MappingType',
                                        }),
                                      pattern: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Pattern' }),
                                      thresholds: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(z.string()),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Thresholds' }),
                                      type: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Type' }),
                                      unit: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Unit' }),
                                      valueMaps: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(ValueMapSchema),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'ValueMaps' }),
                                    })
                                    .openapi({
                                      description: 'for a table',
                                      'x-go-package': 'github.com/grafana-tools/sdk',
                                      required: [],
                                    }),
                                ),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Styles' }),
                            tags: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string()),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Tags' }),
                            targets: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      alias: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Alias' }),
                                      aliasBy: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'AliasBy' }),
                                      alignOptions: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(
                                            z
                                              .object({
                                                expanded: z
                                                  .preprocess(
                                                    ((read) => (val: unknown) => {
                                                      const result = read.safeParse(val)
                                                      return result.success ? result.data : val
                                                    })(z.stringbool()),
                                                    z.boolean(),
                                                  )
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Expanded' }),
                                                label: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Label' }),
                                                options: z
                                                  .preprocess(
                                                    (val) =>
                                                      val === undefined || Array.isArray(val)
                                                        ? val
                                                        : [val],
                                                    z.array(StackdriverAlignOptionSchema),
                                                  )
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Options' }),
                                              })
                                              .openapi({
                                                description:
                                                  'StackdriverAlignOptions defines the list of alignment options shown in\nGrafana during query configuration.',
                                                'x-go-package': 'github.com/grafana-tools/sdk',
                                                required: [],
                                              }),
                                          ),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'AlignOptions' }),
                                      alignmentPeriod: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'AlignmentPeriod' }),
                                      bucketAggs: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(
                                            z
                                              .object({
                                                field: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Field' }),
                                                id: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'ID' }),
                                                settings: z
                                                  .object({
                                                    interval: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Interval' }),
                                                    min_doc_count: z
                                                      .object({})
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'MinDocCount' }),
                                                    order: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Order' }),
                                                    orderBy: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'OrderBy' }),
                                                    size: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Size' }),
                                                  })
                                                  .exactOptional()
                                                  .openapi({
                                                    'x-go-name': 'Settings',
                                                    required: [],
                                                  }),
                                                type: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Type' }),
                                              })
                                              .openapi({ required: [] }),
                                          ),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'BucketAggs' }),
                                      crossSeriesReducer: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'CrossSeriesReducer' }),
                                      datasource: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Datasource' }),
                                      dimensions: z
                                        .record(z.string(), z.string())
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Dimensions' }),
                                      dsType: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description: 'For Elasticsearch',
                                          'x-go-name': 'DsType',
                                        }),
                                      expr: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description: 'For Prometheus',
                                          'x-go-name': 'Expr',
                                        }),
                                      filters: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(z.string()),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Filters' }),
                                      format: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Format' }),
                                      group: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(
                                            z
                                              .object({
                                                params: z
                                                  .preprocess(
                                                    (val) =>
                                                      val === undefined || Array.isArray(val)
                                                        ? val
                                                        : [val],
                                                    z.array(z.string()),
                                                  )
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Params' }),
                                                type: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Type' }),
                                              })
                                              .openapi({ required: [] }),
                                          ),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Group' }),
                                      groupBys: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(z.string()),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'GroupBys' }),
                                      hide: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Hide' }),
                                      instant: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Instant' }),
                                      interval: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Interval' }),
                                      intervalFactor: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'IntervalFactor',
                                        }),
                                      legendFormat: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'LegendFormat' }),
                                      measurement: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description: 'For InfluxDB',
                                          'x-go-name': 'Measurement',
                                        }),
                                      metricColumn: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'MetricColumn' }),
                                      metricKind: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'MetricKind' }),
                                      metricName: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'MetricName' }),
                                      metricType: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'MetricType' }),
                                      metrics: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(
                                            z
                                              .object({
                                                field: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Field' }),
                                                id: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'ID' }),
                                                type: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Type' }),
                                              })
                                              .openapi({ required: [] }),
                                          ),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Metrics' }),
                                      namespace: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description: 'For CloudWatch',
                                          'x-go-name': 'Namespace',
                                        }),
                                      perSeriesAligner: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'PerSeriesAligner' }),
                                      period: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Period' }),
                                      projectName: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description:
                                            'For the Stackdriver data source. Find out more information at\nhttps:/grafana.com/docs/grafana/v6.0/features/datasources/stackdriver/',
                                          'x-go-name': 'ProjectName',
                                        }),
                                      query: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Query' }),
                                      rawQuery: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'RawQuery' }),
                                      rawSql: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'RawSql' }),
                                      refId: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'RefID' }),
                                      region: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Region' }),
                                      select: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(
                                            z.preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(
                                                z
                                                  .object({
                                                    params: z
                                                      .preprocess(
                                                        (val) =>
                                                          val === undefined || Array.isArray(val)
                                                            ? val
                                                            : [val],
                                                        z.array(z.string()),
                                                      )
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Params' }),
                                                    type: z
                                                      .string()
                                                      .exactOptional()
                                                      .openapi({ 'x-go-name': 'Type' }),
                                                  })
                                                  .openapi({ required: [] }),
                                              ),
                                            ),
                                          ),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Select' }),
                                      statistics: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(z.string()),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Statistics' }),
                                      step: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'Step',
                                        }),
                                      table: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description: 'For PostgreSQL',
                                          'x-go-name': 'Table',
                                        }),
                                      target: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          description: 'For Graphite',
                                          'x-go-name': 'Target',
                                        }),
                                      timeColumn: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'TimeColumn' }),
                                      timeField: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'TimeField' }),
                                      valueType: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'ValueType' }),
                                      where: z
                                        .preprocess(
                                          (val) =>
                                            val === undefined || Array.isArray(val) ? val : [val],
                                          z.array(
                                            z
                                              .object({
                                                datatype: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Datatype' }),
                                                name: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Name' }),
                                                params: z
                                                  .preprocess(
                                                    (val) =>
                                                      val === undefined || Array.isArray(val)
                                                        ? val
                                                        : [val],
                                                    z.array(z.string()),
                                                  )
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Params' }),
                                                type: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ 'x-go-name': 'Type' }),
                                              })
                                              .openapi({ required: [] }),
                                          ),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Where' }),
                                    })
                                    .openapi({
                                      description: 'for an any panel',
                                      'x-go-package': 'github.com/grafana-tools/sdk',
                                      required: [],
                                    }),
                                ),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Targets' }),
                            thresholds: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Thresholds' }),
                            timeFrom: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'TimeFrom' }),
                            timeShift: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'TimeShift' }),
                            title: z.string().exactOptional().openapi({ 'x-go-name': 'Title' }),
                            tooltip: z
                              .object({
                                msResolution: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'MsResolution' }),
                                shared: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Shared' }),
                                sort: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Sort',
                                  }),
                                value_type: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'ValueType' }),
                              })
                              .exactOptional()
                              .openapi({
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            tooltipDecimals: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({
                                type: 'integer',
                                format: 'int64',
                                'x-go-name': 'TooltipDecimals',
                              }),
                            transform: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Transform' }),
                            transparent: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Transparent' }),
                            type: z.string().exactOptional().openapi({ 'x-go-name': 'Type' }),
                            valueFontSize: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ValueFontSize' }),
                            valueMaps: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ValueMapSchema),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ValueMaps' }),
                            valueName: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'ValueName' }),
                            'x-axis': z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'XAxis' }),
                            xAxis: z
                              .object({
                                show: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Show' }),
                              })
                              .exactOptional()
                              .openapi({ 'x-go-name': 'XAxis', required: [] }),
                            xBucketNumber: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'XBucketNumber' }),
                            xBucketSize: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'XBucketSize' }),
                            xaxis: z
                              .object({
                                decimals: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Decimals',
                                  }),
                                format: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Format' }),
                                label: z.string().exactOptional().openapi({ 'x-go-name': 'Label' }),
                                logBase: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'LogBase',
                                  }),
                                max: z
                                  .object({
                                    Valid: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                    Value: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    title:
                                      'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                min: z
                                  .object({
                                    Valid: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                    Value: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      )
                                      .exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    title:
                                      'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                    'x-go-package': 'github.com/grafana-tools/sdk',
                                    required: [],
                                  }),
                                show: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Show' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'for a graph panel',
                                'x-go-package': 'github.com/grafana-tools/sdk',
                                required: [],
                              }),
                            'y-axis': z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'YAxis' }),
                            yAxis: z
                              .object({
                                decimals: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'Decimals',
                                  }),
                                format: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Format' }),
                                logBase: z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .exactOptional()
                                  .openapi({
                                    type: 'integer',
                                    format: 'int64',
                                    'x-go-name': 'LogBase',
                                  }),
                                max: z.string().exactOptional().openapi({ 'x-go-name': 'Max' }),
                                min: z.string().exactOptional().openapi({ 'x-go-name': 'Min' }),
                                show: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'Show' }),
                                splitFactor: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float64(),
                                  )
                                  .exactOptional()
                                  .openapi({ 'x-go-name': 'SplitFactor' }),
                              })
                              .exactOptional()
                              .openapi({ 'x-go-name': 'YAxis', required: [] }),
                            yBucketBound: z
                              .string()
                              .exactOptional()
                              .openapi({ 'x-go-name': 'YBucketBound' }),
                            yBucketNumber: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'YBucketNumber' }),
                            yBucketSize: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'YBucketSize' }),
                            y_formats: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string()),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'YFormats' }),
                            yaxes: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      decimals: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'Decimals',
                                        }),
                                      format: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Format' }),
                                      label: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Label' }),
                                      logBase: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({
                                          type: 'integer',
                                          format: 'int64',
                                          'x-go-name': 'LogBase',
                                        }),
                                      max: z
                                        .object({
                                          Valid: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional(),
                                          Value: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float64(),
                                            )
                                            .exactOptional(),
                                        })
                                        .exactOptional()
                                        .openapi({
                                          title:
                                            'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                      min: z
                                        .object({
                                          Valid: z
                                            .preprocess(
                                              ((read) => (val: unknown) => {
                                                const result = read.safeParse(val)
                                                return result.success ? result.data : val
                                              })(z.stringbool()),
                                              z.boolean(),
                                            )
                                            .exactOptional(),
                                          Value: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float64(),
                                            )
                                            .exactOptional(),
                                        })
                                        .exactOptional()
                                        .openapi({
                                          title:
                                            'FloatString represents special type for json values that could be strings or ints: 100 or "100"',
                                          'x-go-package': 'github.com/grafana-tools/sdk',
                                          required: [],
                                        }),
                                      show: z
                                        .preprocess(
                                          ((read) => (val: unknown) => {
                                            const result = read.safeParse(val)
                                            return result.success ? result.data : val
                                          })(z.stringbool()),
                                          z.boolean(),
                                        )
                                        .exactOptional()
                                        .openapi({ 'x-go-name': 'Show' }),
                                    })
                                    .openapi({
                                      description: 'for a graph panel',
                                      'x-go-package': 'github.com/grafana-tools/sdk',
                                      required: [],
                                    }),
                                ),
                              )
                              .exactOptional()
                              .openapi({ 'x-go-name': 'Yaxes' }),
                          })
                          .openapi({
                            'x-go-package': 'github.com/grafana-tools/sdk',
                            required: [],
                          }),
                      ),
                    )
                    .exactOptional()
                    .openapi({ 'x-go-name': 'GrafanaPanels' }),
                  templateVars: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional()
                    .openapi({ 'x-go-name': 'SelectedTemplateVars' }),
                })
                .openapi({
                  description:
                    'SelectedGrafanaConfig represents the selected boards, panels, and template variables',
                  'x-go-package': 'github.com/layer5io/meshery/models',
                  required: [],
                }),
            ),
          ),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsConfigRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/config',
  tags: ['PrometheusAPI'],
  summary: 'Handle GET for Prometheus configuration',
  description: 'Used for fetching Prometheus configuration',
  operationId: 'idGetPrometheusConfig',
  responses: { 200: PrometheusConfigResponseWrapperResponse },
})

export const postApiTelemetryMetricsConfigRoute = createRoute({
  method: 'post',
  path: '/api/telemetry/metrics/config',
  tags: ['PrometheusAPI'],
  summary: 'Handle POST for Prometheus configuration',
  description: 'Used for persisting Prometheus configuration',
  operationId: 'idPostPrometheusConfig',
  request: {
    body: {
      content: {
        'application/json': { schema: z.string() },
        'multipart/form-data': { schema: z.string() },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteApiTelemetryMetricsConfigRoute = createRoute({
  method: 'delete',
  path: '/api/telemetry/metrics/config',
  tags: ['PrometheusAPI'],
  summary: 'Handle DELETE for Prometheus configuration',
  description: 'Used for deleting Prometheus configuration',
  operationId: 'idDeletePrometheusConfig',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsGrafanaBoardsRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/grafana/boards',
  tags: ['GrafanaAPI'],
  summary: 'Handle GET request for Grafana boards',
  description: 'Used for fetching Grafana boards and panels',
  operationId: 'idGetGrafanaBoards',
  request: {
    query: z.object({
      dashboardSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dashboardSearch',
            schema: { type: 'string' },
            'x-go-name': 'DashboardSearch',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: GrafanaBoardsResponseWrapperResponse },
})

export const postApiTelemetryMetricsGrafanaBoardsRoute = createRoute({
  method: 'post',
  path: '/api/telemetry/metrics/grafana/boards',
  tags: ['GrafanaAPI'],
  summary: 'Handle POST request for Grafana boards',
  description: 'Used for persist Grafana boards and panel selections',
  operationId: 'idPostGrafanaBoards',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsGrafanaConfigRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/grafana/config',
  tags: ['GrafanaAPI'],
  summary: 'Handle GET request for Grafana configuration',
  description: 'Used for fetching Grafana configuration',
  operationId: 'idGetGrafanaConfig',
  responses: { 200: GrafanaConfigResponseWrapperResponse },
})

export const postApiTelemetryMetricsGrafanaConfigRoute = createRoute({
  method: 'post',
  path: '/api/telemetry/metrics/grafana/config',
  tags: ['GrafanaAPI'],
  summary: 'Handle POST request for Grafana configuration',
  description: 'Used for persisting Grafana configuration',
  operationId: 'idPostGrafanaConfig',
  request: {
    body: {
      content: {
        'application/json': { schema: GrafanaConfigParamsSchema },
        'multipart/form-data': { schema: GrafanaConfigParamsSchema },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteApiTelemetryMetricsGrafanaConfigRoute = createRoute({
  method: 'delete',
  path: '/api/telemetry/metrics/grafana/config',
  tags: ['GrafanaAPI'],
  summary: 'Handle DELETE request for Grafana configuration',
  description: 'Used for Delete Grafana configuration',
  operationId: 'idDeleteGrafanaConfig',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsGrafanaPingRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/grafana/ping',
  tags: ['GrafanaAPI'],
  summary: 'Handle GET request for Grafana ping',
  description: 'Used to initiate a Grafana ping',
  operationId: 'idGetGrafanaPing',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsGrafanaQueryRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/grafana/query',
  tags: ['GrafanaAPI'],
  summary: 'Handle GET request for Grafana queries',
  description: 'Used for handling Grafana queries',
  operationId: 'idGetGrafanaQuery',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsGrafanaScanRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/grafana/scan',
  tags: ['GrafanaAPI'],
  summary: 'Handle GET request for Grafana',
  description: 'Fetches and returns Grafana',
  operationId: 'idGetGrafana',
  responses: { 200: V1ServicesMapResponseWrapperResponse },
})

export const getApiTelemetryMetricsPingRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/ping',
  tags: ['PrometheusAPI'],
  summary: 'Handle GET request for Prometheus Ping',
  description: 'Used to ping prometheus',
  operationId: 'idGetPrometheusPing',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsQueryRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/query',
  tags: ['PrometheusAPI'],
  summary: 'Handle GET request for Prometheus Query',
  description: 'Used to prometheus queries',
  operationId: 'idGetPrometheusQuery',
  responses: { 200: { description: '' } },
})

export const getApiTelemetryMetricsStaticBoardRoute = createRoute({
  method: 'get',
  path: '/api/telemetry/metrics/static-board',
  tags: ['PrometheusAPI'],
  summary: 'Handle GET request for Prometheus static board',
  description: 'Used to fetch the static board',
  operationId: 'idGetPrometheusStaticBoard',
  responses: { 200: PrometheusStaticBoardRespWrapperResponse },
})

export const getApiUserLoginRoute = createRoute({
  method: 'get',
  path: '/api/user/login',
  tags: ['UserAPI'],
  summary: 'Handlers GET request for User login',
  description: 'Redirects user for auth or issues session',
  operationId: 'idGetUserLogin',
  responses: { 200: { description: '' } },
})

export const getApiUserLogoutRoute = createRoute({
  method: 'get',
  path: '/api/user/logout',
  tags: ['UserAPI'],
  summary: 'Handlers GET request for User logout',
  description: 'Redirects user for auth or issues session',
  operationId: 'idGetUserLogout',
  responses: { 200: { description: '' } },
})

export const getApiUserPerformanceProfilesRoute = createRoute({
  method: 'get',
  path: '/api/user/performance/profiles',
  tags: ['PerformanceAPI'],
  summary: 'Handle GET requests for performance profiles',
  description: 'Returns the list of all the performance profiles saved by the current user',
  operationId: 'idGetPerformanceProfiles',
  responses: { 200: PerformanceProfilesResponseWrapperResponse },
})

export const postApiUserPerformanceProfilesRoute = createRoute({
  method: 'post',
  path: '/api/user/performance/profiles',
  tags: ['PerformanceAPI'],
  summary: 'Handle POST requests for saving performance profile',
  description: "Save performance profile using the current provider's persistence mechanism",
  operationId: 'idSavePerformanceProfile',
  request: {
    body: {
      content: {
        'application/json': { schema: PerformanceProfileParametersSchema },
        'multipart/form-data': {
          schema: z
            .object({
              concurrent_request: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'number of concurrent requests',
                  'x-go-name': 'ConcurrentRequest',
                }),
              duration: z
                .string()
                .exactOptional()
                .openapi({ description: 'duration of tests e.g. 30s', 'x-go-name': 'Duration' }),
              endpoints: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description: 'array of urls of performance results',
                  'x-go-name': 'Endpoints',
                }),
              load_generators: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description: 'array of load generators',
                  'x-go-name': 'LoadGenerators',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'name of performance profile', 'x-go-name': 'Name' }),
              qps: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'qps in integer',
                  'x-go-name': 'QPS',
                }),
              service_mesh: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'service mesh for performance tests',
                  'x-go-name': 'ServiceMesh',
                }),
            })
            .openapi({
              description:
                'PerformanceProfileParameters structs contains parameters to save a performance profile',
              'x-go-package': 'github.com/layer5io/meshery/models',
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: PerformanceProfileResponseWrapperResponse },
})

export const getApiUserPerformanceProfilesResultsRoute = createRoute({
  method: 'get',
  path: '/api/user/performance/profiles/results',
  tags: ['PerformanceAPI'],
  summary: 'Handles GET requests for performance results',
  description: 'Returns pages of all the performance results from Remote Provider',
  operationId: 'idGetAllPerformanceResults',
  responses: { 200: PerformanceResultsResponseWrapperResponse },
})

export const getApiUserPerformanceProfilesIdRoute = createRoute({
  method: 'get',
  path: '/api/user/performance/profiles/{id}',
  tags: ['PerformanceAPI'],
  summary: 'Handle GET requests for performance results of a profile',
  description: 'Returns single performance profile with the given id',
  operationId: 'idGetSinglePerformanceProfile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: PerformanceProfileResponseWrapperResponse },
})

export const deleteApiUserPerformanceProfilesIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/performance/profiles/{id}',
  tags: ['PerformanceAPI'],
  summary: 'Handle Delete requests for performance profiles',
  description: 'Deletes a performance profile with the given id',
  operationId: 'idDeletePerformanceProfile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: NoContentWrapperResponse },
})

export const getApiUserPerformanceProfilesIdResultsRoute = createRoute({
  method: 'get',
  path: '/api/user/performance/profiles/{id}/results',
  tags: ['PerformanceAPI'],
  summary: 'Handle GET request for results of a profile',
  description: 'Fetchs pages of results from Remote Provider for the given id',
  operationId: 'idGETProfileResults',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: PerformanceResultsResponseWrapperResponse },
})

export const getApiUserPerformanceProfilesIdRunRoute = createRoute({
  method: 'get',
  path: '/api/user/performance/profiles/{id}/run',
  tags: ['PerformanceAPI'],
  summary: 'Handle GET request to run a performance test',
  description: 'Runs the load test with the given parameters',
  operationId: 'idRunPerformanceTest',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiUserPrefsRoute = createRoute({
  method: 'get',
  path: '/api/user/prefs',
  tags: ['UserAPI'],
  summary: 'Handle GET for User Load Test Preferences',
  description: 'Returns User Load Test Preferences',
  operationId: 'idGetUserTestPrefs',
  responses: { 200: UserLoadTestPrefsRespWrapperResponse },
})

export const postApiUserPrefsRoute = createRoute({
  method: 'post',
  path: '/api/user/prefs',
  tags: ['UserAPI'],
  summary: 'Handle GET for User Load Test Preferences',
  description: 'Updates User Load Test Preferences',
  operationId: 'idPostUserTestPrefs',
  responses: { 200: UserLoadTestPrefsRespWrapperResponse },
})

export const getApiUserPrefsPerfRoute = createRoute({
  method: 'get',
  path: '/api/user/prefs/perf',
  tags: ['UserAPI'],
  summary: 'Handle GET request for load test preferences',
  description: 'Used for fetching load test preferences',
  operationId: 'idGetLoadPreferences',
  request: {
    query: z.object({
      uuid: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uuid',
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'UUID',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: LoadTestPreferencesWrapperResponse },
})

export const postApiUserPrefsPerfRoute = createRoute({
  method: 'post',
  path: '/api/user/prefs/perf',
  tags: ['UserAPI'],
  summary: 'Handle POST request for load test preferences',
  description: 'Used for persisting load test preferences',
  operationId: 'idPostLoadPreferences',
  request: { body: PerformanceTestConfigRequestBody },
  responses: { 200: { description: '' } },
})

export const deleteApiUserPrefsPerfRoute = createRoute({
  method: 'delete',
  path: '/api/user/prefs/perf',
  tags: ['UserAPI'],
  summary: 'Handle DELETE request for load test preferences',
  description: 'Used for deleting load test preferences',
  operationId: 'idDeleteLoadPreferences',
  request: {
    query: z.object({
      uuid: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uuid',
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'UUID',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiUserSchedulesRoute = createRoute({
  method: 'get',
  path: '/api/user/schedules',
  tags: ['SchedulesAPI'],
  summary: 'Handle GET reqeuest for Schedules',
  description: 'Returns the list of all the schedules saved by the current user',
  operationId: 'idGetSchedules',
  responses: { 200: SchedulesResponseWrapperResponse },
})

export const postApiUserSchedulesRoute = createRoute({
  method: 'post',
  path: '/api/user/schedules',
  tags: ['SchedulesAPI'],
  summary: 'Handle POST reqeuest for Schedules',
  description: "Save schedule using the current provider's persistence mechanism",
  operationId: 'idPostSchedules',
  responses: { 200: SingleScheduleResponseWrapperResponse },
})

export const getApiUserSchedulesIdRoute = createRoute({
  method: 'get',
  path: '/api/user/schedules/{id}',
  tags: ['SchedulesAPI'],
  summary: 'Handle GET reqeuest for Schedules',
  description: 'Fetches and returns the schedule with the given id',
  operationId: 'idGetSingleSchedule',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: SingleScheduleResponseWrapperResponse },
})

export const deleteApiUserSchedulesIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/schedules/{id}',
  tags: ['SchedulesAPI'],
  summary: 'Handle DELETE reqeuest for Schedules',
  description: 'Deletes a schedule with the given id',
  operationId: 'idDeleteSchedules',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'id for a specific',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-go-name': 'ID',
          },
        }),
    }),
  },
  responses: { 200: SchedulesResponseWrapperResponse },
})

export const getApiUserTokenRoute = createRoute({
  method: 'get',
  path: '/api/user/token',
  tags: ['UserAPI'],
  summary: 'Handle GET request for tokens',
  description: 'Returns token from the actual provider in a file\nresposese:\n200:',
  operationId: 'idGetTokenProvider',
  responses: { default: { description: 'Default response' } },
})

export const postApiUserTokenRoute = createRoute({
  method: 'post',
  path: '/api/user/token',
  tags: ['UserAPI'],
  summary: 'Handle POST request for tokens',
  description: 'Receives token from the actual provider\nresposese:\n200:',
  operationId: 'idPostTokenProvider',
  responses: { default: { description: 'Default response' } },
})

export const getProviderRoute = createRoute({
  method: 'get',
  path: '/provider',
  tags: ['ProvidersAPI'],
  summary: 'Handle GET request to provider UI',
  description: 'Servers providers UI',
  operationId: 'idProvider',
  responses: { 200: { description: '' } },
})
