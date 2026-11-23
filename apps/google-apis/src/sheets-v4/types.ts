type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type DataSourceRefreshDailySchedule = { startTime?: TimeOfDay | undefined }
type DataSourceRefreshMonthlySchedule = {
  daysOfMonth?: number[] | undefined
  startTime?: TimeOfDay | undefined
}
type Interval = { endTime?: string | undefined; startTime?: string | undefined }
type DataSourceRefreshWeeklySchedule = {
  daysOfWeek?:
    | (
        | 'DAY_OF_WEEK_UNSPECIFIED'
        | 'MONDAY'
        | 'TUESDAY'
        | 'WEDNESDAY'
        | 'THURSDAY'
        | 'FRIDAY'
        | 'SATURDAY'
        | 'SUNDAY'
      )[]
    | undefined
  startTime?: TimeOfDay | undefined
}
type DataSourceRefreshSchedule = {
  dailySchedule?: DataSourceRefreshDailySchedule | undefined
  enabled?: boolean | undefined
  monthlySchedule?: DataSourceRefreshMonthlySchedule | undefined
  nextRun?: Interval | undefined
  refreshScope?: 'DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED' | 'ALL_DATA_SOURCES' | undefined
  weeklySchedule?: DataSourceRefreshWeeklySchedule | undefined
}
type DataSourceColumnReference = { name?: string | undefined }
type DataSourceColumn = {
  formula?: string | undefined
  reference?: DataSourceColumnReference | undefined
}
type BigQueryQuerySpec = { rawQuery?: string | undefined }
type BigQueryTableSpec = {
  datasetId?: string | undefined
  tableId?: string | undefined
  tableProjectId?: string | undefined
}
type BigQueryDataSourceSpec = {
  projectId?: string | undefined
  querySpec?: BigQueryQuerySpec | undefined
  tableSpec?: BigQueryTableSpec | undefined
}
type GridRange = {
  endColumnIndex?: number | undefined
  endRowIndex?: number | undefined
  sheetId?: number | undefined
  startColumnIndex?: number | undefined
  startRowIndex?: number | undefined
}
type DataSourceParameter = {
  name?: string | undefined
  namedRangeId?: string | undefined
  range?: GridRange | undefined
}
type DataSourceSpec = {
  bigQuery?: BigQueryDataSourceSpec | undefined
  parameters?: DataSourceParameter[] | undefined
}
type DataSource = {
  calculatedColumns?: DataSourceColumn[] | undefined
  dataSourceId?: string | undefined
  sheetId?: number | undefined
  spec?: DataSourceSpec | undefined
}
type DimensionRange = {
  dimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
  endIndex?: number | undefined
  sheetId?: number | undefined
  startIndex?: number | undefined
}
type DeveloperMetadataLocation = {
  dimensionRange?: DimensionRange | undefined
  locationType?:
    | 'DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED'
    | 'ROW'
    | 'COLUMN'
    | 'SHEET'
    | 'SPREADSHEET'
    | undefined
  sheetId?: number | undefined
  spreadsheet?: boolean | undefined
}
type DeveloperMetadata = {
  location?: DeveloperMetadataLocation | undefined
  metadataId?: number | undefined
  metadataKey?: string | undefined
  metadataValue?: string | undefined
  visibility?: 'DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED' | 'DOCUMENT' | 'PROJECT' | undefined
}
type NamedRange = {
  name?: string | undefined
  namedRangeId?: string | undefined
  range?: GridRange | undefined
}
type Color = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type ColorStyle = {
  rgbColor?: Color | undefined
  themeColor?:
    | 'THEME_COLOR_TYPE_UNSPECIFIED'
    | 'TEXT'
    | 'BACKGROUND'
    | 'ACCENT1'
    | 'ACCENT2'
    | 'ACCENT3'
    | 'ACCENT4'
    | 'ACCENT5'
    | 'ACCENT6'
    | 'LINK'
    | undefined
}
type Border = {
  color?: Color | undefined
  colorStyle?: ColorStyle | undefined
  style?:
    | 'STYLE_UNSPECIFIED'
    | 'DOTTED'
    | 'DASHED'
    | 'SOLID'
    | 'SOLID_MEDIUM'
    | 'SOLID_THICK'
    | 'NONE'
    | 'DOUBLE'
    | undefined
  width?: number | undefined
}
type Borders = {
  bottom?: Border | undefined
  left?: Border | undefined
  right?: Border | undefined
  top?: Border | undefined
}
type NumberFormat = {
  pattern?: string | undefined
  type?:
    | 'NUMBER_FORMAT_TYPE_UNSPECIFIED'
    | 'TEXT'
    | 'NUMBER'
    | 'PERCENT'
    | 'CURRENCY'
    | 'DATE'
    | 'TIME'
    | 'DATE_TIME'
    | 'SCIENTIFIC'
    | undefined
}
type Padding = {
  bottom?: number | undefined
  left?: number | undefined
  right?: number | undefined
  top?: number | undefined
}
type Link = { uri?: string | undefined }
type TextFormat = {
  bold?: boolean | undefined
  fontFamily?: string | undefined
  fontSize?: number | undefined
  foregroundColor?: Color | undefined
  foregroundColorStyle?: ColorStyle | undefined
  italic?: boolean | undefined
  link?: Link | undefined
  strikethrough?: boolean | undefined
  underline?: boolean | undefined
}
type TextRotation = { angle?: number | undefined; vertical?: boolean | undefined }
type CellFormat = {
  backgroundColor?: Color | undefined
  backgroundColorStyle?: ColorStyle | undefined
  borders?: Borders | undefined
  horizontalAlignment?: 'HORIZONTAL_ALIGN_UNSPECIFIED' | 'LEFT' | 'CENTER' | 'RIGHT' | undefined
  hyperlinkDisplayType?: 'HYPERLINK_DISPLAY_TYPE_UNSPECIFIED' | 'LINKED' | 'PLAIN_TEXT' | undefined
  numberFormat?: NumberFormat | undefined
  padding?: Padding | undefined
  textDirection?: 'TEXT_DIRECTION_UNSPECIFIED' | 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT' | undefined
  textFormat?: TextFormat | undefined
  textRotation?: TextRotation | undefined
  verticalAlignment?: 'VERTICAL_ALIGN_UNSPECIFIED' | 'TOP' | 'MIDDLE' | 'BOTTOM' | undefined
  wrapStrategy?:
    | 'WRAP_STRATEGY_UNSPECIFIED'
    | 'OVERFLOW_CELL'
    | 'LEGACY_WRAP'
    | 'CLIP'
    | 'WRAP'
    | undefined
}
type IterativeCalculationSettings = {
  convergenceThreshold?: number | undefined
  maxIterations?: number | undefined
}
type ThemeColorPair = {
  color?: ColorStyle | undefined
  colorType?:
    | 'THEME_COLOR_TYPE_UNSPECIFIED'
    | 'TEXT'
    | 'BACKGROUND'
    | 'ACCENT1'
    | 'ACCENT2'
    | 'ACCENT3'
    | 'ACCENT4'
    | 'ACCENT5'
    | 'ACCENT6'
    | 'LINK'
    | undefined
}
type SpreadsheetTheme = {
  primaryFontFamily?: string | undefined
  themeColors?: ThemeColorPair[] | undefined
}
type SpreadsheetProperties = {
  autoRecalc?: 'RECALCULATION_INTERVAL_UNSPECIFIED' | 'ON_CHANGE' | 'MINUTE' | 'HOUR' | undefined
  defaultFormat?: CellFormat | undefined
  iterativeCalculationSettings?: IterativeCalculationSettings | undefined
  locale?: string | undefined
  spreadsheetTheme?: SpreadsheetTheme | undefined
  timeZone?: string | undefined
  title?: string | undefined
}
type BandingProperties = {
  firstBandColor?: Color | undefined
  firstBandColorStyle?: ColorStyle | undefined
  footerColor?: Color | undefined
  footerColorStyle?: ColorStyle | undefined
  headerColor?: Color | undefined
  headerColorStyle?: ColorStyle | undefined
  secondBandColor?: Color | undefined
  secondBandColorStyle?: ColorStyle | undefined
}
type BandedRange = {
  bandedRangeId?: number | undefined
  columnProperties?: BandingProperties | undefined
  range?: GridRange | undefined
  rowProperties?: BandingProperties | undefined
}
type ConditionValue = {
  relativeDate?:
    | 'RELATIVE_DATE_UNSPECIFIED'
    | 'PAST_YEAR'
    | 'PAST_MONTH'
    | 'PAST_WEEK'
    | 'YESTERDAY'
    | 'TODAY'
    | 'TOMORROW'
    | undefined
  userEnteredValue?: string | undefined
}
type BooleanCondition = {
  type?:
    | 'CONDITION_TYPE_UNSPECIFIED'
    | 'NUMBER_GREATER'
    | 'NUMBER_GREATER_THAN_EQ'
    | 'NUMBER_LESS'
    | 'NUMBER_LESS_THAN_EQ'
    | 'NUMBER_EQ'
    | 'NUMBER_NOT_EQ'
    | 'NUMBER_BETWEEN'
    | 'NUMBER_NOT_BETWEEN'
    | 'TEXT_CONTAINS'
    | 'TEXT_NOT_CONTAINS'
    | 'TEXT_STARTS_WITH'
    | 'TEXT_ENDS_WITH'
    | 'TEXT_EQ'
    | 'TEXT_IS_EMAIL'
    | 'TEXT_IS_URL'
    | 'DATE_EQ'
    | 'DATE_BEFORE'
    | 'DATE_AFTER'
    | 'DATE_ON_OR_BEFORE'
    | 'DATE_ON_OR_AFTER'
    | 'DATE_BETWEEN'
    | 'DATE_NOT_BETWEEN'
    | 'DATE_IS_VALID'
    | 'ONE_OF_RANGE'
    | 'ONE_OF_LIST'
    | 'BLANK'
    | 'NOT_BLANK'
    | 'CUSTOM_FORMULA'
    | 'BOOLEAN'
    | 'TEXT_NOT_EQ'
    | 'DATE_NOT_EQ'
    | 'FILTER_EXPRESSION'
    | undefined
  values?: ConditionValue[] | undefined
}
type FilterCriteria = {
  condition?: BooleanCondition | undefined
  hiddenValues?: string[] | undefined
  visibleBackgroundColor?: Color | undefined
  visibleBackgroundColorStyle?: ColorStyle | undefined
  visibleForegroundColor?: Color | undefined
  visibleForegroundColorStyle?: ColorStyle | undefined
}
type FilterSpec = {
  columnIndex?: number | undefined
  dataSourceColumnReference?: DataSourceColumnReference | undefined
  filterCriteria?: FilterCriteria | undefined
}
type SortSpec = {
  backgroundColor?: Color | undefined
  backgroundColorStyle?: ColorStyle | undefined
  dataSourceColumnReference?: DataSourceColumnReference | undefined
  dimensionIndex?: number | undefined
  foregroundColor?: Color | undefined
  foregroundColorStyle?: ColorStyle | undefined
  sortOrder?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
}
type BasicFilter = {
  criteria?: { [x: string]: FilterCriteria } | undefined
  filterSpecs?: FilterSpec[] | undefined
  range?: GridRange | undefined
  sortSpecs?: SortSpec[] | undefined
}
type EmbeddedObjectBorder = { color?: Color | undefined; colorStyle?: ColorStyle | undefined }
type GridCoordinate = {
  columnIndex?: number | undefined
  rowIndex?: number | undefined
  sheetId?: number | undefined
}
type OverlayPosition = {
  anchorCell?: GridCoordinate | undefined
  heightPixels?: number | undefined
  offsetXPixels?: number | undefined
  offsetYPixels?: number | undefined
  widthPixels?: number | undefined
}
type EmbeddedObjectPosition = {
  newSheet?: boolean | undefined
  overlayPosition?: OverlayPosition | undefined
  sheetId?: number | undefined
}
type TextPosition = {
  horizontalAlignment?: 'HORIZONTAL_ALIGN_UNSPECIFIED' | 'LEFT' | 'CENTER' | 'RIGHT' | undefined
}
type ChartAxisViewWindowOptions = {
  viewWindowMax?: number | undefined
  viewWindowMin?: number | undefined
  viewWindowMode?:
    | 'DEFAULT_VIEW_WINDOW_MODE'
    | 'VIEW_WINDOW_MODE_UNSUPPORTED'
    | 'EXPLICIT'
    | 'PRETTY'
    | undefined
}
type BasicChartAxis = {
  format?: TextFormat | undefined
  position?:
    | 'BASIC_CHART_AXIS_POSITION_UNSPECIFIED'
    | 'BOTTOM_AXIS'
    | 'LEFT_AXIS'
    | 'RIGHT_AXIS'
    | undefined
  title?: string | undefined
  titleTextPosition?: TextPosition | undefined
  viewWindowOptions?: ChartAxisViewWindowOptions | undefined
}
type ChartDateTimeRule = {
  type?:
    | 'CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED'
    | 'SECOND'
    | 'MINUTE'
    | 'HOUR'
    | 'HOUR_MINUTE'
    | 'HOUR_MINUTE_AMPM'
    | 'DAY_OF_WEEK'
    | 'DAY_OF_YEAR'
    | 'DAY_OF_MONTH'
    | 'DAY_MONTH'
    | 'MONTH'
    | 'QUARTER'
    | 'YEAR'
    | 'YEAR_MONTH'
    | 'YEAR_QUARTER'
    | 'YEAR_MONTH_DAY'
    | undefined
}
type ChartHistogramRule = {
  intervalSize?: number | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
}
type ChartGroupRule = {
  dateTimeRule?: ChartDateTimeRule | undefined
  histogramRule?: ChartHistogramRule | undefined
}
type ChartSourceRange = { sources?: GridRange[] | undefined }
type ChartData = {
  aggregateType?:
    | 'CHART_AGGREGATE_TYPE_UNSPECIFIED'
    | 'AVERAGE'
    | 'COUNT'
    | 'MAX'
    | 'MEDIAN'
    | 'MIN'
    | 'SUM'
    | undefined
  columnReference?: DataSourceColumnReference | undefined
  groupRule?: ChartGroupRule | undefined
  sourceRange?: ChartSourceRange | undefined
}
type BasicChartDomain = { domain?: ChartData | undefined; reversed?: boolean | undefined }
type DataLabel = {
  customLabelData?: ChartData | undefined
  placement?:
    | 'DATA_LABEL_PLACEMENT_UNSPECIFIED'
    | 'CENTER'
    | 'LEFT'
    | 'RIGHT'
    | 'ABOVE'
    | 'BELOW'
    | 'INSIDE_END'
    | 'INSIDE_BASE'
    | 'OUTSIDE_END'
    | undefined
  textFormat?: TextFormat | undefined
  type?: 'DATA_LABEL_TYPE_UNSPECIFIED' | 'NONE' | 'DATA' | 'CUSTOM' | undefined
}
type LineStyle = {
  type?:
    | 'LINE_DASH_TYPE_UNSPECIFIED'
    | 'INVISIBLE'
    | 'CUSTOM'
    | 'SOLID'
    | 'DOTTED'
    | 'MEDIUM_DASHED'
    | 'MEDIUM_DASHED_DOTTED'
    | 'LONG_DASHED'
    | 'LONG_DASHED_DOTTED'
    | undefined
  width?: number | undefined
}
type PointStyle = {
  shape?:
    | 'POINT_SHAPE_UNSPECIFIED'
    | 'CIRCLE'
    | 'DIAMOND'
    | 'HEXAGON'
    | 'PENTAGON'
    | 'SQUARE'
    | 'STAR'
    | 'TRIANGLE'
    | 'X_MARK'
    | undefined
  size?: number | undefined
}
type BasicSeriesDataPointStyleOverride = {
  color?: Color | undefined
  colorStyle?: ColorStyle | undefined
  index?: number | undefined
  pointStyle?: PointStyle | undefined
}
type BasicChartSeries = {
  color?: Color | undefined
  colorStyle?: ColorStyle | undefined
  dataLabel?: DataLabel | undefined
  lineStyle?: LineStyle | undefined
  pointStyle?: PointStyle | undefined
  series?: ChartData | undefined
  styleOverrides?: BasicSeriesDataPointStyleOverride[] | undefined
  targetAxis?:
    | 'BASIC_CHART_AXIS_POSITION_UNSPECIFIED'
    | 'BOTTOM_AXIS'
    | 'LEFT_AXIS'
    | 'RIGHT_AXIS'
    | undefined
  type?:
    | 'BASIC_CHART_TYPE_UNSPECIFIED'
    | 'BAR'
    | 'LINE'
    | 'AREA'
    | 'COLUMN'
    | 'SCATTER'
    | 'COMBO'
    | 'STEPPED_AREA'
    | undefined
}
type BasicChartSpec = {
  axis?: BasicChartAxis[] | undefined
  chartType?:
    | 'BASIC_CHART_TYPE_UNSPECIFIED'
    | 'BAR'
    | 'LINE'
    | 'AREA'
    | 'COLUMN'
    | 'SCATTER'
    | 'COMBO'
    | 'STEPPED_AREA'
    | undefined
  compareMode?: 'BASIC_CHART_COMPARE_MODE_UNSPECIFIED' | 'DATUM' | 'CATEGORY' | undefined
  domains?: BasicChartDomain[] | undefined
  headerCount?: number | undefined
  interpolateNulls?: boolean | undefined
  legendPosition?:
    | 'BASIC_CHART_LEGEND_POSITION_UNSPECIFIED'
    | 'BOTTOM_LEGEND'
    | 'LEFT_LEGEND'
    | 'RIGHT_LEGEND'
    | 'TOP_LEGEND'
    | 'NO_LEGEND'
    | undefined
  lineSmoothing?: boolean | undefined
  series?: BasicChartSeries[] | undefined
  stackedType?:
    | 'BASIC_CHART_STACKED_TYPE_UNSPECIFIED'
    | 'NOT_STACKED'
    | 'STACKED'
    | 'PERCENT_STACKED'
    | undefined
  threeDimensional?: boolean | undefined
  totalDataLabel?: DataLabel | undefined
}
type BubbleChartSpec = {
  bubbleBorderColor?: Color | undefined
  bubbleBorderColorStyle?: ColorStyle | undefined
  bubbleLabels?: ChartData | undefined
  bubbleMaxRadiusSize?: number | undefined
  bubbleMinRadiusSize?: number | undefined
  bubbleOpacity?: number | undefined
  bubbleSizes?: ChartData | undefined
  bubbleTextStyle?: TextFormat | undefined
  domain?: ChartData | undefined
  groupIds?: ChartData | undefined
  legendPosition?:
    | 'BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED'
    | 'BOTTOM_LEGEND'
    | 'LEFT_LEGEND'
    | 'RIGHT_LEGEND'
    | 'TOP_LEGEND'
    | 'NO_LEGEND'
    | 'INSIDE_LEGEND'
    | undefined
  series?: ChartData | undefined
}
type CandlestickSeries = { data?: ChartData | undefined }
type CandlestickData = {
  closeSeries?: CandlestickSeries | undefined
  highSeries?: CandlestickSeries | undefined
  lowSeries?: CandlestickSeries | undefined
  openSeries?: CandlestickSeries | undefined
}
type CandlestickDomain = { data?: ChartData | undefined; reversed?: boolean | undefined }
type CandlestickChartSpec = {
  data?: CandlestickData[] | undefined
  domain?: CandlestickDomain | undefined
}
type DataExecutionStatus = {
  errorCode?:
    | 'DATA_EXECUTION_ERROR_CODE_UNSPECIFIED'
    | 'TIMED_OUT'
    | 'TOO_MANY_ROWS'
    | 'TOO_MANY_COLUMNS'
    | 'TOO_MANY_CELLS'
    | 'ENGINE'
    | 'PARAMETER_INVALID'
    | 'UNSUPPORTED_DATA_TYPE'
    | 'DUPLICATE_COLUMN_NAMES'
    | 'INTERRUPTED'
    | 'CONCURRENT_QUERY'
    | 'OTHER'
    | 'TOO_MANY_CHARS_PER_CELL'
    | 'DATA_NOT_FOUND'
    | 'PERMISSION_DENIED'
    | 'MISSING_COLUMN_ALIAS'
    | 'OBJECT_NOT_FOUND'
    | 'OBJECT_IN_ERROR_STATE'
    | 'OBJECT_SPEC_INVALID'
    | undefined
  errorMessage?: string | undefined
  lastRefreshTime?: string | undefined
  state?:
    | 'DATA_EXECUTION_STATE_UNSPECIFIED'
    | 'NOT_STARTED'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | undefined
}
type DataSourceChartProperties = {
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSourceId?: string | undefined
}
type HistogramSeries = {
  barColor?: Color | undefined
  barColorStyle?: ColorStyle | undefined
  data?: ChartData | undefined
}
type HistogramChartSpec = {
  bucketSize?: number | undefined
  legendPosition?:
    | 'HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED'
    | 'BOTTOM_LEGEND'
    | 'LEFT_LEGEND'
    | 'RIGHT_LEGEND'
    | 'TOP_LEGEND'
    | 'NO_LEGEND'
    | 'INSIDE_LEGEND'
    | undefined
  outlierPercentile?: number | undefined
  series?: HistogramSeries[] | undefined
  showItemDividers?: boolean | undefined
}
type OrgChartSpec = {
  labels?: ChartData | undefined
  nodeColor?: Color | undefined
  nodeColorStyle?: ColorStyle | undefined
  nodeSize?: 'ORG_CHART_LABEL_SIZE_UNSPECIFIED' | 'SMALL' | 'MEDIUM' | 'LARGE' | undefined
  parentLabels?: ChartData | undefined
  selectedNodeColor?: Color | undefined
  selectedNodeColorStyle?: ColorStyle | undefined
  tooltips?: ChartData | undefined
}
type PieChartSpec = {
  domain?: ChartData | undefined
  legendPosition?:
    | 'PIE_CHART_LEGEND_POSITION_UNSPECIFIED'
    | 'BOTTOM_LEGEND'
    | 'LEFT_LEGEND'
    | 'RIGHT_LEGEND'
    | 'TOP_LEGEND'
    | 'NO_LEGEND'
    | 'LABELED_LEGEND'
    | undefined
  pieHole?: number | undefined
  series?: ChartData | undefined
  threeDimensional?: boolean | undefined
}
type BaselineValueFormat = {
  comparisonType?:
    | 'COMPARISON_TYPE_UNDEFINED'
    | 'ABSOLUTE_DIFFERENCE'
    | 'PERCENTAGE_DIFFERENCE'
    | undefined
  description?: string | undefined
  negativeColor?: Color | undefined
  negativeColorStyle?: ColorStyle | undefined
  position?: TextPosition | undefined
  positiveColor?: Color | undefined
  positiveColorStyle?: ColorStyle | undefined
  textFormat?: TextFormat | undefined
}
type ChartCustomNumberFormatOptions = { prefix?: string | undefined; suffix?: string | undefined }
type KeyValueFormat = { position?: TextPosition | undefined; textFormat?: TextFormat | undefined }
type ScorecardChartSpec = {
  aggregateType?:
    | 'CHART_AGGREGATE_TYPE_UNSPECIFIED'
    | 'AVERAGE'
    | 'COUNT'
    | 'MAX'
    | 'MEDIAN'
    | 'MIN'
    | 'SUM'
    | undefined
  baselineValueData?: ChartData | undefined
  baselineValueFormat?: BaselineValueFormat | undefined
  customFormatOptions?: ChartCustomNumberFormatOptions | undefined
  keyValueData?: ChartData | undefined
  keyValueFormat?: KeyValueFormat | undefined
  numberFormatSource?: 'CHART_NUMBER_FORMAT_SOURCE_UNDEFINED' | 'FROM_DATA' | 'CUSTOM' | undefined
  scaleFactor?: number | undefined
}
type TreemapChartColorScale = {
  maxValueColor?: Color | undefined
  maxValueColorStyle?: ColorStyle | undefined
  midValueColor?: Color | undefined
  midValueColorStyle?: ColorStyle | undefined
  minValueColor?: Color | undefined
  minValueColorStyle?: ColorStyle | undefined
  noDataColor?: Color | undefined
  noDataColorStyle?: ColorStyle | undefined
}
type TreemapChartSpec = {
  colorData?: ChartData | undefined
  colorScale?: TreemapChartColorScale | undefined
  headerColor?: Color | undefined
  headerColorStyle?: ColorStyle | undefined
  hideTooltips?: boolean | undefined
  hintedLevels?: number | undefined
  labels?: ChartData | undefined
  levels?: number | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
  parentLabels?: ChartData | undefined
  sizeData?: ChartData | undefined
  textFormat?: TextFormat | undefined
}
type WaterfallChartDomain = { data?: ChartData | undefined; reversed?: boolean | undefined }
type WaterfallChartCustomSubtotal = {
  dataIsSubtotal?: boolean | undefined
  label?: string | undefined
  subtotalIndex?: number | undefined
}
type WaterfallChartColumnStyle = {
  color?: Color | undefined
  colorStyle?: ColorStyle | undefined
  label?: string | undefined
}
type WaterfallChartSeries = {
  customSubtotals?: WaterfallChartCustomSubtotal[] | undefined
  data?: ChartData | undefined
  dataLabel?: DataLabel | undefined
  hideTrailingSubtotal?: boolean | undefined
  negativeColumnsStyle?: WaterfallChartColumnStyle | undefined
  positiveColumnsStyle?: WaterfallChartColumnStyle | undefined
  subtotalColumnsStyle?: WaterfallChartColumnStyle | undefined
}
type WaterfallChartSpec = {
  connectorLineStyle?: LineStyle | undefined
  domain?: WaterfallChartDomain | undefined
  firstValueIsTotal?: boolean | undefined
  hideConnectorLines?: boolean | undefined
  series?: WaterfallChartSeries[] | undefined
  stackedType?: 'WATERFALL_STACKED_TYPE_UNSPECIFIED' | 'STACKED' | 'SEQUENTIAL' | undefined
  totalDataLabel?: DataLabel | undefined
}
type ChartSpec = {
  altText?: string | undefined
  backgroundColor?: Color | undefined
  backgroundColorStyle?: ColorStyle | undefined
  basicChart?: BasicChartSpec | undefined
  bubbleChart?: BubbleChartSpec | undefined
  candlestickChart?: CandlestickChartSpec | undefined
  dataSourceChartProperties?: DataSourceChartProperties | undefined
  filterSpecs?: FilterSpec[] | undefined
  fontName?: string | undefined
  hiddenDimensionStrategy?:
    | 'CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED'
    | 'SKIP_HIDDEN_ROWS_AND_COLUMNS'
    | 'SKIP_HIDDEN_ROWS'
    | 'SKIP_HIDDEN_COLUMNS'
    | 'SHOW_ALL'
    | undefined
  histogramChart?: HistogramChartSpec | undefined
  maximized?: boolean | undefined
  orgChart?: OrgChartSpec | undefined
  pieChart?: PieChartSpec | undefined
  scorecardChart?: ScorecardChartSpec | undefined
  sortSpecs?: SortSpec[] | undefined
  subtitle?: string | undefined
  subtitleTextFormat?: TextFormat | undefined
  subtitleTextPosition?: TextPosition | undefined
  title?: string | undefined
  titleTextFormat?: TextFormat | undefined
  titleTextPosition?: TextPosition | undefined
  treemapChart?: TreemapChartSpec | undefined
  waterfallChart?: WaterfallChartSpec | undefined
}
type EmbeddedChart = {
  border?: EmbeddedObjectBorder | undefined
  chartId?: number | undefined
  position?: EmbeddedObjectPosition | undefined
  spec?: ChartSpec | undefined
}
type DimensionGroup = {
  collapsed?: boolean | undefined
  depth?: number | undefined
  range?: DimensionRange | undefined
}
type BooleanRule = { condition?: BooleanCondition | undefined; format?: CellFormat | undefined }
type InterpolationPoint = {
  color?: Color | undefined
  colorStyle?: ColorStyle | undefined
  type?:
    | 'INTERPOLATION_POINT_TYPE_UNSPECIFIED'
    | 'MIN'
    | 'MAX'
    | 'NUMBER'
    | 'PERCENT'
    | 'PERCENTILE'
    | undefined
  value?: string | undefined
}
type GradientRule = {
  maxpoint?: InterpolationPoint | undefined
  midpoint?: InterpolationPoint | undefined
  minpoint?: InterpolationPoint | undefined
}
type ConditionalFormatRule = {
  booleanRule?: BooleanRule | undefined
  gradientRule?: GradientRule | undefined
  ranges?: GridRange[] | undefined
}
type DimensionProperties = {
  dataSourceColumnReference?: DataSourceColumnReference | undefined
  developerMetadata?: DeveloperMetadata[] | undefined
  hiddenByFilter?: boolean | undefined
  hiddenByUser?: boolean | undefined
  pixelSize?: number | undefined
}
type DataSourceFormula = {
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSourceId?: string | undefined
}
type DataSourceTable = {
  columnSelectionType?:
    | 'DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED'
    | 'SELECTED'
    | 'SYNC_ALL'
    | undefined
  columns?: DataSourceColumnReference[] | undefined
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSourceId?: string | undefined
  filterSpecs?: FilterSpec[] | undefined
  rowLimit?: number | undefined
  sortSpecs?: SortSpec[] | undefined
}
type DataValidationRule = {
  condition?: BooleanCondition | undefined
  inputMessage?: string | undefined
  showCustomUi?: boolean | undefined
  strict?: boolean | undefined
}
type ErrorValue = {
  message?: string | undefined
  type?:
    | 'ERROR_TYPE_UNSPECIFIED'
    | 'ERROR'
    | 'NULL_VALUE'
    | 'DIVIDE_BY_ZERO'
    | 'VALUE'
    | 'REF'
    | 'NAME'
    | 'NUM'
    | 'N_A'
    | 'LOADING'
    | undefined
}
type ExtendedValue = {
  boolValue?: boolean | undefined
  errorValue?: ErrorValue | undefined
  formulaValue?: string | undefined
  numberValue?: number | undefined
  stringValue?: string | undefined
}
type PivotGroupLimit = { applyOrder?: number | undefined; countLimit?: number | undefined }
type DateTimeRule = {
  type?:
    | 'DATE_TIME_RULE_TYPE_UNSPECIFIED'
    | 'SECOND'
    | 'MINUTE'
    | 'HOUR'
    | 'HOUR_MINUTE'
    | 'HOUR_MINUTE_AMPM'
    | 'DAY_OF_WEEK'
    | 'DAY_OF_YEAR'
    | 'DAY_OF_MONTH'
    | 'DAY_MONTH'
    | 'MONTH'
    | 'QUARTER'
    | 'YEAR'
    | 'YEAR_MONTH'
    | 'YEAR_QUARTER'
    | 'YEAR_MONTH_DAY'
    | undefined
}
type HistogramRule = {
  end?: number | undefined
  interval?: number | undefined
  start?: number | undefined
}
type ManualRuleGroup = {
  groupName?: ExtendedValue | undefined
  items?: ExtendedValue[] | undefined
}
type ManualRule = { groups?: ManualRuleGroup[] | undefined }
type PivotGroupRule = {
  dateTimeRule?: DateTimeRule | undefined
  histogramRule?: HistogramRule | undefined
  manualRule?: ManualRule | undefined
}
type PivotGroupSortValueBucket = {
  buckets?: ExtendedValue[] | undefined
  valuesIndex?: number | undefined
}
type PivotGroupValueMetadata = {
  collapsed?: boolean | undefined
  value?: ExtendedValue | undefined
}
type PivotGroup = {
  dataSourceColumnReference?: DataSourceColumnReference | undefined
  groupLimit?: PivotGroupLimit | undefined
  groupRule?: PivotGroupRule | undefined
  label?: string | undefined
  repeatHeadings?: boolean | undefined
  showTotals?: boolean | undefined
  sortOrder?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
  sourceColumnOffset?: number | undefined
  valueBucket?: PivotGroupSortValueBucket | undefined
  valueMetadata?: PivotGroupValueMetadata[] | undefined
}
type PivotFilterCriteria = {
  condition?: BooleanCondition | undefined
  visibleByDefault?: boolean | undefined
  visibleValues?: string[] | undefined
}
type PivotFilterSpec = {
  columnOffsetIndex?: number | undefined
  dataSourceColumnReference?: DataSourceColumnReference | undefined
  filterCriteria?: PivotFilterCriteria | undefined
}
type PivotValue = {
  calculatedDisplayType?:
    | 'PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED'
    | 'PERCENT_OF_ROW_TOTAL'
    | 'PERCENT_OF_COLUMN_TOTAL'
    | 'PERCENT_OF_GRAND_TOTAL'
    | undefined
  dataSourceColumnReference?: DataSourceColumnReference | undefined
  formula?: string | undefined
  name?: string | undefined
  sourceColumnOffset?: number | undefined
  summarizeFunction?:
    | 'PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED'
    | 'SUM'
    | 'COUNTA'
    | 'COUNT'
    | 'COUNTUNIQUE'
    | 'AVERAGE'
    | 'MAX'
    | 'MIN'
    | 'MEDIAN'
    | 'PRODUCT'
    | 'STDEV'
    | 'STDEVP'
    | 'VAR'
    | 'VARP'
    | 'CUSTOM'
    | undefined
}
type PivotTable = {
  columns?: PivotGroup[] | undefined
  criteria?: { [x: string]: PivotFilterCriteria } | undefined
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSourceId?: string | undefined
  filterSpecs?: PivotFilterSpec[] | undefined
  rows?: PivotGroup[] | undefined
  source?: GridRange | undefined
  valueLayout?: 'HORIZONTAL' | 'VERTICAL' | undefined
  values?: PivotValue[] | undefined
}
type TextFormatRun = { format?: TextFormat | undefined; startIndex?: number | undefined }
type CellData = {
  dataSourceFormula?: DataSourceFormula | undefined
  dataSourceTable?: DataSourceTable | undefined
  dataValidation?: DataValidationRule | undefined
  effectiveFormat?: CellFormat | undefined
  effectiveValue?: ExtendedValue | undefined
  formattedValue?: string | undefined
  hyperlink?: string | undefined
  note?: string | undefined
  pivotTable?: PivotTable | undefined
  textFormatRuns?: TextFormatRun[] | undefined
  userEnteredFormat?: CellFormat | undefined
  userEnteredValue?: ExtendedValue | undefined
}
type RowData = { values?: CellData[] | undefined }
type GridData = {
  columnMetadata?: DimensionProperties[] | undefined
  rowData?: RowData[] | undefined
  rowMetadata?: DimensionProperties[] | undefined
  startColumn?: number | undefined
  startRow?: number | undefined
}
type FilterView = {
  criteria?: { [x: string]: FilterCriteria } | undefined
  filterSpecs?: FilterSpec[] | undefined
  filterViewId?: number | undefined
  namedRangeId?: string | undefined
  range?: GridRange | undefined
  sortSpecs?: SortSpec[] | undefined
  title?: string | undefined
}
type DataSourceSheetProperties = {
  columns?: DataSourceColumn[] | undefined
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSourceId?: string | undefined
}
type GridProperties = {
  columnCount?: number | undefined
  columnGroupControlAfter?: boolean | undefined
  frozenColumnCount?: number | undefined
  frozenRowCount?: number | undefined
  hideGridlines?: boolean | undefined
  rowCount?: number | undefined
  rowGroupControlAfter?: boolean | undefined
}
type SheetProperties = {
  dataSourceSheetProperties?: DataSourceSheetProperties | undefined
  gridProperties?: GridProperties | undefined
  hidden?: boolean | undefined
  index?: number | undefined
  rightToLeft?: boolean | undefined
  sheetId?: number | undefined
  sheetType?: 'SHEET_TYPE_UNSPECIFIED' | 'GRID' | 'OBJECT' | 'DATA_SOURCE' | undefined
  tabColor?: Color | undefined
  tabColorStyle?: ColorStyle | undefined
  title?: string | undefined
}
type Editors = {
  domainUsersCanEdit?: boolean | undefined
  groups?: string[] | undefined
  users?: string[] | undefined
}
type ProtectedRange = {
  description?: string | undefined
  editors?: Editors | undefined
  namedRangeId?: string | undefined
  protectedRangeId?: number | undefined
  range?: GridRange | undefined
  requestingUserCanEdit?: boolean | undefined
  unprotectedRanges?: GridRange[] | undefined
  warningOnly?: boolean | undefined
}
type SlicerSpec = {
  applyToPivotTables?: boolean | undefined
  backgroundColor?: Color | undefined
  backgroundColorStyle?: ColorStyle | undefined
  columnIndex?: number | undefined
  dataRange?: GridRange | undefined
  filterCriteria?: FilterCriteria | undefined
  horizontalAlignment?: 'HORIZONTAL_ALIGN_UNSPECIFIED' | 'LEFT' | 'CENTER' | 'RIGHT' | undefined
  textFormat?: TextFormat | undefined
  title?: string | undefined
}
type Slicer = {
  position?: EmbeddedObjectPosition | undefined
  slicerId?: number | undefined
  spec?: SlicerSpec | undefined
}
type Sheet = {
  bandedRanges?: BandedRange[] | undefined
  basicFilter?: BasicFilter | undefined
  charts?: EmbeddedChart[] | undefined
  columnGroups?: DimensionGroup[] | undefined
  conditionalFormats?: ConditionalFormatRule[] | undefined
  data?: GridData[] | undefined
  developerMetadata?: DeveloperMetadata[] | undefined
  filterViews?: FilterView[] | undefined
  merges?: GridRange[] | undefined
  properties?: SheetProperties | undefined
  protectedRanges?: ProtectedRange[] | undefined
  rowGroups?: DimensionGroup[] | undefined
  slicers?: Slicer[] | undefined
}
type Spreadsheet = {
  dataSourceSchedules?: DataSourceRefreshSchedule[] | undefined
  dataSources?: DataSource[] | undefined
  developerMetadata?: DeveloperMetadata[] | undefined
  namedRanges?: NamedRange[] | undefined
  properties?: SpreadsheetProperties | undefined
  sheets?: Sheet[] | undefined
  spreadsheetId?: string | undefined
  spreadsheetUrl?: string | undefined
}
type DeveloperMetadataLookup = {
  locationMatchingStrategy?:
    | 'DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED'
    | 'EXACT_LOCATION'
    | 'INTERSECTING_LOCATION'
    | undefined
  locationType?:
    | 'DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED'
    | 'ROW'
    | 'COLUMN'
    | 'SHEET'
    | 'SPREADSHEET'
    | undefined
  metadataId?: number | undefined
  metadataKey?: string | undefined
  metadataLocation?: DeveloperMetadataLocation | undefined
  metadataValue?: string | undefined
  visibility?: 'DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED' | 'DOCUMENT' | 'PROJECT' | undefined
}
type DataFilter = {
  a1Range?: string | undefined
  developerMetadataLookup?: DeveloperMetadataLookup | undefined
  gridRange?: GridRange | undefined
}
type SearchDeveloperMetadataRequest = { dataFilters?: DataFilter[] | undefined }
type MatchedDeveloperMetadata = {
  dataFilters?: DataFilter[] | undefined
  developerMetadata?: DeveloperMetadata | undefined
}
type SearchDeveloperMetadataResponse = {
  matchedDeveloperMetadata?: MatchedDeveloperMetadata[] | undefined
}
type CopySheetToAnotherSpreadsheetRequest = { destinationSpreadsheetId?: string | undefined }
type ValueRange = {
  majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
  range?: string | undefined
  values?: { [x: string]: unknown }[][] | undefined
}
type UpdateValuesResponse = {
  spreadsheetId?: string | undefined
  updatedCells?: number | undefined
  updatedColumns?: number | undefined
  updatedData?: ValueRange | undefined
  updatedRange?: string | undefined
  updatedRows?: number | undefined
}
type AppendValuesResponse = {
  spreadsheetId?: string | undefined
  tableRange?: string | undefined
  updates?: UpdateValuesResponse | undefined
}
type ClearValuesRequest = { [x: string]: unknown }
type ClearValuesResponse = { clearedRange?: string | undefined; spreadsheetId?: string | undefined }
type BatchClearValuesRequest = { ranges?: string[] | undefined }
type BatchClearValuesResponse = {
  clearedRanges?: string[] | undefined
  spreadsheetId?: string | undefined
}
type BatchClearValuesByDataFilterRequest = { dataFilters?: DataFilter[] | undefined }
type BatchClearValuesByDataFilterResponse = {
  clearedRanges?: string[] | undefined
  spreadsheetId?: string | undefined
}
type BatchGetValuesResponse = {
  spreadsheetId?: string | undefined
  valueRanges?: ValueRange[] | undefined
}
type BatchGetValuesByDataFilterRequest = {
  dataFilters?: DataFilter[] | undefined
  dateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
  majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
  valueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA' | undefined
}
type MatchedValueRange = {
  dataFilters?: DataFilter[] | undefined
  valueRange?: ValueRange | undefined
}
type BatchGetValuesByDataFilterResponse = {
  spreadsheetId?: string | undefined
  valueRanges?: MatchedValueRange[] | undefined
}
type BatchUpdateValuesRequest = {
  data?: ValueRange[] | undefined
  includeValuesInResponse?: boolean | undefined
  responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
  responseValueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA' | undefined
  valueInputOption?: 'INPUT_VALUE_OPTION_UNSPECIFIED' | 'RAW' | 'USER_ENTERED' | undefined
}
type BatchUpdateValuesResponse = {
  responses?: UpdateValuesResponse[] | undefined
  spreadsheetId?: string | undefined
  totalUpdatedCells?: number | undefined
  totalUpdatedColumns?: number | undefined
  totalUpdatedRows?: number | undefined
  totalUpdatedSheets?: number | undefined
}
type DataFilterValueRange = {
  dataFilter?: DataFilter | undefined
  majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
  values?: { [x: string]: unknown }[][] | undefined
}
type BatchUpdateValuesByDataFilterRequest = {
  data?: DataFilterValueRange[] | undefined
  includeValuesInResponse?: boolean | undefined
  responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
  responseValueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA' | undefined
  valueInputOption?: 'INPUT_VALUE_OPTION_UNSPECIFIED' | 'RAW' | 'USER_ENTERED' | undefined
}
type UpdateValuesByDataFilterResponse = {
  dataFilter?: DataFilter | undefined
  updatedCells?: number | undefined
  updatedColumns?: number | undefined
  updatedData?: ValueRange | undefined
  updatedRange?: string | undefined
  updatedRows?: number | undefined
}
type BatchUpdateValuesByDataFilterResponse = {
  responses?: UpdateValuesByDataFilterResponse[] | undefined
  spreadsheetId?: string | undefined
  totalUpdatedCells?: number | undefined
  totalUpdatedColumns?: number | undefined
  totalUpdatedRows?: number | undefined
  totalUpdatedSheets?: number | undefined
}
type AddBandingRequest = { bandedRange?: BandedRange | undefined }
type AddChartRequest = { chart?: EmbeddedChart | undefined }
type AddConditionalFormatRuleRequest = {
  index?: number | undefined
  rule?: ConditionalFormatRule | undefined
}
type AddDataSourceRequest = { dataSource?: DataSource | undefined }
type AddDimensionGroupRequest = { range?: DimensionRange | undefined }
type AddFilterViewRequest = { filter?: FilterView | undefined }
type AddNamedRangeRequest = { namedRange?: NamedRange | undefined }
type AddProtectedRangeRequest = { protectedRange?: ProtectedRange | undefined }
type AddSheetRequest = { properties?: SheetProperties | undefined }
type AddSlicerRequest = { slicer?: Slicer | undefined }
type AppendCellsRequest = {
  fields?: string | undefined
  rows?: RowData[] | undefined
  sheetId?: number | undefined
}
type AppendDimensionRequest = {
  dimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
  length?: number | undefined
  sheetId?: number | undefined
}
type SourceAndDestination = {
  dimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
  fillLength?: number | undefined
  source?: GridRange | undefined
}
type AutoFillRequest = {
  range?: GridRange | undefined
  sourceAndDestination?: SourceAndDestination | undefined
  useAlternateSeries?: boolean | undefined
}
type DataSourceSheetDimensionRange = {
  columnReferences?: DataSourceColumnReference[] | undefined
  sheetId?: number | undefined
}
type AutoResizeDimensionsRequest = {
  dataSourceSheetDimensions?: DataSourceSheetDimensionRange | undefined
  dimensions?: DimensionRange | undefined
}
type ClearBasicFilterRequest = { sheetId?: number | undefined }
type CopyPasteRequest = {
  destination?: GridRange | undefined
  pasteOrientation?: 'NORMAL' | 'TRANSPOSE' | undefined
  pasteType?:
    | 'PASTE_NORMAL'
    | 'PASTE_VALUES'
    | 'PASTE_FORMAT'
    | 'PASTE_NO_BORDERS'
    | 'PASTE_FORMULA'
    | 'PASTE_DATA_VALIDATION'
    | 'PASTE_CONDITIONAL_FORMATTING'
    | undefined
  source?: GridRange | undefined
}
type CreateDeveloperMetadataRequest = { developerMetadata?: DeveloperMetadata | undefined }
type CutPasteRequest = {
  destination?: GridCoordinate | undefined
  pasteType?:
    | 'PASTE_NORMAL'
    | 'PASTE_VALUES'
    | 'PASTE_FORMAT'
    | 'PASTE_NO_BORDERS'
    | 'PASTE_FORMULA'
    | 'PASTE_DATA_VALIDATION'
    | 'PASTE_CONDITIONAL_FORMATTING'
    | undefined
  source?: GridRange | undefined
}
type DeleteBandingRequest = { bandedRangeId?: number | undefined }
type DeleteConditionalFormatRuleRequest = {
  index?: number | undefined
  sheetId?: number | undefined
}
type DeleteDataSourceRequest = { dataSourceId?: string | undefined }
type DeleteDeveloperMetadataRequest = { dataFilter?: DataFilter | undefined }
type DeleteDimensionRequest = { range?: DimensionRange | undefined }
type DeleteDimensionGroupRequest = { range?: DimensionRange | undefined }
type DeleteDuplicatesRequest = {
  comparisonColumns?: DimensionRange[] | undefined
  range?: GridRange | undefined
}
type DeleteEmbeddedObjectRequest = { objectId?: number | undefined }
type DeleteFilterViewRequest = { filterId?: number | undefined }
type DeleteNamedRangeRequest = { namedRangeId?: string | undefined }
type DeleteProtectedRangeRequest = { protectedRangeId?: number | undefined }
type DeleteRangeRequest = {
  range?: GridRange | undefined
  shiftDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
}
type DeleteSheetRequest = { sheetId?: number | undefined }
type DuplicateFilterViewRequest = { filterId?: number | undefined }
type DuplicateSheetRequest = {
  insertSheetIndex?: number | undefined
  newSheetId?: number | undefined
  newSheetName?: string | undefined
  sourceSheetId?: number | undefined
}
type FindReplaceRequest = {
  allSheets?: boolean | undefined
  find?: string | undefined
  includeFormulas?: boolean | undefined
  matchCase?: boolean | undefined
  matchEntireCell?: boolean | undefined
  range?: GridRange | undefined
  replacement?: string | undefined
  searchByRegex?: boolean | undefined
  sheetId?: number | undefined
}
type InsertDimensionRequest = {
  inheritFromBefore?: boolean | undefined
  range?: DimensionRange | undefined
}
type InsertRangeRequest = {
  range?: GridRange | undefined
  shiftDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
}
type MergeCellsRequest = {
  mergeType?: 'MERGE_ALL' | 'MERGE_COLUMNS' | 'MERGE_ROWS' | undefined
  range?: GridRange | undefined
}
type MoveDimensionRequest = {
  destinationIndex?: number | undefined
  source?: DimensionRange | undefined
}
type PasteDataRequest = {
  coordinate?: GridCoordinate | undefined
  data?: string | undefined
  delimiter?: string | undefined
  html?: boolean | undefined
  type?:
    | 'PASTE_NORMAL'
    | 'PASTE_VALUES'
    | 'PASTE_FORMAT'
    | 'PASTE_NO_BORDERS'
    | 'PASTE_FORMULA'
    | 'PASTE_DATA_VALIDATION'
    | 'PASTE_CONDITIONAL_FORMATTING'
    | undefined
}
type RandomizeRangeRequest = { range?: GridRange | undefined }
type DataSourceObjectReference = {
  chartId?: number | undefined
  dataSourceFormulaCell?: GridCoordinate | undefined
  dataSourcePivotTableAnchorCell?: GridCoordinate | undefined
  dataSourceTableAnchorCell?: GridCoordinate | undefined
  sheetId?: string | undefined
}
type DataSourceObjectReferences = { references?: DataSourceObjectReference[] | undefined }
type RefreshDataSourceRequest = {
  dataSourceId?: string | undefined
  force?: boolean | undefined
  isAll?: boolean | undefined
  references?: DataSourceObjectReferences | undefined
}
type RepeatCellRequest = {
  cell?: CellData | undefined
  fields?: string | undefined
  range?: GridRange | undefined
}
type SetBasicFilterRequest = { filter?: BasicFilter | undefined }
type SetDataValidationRequest = {
  range?: GridRange | undefined
  rule?: DataValidationRule | undefined
}
type SortRangeRequest = { range?: GridRange | undefined; sortSpecs?: SortSpec[] | undefined }
type TextToColumnsRequest = {
  delimiter?: string | undefined
  delimiterType?:
    | 'DELIMITER_TYPE_UNSPECIFIED'
    | 'COMMA'
    | 'SEMICOLON'
    | 'PERIOD'
    | 'SPACE'
    | 'CUSTOM'
    | 'AUTODETECT'
    | undefined
  source?: GridRange | undefined
}
type TrimWhitespaceRequest = { range?: GridRange | undefined }
type UnmergeCellsRequest = { range?: GridRange | undefined }
type UpdateBandingRequest = { bandedRange?: BandedRange | undefined; fields?: string | undefined }
type UpdateBordersRequest = {
  bottom?: Border | undefined
  innerHorizontal?: Border | undefined
  innerVertical?: Border | undefined
  left?: Border | undefined
  range?: GridRange | undefined
  right?: Border | undefined
  top?: Border | undefined
}
type UpdateCellsRequest = {
  fields?: string | undefined
  range?: GridRange | undefined
  rows?: RowData[] | undefined
  start?: GridCoordinate | undefined
}
type UpdateChartSpecRequest = { chartId?: number | undefined; spec?: ChartSpec | undefined }
type UpdateConditionalFormatRuleRequest = {
  index?: number | undefined
  newIndex?: number | undefined
  rule?: ConditionalFormatRule | undefined
  sheetId?: number | undefined
}
type UpdateDataSourceRequest = { dataSource?: DataSource | undefined; fields?: string | undefined }
type UpdateDeveloperMetadataRequest = {
  dataFilters?: DataFilter[] | undefined
  developerMetadata?: DeveloperMetadata | undefined
  fields?: string | undefined
}
type UpdateDimensionGroupRequest = {
  dimensionGroup?: DimensionGroup | undefined
  fields?: string | undefined
}
type UpdateDimensionPropertiesRequest = {
  dataSourceSheetRange?: DataSourceSheetDimensionRange | undefined
  fields?: string | undefined
  properties?: DimensionProperties | undefined
  range?: DimensionRange | undefined
}
type UpdateEmbeddedObjectBorderRequest = {
  border?: EmbeddedObjectBorder | undefined
  fields?: string | undefined
  objectId?: number | undefined
}
type UpdateEmbeddedObjectPositionRequest = {
  fields?: string | undefined
  newPosition?: EmbeddedObjectPosition | undefined
  objectId?: number | undefined
}
type UpdateFilterViewRequest = { fields?: string | undefined; filter?: FilterView | undefined }
type UpdateNamedRangeRequest = { fields?: string | undefined; namedRange?: NamedRange | undefined }
type UpdateProtectedRangeRequest = {
  fields?: string | undefined
  protectedRange?: ProtectedRange | undefined
}
type UpdateSheetPropertiesRequest = {
  fields?: string | undefined
  properties?: SheetProperties | undefined
}
type UpdateSlicerSpecRequest = {
  fields?: string | undefined
  slicerId?: number | undefined
  spec?: SlicerSpec | undefined
}
type UpdateSpreadsheetPropertiesRequest = {
  fields?: string | undefined
  properties?: SpreadsheetProperties | undefined
}
type Request = {
  addBanding?: AddBandingRequest | undefined
  addChart?: AddChartRequest | undefined
  addConditionalFormatRule?: AddConditionalFormatRuleRequest | undefined
  addDataSource?: AddDataSourceRequest | undefined
  addDimensionGroup?: AddDimensionGroupRequest | undefined
  addFilterView?: AddFilterViewRequest | undefined
  addNamedRange?: AddNamedRangeRequest | undefined
  addProtectedRange?: AddProtectedRangeRequest | undefined
  addSheet?: AddSheetRequest | undefined
  addSlicer?: AddSlicerRequest | undefined
  appendCells?: AppendCellsRequest | undefined
  appendDimension?: AppendDimensionRequest | undefined
  autoFill?: AutoFillRequest | undefined
  autoResizeDimensions?: AutoResizeDimensionsRequest | undefined
  clearBasicFilter?: ClearBasicFilterRequest | undefined
  copyPaste?: CopyPasteRequest | undefined
  createDeveloperMetadata?: CreateDeveloperMetadataRequest | undefined
  cutPaste?: CutPasteRequest | undefined
  deleteBanding?: DeleteBandingRequest | undefined
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest | undefined
  deleteDataSource?: DeleteDataSourceRequest | undefined
  deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest | undefined
  deleteDimension?: DeleteDimensionRequest | undefined
  deleteDimensionGroup?: DeleteDimensionGroupRequest | undefined
  deleteDuplicates?: DeleteDuplicatesRequest | undefined
  deleteEmbeddedObject?: DeleteEmbeddedObjectRequest | undefined
  deleteFilterView?: DeleteFilterViewRequest | undefined
  deleteNamedRange?: DeleteNamedRangeRequest | undefined
  deleteProtectedRange?: DeleteProtectedRangeRequest | undefined
  deleteRange?: DeleteRangeRequest | undefined
  deleteSheet?: DeleteSheetRequest | undefined
  duplicateFilterView?: DuplicateFilterViewRequest | undefined
  duplicateSheet?: DuplicateSheetRequest | undefined
  findReplace?: FindReplaceRequest | undefined
  insertDimension?: InsertDimensionRequest | undefined
  insertRange?: InsertRangeRequest | undefined
  mergeCells?: MergeCellsRequest | undefined
  moveDimension?: MoveDimensionRequest | undefined
  pasteData?: PasteDataRequest | undefined
  randomizeRange?: RandomizeRangeRequest | undefined
  refreshDataSource?: RefreshDataSourceRequest | undefined
  repeatCell?: RepeatCellRequest | undefined
  setBasicFilter?: SetBasicFilterRequest | undefined
  setDataValidation?: SetDataValidationRequest | undefined
  sortRange?: SortRangeRequest | undefined
  textToColumns?: TextToColumnsRequest | undefined
  trimWhitespace?: TrimWhitespaceRequest | undefined
  unmergeCells?: UnmergeCellsRequest | undefined
  updateBanding?: UpdateBandingRequest | undefined
  updateBorders?: UpdateBordersRequest | undefined
  updateCells?: UpdateCellsRequest | undefined
  updateChartSpec?: UpdateChartSpecRequest | undefined
  updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest | undefined
  updateDataSource?: UpdateDataSourceRequest | undefined
  updateDeveloperMetadata?: UpdateDeveloperMetadataRequest | undefined
  updateDimensionGroup?: UpdateDimensionGroupRequest | undefined
  updateDimensionProperties?: UpdateDimensionPropertiesRequest | undefined
  updateEmbeddedObjectBorder?: UpdateEmbeddedObjectBorderRequest | undefined
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest | undefined
  updateFilterView?: UpdateFilterViewRequest | undefined
  updateNamedRange?: UpdateNamedRangeRequest | undefined
  updateProtectedRange?: UpdateProtectedRangeRequest | undefined
  updateSheetProperties?: UpdateSheetPropertiesRequest | undefined
  updateSlicerSpec?: UpdateSlicerSpecRequest | undefined
  updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest | undefined
}
type BatchUpdateSpreadsheetRequest = {
  includeSpreadsheetInResponse?: boolean | undefined
  requests?: Request[] | undefined
  responseIncludeGridData?: boolean | undefined
  responseRanges?: string[] | undefined
}
type AddBandingResponse = { bandedRange?: BandedRange | undefined }
type AddChartResponse = { chart?: EmbeddedChart | undefined }
type AddDataSourceResponse = {
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSource?: DataSource | undefined
}
type AddDimensionGroupResponse = { dimensionGroups?: DimensionGroup[] | undefined }
type AddFilterViewResponse = { filter?: FilterView | undefined }
type AddNamedRangeResponse = { namedRange?: NamedRange | undefined }
type AddProtectedRangeResponse = { protectedRange?: ProtectedRange | undefined }
type AddSheetResponse = { properties?: SheetProperties | undefined }
type AddSlicerResponse = { slicer?: Slicer | undefined }
type CreateDeveloperMetadataResponse = { developerMetadata?: DeveloperMetadata | undefined }
type DeleteConditionalFormatRuleResponse = { rule?: ConditionalFormatRule | undefined }
type DeleteDeveloperMetadataResponse = {
  deletedDeveloperMetadata?: DeveloperMetadata[] | undefined
}
type DeleteDimensionGroupResponse = { dimensionGroups?: DimensionGroup[] | undefined }
type DeleteDuplicatesResponse = { duplicatesRemovedCount?: number | undefined }
type DuplicateFilterViewResponse = { filter?: FilterView | undefined }
type DuplicateSheetResponse = { properties?: SheetProperties | undefined }
type FindReplaceResponse = {
  formulasChanged?: number | undefined
  occurrencesChanged?: number | undefined
  rowsChanged?: number | undefined
  sheetsChanged?: number | undefined
  valuesChanged?: number | undefined
}
type RefreshDataSourceObjectExecutionStatus = {
  dataExecutionStatus?: DataExecutionStatus | undefined
  reference?: DataSourceObjectReference | undefined
}
type RefreshDataSourceResponse = { statuses?: RefreshDataSourceObjectExecutionStatus[] | undefined }
type TrimWhitespaceResponse = { cellsChangedCount?: number | undefined }
type UpdateConditionalFormatRuleResponse = {
  newIndex?: number | undefined
  newRule?: ConditionalFormatRule | undefined
  oldIndex?: number | undefined
  oldRule?: ConditionalFormatRule | undefined
}
type UpdateDataSourceResponse = {
  dataExecutionStatus?: DataExecutionStatus | undefined
  dataSource?: DataSource | undefined
}
type UpdateDeveloperMetadataResponse = { developerMetadata?: DeveloperMetadata[] | undefined }
type UpdateEmbeddedObjectPositionResponse = { position?: EmbeddedObjectPosition | undefined }
type Response = {
  addBanding?: AddBandingResponse | undefined
  addChart?: AddChartResponse | undefined
  addDataSource?: AddDataSourceResponse | undefined
  addDimensionGroup?: AddDimensionGroupResponse | undefined
  addFilterView?: AddFilterViewResponse | undefined
  addNamedRange?: AddNamedRangeResponse | undefined
  addProtectedRange?: AddProtectedRangeResponse | undefined
  addSheet?: AddSheetResponse | undefined
  addSlicer?: AddSlicerResponse | undefined
  createDeveloperMetadata?: CreateDeveloperMetadataResponse | undefined
  deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse | undefined
  deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse | undefined
  deleteDimensionGroup?: DeleteDimensionGroupResponse | undefined
  deleteDuplicates?: DeleteDuplicatesResponse | undefined
  duplicateFilterView?: DuplicateFilterViewResponse | undefined
  duplicateSheet?: DuplicateSheetResponse | undefined
  findReplace?: FindReplaceResponse | undefined
  refreshDataSource?: RefreshDataSourceResponse | undefined
  trimWhitespace?: TrimWhitespaceResponse | undefined
  updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse | undefined
  updateDataSource?: UpdateDataSourceResponse | undefined
  updateDeveloperMetadata?: UpdateDeveloperMetadataResponse | undefined
  updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse | undefined
}
type BatchUpdateSpreadsheetResponse = {
  replies?: Response[] | undefined
  spreadsheetId?: string | undefined
  updatedSpreadsheet?: Spreadsheet | undefined
}
type GetSpreadsheetByDataFilterRequest = {
  dataFilters?: DataFilter[] | undefined
  includeGridData?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v4/spreadsheets': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Spreadsheet }
        output: Spreadsheet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId': {
      $get: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            includeGridData?: boolean | undefined
            ranges?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Spreadsheet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/developerMetadata/:metadataId': {
      $get: {
        input: { param: { spreadsheetId: string; metadataId: number } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DeveloperMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/developerMetadata:search': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SearchDeveloperMetadataRequest }
        output: SearchDeveloperMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/sheets/:sheetId:copyTo': {
      $post: {
        input: { param: { spreadsheetId: string; sheetId: number } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CopySheetToAnotherSpreadsheetRequest }
        output: SheetProperties
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values/:range': {
      $get: {
        input: { param: { spreadsheetId: string; range: string } } & {
          query: {
            dateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
            majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
            valueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ValueRange
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { spreadsheetId: string; range: string } } & {
          query: {
            includeValuesInResponse?: boolean | undefined
            responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
            responseValueRenderOption?:
              | 'FORMATTED_VALUE'
              | 'UNFORMATTED_VALUE'
              | 'FORMULA'
              | undefined
            valueInputOption?: 'INPUT_VALUE_OPTION_UNSPECIFIED' | 'RAW' | 'USER_ENTERED' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ValueRange }
        output: UpdateValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values/:range:append': {
      $post: {
        input: { param: { spreadsheetId: string; range: string } } & {
          query: {
            includeValuesInResponse?: boolean | undefined
            insertDataOption?: 'OVERWRITE' | 'INSERT_ROWS' | undefined
            responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
            responseValueRenderOption?:
              | 'FORMATTED_VALUE'
              | 'UNFORMATTED_VALUE'
              | 'FORMULA'
              | undefined
            valueInputOption?: 'INPUT_VALUE_OPTION_UNSPECIFIED' | 'RAW' | 'USER_ENTERED' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ValueRange }
        output: AppendValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values/:range:clear': {
      $post: {
        input: { param: { spreadsheetId: string; range: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ClearValuesRequest }
        output: ClearValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values:batchClear': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchClearValuesRequest }
        output: BatchClearValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values:batchClearByDataFilter': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchClearValuesByDataFilterRequest }
        output: BatchClearValuesByDataFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values:batchGet': {
      $get: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            dateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING' | undefined
            majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS' | undefined
            ranges?: string[] | undefined
            valueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BatchGetValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values:batchGetByDataFilter': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchGetValuesByDataFilterRequest }
        output: BatchGetValuesByDataFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values:batchUpdate': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchUpdateValuesRequest }
        output: BatchUpdateValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId/values:batchUpdateByDataFilter': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchUpdateValuesByDataFilterRequest }
        output: BatchUpdateValuesByDataFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId:batchUpdate': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchUpdateSpreadsheetRequest }
        output: BatchUpdateSpreadsheetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/spreadsheets/:spreadsheetId:getByDataFilter': {
      $post: {
        input: { param: { spreadsheetId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GetSpreadsheetByDataFilterRequest }
        output: Spreadsheet
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
