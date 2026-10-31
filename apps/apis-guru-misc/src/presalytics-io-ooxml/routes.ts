import { createRoute, z } from '@hono/zod-openapi'

const ChartChartsDetailsSchema: z.ZodType<ChartChartsDetailsType> = z
  .lazy(() =>
    z
      .object({
        axes: z
          .array(ChartAxesDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        chartData: ChartChartDataDetailsSchema.exactOptional(),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.Charts.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Chart.Charts.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        parentGraphic: SlideGraphicsDetailsSchema.exactOptional(),
        parentGraphicId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Charts.Details' }),
        titleTextContainer: SharedTextContainerDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.Charts.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.Charts.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartChartsDetails')

const SharedTextContainerDetailsSchema: z.ZodType<SharedTextContainerDetailsType> = z
  .lazy(() =>
    z
      .object({
        axis: ChartAxesDetailsSchema.exactOptional(),
        axisId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        chart: ChartChartsDetailsSchema.exactOptional(),
        chartId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.TextContainer.Details' }),
        outerXml: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        paragraphs: z
          .array(SharedParagraphDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        parentShape: SlideShapesDetailsSchema.exactOptional(),
        shapeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        tableCell: TableCellsDetailsSchema.exactOptional(),
        tableCellId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.TextContainer.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.TextContainer.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.TextContainer.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedTextContainerDetails')

type ChartAxesDetailsType = {
  axisDataTypeId?: number
  chart?: z.infer<typeof ChartChartsDetailsSchema>
  chartsId?: string
  dateCreated?: string
  dateModified?: string
  id?: string
  ooxmlId?: number
  titleTextContainer?: z.infer<typeof SharedTextContainerDetailsSchema>
  userCreated?: string
  userModified?: string
}

const ChartColumnCollectionsDetailsSchema: z.ZodType<ChartColumnCollectionsDetailsType> = z
  .lazy(() =>
    z
      .object({
        chartData: ChartChartDataDetailsSchema.exactOptional(),
        chartDataId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.ColumnCollections.Details' }),
        columns: z
          .array(ChartColumnsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.ColumnCollections.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.ColumnCollections.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.ColumnCollections.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.ColumnCollections.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.ColumnCollections.Details' }),
        userModified: z
          .uuid()
          .exactOptional()
          .openapi({ title: 'Chart.ColumnCollections.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartColumnCollectionsDetails')

const ChartDataPointsDetailsSchema: z.ZodType<ChartDataPointsDetailsType> = z
  .lazy(() =>
    z
      .object({
        chartData: ChartChartDataDetailsSchema.exactOptional(),
        chartDataId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.DataPoints.Details' }),
        column: ChartColumnsDetailsSchema.exactOptional(),
        columnId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.DataPoints.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.DataPoints.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.DataPoints.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.DataPoints.Details' }),
        row: ChartRowsDetailsSchema.exactOptional(),
        rowId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.DataPoints.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.DataPoints.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.DataPoints.Details' }),
        value: z.float64().exactOptional().openapi({ title: 'Chart.DataPoints.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartDataPointsDetails')

const ChartRowCollectionsDetailsSchema: z.ZodType<ChartRowCollectionsDetailsType> = z
  .lazy(() =>
    z
      .object({
        axis: ChartAxesDetailsSchema.exactOptional(),
        axisId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.RowCollections.Details' }),
        chartData: ChartChartDataDetailsSchema.exactOptional(),
        chartDataId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.RowCollections.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.RowCollections.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.RowCollections.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.RowCollections.Details' }),
        nameFormatType: z
          .int32()
          .exactOptional()
          .openapi({ title: 'Chart.RowCollections.Details' }),
        rows: z
          .array(ChartRowsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.RowCollections.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.RowCollections.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.RowCollections.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartRowCollectionsDetails')

type ChartChartDataDetailsType = {
  chart?: z.infer<typeof ChartChartsDetailsSchema>
  chartId?: string | null
  columnCollection?: z.infer<typeof ChartColumnCollectionsDetailsSchema>
  dataPoints?: z.infer<typeof ChartDataPointsDetailsSchema>[] | null
  dateCreated?: string
  dateModified?: string
  id?: string
  rowCollection?: z.infer<typeof ChartRowCollectionsDetailsSchema>
  userCreated?: string
  userModified?: string
}

const ChartAxesDetailsSchema: z.ZodType<ChartAxesDetailsType> = z
  .lazy(() =>
    z
      .object({
        axisDataTypeId: z.int32().exactOptional().openapi({ title: 'Chart.Axes.Details' }),
        chart: ChartChartsDetailsSchema.exactOptional(),
        chartsId: z.uuid().exactOptional().openapi({ title: 'Chart.Axes.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Axes.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Axes.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.Axes.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Chart.Axes.Details' }),
        titleTextContainer: SharedTextContainerDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.Axes.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.Axes.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartAxesDetails')

const ChartChartDataDetailsSchema: z.ZodType<ChartChartDataDetailsType> = z
  .lazy(() =>
    z
      .object({
        chart: ChartChartsDetailsSchema.exactOptional(),
        chartId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.ChartData.Details' }),
        columnCollection: ChartColumnCollectionsDetailsSchema.exactOptional(),
        dataPoints: z
          .array(ChartDataPointsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.ChartData.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.ChartData.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.ChartData.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.ChartData.Details' }),
        rowCollection: ChartRowCollectionsDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.ChartData.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.ChartData.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartChartDataDetails')

const SlideGraphicsDetailsSchema: z.ZodType<SlideGraphicsDetailsType> = z
  .lazy(() =>
    z
      .object({
        chart: ChartChartsDetailsSchema.exactOptional(),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Graphics.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Graphics.Details' }),
        graphicTypeId: z.int32().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        groupElement: SlideGroupElementsDetailsSchema.exactOptional(),
        groupElementsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Foreign key to the GroupElements object',
            title: 'Slide.Graphics.Details',
          }),
        height: z.int32().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        picture: SharedPicturesDetailsSchema.exactOptional(),
        smartArt: SlideSmartArtsDetailsSchema.exactOptional(),
        table: TableTablesDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        width: z.int32().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        xOffset: z.int32().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
        yOffset: z.int32().exactOptional().openapi({ title: 'Slide.Graphics.Details' }),
      })
      .openapi({
        description:
          'The graphics class provides a bridge between the Slides and \r\nlower level models including Charts, Tables, Pictures, and SmartArts',
        required: [],
      }),
  )
  .openapi('SlideGraphicsDetails')

type ChartChartsDetailsType = {
  axes?: z.infer<typeof ChartAxesDetailsSchema>[] | null
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  chartData?: z.infer<typeof ChartChartDataDetailsSchema>
  dateCreated?: string
  dateModified?: string
  id?: string
  name?: string | null
  packageUri?: string | null
  parentGraphic?: z.infer<typeof SlideGraphicsDetailsSchema>
  parentGraphicId?: string | null
  svgBlobUrl?: string | null
  titleTextContainer?: z.infer<typeof SharedTextContainerDetailsSchema>
  userCreated?: string
  userModified?: string
}

const ChartColumnsDetailsSchema: z.ZodType<ChartColumnsDetailsType> = z
  .lazy(() =>
    z
      .object({
        axis: ChartAxesDetailsSchema.exactOptional(),
        axisId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.Columns.Details' }),
        columnCollection: ChartColumnCollectionsDetailsSchema.exactOptional(),
        columnCollectionId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Columns.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Columns.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Columns.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.Columns.Details' }),
        index: z.int32().exactOptional().openapi({ title: 'Chart.Columns.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Chart.Columns.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.Columns.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.Columns.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartColumnsDetails')

type ChartColumnCollectionsDetailsType = {
  chartData?: z.infer<typeof ChartChartDataDetailsSchema>
  chartDataId?: string | null
  columns?: z.infer<typeof ChartColumnsDetailsSchema>[] | null
  dateCreated?: string
  dateModified?: string
  id?: string
  userCreated?: string
  userModified?: string
}

type ChartColumnsDetailsType = {
  axis?: z.infer<typeof ChartAxesDetailsSchema>
  axisId?: string | null
  columnCollection?: z.infer<typeof ChartColumnCollectionsDetailsSchema>
  columnCollectionId?: string | null
  dateCreated?: string
  dateModified?: string
  id?: string
  index?: number
  name?: string | null
  userCreated?: string
  userModified?: string
}

const ChartRowsDetailsSchema: z.ZodType<ChartRowsDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Rows.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Chart.Rows.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Chart.Rows.Details' }),
        index: z.int32().exactOptional().openapi({ title: 'Chart.Rows.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Chart.Rows.Details' }),
        rowNameCollection: ChartRowCollectionsDetailsSchema.exactOptional(),
        rowNameCollectionId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Chart.Rows.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Chart.Rows.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Chart.Rows.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ChartRowsDetails')

type ChartDataPointsDetailsType = {
  chartData?: z.infer<typeof ChartChartDataDetailsSchema>
  chartDataId?: string | null
  column?: z.infer<typeof ChartColumnsDetailsSchema>
  columnId?: string | null
  dateCreated?: string
  dateModified?: string
  id?: string
  row?: z.infer<typeof ChartRowsDetailsSchema>
  rowId?: string | null
  userCreated?: string
  userModified?: string
  value?: number
}

type ChartRowCollectionsDetailsType = {
  axis?: z.infer<typeof ChartAxesDetailsSchema>
  axisId?: string | null
  chartData?: z.infer<typeof ChartChartDataDetailsSchema>
  chartDataId?: string | null
  dateCreated?: string
  dateModified?: string
  id?: string
  nameFormatType?: number
  rows?: z.infer<typeof ChartRowsDetailsSchema>[] | null
  userCreated?: string
  userModified?: string
}

type ChartRowsDetailsType = {
  dateCreated?: string
  dateModified?: string
  id?: string
  index?: number
  name?: string | null
  rowNameCollection?: z.infer<typeof ChartRowCollectionsDetailsSchema>
  rowNameCollectionId?: string | null
  userCreated?: string
  userModified?: string
}

const SlideSlidesDetailsSchema: z.ZodType<SlideSlidesDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        document: DocumentDetailsSchema.exactOptional(),
        documentId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
        number: z.int32().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        shapeTree: SlideShapeTreesDetailsSchema.exactOptional(),
        slideDocumentUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        slideMaster: SlideSlideMastersDetailsSchema.exactOptional(),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Slides.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.Slides.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideSlidesDetails')

type DocumentDetailsType = {
  baseElementBlobUrl?: string | null
  blobLocation?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  documentTypeId?: number
  filename?: string | null
  id?: string
  name?: string | null
  ownerGuid?: string
  packageUri?: string | null
  slides?: z.infer<typeof SlideSlidesDetailsSchema>[] | null
  storyId?: string
  tableStylesXmlBlobUrl?: string | null
  title?: string | null
  userCreated?: string
  userModified?: string
}

const SharedColorTransformationsDetailsSchema: z.ZodType<SharedColorTransformationsDetailsType> = z
  .lazy(() =>
    z
      .object({
        colorTransformationAttributes: z
          .array(SharedColorTransformationAttributesDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.ColorTransformations.Details' }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
        parentSolidFill: SharedSolidFillsDetailsSchema.exactOptional(),
        solidFillsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
        userCreated: z
          .uuid()
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
        userModified: z
          .uuid()
          .exactOptional()
          .openapi({ title: 'Shared.ColorTransformations.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedColorTransformationsDetails')

type SharedColorTransformationAttributesDetailsType = {
  colorTransformation?: z.infer<typeof SharedColorTransformationsDetailsSchema>
  colorTransformationsId?: string | null
  dateCreated?: string
  dateModified?: string
  id?: string
  name?: string | null
  userCreated?: string
  userModified?: string
  value?: string | null
}

const SharedColorTransformationAttributesDetailsSchema: z.ZodType<SharedColorTransformationAttributesDetailsType> =
  z
    .lazy(() =>
      z
        .object({
          colorTransformation: SharedColorTransformationsDetailsSchema.exactOptional(),
          colorTransformationsId: z
            .uuid()
            .nullable()
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          dateCreated: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          dateModified: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          id: z
            .uuid()
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          name: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          userCreated: z
            .uuid()
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          userModified: z
            .uuid()
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
          value: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ title: 'Shared.ColorTransformationAttributes.Details' }),
        })
        .openapi({ required: [] }),
    )
    .openapi('SharedColorTransformationAttributesDetails')

const SharedSolidFillsDetailsSchema: z.ZodType<SharedSolidFillsDetailsType> = z
  .lazy(() =>
    z
      .object({
        colorTransformations: SharedColorTransformationsDetailsSchema.exactOptional(),
        colorTypeId: z
          .int32()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        fillMapId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        hexValue: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.SolidFills.Details' }),
        isUserColor: z.boolean().exactOptional().openapi({ title: 'Shared.SolidFills.Details' }),
        parentFillMap: SharedFillMapDetailsSchema.exactOptional(),
        parentGradientStop: SharedGradientStopsDetailsSchema.exactOptional(),
        parentGradientStopId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        parentLine: SharedLinesDetailsSchema.exactOptional(),
        parentLineId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        parentText: SharedTextDetailsSchema.exactOptional(),
        parentTextId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.SolidFills.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.SolidFills.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.SolidFills.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedSolidFillsDetails')

type SharedColorTransformationsDetailsType = {
  colorTransformationAttributes?:
    | z.infer<typeof SharedColorTransformationAttributesDetailsSchema>[]
    | null
  dateCreated?: string
  dateModified?: string
  id?: string
  name?: string | null
  parentSolidFill?: z.infer<typeof SharedSolidFillsDetailsSchema>
  solidFillsId?: string | null
  userCreated?: string
  userModified?: string
}

const SharedEffectsDetailsSchema: z.ZodType<SharedEffectsDetailsType> = z
  .lazy(() =>
    z
      .object({
        connectorId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Effects.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Effects.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Effects.Details' }),
        effectAttributes: z
          .array(SharedEffectAttributesDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Effects.Details' }),
        effectMap: ThemeEffectMapDetailsSchema.exactOptional(),
        effectMapId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Effects.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.Effects.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Shared.Effects.Details' }),
        parentConnector: SlideConnectorDetailsSchema.exactOptional(),
        parentShape: SlideShapesDetailsSchema.exactOptional(),
        shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Effects.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.Effects.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.Effects.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedEffectsDetails')

const SharedFillMapDetailsSchema: z.ZodType<SharedFillMapDetailsType> = z
  .lazy(() =>
    z
      .object({
        connector: SlideConnectorDetailsSchema.exactOptional(),
        connectorId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        effectAttribute: SharedEffectAttributesDetailsSchema.exactOptional(),
        effectAttributeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        fillTypeId: z.int32().exactOptional().openapi({ title: 'Shared.FillMap.Details' }),
        gradientFill: SharedGradientFillsDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.FillMap.Details' }),
        imageFill: SharedImageFillsDetailsSchema.exactOptional(),
        shape: SlideShapesDetailsSchema.exactOptional(),
        shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap.Details' }),
        solidFill: SharedSolidFillsDetailsSchema.exactOptional(),
        tableCell: TableCellsDetailsSchema.exactOptional(),
        tableCellId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        themeBackgroundFill: ThemeBackgroundFillsDetailsSchema.exactOptional(),
        themeBackgroundFillId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        themeFill: ThemeFillsDetailsSchema.exactOptional(),
        themeFillId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.FillMap.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.FillMap.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.FillMap.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedFillMapDetails')

type SharedEffectAttributesDetailsType = {
  attributesJson?: string | null
  dateCreated?: string
  dateModified?: string
  effect?: z.infer<typeof SharedEffectsDetailsSchema>
  effectId?: string | null
  effectTypeId?: number
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  id?: string
  userCreated?: string
  userModified?: string
}

const SharedEffectAttributesDetailsSchema: z.ZodType<SharedEffectAttributesDetailsType> = z
  .lazy(() =>
    z
      .object({
        attributesJson: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.EffectAttributes.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.EffectAttributes.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.EffectAttributes.Details' }),
        effect: SharedEffectsDetailsSchema.exactOptional(),
        effectId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.EffectAttributes.Details' }),
        effectTypeId: z
          .int32()
          .exactOptional()
          .openapi({ title: 'Shared.EffectAttributes.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.EffectAttributes.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.EffectAttributes.Details' }),
        userModified: z
          .uuid()
          .exactOptional()
          .openapi({ title: 'Shared.EffectAttributes.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedEffectAttributesDetails')

const ThemeEffectMapDetailsSchema: z.ZodType<ThemeEffectMapDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.EffectMap.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.EffectMap.Details' }),
        effect: SharedEffectsDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.EffectMap.Details' }),
        intensityId: z.int32().exactOptional().openapi({ title: 'Theme.EffectMap.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.EffectMap.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.EffectMap.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.EffectMap.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeEffectMapDetails')

const SlideConnectorDetailsSchema: z.ZodType<SlideConnectorDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        effect: SharedEffectsDetailsSchema.exactOptional(),
        endConnectionIdx: z.int32().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        endConnectionShape: SlideShapesDetailsSchema.exactOptional(),
        endConnectionShapeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        flipHorizontal: z.boolean().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        flipVertical: z.boolean().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        freeFormPathXml: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        groupElement: SlideGroupElementsDetailsSchema.exactOptional(),
        groupElementsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        hidden: z.boolean().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        isThemeEffect: z.boolean().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        isThemeFill: z.boolean().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        isThemeLine: z.boolean().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        line: SharedLinesDetailsSchema.exactOptional(),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        presetTypeId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        rotation: z.int32().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        startConnectionIdx: z.int32().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        startConnectionShape: SlideShapesDetailsSchema.exactOptional(),
        startConnectionShapeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Connector.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.Connector.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideConnectorDetails')

const SlideShapesDetailsSchema: z.ZodType<SlideShapesDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        effect: SharedEffectsDetailsSchema.exactOptional(),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        flipHorizontal: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        flipVertical: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        freeFormPathXml: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        groupElement: SlideGroupElementsDetailsSchema.exactOptional(),
        groupElementsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        height: z.int32().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        hidden: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        isThemeEffect: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        isThemeFill: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        isThemeLine: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        line: SharedLinesDetailsSchema.exactOptional(),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        presetTypeId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        rotation: z.int32().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Shapes.Details' }),
        textContainer: SharedTextContainerDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        width: z.int32().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        xOffset: z.int32().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
        yOffset: z.int32().exactOptional().openapi({ title: 'Slide.Shapes.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideShapesDetails')

type SharedEffectsDetailsType = {
  connectorId?: string | null
  dateCreated?: string
  dateModified?: string
  effectAttributes?: z.infer<typeof SharedEffectAttributesDetailsSchema>[] | null
  effectMap?: z.infer<typeof ThemeEffectMapDetailsSchema>
  effectMapId?: string | null
  id?: string
  name?: string | null
  parentConnector?: z.infer<typeof SlideConnectorDetailsSchema>
  parentShape?: z.infer<typeof SlideShapesDetailsSchema>
  shapeId?: string | null
  userCreated?: string
  userModified?: string
}

const SharedGradientFillsDetailsSchema: z.ZodType<SharedGradientFillsDetailsType> = z
  .lazy(() =>
    z
      .object({
        angle: z
          .int32()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        fillMapId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        gradientStops: z
          .array(SharedGradientStopsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.GradientFills.Details' }),
        isPath: z.boolean().exactOptional().openapi({ title: 'Shared.GradientFills.Details' }),
        pathType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        rotateWithShape: z
          .boolean()
          .exactOptional()
          .openapi({ title: 'Shared.GradientFills.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.GradientFills.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.GradientFills.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedGradientFillsDetails')

const SharedImageFillsDetailsSchema: z.ZodType<SharedImageFillsDetailsType> = z
  .lazy(() =>
    z
      .object({
        compressionState: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        dpi: z.int32().nullable().exactOptional().openapi({ title: 'Shared.ImageFills.Details' }),
        effectsJson: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        fillMapId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.ImageFills.Details' }),
        picture: SharedPicturesDetailsSchema.exactOptional(),
        rotateWithShape: z
          .boolean()
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        sourceRectangle: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.ImageFills.Details' }),
        stretch: z.boolean().exactOptional().openapi({ title: 'Shared.ImageFills.Details' }),
        tile: z.string().nullable().exactOptional().openapi({ title: 'Shared.ImageFills.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.ImageFills.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.ImageFills.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedImageFillsDetails')

const TableCellsDetailsSchema: z.ZodType<TableCellsDetailsType> = z
  .lazy(() =>
    z
      .object({
        border: TableBordersDetailsSchema.exactOptional(),
        column: TableColumnsDetailsSchema.exactOptional(),
        columnId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        columnSpan: z.int32().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Cells.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Cells.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        isMergedHorozontal: z.boolean().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        isMergedVertical: z.boolean().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        row: TableRowsDetailsSchema.exactOptional(),
        rowId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        rowSpan: z.int32().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        textContainer: SharedTextContainerDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Table.Cells.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Table.Cells.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TableCellsDetails')

const ThemeBackgroundFillsDetailsSchema: z.ZodType<ThemeBackgroundFillsDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.BackgroundFills.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.BackgroundFills.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.BackgroundFills.Details' }),
        intensityId: z.int32().exactOptional().openapi({ title: 'Theme.BackgroundFills.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.BackgroundFills.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.BackgroundFills.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.BackgroundFills.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeBackgroundFillsDetails')

const ThemeFillsDetailsSchema: z.ZodType<ThemeFillsDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Fills.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Fills.Details' }),
        fillMap: SharedFillMapDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.Fills.Details' }),
        intensityId: z.int32().exactOptional().openapi({ title: 'Theme.Fills.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Fills.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.Fills.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.Fills.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeFillsDetails')

type SharedFillMapDetailsType = {
  connector?: z.infer<typeof SlideConnectorDetailsSchema>
  connectorId?: string | null
  dateCreated?: string
  dateModified?: string
  effectAttribute?: z.infer<typeof SharedEffectAttributesDetailsSchema>
  effectAttributeId?: string | null
  fillTypeId?: number
  gradientFill?: z.infer<typeof SharedGradientFillsDetailsSchema>
  id?: string
  imageFill?: z.infer<typeof SharedImageFillsDetailsSchema>
  shape?: z.infer<typeof SlideShapesDetailsSchema>
  shapeId?: string | null
  solidFill?: z.infer<typeof SharedSolidFillsDetailsSchema>
  tableCell?: z.infer<typeof TableCellsDetailsSchema>
  tableCellId?: string | null
  themeBackgroundFill?: z.infer<typeof ThemeBackgroundFillsDetailsSchema>
  themeBackgroundFillId?: string | null
  themeFill?: z.infer<typeof ThemeFillsDetailsSchema>
  themeFillId?: string | null
  userCreated?: string
  userModified?: string
}

const SharedGradientStopsDetailsSchema: z.ZodType<SharedGradientStopsDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.GradientStops.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.GradientStops.Details' }),
        gradientFill: SharedGradientFillsDetailsSchema.exactOptional(),
        gradientFillsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.GradientStops.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.GradientStops.Details' }),
        position: z.int32().exactOptional().openapi({ title: 'Shared.GradientStops.Details' }),
        solidFill: SharedSolidFillsDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.GradientStops.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.GradientStops.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedGradientStopsDetails')

type SharedGradientFillsDetailsType = {
  angle?: number | null
  dateCreated?: string
  dateModified?: string
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  fillMapId?: string | null
  gradientStops?: z.infer<typeof SharedGradientStopsDetailsSchema>[] | null
  id?: string
  isPath?: boolean
  pathType?: string | null
  rotateWithShape?: boolean
  userCreated?: string
  userModified?: string
}

type SharedGradientStopsDetailsType = {
  dateCreated?: string
  dateModified?: string
  gradientFill?: z.infer<typeof SharedGradientFillsDetailsSchema>
  gradientFillsId?: string | null
  id?: string
  position?: number
  solidFill?: z.infer<typeof SharedSolidFillsDetailsSchema>
  userCreated?: string
  userModified?: string
}

const SharedPicturesDetailsSchema: z.ZodType<SharedPicturesDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        fileExtension: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        graphicsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.Pictures.Details' }),
        imageFileBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        imageFill: SharedImageFillsDetailsSchema.exactOptional(),
        imageFillsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Shared.Pictures.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Pictures.Details' }),
        parentGraphic: SlideGraphicsDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.Pictures.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.Pictures.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedPicturesDetails')

type SharedImageFillsDetailsType = {
  compressionState?: string | null
  dateCreated?: string
  dateModified?: string
  dpi?: number | null
  effectsJson?: string | null
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  fillMapId?: string | null
  id?: string
  picture?: z.infer<typeof SharedPicturesDetailsSchema>
  rotateWithShape?: boolean
  sourceRectangle?: string | null
  stretch?: boolean
  tile?: string | null
  userCreated?: string
  userModified?: string
}

const TableBordersDetailsSchema: z.ZodType<TableBordersDetailsType> = z
  .lazy(() =>
    z
      .object({
        bLtoTR: SharedLinesDetailsSchema.exactOptional(),
        bottom: SharedLinesDetailsSchema.exactOptional(),
        cell: TableCellsDetailsSchema.exactOptional(),
        cellId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Borders.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Borders.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Borders.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Table.Borders.Details' }),
        left: SharedLinesDetailsSchema.exactOptional(),
        right: SharedLinesDetailsSchema.exactOptional(),
        tLtoBR: SharedLinesDetailsSchema.exactOptional(),
        top: SharedLinesDetailsSchema.exactOptional(),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Table.Borders.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Table.Borders.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TableBordersDetails')

const ThemeLineMapDetailsSchema: z.ZodType<ThemeLineMapDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.LineMap.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.LineMap.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.LineMap.Details' }),
        intensityId: z.int32().exactOptional().openapi({ title: 'Theme.LineMap.Details' }),
        line: SharedLinesDetailsSchema.exactOptional(),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.LineMap.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.LineMap.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.LineMap.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeLineMapDetails')

type SharedLinesDetailsType = {
  bLtoTRBorder?: z.infer<typeof TableBordersDetailsSchema>
  bLtoTRBorderId?: string | null
  bottomBorder?: z.infer<typeof TableBordersDetailsSchema>
  bottomBorderId?: string | null
  connectorId?: string | null
  dashTypeId?: number
  dateCreated?: string
  dateModified?: string
  headEndHeightId?: number
  headEndTypeId?: number
  headEndWidthId?: number
  id?: string
  leftBorder?: z.infer<typeof TableBordersDetailsSchema>
  leftBorderId?: string | null
  lineColorSolidFill?: z.infer<typeof SharedSolidFillsDetailsSchema>
  lineMap?: z.infer<typeof ThemeLineMapDetailsSchema>
  lineMapId?: string | null
  parentConnector?: z.infer<typeof SlideConnectorDetailsSchema>
  parentShape?: z.infer<typeof SlideShapesDetailsSchema>
  rightBorder?: z.infer<typeof TableBordersDetailsSchema>
  rightBorderId?: string | null
  shapeId?: string | null
  tLtoBRBorder?: z.infer<typeof TableBordersDetailsSchema>
  tLtoBRBorderId?: string | null
  tailEndHeightId?: number
  tailEndTypeId?: number
  tailEndWidthId?: number
  topBorder?: z.infer<typeof TableBordersDetailsSchema>
  topBorderId?: string | null
  userCreated?: string
  userModified?: string
  weight?: number
}

const SharedTextDetailsSchema: z.ZodType<SharedTextDetailsType> = z
  .lazy(() =>
    z
      .object({
        colorSolidFill: SharedSolidFillsDetailsSchema.exactOptional(),
        colorSolidFillsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Text.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Text.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Text.Details' }),
        font: z.string().nullable().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        fontSize: z.int32().nullable().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        isBold: z.boolean().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        isItalic: z.boolean().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        isThemeFont: z.boolean().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        isUnderline: z.boolean().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        paragraph: SharedParagraphDetailsSchema.exactOptional(),
        paragraphId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        rawText: z.string().nullable().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        sequence: z.int32().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.Text.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.Text.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedTextDetails')

type SharedParagraphDetailsType = {
  dateCreated?: string
  dateModified?: string
  id?: string
  number?: number
  text?: z.infer<typeof SharedTextDetailsSchema>[] | null
  textContainer?: z.infer<typeof SharedTextContainerDetailsSchema>
  textContainerId?: string | null
  userCreated?: string
  userModified?: string
}

type SharedPicturesDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  fileExtension?: string | null
  graphicsId?: string | null
  id?: string
  imageFileBlobUrl?: string | null
  imageFill?: z.infer<typeof SharedImageFillsDetailsSchema>
  imageFillsId?: string | null
  name?: string | null
  packageUri?: string | null
  parentGraphic?: z.infer<typeof SlideGraphicsDetailsSchema>
  userCreated?: string
  userModified?: string
}

const SharedLinesDetailsSchema: z.ZodType<SharedLinesDetailsType> = z
  .lazy(() =>
    z
      .object({
        bLtoTRBorder: TableBordersDetailsSchema.exactOptional(),
        bLtoTRBorderId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        bottomBorder: TableBordersDetailsSchema.exactOptional(),
        bottomBorderId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        connectorId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        dashTypeId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        headEndHeightId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        headEndTypeId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        headEndWidthId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        leftBorder: TableBordersDetailsSchema.exactOptional(),
        leftBorderId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        lineColorSolidFill: SharedSolidFillsDetailsSchema.exactOptional(),
        lineMap: ThemeLineMapDetailsSchema.exactOptional(),
        lineMapId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        parentConnector: SlideConnectorDetailsSchema.exactOptional(),
        parentShape: SlideShapesDetailsSchema.exactOptional(),
        rightBorder: TableBordersDetailsSchema.exactOptional(),
        rightBorderId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        tLtoBRBorder: TableBordersDetailsSchema.exactOptional(),
        tLtoBRBorderId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Lines.Details' }),
        tailEndHeightId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        tailEndTypeId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        tailEndWidthId: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        topBorder: TableBordersDetailsSchema.exactOptional(),
        topBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
        weight: z.int32().exactOptional().openapi({ title: 'Shared.Lines.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedLinesDetails')

type SharedSolidFillsDetailsType = {
  colorTransformations?: z.infer<typeof SharedColorTransformationsDetailsSchema>
  colorTypeId?: number | null
  dateCreated?: string
  dateModified?: string
  fillMapId?: string | null
  hexValue?: string | null
  id?: string
  isUserColor?: boolean
  parentFillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  parentGradientStop?: z.infer<typeof SharedGradientStopsDetailsSchema>
  parentGradientStopId?: string | null
  parentLine?: z.infer<typeof SharedLinesDetailsSchema>
  parentLineId?: string | null
  parentText?: z.infer<typeof SharedTextDetailsSchema>
  parentTextId?: string | null
  userCreated?: string
  userModified?: string
}

const SharedParagraphDetailsSchema: z.ZodType<SharedParagraphDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Paragraph.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Shared.Paragraph.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Shared.Paragraph.Details' }),
        number: z.int32().exactOptional().openapi({ title: 'Shared.Paragraph.Details' }),
        text: z
          .array(SharedTextDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Paragraph.Details' }),
        textContainer: SharedTextContainerDetailsSchema.exactOptional(),
        textContainerId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Shared.Paragraph.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Shared.Paragraph.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Shared.Paragraph.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SharedParagraphDetails')

type SharedTextDetailsType = {
  colorSolidFill?: z.infer<typeof SharedSolidFillsDetailsSchema>
  colorSolidFillsId?: string | null
  dateCreated?: string
  dateModified?: string
  font?: string | null
  fontSize?: number | null
  id?: string
  isBold?: boolean
  isItalic?: boolean
  isThemeFont?: boolean
  isUnderline?: boolean
  paragraph?: z.infer<typeof SharedParagraphDetailsSchema>
  paragraphId?: string | null
  rawText?: string | null
  sequence?: number
  userCreated?: string
  userModified?: string
}

type SharedTextContainerDetailsType = {
  axis?: z.infer<typeof ChartAxesDetailsSchema>
  axisId?: string | null
  chart?: z.infer<typeof ChartChartsDetailsSchema>
  chartId?: string | null
  dateCreated?: string
  dateModified?: string
  id?: string
  outerXml?: string | null
  paragraphs?: z.infer<typeof SharedParagraphDetailsSchema>[] | null
  parentShape?: z.infer<typeof SlideShapesDetailsSchema>
  shapeId?: string | null
  tableCell?: z.infer<typeof TableCellsDetailsSchema>
  tableCellId?: string | null
  userCreated?: string
  userModified?: string
}

const SlideSlideMastersDetailsSchema: z.ZodType<SlideSlideMastersDetailsType> = z
  .lazy(() =>
    z
      .object({
        colorMap: SlideColorMapsDetailsSchema.exactOptional(),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.SlideMasters.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.SlideMasters.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.SlideMasters.Details' }),
        parentSlide: SlideSlidesDetailsSchema.exactOptional(),
        slideId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.SlideMasters.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.SlideMasters.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.SlideMasters.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideSlideMastersDetails')

type SlideColorMapsDetailsType = {
  accent1?: number
  accent2?: number
  accent3?: number
  accent4?: number
  accent5?: number
  accent6?: number
  background1?: number
  background2?: number
  dateCreated?: string
  dateModified?: string
  followedHyperlink?: number
  hyperlink?: number
  id?: string
  slideMaster?: z.infer<typeof SlideSlideMastersDetailsSchema>
  slideMasterId?: string | null
  text1?: number
  text2?: number
  userCreated?: string
  userModified?: string
}

const SlideGroupElementsDetailsSchema: z.ZodType<SlideGroupElementsDetailsType> = z
  .lazy(() =>
    z
      .object({
        childGroupElements: z
          .array(SlideGroupElementsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        connector: SlideConnectorDetailsSchema.exactOptional(),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        graphic: SlideGraphicsDetailsSchema.exactOptional(),
        group: SlideGroupsDetailsSchema.exactOptional(),
        groupElementTypeId: z
          .int32()
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        groupElementTypePk: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElements.Details' }),
        parentGroupElement: SlideGroupElementsDetailsSchema.exactOptional(),
        parentGroupElementId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        shape: SlideShapesDetailsSchema.exactOptional(),
        shapeTree: SlideShapeTreesDetailsSchema.exactOptional(),
        shapeTreeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        typeInfo: SlideGroupElementTypesDetailsSchema.exactOptional(),
        ultimateParentShapeTreeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.GroupElements.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElements.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElements.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideGroupElementsDetails')

type SlideConnectorDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  effect?: z.infer<typeof SharedEffectsDetailsSchema>
  endConnectionIdx?: number
  endConnectionShape?: z.infer<typeof SlideShapesDetailsSchema>
  endConnectionShapeId?: string | null
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  flipHorizontal?: boolean
  flipVertical?: boolean
  freeFormPathXml?: string | null
  groupElement?: z.infer<typeof SlideGroupElementsDetailsSchema>
  groupElementsId?: string | null
  hidden?: boolean
  id?: string
  isThemeEffect?: boolean
  isThemeFill?: boolean
  isThemeLine?: boolean
  line?: z.infer<typeof SharedLinesDetailsSchema>
  name?: string | null
  ooxmlId?: number
  packageUri?: string | null
  presetTypeId?: string | null
  rotation?: number
  startConnectionIdx?: number
  startConnectionShape?: z.infer<typeof SlideShapesDetailsSchema>
  startConnectionShapeId?: string | null
  svgBlobUrl?: string | null
  userCreated?: string
  userModified?: string
}

const SlideSmartArtsDetailsSchema: z.ZodType<SlideSmartArtsDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        graphicsId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.SmartArts.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.SmartArts.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        parentGraphic: SlideGraphicsDetailsSchema.exactOptional(),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.SmartArts.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.SmartArts.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.SmartArts.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideSmartArtsDetails')

const TableTablesDetailsSchema: z.ZodType<TableTablesDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        cells: z
          .array(TableCellsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        columns: z
          .array(TableColumnsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        hasStylePart: z.boolean().exactOptional().openapi({ title: 'Table.Tables.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Table.Tables.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Table.Tables.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        parentGraphic: SlideGraphicsDetailsSchema.exactOptional(),
        parentGraphicId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        rows: z
          .array(TableRowsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        stylePartOuterXml: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Tables.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Table.Tables.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Table.Tables.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TableTablesDetails')

type SlideGraphicsDetailsType = {
  chart?: z.infer<typeof ChartChartsDetailsSchema>
  dateCreated?: string
  dateModified?: string
  graphicTypeId?: number
  groupElement?: z.infer<typeof SlideGroupElementsDetailsSchema>
  groupElementsId?: string | null
  height?: number
  id?: string
  name?: string | null
  ooxmlId?: number
  picture?: z.infer<typeof SharedPicturesDetailsSchema>
  smartArt?: z.infer<typeof SlideSmartArtsDetailsSchema>
  table?: z.infer<typeof TableTablesDetailsSchema>
  userCreated?: string
  userModified?: string
  width?: number
  xOffset?: number
  yOffset?: number
}

type SlideGroupElementTypesDetailsType = {
  dateCreated?: string
  dateModified?: string
  description?: string | null
  id?: string
  name?: string | null
  typeId?: number
  userCreated?: string
  userModified?: string
}

const SlideGroupsDetailsSchema: z.ZodType<SlideGroupsDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        groupElement: SlideGroupElementsDetailsSchema.exactOptional(),
        groupElementId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        hidden: z.boolean().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.Groups.Details' }),
        title: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.Groups.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideGroupsDetails')

const SlideShapeTreesDetailsSchema: z.ZodType<SlideShapeTreesDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        groupElement: SlideGroupElementsDetailsSchema.exactOptional(),
        groupElementId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        groupElements: z
          .array(SlideGroupElementsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        hidden: z.boolean().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        slide: SlideSlidesDetailsSchema.exactOptional(),
        slideId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        svgBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ShapeTrees.Details' }),
        title: z.string().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.ShapeTrees.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideShapeTreesDetails')

const SlideGroupElementTypesDetailsSchema: z.ZodType<SlideGroupElementTypesDetailsType> = z
  .object({
    dateCreated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ title: 'Slide.GroupElementTypes.Details' }),
    dateModified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ title: 'Slide.GroupElementTypes.Details' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.GroupElementTypes.Details' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElementTypes.Details' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.GroupElementTypes.Details' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Slide.GroupElementTypes.Details' }),
    userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElementTypes.Details' }),
    userModified: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElementTypes.Details' }),
  })
  .openapi({ required: [] })
  .openapi('SlideGroupElementTypesDetails')

type SlideGroupElementsDetailsType = {
  childGroupElements?: SlideGroupElementsDetailsType[] | null
  connector?: z.infer<typeof SlideConnectorDetailsSchema>
  dateCreated?: string
  dateModified?: string
  graphic?: z.infer<typeof SlideGraphicsDetailsSchema>
  group?: z.infer<typeof SlideGroupsDetailsSchema>
  groupElementTypeId?: number
  groupElementTypePk?: string | null
  id?: string
  parentGroupElement?: SlideGroupElementsDetailsType
  parentGroupElementId?: string | null
  shape?: z.infer<typeof SlideShapesDetailsSchema>
  shapeTree?: z.infer<typeof SlideShapeTreesDetailsSchema>
  shapeTreeId?: string | null
  typeInfo?: z.infer<typeof SlideGroupElementTypesDetailsSchema>
  ultimateParentShapeTreeId?: string | null
  userCreated?: string
  userModified?: string
}

type SlideGroupsDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  groupElement?: z.infer<typeof SlideGroupElementsDetailsSchema>
  groupElementId?: string | null
  hidden?: boolean
  id?: string
  name?: string | null
  ooxmlId?: number
  packageUri?: string | null
  svgBlobUrl?: string | null
  title?: string | null
  userCreated?: string
  userModified?: string
}

type SlideShapeTreesDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  groupElement?: z.infer<typeof SlideGroupElementsDetailsSchema>
  groupElementId?: string | null
  groupElements?: z.infer<typeof SlideGroupElementsDetailsSchema>[] | null
  hidden?: boolean
  id?: string
  name?: string | null
  ooxmlId?: number
  packageUri?: string | null
  slide?: z.infer<typeof SlideSlidesDetailsSchema>
  slideId?: string | null
  svgBlobUrl?: string | null
  title?: string | null
  userCreated?: string
  userModified?: string
}

type SlideShapesDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  effect?: z.infer<typeof SharedEffectsDetailsSchema>
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  flipHorizontal?: boolean
  flipVertical?: boolean
  freeFormPathXml?: string | null
  groupElement?: z.infer<typeof SlideGroupElementsDetailsSchema>
  groupElementsId?: string | null
  height?: number
  hidden?: boolean
  id?: string
  isThemeEffect?: boolean
  isThemeFill?: boolean
  isThemeLine?: boolean
  line?: z.infer<typeof SharedLinesDetailsSchema>
  name?: string | null
  ooxmlId?: number
  packageUri?: string | null
  presetTypeId?: string | null
  rotation?: number
  svgBlobUrl?: string | null
  textContainer?: z.infer<typeof SharedTextContainerDetailsSchema>
  userCreated?: string
  userModified?: string
  width?: number
  xOffset?: number
  yOffset?: number
}

const SlideColorMapsDetailsSchema: z.ZodType<SlideColorMapsDetailsType> = z
  .lazy(() =>
    z
      .object({
        accent1: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        accent2: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        accent3: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        accent4: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        accent5: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        accent6: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        background1: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        background2: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.ColorMaps.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Slide.ColorMaps.Details' }),
        followedHyperlink: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        hyperlink: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        slideMaster: SlideSlideMastersDetailsSchema.exactOptional(),
        slideMasterId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Slide.ColorMaps.Details' }),
        text1: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        text2: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Slide.ColorMaps.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SlideColorMapsDetails')

type SlideSlideMastersDetailsType = {
  colorMap?: z.infer<typeof SlideColorMapsDetailsSchema>
  dateCreated?: string
  dateModified?: string
  id?: string
  parentSlide?: z.infer<typeof SlideSlidesDetailsSchema>
  slideId?: string | null
  userCreated?: string
  userModified?: string
}

const DocumentDetailsSchema: z.ZodType<DocumentDetailsType> = z
  .lazy(() =>
    z
      .object({
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Document.Details' }),
        blobLocation: z.string().nullable().exactOptional().openapi({ title: 'Document.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Document.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Document.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Document.Details' }),
        documentTypeId: z.int32().exactOptional().openapi({ title: 'Document.Details' }),
        filename: z.string().nullable().exactOptional().openapi({ title: 'Document.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Document.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Document.Details' }),
        ownerGuid: z.uuid().exactOptional().openapi({ title: 'Document.Details' }),
        packageUri: z.string().nullable().exactOptional().openapi({ title: 'Document.Details' }),
        slides: z
          .array(SlideSlidesDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Document.Details' }),
        storyId: z.uuid().exactOptional().openapi({ title: 'Document.Details' }),
        tableStylesXmlBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Document.Details' }),
        title: z.string().nullable().exactOptional().openapi({ title: 'Document.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Document.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Document.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('DocumentDetails')

const ThemeThemesDetailsSchema: z.ZodType<ThemeThemesDetailsType> = z
  .lazy(() =>
    z
      .object({
        backgroundFills: z
          .array(ThemeBackgroundFillsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        baseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        changedBaseElementBlobUrl: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        colors: ThemeColorsDetailsSchema.exactOptional(),
        customColors: z
          .array(ThemeCustomColorsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        effectMaps: z
          .array(ThemeEffectMapDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        fills: z
          .array(ThemeFillsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        fonts: ThemeFontsDetailsSchema.exactOptional(),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.Themes.Details' }),
        lineMaps: z
          .array(ThemeLineMapDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Theme.Themes.Details' }),
        packageUri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Themes.Details' }),
        slide: SlideSlidesDetailsSchema.exactOptional(),
        slideId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Themes.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.Themes.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.Themes.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeThemesDetails')

type SlideSlidesDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  document?: z.infer<typeof DocumentDetailsSchema>
  documentId?: string | null
  id?: string
  name?: string | null
  number?: number
  ooxmlId?: number
  packageUri?: string | null
  shapeTree?: z.infer<typeof SlideShapeTreesDetailsSchema>
  slideDocumentUrl?: string | null
  slideMaster?: z.infer<typeof SlideSlideMastersDetailsSchema>
  svgBlobUrl?: string | null
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  userCreated?: string
  userModified?: string
}

type SlideSmartArtsDetailsType = {
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  dateCreated?: string
  dateModified?: string
  graphicsId?: string | null
  id?: string
  name?: string | null
  packageUri?: string | null
  parentGraphic?: z.infer<typeof SlideGraphicsDetailsSchema>
  svgBlobUrl?: string | null
  userCreated?: string
  userModified?: string
}

type TableBordersDetailsType = {
  bLtoTR?: z.infer<typeof SharedLinesDetailsSchema>
  bottom?: z.infer<typeof SharedLinesDetailsSchema>
  cell?: z.infer<typeof TableCellsDetailsSchema>
  cellId?: string | null
  dateCreated?: string
  dateModified?: string
  id?: string
  left?: z.infer<typeof SharedLinesDetailsSchema>
  right?: z.infer<typeof SharedLinesDetailsSchema>
  tLtoBR?: z.infer<typeof SharedLinesDetailsSchema>
  top?: z.infer<typeof SharedLinesDetailsSchema>
  userCreated?: string
  userModified?: string
}

const TableColumnsDetailsSchema: z.ZodType<TableColumnsDetailsType> = z
  .lazy(() =>
    z
      .object({
        cells: z
          .array(TableCellsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Columns.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Columns.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Columns.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Table.Columns.Details' }),
        index: z.int32().exactOptional().openapi({ title: 'Table.Columns.Details' }),
        table: TableTablesDetailsSchema.exactOptional(),
        tableId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Columns.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Table.Columns.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Table.Columns.Details' }),
        width: z
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
          .openapi({ type: 'integer', format: 'int64', title: 'Table.Columns.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TableColumnsDetails')

const TableRowsDetailsSchema: z.ZodType<TableRowsDetailsType> = z
  .lazy(() =>
    z
      .object({
        cells: z
          .array(TableCellsDetailsSchema)
          .nullable()
          .exactOptional()
          .openapi({ title: 'Table.Rows.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Rows.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Table.Rows.Details' }),
        height: z
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
          .openapi({ type: 'integer', format: 'int64', title: 'Table.Rows.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Table.Rows.Details' }),
        index: z.int32().exactOptional().openapi({ title: 'Table.Rows.Details' }),
        table: TableTablesDetailsSchema.exactOptional(),
        tableId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Rows.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Table.Rows.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Table.Rows.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TableRowsDetails')

type TableCellsDetailsType = {
  border?: z.infer<typeof TableBordersDetailsSchema>
  column?: z.infer<typeof TableColumnsDetailsSchema>
  columnId?: string | null
  columnSpan?: number
  dateCreated?: string
  dateModified?: string
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  id?: string
  isMergedHorozontal?: boolean
  isMergedVertical?: boolean
  row?: z.infer<typeof TableRowsDetailsSchema>
  rowId?: string | null
  rowSpan?: number
  textContainer?: z.infer<typeof SharedTextContainerDetailsSchema>
  userCreated?: string
  userModified?: string
}

type TableColumnsDetailsType = {
  cells?: z.infer<typeof TableCellsDetailsSchema>[] | null
  dateCreated?: string
  dateModified?: string
  id?: string
  index?: number
  table?: z.infer<typeof TableTablesDetailsSchema>
  tableId?: string | null
  userCreated?: string
  userModified?: string
  width?: bigint
}

type TableRowsDetailsType = {
  cells?: z.infer<typeof TableCellsDetailsSchema>[] | null
  dateCreated?: string
  dateModified?: string
  height?: bigint
  id?: string
  index?: number
  table?: z.infer<typeof TableTablesDetailsSchema>
  tableId?: string | null
  userCreated?: string
  userModified?: string
}

type TableTablesDetailsType = {
  baseElementBlobUrl?: string | null
  cells?: z.infer<typeof TableCellsDetailsSchema>[] | null
  changedBaseElementBlobUrl?: string | null
  columns?: z.infer<typeof TableColumnsDetailsSchema>[] | null
  dateCreated?: string
  dateModified?: string
  hasStylePart?: boolean
  id?: string
  name?: string | null
  packageUri?: string | null
  parentGraphic?: z.infer<typeof SlideGraphicsDetailsSchema>
  parentGraphicId?: string | null
  rows?: z.infer<typeof TableRowsDetailsSchema>[] | null
  stylePartOuterXml?: string | null
  svgBlobUrl?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeBackgroundFillsDetailsType = {
  dateCreated?: string
  dateModified?: string
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  id?: string
  intensityId?: number
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeColorsDetailsType = {
  accent1?: string | null
  accent2?: string | null
  accent3?: string | null
  accent4?: string | null
  accent5?: string | null
  accent6?: string | null
  dark1?: string | null
  dark2?: string | null
  dateCreated?: string
  dateModified?: string
  followedHyperlink?: string | null
  hyperlink?: string | null
  id?: string
  light1?: string | null
  light2?: string | null
  name?: string | null
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeCustomColorsDetailsType = {
  dateCreated?: string
  dateModified?: string
  hexValue?: string | null
  id?: string
  name?: string | null
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeEffectMapDetailsType = {
  dateCreated?: string
  dateModified?: string
  effect?: z.infer<typeof SharedEffectsDetailsSchema>
  id?: string
  intensityId?: number
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeFillsDetailsType = {
  dateCreated?: string
  dateModified?: string
  fillMap?: z.infer<typeof SharedFillMapDetailsSchema>
  id?: string
  intensityId?: number
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeFontsDetailsType = {
  bodyFont?: string | null
  dateCreated?: string
  dateModified?: string
  headingFont?: string | null
  id?: string
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

type ThemeLineMapDetailsType = {
  dateCreated?: string
  dateModified?: string
  id?: string
  intensityId?: number
  line?: z.infer<typeof SharedLinesDetailsSchema>
  theme?: z.infer<typeof ThemeThemesDetailsSchema>
  themeId?: string | null
  userCreated?: string
  userModified?: string
}

const ThemeColorsDetailsSchema: z.ZodType<ThemeColorsDetailsType> = z
  .lazy(() =>
    z
      .object({
        accent1: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        accent2: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        accent3: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        accent4: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        accent5: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        accent6: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        dark1: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        dark2: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Colors.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Colors.Details' }),
        followedHyperlink: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Colors.Details' }),
        hyperlink: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        light1: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        light2: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        name: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.Colors.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeColorsDetails')

const ThemeCustomColorsDetailsSchema: z.ZodType<ThemeCustomColorsDetailsType> = z
  .lazy(() =>
    z
      .object({
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.CustomColors.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.CustomColors.Details' }),
        hexValue: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.CustomColors.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.CustomColors.Details' }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.CustomColors.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.CustomColors.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.CustomColors.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.CustomColors.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeCustomColorsDetails')

const ThemeFontsDetailsSchema: z.ZodType<ThemeFontsDetailsType> = z
  .lazy(() =>
    z
      .object({
        bodyFont: z.string().nullable().exactOptional().openapi({ title: 'Theme.Fonts.Details' }),
        dateCreated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Fonts.Details' }),
        dateModified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ title: 'Theme.Fonts.Details' }),
        headingFont: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ title: 'Theme.Fonts.Details' }),
        id: z.uuid().exactOptional().openapi({ title: 'Theme.Fonts.Details' }),
        theme: ThemeThemesDetailsSchema.exactOptional(),
        themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Fonts.Details' }),
        userCreated: z.uuid().exactOptional().openapi({ title: 'Theme.Fonts.Details' }),
        userModified: z.uuid().exactOptional().openapi({ title: 'Theme.Fonts.Details' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ThemeFontsDetails')

type ThemeThemesDetailsType = {
  backgroundFills?: z.infer<typeof ThemeBackgroundFillsDetailsSchema>[] | null
  baseElementBlobUrl?: string | null
  changedBaseElementBlobUrl?: string | null
  colors?: z.infer<typeof ThemeColorsDetailsSchema>
  customColors?: z.infer<typeof ThemeCustomColorsDetailsSchema>[] | null
  dateCreated?: string
  dateModified?: string
  effectMaps?: z.infer<typeof ThemeEffectMapDetailsSchema>[] | null
  fills?: z.infer<typeof ThemeFillsDetailsSchema>[] | null
  fonts?: z.infer<typeof ThemeFontsDetailsSchema>
  id?: string
  lineMaps?: z.infer<typeof ThemeLineMapDetailsSchema>[] | null
  name?: string | null
  packageUri?: string | null
  slide?: z.infer<typeof SlideSlidesDetailsSchema>
  slideId?: string | null
  userCreated?: string
  userModified?: string
}

const ChartAxesSchema = z
  .object({
    axisDataTypeId: z.int32().exactOptional().openapi({ title: 'Chart.Axes' }),
    chartsId: z.uuid().exactOptional().openapi({ title: 'Chart.Axes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.Axes' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Chart.Axes' }),
  })
  .openapi({ required: [] })
  .openapi('ChartAxes')

const ChartAxisDataTypesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Chart.AxisDataTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.AxisDataTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Chart.AxisDataTypes' }),
    ooxmlName: z.string().nullable().exactOptional().openapi({ title: 'Chart.AxisDataTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Chart.AxisDataTypes' }),
  })
  .openapi({ required: [] })
  .openapi('ChartAxisDataTypes')

const ChartChartDataSchema = z
  .object({
    chartId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.ChartData' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.ChartData' }),
  })
  .openapi({ required: [] })
  .openapi('ChartChartData')

const ChartChartDataDTOSchema = z
  .object({
    categoryNames: z.array(z.string()).nullable().exactOptional(),
    chartId: z.uuid().exactOptional(),
    dataPoints: z.array(z.array(z.float64())).nullable().exactOptional(),
    seriesNames: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartChartDataDTO')

const ChartChartsSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Chart.Charts' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Chart.Charts' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.Charts' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Chart.Charts' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Chart.Charts' }),
    parentGraphicId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.Charts' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Chart.Charts' }),
  })
  .openapi({ required: [] })
  .openapi('ChartCharts')

const ChartColumnCollectionsSchema = z
  .object({
    chartDataId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.ColumnCollections' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.ColumnCollections' }),
  })
  .openapi({ required: [] })
  .openapi('ChartColumnCollections')

const ChartColumnsSchema = z
  .object({
    axisId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.Columns' }),
    columnCollectionId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.Columns' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.Columns' }),
    index: z.int32().exactOptional().openapi({ title: 'Chart.Columns' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Chart.Columns' }),
  })
  .openapi({ required: [] })
  .openapi('ChartColumns')

const ChartDataPointsSchema = z
  .object({
    chartDataId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.DataPoints' }),
    columnId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.DataPoints' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.DataPoints' }),
    rowId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.DataPoints' }),
    value: z.float64().exactOptional().openapi({ title: 'Chart.DataPoints' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataPoints')

const ChartPlotTypeSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Chart.PlotType' }),
    plotQualifedAssy: z.string().nullable().exactOptional().openapi({ title: 'Chart.PlotType' }),
    plotTypeName: z.string().nullable().exactOptional().openapi({ title: 'Chart.PlotType' }),
    rowColTypeId: z.int32().exactOptional().openapi({ title: 'Chart.PlotType' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Chart.PlotType' }),
  })
  .openapi({ required: [] })
  .openapi('ChartPlotType')

const ChartRowColSchema = z
  .object({
    colName: z.string().nullable().exactOptional().openapi({ title: 'Chart.RowCol' }),
    colQualifiedAssy: z.string().nullable().exactOptional().openapi({ title: 'Chart.RowCol' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.RowCol' }),
    rowName: z.string().nullable().exactOptional().openapi({ title: 'Chart.RowCol' }),
    rowQualifedAssy: z.string().nullable().exactOptional().openapi({ title: 'Chart.RowCol' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Chart.RowCol' }),
  })
  .openapi({ required: [] })
  .openapi('ChartRowCol')

const ChartRowCollectionsSchema = z
  .object({
    axisId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.RowCollections' }),
    chartDataId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.RowCollections' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.RowCollections' }),
    nameFormatType: z.int32().exactOptional().openapi({ title: 'Chart.RowCollections' }),
  })
  .openapi({ required: [] })
  .openapi('ChartRowCollections')

const ChartRowNameFormatTypesSchema = z
  .object({
    formatCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Chart.RowNameFormatTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Chart.RowNameFormatTypes' }),
    powerToolsId: z.int32().exactOptional().openapi({ title: 'Chart.RowNameFormatTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Chart.RowNameFormatTypes' }),
  })
  .openapi({ required: [] })
  .openapi('ChartRowNameFormatTypes')

const ChartRowsSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Chart.Rows' }),
    index: z.int32().exactOptional().openapi({ title: 'Chart.Rows' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Chart.Rows' }),
    rowNameCollectionId: z.uuid().nullable().exactOptional().openapi({ title: 'Chart.Rows' }),
  })
  .openapi({ required: [] })
  .openapi('ChartRows')

const ChildObjectsSchema = z
  .object({
    entityId: z.uuid().nullable().exactOptional(),
    entityName: z.string().nullable().exactOptional(),
    objectType: z.string().nullable().exactOptional(),
    parentEntityId: z.uuid().nullable().exactOptional(),
    parentObjectType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChildObjects')

const DocumentSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    blobLocation: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    changedBaseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    documentTypeId: z.int32().exactOptional().openapi({ title: 'Document' }),
    filename: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    id: z.uuid().exactOptional().openapi({ title: 'Document' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    ownerGuid: z.uuid().exactOptional().openapi({ title: 'Document' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    storyId: z.uuid().exactOptional().openapi({ title: 'Document' }),
    tableStylesXmlBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
    title: z.string().nullable().exactOptional().openapi({ title: 'Document' }),
  })
  .openapi({ required: [] })
  .openapi('Document')

const DocumentCloneDTOSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'DocumentCloneDTO' }),
    storyId: z.uuid().exactOptional().openapi({ title: 'DocumentCloneDTO' }),
  })
  .openapi({ required: [] })
  .openapi('DocumentCloneDTO')

const DocumentTypeSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'DocumentType' }),
    fileExtension: z.string().nullable().exactOptional().openapi({ title: 'DocumentType' }),
    id: z.uuid().exactOptional().openapi({ title: 'DocumentType' }),
    mimeType: z.string().nullable().exactOptional().openapi({ title: 'DocumentType' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'DocumentType' }),
    ooxmlPackageType: z.string().nullable().exactOptional().openapi({ title: 'DocumentType' }),
    typeId: z.int32().exactOptional().openapi({ title: 'DocumentType' }),
  })
  .openapi({ required: [] })
  .openapi('DocumentType')

const OoxmlDTOSchema = z
  .object({
    id: z.uuid().nullable().exactOptional(),
    openOfficeXml: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OoxmlDTO')

const ProblemDetailsSchema = z
  .object({
    detail: z.string().nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .catchall(z.object({}))
  .openapi('ProblemDetails')

const SharedColorTransformationAttributesSchema = z
  .object({
    colorTransformationsId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.ColorTransformationAttributes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.ColorTransformationAttributes' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.ColorTransformationAttributes' }),
    value: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.ColorTransformationAttributes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedColorTransformationAttributes')

const SharedColorTransformationsSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Shared.ColorTransformations' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.ColorTransformations' }),
    solidFillsId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.ColorTransformations' }),
  })
  .openapi({ required: [] })
  .openapi('SharedColorTransformations')

const SharedColorTypesSchema = z
  .object({
    colorSchemeIndexValueEnum: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.ColorTypes' }),
    description: z.string().nullable().exactOptional().openapi({ title: 'Shared.ColorTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.ColorTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.ColorTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Shared.ColorTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedColorTypes')

const SharedDashTypesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Shared.DashTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.DashTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.DashTypes' }),
    serializedAs: z.string().nullable().exactOptional().openapi({ title: 'Shared.DashTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Shared.DashTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedDashTypes')

const SharedEffectAttributesSchema = z
  .object({
    attributesJson: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.EffectAttributes' }),
    effectId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.EffectAttributes' }),
    effectTypeId: z.int32().exactOptional().openapi({ title: 'Shared.EffectAttributes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.EffectAttributes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedEffectAttributes')

const SharedEffectTypesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Shared.EffectTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.EffectTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.EffectTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Shared.EffectTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedEffectTypes')

const SharedEffectsSchema = z
  .object({
    connectorId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Effects' }),
    effectMapId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Effects' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.Effects' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.Effects' }),
    shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Effects' }),
  })
  .openapi({ required: [] })
  .openapi('SharedEffects')

const SharedFillMapSchema = z
  .object({
    connectorId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap' }),
    effectAttributeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap' }),
    fillTypeId: z.int32().exactOptional().openapi({ title: 'Shared.FillMap' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.FillMap' }),
    shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap' }),
    tableCellId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap' }),
    themeBackgroundFillId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap' }),
    themeFillId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.FillMap' }),
  })
  .openapi({ required: [] })
  .openapi('SharedFillMap')

const SharedFillTypesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Shared.FillTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.FillTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.FillTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Shared.FillTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedFillTypes')

const SharedGradientFillsSchema = z
  .object({
    angle: z.int32().nullable().exactOptional().openapi({ title: 'Shared.GradientFills' }),
    fillMapId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.GradientFills' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.GradientFills' }),
    isPath: z.boolean().exactOptional().openapi({ title: 'Shared.GradientFills' }),
    pathType: z.string().nullable().exactOptional().openapi({ title: 'Shared.GradientFills' }),
    rotateWithShape: z.boolean().exactOptional().openapi({ title: 'Shared.GradientFills' }),
  })
  .openapi({ required: [] })
  .openapi('SharedGradientFills')

const SharedGradientStopsSchema = z
  .object({
    gradientFillsId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.GradientStops' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.GradientStops' }),
    position: z.int32().exactOptional().openapi({ title: 'Shared.GradientStops' }),
  })
  .openapi({ required: [] })
  .openapi('SharedGradientStops')

const SharedImageFillsSchema = z
  .object({
    compressionState: z.string().nullable().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    dpi: z.int32().nullable().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    effectsJson: z.string().nullable().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    fillMapId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    rotateWithShape: z.boolean().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    sourceRectangle: z.string().nullable().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    stretch: z.boolean().exactOptional().openapi({ title: 'Shared.ImageFills' }),
    tile: z.string().nullable().exactOptional().openapi({ title: 'Shared.ImageFills' }),
  })
  .openapi({ required: [] })
  .openapi('SharedImageFills')

const SharedLineEndSizesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Shared.LineEndSizes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.LineEndSizes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.LineEndSizes' }),
    serializedAs: z.string().nullable().exactOptional().openapi({ title: 'Shared.LineEndSizes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Shared.LineEndSizes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedLineEndSizes')

const SharedLineEndTypesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Shared.LineEndTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.LineEndTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.LineEndTypes' }),
    serializedAs: z.string().nullable().exactOptional().openapi({ title: 'Shared.LineEndTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Shared.LineEndTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SharedLineEndTypes')

const SharedLinesSchema = z
  .object({
    bLtoTRBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    bottomBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    connectorId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    dashTypeId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    headEndHeightId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    headEndTypeId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    headEndWidthId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.Lines' }),
    leftBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    lineMapId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    rightBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    tLtoBRBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    tailEndHeightId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    tailEndTypeId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    tailEndWidthId: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
    topBorderId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Lines' }),
    weight: z.int32().exactOptional().openapi({ title: 'Shared.Lines' }),
  })
  .openapi({ required: [] })
  .openapi('SharedLines')

const SharedParagraphSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Shared.Paragraph' }),
    number: z.int32().exactOptional().openapi({ title: 'Shared.Paragraph' }),
    textContainerId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Paragraph' }),
  })
  .openapi({ required: [] })
  .openapi('SharedParagraph')

const SharedPicturesSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.Pictures' }),
    fileExtension: z.string().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
    graphicsId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.Pictures' }),
    imageFileBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
    imageFillsId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Shared.Pictures' }),
  })
  .openapi({ required: [] })
  .openapi('SharedPictures')

const SharedSolidFillsSchema = z
  .object({
    colorTypeId: z.int32().nullable().exactOptional().openapi({ title: 'Shared.SolidFills' }),
    fillMapId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.SolidFills' }),
    hexValue: z.string().nullable().exactOptional().openapi({ title: 'Shared.SolidFills' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.SolidFills' }),
    isUserColor: z.boolean().exactOptional().openapi({ title: 'Shared.SolidFills' }),
    parentGradientStopId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Shared.SolidFills' }),
    parentLineId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.SolidFills' }),
    parentTextId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.SolidFills' }),
  })
  .openapi({ required: [] })
  .openapi('SharedSolidFills')

const SharedTextSchema = z
  .object({
    colorSolidFillsId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Text' }),
    font: z.string().nullable().exactOptional().openapi({ title: 'Shared.Text' }),
    fontSize: z.int32().nullable().exactOptional().openapi({ title: 'Shared.Text' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.Text' }),
    isBold: z.boolean().exactOptional().openapi({ title: 'Shared.Text' }),
    isItalic: z.boolean().exactOptional().openapi({ title: 'Shared.Text' }),
    isThemeFont: z.boolean().exactOptional().openapi({ title: 'Shared.Text' }),
    isUnderline: z.boolean().exactOptional().openapi({ title: 'Shared.Text' }),
    paragraphId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.Text' }),
    rawText: z.string().nullable().exactOptional().openapi({ title: 'Shared.Text' }),
    sequence: z.int32().exactOptional().openapi({ title: 'Shared.Text' }),
  })
  .openapi({ required: [] })
  .openapi('SharedText')

const SharedTextContainerSchema = z
  .object({
    axisId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.TextContainer' }),
    chartId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.TextContainer' }),
    id: z.uuid().exactOptional().openapi({ title: 'Shared.TextContainer' }),
    outerXml: z.string().nullable().exactOptional().openapi({ title: 'Shared.TextContainer' }),
    shapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.TextContainer' }),
    tableCellId: z.uuid().nullable().exactOptional().openapi({ title: 'Shared.TextContainer' }),
  })
  .openapi({ required: [] })
  .openapi('SharedTextContainer')

const SlideColorMapsSchema = z
  .object({
    accent1: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    accent2: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    accent3: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    accent4: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    accent5: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    accent6: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    background1: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    background2: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    followedHyperlink: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    hyperlink: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    slideMasterId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    text1: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
    text2: z.int32().exactOptional().openapi({ title: 'Slide.ColorMaps' }),
  })
  .openapi({ required: [] })
  .openapi('SlideColorMaps')

const SlideConnectorSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.Connector' }),
    endConnectionIdx: z.int32().exactOptional().openapi({ title: 'Slide.Connector' }),
    endConnectionShapeId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    flipHorizontal: z.boolean().exactOptional().openapi({ title: 'Slide.Connector' }),
    flipVertical: z.boolean().exactOptional().openapi({ title: 'Slide.Connector' }),
    freeFormPathXml: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    groupElementsId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    hidden: z.boolean().exactOptional().openapi({ title: 'Slide.Connector' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.Connector' }),
    isThemeEffect: z.boolean().exactOptional().openapi({ title: 'Slide.Connector' }),
    isThemeFill: z.boolean().exactOptional().openapi({ title: 'Slide.Connector' }),
    isThemeLine: z.boolean().exactOptional().openapi({ title: 'Slide.Connector' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Connector' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    presetTypeId: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
    rotation: z.int32().exactOptional().openapi({ title: 'Slide.Connector' }),
    startConnectionIdx: z.int32().exactOptional().openapi({ title: 'Slide.Connector' }),
    startConnectionShapeId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.Connector' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Connector' }),
  })
  .openapi({ required: [] })
  .openapi('SlideConnector')

const SlideGraphicTypesSchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Slide.GraphicTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.GraphicTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.GraphicTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Slide.GraphicTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SlideGraphicTypes')

const SlideGraphicsSchema = z
  .object({
    graphicTypeId: z.int32().exactOptional().openapi({ title: 'Slide.Graphics' }),
    groupElementsId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Graphics' }),
    height: z.int32().exactOptional().openapi({ title: 'Slide.Graphics' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.Graphics' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Graphics' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Graphics' }),
    width: z.int32().exactOptional().openapi({ title: 'Slide.Graphics' }),
    xOffset: z.int32().exactOptional().openapi({ title: 'Slide.Graphics' }),
    yOffset: z.int32().exactOptional().openapi({ title: 'Slide.Graphics' }),
  })
  .openapi({ required: [] })
  .openapi('SlideGraphics')

const SlideGroupElementTypesSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.GroupElementTypes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElementTypes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.GroupElementTypes' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Slide.GroupElementTypes' }),
  })
  .openapi({ required: [] })
  .openapi('SlideGroupElementTypes')

const SlideGroupElementsSchema = z
  .object({
    groupElementTypeId: z.int32().exactOptional().openapi({ title: 'Slide.GroupElements' }),
    groupElementTypePk: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.GroupElements' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.GroupElements' }),
    parentGroupElementId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.GroupElements' }),
    shapeTreeId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.GroupElements' }),
    ultimateParentShapeTreeId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.GroupElements' }),
  })
  .openapi({ required: [] })
  .openapi('SlideGroupElements')

const SlideGroupsSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.Groups' }),
    groupElementId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Groups' }),
    hidden: z.boolean().exactOptional().openapi({ title: 'Slide.Groups' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.Groups' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Groups' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups' }),
    title: z.string().nullable().exactOptional().openapi({ title: 'Slide.Groups' }),
  })
  .openapi({ required: [] })
  .openapi('SlideGroups')

const SlideShapeTreesSchema = z
  .object({
    baseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.ShapeTrees' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.ShapeTrees' }),
    groupElementId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    hidden: z.boolean().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    slideId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
    title: z.string().nullable().exactOptional().openapi({ title: 'Slide.ShapeTrees' }),
  })
  .openapi({ required: [] })
  .openapi('SlideShapeTrees')

const SlideShapesSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.Shapes' }),
    flipHorizontal: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes' }),
    flipVertical: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes' }),
    freeFormPathXml: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    groupElementsId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    height: z.int32().exactOptional().openapi({ title: 'Slide.Shapes' }),
    hidden: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.Shapes' }),
    isThemeEffect: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes' }),
    isThemeFill: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes' }),
    isThemeLine: z.boolean().exactOptional().openapi({ title: 'Slide.Shapes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Shapes' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    presetTypeId: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    rotation: z.int32().exactOptional().openapi({ title: 'Slide.Shapes' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Shapes' }),
    width: z.int32().exactOptional().openapi({ title: 'Slide.Shapes' }),
    xOffset: z.int32().exactOptional().openapi({ title: 'Slide.Shapes' }),
    yOffset: z.int32().exactOptional().openapi({ title: 'Slide.Shapes' }),
  })
  .openapi({ required: [] })
  .openapi('SlideShapes')

const SlideSlideMastersSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Slide.SlideMasters' }),
    slideId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.SlideMasters' }),
  })
  .openapi({ required: [] })
  .openapi('SlideSlideMasters')

const SlideSlidesSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Slides' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.Slides' }),
    documentId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.Slides' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.Slides' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.Slides' }),
    number: z.int32().exactOptional().openapi({ title: 'Slide.Slides' }),
    ooxmlId: z.int32().exactOptional().openapi({ title: 'Slide.Slides' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Slide.Slides' }),
    slideDocumentUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Slides' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.Slides' }),
  })
  .openapi({ required: [] })
  .openapi('SlideSlides')

const SlideSmartArtsSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.SmartArts' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Slide.SmartArts' }),
    graphicsId: z.uuid().nullable().exactOptional().openapi({ title: 'Slide.SmartArts' }),
    id: z.uuid().exactOptional().openapi({ title: 'Slide.SmartArts' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Slide.SmartArts' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Slide.SmartArts' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Slide.SmartArts' }),
  })
  .openapi({ required: [] })
  .openapi('SlideSmartArts')

const TableBordersSchema = z
  .object({
    cellId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Borders' }),
    id: z.uuid().exactOptional().openapi({ title: 'Table.Borders' }),
  })
  .openapi({ required: [] })
  .openapi('TableBorders')

const TableCellsSchema = z
  .object({
    columnId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Cells' }),
    columnSpan: z.int32().exactOptional().openapi({ title: 'Table.Cells' }),
    id: z.uuid().exactOptional().openapi({ title: 'Table.Cells' }),
    isMergedHorozontal: z.boolean().exactOptional().openapi({ title: 'Table.Cells' }),
    isMergedVertical: z.boolean().exactOptional().openapi({ title: 'Table.Cells' }),
    rowId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Cells' }),
    rowSpan: z.int32().exactOptional().openapi({ title: 'Table.Cells' }),
  })
  .openapi({ required: [] })
  .openapi('TableCells')

const TableColumnsSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Table.Columns' }),
    index: z.int32().exactOptional().openapi({ title: 'Table.Columns' }),
    tableId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Columns' }),
    width: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'Table.Columns' }),
  })
  .openapi({ required: [] })
  .openapi('TableColumns')

const TableRowsSchema = z
  .object({
    height: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'Table.Rows' }),
    id: z.uuid().exactOptional().openapi({ title: 'Table.Rows' }),
    index: z.int32().exactOptional().openapi({ title: 'Table.Rows' }),
    tableId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Rows' }),
  })
  .openapi({ required: [] })
  .openapi('TableRows')

const TableTableDataDTOSchema = z
  .object({
    tableData: z.array(z.array(z.string())).nullable().exactOptional(),
    tableId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableTableDataDTO')

const TableTablesSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Table.Tables' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Table.Tables' }),
    hasStylePart: z.boolean().exactOptional().openapi({ title: 'Table.Tables' }),
    id: z.uuid().exactOptional().openapi({ title: 'Table.Tables' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Table.Tables' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Table.Tables' }),
    parentGraphicId: z.uuid().nullable().exactOptional().openapi({ title: 'Table.Tables' }),
    stylePartOuterXml: z.string().nullable().exactOptional().openapi({ title: 'Table.Tables' }),
    svgBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Table.Tables' }),
  })
  .openapi({ required: [] })
  .openapi('TableTables')

const ThemeBackgroundFillsSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Theme.BackgroundFills' }),
    intensityId: z.int32().exactOptional().openapi({ title: 'Theme.BackgroundFills' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.BackgroundFills' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeBackgroundFills')

const ThemeColorsSchema = z
  .object({
    accent1: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    accent2: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    accent3: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    accent4: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    accent5: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    accent6: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    dark1: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    dark2: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    followedHyperlink: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    hyperlink: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    id: z.uuid().exactOptional().openapi({ title: 'Theme.Colors' }),
    light1: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    light2: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Colors' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeColors')

const ThemeCustomColorsSchema = z
  .object({
    hexValue: z.string().nullable().exactOptional().openapi({ title: 'Theme.CustomColors' }),
    id: z.uuid().exactOptional().openapi({ title: 'Theme.CustomColors' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Theme.CustomColors' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.CustomColors' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeCustomColors')

const ThemeEffectMapSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Theme.EffectMap' }),
    intensityId: z.int32().exactOptional().openapi({ title: 'Theme.EffectMap' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.EffectMap' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeEffectMap')

const ThemeFillsSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Theme.Fills' }),
    intensityId: z.int32().exactOptional().openapi({ title: 'Theme.Fills' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Fills' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeFills')

const ThemeFontsSchema = z
  .object({
    bodyFont: z.string().nullable().exactOptional().openapi({ title: 'Theme.Fonts' }),
    headingFont: z.string().nullable().exactOptional().openapi({ title: 'Theme.Fonts' }),
    id: z.uuid().exactOptional().openapi({ title: 'Theme.Fonts' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Fonts' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeFonts')

const ThemeIntensitySchema = z
  .object({
    description: z.string().nullable().exactOptional().openapi({ title: 'Theme.Intensity' }),
    id: z.uuid().exactOptional().openapi({ title: 'Theme.Intensity' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Theme.Intensity' }),
    typeId: z.int32().exactOptional().openapi({ title: 'Theme.Intensity' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeIntensity')

const ThemeLineMapSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ title: 'Theme.LineMap' }),
    intensityId: z.int32().exactOptional().openapi({ title: 'Theme.LineMap' }),
    themeId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.LineMap' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeLineMap')

const ThemeThemesSchema = z
  .object({
    baseElementBlobUrl: z.string().nullable().exactOptional().openapi({ title: 'Theme.Themes' }),
    changedBaseElementBlobUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Theme.Themes' }),
    id: z.uuid().exactOptional().openapi({ title: 'Theme.Themes' }),
    name: z.string().nullable().exactOptional().openapi({ title: 'Theme.Themes' }),
    packageUri: z.string().nullable().exactOptional().openapi({ title: 'Theme.Themes' }),
    slideId: z.uuid().nullable().exactOptional().openapi({ title: 'Theme.Themes' }),
  })
  .openapi({ required: [] })
  .openapi('ThemeThemes')

export const getChartsAxesIdRoute = createRoute({
  method: 'get',
  path: '/Charts/Axes/{id}',
  tags: ['Charts/Axes'],
  summary: 'Axes: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Axes object by its primary key (id)',
  operationId: 'chart_axes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ChartAxesSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsAxisDataTypesRoute = createRoute({
  method: 'get',
  path: '/Charts/AxisDataTypes',
  tags: ['Charts/AxisDataTypes'],
  summary: 'AxisDataTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the AxisDataTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.',
  operationId: 'chart_axisdatatypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChartAxisDataTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsAxisDataTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Charts/AxisDataTypes/TypeId/{type_id}',
  tags: ['Charts/AxisDataTypes'],
  summary: 'AxisDataTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'chart_axisdatatypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartAxisDataTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsAxisDataTypesIdRoute = createRoute({
  method: 'get',
  path: '/Charts/AxisDataTypes/{id}',
  tags: ['Charts/AxisDataTypes'],
  summary: 'AxisDataTypes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a AxisDataTypes object by its primary key (id)',
  operationId: 'chart_axisdatatypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartAxisDataTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsChartDataIdRoute = createRoute({
  method: 'get',
  path: '/Charts/ChartData/{id}',
  tags: ['Charts/ChartData'],
  summary: 'ChartData: Get by Id',
  description: 'Get by Id: Use this method to retrieve a ChartData object by its primary key (id)',
  operationId: 'chart_chartdata_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartChartDataSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsChartUpdateIdRoute = createRoute({
  method: 'get',
  path: '/Charts/ChartUpdate/{id}',
  tags: ['Charts'],
  summary: 'Charts: Get Chart Data',
  description:
    'Gets a ChartDataDTO object, usually used for downstream analytics and chart updates',
  operationId: 'charts_charts_chartupdate_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartChartDataDTOSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putChartsChartUpdateIdRoute = createRoute({
  method: 'put',
  path: '/Charts/ChartUpdate/{id}',
  tags: ['Charts'],
  summary: 'Charts: Update Chart Data',
  description: 'Simplifies chart update by allowing users to supply data via ChartDataDTO',
  operationId: 'charts_charts_chartupdate_put_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The Chart Id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'The Chart Id', format: 'uuid', type: 'string' },
          },
          description: 'The Chart Id',
        }),
    }),
    body: {
      description: 'The ChartDataDto Object',
      content: {
        'application/*+json': { schema: ChartChartDataDTOSchema },
        'application/json': { schema: ChartChartDataDTOSchema },
        'application/json-patch+json': { schema: ChartChartDataDTOSchema },
        'text/json': { schema: ChartChartDataDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getChartsChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/ChildObjects/{id}',
  tags: ['Charts'],
  summary: 'Charts: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Chart and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'charts_charts_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getChartsColumnCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/ColumnCollections/{id}',
  tags: ['Charts/ColumnCollections'],
  summary: 'ColumnCollections: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a ColumnCollections object by its primary key (id)',
  operationId: 'chart_columncollections_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartColumnCollectionsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsColumnsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/Columns/{id}',
  tags: ['Charts/Columns'],
  summary: 'Columns: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Columns object by its primary key (id)',
  operationId: 'chart_columns_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartColumnsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsDataPointsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/DataPoints/{id}',
  tags: ['Charts/DataPoints'],
  summary: 'DataPoints: Get by Id',
  description: 'Get by Id: Use this method to retrieve a DataPoints object by its primary key (id)',
  operationId: 'chart_datapoints_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartDataPointsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/Details/{id}',
  tags: ['Charts'],
  summary: 'Charts: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'charts_charts_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartChartsDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Charts/OpenOfficeXml/{id}',
  tags: ['Charts'],
  summary: 'Charts: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Chart object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Chart objects.',
  operationId: 'charts_charts_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putChartsOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Charts/OpenOfficeXml/{id}',
  tags: ['Charts'],
  summary: 'Charts: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Chart object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Chart objects.',
  operationId: 'charts_charts_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getChartsPlotTypeRoute = createRoute({
  method: 'get',
  path: '/Charts/PlotType',
  tags: ['Charts/PlotType'],
  summary: 'PlotType: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the PlotType type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.',
  operationId: 'chart_plottype_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChartPlotTypeSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsPlotTypeTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Charts/PlotType/TypeId/{type_id}',
  tags: ['Charts/PlotType'],
  summary: 'PlotType: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'chart_plottype_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartPlotTypeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsPlotTypeIdRoute = createRoute({
  method: 'get',
  path: '/Charts/PlotType/{id}',
  tags: ['Charts/PlotType'],
  summary: 'PlotType: Get by Id',
  description: 'Get by Id: Use this method to retrieve a PlotType object by its primary key (id)',
  operationId: 'chart_plottype_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartPlotTypeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowColRoute = createRoute({
  method: 'get',
  path: '/Charts/RowCol',
  tags: ['Charts/RowCol'],
  summary: 'RowCol: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the RowCol type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.',
  operationId: 'chart_rowcol_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChartRowColSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowColTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Charts/RowCol/TypeId/{type_id}',
  tags: ['Charts/RowCol'],
  summary: 'RowCol: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'chart_rowcol_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ChartRowColSchema } } },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowColIdRoute = createRoute({
  method: 'get',
  path: '/Charts/RowCol/{id}',
  tags: ['Charts/RowCol'],
  summary: 'RowCol: Get by Id',
  description: 'Get by Id: Use this method to retrieve a RowCol object by its primary key (id)',
  operationId: 'chart_rowcol_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ChartRowColSchema } } },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/RowCollections/{id}',
  tags: ['Charts/RowCollections'],
  summary: 'RowCollections: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a RowCollections object by its primary key (id)',
  operationId: 'chart_rowcollections_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartRowCollectionsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowNameFormatTypesRoute = createRoute({
  method: 'get',
  path: '/Charts/RowNameFormatTypes',
  tags: ['Charts/RowNameFormatTypes'],
  summary: 'RowNameFormatTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the RowNameFormatTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.',
  operationId: 'chart_rownameformattypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChartRowNameFormatTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowNameFormatTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Charts/RowNameFormatTypes/TypeId/{type_id}',
  tags: ['Charts/RowNameFormatTypes'],
  summary: 'RowNameFormatTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'chart_rownameformattypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartRowNameFormatTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowNameFormatTypesIdRoute = createRoute({
  method: 'get',
  path: '/Charts/RowNameFormatTypes/{id}',
  tags: ['Charts/RowNameFormatTypes'],
  summary: 'RowNameFormatTypes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a RowNameFormatTypes object by its primary key (id)',
  operationId: 'chart_rownameformattypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChartRowNameFormatTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsRowsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/Rows/{id}',
  tags: ['Charts/Rows'],
  summary: 'Rows: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Rows object by its primary key (id)',
  operationId: 'chart_rows_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ChartRowsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getChartsSvgIdRoute = createRoute({
  method: 'get',
  path: '/Charts/Svg/{id}',
  tags: ['Charts'],
  summary: 'Charts: Get Svg file',
  description:
    'This endpoint is helpful for rending this Chart as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'charts_charts_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getChartsIdRoute = createRoute({
  method: 'get',
  path: '/Charts/{id}',
  tags: ['Charts'],
  summary: 'Charts: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Charts object by its primary key (id)',
  operationId: 'charts_charts_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ChartChartsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getConnectionShapesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/ConnectionShapes/ChildObjects/{id}',
  tags: ['ConnectionShapes'],
  summary: 'Slides: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'slides_connectionshapes_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getConnectionShapesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/ConnectionShapes/Details/{id}',
  tags: ['ConnectionShapes'],
  summary: 'Slides: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'slides_connectionshapes_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideConnectorDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getConnectionShapesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/ConnectionShapes/OpenOfficeXml/{id}',
  tags: ['ConnectionShapes'],
  summary: 'Slides: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.',
  operationId: 'slides_connectionshapes_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putConnectionShapesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/ConnectionShapes/OpenOfficeXml/{id}',
  tags: ['ConnectionShapes'],
  summary: 'Slides: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.',
  operationId: 'slides_connectionshapes_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getConnectionShapesSvgIdRoute = createRoute({
  method: 'get',
  path: '/ConnectionShapes/Svg/{id}',
  tags: ['ConnectionShapes'],
  summary: 'Slides: Get Svg file',
  description:
    'This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'slides_connectionshapes_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getConnectionShapesIdRoute = createRoute({
  method: 'get',
  path: '/ConnectionShapes/{id}',
  tags: ['ConnectionShapes'],
  summary: 'ConnectionShapes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a ConnectionShapes object by its primary key (id)',
  operationId: 'slides_connectionshapes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideConnectorSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postDocumentsRoute = createRoute({
  method: 'post',
  path: '/Documents',
  tags: ['Documents'],
  summary: 'Documents: Upload',
  description: 'Upload an OpenOfficeXml document (e.g., .xlsx, .pptx) for processing by the API.',
  operationId: 'documents_post',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The file to upload.  Must be of type .pptx, ppt',
                  title: 'Story File',
                }),
              storyId: z
                .uuid()
                .openapi({
                  description: 'The story_id of the document being uploaded.',
                  title: 'Story Id',
                }),
            })
            .openapi({ required: ['file', 'storyId'], title: 'Story file form data' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(DocumentSchema) },
        'text/json': { schema: z.array(DocumentSchema) },
        'text/plain': { schema: z.array(DocumentSchema) },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getDocumentsChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Documents/ChildObjects/{id}',
  tags: ['Documents'],
  summary: 'DocumentsController: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this DocumentsController and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'documents_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ChildObjectsSchema) },
        'text/json': { schema: z.array(ChildObjectsSchema) },
        'text/plain': { schema: z.array(ChildObjectsSchema) },
      },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const postDocumentsCloneIdRoute = createRoute({
  method: 'post',
  path: '/Documents/Clone/{id}',
  tags: ['Documents'],
  summary: 'Documents: Clone an existing Ooxml Document to new Parent Story',
  description: 'Clone A Document that has already been uploaded to a new Story',
  operationId: 'documents_clone_post_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'the Source document Id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'the Source document Id', format: 'uuid', type: 'string' },
          },
          description: 'the Source document Id',
        }),
    }),
    body: {
      description:
        'A DocumentCloneDto object with containing information required for cloning the document',
      content: { 'application/json': { schema: DocumentCloneDTOSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DocumentSchema },
        'text/json': { schema: DocumentSchema },
        'text/plain': { schema: DocumentSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const getDocumentsDocumentTypeRoute = createRoute({
  method: 'get',
  path: '/Documents/DocumentType',
  tags: ['Documents/DocumentType'],
  summary: 'DocumentType: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the DocumentType type. Use the Id from oneof the returned elements on to make changes to elements in the Documents object space.',
  operationId: 'documents_documenttype_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(DocumentTypeSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getDocumentsDocumentTypeTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Documents/DocumentType/TypeId/{type_id}',
  tags: ['Documents/DocumentType'],
  summary: 'DocumentType: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'documents_documenttype_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentTypeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getDocumentsDocumentTypeIdRoute = createRoute({
  method: 'get',
  path: '/Documents/DocumentType/{id}',
  tags: ['Documents/DocumentType'],
  summary: 'DocumentType: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a DocumentType object by its primary key (id)',
  operationId: 'documents_documenttype_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentTypeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getDocumentsDownloadIdRoute = createRoute({
  method: 'get',
  path: '/Documents/Download/{id}',
  tags: ['Documents'],
  summary: 'Documents: Download',
  description: 'Download the into a bytestream for client-side processing.',
  operationId: 'documents_download_get_id_orginal',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      orginal: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orginal',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an updated version of the OpenOffice Xml file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary', title: 'File byte stream' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/Documents/{id}',
  tags: ['Documents'],
  summary: 'Documents: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Documents object by its primary key (id)',
  operationId: 'documents_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DocumentSchema },
        'text/json': { schema: DocumentSchema },
        'text/plain': { schema: DocumentSchema },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
  },
})

export const deleteDocumentsIdRoute = createRoute({
  method: 'delete',
  path: '/Documents/{id}',
  tags: ['Documents'],
  summary: 'Documents: Delete by Id',
  description:
    'Permantly delete a document from the Ooxml Automation API. Note that is does not make changes to the related Presalytics APIs.\r\nPlease use the delete endpoint in the story API to ensure that stories are not left with orphaned references to the Ooxml Automation API.',
  operationId: 'documents_delete_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const getGroupsChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Groups/ChildObjects/{id}',
  tags: ['Groups'],
  summary: 'Slides: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'slides_groups_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getGroupsDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Groups/Details/{id}',
  tags: ['Groups'],
  summary: 'Slides: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'slides_groups_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGroupsDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getGroupsOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Groups/OpenOfficeXml/{id}',
  tags: ['Groups'],
  summary: 'Slides: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.',
  operationId: 'slides_groups_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putGroupsOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Groups/OpenOfficeXml/{id}',
  tags: ['Groups'],
  summary: 'Slides: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.',
  operationId: 'slides_groups_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getGroupsSvgIdRoute = createRoute({
  method: 'get',
  path: '/Groups/Svg/{id}',
  tags: ['Groups'],
  summary: 'Slides: Get Svg file',
  description:
    'This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'slides_groups_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getGroupsIdRoute = createRoute({
  method: 'get',
  path: '/Groups/{id}',
  tags: ['Groups'],
  summary: 'Groups: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Groups object by its primary key (id)',
  operationId: 'slides_groups_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SlideGroupsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getImagesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Images/ChildObjects/{id}',
  tags: ['Images'],
  summary: 'Shared: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Shared and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'shared_images_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getImagesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Images/Details/{id}',
  tags: ['Images'],
  summary: 'Shared: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'shared_images_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedPicturesDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putImagesGetImageIdRoute = createRoute({
  method: 'put',
  path: '/Images/GetImage/{Id}',
  tags: ['Images'],
  summary: 'Image: Download Image',
  description: 'Download Images extracted from Ooxml Documents',
  operationId: 'shared_images_getimage_put_id',
  request: {
    params: z.object({
      Id: z
        .uuid()
        .openapi({
          param: {
            description: 'The Image Id',
            in: 'path',
            name: 'Id',
            required: true,
            schema: { description: 'The Image Id', format: 'uuid', type: 'string' },
          },
          description: 'The Image Id',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    504: { description: 'Server Error' },
  },
})

export const getImagesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Images/OpenOfficeXml/{id}',
  tags: ['Images'],
  summary: 'Shared: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Shared object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Shared objects.',
  operationId: 'shared_images_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putImagesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Images/OpenOfficeXml/{id}',
  tags: ['Images'],
  summary: 'Shared: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Shared object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Shared objects.',
  operationId: 'shared_images_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getImagesSvgIdRoute = createRoute({
  method: 'get',
  path: '/Images/Svg/{id}',
  tags: ['Images'],
  summary: 'Shared: Get Svg file',
  description:
    'This endpoint is helpful for rending this Shared as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'shared_images_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getImagesIdRoute = createRoute({
  method: 'get',
  path: '/Images/{id}',
  tags: ['Images'],
  summary: 'Images: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Images object by its primary key (id)',
  operationId: 'shared_images_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedPicturesSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getShapeTreesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/ShapeTrees/ChildObjects/{id}',
  tags: ['ShapeTrees'],
  summary: 'Slides: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'slides_shapetrees_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getShapeTreesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/ShapeTrees/Details/{id}',
  tags: ['ShapeTrees'],
  summary: 'Slides: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'slides_shapetrees_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideShapeTreesDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getShapeTreesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/ShapeTrees/OpenOfficeXml/{id}',
  tags: ['ShapeTrees'],
  summary: 'Slides: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.',
  operationId: 'slides_shapetrees_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putShapeTreesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/ShapeTrees/OpenOfficeXml/{id}',
  tags: ['ShapeTrees'],
  summary: 'Slides: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.',
  operationId: 'slides_shapetrees_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getShapeTreesSvgIdRoute = createRoute({
  method: 'get',
  path: '/ShapeTrees/Svg/{id}',
  tags: ['ShapeTrees'],
  summary: 'Slides: Get Svg file',
  description:
    'This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'slides_shapetrees_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getShapeTreesIdRoute = createRoute({
  method: 'get',
  path: '/ShapeTrees/{id}',
  tags: ['ShapeTrees'],
  summary: 'ShapeTrees: Get by Id',
  description: 'Get by Id: Use this method to retrieve a ShapeTrees object by its primary key (id)',
  operationId: 'slides_shapetrees_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideShapeTreesSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getShapesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Shapes/ChildObjects/{id}',
  tags: ['Shapes'],
  summary: 'Slides: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'slides_shapes_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getShapesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Shapes/Details/{id}',
  tags: ['Shapes'],
  summary: 'Slides: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'slides_shapes_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideShapesDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getShapesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Shapes/OpenOfficeXml/{id}',
  tags: ['Shapes'],
  summary: 'Slides: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.',
  operationId: 'slides_shapes_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putShapesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Shapes/OpenOfficeXml/{id}',
  tags: ['Shapes'],
  summary: 'Slides: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.',
  operationId: 'slides_shapes_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getShapesSvgIdRoute = createRoute({
  method: 'get',
  path: '/Shapes/Svg/{id}',
  tags: ['Shapes'],
  summary: 'Slides: Get Svg file',
  description:
    'This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'slides_shapes_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getShapesIdRoute = createRoute({
  method: 'get',
  path: '/Shapes/{id}',
  tags: ['Shapes'],
  summary: 'Shapes: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Shapes object by its primary key (id)',
  operationId: 'slides_shapes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SlideShapesSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedColorTransformationAttributesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/ColorTransformationAttributes/{id}',
  tags: ['Shared/ColorTransformationAttributes'],
  summary: 'ColorTransformationAttributes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a ColorTransformationAttributes object by its primary key (id)',
  operationId: 'shared_colortransformationattributes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedColorTransformationAttributesSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedColorTransformationsIdRoute = createRoute({
  method: 'get',
  path: '/Shared/ColorTransformations/{id}',
  tags: ['Shared/ColorTransformations'],
  summary: 'ColorTransformations: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a ColorTransformations object by its primary key (id)',
  operationId: 'shared_colortransformations_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedColorTransformationsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedColorTypesRoute = createRoute({
  method: 'get',
  path: '/Shared/ColorTypes',
  tags: ['Shared/ColorTypes'],
  summary: 'ColorTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the ColorTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.',
  operationId: 'shared_colortypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SharedColorTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedColorTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Shared/ColorTypes/TypeId/{type_id}',
  tags: ['Shared/ColorTypes'],
  summary: 'ColorTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'shared_colortypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedColorTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedColorTypesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/ColorTypes/{id}',
  tags: ['Shared/ColorTypes'],
  summary: 'ColorTypes: Get by Id',
  description: 'Get by Id: Use this method to retrieve a ColorTypes object by its primary key (id)',
  operationId: 'shared_colortypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedColorTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedDashTypesRoute = createRoute({
  method: 'get',
  path: '/Shared/DashTypes',
  tags: ['Shared/DashTypes'],
  summary: 'DashTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the DashTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.',
  operationId: 'shared_dashtypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SharedDashTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedDashTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Shared/DashTypes/TypeId/{type_id}',
  tags: ['Shared/DashTypes'],
  summary: 'DashTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'shared_dashtypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedDashTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedDashTypesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/DashTypes/{id}',
  tags: ['Shared/DashTypes'],
  summary: 'DashTypes: Get by Id',
  description: 'Get by Id: Use this method to retrieve a DashTypes object by its primary key (id)',
  operationId: 'shared_dashtypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedDashTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedEffectAttributesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/EffectAttributes/{id}',
  tags: ['Shared/EffectAttributes'],
  summary: 'EffectAttributes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a EffectAttributes object by its primary key (id)',
  operationId: 'shared_effectattributes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedEffectAttributesSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedEffectTypesRoute = createRoute({
  method: 'get',
  path: '/Shared/EffectTypes',
  tags: ['Shared/EffectTypes'],
  summary: 'EffectTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the EffectTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.',
  operationId: 'shared_effecttypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SharedEffectTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedEffectTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Shared/EffectTypes/TypeId/{type_id}',
  tags: ['Shared/EffectTypes'],
  summary: 'EffectTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'shared_effecttypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedEffectTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedEffectTypesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/EffectTypes/{id}',
  tags: ['Shared/EffectTypes'],
  summary: 'EffectTypes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a EffectTypes object by its primary key (id)',
  operationId: 'shared_effecttypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedEffectTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedEffectsIdRoute = createRoute({
  method: 'get',
  path: '/Shared/Effects/{id}',
  tags: ['Shared/Effects'],
  summary: 'Effects: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Effects object by its primary key (id)',
  operationId: 'shared_effects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedEffectsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedFillMapIdRoute = createRoute({
  method: 'get',
  path: '/Shared/FillMap/{id}',
  tags: ['Shared/FillMap'],
  summary: 'FillMap: Get by Id',
  description: 'Get by Id: Use this method to retrieve a FillMap object by its primary key (id)',
  operationId: 'shared_fillmap_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedFillMapSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedFillTypesRoute = createRoute({
  method: 'get',
  path: '/Shared/FillTypes',
  tags: ['Shared/FillTypes'],
  summary: 'FillTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the FillTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.',
  operationId: 'shared_filltypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SharedFillTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedFillTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Shared/FillTypes/TypeId/{type_id}',
  tags: ['Shared/FillTypes'],
  summary: 'FillTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'shared_filltypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedFillTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedFillTypesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/FillTypes/{id}',
  tags: ['Shared/FillTypes'],
  summary: 'FillTypes: Get by Id',
  description: 'Get by Id: Use this method to retrieve a FillTypes object by its primary key (id)',
  operationId: 'shared_filltypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedFillTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedGradientFillsIdRoute = createRoute({
  method: 'get',
  path: '/Shared/GradientFills/{id}',
  tags: ['Shared/GradientFills'],
  summary: 'GradientFills: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a GradientFills object by its primary key (id)',
  operationId: 'shared_gradientfills_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedGradientFillsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedGradientStopsIdRoute = createRoute({
  method: 'get',
  path: '/Shared/GradientStops/{id}',
  tags: ['Shared/GradientStops'],
  summary: 'GradientStops: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a GradientStops object by its primary key (id)',
  operationId: 'shared_gradientstops_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedGradientStopsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedImageFillsIdRoute = createRoute({
  method: 'get',
  path: '/Shared/ImageFills/{id}',
  tags: ['Shared/ImageFills'],
  summary: 'ImageFills: Get by Id',
  description: 'Get by Id: Use this method to retrieve a ImageFills object by its primary key (id)',
  operationId: 'shared_imagefills_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedImageFillsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLineEndSizesRoute = createRoute({
  method: 'get',
  path: '/Shared/LineEndSizes',
  tags: ['Shared/LineEndSizes'],
  summary: 'LineEndSizes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the LineEndSizes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.',
  operationId: 'shared_lineendsizes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SharedLineEndSizesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLineEndSizesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Shared/LineEndSizes/TypeId/{type_id}',
  tags: ['Shared/LineEndSizes'],
  summary: 'LineEndSizes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'shared_lineendsizes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedLineEndSizesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLineEndSizesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/LineEndSizes/{id}',
  tags: ['Shared/LineEndSizes'],
  summary: 'LineEndSizes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a LineEndSizes object by its primary key (id)',
  operationId: 'shared_lineendsizes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedLineEndSizesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLineEndTypesRoute = createRoute({
  method: 'get',
  path: '/Shared/LineEndTypes',
  tags: ['Shared/LineEndTypes'],
  summary: 'LineEndTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the LineEndTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.',
  operationId: 'shared_lineendtypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SharedLineEndTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLineEndTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Shared/LineEndTypes/TypeId/{type_id}',
  tags: ['Shared/LineEndTypes'],
  summary: 'LineEndTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'shared_lineendtypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedLineEndTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLineEndTypesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/LineEndTypes/{id}',
  tags: ['Shared/LineEndTypes'],
  summary: 'LineEndTypes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a LineEndTypes object by its primary key (id)',
  operationId: 'shared_lineendtypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedLineEndTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedLinesIdRoute = createRoute({
  method: 'get',
  path: '/Shared/Lines/{id}',
  tags: ['Shared/Lines'],
  summary: 'Lines: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Lines object by its primary key (id)',
  operationId: 'shared_lines_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SharedLinesSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedParagraphIdRoute = createRoute({
  method: 'get',
  path: '/Shared/Paragraph/{id}',
  tags: ['Shared/Paragraph'],
  summary: 'Paragraph: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Paragraph object by its primary key (id)',
  operationId: 'shared_paragraph_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedParagraphSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedSolidFillsIdRoute = createRoute({
  method: 'get',
  path: '/Shared/SolidFills/{id}',
  tags: ['Shared/SolidFills'],
  summary: 'SolidFills: Get by Id',
  description: 'Get by Id: Use this method to retrieve a SolidFills object by its primary key (id)',
  operationId: 'shared_solidfills_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedSolidFillsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedTextIdRoute = createRoute({
  method: 'get',
  path: '/Shared/Text/{id}',
  tags: ['Shared/Text'],
  summary: 'Text: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Text object by its primary key (id)',
  operationId: 'shared_text_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SharedTextSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getSharedTextContainerIdRoute = createRoute({
  method: 'get',
  path: '/Shared/TextContainer/{id}',
  tags: ['Shared/TextContainer'],
  summary: 'TextContainer: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a TextContainer object by its primary key (id)',
  operationId: 'shared_textcontainer_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SharedTextContainerSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Slides/ChildObjects/{id}',
  tags: ['Slides'],
  summary: 'Slides: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'slides_slides_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getSlidesColorMapsIdRoute = createRoute({
  method: 'get',
  path: '/Slides/ColorMaps/{id}',
  tags: ['Slides/ColorMaps'],
  summary: 'ColorMaps: Get by Id',
  description: 'Get by Id: Use this method to retrieve a ColorMaps object by its primary key (id)',
  operationId: 'slides_colormaps_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideColorMapsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Slides/Details/{id}',
  tags: ['Slides'],
  summary: 'Slides: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'slides_slides_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideSlidesDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGraphicTypesRoute = createRoute({
  method: 'get',
  path: '/Slides/GraphicTypes',
  tags: ['Slides/GraphicTypes'],
  summary: 'GraphicTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the GraphicTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.',
  operationId: 'slides_graphictypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SlideGraphicTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGraphicTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Slides/GraphicTypes/TypeId/{type_id}',
  tags: ['Slides/GraphicTypes'],
  summary: 'GraphicTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'slides_graphictypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGraphicTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGraphicTypesIdRoute = createRoute({
  method: 'get',
  path: '/Slides/GraphicTypes/{id}',
  tags: ['Slides/GraphicTypes'],
  summary: 'GraphicTypes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a GraphicTypes object by its primary key (id)',
  operationId: 'slides_graphictypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGraphicTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGraphicsIdRoute = createRoute({
  method: 'get',
  path: '/Slides/Graphics/{id}',
  tags: ['Slides/Graphics'],
  summary: 'Graphics: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Graphics object by its primary key (id)',
  operationId: 'slides_graphics_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGraphicsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGroupElementTypesRoute = createRoute({
  method: 'get',
  path: '/Slides/GroupElementTypes',
  tags: ['Slides/GroupElementTypes'],
  summary: 'GroupElementTypes: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the GroupElementTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.',
  operationId: 'slides_groupelementtypes_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SlideGroupElementTypesSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGroupElementTypesTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Slides/GroupElementTypes/TypeId/{type_id}',
  tags: ['Slides/GroupElementTypes'],
  summary: 'GroupElementTypes: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'slides_groupelementtypes_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGroupElementTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGroupElementTypesIdRoute = createRoute({
  method: 'get',
  path: '/Slides/GroupElementTypes/{id}',
  tags: ['Slides/GroupElementTypes'],
  summary: 'GroupElementTypes: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a GroupElementTypes object by its primary key (id)',
  operationId: 'slides_groupelementtypes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGroupElementTypesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesGroupElementsIdRoute = createRoute({
  method: 'get',
  path: '/Slides/GroupElements/{id}',
  tags: ['Slides/GroupElements'],
  summary: 'GroupElements: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a GroupElements object by its primary key (id)',
  operationId: 'slides_groupelements_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideGroupElementsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Slides/OpenOfficeXml/{id}',
  tags: ['Slides'],
  summary: 'Slides: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.',
  operationId: 'slides_slides_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putSlidesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Slides/OpenOfficeXml/{id}',
  tags: ['Slides'],
  summary: 'Slides: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.',
  operationId: 'slides_slides_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getSlidesSlideMastersIdRoute = createRoute({
  method: 'get',
  path: '/Slides/SlideMasters/{id}',
  tags: ['Slides/SlideMasters'],
  summary: 'SlideMasters: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a SlideMasters object by its primary key (id)',
  operationId: 'slides_slidemasters_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideSlideMastersSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSlidesSvgIdRoute = createRoute({
  method: 'get',
  path: '/Slides/Svg/{id}',
  tags: ['Slides'],
  summary: 'Slides: Get Svg file',
  description:
    'This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'slides_slides_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getSlidesIdRoute = createRoute({
  method: 'get',
  path: '/Slides/{id}',
  tags: ['Slides'],
  summary: 'Slides: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Slides object by its primary key (id)',
  operationId: 'slides_slides_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SlideSlidesSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getSmartArtsChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/SmartArts/ChildObjects/{id}',
  tags: ['SmartArts'],
  summary: 'Slides: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'slides_smartarts_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getSmartArtsDetailsIdRoute = createRoute({
  method: 'get',
  path: '/SmartArts/Details/{id}',
  tags: ['SmartArts'],
  summary: 'Slides: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'slides_smartarts_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideSmartArtsDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getSmartArtsOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/SmartArts/OpenOfficeXml/{id}',
  tags: ['SmartArts'],
  summary: 'Slides: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.',
  operationId: 'slides_smartarts_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putSmartArtsOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/SmartArts/OpenOfficeXml/{id}',
  tags: ['SmartArts'],
  summary: 'Slides: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.',
  operationId: 'slides_smartarts_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getSmartArtsSvgIdRoute = createRoute({
  method: 'get',
  path: '/SmartArts/Svg/{id}',
  tags: ['SmartArts'],
  summary: 'Slides: Get Svg file',
  description:
    'This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'slides_smartarts_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getSmartArtsIdRoute = createRoute({
  method: 'get',
  path: '/SmartArts/{id}',
  tags: ['SmartArts'],
  summary: 'SmartArts: Get by Id',
  description: 'Get by Id: Use this method to retrieve a SmartArts object by its primary key (id)',
  operationId: 'slides_smartarts_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SlideSmartArtsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getTablesBordersIdRoute = createRoute({
  method: 'get',
  path: '/Tables/Borders/{id}',
  tags: ['Tables/Borders'],
  summary: 'Borders: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Borders object by its primary key (id)',
  operationId: 'tables_borders_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TableBordersSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getTablesCellsIdRoute = createRoute({
  method: 'get',
  path: '/Tables/Cells/{id}',
  tags: ['Tables/Cells'],
  summary: 'Cells: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Cells object by its primary key (id)',
  operationId: 'tables_cells_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TableCellsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getTablesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Tables/ChildObjects/{id}',
  tags: ['Tables'],
  summary: 'Tables: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Table and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'tables_tables_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getTablesColumnsIdRoute = createRoute({
  method: 'get',
  path: '/Tables/Columns/{id}',
  tags: ['Tables/Columns'],
  summary: 'Columns: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Columns object by its primary key (id)',
  operationId: 'tables_columns_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TableColumnsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getTablesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Tables/Details/{id}',
  tags: ['Tables'],
  summary: 'Tables: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'tables_tables_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TableTablesDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getTablesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Tables/OpenOfficeXml/{id}',
  tags: ['Tables'],
  summary: 'Tables: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Table object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Table objects.',
  operationId: 'tables_tables_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putTablesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Tables/OpenOfficeXml/{id}',
  tags: ['Tables'],
  summary: 'Tables: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Table object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Table objects.',
  operationId: 'tables_tables_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getTablesRowsIdRoute = createRoute({
  method: 'get',
  path: '/Tables/Rows/{id}',
  tags: ['Tables/Rows'],
  summary: 'Rows: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Rows object by its primary key (id)',
  operationId: 'tables_rows_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TableRowsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getTablesSvgIdRoute = createRoute({
  method: 'get',
  path: '/Tables/Svg/{id}',
  tags: ['Tables'],
  summary: 'Tables: Get Svg file',
  description:
    'This endpoint is helpful for rending this Table as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'tables_tables_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getTablesTableUpdateIdRoute = createRoute({
  method: 'get',
  path: '/Tables/TableUpdate/{id}',
  tags: ['Tables'],
  summary: 'Table: Get Table Data',
  description: 'Gets a TabletDataDTO object, usually used for downstream updates to table content',
  operationId: 'tables_tables_tableupdate_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TableTableDataDTOSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putTablesTableUpdateIdRoute = createRoute({
  method: 'put',
  path: '/Tables/TableUpdate/{id}',
  tags: ['Tables'],
  summary: 'Tables: Update Table Data',
  description:
    'Simplifies table update by allowing users to supply strings to table cells  via TableDataDTO',
  operationId: 'tables_tables_tableupdate_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: '',
      content: {
        'application/*+json': { schema: TableTableDataDTOSchema },
        'application/json': { schema: TableTableDataDTOSchema },
        'application/json-patch+json': { schema: TableTableDataDTOSchema },
        'text/json': { schema: TableTableDataDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getTablesIdRoute = createRoute({
  method: 'get',
  path: '/Tables/{id}',
  tags: ['Tables'],
  summary: 'Tables: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Tables object by its primary key (id)',
  operationId: 'tables_tables_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TableTablesSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesBackgroundFillsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/BackgroundFills/{id}',
  tags: ['Themes/BackgroundFills'],
  summary: 'BackgroundFills: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a BackgroundFills object by its primary key (id)',
  operationId: 'themes_backgroundfills_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeBackgroundFillsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesChildObjectsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/ChildObjects/{id}',
  tags: ['Themes'],
  summary: 'Theme: Get Dependent Objects Tree',
  description:
    'This endpoint is helpful for helping users and bots identify dependent objects to this Theme and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.',
  operationId: 'theme_themes_childobjects_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChildObjectsSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getThemesColorsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Colors/{id}',
  tags: ['Themes/Colors'],
  summary: 'Colors: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Colors object by its primary key (id)',
  operationId: 'themes_colors_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ThemeColorsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesCustomColorsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/CustomColors/{id}',
  tags: ['Themes/CustomColors'],
  summary: 'CustomColors: Get by Id',
  description:
    'Get by Id: Use this method to retrieve a CustomColors object by its primary key (id)',
  operationId: 'themes_customcolors_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeCustomColorsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesDetailsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Details/{id}',
  tags: ['Themes'],
  summary: 'Theme: Get Details',
  description: 'Returns object metadata and information about relative dependent objects ',
  operationId: 'theme_themes_details_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeThemesDetailsSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesEffectMapIdRoute = createRoute({
  method: 'get',
  path: '/Themes/EffectMap/{id}',
  tags: ['Themes/EffectMap'],
  summary: 'EffectMap: Get by Id',
  description: 'Get by Id: Use this method to retrieve a EffectMap object by its primary key (id)',
  operationId: 'themes_effectmap_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeEffectMapSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesFillsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Fills/{id}',
  tags: ['Themes/Fills'],
  summary: 'Fills: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Fills object by its primary key (id)',
  operationId: 'themes_fills_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ThemeFillsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesFontsIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Fonts/{id}',
  tags: ['Themes/Fonts'],
  summary: 'Fonts: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Fonts object by its primary key (id)',
  operationId: 'themes_fonts_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ThemeFontsSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesIntensityRoute = createRoute({
  method: 'get',
  path: '/Themes/Intensity',
  tags: ['Themes/Intensity'],
  summary: 'Intensity: List All Possible Types',
  description:
    'List Types: Use this method to retreive a list of possible options for the Intensity type. Use the Id from oneof the returned elements on to make changes to elements in the Themes object space.',
  operationId: 'themes_intensity_get',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ThemeIntensitySchema) } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesIntensityTypeIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Intensity/TypeId/{type_id}',
  tags: ['Themes/Intensity'],
  summary: 'Intensity: Get By Type Id',
  description:
    'This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.',
  operationId: 'themes_intensity_typeid_get_type_id',
  request: {
    params: z.object({
      type_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'type_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeIntensitySchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesIntensityIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Intensity/{id}',
  tags: ['Themes/Intensity'],
  summary: 'Intensity: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Intensity object by its primary key (id)',
  operationId: 'themes_intensity_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', format: 'uuid', type: 'string' },
          },
          description: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeIntensitySchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesLineMapIdRoute = createRoute({
  method: 'get',
  path: '/Themes/LineMap/{id}',
  tags: ['Themes/LineMap'],
  summary: 'LineMap: Get by Id',
  description: 'Get by Id: Use this method to retrieve a LineMap object by its primary key (id)',
  operationId: 'themes_linemap_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeLineMapSchema } },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getThemesOpenOfficeXmlIdRoute = createRoute({
  method: 'get',
  path: '/Themes/OpenOfficeXml/{id}',
  tags: ['Themes'],
  summary: 'Theme: Get Underlying Xml',
  description:
    'Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Theme object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Theme objects.',
  operationId: 'theme_themes_openofficexml_get_id_updated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      updated: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)',
            in: 'query',
            name: 'updated',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: OoxmlDTOSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const putThemesOpenOfficeXmlIdRoute = createRoute({
  method: 'put',
  path: '/Themes/OpenOfficeXml/{id}',
  tags: ['Themes'],
  summary: 'Theme: Modify Underlying Xml',
  description:
    'Directly eidt the underlying xml of a Theme object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Theme objects.',
  operationId: 'theme_themes_openofficexml_put_id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/*+json': { schema: OoxmlDTOSchema },
        'application/json': { schema: OoxmlDTOSchema },
        'application/json-patch+json': { schema: OoxmlDTOSchema },
        'text/json': { schema: OoxmlDTOSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getThemesSvgIdRoute = createRoute({
  method: 'get',
  path: '/Themes/Svg/{id}',
  tags: ['Themes'],
  summary: 'Theme: Get Svg file',
  description:
    'This endpoint is helpful for rending this Theme as an svg or image object that can then be rendered in a story, dashboard or website.',
  operationId: 'theme_themes_svg_get_id_use_cache',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      use_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)',
            in: 'query',
            name: 'use_cache',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an svg formatted-image of this object.',
      content: {
        'image/svg+xml': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'The file byte stream.',
              title: 'Svg byte stream',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getThemesIdRoute = createRoute({
  method: 'get',
  path: '/Themes/{id}',
  tags: ['Themes'],
  summary: 'Themes: Get by Id',
  description: 'Get by Id: Use this method to retrieve a Themes object by its primary key (id)',
  operationId: 'theme_themes_get_id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'An Id of the respository DTO elemennt',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'An Id of the respository DTO elemennt',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'An Id of the respository DTO elemennt',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ThemeThemesSchema } } },
    401: { description: 'Unauthorized' },
  },
})
