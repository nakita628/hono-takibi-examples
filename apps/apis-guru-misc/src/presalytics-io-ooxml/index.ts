import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chartsAxesHandler,
  chartsAxisDataTypesHandler,
  chartsChartDataHandler,
  chartsColumnCollectionsHandler,
  chartsColumnsHandler,
  chartsDataPointsHandler,
  chartsHandler,
  chartsPlotTypeHandler,
  chartsRowColHandler,
  chartsRowCollectionsHandler,
  chartsRowNameFormatTypesHandler,
  chartsRowsHandler,
  connectionShapesHandler,
  documentsDocumentTypeHandler,
  documentsHandler,
  groupsHandler,
  imagesHandler,
  shapesHandler,
  shapeTreesHandler,
  sharedColorTransformationAttributesHandler,
  sharedColorTransformationsHandler,
  sharedColorTypesHandler,
  sharedDashTypesHandler,
  sharedEffectAttributesHandler,
  sharedEffectsHandler,
  sharedEffectTypesHandler,
  sharedFillMapHandler,
  sharedFillTypesHandler,
  sharedGradientFillsHandler,
  sharedGradientStopsHandler,
  sharedImageFillsHandler,
  sharedLineEndSizesHandler,
  sharedLineEndTypesHandler,
  sharedLinesHandler,
  sharedParagraphHandler,
  sharedSolidFillsHandler,
  sharedTextContainerHandler,
  sharedTextHandler,
  slidesColorMapsHandler,
  slidesGraphicsHandler,
  slidesGraphicTypesHandler,
  slidesGroupElementsHandler,
  slidesGroupElementTypesHandler,
  slidesHandler,
  slidesSlideMastersHandler,
  smartArtsHandler,
  tablesBordersHandler,
  tablesCellsHandler,
  tablesColumnsHandler,
  tablesHandler,
  tablesRowsHandler,
  themesBackgroundFillsHandler,
  themesColorsHandler,
  themesCustomColorsHandler,
  themesEffectMapHandler,
  themesFillsHandler,
  themesFontsHandler,
  themesHandler,
  themesIntensityHandler,
  themesLineMapHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chartsAxesHandler)
  .route('/', chartsAxisDataTypesHandler)
  .route('/', chartsChartDataHandler)
  .route('/', chartsHandler)
  .route('/', chartsColumnCollectionsHandler)
  .route('/', chartsColumnsHandler)
  .route('/', chartsDataPointsHandler)
  .route('/', chartsPlotTypeHandler)
  .route('/', chartsRowColHandler)
  .route('/', chartsRowCollectionsHandler)
  .route('/', chartsRowNameFormatTypesHandler)
  .route('/', chartsRowsHandler)
  .route('/', connectionShapesHandler)
  .route('/', documentsHandler)
  .route('/', documentsDocumentTypeHandler)
  .route('/', groupsHandler)
  .route('/', imagesHandler)
  .route('/', shapeTreesHandler)
  .route('/', shapesHandler)
  .route('/', sharedColorTransformationAttributesHandler)
  .route('/', sharedColorTransformationsHandler)
  .route('/', sharedColorTypesHandler)
  .route('/', sharedDashTypesHandler)
  .route('/', sharedEffectAttributesHandler)
  .route('/', sharedEffectTypesHandler)
  .route('/', sharedEffectsHandler)
  .route('/', sharedFillMapHandler)
  .route('/', sharedFillTypesHandler)
  .route('/', sharedGradientFillsHandler)
  .route('/', sharedGradientStopsHandler)
  .route('/', sharedImageFillsHandler)
  .route('/', sharedLineEndSizesHandler)
  .route('/', sharedLineEndTypesHandler)
  .route('/', sharedLinesHandler)
  .route('/', sharedParagraphHandler)
  .route('/', sharedSolidFillsHandler)
  .route('/', sharedTextHandler)
  .route('/', sharedTextContainerHandler)
  .route('/', slidesHandler)
  .route('/', slidesColorMapsHandler)
  .route('/', slidesGraphicTypesHandler)
  .route('/', slidesGraphicsHandler)
  .route('/', slidesGroupElementTypesHandler)
  .route('/', slidesGroupElementsHandler)
  .route('/', slidesSlideMastersHandler)
  .route('/', smartArtsHandler)
  .route('/', tablesBordersHandler)
  .route('/', tablesCellsHandler)
  .route('/', tablesHandler)
  .route('/', tablesColumnsHandler)
  .route('/', tablesRowsHandler)
  .route('/', themesBackgroundFillsHandler)
  .route('/', themesHandler)
  .route('/', themesColorsHandler)
  .route('/', themesCustomColorsHandler)
  .route('/', themesEffectMapHandler)
  .route('/', themesFillsHandler)
  .route('/', themesFontsHandler)
  .route('/', themesIntensityHandler)
  .route('/', themesLineMapHandler)

export default app
