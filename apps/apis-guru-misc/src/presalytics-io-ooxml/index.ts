import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdRoute,
  getChartsAxesIdRoute,
  getChartsAxisDataTypesIdRoute,
  getChartsAxisDataTypesRoute,
  getChartsAxisDataTypesTypeIdTypeIdRoute,
  getChartsChartDataIdRoute,
  getChartsChartUpdateIdRoute,
  getChartsChildObjectsIdRoute,
  getChartsColumnCollectionsIdRoute,
  getChartsColumnsIdRoute,
  getChartsDataPointsIdRoute,
  getChartsDetailsIdRoute,
  getChartsIdRoute,
  getChartsOpenOfficeXmlIdRoute,
  getChartsPlotTypeIdRoute,
  getChartsPlotTypeRoute,
  getChartsPlotTypeTypeIdTypeIdRoute,
  getChartsRowColIdRoute,
  getChartsRowCollectionsIdRoute,
  getChartsRowColRoute,
  getChartsRowColTypeIdTypeIdRoute,
  getChartsRowNameFormatTypesIdRoute,
  getChartsRowNameFormatTypesRoute,
  getChartsRowNameFormatTypesTypeIdTypeIdRoute,
  getChartsRowsIdRoute,
  getChartsSvgIdRoute,
  getConnectionShapesChildObjectsIdRoute,
  getConnectionShapesDetailsIdRoute,
  getConnectionShapesIdRoute,
  getConnectionShapesOpenOfficeXmlIdRoute,
  getConnectionShapesSvgIdRoute,
  getDocumentsChildObjectsIdRoute,
  getDocumentsDocumentTypeIdRoute,
  getDocumentsDocumentTypeRoute,
  getDocumentsDocumentTypeTypeIdTypeIdRoute,
  getDocumentsDownloadIdRoute,
  getDocumentsIdRoute,
  getGroupsChildObjectsIdRoute,
  getGroupsDetailsIdRoute,
  getGroupsIdRoute,
  getGroupsOpenOfficeXmlIdRoute,
  getGroupsSvgIdRoute,
  getImagesChildObjectsIdRoute,
  getImagesDetailsIdRoute,
  getImagesIdRoute,
  getImagesOpenOfficeXmlIdRoute,
  getImagesSvgIdRoute,
  getShapesChildObjectsIdRoute,
  getShapesDetailsIdRoute,
  getShapesIdRoute,
  getShapesOpenOfficeXmlIdRoute,
  getShapesSvgIdRoute,
  getShapeTreesChildObjectsIdRoute,
  getShapeTreesDetailsIdRoute,
  getShapeTreesIdRoute,
  getShapeTreesOpenOfficeXmlIdRoute,
  getShapeTreesSvgIdRoute,
  getSharedColorTransformationAttributesIdRoute,
  getSharedColorTransformationsIdRoute,
  getSharedColorTypesIdRoute,
  getSharedColorTypesRoute,
  getSharedColorTypesTypeIdTypeIdRoute,
  getSharedDashTypesIdRoute,
  getSharedDashTypesRoute,
  getSharedDashTypesTypeIdTypeIdRoute,
  getSharedEffectAttributesIdRoute,
  getSharedEffectsIdRoute,
  getSharedEffectTypesIdRoute,
  getSharedEffectTypesRoute,
  getSharedEffectTypesTypeIdTypeIdRoute,
  getSharedFillMapIdRoute,
  getSharedFillTypesIdRoute,
  getSharedFillTypesRoute,
  getSharedFillTypesTypeIdTypeIdRoute,
  getSharedGradientFillsIdRoute,
  getSharedGradientStopsIdRoute,
  getSharedImageFillsIdRoute,
  getSharedLineEndSizesIdRoute,
  getSharedLineEndSizesRoute,
  getSharedLineEndSizesTypeIdTypeIdRoute,
  getSharedLineEndTypesIdRoute,
  getSharedLineEndTypesRoute,
  getSharedLineEndTypesTypeIdTypeIdRoute,
  getSharedLinesIdRoute,
  getSharedParagraphIdRoute,
  getSharedSolidFillsIdRoute,
  getSharedTextContainerIdRoute,
  getSharedTextIdRoute,
  getSlidesChildObjectsIdRoute,
  getSlidesColorMapsIdRoute,
  getSlidesDetailsIdRoute,
  getSlidesGraphicsIdRoute,
  getSlidesGraphicTypesIdRoute,
  getSlidesGraphicTypesRoute,
  getSlidesGraphicTypesTypeIdTypeIdRoute,
  getSlidesGroupElementsIdRoute,
  getSlidesGroupElementTypesIdRoute,
  getSlidesGroupElementTypesRoute,
  getSlidesGroupElementTypesTypeIdTypeIdRoute,
  getSlidesIdRoute,
  getSlidesOpenOfficeXmlIdRoute,
  getSlidesSlideMastersIdRoute,
  getSlidesSvgIdRoute,
  getSmartArtsChildObjectsIdRoute,
  getSmartArtsDetailsIdRoute,
  getSmartArtsIdRoute,
  getSmartArtsOpenOfficeXmlIdRoute,
  getSmartArtsSvgIdRoute,
  getTablesBordersIdRoute,
  getTablesCellsIdRoute,
  getTablesChildObjectsIdRoute,
  getTablesColumnsIdRoute,
  getTablesDetailsIdRoute,
  getTablesIdRoute,
  getTablesOpenOfficeXmlIdRoute,
  getTablesRowsIdRoute,
  getTablesSvgIdRoute,
  getTablesTableUpdateIdRoute,
  getThemesBackgroundFillsIdRoute,
  getThemesChildObjectsIdRoute,
  getThemesColorsIdRoute,
  getThemesCustomColorsIdRoute,
  getThemesDetailsIdRoute,
  getThemesEffectMapIdRoute,
  getThemesFillsIdRoute,
  getThemesFontsIdRoute,
  getThemesIdRoute,
  getThemesIntensityIdRoute,
  getThemesIntensityRoute,
  getThemesIntensityTypeIdTypeIdRoute,
  getThemesLineMapIdRoute,
  getThemesOpenOfficeXmlIdRoute,
  getThemesSvgIdRoute,
  postDocumentsCloneIdRoute,
  postDocumentsRoute,
  putChartsChartUpdateIdRoute,
  putChartsOpenOfficeXmlIdRoute,
  putConnectionShapesOpenOfficeXmlIdRoute,
  putGroupsOpenOfficeXmlIdRoute,
  putImagesGetImageIdRoute,
  putImagesOpenOfficeXmlIdRoute,
  putShapesOpenOfficeXmlIdRoute,
  putShapeTreesOpenOfficeXmlIdRoute,
  putSlidesOpenOfficeXmlIdRoute,
  putSmartArtsOpenOfficeXmlIdRoute,
  putTablesOpenOfficeXmlIdRoute,
  putTablesTableUpdateIdRoute,
  putThemesOpenOfficeXmlIdRoute,
} from './routes'
import {
  deleteDocumentsIdRouteHandler,
  getChartsAxesIdRouteHandler,
  getChartsAxisDataTypesIdRouteHandler,
  getChartsAxisDataTypesRouteHandler,
  getChartsAxisDataTypesTypeIdTypeIdRouteHandler,
  getChartsChartDataIdRouteHandler,
  getChartsChartUpdateIdRouteHandler,
  getChartsChildObjectsIdRouteHandler,
  getChartsColumnCollectionsIdRouteHandler,
  getChartsColumnsIdRouteHandler,
  getChartsDataPointsIdRouteHandler,
  getChartsDetailsIdRouteHandler,
  getChartsIdRouteHandler,
  getChartsOpenOfficeXmlIdRouteHandler,
  getChartsPlotTypeIdRouteHandler,
  getChartsPlotTypeRouteHandler,
  getChartsPlotTypeTypeIdTypeIdRouteHandler,
  getChartsRowColIdRouteHandler,
  getChartsRowCollectionsIdRouteHandler,
  getChartsRowColRouteHandler,
  getChartsRowColTypeIdTypeIdRouteHandler,
  getChartsRowNameFormatTypesIdRouteHandler,
  getChartsRowNameFormatTypesRouteHandler,
  getChartsRowNameFormatTypesTypeIdTypeIdRouteHandler,
  getChartsRowsIdRouteHandler,
  getChartsSvgIdRouteHandler,
  getConnectionShapesChildObjectsIdRouteHandler,
  getConnectionShapesDetailsIdRouteHandler,
  getConnectionShapesIdRouteHandler,
  getConnectionShapesOpenOfficeXmlIdRouteHandler,
  getConnectionShapesSvgIdRouteHandler,
  getDocumentsChildObjectsIdRouteHandler,
  getDocumentsDocumentTypeIdRouteHandler,
  getDocumentsDocumentTypeRouteHandler,
  getDocumentsDocumentTypeTypeIdTypeIdRouteHandler,
  getDocumentsDownloadIdRouteHandler,
  getDocumentsIdRouteHandler,
  getGroupsChildObjectsIdRouteHandler,
  getGroupsDetailsIdRouteHandler,
  getGroupsIdRouteHandler,
  getGroupsOpenOfficeXmlIdRouteHandler,
  getGroupsSvgIdRouteHandler,
  getImagesChildObjectsIdRouteHandler,
  getImagesDetailsIdRouteHandler,
  getImagesIdRouteHandler,
  getImagesOpenOfficeXmlIdRouteHandler,
  getImagesSvgIdRouteHandler,
  getShapesChildObjectsIdRouteHandler,
  getShapesDetailsIdRouteHandler,
  getShapesIdRouteHandler,
  getShapesOpenOfficeXmlIdRouteHandler,
  getShapesSvgIdRouteHandler,
  getShapeTreesChildObjectsIdRouteHandler,
  getShapeTreesDetailsIdRouteHandler,
  getShapeTreesIdRouteHandler,
  getShapeTreesOpenOfficeXmlIdRouteHandler,
  getShapeTreesSvgIdRouteHandler,
  getSharedColorTransformationAttributesIdRouteHandler,
  getSharedColorTransformationsIdRouteHandler,
  getSharedColorTypesIdRouteHandler,
  getSharedColorTypesRouteHandler,
  getSharedColorTypesTypeIdTypeIdRouteHandler,
  getSharedDashTypesIdRouteHandler,
  getSharedDashTypesRouteHandler,
  getSharedDashTypesTypeIdTypeIdRouteHandler,
  getSharedEffectAttributesIdRouteHandler,
  getSharedEffectsIdRouteHandler,
  getSharedEffectTypesIdRouteHandler,
  getSharedEffectTypesRouteHandler,
  getSharedEffectTypesTypeIdTypeIdRouteHandler,
  getSharedFillMapIdRouteHandler,
  getSharedFillTypesIdRouteHandler,
  getSharedFillTypesRouteHandler,
  getSharedFillTypesTypeIdTypeIdRouteHandler,
  getSharedGradientFillsIdRouteHandler,
  getSharedGradientStopsIdRouteHandler,
  getSharedImageFillsIdRouteHandler,
  getSharedLineEndSizesIdRouteHandler,
  getSharedLineEndSizesRouteHandler,
  getSharedLineEndSizesTypeIdTypeIdRouteHandler,
  getSharedLineEndTypesIdRouteHandler,
  getSharedLineEndTypesRouteHandler,
  getSharedLineEndTypesTypeIdTypeIdRouteHandler,
  getSharedLinesIdRouteHandler,
  getSharedParagraphIdRouteHandler,
  getSharedSolidFillsIdRouteHandler,
  getSharedTextContainerIdRouteHandler,
  getSharedTextIdRouteHandler,
  getSlidesChildObjectsIdRouteHandler,
  getSlidesColorMapsIdRouteHandler,
  getSlidesDetailsIdRouteHandler,
  getSlidesGraphicsIdRouteHandler,
  getSlidesGraphicTypesIdRouteHandler,
  getSlidesGraphicTypesRouteHandler,
  getSlidesGraphicTypesTypeIdTypeIdRouteHandler,
  getSlidesGroupElementsIdRouteHandler,
  getSlidesGroupElementTypesIdRouteHandler,
  getSlidesGroupElementTypesRouteHandler,
  getSlidesGroupElementTypesTypeIdTypeIdRouteHandler,
  getSlidesIdRouteHandler,
  getSlidesOpenOfficeXmlIdRouteHandler,
  getSlidesSlideMastersIdRouteHandler,
  getSlidesSvgIdRouteHandler,
  getSmartArtsChildObjectsIdRouteHandler,
  getSmartArtsDetailsIdRouteHandler,
  getSmartArtsIdRouteHandler,
  getSmartArtsOpenOfficeXmlIdRouteHandler,
  getSmartArtsSvgIdRouteHandler,
  getTablesBordersIdRouteHandler,
  getTablesCellsIdRouteHandler,
  getTablesChildObjectsIdRouteHandler,
  getTablesColumnsIdRouteHandler,
  getTablesDetailsIdRouteHandler,
  getTablesIdRouteHandler,
  getTablesOpenOfficeXmlIdRouteHandler,
  getTablesRowsIdRouteHandler,
  getTablesSvgIdRouteHandler,
  getTablesTableUpdateIdRouteHandler,
  getThemesBackgroundFillsIdRouteHandler,
  getThemesChildObjectsIdRouteHandler,
  getThemesColorsIdRouteHandler,
  getThemesCustomColorsIdRouteHandler,
  getThemesDetailsIdRouteHandler,
  getThemesEffectMapIdRouteHandler,
  getThemesFillsIdRouteHandler,
  getThemesFontsIdRouteHandler,
  getThemesIdRouteHandler,
  getThemesIntensityIdRouteHandler,
  getThemesIntensityRouteHandler,
  getThemesIntensityTypeIdTypeIdRouteHandler,
  getThemesLineMapIdRouteHandler,
  getThemesOpenOfficeXmlIdRouteHandler,
  getThemesSvgIdRouteHandler,
  postDocumentsCloneIdRouteHandler,
  postDocumentsRouteHandler,
  putChartsChartUpdateIdRouteHandler,
  putChartsOpenOfficeXmlIdRouteHandler,
  putConnectionShapesOpenOfficeXmlIdRouteHandler,
  putGroupsOpenOfficeXmlIdRouteHandler,
  putImagesGetImageIdRouteHandler,
  putImagesOpenOfficeXmlIdRouteHandler,
  putShapesOpenOfficeXmlIdRouteHandler,
  putShapeTreesOpenOfficeXmlIdRouteHandler,
  putSlidesOpenOfficeXmlIdRouteHandler,
  putSmartArtsOpenOfficeXmlIdRouteHandler,
  putTablesOpenOfficeXmlIdRouteHandler,
  putTablesTableUpdateIdRouteHandler,
  putThemesOpenOfficeXmlIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getChartsAxesIdRoute, getChartsAxesIdRouteHandler)
  .openapi(getChartsAxisDataTypesRoute, getChartsAxisDataTypesRouteHandler)
  .openapi(getChartsAxisDataTypesTypeIdTypeIdRoute, getChartsAxisDataTypesTypeIdTypeIdRouteHandler)
  .openapi(getChartsAxisDataTypesIdRoute, getChartsAxisDataTypesIdRouteHandler)
  .openapi(getChartsChartDataIdRoute, getChartsChartDataIdRouteHandler)
  .openapi(getChartsChartUpdateIdRoute, getChartsChartUpdateIdRouteHandler)
  .openapi(putChartsChartUpdateIdRoute, putChartsChartUpdateIdRouteHandler)
  .openapi(getChartsChildObjectsIdRoute, getChartsChildObjectsIdRouteHandler)
  .openapi(getChartsColumnCollectionsIdRoute, getChartsColumnCollectionsIdRouteHandler)
  .openapi(getChartsColumnsIdRoute, getChartsColumnsIdRouteHandler)
  .openapi(getChartsDataPointsIdRoute, getChartsDataPointsIdRouteHandler)
  .openapi(getChartsDetailsIdRoute, getChartsDetailsIdRouteHandler)
  .openapi(getChartsOpenOfficeXmlIdRoute, getChartsOpenOfficeXmlIdRouteHandler)
  .openapi(putChartsOpenOfficeXmlIdRoute, putChartsOpenOfficeXmlIdRouteHandler)
  .openapi(getChartsPlotTypeRoute, getChartsPlotTypeRouteHandler)
  .openapi(getChartsPlotTypeTypeIdTypeIdRoute, getChartsPlotTypeTypeIdTypeIdRouteHandler)
  .openapi(getChartsPlotTypeIdRoute, getChartsPlotTypeIdRouteHandler)
  .openapi(getChartsRowColRoute, getChartsRowColRouteHandler)
  .openapi(getChartsRowColTypeIdTypeIdRoute, getChartsRowColTypeIdTypeIdRouteHandler)
  .openapi(getChartsRowColIdRoute, getChartsRowColIdRouteHandler)
  .openapi(getChartsRowCollectionsIdRoute, getChartsRowCollectionsIdRouteHandler)
  .openapi(getChartsRowNameFormatTypesRoute, getChartsRowNameFormatTypesRouteHandler)
  .openapi(
    getChartsRowNameFormatTypesTypeIdTypeIdRoute,
    getChartsRowNameFormatTypesTypeIdTypeIdRouteHandler,
  )
  .openapi(getChartsRowNameFormatTypesIdRoute, getChartsRowNameFormatTypesIdRouteHandler)
  .openapi(getChartsRowsIdRoute, getChartsRowsIdRouteHandler)
  .openapi(getChartsSvgIdRoute, getChartsSvgIdRouteHandler)
  .openapi(getChartsIdRoute, getChartsIdRouteHandler)
  .openapi(getConnectionShapesChildObjectsIdRoute, getConnectionShapesChildObjectsIdRouteHandler)
  .openapi(getConnectionShapesDetailsIdRoute, getConnectionShapesDetailsIdRouteHandler)
  .openapi(getConnectionShapesOpenOfficeXmlIdRoute, getConnectionShapesOpenOfficeXmlIdRouteHandler)
  .openapi(putConnectionShapesOpenOfficeXmlIdRoute, putConnectionShapesOpenOfficeXmlIdRouteHandler)
  .openapi(getConnectionShapesSvgIdRoute, getConnectionShapesSvgIdRouteHandler)
  .openapi(getConnectionShapesIdRoute, getConnectionShapesIdRouteHandler)
  .openapi(postDocumentsRoute, postDocumentsRouteHandler)
  .openapi(getDocumentsChildObjectsIdRoute, getDocumentsChildObjectsIdRouteHandler)
  .openapi(postDocumentsCloneIdRoute, postDocumentsCloneIdRouteHandler)
  .openapi(getDocumentsDocumentTypeRoute, getDocumentsDocumentTypeRouteHandler)
  .openapi(
    getDocumentsDocumentTypeTypeIdTypeIdRoute,
    getDocumentsDocumentTypeTypeIdTypeIdRouteHandler,
  )
  .openapi(getDocumentsDocumentTypeIdRoute, getDocumentsDocumentTypeIdRouteHandler)
  .openapi(getDocumentsDownloadIdRoute, getDocumentsDownloadIdRouteHandler)
  .openapi(deleteDocumentsIdRoute, deleteDocumentsIdRouteHandler)
  .openapi(getDocumentsIdRoute, getDocumentsIdRouteHandler)
  .openapi(getGroupsChildObjectsIdRoute, getGroupsChildObjectsIdRouteHandler)
  .openapi(getGroupsDetailsIdRoute, getGroupsDetailsIdRouteHandler)
  .openapi(getGroupsOpenOfficeXmlIdRoute, getGroupsOpenOfficeXmlIdRouteHandler)
  .openapi(putGroupsOpenOfficeXmlIdRoute, putGroupsOpenOfficeXmlIdRouteHandler)
  .openapi(getGroupsSvgIdRoute, getGroupsSvgIdRouteHandler)
  .openapi(getGroupsIdRoute, getGroupsIdRouteHandler)
  .openapi(getImagesChildObjectsIdRoute, getImagesChildObjectsIdRouteHandler)
  .openapi(getImagesDetailsIdRoute, getImagesDetailsIdRouteHandler)
  .openapi(putImagesGetImageIdRoute, putImagesGetImageIdRouteHandler)
  .openapi(getImagesOpenOfficeXmlIdRoute, getImagesOpenOfficeXmlIdRouteHandler)
  .openapi(putImagesOpenOfficeXmlIdRoute, putImagesOpenOfficeXmlIdRouteHandler)
  .openapi(getImagesSvgIdRoute, getImagesSvgIdRouteHandler)
  .openapi(getImagesIdRoute, getImagesIdRouteHandler)
  .openapi(getShapeTreesChildObjectsIdRoute, getShapeTreesChildObjectsIdRouteHandler)
  .openapi(getShapeTreesDetailsIdRoute, getShapeTreesDetailsIdRouteHandler)
  .openapi(getShapeTreesOpenOfficeXmlIdRoute, getShapeTreesOpenOfficeXmlIdRouteHandler)
  .openapi(putShapeTreesOpenOfficeXmlIdRoute, putShapeTreesOpenOfficeXmlIdRouteHandler)
  .openapi(getShapeTreesSvgIdRoute, getShapeTreesSvgIdRouteHandler)
  .openapi(getShapeTreesIdRoute, getShapeTreesIdRouteHandler)
  .openapi(getShapesChildObjectsIdRoute, getShapesChildObjectsIdRouteHandler)
  .openapi(getShapesDetailsIdRoute, getShapesDetailsIdRouteHandler)
  .openapi(getShapesOpenOfficeXmlIdRoute, getShapesOpenOfficeXmlIdRouteHandler)
  .openapi(putShapesOpenOfficeXmlIdRoute, putShapesOpenOfficeXmlIdRouteHandler)
  .openapi(getShapesSvgIdRoute, getShapesSvgIdRouteHandler)
  .openapi(getShapesIdRoute, getShapesIdRouteHandler)
  .openapi(
    getSharedColorTransformationAttributesIdRoute,
    getSharedColorTransformationAttributesIdRouteHandler,
  )
  .openapi(getSharedColorTransformationsIdRoute, getSharedColorTransformationsIdRouteHandler)
  .openapi(getSharedColorTypesRoute, getSharedColorTypesRouteHandler)
  .openapi(getSharedColorTypesTypeIdTypeIdRoute, getSharedColorTypesTypeIdTypeIdRouteHandler)
  .openapi(getSharedColorTypesIdRoute, getSharedColorTypesIdRouteHandler)
  .openapi(getSharedDashTypesRoute, getSharedDashTypesRouteHandler)
  .openapi(getSharedDashTypesTypeIdTypeIdRoute, getSharedDashTypesTypeIdTypeIdRouteHandler)
  .openapi(getSharedDashTypesIdRoute, getSharedDashTypesIdRouteHandler)
  .openapi(getSharedEffectAttributesIdRoute, getSharedEffectAttributesIdRouteHandler)
  .openapi(getSharedEffectTypesRoute, getSharedEffectTypesRouteHandler)
  .openapi(getSharedEffectTypesTypeIdTypeIdRoute, getSharedEffectTypesTypeIdTypeIdRouteHandler)
  .openapi(getSharedEffectTypesIdRoute, getSharedEffectTypesIdRouteHandler)
  .openapi(getSharedEffectsIdRoute, getSharedEffectsIdRouteHandler)
  .openapi(getSharedFillMapIdRoute, getSharedFillMapIdRouteHandler)
  .openapi(getSharedFillTypesRoute, getSharedFillTypesRouteHandler)
  .openapi(getSharedFillTypesTypeIdTypeIdRoute, getSharedFillTypesTypeIdTypeIdRouteHandler)
  .openapi(getSharedFillTypesIdRoute, getSharedFillTypesIdRouteHandler)
  .openapi(getSharedGradientFillsIdRoute, getSharedGradientFillsIdRouteHandler)
  .openapi(getSharedGradientStopsIdRoute, getSharedGradientStopsIdRouteHandler)
  .openapi(getSharedImageFillsIdRoute, getSharedImageFillsIdRouteHandler)
  .openapi(getSharedLineEndSizesRoute, getSharedLineEndSizesRouteHandler)
  .openapi(getSharedLineEndSizesTypeIdTypeIdRoute, getSharedLineEndSizesTypeIdTypeIdRouteHandler)
  .openapi(getSharedLineEndSizesIdRoute, getSharedLineEndSizesIdRouteHandler)
  .openapi(getSharedLineEndTypesRoute, getSharedLineEndTypesRouteHandler)
  .openapi(getSharedLineEndTypesTypeIdTypeIdRoute, getSharedLineEndTypesTypeIdTypeIdRouteHandler)
  .openapi(getSharedLineEndTypesIdRoute, getSharedLineEndTypesIdRouteHandler)
  .openapi(getSharedLinesIdRoute, getSharedLinesIdRouteHandler)
  .openapi(getSharedParagraphIdRoute, getSharedParagraphIdRouteHandler)
  .openapi(getSharedSolidFillsIdRoute, getSharedSolidFillsIdRouteHandler)
  .openapi(getSharedTextIdRoute, getSharedTextIdRouteHandler)
  .openapi(getSharedTextContainerIdRoute, getSharedTextContainerIdRouteHandler)
  .openapi(getSlidesChildObjectsIdRoute, getSlidesChildObjectsIdRouteHandler)
  .openapi(getSlidesColorMapsIdRoute, getSlidesColorMapsIdRouteHandler)
  .openapi(getSlidesDetailsIdRoute, getSlidesDetailsIdRouteHandler)
  .openapi(getSlidesGraphicTypesRoute, getSlidesGraphicTypesRouteHandler)
  .openapi(getSlidesGraphicTypesTypeIdTypeIdRoute, getSlidesGraphicTypesTypeIdTypeIdRouteHandler)
  .openapi(getSlidesGraphicTypesIdRoute, getSlidesGraphicTypesIdRouteHandler)
  .openapi(getSlidesGraphicsIdRoute, getSlidesGraphicsIdRouteHandler)
  .openapi(getSlidesGroupElementTypesRoute, getSlidesGroupElementTypesRouteHandler)
  .openapi(
    getSlidesGroupElementTypesTypeIdTypeIdRoute,
    getSlidesGroupElementTypesTypeIdTypeIdRouteHandler,
  )
  .openapi(getSlidesGroupElementTypesIdRoute, getSlidesGroupElementTypesIdRouteHandler)
  .openapi(getSlidesGroupElementsIdRoute, getSlidesGroupElementsIdRouteHandler)
  .openapi(getSlidesOpenOfficeXmlIdRoute, getSlidesOpenOfficeXmlIdRouteHandler)
  .openapi(putSlidesOpenOfficeXmlIdRoute, putSlidesOpenOfficeXmlIdRouteHandler)
  .openapi(getSlidesSlideMastersIdRoute, getSlidesSlideMastersIdRouteHandler)
  .openapi(getSlidesSvgIdRoute, getSlidesSvgIdRouteHandler)
  .openapi(getSlidesIdRoute, getSlidesIdRouteHandler)
  .openapi(getSmartArtsChildObjectsIdRoute, getSmartArtsChildObjectsIdRouteHandler)
  .openapi(getSmartArtsDetailsIdRoute, getSmartArtsDetailsIdRouteHandler)
  .openapi(getSmartArtsOpenOfficeXmlIdRoute, getSmartArtsOpenOfficeXmlIdRouteHandler)
  .openapi(putSmartArtsOpenOfficeXmlIdRoute, putSmartArtsOpenOfficeXmlIdRouteHandler)
  .openapi(getSmartArtsSvgIdRoute, getSmartArtsSvgIdRouteHandler)
  .openapi(getSmartArtsIdRoute, getSmartArtsIdRouteHandler)
  .openapi(getTablesBordersIdRoute, getTablesBordersIdRouteHandler)
  .openapi(getTablesCellsIdRoute, getTablesCellsIdRouteHandler)
  .openapi(getTablesChildObjectsIdRoute, getTablesChildObjectsIdRouteHandler)
  .openapi(getTablesColumnsIdRoute, getTablesColumnsIdRouteHandler)
  .openapi(getTablesDetailsIdRoute, getTablesDetailsIdRouteHandler)
  .openapi(getTablesOpenOfficeXmlIdRoute, getTablesOpenOfficeXmlIdRouteHandler)
  .openapi(putTablesOpenOfficeXmlIdRoute, putTablesOpenOfficeXmlIdRouteHandler)
  .openapi(getTablesRowsIdRoute, getTablesRowsIdRouteHandler)
  .openapi(getTablesSvgIdRoute, getTablesSvgIdRouteHandler)
  .openapi(getTablesTableUpdateIdRoute, getTablesTableUpdateIdRouteHandler)
  .openapi(putTablesTableUpdateIdRoute, putTablesTableUpdateIdRouteHandler)
  .openapi(getTablesIdRoute, getTablesIdRouteHandler)
  .openapi(getThemesBackgroundFillsIdRoute, getThemesBackgroundFillsIdRouteHandler)
  .openapi(getThemesChildObjectsIdRoute, getThemesChildObjectsIdRouteHandler)
  .openapi(getThemesColorsIdRoute, getThemesColorsIdRouteHandler)
  .openapi(getThemesCustomColorsIdRoute, getThemesCustomColorsIdRouteHandler)
  .openapi(getThemesDetailsIdRoute, getThemesDetailsIdRouteHandler)
  .openapi(getThemesEffectMapIdRoute, getThemesEffectMapIdRouteHandler)
  .openapi(getThemesFillsIdRoute, getThemesFillsIdRouteHandler)
  .openapi(getThemesFontsIdRoute, getThemesFontsIdRouteHandler)
  .openapi(getThemesIntensityRoute, getThemesIntensityRouteHandler)
  .openapi(getThemesIntensityTypeIdTypeIdRoute, getThemesIntensityTypeIdTypeIdRouteHandler)
  .openapi(getThemesIntensityIdRoute, getThemesIntensityIdRouteHandler)
  .openapi(getThemesLineMapIdRoute, getThemesLineMapIdRouteHandler)
  .openapi(getThemesOpenOfficeXmlIdRoute, getThemesOpenOfficeXmlIdRouteHandler)
  .openapi(putThemesOpenOfficeXmlIdRoute, putThemesOpenOfficeXmlIdRouteHandler)
  .openapi(getThemesSvgIdRoute, getThemesSvgIdRouteHandler)
  .openapi(getThemesIdRoute, getThemesIdRouteHandler)

export default app
