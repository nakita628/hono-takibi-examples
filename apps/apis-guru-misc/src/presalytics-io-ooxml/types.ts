type ChartAxes = {
  axisDataTypeId?: number | undefined
  chartsId?: string | undefined
  id?: string | undefined
  ooxmlId?: number | undefined
}
type ChartAxisDataTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlName?: (string | null) | undefined
  typeId?: number | undefined
}
type ProblemDetails = {
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type ChartChartData = { chartId?: (string | null) | undefined; id?: string | undefined }
type ChartChartDataDTO = {
  categoryNames?: (string[] | null) | undefined
  chartId?: string | undefined
  dataPoints?: (number[][] | null) | undefined
  seriesNames?: (string[] | null) | undefined
}
type ChildObjects = {
  entityId?: (string | null) | undefined
  entityName?: (string | null) | undefined
  objectType?: (string | null) | undefined
  parentEntityId?: (string | null) | undefined
  parentObjectType?: (string | null) | undefined
}
type ChartColumnCollections = { chartDataId?: (string | null) | undefined; id?: string | undefined }
type ChartColumns = {
  axisId?: (string | null) | undefined
  columnCollectionId?: (string | null) | undefined
  id?: string | undefined
  index?: number | undefined
  name?: (string | null) | undefined
}
type ChartDataPoints = {
  chartDataId?: (string | null) | undefined
  columnId?: (string | null) | undefined
  id?: string | undefined
  rowId?: (string | null) | undefined
  value?: number | undefined
}
type SharedColorTransformationAttributesDetails = {
  colorTransformation?: SharedColorTransformationsDetails | undefined
  colorTransformationsId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
  value?: (string | null) | undefined
}
type SharedColorTransformationsDetails = {
  colorTransformationAttributes?: (SharedColorTransformationAttributesDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  parentSolidFill?: SharedSolidFillsDetails | undefined
  solidFillsId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedEffectAttributesDetails = {
  attributesJson?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effect?: SharedEffectsDetails | undefined
  effectId?: (string | null) | undefined
  effectTypeId?: number | undefined
  fillMap?: SharedFillMapDetails | undefined
  id?: string | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeBackgroundFillsDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  fillMap?: SharedFillMapDetails | undefined
  id?: string | undefined
  intensityId?: number | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeColorsDetails = {
  accent1?: (string | null) | undefined
  accent2?: (string | null) | undefined
  accent3?: (string | null) | undefined
  accent4?: (string | null) | undefined
  accent5?: (string | null) | undefined
  accent6?: (string | null) | undefined
  dark1?: (string | null) | undefined
  dark2?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  followedHyperlink?: (string | null) | undefined
  hyperlink?: (string | null) | undefined
  id?: string | undefined
  light1?: (string | null) | undefined
  light2?: (string | null) | undefined
  name?: (string | null) | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeCustomColorsDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  hexValue?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeFillsDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  fillMap?: SharedFillMapDetails | undefined
  id?: string | undefined
  intensityId?: number | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeFontsDetails = {
  bodyFont?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  headingFont?: (string | null) | undefined
  id?: string | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideGroupsDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  groupElement?: SlideGroupElementsDetails | undefined
  groupElementId?: (string | null) | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  title?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideShapesDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effect?: SharedEffectsDetails | undefined
  fillMap?: SharedFillMapDetails | undefined
  flipHorizontal?: boolean | undefined
  flipVertical?: boolean | undefined
  freeFormPathXml?: (string | null) | undefined
  groupElement?: SlideGroupElementsDetails | undefined
  groupElementsId?: (string | null) | undefined
  height?: number | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  isThemeEffect?: boolean | undefined
  isThemeFill?: boolean | undefined
  isThemeLine?: boolean | undefined
  line?: SharedLinesDetails | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  presetTypeId?: (string | null) | undefined
  rotation?: number | undefined
  svgBlobUrl?: (string | null) | undefined
  textContainer?: SharedTextContainerDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
  width?: number | undefined
  xOffset?: number | undefined
  yOffset?: number | undefined
}
type DocumentDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  blobLocation?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  documentTypeId?: number | undefined
  filename?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ownerGuid?: string | undefined
  packageUri?: (string | null) | undefined
  slides?: (SlideSlidesDetails[] | null) | undefined
  storyId?: string | undefined
  tableStylesXmlBlobUrl?: (string | null) | undefined
  title?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideColorMapsDetails = {
  accent1?: number | undefined
  accent2?: number | undefined
  accent3?: number | undefined
  accent4?: number | undefined
  accent5?: number | undefined
  accent6?: number | undefined
  background1?: number | undefined
  background2?: number | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  followedHyperlink?: number | undefined
  hyperlink?: number | undefined
  id?: string | undefined
  slideMaster?: SlideSlideMastersDetails | undefined
  slideMasterId?: (string | null) | undefined
  text1?: number | undefined
  text2?: number | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideSlideMastersDetails = {
  colorMap?: SlideColorMapsDetails | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  parentSlide?: SlideSlidesDetails | undefined
  slideId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideSlidesDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  document?: DocumentDetails | undefined
  documentId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  number?: number | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  shapeTree?: SlideShapeTreesDetails | undefined
  slideDocumentUrl?: (string | null) | undefined
  slideMaster?: SlideSlideMastersDetails | undefined
  svgBlobUrl?: (string | null) | undefined
  theme?: ThemeThemesDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideShapeTreesDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  groupElement?: SlideGroupElementsDetails | undefined
  groupElementId?: (string | null) | undefined
  groupElements?: (SlideGroupElementsDetails[] | null) | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  slide?: SlideSlidesDetails | undefined
  slideId?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  title?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideGroupElementTypesDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideGroupElementsDetails = {
  childGroupElements?: (SlideGroupElementsDetails[] | null) | undefined
  connector?: SlideConnectorDetails | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  graphic?: SlideGraphicsDetails | undefined
  group?: SlideGroupsDetails | undefined
  groupElementTypeId?: number | undefined
  groupElementTypePk?: (string | null) | undefined
  id?: string | undefined
  parentGroupElement?: SlideGroupElementsDetails | undefined
  parentGroupElementId?: (string | null) | undefined
  shape?: SlideShapesDetails | undefined
  shapeTree?: SlideShapeTreesDetails | undefined
  shapeTreeId?: (string | null) | undefined
  typeInfo?: SlideGroupElementTypesDetails | undefined
  ultimateParentShapeTreeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedImageFillsDetails = {
  compressionState?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  dpi?: (number | null) | undefined
  effectsJson?: (string | null) | undefined
  fillMap?: SharedFillMapDetails | undefined
  fillMapId?: (string | null) | undefined
  id?: string | undefined
  picture?: SharedPicturesDetails | undefined
  rotateWithShape?: boolean | undefined
  sourceRectangle?: (string | null) | undefined
  stretch?: boolean | undefined
  tile?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedPicturesDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  fileExtension?: (string | null) | undefined
  graphicsId?: (string | null) | undefined
  id?: string | undefined
  imageFileBlobUrl?: (string | null) | undefined
  imageFill?: SharedImageFillsDetails | undefined
  imageFillsId?: (string | null) | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  parentGraphic?: SlideGraphicsDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideSmartArtsDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  graphicsId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  parentGraphic?: SlideGraphicsDetails | undefined
  svgBlobUrl?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideGraphicsDetails = {
  chart?: ChartChartsDetails | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  graphicTypeId?: number | undefined
  groupElement?: SlideGroupElementsDetails | undefined
  groupElementsId?: (string | null) | undefined
  height?: number | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  picture?: SharedPicturesDetails | undefined
  smartArt?: SlideSmartArtsDetails | undefined
  table?: TableTablesDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
  width?: number | undefined
  xOffset?: number | undefined
  yOffset?: number | undefined
}
type TableRowsDetails = {
  cells?: (TableCellsDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  height?: bigint | undefined
  id?: string | undefined
  index?: number | undefined
  table?: TableTablesDetails | undefined
  tableId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type TableTablesDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  cells?: (TableCellsDetails[] | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  columns?: (TableColumnsDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  hasStylePart?: boolean | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  parentGraphic?: SlideGraphicsDetails | undefined
  parentGraphicId?: (string | null) | undefined
  rows?: (TableRowsDetails[] | null) | undefined
  stylePartOuterXml?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type TableColumnsDetails = {
  cells?: (TableCellsDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  index?: number | undefined
  table?: TableTablesDetails | undefined
  tableId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
  width?: bigint | undefined
}
type TableCellsDetails = {
  border?: TableBordersDetails | undefined
  column?: TableColumnsDetails | undefined
  columnId?: (string | null) | undefined
  columnSpan?: number | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  fillMap?: SharedFillMapDetails | undefined
  id?: string | undefined
  isMergedHorozontal?: boolean | undefined
  isMergedVertical?: boolean | undefined
  row?: TableRowsDetails | undefined
  rowId?: (string | null) | undefined
  rowSpan?: number | undefined
  textContainer?: SharedTextContainerDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type TableBordersDetails = {
  bLtoTR?: SharedLinesDetails | undefined
  bottom?: SharedLinesDetails | undefined
  cell?: TableCellsDetails | undefined
  cellId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  left?: SharedLinesDetails | undefined
  right?: SharedLinesDetails | undefined
  tLtoBR?: SharedLinesDetails | undefined
  top?: SharedLinesDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedLinesDetails = {
  bLtoTRBorder?: TableBordersDetails | undefined
  bLtoTRBorderId?: (string | null) | undefined
  bottomBorder?: TableBordersDetails | undefined
  bottomBorderId?: (string | null) | undefined
  connectorId?: (string | null) | undefined
  dashTypeId?: number | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  headEndHeightId?: number | undefined
  headEndTypeId?: number | undefined
  headEndWidthId?: number | undefined
  id?: string | undefined
  leftBorder?: TableBordersDetails | undefined
  leftBorderId?: (string | null) | undefined
  lineColorSolidFill?: SharedSolidFillsDetails | undefined
  lineMap?: ThemeLineMapDetails | undefined
  lineMapId?: (string | null) | undefined
  parentConnector?: SlideConnectorDetails | undefined
  parentShape?: SlideShapesDetails | undefined
  rightBorder?: TableBordersDetails | undefined
  rightBorderId?: (string | null) | undefined
  shapeId?: (string | null) | undefined
  tLtoBRBorder?: TableBordersDetails | undefined
  tLtoBRBorderId?: (string | null) | undefined
  tailEndHeightId?: number | undefined
  tailEndTypeId?: number | undefined
  tailEndWidthId?: number | undefined
  topBorder?: TableBordersDetails | undefined
  topBorderId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
  weight?: number | undefined
}
type ThemeLineMapDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  intensityId?: number | undefined
  line?: SharedLinesDetails | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeThemesDetails = {
  backgroundFills?: (ThemeBackgroundFillsDetails[] | null) | undefined
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  colors?: ThemeColorsDetails | undefined
  customColors?: (ThemeCustomColorsDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effectMaps?: (ThemeEffectMapDetails[] | null) | undefined
  fills?: (ThemeFillsDetails[] | null) | undefined
  fonts?: ThemeFontsDetails | undefined
  id?: string | undefined
  lineMaps?: (ThemeLineMapDetails[] | null) | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  slide?: SlideSlidesDetails | undefined
  slideId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ThemeEffectMapDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effect?: SharedEffectsDetails | undefined
  id?: string | undefined
  intensityId?: number | undefined
  theme?: ThemeThemesDetails | undefined
  themeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedEffectsDetails = {
  connectorId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effectAttributes?: (SharedEffectAttributesDetails[] | null) | undefined
  effectMap?: ThemeEffectMapDetails | undefined
  effectMapId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  parentConnector?: SlideConnectorDetails | undefined
  parentShape?: SlideShapesDetails | undefined
  shapeId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SlideConnectorDetails = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effect?: SharedEffectsDetails | undefined
  endConnectionIdx?: number | undefined
  endConnectionShape?: SlideShapesDetails | undefined
  endConnectionShapeId?: (string | null) | undefined
  fillMap?: SharedFillMapDetails | undefined
  flipHorizontal?: boolean | undefined
  flipVertical?: boolean | undefined
  freeFormPathXml?: (string | null) | undefined
  groupElement?: SlideGroupElementsDetails | undefined
  groupElementsId?: (string | null) | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  isThemeEffect?: boolean | undefined
  isThemeFill?: boolean | undefined
  isThemeLine?: boolean | undefined
  line?: SharedLinesDetails | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  presetTypeId?: (string | null) | undefined
  rotation?: number | undefined
  startConnectionIdx?: number | undefined
  startConnectionShape?: SlideShapesDetails | undefined
  startConnectionShapeId?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedGradientStopsDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  gradientFill?: SharedGradientFillsDetails | undefined
  gradientFillsId?: (string | null) | undefined
  id?: string | undefined
  position?: number | undefined
  solidFill?: SharedSolidFillsDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedGradientFillsDetails = {
  angle?: (number | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  fillMap?: SharedFillMapDetails | undefined
  fillMapId?: (string | null) | undefined
  gradientStops?: (SharedGradientStopsDetails[] | null) | undefined
  id?: string | undefined
  isPath?: boolean | undefined
  pathType?: (string | null) | undefined
  rotateWithShape?: boolean | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedFillMapDetails = {
  connector?: SlideConnectorDetails | undefined
  connectorId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  effectAttribute?: SharedEffectAttributesDetails | undefined
  effectAttributeId?: (string | null) | undefined
  fillTypeId?: number | undefined
  gradientFill?: SharedGradientFillsDetails | undefined
  id?: string | undefined
  imageFill?: SharedImageFillsDetails | undefined
  shape?: SlideShapesDetails | undefined
  shapeId?: (string | null) | undefined
  solidFill?: SharedSolidFillsDetails | undefined
  tableCell?: TableCellsDetails | undefined
  tableCellId?: (string | null) | undefined
  themeBackgroundFill?: ThemeBackgroundFillsDetails | undefined
  themeBackgroundFillId?: (string | null) | undefined
  themeFill?: ThemeFillsDetails | undefined
  themeFillId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedSolidFillsDetails = {
  colorTransformations?: SharedColorTransformationsDetails | undefined
  colorTypeId?: (number | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  fillMapId?: (string | null) | undefined
  hexValue?: (string | null) | undefined
  id?: string | undefined
  isUserColor?: boolean | undefined
  parentFillMap?: SharedFillMapDetails | undefined
  parentGradientStop?: SharedGradientStopsDetails | undefined
  parentGradientStopId?: (string | null) | undefined
  parentLine?: SharedLinesDetails | undefined
  parentLineId?: (string | null) | undefined
  parentText?: SharedTextDetails | undefined
  parentTextId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedTextDetails = {
  colorSolidFill?: SharedSolidFillsDetails | undefined
  colorSolidFillsId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  font?: (string | null) | undefined
  fontSize?: (number | null) | undefined
  id?: string | undefined
  isBold?: boolean | undefined
  isItalic?: boolean | undefined
  isThemeFont?: boolean | undefined
  isUnderline?: boolean | undefined
  paragraph?: SharedParagraphDetails | undefined
  paragraphId?: (string | null) | undefined
  rawText?: (string | null) | undefined
  sequence?: number | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedParagraphDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  number?: number | undefined
  text?: (SharedTextDetails[] | null) | undefined
  textContainer?: SharedTextContainerDetails | undefined
  textContainerId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type SharedTextContainerDetails = {
  axis?: ChartAxesDetails | undefined
  axisId?: (string | null) | undefined
  chart?: ChartChartsDetails | undefined
  chartId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  outerXml?: (string | null) | undefined
  paragraphs?: (SharedParagraphDetails[] | null) | undefined
  parentShape?: SlideShapesDetails | undefined
  shapeId?: (string | null) | undefined
  tableCell?: TableCellsDetails | undefined
  tableCellId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartAxesDetails = {
  axisDataTypeId?: number | undefined
  chart?: ChartChartsDetails | undefined
  chartsId?: string | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  ooxmlId?: number | undefined
  titleTextContainer?: SharedTextContainerDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartColumnsDetails = {
  axis?: ChartAxesDetails | undefined
  axisId?: (string | null) | undefined
  columnCollection?: ChartColumnCollectionsDetails | undefined
  columnCollectionId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  index?: number | undefined
  name?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartColumnCollectionsDetails = {
  chartData?: ChartChartDataDetails | undefined
  chartDataId?: (string | null) | undefined
  columns?: (ChartColumnsDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartRowCollectionsDetails = {
  axis?: ChartAxesDetails | undefined
  axisId?: (string | null) | undefined
  chartData?: ChartChartDataDetails | undefined
  chartDataId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  nameFormatType?: number | undefined
  rows?: (ChartRowsDetails[] | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartRowsDetails = {
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  index?: number | undefined
  name?: (string | null) | undefined
  rowNameCollection?: ChartRowCollectionsDetails | undefined
  rowNameCollectionId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartDataPointsDetails = {
  chartData?: ChartChartDataDetails | undefined
  chartDataId?: (string | null) | undefined
  column?: ChartColumnsDetails | undefined
  columnId?: (string | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  row?: ChartRowsDetails | undefined
  rowId?: (string | null) | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
  value?: number | undefined
}
type ChartChartDataDetails = {
  chart?: ChartChartsDetails | undefined
  chartId?: (string | null) | undefined
  columnCollection?: ChartColumnCollectionsDetails | undefined
  dataPoints?: (ChartDataPointsDetails[] | null) | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  rowCollection?: ChartRowCollectionsDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type ChartChartsDetails = {
  axes?: (ChartAxesDetails[] | null) | undefined
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  chartData?: ChartChartDataDetails | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  parentGraphic?: SlideGraphicsDetails | undefined
  parentGraphicId?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  titleTextContainer?: SharedTextContainerDetails | undefined
  userCreated?: string | undefined
  userModified?: string | undefined
}
type OoxmlDTO = {
  id?: (string | null) | undefined
  openOfficeXml?: (string | null) | undefined
  type?: (string | null) | undefined
}
type ChartPlotType = {
  id?: string | undefined
  plotQualifedAssy?: (string | null) | undefined
  plotTypeName?: (string | null) | undefined
  rowColTypeId?: number | undefined
  typeId?: number | undefined
}
type ChartRowCol = {
  colName?: (string | null) | undefined
  colQualifiedAssy?: (string | null) | undefined
  id?: string | undefined
  rowName?: (string | null) | undefined
  rowQualifedAssy?: (string | null) | undefined
  typeId?: number | undefined
}
type ChartRowCollections = {
  axisId?: (string | null) | undefined
  chartDataId?: (string | null) | undefined
  id?: string | undefined
  nameFormatType?: number | undefined
}
type ChartRowNameFormatTypes = {
  formatCode?: (string | null) | undefined
  id?: string | undefined
  powerToolsId?: number | undefined
  typeId?: number | undefined
}
type ChartRows = {
  id?: string | undefined
  index?: number | undefined
  name?: (string | null) | undefined
  rowNameCollectionId?: (string | null) | undefined
}
type ChartCharts = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  parentGraphicId?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
}
type SlideConnector = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  endConnectionIdx?: number | undefined
  endConnectionShapeId?: (string | null) | undefined
  flipHorizontal?: boolean | undefined
  flipVertical?: boolean | undefined
  freeFormPathXml?: (string | null) | undefined
  groupElementsId?: (string | null) | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  isThemeEffect?: boolean | undefined
  isThemeFill?: boolean | undefined
  isThemeLine?: boolean | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  presetTypeId?: (string | null) | undefined
  rotation?: number | undefined
  startConnectionIdx?: number | undefined
  startConnectionShapeId?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
}
type Document = {
  baseElementBlobUrl?: (string | null) | undefined
  blobLocation?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  documentTypeId?: number | undefined
  filename?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ownerGuid?: string | undefined
  packageUri?: (string | null) | undefined
  storyId?: string | undefined
  tableStylesXmlBlobUrl?: (string | null) | undefined
  title?: (string | null) | undefined
}
type DocumentCloneDTO = { id?: string | undefined; storyId?: string | undefined }
type DocumentType = {
  description?: (string | null) | undefined
  fileExtension?: (string | null) | undefined
  id?: string | undefined
  mimeType?: (string | null) | undefined
  name?: (string | null) | undefined
  ooxmlPackageType?: (string | null) | undefined
  typeId?: number | undefined
}
type SlideGroups = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  groupElementId?: (string | null) | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  title?: (string | null) | undefined
}
type SharedPictures = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  fileExtension?: (string | null) | undefined
  graphicsId?: (string | null) | undefined
  id?: string | undefined
  imageFileBlobUrl?: (string | null) | undefined
  imageFillsId?: (string | null) | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
}
type SlideShapeTrees = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  groupElementId?: (string | null) | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  slideId?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
  title?: (string | null) | undefined
}
type SlideShapes = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  flipHorizontal?: boolean | undefined
  flipVertical?: boolean | undefined
  freeFormPathXml?: (string | null) | undefined
  groupElementsId?: (string | null) | undefined
  height?: number | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  isThemeEffect?: boolean | undefined
  isThemeFill?: boolean | undefined
  isThemeLine?: boolean | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  presetTypeId?: (string | null) | undefined
  rotation?: number | undefined
  svgBlobUrl?: (string | null) | undefined
  width?: number | undefined
  xOffset?: number | undefined
  yOffset?: number | undefined
}
type SharedColorTransformationAttributes = {
  colorTransformationsId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  value?: (string | null) | undefined
}
type SharedColorTransformations = {
  id?: string | undefined
  name?: (string | null) | undefined
  solidFillsId?: (string | null) | undefined
}
type SharedColorTypes = {
  colorSchemeIndexValueEnum?: (number | null) | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
}
type SharedDashTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  serializedAs?: (string | null) | undefined
  typeId?: number | undefined
}
type SharedEffectAttributes = {
  attributesJson?: (string | null) | undefined
  effectId?: (string | null) | undefined
  effectTypeId?: number | undefined
  id?: string | undefined
}
type SharedEffectTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
}
type SharedEffects = {
  connectorId?: (string | null) | undefined
  effectMapId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  shapeId?: (string | null) | undefined
}
type SharedFillMap = {
  connectorId?: (string | null) | undefined
  effectAttributeId?: (string | null) | undefined
  fillTypeId?: number | undefined
  id?: string | undefined
  shapeId?: (string | null) | undefined
  tableCellId?: (string | null) | undefined
  themeBackgroundFillId?: (string | null) | undefined
  themeFillId?: (string | null) | undefined
}
type SharedFillTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
}
type SharedGradientFills = {
  angle?: (number | null) | undefined
  fillMapId?: (string | null) | undefined
  id?: string | undefined
  isPath?: boolean | undefined
  pathType?: (string | null) | undefined
  rotateWithShape?: boolean | undefined
}
type SharedGradientStops = {
  gradientFillsId?: (string | null) | undefined
  id?: string | undefined
  position?: number | undefined
}
type SharedImageFills = {
  compressionState?: (string | null) | undefined
  dpi?: (number | null) | undefined
  effectsJson?: (string | null) | undefined
  fillMapId?: (string | null) | undefined
  id?: string | undefined
  rotateWithShape?: boolean | undefined
  sourceRectangle?: (string | null) | undefined
  stretch?: boolean | undefined
  tile?: (string | null) | undefined
}
type SharedLineEndSizes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  serializedAs?: (string | null) | undefined
  typeId?: number | undefined
}
type SharedLineEndTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  serializedAs?: (string | null) | undefined
  typeId?: number | undefined
}
type SharedLines = {
  bLtoTRBorderId?: (string | null) | undefined
  bottomBorderId?: (string | null) | undefined
  connectorId?: (string | null) | undefined
  dashTypeId?: number | undefined
  headEndHeightId?: number | undefined
  headEndTypeId?: number | undefined
  headEndWidthId?: number | undefined
  id?: string | undefined
  leftBorderId?: (string | null) | undefined
  lineMapId?: (string | null) | undefined
  rightBorderId?: (string | null) | undefined
  shapeId?: (string | null) | undefined
  tLtoBRBorderId?: (string | null) | undefined
  tailEndHeightId?: number | undefined
  tailEndTypeId?: number | undefined
  tailEndWidthId?: number | undefined
  topBorderId?: (string | null) | undefined
  weight?: number | undefined
}
type SharedParagraph = {
  id?: string | undefined
  number?: number | undefined
  textContainerId?: (string | null) | undefined
}
type SharedSolidFills = {
  colorTypeId?: (number | null) | undefined
  fillMapId?: (string | null) | undefined
  hexValue?: (string | null) | undefined
  id?: string | undefined
  isUserColor?: boolean | undefined
  parentGradientStopId?: (string | null) | undefined
  parentLineId?: (string | null) | undefined
  parentTextId?: (string | null) | undefined
}
type SharedText = {
  colorSolidFillsId?: (string | null) | undefined
  font?: (string | null) | undefined
  fontSize?: (number | null) | undefined
  id?: string | undefined
  isBold?: boolean | undefined
  isItalic?: boolean | undefined
  isThemeFont?: boolean | undefined
  isUnderline?: boolean | undefined
  paragraphId?: (string | null) | undefined
  rawText?: (string | null) | undefined
  sequence?: number | undefined
}
type SharedTextContainer = {
  axisId?: (string | null) | undefined
  chartId?: (string | null) | undefined
  id?: string | undefined
  outerXml?: (string | null) | undefined
  shapeId?: (string | null) | undefined
  tableCellId?: (string | null) | undefined
}
type SlideColorMaps = {
  accent1?: number | undefined
  accent2?: number | undefined
  accent3?: number | undefined
  accent4?: number | undefined
  accent5?: number | undefined
  accent6?: number | undefined
  background1?: number | undefined
  background2?: number | undefined
  followedHyperlink?: number | undefined
  hyperlink?: number | undefined
  id?: string | undefined
  slideMasterId?: (string | null) | undefined
  text1?: number | undefined
  text2?: number | undefined
}
type SlideGraphicTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
}
type SlideGraphics = {
  graphicTypeId?: number | undefined
  groupElementsId?: (string | null) | undefined
  height?: number | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  ooxmlId?: number | undefined
  width?: number | undefined
  xOffset?: number | undefined
  yOffset?: number | undefined
}
type SlideGroupElementTypes = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
}
type SlideGroupElements = {
  groupElementTypeId?: number | undefined
  groupElementTypePk?: (string | null) | undefined
  id?: string | undefined
  parentGroupElementId?: (string | null) | undefined
  shapeTreeId?: (string | null) | undefined
  ultimateParentShapeTreeId?: (string | null) | undefined
}
type SlideSlideMasters = { id?: string | undefined; slideId?: (string | null) | undefined }
type SlideSlides = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  documentId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  number?: number | undefined
  ooxmlId?: number | undefined
  packageUri?: (string | null) | undefined
  slideDocumentUrl?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
}
type SlideSmartArts = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  graphicsId?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
}
type TableBorders = { cellId?: (string | null) | undefined; id?: string | undefined }
type TableCells = {
  columnId?: (string | null) | undefined
  columnSpan?: number | undefined
  id?: string | undefined
  isMergedHorozontal?: boolean | undefined
  isMergedVertical?: boolean | undefined
  rowId?: (string | null) | undefined
  rowSpan?: number | undefined
}
type TableColumns = {
  id?: string | undefined
  index?: number | undefined
  tableId?: (string | null) | undefined
  width?: bigint | undefined
}
type TableRows = {
  height?: bigint | undefined
  id?: string | undefined
  index?: number | undefined
  tableId?: (string | null) | undefined
}
type TableTableDataDTO = {
  tableData?: (string[][] | null) | undefined
  tableId?: string | undefined
}
type TableTables = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  hasStylePart?: boolean | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  parentGraphicId?: (string | null) | undefined
  stylePartOuterXml?: (string | null) | undefined
  svgBlobUrl?: (string | null) | undefined
}
type ThemeBackgroundFills = {
  id?: string | undefined
  intensityId?: number | undefined
  themeId?: (string | null) | undefined
}
type ThemeColors = {
  accent1?: (string | null) | undefined
  accent2?: (string | null) | undefined
  accent3?: (string | null) | undefined
  accent4?: (string | null) | undefined
  accent5?: (string | null) | undefined
  accent6?: (string | null) | undefined
  dark1?: (string | null) | undefined
  dark2?: (string | null) | undefined
  followedHyperlink?: (string | null) | undefined
  hyperlink?: (string | null) | undefined
  id?: string | undefined
  light1?: (string | null) | undefined
  light2?: (string | null) | undefined
  name?: (string | null) | undefined
  themeId?: (string | null) | undefined
}
type ThemeCustomColors = {
  hexValue?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  themeId?: (string | null) | undefined
}
type ThemeEffectMap = {
  id?: string | undefined
  intensityId?: number | undefined
  themeId?: (string | null) | undefined
}
type ThemeFills = {
  id?: string | undefined
  intensityId?: number | undefined
  themeId?: (string | null) | undefined
}
type ThemeFonts = {
  bodyFont?: (string | null) | undefined
  headingFont?: (string | null) | undefined
  id?: string | undefined
  themeId?: (string | null) | undefined
}
type ThemeIntensity = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  typeId?: number | undefined
}
type ThemeLineMap = {
  id?: string | undefined
  intensityId?: number | undefined
  themeId?: (string | null) | undefined
}
type ThemeThemes = {
  baseElementBlobUrl?: (string | null) | undefined
  changedBaseElementBlobUrl?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  packageUri?: (string | null) | undefined
  slideId?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Charts/Axes/:id': {
      $get:
        | { input: { param: { id: string } }; output: ChartAxes; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/AxisDataTypes': {
      $get:
        | { input: {}; output: ChartAxisDataTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/AxisDataTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: ChartAxisDataTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/AxisDataTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartAxisDataTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/ChartData/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartChartData
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/ChartUpdate/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartChartDataDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $put:
        | {
            input: { param: { id: string } } & { json: ChartChartDataDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ChartChartDataDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Charts/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Charts/ColumnCollections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartColumnCollections
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/Columns/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartColumns
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/DataPoints/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartDataPoints
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartChartsDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Charts/PlotType': {
      $get:
        | { input: {}; output: ChartPlotType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/PlotType/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: ChartPlotType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/PlotType/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartPlotType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowCol': {
      $get:
        | { input: {}; output: ChartRowCol[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowCol/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: ChartRowCol
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowCol/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartRowCol
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowCollections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartRowCollections
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowNameFormatTypes': {
      $get:
        | { input: {}; output: ChartRowNameFormatTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowNameFormatTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: ChartRowNameFormatTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/RowNameFormatTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartRowNameFormatTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/Rows/:id': {
      $get:
        | { input: { param: { id: string } }; output: ChartRows; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Charts/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Charts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChartCharts
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/ConnectionShapes/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ConnectionShapes/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideConnectorDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/ConnectionShapes/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConnectionShapes/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConnectionShapes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideConnector
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Documents': {
      $post:
        | {
            input: { form: { file: File; storyId: string } }
            output: Document[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file: File; storyId: string } }
            output: Document[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; storyId: string } }
            output: Document[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; storyId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/Documents/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Documents/Clone/:id': {
      $post:
        | {
            input: { param: { id: string } } & { json: DocumentCloneDTO }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DocumentCloneDTO }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DocumentCloneDTO }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DocumentCloneDTO }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/Documents/DocumentType': {
      $get:
        | { input: {}; output: DocumentType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Documents/DocumentType/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: DocumentType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Documents/DocumentType/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DocumentType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Documents/Download/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { orginal?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { orginal?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { orginal?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/Documents/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
      $get:
        | { input: { param: { id: string } }; output: Document; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Document; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Document; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/Groups/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Groups/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideGroupsDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Groups/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Groups/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Groups/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideGroups
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Images/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Images/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedPicturesDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Images/GetImage/:Id': {
      $put:
        | { input: { param: { Id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { Id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { Id: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/Images/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Images/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Images/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedPictures
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/ShapeTrees/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ShapeTrees/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideShapeTreesDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/ShapeTrees/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ShapeTrees/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ShapeTrees/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideShapeTrees
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shapes/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Shapes/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideShapesDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shapes/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Shapes/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Shapes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideShapes
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/ColorTransformationAttributes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedColorTransformationAttributes
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/ColorTransformations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedColorTransformations
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/ColorTypes': {
      $get:
        | { input: {}; output: SharedColorTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/ColorTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SharedColorTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/ColorTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedColorTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/DashTypes': {
      $get:
        | { input: {}; output: SharedDashTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/DashTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SharedDashTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/DashTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedDashTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/EffectAttributes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedEffectAttributes
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/EffectTypes': {
      $get:
        | { input: {}; output: SharedEffectTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/EffectTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SharedEffectTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/EffectTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedEffectTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/Effects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedEffects
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/FillMap/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedFillMap
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/FillTypes': {
      $get:
        | { input: {}; output: SharedFillTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/FillTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SharedFillTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/FillTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedFillTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/GradientFills/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedGradientFills
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/GradientStops/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedGradientStops
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/ImageFills/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedImageFills
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/LineEndSizes': {
      $get:
        | { input: {}; output: SharedLineEndSizes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/LineEndSizes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SharedLineEndSizes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/LineEndSizes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedLineEndSizes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/LineEndTypes': {
      $get:
        | { input: {}; output: SharedLineEndTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/LineEndTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SharedLineEndTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/LineEndTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedLineEndTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/Lines/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedLines
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/Paragraph/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedParagraph
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/SolidFills/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedSolidFills
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/Text/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedText
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Shared/TextContainer/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SharedTextContainer
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Slides/ColorMaps/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideColorMaps
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideSlidesDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GraphicTypes': {
      $get:
        | { input: {}; output: SlideGraphicTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GraphicTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SlideGraphicTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GraphicTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideGraphicTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/Graphics/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideGraphics
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GroupElementTypes': {
      $get:
        | { input: {}; output: SlideGroupElementTypes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GroupElementTypes/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: SlideGroupElementTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GroupElementTypes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideGroupElementTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/GroupElements/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideGroupElements
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Slides/SlideMasters/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideSlideMasters
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Slides/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Slides/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideSlides
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/SmartArts/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/SmartArts/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideSmartArtsDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/SmartArts/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/SmartArts/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/SmartArts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SlideSmartArts
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Tables/Borders/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TableBorders
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Tables/Cells/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TableCells
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Tables/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Tables/Columns/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TableColumns
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Tables/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TableTablesDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Tables/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Tables/Rows/:id': {
      $get:
        | { input: { param: { id: string } }; output: TableRows; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Tables/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Tables/TableUpdate/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TableTableDataDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $put:
        | {
            input: { param: { id: string } } & { json: TableTableDataDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TableTableDataDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Tables/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TableTables
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/BackgroundFills/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeBackgroundFills
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/ChildObjects/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ChildObjects[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/Themes/Colors/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeColors
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/CustomColors/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeCustomColors
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/Details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeThemesDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/EffectMap/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeEffectMap
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/Fills/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeFills
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/Fonts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeFonts
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/Intensity': {
      $get:
        | { input: {}; output: ThemeIntensity[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/Intensity/TypeId/:type_id': {
      $get:
        | {
            input: { param: { type_id: number } }
            output: ThemeIntensity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { type_id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { type_id: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/Intensity/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeIntensity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/LineMap/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeLineMap
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/Themes/OpenOfficeXml/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: OoxmlDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { updated?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OoxmlDTO }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Themes/Svg/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { use_cache?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Themes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThemeThemes
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  },
  '/'
>
export default routes
