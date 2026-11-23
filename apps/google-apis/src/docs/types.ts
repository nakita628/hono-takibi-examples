type RgbColor = { blue?: number | undefined; green?: number | undefined; red?: number | undefined }
type Color = { rgbColor?: RgbColor | undefined }
type OptionalColor = { color?: Color | undefined }
type Dimension = { magnitude?: number | undefined; unit?: 'UNIT_UNSPECIFIED' | 'PT' | undefined }
type Link = {
  bookmarkId?: string | undefined
  headingId?: string | undefined
  url?: string | undefined
}
type WeightedFontFamily = { fontFamily?: string | undefined; weight?: number | undefined }
type TextStyle = {
  backgroundColor?: OptionalColor | undefined
  baselineOffset?: 'BASELINE_OFFSET_UNSPECIFIED' | 'NONE' | 'SUPERSCRIPT' | 'SUBSCRIPT' | undefined
  bold?: boolean | undefined
  fontSize?: Dimension | undefined
  foregroundColor?: OptionalColor | undefined
  italic?: boolean | undefined
  link?: Link | undefined
  smallCaps?: boolean | undefined
  strikethrough?: boolean | undefined
  underline?: boolean | undefined
  weightedFontFamily?: WeightedFontFamily | undefined
}
type Bullet = {
  listId?: string | undefined
  nestingLevel?: number | undefined
  textStyle?: TextStyle | undefined
}
type TextStyleSuggestionState = {
  backgroundColorSuggested?: boolean | undefined
  baselineOffsetSuggested?: boolean | undefined
  boldSuggested?: boolean | undefined
  fontSizeSuggested?: boolean | undefined
  foregroundColorSuggested?: boolean | undefined
  italicSuggested?: boolean | undefined
  linkSuggested?: boolean | undefined
  smallCapsSuggested?: boolean | undefined
  strikethroughSuggested?: boolean | undefined
  underlineSuggested?: boolean | undefined
  weightedFontFamilySuggested?: boolean | undefined
}
type SuggestedTextStyle = {
  textStyle?: TextStyle | undefined
  textStyleSuggestionState?: TextStyleSuggestionState | undefined
}
type AutoText = {
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
  type?: 'TYPE_UNSPECIFIED' | 'PAGE_NUMBER' | 'PAGE_COUNT' | undefined
}
type ColumnBreak = {
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type Equation = {
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
}
type FootnoteReference = {
  footnoteId?: string | undefined
  footnoteNumber?: string | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type HorizontalRule = {
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type InlineObjectElement = {
  inlineObjectId?: string | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type PageBreak = {
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type PersonProperties = { email?: string | undefined; name?: string | undefined }
type Person = {
  personId?: string | undefined
  personProperties?: PersonProperties | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type RichLinkProperties = {
  mimeType?: string | undefined
  title?: string | undefined
  uri?: string | undefined
}
type RichLink = {
  richLinkId?: string | undefined
  richLinkProperties?: RichLinkProperties | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type TextRun = {
  content?: string | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTextStyleChanges?: { [x: string]: SuggestedTextStyle } | undefined
  textStyle?: TextStyle | undefined
}
type ParagraphElement = {
  autoText?: AutoText | undefined
  columnBreak?: ColumnBreak | undefined
  endIndex?: number | undefined
  equation?: Equation | undefined
  footnoteReference?: FootnoteReference | undefined
  horizontalRule?: HorizontalRule | undefined
  inlineObjectElement?: InlineObjectElement | undefined
  pageBreak?: PageBreak | undefined
  person?: Person | undefined
  richLink?: RichLink | undefined
  startIndex?: number | undefined
  textRun?: TextRun | undefined
}
type ParagraphBorder = {
  color?: OptionalColor | undefined
  dashStyle?: 'DASH_STYLE_UNSPECIFIED' | 'SOLID' | 'DOT' | 'DASH' | undefined
  padding?: Dimension | undefined
  width?: Dimension | undefined
}
type Shading = { backgroundColor?: OptionalColor | undefined }
type TabStop = {
  alignment?: 'TAB_STOP_ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END' | undefined
  offset?: Dimension | undefined
}
type ParagraphStyle = {
  alignment?: 'ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END' | 'JUSTIFIED' | undefined
  avoidWidowAndOrphan?: boolean | undefined
  borderBetween?: ParagraphBorder | undefined
  borderBottom?: ParagraphBorder | undefined
  borderLeft?: ParagraphBorder | undefined
  borderRight?: ParagraphBorder | undefined
  borderTop?: ParagraphBorder | undefined
  direction?: 'CONTENT_DIRECTION_UNSPECIFIED' | 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT' | undefined
  headingId?: string | undefined
  indentEnd?: Dimension | undefined
  indentFirstLine?: Dimension | undefined
  indentStart?: Dimension | undefined
  keepLinesTogether?: boolean | undefined
  keepWithNext?: boolean | undefined
  lineSpacing?: number | undefined
  namedStyleType?:
    | 'NAMED_STYLE_TYPE_UNSPECIFIED'
    | 'NORMAL_TEXT'
    | 'TITLE'
    | 'SUBTITLE'
    | 'HEADING_1'
    | 'HEADING_2'
    | 'HEADING_3'
    | 'HEADING_4'
    | 'HEADING_5'
    | 'HEADING_6'
    | undefined
  pageBreakBefore?: boolean | undefined
  shading?: Shading | undefined
  spaceAbove?: Dimension | undefined
  spaceBelow?: Dimension | undefined
  spacingMode?: 'SPACING_MODE_UNSPECIFIED' | 'NEVER_COLLAPSE' | 'COLLAPSE_LISTS' | undefined
  tabStops?: TabStop[] | undefined
}
type BulletSuggestionState = {
  listIdSuggested?: boolean | undefined
  nestingLevelSuggested?: boolean | undefined
  textStyleSuggestionState?: TextStyleSuggestionState | undefined
}
type SuggestedBullet = {
  bullet?: Bullet | undefined
  bulletSuggestionState?: BulletSuggestionState | undefined
}
type ShadingSuggestionState = { backgroundColorSuggested?: boolean | undefined }
type ParagraphStyleSuggestionState = {
  alignmentSuggested?: boolean | undefined
  avoidWidowAndOrphanSuggested?: boolean | undefined
  borderBetweenSuggested?: boolean | undefined
  borderBottomSuggested?: boolean | undefined
  borderLeftSuggested?: boolean | undefined
  borderRightSuggested?: boolean | undefined
  borderTopSuggested?: boolean | undefined
  directionSuggested?: boolean | undefined
  headingIdSuggested?: boolean | undefined
  indentEndSuggested?: boolean | undefined
  indentFirstLineSuggested?: boolean | undefined
  indentStartSuggested?: boolean | undefined
  keepLinesTogetherSuggested?: boolean | undefined
  keepWithNextSuggested?: boolean | undefined
  lineSpacingSuggested?: boolean | undefined
  namedStyleTypeSuggested?: boolean | undefined
  pageBreakBeforeSuggested?: boolean | undefined
  shadingSuggestionState?: ShadingSuggestionState | undefined
  spaceAboveSuggested?: boolean | undefined
  spaceBelowSuggested?: boolean | undefined
  spacingModeSuggested?: boolean | undefined
}
type SuggestedParagraphStyle = {
  paragraphStyle?: ParagraphStyle | undefined
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState | undefined
}
type ObjectReferences = { objectIds?: string[] | undefined }
type Paragraph = {
  bullet?: Bullet | undefined
  elements?: ParagraphElement[] | undefined
  paragraphStyle?: ParagraphStyle | undefined
  positionedObjectIds?: string[] | undefined
  suggestedBulletChanges?: { [x: string]: SuggestedBullet } | undefined
  suggestedParagraphStyleChanges?: { [x: string]: SuggestedParagraphStyle } | undefined
  suggestedPositionedObjectIds?: { [x: string]: ObjectReferences } | undefined
}
type SectionColumnProperties = { paddingEnd?: Dimension | undefined; width?: Dimension | undefined }
type SectionStyle = {
  columnProperties?: SectionColumnProperties[] | undefined
  columnSeparatorStyle?:
    | 'COLUMN_SEPARATOR_STYLE_UNSPECIFIED'
    | 'NONE'
    | 'BETWEEN_EACH_COLUMN'
    | undefined
  contentDirection?: 'CONTENT_DIRECTION_UNSPECIFIED' | 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT' | undefined
  defaultFooterId?: string | undefined
  defaultHeaderId?: string | undefined
  evenPageFooterId?: string | undefined
  evenPageHeaderId?: string | undefined
  firstPageFooterId?: string | undefined
  firstPageHeaderId?: string | undefined
  flipPageOrientation?: boolean | undefined
  marginBottom?: Dimension | undefined
  marginFooter?: Dimension | undefined
  marginHeader?: Dimension | undefined
  marginLeft?: Dimension | undefined
  marginRight?: Dimension | undefined
  marginTop?: Dimension | undefined
  pageNumberStart?: number | undefined
  sectionType?: 'SECTION_TYPE_UNSPECIFIED' | 'CONTINUOUS' | 'NEXT_PAGE' | undefined
  useFirstPageHeaderFooter?: boolean | undefined
}
type SectionBreak = {
  sectionStyle?: SectionStyle | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
}
type TableRowStyle = {
  minRowHeight?: Dimension | undefined
  preventOverflow?: boolean | undefined
  tableHeader?: boolean | undefined
}
type TableRowStyleSuggestionState = { minRowHeightSuggested?: boolean | undefined }
type SuggestedTableRowStyle = {
  tableRowStyle?: TableRowStyle | undefined
  tableRowStyleSuggestionState?: TableRowStyleSuggestionState | undefined
}
type TableCellBorder = {
  color?: OptionalColor | undefined
  dashStyle?: 'DASH_STYLE_UNSPECIFIED' | 'SOLID' | 'DOT' | 'DASH' | undefined
  width?: Dimension | undefined
}
type TableCellStyle = {
  backgroundColor?: OptionalColor | undefined
  borderBottom?: TableCellBorder | undefined
  borderLeft?: TableCellBorder | undefined
  borderRight?: TableCellBorder | undefined
  borderTop?: TableCellBorder | undefined
  columnSpan?: number | undefined
  contentAlignment?:
    | 'CONTENT_ALIGNMENT_UNSPECIFIED'
    | 'CONTENT_ALIGNMENT_UNSUPPORTED'
    | 'TOP'
    | 'MIDDLE'
    | 'BOTTOM'
    | undefined
  paddingBottom?: Dimension | undefined
  paddingLeft?: Dimension | undefined
  paddingRight?: Dimension | undefined
  paddingTop?: Dimension | undefined
  rowSpan?: number | undefined
}
type TableCellStyleSuggestionState = {
  backgroundColorSuggested?: boolean | undefined
  borderBottomSuggested?: boolean | undefined
  borderLeftSuggested?: boolean | undefined
  borderRightSuggested?: boolean | undefined
  borderTopSuggested?: boolean | undefined
  columnSpanSuggested?: boolean | undefined
  contentAlignmentSuggested?: boolean | undefined
  paddingBottomSuggested?: boolean | undefined
  paddingLeftSuggested?: boolean | undefined
  paddingRightSuggested?: boolean | undefined
  paddingTopSuggested?: boolean | undefined
  rowSpanSuggested?: boolean | undefined
}
type SuggestedTableCellStyle = {
  tableCellStyle?: TableCellStyle | undefined
  tableCellStyleSuggestionState?: TableCellStyleSuggestionState | undefined
}
type TableCell = {
  content?: StructuralElement[] | undefined
  endIndex?: number | undefined
  startIndex?: number | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTableCellStyleChanges?: { [x: string]: SuggestedTableCellStyle } | undefined
  tableCellStyle?: TableCellStyle | undefined
}
type TableRow = {
  endIndex?: number | undefined
  startIndex?: number | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  suggestedTableRowStyleChanges?: { [x: string]: SuggestedTableRowStyle } | undefined
  tableCells?: TableCell[] | undefined
  tableRowStyle?: TableRowStyle | undefined
}
type TableColumnProperties = {
  width?: Dimension | undefined
  widthType?: 'WIDTH_TYPE_UNSPECIFIED' | 'EVENLY_DISTRIBUTED' | 'FIXED_WIDTH' | undefined
}
type TableStyle = { tableColumnProperties?: TableColumnProperties[] | undefined }
type Table = {
  columns?: number | undefined
  rows?: number | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
  tableRows?: TableRow[] | undefined
  tableStyle?: TableStyle | undefined
}
type TableOfContents = {
  content?: StructuralElement[] | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionIds?: string[] | undefined
}
type StructuralElement = {
  endIndex?: number | undefined
  paragraph?: Paragraph | undefined
  sectionBreak?: SectionBreak | undefined
  startIndex?: number | undefined
  table?: Table | undefined
  tableOfContents?: TableOfContents | undefined
}
type Body = { content?: StructuralElement[] | undefined }
type Background = { color?: OptionalColor | undefined }
type Size = { height?: Dimension | undefined; width?: Dimension | undefined }
type DocumentStyle = {
  background?: Background | undefined
  defaultFooterId?: string | undefined
  defaultHeaderId?: string | undefined
  evenPageFooterId?: string | undefined
  evenPageHeaderId?: string | undefined
  firstPageFooterId?: string | undefined
  firstPageHeaderId?: string | undefined
  flipPageOrientation?: boolean | undefined
  marginBottom?: Dimension | undefined
  marginFooter?: Dimension | undefined
  marginHeader?: Dimension | undefined
  marginLeft?: Dimension | undefined
  marginRight?: Dimension | undefined
  marginTop?: Dimension | undefined
  pageNumberStart?: number | undefined
  pageSize?: Size | undefined
  useCustomHeaderFooterMargins?: boolean | undefined
  useEvenPageHeaderFooter?: boolean | undefined
  useFirstPageHeaderFooter?: boolean | undefined
}
type Footer = { content?: StructuralElement[] | undefined; footerId?: string | undefined }
type Footnote = { content?: StructuralElement[] | undefined; footnoteId?: string | undefined }
type Header = { content?: StructuralElement[] | undefined; headerId?: string | undefined }
type EmbeddedDrawingProperties = { [x: string]: unknown }
type EmbeddedObjectBorder = {
  color?: OptionalColor | undefined
  dashStyle?: 'DASH_STYLE_UNSPECIFIED' | 'SOLID' | 'DOT' | 'DASH' | undefined
  propertyState?: 'RENDERED' | 'NOT_RENDERED' | undefined
  width?: Dimension | undefined
}
type CropProperties = {
  angle?: number | undefined
  offsetBottom?: number | undefined
  offsetLeft?: number | undefined
  offsetRight?: number | undefined
  offsetTop?: number | undefined
}
type ImageProperties = {
  angle?: number | undefined
  brightness?: number | undefined
  contentUri?: string | undefined
  contrast?: number | undefined
  cropProperties?: CropProperties | undefined
  sourceUri?: string | undefined
  transparency?: number | undefined
}
type SheetsChartReference = { chartId?: number | undefined; spreadsheetId?: string | undefined }
type LinkedContentReference = { sheetsChartReference?: SheetsChartReference | undefined }
type EmbeddedObject = {
  description?: string | undefined
  embeddedDrawingProperties?: EmbeddedDrawingProperties | undefined
  embeddedObjectBorder?: EmbeddedObjectBorder | undefined
  imageProperties?: ImageProperties | undefined
  linkedContentReference?: LinkedContentReference | undefined
  marginBottom?: Dimension | undefined
  marginLeft?: Dimension | undefined
  marginRight?: Dimension | undefined
  marginTop?: Dimension | undefined
  size?: Size | undefined
  title?: string | undefined
}
type InlineObjectProperties = { embeddedObject?: EmbeddedObject | undefined }
type EmbeddedDrawingPropertiesSuggestionState = { [x: string]: unknown }
type EmbeddedObjectBorderSuggestionState = {
  colorSuggested?: boolean | undefined
  dashStyleSuggested?: boolean | undefined
  propertyStateSuggested?: boolean | undefined
  widthSuggested?: boolean | undefined
}
type CropPropertiesSuggestionState = {
  angleSuggested?: boolean | undefined
  offsetBottomSuggested?: boolean | undefined
  offsetLeftSuggested?: boolean | undefined
  offsetRightSuggested?: boolean | undefined
  offsetTopSuggested?: boolean | undefined
}
type ImagePropertiesSuggestionState = {
  angleSuggested?: boolean | undefined
  brightnessSuggested?: boolean | undefined
  contentUriSuggested?: boolean | undefined
  contrastSuggested?: boolean | undefined
  cropPropertiesSuggestionState?: CropPropertiesSuggestionState | undefined
  sourceUriSuggested?: boolean | undefined
  transparencySuggested?: boolean | undefined
}
type SheetsChartReferenceSuggestionState = {
  chartIdSuggested?: boolean | undefined
  spreadsheetIdSuggested?: boolean | undefined
}
type LinkedContentReferenceSuggestionState = {
  sheetsChartReferenceSuggestionState?: SheetsChartReferenceSuggestionState | undefined
}
type SizeSuggestionState = {
  heightSuggested?: boolean | undefined
  widthSuggested?: boolean | undefined
}
type EmbeddedObjectSuggestionState = {
  descriptionSuggested?: boolean | undefined
  embeddedDrawingPropertiesSuggestionState?: EmbeddedDrawingPropertiesSuggestionState | undefined
  embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState | undefined
  imagePropertiesSuggestionState?: ImagePropertiesSuggestionState | undefined
  linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState | undefined
  marginBottomSuggested?: boolean | undefined
  marginLeftSuggested?: boolean | undefined
  marginRightSuggested?: boolean | undefined
  marginTopSuggested?: boolean | undefined
  sizeSuggestionState?: SizeSuggestionState | undefined
  titleSuggested?: boolean | undefined
}
type InlineObjectPropertiesSuggestionState = {
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState | undefined
}
type SuggestedInlineObjectProperties = {
  inlineObjectProperties?: InlineObjectProperties | undefined
  inlineObjectPropertiesSuggestionState?: InlineObjectPropertiesSuggestionState | undefined
}
type InlineObject = {
  inlineObjectProperties?: InlineObjectProperties | undefined
  objectId?: string | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInlineObjectPropertiesChanges?:
    | { [x: string]: SuggestedInlineObjectProperties }
    | undefined
  suggestedInsertionId?: string | undefined
}
type NestingLevel = {
  bulletAlignment?: 'BULLET_ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END' | undefined
  glyphFormat?: string | undefined
  glyphSymbol?: string | undefined
  glyphType?:
    | 'GLYPH_TYPE_UNSPECIFIED'
    | 'NONE'
    | 'DECIMAL'
    | 'ZERO_DECIMAL'
    | 'UPPER_ALPHA'
    | 'ALPHA'
    | 'UPPER_ROMAN'
    | 'ROMAN'
    | undefined
  indentFirstLine?: Dimension | undefined
  indentStart?: Dimension | undefined
  startNumber?: number | undefined
  textStyle?: TextStyle | undefined
}
type ListProperties = { nestingLevels?: NestingLevel[] | undefined }
type NestingLevelSuggestionState = {
  bulletAlignmentSuggested?: boolean | undefined
  glyphFormatSuggested?: boolean | undefined
  glyphSymbolSuggested?: boolean | undefined
  glyphTypeSuggested?: boolean | undefined
  indentFirstLineSuggested?: boolean | undefined
  indentStartSuggested?: boolean | undefined
  startNumberSuggested?: boolean | undefined
  textStyleSuggestionState?: TextStyleSuggestionState | undefined
}
type ListPropertiesSuggestionState = {
  nestingLevelsSuggestionStates?: NestingLevelSuggestionState[] | undefined
}
type SuggestedListProperties = {
  listProperties?: ListProperties | undefined
  listPropertiesSuggestionState?: ListPropertiesSuggestionState | undefined
}
type List = {
  listProperties?: ListProperties | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionId?: string | undefined
  suggestedListPropertiesChanges?: { [x: string]: SuggestedListProperties } | undefined
}
type Range = {
  endIndex?: number | undefined
  segmentId?: string | undefined
  startIndex?: number | undefined
}
type NamedRange = {
  name?: string | undefined
  namedRangeId?: string | undefined
  ranges?: Range[] | undefined
}
type NamedRanges = { name?: string | undefined; namedRanges?: NamedRange[] | undefined }
type NamedStyle = {
  namedStyleType?:
    | 'NAMED_STYLE_TYPE_UNSPECIFIED'
    | 'NORMAL_TEXT'
    | 'TITLE'
    | 'SUBTITLE'
    | 'HEADING_1'
    | 'HEADING_2'
    | 'HEADING_3'
    | 'HEADING_4'
    | 'HEADING_5'
    | 'HEADING_6'
    | undefined
  paragraphStyle?: ParagraphStyle | undefined
  textStyle?: TextStyle | undefined
}
type NamedStyles = { styles?: NamedStyle[] | undefined }
type PositionedObjectPositioning = {
  layout?:
    | 'POSITIONED_OBJECT_LAYOUT_UNSPECIFIED'
    | 'WRAP_TEXT'
    | 'BREAK_LEFT'
    | 'BREAK_RIGHT'
    | 'BREAK_LEFT_RIGHT'
    | 'IN_FRONT_OF_TEXT'
    | 'BEHIND_TEXT'
    | undefined
  leftOffset?: Dimension | undefined
  topOffset?: Dimension | undefined
}
type PositionedObjectProperties = {
  embeddedObject?: EmbeddedObject | undefined
  positioning?: PositionedObjectPositioning | undefined
}
type PositionedObjectPositioningSuggestionState = {
  layoutSuggested?: boolean | undefined
  leftOffsetSuggested?: boolean | undefined
  topOffsetSuggested?: boolean | undefined
}
type PositionedObjectPropertiesSuggestionState = {
  embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState | undefined
  positioningSuggestionState?: PositionedObjectPositioningSuggestionState | undefined
}
type SuggestedPositionedObjectProperties = {
  positionedObjectProperties?: PositionedObjectProperties | undefined
  positionedObjectPropertiesSuggestionState?: PositionedObjectPropertiesSuggestionState | undefined
}
type PositionedObject = {
  objectId?: string | undefined
  positionedObjectProperties?: PositionedObjectProperties | undefined
  suggestedDeletionIds?: string[] | undefined
  suggestedInsertionId?: string | undefined
  suggestedPositionedObjectPropertiesChanges?:
    | { [x: string]: SuggestedPositionedObjectProperties }
    | undefined
}
type BackgroundSuggestionState = { backgroundColorSuggested?: boolean | undefined }
type DocumentStyleSuggestionState = {
  backgroundSuggestionState?: BackgroundSuggestionState | undefined
  defaultFooterIdSuggested?: boolean | undefined
  defaultHeaderIdSuggested?: boolean | undefined
  evenPageFooterIdSuggested?: boolean | undefined
  evenPageHeaderIdSuggested?: boolean | undefined
  firstPageFooterIdSuggested?: boolean | undefined
  firstPageHeaderIdSuggested?: boolean | undefined
  flipPageOrientationSuggested?: boolean | undefined
  marginBottomSuggested?: boolean | undefined
  marginFooterSuggested?: boolean | undefined
  marginHeaderSuggested?: boolean | undefined
  marginLeftSuggested?: boolean | undefined
  marginRightSuggested?: boolean | undefined
  marginTopSuggested?: boolean | undefined
  pageNumberStartSuggested?: boolean | undefined
  pageSizeSuggestionState?: SizeSuggestionState | undefined
  useCustomHeaderFooterMarginsSuggested?: boolean | undefined
  useEvenPageHeaderFooterSuggested?: boolean | undefined
  useFirstPageHeaderFooterSuggested?: boolean | undefined
}
type SuggestedDocumentStyle = {
  documentStyle?: DocumentStyle | undefined
  documentStyleSuggestionState?: DocumentStyleSuggestionState | undefined
}
type NamedStyleSuggestionState = {
  namedStyleType?:
    | 'NAMED_STYLE_TYPE_UNSPECIFIED'
    | 'NORMAL_TEXT'
    | 'TITLE'
    | 'SUBTITLE'
    | 'HEADING_1'
    | 'HEADING_2'
    | 'HEADING_3'
    | 'HEADING_4'
    | 'HEADING_5'
    | 'HEADING_6'
    | undefined
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState | undefined
  textStyleSuggestionState?: TextStyleSuggestionState | undefined
}
type NamedStylesSuggestionState = {
  stylesSuggestionStates?: NamedStyleSuggestionState[] | undefined
}
type SuggestedNamedStyles = {
  namedStyles?: NamedStyles | undefined
  namedStylesSuggestionState?: NamedStylesSuggestionState | undefined
}
type Document = {
  body?: Body | undefined
  documentId?: string | undefined
  documentStyle?: DocumentStyle | undefined
  footers?: { [x: string]: Footer } | undefined
  footnotes?: { [x: string]: Footnote } | undefined
  headers?: { [x: string]: Header } | undefined
  inlineObjects?: { [x: string]: InlineObject } | undefined
  lists?: { [x: string]: List } | undefined
  namedRanges?: { [x: string]: NamedRanges } | undefined
  namedStyles?: NamedStyles | undefined
  positionedObjects?: { [x: string]: PositionedObject } | undefined
  revisionId?: string | undefined
  suggestedDocumentStyleChanges?: { [x: string]: SuggestedDocumentStyle } | undefined
  suggestedNamedStylesChanges?: { [x: string]: SuggestedNamedStyles } | undefined
  suggestionsViewMode?:
    | 'DEFAULT_FOR_CURRENT_ACCESS'
    | 'SUGGESTIONS_INLINE'
    | 'PREVIEW_SUGGESTIONS_ACCEPTED'
    | 'PREVIEW_WITHOUT_SUGGESTIONS'
    | undefined
  title?: string | undefined
}
type Location = { index?: number | undefined; segmentId?: string | undefined }
type CreateFooterRequest = {
  sectionBreakLocation?: Location | undefined
  type?: 'HEADER_FOOTER_TYPE_UNSPECIFIED' | 'DEFAULT' | undefined
}
type EndOfSegmentLocation = { segmentId?: string | undefined }
type CreateFootnoteRequest = {
  endOfSegmentLocation?: EndOfSegmentLocation | undefined
  location?: Location | undefined
}
type CreateHeaderRequest = {
  sectionBreakLocation?: Location | undefined
  type?: 'HEADER_FOOTER_TYPE_UNSPECIFIED' | 'DEFAULT' | undefined
}
type CreateNamedRangeRequest = { name?: string | undefined; range?: Range | undefined }
type CreateParagraphBulletsRequest = {
  bulletPreset?:
    | 'BULLET_GLYPH_PRESET_UNSPECIFIED'
    | 'BULLET_DISC_CIRCLE_SQUARE'
    | 'BULLET_DIAMONDX_ARROW3D_SQUARE'
    | 'BULLET_CHECKBOX'
    | 'BULLET_ARROW_DIAMOND_DISC'
    | 'BULLET_STAR_CIRCLE_SQUARE'
    | 'BULLET_ARROW3D_CIRCLE_SQUARE'
    | 'BULLET_LEFTTRIANGLE_DIAMOND_DISC'
    | 'BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE'
    | 'BULLET_DIAMOND_CIRCLE_SQUARE'
    | 'NUMBERED_DECIMAL_ALPHA_ROMAN'
    | 'NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS'
    | 'NUMBERED_DECIMAL_NESTED'
    | 'NUMBERED_UPPERALPHA_ALPHA_ROMAN'
    | 'NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL'
    | 'NUMBERED_ZERODECIMAL_ALPHA_ROMAN'
    | undefined
  range?: Range | undefined
}
type DeleteContentRangeRequest = { range?: Range | undefined }
type DeleteFooterRequest = { footerId?: string | undefined }
type DeleteHeaderRequest = { headerId?: string | undefined }
type DeleteNamedRangeRequest = { name?: string | undefined; namedRangeId?: string | undefined }
type DeleteParagraphBulletsRequest = { range?: Range | undefined }
type DeletePositionedObjectRequest = { objectId?: string | undefined }
type TableCellLocation = {
  columnIndex?: number | undefined
  rowIndex?: number | undefined
  tableStartLocation?: Location | undefined
}
type DeleteTableColumnRequest = { tableCellLocation?: TableCellLocation | undefined }
type DeleteTableRowRequest = { tableCellLocation?: TableCellLocation | undefined }
type InsertInlineImageRequest = {
  endOfSegmentLocation?: EndOfSegmentLocation | undefined
  location?: Location | undefined
  objectSize?: Size | undefined
  uri?: string | undefined
}
type InsertPageBreakRequest = {
  endOfSegmentLocation?: EndOfSegmentLocation | undefined
  location?: Location | undefined
}
type InsertSectionBreakRequest = {
  endOfSegmentLocation?: EndOfSegmentLocation | undefined
  location?: Location | undefined
  sectionType?: 'SECTION_TYPE_UNSPECIFIED' | 'CONTINUOUS' | 'NEXT_PAGE' | undefined
}
type InsertTableRequest = {
  columns?: number | undefined
  endOfSegmentLocation?: EndOfSegmentLocation | undefined
  location?: Location | undefined
  rows?: number | undefined
}
type InsertTableColumnRequest = {
  insertRight?: boolean | undefined
  tableCellLocation?: TableCellLocation | undefined
}
type InsertTableRowRequest = {
  insertBelow?: boolean | undefined
  tableCellLocation?: TableCellLocation | undefined
}
type InsertTextRequest = {
  endOfSegmentLocation?: EndOfSegmentLocation | undefined
  location?: Location | undefined
  text?: string | undefined
}
type TableRange = {
  columnSpan?: number | undefined
  rowSpan?: number | undefined
  tableCellLocation?: TableCellLocation | undefined
}
type MergeTableCellsRequest = { tableRange?: TableRange | undefined }
type PinTableHeaderRowsRequest = {
  pinnedHeaderRowsCount?: number | undefined
  tableStartLocation?: Location | undefined
}
type SubstringMatchCriteria = { matchCase?: boolean | undefined; text?: string | undefined }
type ReplaceAllTextRequest = {
  containsText?: SubstringMatchCriteria | undefined
  replaceText?: string | undefined
}
type ReplaceImageRequest = {
  imageObjectId?: string | undefined
  imageReplaceMethod?: 'IMAGE_REPLACE_METHOD_UNSPECIFIED' | 'CENTER_CROP' | undefined
  uri?: string | undefined
}
type ReplaceNamedRangeContentRequest = {
  namedRangeId?: string | undefined
  namedRangeName?: string | undefined
  text?: string | undefined
}
type UnmergeTableCellsRequest = { tableRange?: TableRange | undefined }
type UpdateDocumentStyleRequest = {
  documentStyle?: DocumentStyle | undefined
  fields?: string | undefined
}
type UpdateParagraphStyleRequest = {
  fields?: string | undefined
  paragraphStyle?: ParagraphStyle | undefined
  range?: Range | undefined
}
type UpdateSectionStyleRequest = {
  fields?: string | undefined
  range?: Range | undefined
  sectionStyle?: SectionStyle | undefined
}
type UpdateTableCellStyleRequest = {
  fields?: string | undefined
  tableCellStyle?: TableCellStyle | undefined
  tableRange?: TableRange | undefined
  tableStartLocation?: Location | undefined
}
type UpdateTableColumnPropertiesRequest = {
  columnIndices?: number[] | undefined
  fields?: string | undefined
  tableColumnProperties?: TableColumnProperties | undefined
  tableStartLocation?: Location | undefined
}
type UpdateTableRowStyleRequest = {
  fields?: string | undefined
  rowIndices?: number[] | undefined
  tableRowStyle?: TableRowStyle | undefined
  tableStartLocation?: Location | undefined
}
type UpdateTextStyleRequest = {
  fields?: string | undefined
  range?: Range | undefined
  textStyle?: TextStyle | undefined
}
type Request = {
  createFooter?: CreateFooterRequest | undefined
  createFootnote?: CreateFootnoteRequest | undefined
  createHeader?: CreateHeaderRequest | undefined
  createNamedRange?: CreateNamedRangeRequest | undefined
  createParagraphBullets?: CreateParagraphBulletsRequest | undefined
  deleteContentRange?: DeleteContentRangeRequest | undefined
  deleteFooter?: DeleteFooterRequest | undefined
  deleteHeader?: DeleteHeaderRequest | undefined
  deleteNamedRange?: DeleteNamedRangeRequest | undefined
  deleteParagraphBullets?: DeleteParagraphBulletsRequest | undefined
  deletePositionedObject?: DeletePositionedObjectRequest | undefined
  deleteTableColumn?: DeleteTableColumnRequest | undefined
  deleteTableRow?: DeleteTableRowRequest | undefined
  insertInlineImage?: InsertInlineImageRequest | undefined
  insertPageBreak?: InsertPageBreakRequest | undefined
  insertSectionBreak?: InsertSectionBreakRequest | undefined
  insertTable?: InsertTableRequest | undefined
  insertTableColumn?: InsertTableColumnRequest | undefined
  insertTableRow?: InsertTableRowRequest | undefined
  insertText?: InsertTextRequest | undefined
  mergeTableCells?: MergeTableCellsRequest | undefined
  pinTableHeaderRows?: PinTableHeaderRowsRequest | undefined
  replaceAllText?: ReplaceAllTextRequest | undefined
  replaceImage?: ReplaceImageRequest | undefined
  replaceNamedRangeContent?: ReplaceNamedRangeContentRequest | undefined
  unmergeTableCells?: UnmergeTableCellsRequest | undefined
  updateDocumentStyle?: UpdateDocumentStyleRequest | undefined
  updateParagraphStyle?: UpdateParagraphStyleRequest | undefined
  updateSectionStyle?: UpdateSectionStyleRequest | undefined
  updateTableCellStyle?: UpdateTableCellStyleRequest | undefined
  updateTableColumnProperties?: UpdateTableColumnPropertiesRequest | undefined
  updateTableRowStyle?: UpdateTableRowStyleRequest | undefined
  updateTextStyle?: UpdateTextStyleRequest | undefined
}
type WriteControl = {
  requiredRevisionId?: string | undefined
  targetRevisionId?: string | undefined
}
type BatchUpdateDocumentRequest = {
  requests?: Request[] | undefined
  writeControl?: WriteControl | undefined
}
type CreateFooterResponse = { footerId?: string | undefined }
type CreateFootnoteResponse = { footnoteId?: string | undefined }
type CreateHeaderResponse = { headerId?: string | undefined }
type CreateNamedRangeResponse = { namedRangeId?: string | undefined }
type InsertInlineImageResponse = { objectId?: string | undefined }
type InsertInlineSheetsChartResponse = { objectId?: string | undefined }
type ReplaceAllTextResponse = { occurrencesChanged?: number | undefined }
type Response = {
  createFooter?: CreateFooterResponse | undefined
  createFootnote?: CreateFootnoteResponse | undefined
  createHeader?: CreateHeaderResponse | undefined
  createNamedRange?: CreateNamedRangeResponse | undefined
  insertInlineImage?: InsertInlineImageResponse | undefined
  insertInlineSheetsChart?: InsertInlineSheetsChartResponse | undefined
  replaceAllText?: ReplaceAllTextResponse | undefined
}
type BatchUpdateDocumentResponse = {
  documentId?: string | undefined
  replies?: Response[] | undefined
  writeControl?: WriteControl | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/documents': {
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
        } & { json: Document }
        output: Document
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/documents/:documentId': {
      $get: {
        input: { param: { documentId: string } } & {
          query: {
            suggestionsViewMode?:
              | 'DEFAULT_FOR_CURRENT_ACCESS'
              | 'SUGGESTIONS_INLINE'
              | 'PREVIEW_SUGGESTIONS_ACCEPTED'
              | 'PREVIEW_WITHOUT_SUGGESTIONS'
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
        output: Document
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/documents/:documentId:batchUpdate': {
      $post: {
        input: { param: { documentId: string } } & {
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
        } & { json: BatchUpdateDocumentRequest }
        output: BatchUpdateDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
