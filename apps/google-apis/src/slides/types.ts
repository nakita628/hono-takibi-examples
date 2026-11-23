type LayoutProperties = {
  displayName?: string | undefined
  masterObjectId?: string | undefined
  name?: string | undefined
}
type MasterProperties = { displayName?: string | undefined }
type NotesProperties = { speakerNotesObjectId?: string | undefined }
type Group = { children?: PageElement[] | undefined }
type CropProperties = {
  angle?: number | undefined
  bottomOffset?: number | undefined
  leftOffset?: number | undefined
  rightOffset?: number | undefined
  topOffset?: number | undefined
}
type Link = {
  pageObjectId?: string | undefined
  relativeLink?:
    | 'RELATIVE_SLIDE_LINK_UNSPECIFIED'
    | 'NEXT_SLIDE'
    | 'PREVIOUS_SLIDE'
    | 'FIRST_SLIDE'
    | 'LAST_SLIDE'
    | undefined
  slideIndex?: number | undefined
  url?: string | undefined
}
type RgbColor = { blue?: number | undefined; green?: number | undefined; red?: number | undefined }
type OpaqueColor = {
  rgbColor?: RgbColor | undefined
  themeColor?:
    | 'THEME_COLOR_TYPE_UNSPECIFIED'
    | 'DARK1'
    | 'LIGHT1'
    | 'DARK2'
    | 'LIGHT2'
    | 'ACCENT1'
    | 'ACCENT2'
    | 'ACCENT3'
    | 'ACCENT4'
    | 'ACCENT5'
    | 'ACCENT6'
    | 'HYPERLINK'
    | 'FOLLOWED_HYPERLINK'
    | 'TEXT1'
    | 'BACKGROUND1'
    | 'TEXT2'
    | 'BACKGROUND2'
    | undefined
}
type SolidFill = { alpha?: number | undefined; color?: OpaqueColor | undefined }
type OutlineFill = { solidFill?: SolidFill | undefined }
type Dimension = {
  magnitude?: number | undefined
  unit?: 'UNIT_UNSPECIFIED' | 'EMU' | 'PT' | undefined
}
type Outline = {
  dashStyle?:
    | 'DASH_STYLE_UNSPECIFIED'
    | 'SOLID'
    | 'DOT'
    | 'DASH'
    | 'DASH_DOT'
    | 'LONG_DASH'
    | 'LONG_DASH_DOT'
    | undefined
  outlineFill?: OutlineFill | undefined
  propertyState?: 'RENDERED' | 'NOT_RENDERED' | 'INHERIT' | undefined
  weight?: Dimension | undefined
}
type ColorStop = {
  alpha?: number | undefined
  color?: OpaqueColor | undefined
  position?: number | undefined
}
type Recolor = {
  name?:
    | 'NONE'
    | 'LIGHT1'
    | 'LIGHT2'
    | 'LIGHT3'
    | 'LIGHT4'
    | 'LIGHT5'
    | 'LIGHT6'
    | 'LIGHT7'
    | 'LIGHT8'
    | 'LIGHT9'
    | 'LIGHT10'
    | 'DARK1'
    | 'DARK2'
    | 'DARK3'
    | 'DARK4'
    | 'DARK5'
    | 'DARK6'
    | 'DARK7'
    | 'DARK8'
    | 'DARK9'
    | 'DARK10'
    | 'GRAYSCALE'
    | 'NEGATIVE'
    | 'SEPIA'
    | 'CUSTOM'
    | undefined
  recolorStops?: ColorStop[] | undefined
}
type AffineTransform = {
  scaleX?: number | undefined
  scaleY?: number | undefined
  shearX?: number | undefined
  shearY?: number | undefined
  translateX?: number | undefined
  translateY?: number | undefined
  unit?: 'UNIT_UNSPECIFIED' | 'EMU' | 'PT' | undefined
}
type Shadow = {
  alignment?:
    | 'RECTANGLE_POSITION_UNSPECIFIED'
    | 'TOP_LEFT'
    | 'TOP_CENTER'
    | 'TOP_RIGHT'
    | 'LEFT_CENTER'
    | 'CENTER'
    | 'RIGHT_CENTER'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_CENTER'
    | 'BOTTOM_RIGHT'
    | undefined
  alpha?: number | undefined
  blurRadius?: Dimension | undefined
  color?: OpaqueColor | undefined
  propertyState?: 'RENDERED' | 'NOT_RENDERED' | 'INHERIT' | undefined
  rotateWithShape?: boolean | undefined
  transform?: AffineTransform | undefined
  type?: 'SHADOW_TYPE_UNSPECIFIED' | 'OUTER' | undefined
}
type ImageProperties = {
  brightness?: number | undefined
  contrast?: number | undefined
  cropProperties?: CropProperties | undefined
  link?: Link | undefined
  outline?: Outline | undefined
  recolor?: Recolor | undefined
  shadow?: Shadow | undefined
  transparency?: number | undefined
}
type Placeholder = {
  index?: number | undefined
  parentObjectId?: string | undefined
  type?:
    | 'NONE'
    | 'BODY'
    | 'CHART'
    | 'CLIP_ART'
    | 'CENTERED_TITLE'
    | 'DIAGRAM'
    | 'DATE_AND_TIME'
    | 'FOOTER'
    | 'HEADER'
    | 'MEDIA'
    | 'OBJECT'
    | 'PICTURE'
    | 'SLIDE_NUMBER'
    | 'SUBTITLE'
    | 'TABLE'
    | 'TITLE'
    | 'SLIDE_IMAGE'
    | undefined
}
type Image = {
  contentUrl?: string | undefined
  imageProperties?: ImageProperties | undefined
  placeholder?: Placeholder | undefined
  sourceUrl?: string | undefined
}
type LineConnection = {
  connectedObjectId?: string | undefined
  connectionSiteIndex?: number | undefined
}
type LineFill = { solidFill?: SolidFill | undefined }
type LineProperties = {
  dashStyle?:
    | 'DASH_STYLE_UNSPECIFIED'
    | 'SOLID'
    | 'DOT'
    | 'DASH'
    | 'DASH_DOT'
    | 'LONG_DASH'
    | 'LONG_DASH_DOT'
    | undefined
  endArrow?:
    | 'ARROW_STYLE_UNSPECIFIED'
    | 'NONE'
    | 'STEALTH_ARROW'
    | 'FILL_ARROW'
    | 'FILL_CIRCLE'
    | 'FILL_SQUARE'
    | 'FILL_DIAMOND'
    | 'OPEN_ARROW'
    | 'OPEN_CIRCLE'
    | 'OPEN_SQUARE'
    | 'OPEN_DIAMOND'
    | undefined
  endConnection?: LineConnection | undefined
  lineFill?: LineFill | undefined
  link?: Link | undefined
  startArrow?:
    | 'ARROW_STYLE_UNSPECIFIED'
    | 'NONE'
    | 'STEALTH_ARROW'
    | 'FILL_ARROW'
    | 'FILL_CIRCLE'
    | 'FILL_SQUARE'
    | 'FILL_DIAMOND'
    | 'OPEN_ARROW'
    | 'OPEN_CIRCLE'
    | 'OPEN_SQUARE'
    | 'OPEN_DIAMOND'
    | undefined
  startConnection?: LineConnection | undefined
  weight?: Dimension | undefined
}
type Line = {
  lineCategory?: 'LINE_CATEGORY_UNSPECIFIED' | 'STRAIGHT' | 'BENT' | 'CURVED' | undefined
  lineProperties?: LineProperties | undefined
  lineType?:
    | 'TYPE_UNSPECIFIED'
    | 'STRAIGHT_CONNECTOR_1'
    | 'BENT_CONNECTOR_2'
    | 'BENT_CONNECTOR_3'
    | 'BENT_CONNECTOR_4'
    | 'BENT_CONNECTOR_5'
    | 'CURVED_CONNECTOR_2'
    | 'CURVED_CONNECTOR_3'
    | 'CURVED_CONNECTOR_4'
    | 'CURVED_CONNECTOR_5'
    | 'STRAIGHT_LINE'
    | undefined
}
type Autofit = {
  autofitType?: 'AUTOFIT_TYPE_UNSPECIFIED' | 'NONE' | 'TEXT_AUTOFIT' | 'SHAPE_AUTOFIT' | undefined
  fontScale?: number | undefined
  lineSpacingReduction?: number | undefined
}
type ShapeBackgroundFill = {
  propertyState?: 'RENDERED' | 'NOT_RENDERED' | 'INHERIT' | undefined
  solidFill?: SolidFill | undefined
}
type ShapeProperties = {
  autofit?: Autofit | undefined
  contentAlignment?:
    | 'CONTENT_ALIGNMENT_UNSPECIFIED'
    | 'CONTENT_ALIGNMENT_UNSUPPORTED'
    | 'TOP'
    | 'MIDDLE'
    | 'BOTTOM'
    | undefined
  link?: Link | undefined
  outline?: Outline | undefined
  shadow?: Shadow | undefined
  shapeBackgroundFill?: ShapeBackgroundFill | undefined
}
type OptionalColor = { opaqueColor?: OpaqueColor | undefined }
type WeightedFontFamily = { fontFamily?: string | undefined; weight?: number | undefined }
type TextStyle = {
  backgroundColor?: OptionalColor | undefined
  baselineOffset?: 'BASELINE_OFFSET_UNSPECIFIED' | 'NONE' | 'SUPERSCRIPT' | 'SUBSCRIPT' | undefined
  bold?: boolean | undefined
  fontFamily?: string | undefined
  fontSize?: Dimension | undefined
  foregroundColor?: OptionalColor | undefined
  italic?: boolean | undefined
  link?: Link | undefined
  smallCaps?: boolean | undefined
  strikethrough?: boolean | undefined
  underline?: boolean | undefined
  weightedFontFamily?: WeightedFontFamily | undefined
}
type NestingLevel = { bulletStyle?: TextStyle | undefined }
type List = {
  listId?: string | undefined
  nestingLevel?: { [x: string]: NestingLevel } | undefined
}
type AutoText = {
  content?: string | undefined
  style?: TextStyle | undefined
  type?: 'TYPE_UNSPECIFIED' | 'SLIDE_NUMBER' | undefined
}
type Bullet = {
  bulletStyle?: TextStyle | undefined
  glyph?: string | undefined
  listId?: string | undefined
  nestingLevel?: number | undefined
}
type ParagraphStyle = {
  alignment?: 'ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END' | 'JUSTIFIED' | undefined
  direction?: 'TEXT_DIRECTION_UNSPECIFIED' | 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT' | undefined
  indentEnd?: Dimension | undefined
  indentFirstLine?: Dimension | undefined
  indentStart?: Dimension | undefined
  lineSpacing?: number | undefined
  spaceAbove?: Dimension | undefined
  spaceBelow?: Dimension | undefined
  spacingMode?: 'SPACING_MODE_UNSPECIFIED' | 'NEVER_COLLAPSE' | 'COLLAPSE_LISTS' | undefined
}
type ParagraphMarker = { bullet?: Bullet | undefined; style?: ParagraphStyle | undefined }
type TextRun = { content?: string | undefined; style?: TextStyle | undefined }
type TextElement = {
  autoText?: AutoText | undefined
  endIndex?: number | undefined
  paragraphMarker?: ParagraphMarker | undefined
  startIndex?: number | undefined
  textRun?: TextRun | undefined
}
type TextContent = {
  lists?: { [x: string]: List } | undefined
  textElements?: TextElement[] | undefined
}
type Shape = {
  placeholder?: Placeholder | undefined
  shapeProperties?: ShapeProperties | undefined
  shapeType?:
    | 'TYPE_UNSPECIFIED'
    | 'TEXT_BOX'
    | 'RECTANGLE'
    | 'ROUND_RECTANGLE'
    | 'ELLIPSE'
    | 'ARC'
    | 'BENT_ARROW'
    | 'BENT_UP_ARROW'
    | 'BEVEL'
    | 'BLOCK_ARC'
    | 'BRACE_PAIR'
    | 'BRACKET_PAIR'
    | 'CAN'
    | 'CHEVRON'
    | 'CHORD'
    | 'CLOUD'
    | 'CORNER'
    | 'CUBE'
    | 'CURVED_DOWN_ARROW'
    | 'CURVED_LEFT_ARROW'
    | 'CURVED_RIGHT_ARROW'
    | 'CURVED_UP_ARROW'
    | 'DECAGON'
    | 'DIAGONAL_STRIPE'
    | 'DIAMOND'
    | 'DODECAGON'
    | 'DONUT'
    | 'DOUBLE_WAVE'
    | 'DOWN_ARROW'
    | 'DOWN_ARROW_CALLOUT'
    | 'FOLDED_CORNER'
    | 'FRAME'
    | 'HALF_FRAME'
    | 'HEART'
    | 'HEPTAGON'
    | 'HEXAGON'
    | 'HOME_PLATE'
    | 'HORIZONTAL_SCROLL'
    | 'IRREGULAR_SEAL_1'
    | 'IRREGULAR_SEAL_2'
    | 'LEFT_ARROW'
    | 'LEFT_ARROW_CALLOUT'
    | 'LEFT_BRACE'
    | 'LEFT_BRACKET'
    | 'LEFT_RIGHT_ARROW'
    | 'LEFT_RIGHT_ARROW_CALLOUT'
    | 'LEFT_RIGHT_UP_ARROW'
    | 'LEFT_UP_ARROW'
    | 'LIGHTNING_BOLT'
    | 'MATH_DIVIDE'
    | 'MATH_EQUAL'
    | 'MATH_MINUS'
    | 'MATH_MULTIPLY'
    | 'MATH_NOT_EQUAL'
    | 'MATH_PLUS'
    | 'MOON'
    | 'NO_SMOKING'
    | 'NOTCHED_RIGHT_ARROW'
    | 'OCTAGON'
    | 'PARALLELOGRAM'
    | 'PENTAGON'
    | 'PIE'
    | 'PLAQUE'
    | 'PLUS'
    | 'QUAD_ARROW'
    | 'QUAD_ARROW_CALLOUT'
    | 'RIBBON'
    | 'RIBBON_2'
    | 'RIGHT_ARROW'
    | 'RIGHT_ARROW_CALLOUT'
    | 'RIGHT_BRACE'
    | 'RIGHT_BRACKET'
    | 'ROUND_1_RECTANGLE'
    | 'ROUND_2_DIAGONAL_RECTANGLE'
    | 'ROUND_2_SAME_RECTANGLE'
    | 'RIGHT_TRIANGLE'
    | 'SMILEY_FACE'
    | 'SNIP_1_RECTANGLE'
    | 'SNIP_2_DIAGONAL_RECTANGLE'
    | 'SNIP_2_SAME_RECTANGLE'
    | 'SNIP_ROUND_RECTANGLE'
    | 'STAR_10'
    | 'STAR_12'
    | 'STAR_16'
    | 'STAR_24'
    | 'STAR_32'
    | 'STAR_4'
    | 'STAR_5'
    | 'STAR_6'
    | 'STAR_7'
    | 'STAR_8'
    | 'STRIPED_RIGHT_ARROW'
    | 'SUN'
    | 'TRAPEZOID'
    | 'TRIANGLE'
    | 'UP_ARROW'
    | 'UP_ARROW_CALLOUT'
    | 'UP_DOWN_ARROW'
    | 'UTURN_ARROW'
    | 'VERTICAL_SCROLL'
    | 'WAVE'
    | 'WEDGE_ELLIPSE_CALLOUT'
    | 'WEDGE_RECTANGLE_CALLOUT'
    | 'WEDGE_ROUND_RECTANGLE_CALLOUT'
    | 'FLOW_CHART_ALTERNATE_PROCESS'
    | 'FLOW_CHART_COLLATE'
    | 'FLOW_CHART_CONNECTOR'
    | 'FLOW_CHART_DECISION'
    | 'FLOW_CHART_DELAY'
    | 'FLOW_CHART_DISPLAY'
    | 'FLOW_CHART_DOCUMENT'
    | 'FLOW_CHART_EXTRACT'
    | 'FLOW_CHART_INPUT_OUTPUT'
    | 'FLOW_CHART_INTERNAL_STORAGE'
    | 'FLOW_CHART_MAGNETIC_DISK'
    | 'FLOW_CHART_MAGNETIC_DRUM'
    | 'FLOW_CHART_MAGNETIC_TAPE'
    | 'FLOW_CHART_MANUAL_INPUT'
    | 'FLOW_CHART_MANUAL_OPERATION'
    | 'FLOW_CHART_MERGE'
    | 'FLOW_CHART_MULTIDOCUMENT'
    | 'FLOW_CHART_OFFLINE_STORAGE'
    | 'FLOW_CHART_OFFPAGE_CONNECTOR'
    | 'FLOW_CHART_ONLINE_STORAGE'
    | 'FLOW_CHART_OR'
    | 'FLOW_CHART_PREDEFINED_PROCESS'
    | 'FLOW_CHART_PREPARATION'
    | 'FLOW_CHART_PROCESS'
    | 'FLOW_CHART_PUNCHED_CARD'
    | 'FLOW_CHART_PUNCHED_TAPE'
    | 'FLOW_CHART_SORT'
    | 'FLOW_CHART_SUMMING_JUNCTION'
    | 'FLOW_CHART_TERMINATOR'
    | 'ARROW_EAST'
    | 'ARROW_NORTH_EAST'
    | 'ARROW_NORTH'
    | 'SPEECH'
    | 'STARBURST'
    | 'TEARDROP'
    | 'ELLIPSE_RIBBON'
    | 'ELLIPSE_RIBBON_2'
    | 'CLOUD_CALLOUT'
    | 'CUSTOM'
    | undefined
  text?: TextContent | undefined
}
type SheetsChartProperties = { chartImageProperties?: ImageProperties | undefined }
type SheetsChart = {
  chartId?: number | undefined
  contentUrl?: string | undefined
  sheetsChartProperties?: SheetsChartProperties | undefined
  spreadsheetId?: string | undefined
}
type Size = { height?: Dimension | undefined; width?: Dimension | undefined }
type TableCellLocation = { columnIndex?: number | undefined; rowIndex?: number | undefined }
type TableBorderFill = { solidFill?: SolidFill | undefined }
type TableBorderProperties = {
  dashStyle?:
    | 'DASH_STYLE_UNSPECIFIED'
    | 'SOLID'
    | 'DOT'
    | 'DASH'
    | 'DASH_DOT'
    | 'LONG_DASH'
    | 'LONG_DASH_DOT'
    | undefined
  tableBorderFill?: TableBorderFill | undefined
  weight?: Dimension | undefined
}
type TableBorderCell = {
  location?: TableCellLocation | undefined
  tableBorderProperties?: TableBorderProperties | undefined
}
type TableBorderRow = { tableBorderCells?: TableBorderCell[] | undefined }
type TableColumnProperties = { columnWidth?: Dimension | undefined }
type TableCellBackgroundFill = {
  propertyState?: 'RENDERED' | 'NOT_RENDERED' | 'INHERIT' | undefined
  solidFill?: SolidFill | undefined
}
type TableCellProperties = {
  contentAlignment?:
    | 'CONTENT_ALIGNMENT_UNSPECIFIED'
    | 'CONTENT_ALIGNMENT_UNSUPPORTED'
    | 'TOP'
    | 'MIDDLE'
    | 'BOTTOM'
    | undefined
  tableCellBackgroundFill?: TableCellBackgroundFill | undefined
}
type TableCell = {
  columnSpan?: number | undefined
  location?: TableCellLocation | undefined
  rowSpan?: number | undefined
  tableCellProperties?: TableCellProperties | undefined
  text?: TextContent | undefined
}
type TableRowProperties = { minRowHeight?: Dimension | undefined }
type TableRow = {
  rowHeight?: Dimension | undefined
  tableCells?: TableCell[] | undefined
  tableRowProperties?: TableRowProperties | undefined
}
type Table = {
  columns?: number | undefined
  horizontalBorderRows?: TableBorderRow[] | undefined
  rows?: number | undefined
  tableColumns?: TableColumnProperties[] | undefined
  tableRows?: TableRow[] | undefined
  verticalBorderRows?: TableBorderRow[] | undefined
}
type VideoProperties = {
  autoPlay?: boolean | undefined
  end?: number | undefined
  mute?: boolean | undefined
  outline?: Outline | undefined
  start?: number | undefined
}
type Video = {
  id?: string | undefined
  source?: 'SOURCE_UNSPECIFIED' | 'YOUTUBE' | 'DRIVE' | undefined
  url?: string | undefined
  videoProperties?: VideoProperties | undefined
}
type WordArt = { renderedText?: string | undefined }
type PageElement = {
  description?: string | undefined
  elementGroup?: Group | undefined
  image?: Image | undefined
  line?: Line | undefined
  objectId?: string | undefined
  shape?: Shape | undefined
  sheetsChart?: SheetsChart | undefined
  size?: Size | undefined
  table?: Table | undefined
  title?: string | undefined
  transform?: AffineTransform | undefined
  video?: Video | undefined
  wordArt?: WordArt | undefined
}
type ThemeColorPair = {
  color?: RgbColor | undefined
  type?:
    | 'THEME_COLOR_TYPE_UNSPECIFIED'
    | 'DARK1'
    | 'LIGHT1'
    | 'DARK2'
    | 'LIGHT2'
    | 'ACCENT1'
    | 'ACCENT2'
    | 'ACCENT3'
    | 'ACCENT4'
    | 'ACCENT5'
    | 'ACCENT6'
    | 'HYPERLINK'
    | 'FOLLOWED_HYPERLINK'
    | 'TEXT1'
    | 'BACKGROUND1'
    | 'TEXT2'
    | 'BACKGROUND2'
    | undefined
}
type ColorScheme = { colors?: ThemeColorPair[] | undefined }
type StretchedPictureFill = { contentUrl?: string | undefined; size?: Size | undefined }
type PageBackgroundFill = {
  propertyState?: 'RENDERED' | 'NOT_RENDERED' | 'INHERIT' | undefined
  solidFill?: SolidFill | undefined
  stretchedPictureFill?: StretchedPictureFill | undefined
}
type PageProperties = {
  colorScheme?: ColorScheme | undefined
  pageBackgroundFill?: PageBackgroundFill | undefined
}
type SlideProperties = {
  isSkipped?: boolean | undefined
  layoutObjectId?: string | undefined
  masterObjectId?: string | undefined
  notesPage?: Page | undefined
}
type Page = {
  layoutProperties?: LayoutProperties | undefined
  masterProperties?: MasterProperties | undefined
  notesProperties?: NotesProperties | undefined
  objectId?: string | undefined
  pageElements?: PageElement[] | undefined
  pageProperties?: PageProperties | undefined
  pageType?: 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER' | undefined
  revisionId?: string | undefined
  slideProperties?: SlideProperties | undefined
}
type Presentation = {
  layouts?: Page[] | undefined
  locale?: string | undefined
  masters?: Page[] | undefined
  notesMaster?: Page | undefined
  pageSize?: Size | undefined
  presentationId?: string | undefined
  revisionId?: string | undefined
  slides?: Page[] | undefined
  title?: string | undefined
}
type Thumbnail = {
  contentUrl?: string | undefined
  height?: number | undefined
  width?: number | undefined
}
type PageElementProperties = {
  pageObjectId?: string | undefined
  size?: Size | undefined
  transform?: AffineTransform | undefined
}
type CreateImageRequest = {
  elementProperties?: PageElementProperties | undefined
  objectId?: string | undefined
  url?: string | undefined
}
type CreateLineRequest = {
  category?: 'LINE_CATEGORY_UNSPECIFIED' | 'STRAIGHT' | 'BENT' | 'CURVED' | undefined
  elementProperties?: PageElementProperties | undefined
  lineCategory?: 'STRAIGHT' | 'BENT' | 'CURVED' | undefined
  objectId?: string | undefined
}
type Range = {
  endIndex?: number | undefined
  startIndex?: number | undefined
  type?: 'RANGE_TYPE_UNSPECIFIED' | 'FIXED_RANGE' | 'FROM_START_INDEX' | 'ALL' | undefined
}
type CreateParagraphBulletsRequest = {
  bulletPreset?:
    | 'BULLET_DISC_CIRCLE_SQUARE'
    | 'BULLET_DIAMONDX_ARROW3D_SQUARE'
    | 'BULLET_CHECKBOX'
    | 'BULLET_ARROW_DIAMOND_DISC'
    | 'BULLET_STAR_CIRCLE_SQUARE'
    | 'BULLET_ARROW3D_CIRCLE_SQUARE'
    | 'BULLET_LEFTTRIANGLE_DIAMOND_DISC'
    | 'BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE'
    | 'BULLET_DIAMOND_CIRCLE_SQUARE'
    | 'NUMBERED_DIGIT_ALPHA_ROMAN'
    | 'NUMBERED_DIGIT_ALPHA_ROMAN_PARENS'
    | 'NUMBERED_DIGIT_NESTED'
    | 'NUMBERED_UPPERALPHA_ALPHA_ROMAN'
    | 'NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT'
    | 'NUMBERED_ZERODIGIT_ALPHA_ROMAN'
    | undefined
  cellLocation?: TableCellLocation | undefined
  objectId?: string | undefined
  textRange?: Range | undefined
}
type CreateShapeRequest = {
  elementProperties?: PageElementProperties | undefined
  objectId?: string | undefined
  shapeType?:
    | 'TYPE_UNSPECIFIED'
    | 'TEXT_BOX'
    | 'RECTANGLE'
    | 'ROUND_RECTANGLE'
    | 'ELLIPSE'
    | 'ARC'
    | 'BENT_ARROW'
    | 'BENT_UP_ARROW'
    | 'BEVEL'
    | 'BLOCK_ARC'
    | 'BRACE_PAIR'
    | 'BRACKET_PAIR'
    | 'CAN'
    | 'CHEVRON'
    | 'CHORD'
    | 'CLOUD'
    | 'CORNER'
    | 'CUBE'
    | 'CURVED_DOWN_ARROW'
    | 'CURVED_LEFT_ARROW'
    | 'CURVED_RIGHT_ARROW'
    | 'CURVED_UP_ARROW'
    | 'DECAGON'
    | 'DIAGONAL_STRIPE'
    | 'DIAMOND'
    | 'DODECAGON'
    | 'DONUT'
    | 'DOUBLE_WAVE'
    | 'DOWN_ARROW'
    | 'DOWN_ARROW_CALLOUT'
    | 'FOLDED_CORNER'
    | 'FRAME'
    | 'HALF_FRAME'
    | 'HEART'
    | 'HEPTAGON'
    | 'HEXAGON'
    | 'HOME_PLATE'
    | 'HORIZONTAL_SCROLL'
    | 'IRREGULAR_SEAL_1'
    | 'IRREGULAR_SEAL_2'
    | 'LEFT_ARROW'
    | 'LEFT_ARROW_CALLOUT'
    | 'LEFT_BRACE'
    | 'LEFT_BRACKET'
    | 'LEFT_RIGHT_ARROW'
    | 'LEFT_RIGHT_ARROW_CALLOUT'
    | 'LEFT_RIGHT_UP_ARROW'
    | 'LEFT_UP_ARROW'
    | 'LIGHTNING_BOLT'
    | 'MATH_DIVIDE'
    | 'MATH_EQUAL'
    | 'MATH_MINUS'
    | 'MATH_MULTIPLY'
    | 'MATH_NOT_EQUAL'
    | 'MATH_PLUS'
    | 'MOON'
    | 'NO_SMOKING'
    | 'NOTCHED_RIGHT_ARROW'
    | 'OCTAGON'
    | 'PARALLELOGRAM'
    | 'PENTAGON'
    | 'PIE'
    | 'PLAQUE'
    | 'PLUS'
    | 'QUAD_ARROW'
    | 'QUAD_ARROW_CALLOUT'
    | 'RIBBON'
    | 'RIBBON_2'
    | 'RIGHT_ARROW'
    | 'RIGHT_ARROW_CALLOUT'
    | 'RIGHT_BRACE'
    | 'RIGHT_BRACKET'
    | 'ROUND_1_RECTANGLE'
    | 'ROUND_2_DIAGONAL_RECTANGLE'
    | 'ROUND_2_SAME_RECTANGLE'
    | 'RIGHT_TRIANGLE'
    | 'SMILEY_FACE'
    | 'SNIP_1_RECTANGLE'
    | 'SNIP_2_DIAGONAL_RECTANGLE'
    | 'SNIP_2_SAME_RECTANGLE'
    | 'SNIP_ROUND_RECTANGLE'
    | 'STAR_10'
    | 'STAR_12'
    | 'STAR_16'
    | 'STAR_24'
    | 'STAR_32'
    | 'STAR_4'
    | 'STAR_5'
    | 'STAR_6'
    | 'STAR_7'
    | 'STAR_8'
    | 'STRIPED_RIGHT_ARROW'
    | 'SUN'
    | 'TRAPEZOID'
    | 'TRIANGLE'
    | 'UP_ARROW'
    | 'UP_ARROW_CALLOUT'
    | 'UP_DOWN_ARROW'
    | 'UTURN_ARROW'
    | 'VERTICAL_SCROLL'
    | 'WAVE'
    | 'WEDGE_ELLIPSE_CALLOUT'
    | 'WEDGE_RECTANGLE_CALLOUT'
    | 'WEDGE_ROUND_RECTANGLE_CALLOUT'
    | 'FLOW_CHART_ALTERNATE_PROCESS'
    | 'FLOW_CHART_COLLATE'
    | 'FLOW_CHART_CONNECTOR'
    | 'FLOW_CHART_DECISION'
    | 'FLOW_CHART_DELAY'
    | 'FLOW_CHART_DISPLAY'
    | 'FLOW_CHART_DOCUMENT'
    | 'FLOW_CHART_EXTRACT'
    | 'FLOW_CHART_INPUT_OUTPUT'
    | 'FLOW_CHART_INTERNAL_STORAGE'
    | 'FLOW_CHART_MAGNETIC_DISK'
    | 'FLOW_CHART_MAGNETIC_DRUM'
    | 'FLOW_CHART_MAGNETIC_TAPE'
    | 'FLOW_CHART_MANUAL_INPUT'
    | 'FLOW_CHART_MANUAL_OPERATION'
    | 'FLOW_CHART_MERGE'
    | 'FLOW_CHART_MULTIDOCUMENT'
    | 'FLOW_CHART_OFFLINE_STORAGE'
    | 'FLOW_CHART_OFFPAGE_CONNECTOR'
    | 'FLOW_CHART_ONLINE_STORAGE'
    | 'FLOW_CHART_OR'
    | 'FLOW_CHART_PREDEFINED_PROCESS'
    | 'FLOW_CHART_PREPARATION'
    | 'FLOW_CHART_PROCESS'
    | 'FLOW_CHART_PUNCHED_CARD'
    | 'FLOW_CHART_PUNCHED_TAPE'
    | 'FLOW_CHART_SORT'
    | 'FLOW_CHART_SUMMING_JUNCTION'
    | 'FLOW_CHART_TERMINATOR'
    | 'ARROW_EAST'
    | 'ARROW_NORTH_EAST'
    | 'ARROW_NORTH'
    | 'SPEECH'
    | 'STARBURST'
    | 'TEARDROP'
    | 'ELLIPSE_RIBBON'
    | 'ELLIPSE_RIBBON_2'
    | 'CLOUD_CALLOUT'
    | 'CUSTOM'
    | undefined
}
type CreateSheetsChartRequest = {
  chartId?: number | undefined
  elementProperties?: PageElementProperties | undefined
  linkingMode?: 'NOT_LINKED_IMAGE' | 'LINKED' | undefined
  objectId?: string | undefined
  spreadsheetId?: string | undefined
}
type LayoutPlaceholderIdMapping = {
  layoutPlaceholder?: Placeholder | undefined
  layoutPlaceholderObjectId?: string | undefined
  objectId?: string | undefined
}
type LayoutReference = {
  layoutId?: string | undefined
  predefinedLayout?:
    | 'PREDEFINED_LAYOUT_UNSPECIFIED'
    | 'BLANK'
    | 'CAPTION_ONLY'
    | 'TITLE'
    | 'TITLE_AND_BODY'
    | 'TITLE_AND_TWO_COLUMNS'
    | 'TITLE_ONLY'
    | 'SECTION_HEADER'
    | 'SECTION_TITLE_AND_DESCRIPTION'
    | 'ONE_COLUMN_TEXT'
    | 'MAIN_POINT'
    | 'BIG_NUMBER'
    | undefined
}
type CreateSlideRequest = {
  insertionIndex?: number | undefined
  objectId?: string | undefined
  placeholderIdMappings?: LayoutPlaceholderIdMapping[] | undefined
  slideLayoutReference?: LayoutReference | undefined
}
type CreateTableRequest = {
  columns?: number | undefined
  elementProperties?: PageElementProperties | undefined
  objectId?: string | undefined
  rows?: number | undefined
}
type CreateVideoRequest = {
  elementProperties?: PageElementProperties | undefined
  id?: string | undefined
  objectId?: string | undefined
  source?: 'SOURCE_UNSPECIFIED' | 'YOUTUBE' | 'DRIVE' | undefined
}
type DeleteObjectRequest = { objectId?: string | undefined }
type DeleteParagraphBulletsRequest = {
  cellLocation?: TableCellLocation | undefined
  objectId?: string | undefined
  textRange?: Range | undefined
}
type DeleteTableColumnRequest = {
  cellLocation?: TableCellLocation | undefined
  tableObjectId?: string | undefined
}
type DeleteTableRowRequest = {
  cellLocation?: TableCellLocation | undefined
  tableObjectId?: string | undefined
}
type DeleteTextRequest = {
  cellLocation?: TableCellLocation | undefined
  objectId?: string | undefined
  textRange?: Range | undefined
}
type DuplicateObjectRequest = {
  objectId?: string | undefined
  objectIds?: { [x: string]: string } | undefined
}
type GroupObjectsRequest = {
  childrenObjectIds?: string[] | undefined
  groupObjectId?: string | undefined
}
type InsertTableColumnsRequest = {
  cellLocation?: TableCellLocation | undefined
  insertRight?: boolean | undefined
  number?: number | undefined
  tableObjectId?: string | undefined
}
type InsertTableRowsRequest = {
  cellLocation?: TableCellLocation | undefined
  insertBelow?: boolean | undefined
  number?: number | undefined
  tableObjectId?: string | undefined
}
type InsertTextRequest = {
  cellLocation?: TableCellLocation | undefined
  insertionIndex?: number | undefined
  objectId?: string | undefined
  text?: string | undefined
}
type TableRange = {
  columnSpan?: number | undefined
  location?: TableCellLocation | undefined
  rowSpan?: number | undefined
}
type MergeTableCellsRequest = { objectId?: string | undefined; tableRange?: TableRange | undefined }
type RefreshSheetsChartRequest = { objectId?: string | undefined }
type SubstringMatchCriteria = { matchCase?: boolean | undefined; text?: string | undefined }
type ReplaceAllShapesWithImageRequest = {
  containsText?: SubstringMatchCriteria | undefined
  imageReplaceMethod?:
    | 'IMAGE_REPLACE_METHOD_UNSPECIFIED'
    | 'CENTER_INSIDE'
    | 'CENTER_CROP'
    | undefined
  imageUrl?: string | undefined
  pageObjectIds?: string[] | undefined
  replaceMethod?: 'CENTER_INSIDE' | 'CENTER_CROP' | undefined
}
type ReplaceAllShapesWithSheetsChartRequest = {
  chartId?: number | undefined
  containsText?: SubstringMatchCriteria | undefined
  linkingMode?: 'NOT_LINKED_IMAGE' | 'LINKED' | undefined
  pageObjectIds?: string[] | undefined
  spreadsheetId?: string | undefined
}
type ReplaceAllTextRequest = {
  containsText?: SubstringMatchCriteria | undefined
  pageObjectIds?: string[] | undefined
  replaceText?: string | undefined
}
type ReplaceImageRequest = {
  imageObjectId?: string | undefined
  imageReplaceMethod?:
    | 'IMAGE_REPLACE_METHOD_UNSPECIFIED'
    | 'CENTER_INSIDE'
    | 'CENTER_CROP'
    | undefined
  url?: string | undefined
}
type RerouteLineRequest = { objectId?: string | undefined }
type UngroupObjectsRequest = { objectIds?: string[] | undefined }
type UnmergeTableCellsRequest = {
  objectId?: string | undefined
  tableRange?: TableRange | undefined
}
type UpdateImagePropertiesRequest = {
  fields?: string | undefined
  imageProperties?: ImageProperties | undefined
  objectId?: string | undefined
}
type UpdateLineCategoryRequest = {
  lineCategory?: 'LINE_CATEGORY_UNSPECIFIED' | 'STRAIGHT' | 'BENT' | 'CURVED' | undefined
  objectId?: string | undefined
}
type UpdateLinePropertiesRequest = {
  fields?: string | undefined
  lineProperties?: LineProperties | undefined
  objectId?: string | undefined
}
type UpdatePageElementAltTextRequest = {
  description?: string | undefined
  objectId?: string | undefined
  title?: string | undefined
}
type UpdatePageElementTransformRequest = {
  applyMode?: 'APPLY_MODE_UNSPECIFIED' | 'RELATIVE' | 'ABSOLUTE' | undefined
  objectId?: string | undefined
  transform?: AffineTransform | undefined
}
type UpdatePageElementsZOrderRequest = {
  operation?:
    | 'Z_ORDER_OPERATION_UNSPECIFIED'
    | 'BRING_TO_FRONT'
    | 'BRING_FORWARD'
    | 'SEND_BACKWARD'
    | 'SEND_TO_BACK'
    | undefined
  pageElementObjectIds?: string[] | undefined
}
type UpdatePagePropertiesRequest = {
  fields?: string | undefined
  objectId?: string | undefined
  pageProperties?: PageProperties | undefined
}
type UpdateParagraphStyleRequest = {
  cellLocation?: TableCellLocation | undefined
  fields?: string | undefined
  objectId?: string | undefined
  style?: ParagraphStyle | undefined
  textRange?: Range | undefined
}
type UpdateShapePropertiesRequest = {
  fields?: string | undefined
  objectId?: string | undefined
  shapeProperties?: ShapeProperties | undefined
}
type UpdateSlidePropertiesRequest = {
  fields?: string | undefined
  objectId?: string | undefined
  slideProperties?: SlideProperties | undefined
}
type UpdateSlidesPositionRequest = {
  insertionIndex?: number | undefined
  slideObjectIds?: string[] | undefined
}
type UpdateTableBorderPropertiesRequest = {
  borderPosition?:
    | 'ALL'
    | 'BOTTOM'
    | 'INNER'
    | 'INNER_HORIZONTAL'
    | 'INNER_VERTICAL'
    | 'LEFT'
    | 'OUTER'
    | 'RIGHT'
    | 'TOP'
    | undefined
  fields?: string | undefined
  objectId?: string | undefined
  tableBorderProperties?: TableBorderProperties | undefined
  tableRange?: TableRange | undefined
}
type UpdateTableCellPropertiesRequest = {
  fields?: string | undefined
  objectId?: string | undefined
  tableCellProperties?: TableCellProperties | undefined
  tableRange?: TableRange | undefined
}
type UpdateTableColumnPropertiesRequest = {
  columnIndices?: number[] | undefined
  fields?: string | undefined
  objectId?: string | undefined
  tableColumnProperties?: TableColumnProperties | undefined
}
type UpdateTableRowPropertiesRequest = {
  fields?: string | undefined
  objectId?: string | undefined
  rowIndices?: number[] | undefined
  tableRowProperties?: TableRowProperties | undefined
}
type UpdateTextStyleRequest = {
  cellLocation?: TableCellLocation | undefined
  fields?: string | undefined
  objectId?: string | undefined
  style?: TextStyle | undefined
  textRange?: Range | undefined
}
type UpdateVideoPropertiesRequest = {
  fields?: string | undefined
  objectId?: string | undefined
  videoProperties?: VideoProperties | undefined
}
type Request = {
  createImage?: CreateImageRequest | undefined
  createLine?: CreateLineRequest | undefined
  createParagraphBullets?: CreateParagraphBulletsRequest | undefined
  createShape?: CreateShapeRequest | undefined
  createSheetsChart?: CreateSheetsChartRequest | undefined
  createSlide?: CreateSlideRequest | undefined
  createTable?: CreateTableRequest | undefined
  createVideo?: CreateVideoRequest | undefined
  deleteObject?: DeleteObjectRequest | undefined
  deleteParagraphBullets?: DeleteParagraphBulletsRequest | undefined
  deleteTableColumn?: DeleteTableColumnRequest | undefined
  deleteTableRow?: DeleteTableRowRequest | undefined
  deleteText?: DeleteTextRequest | undefined
  duplicateObject?: DuplicateObjectRequest | undefined
  groupObjects?: GroupObjectsRequest | undefined
  insertTableColumns?: InsertTableColumnsRequest | undefined
  insertTableRows?: InsertTableRowsRequest | undefined
  insertText?: InsertTextRequest | undefined
  mergeTableCells?: MergeTableCellsRequest | undefined
  refreshSheetsChart?: RefreshSheetsChartRequest | undefined
  replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest | undefined
  replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest | undefined
  replaceAllText?: ReplaceAllTextRequest | undefined
  replaceImage?: ReplaceImageRequest | undefined
  rerouteLine?: RerouteLineRequest | undefined
  ungroupObjects?: UngroupObjectsRequest | undefined
  unmergeTableCells?: UnmergeTableCellsRequest | undefined
  updateImageProperties?: UpdateImagePropertiesRequest | undefined
  updateLineCategory?: UpdateLineCategoryRequest | undefined
  updateLineProperties?: UpdateLinePropertiesRequest | undefined
  updatePageElementAltText?: UpdatePageElementAltTextRequest | undefined
  updatePageElementTransform?: UpdatePageElementTransformRequest | undefined
  updatePageElementsZOrder?: UpdatePageElementsZOrderRequest | undefined
  updatePageProperties?: UpdatePagePropertiesRequest | undefined
  updateParagraphStyle?: UpdateParagraphStyleRequest | undefined
  updateShapeProperties?: UpdateShapePropertiesRequest | undefined
  updateSlideProperties?: UpdateSlidePropertiesRequest | undefined
  updateSlidesPosition?: UpdateSlidesPositionRequest | undefined
  updateTableBorderProperties?: UpdateTableBorderPropertiesRequest | undefined
  updateTableCellProperties?: UpdateTableCellPropertiesRequest | undefined
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest | undefined
  updateTableRowProperties?: UpdateTableRowPropertiesRequest | undefined
  updateTextStyle?: UpdateTextStyleRequest | undefined
  updateVideoProperties?: UpdateVideoPropertiesRequest | undefined
}
type WriteControl = { requiredRevisionId?: string | undefined }
type BatchUpdatePresentationRequest = {
  requests?: Request[] | undefined
  writeControl?: WriteControl | undefined
}
type CreateImageResponse = { objectId?: string | undefined }
type CreateLineResponse = { objectId?: string | undefined }
type CreateShapeResponse = { objectId?: string | undefined }
type CreateSheetsChartResponse = { objectId?: string | undefined }
type CreateSlideResponse = { objectId?: string | undefined }
type CreateTableResponse = { objectId?: string | undefined }
type CreateVideoResponse = { objectId?: string | undefined }
type DuplicateObjectResponse = { objectId?: string | undefined }
type GroupObjectsResponse = { objectId?: string | undefined }
type ReplaceAllShapesWithImageResponse = { occurrencesChanged?: number | undefined }
type ReplaceAllShapesWithSheetsChartResponse = { occurrencesChanged?: number | undefined }
type ReplaceAllTextResponse = { occurrencesChanged?: number | undefined }
type Response = {
  createImage?: CreateImageResponse | undefined
  createLine?: CreateLineResponse | undefined
  createShape?: CreateShapeResponse | undefined
  createSheetsChart?: CreateSheetsChartResponse | undefined
  createSlide?: CreateSlideResponse | undefined
  createTable?: CreateTableResponse | undefined
  createVideo?: CreateVideoResponse | undefined
  duplicateObject?: DuplicateObjectResponse | undefined
  groupObjects?: GroupObjectsResponse | undefined
  replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse | undefined
  replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse | undefined
  replaceAllText?: ReplaceAllTextResponse | undefined
}
type BatchUpdatePresentationResponse = {
  presentationId?: string | undefined
  replies?: Response[] | undefined
  writeControl?: WriteControl | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/presentations': {
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
        } & { json: Presentation }
        output: Presentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/presentations/:presentationId': {
      $get: {
        input: { param: { presentationId: string } } & {
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
        output: Presentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/presentations/:presentationId/pages/:pageObjectId': {
      $get: {
        input: { param: { presentationId: string; pageObjectId: string } } & {
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
        output: Page
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/presentations/:presentationId/pages/:pageObjectId/thumbnail': {
      $get: {
        input: { param: { presentationId: string; pageObjectId: string } } & {
          query: {
            'thumbnailProperties.mimeType'?: 'PNG' | undefined
            'thumbnailProperties.thumbnailSize'?:
              | 'THUMBNAIL_SIZE_UNSPECIFIED'
              | 'LARGE'
              | 'MEDIUM'
              | 'SMALL'
              | undefined
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
        output: Thumbnail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/presentations/:presentationId:batchUpdate': {
      $post: {
        input: { param: { presentationId: string } } & {
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
        } & { json: BatchUpdatePresentationRequest }
        output: BatchUpdatePresentationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
