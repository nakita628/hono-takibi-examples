import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getChartsAxesId(
  args: InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.Axes[':id'].$get(args, options))
}

export async function getChartsAxisDataTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Charts.AxisDataTypes.$get(undefined, options))
}

export async function getChartsAxisDataTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.AxisDataTypes.TypeId[':type_id'].$get(args, options))
}

export async function getChartsAxisDataTypesId(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.AxisDataTypes[':id'].$get(args, options))
}

export async function getChartsChartDataId(
  args: InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.ChartData[':id'].$get(args, options))
}

export async function getChartsChartUpdateId(
  args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.ChartUpdate[':id'].$get(args, options))
}

export async function putChartsChartUpdateId(
  args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.ChartUpdate[':id'].$put(args, options))
}

export async function getChartsChildObjectsId(
  args: InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.ChildObjects[':id'].$get(args, options))
}

export async function getChartsColumnCollectionsId(
  args: InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.ColumnCollections[':id'].$get(args, options))
}

export async function getChartsColumnsId(
  args: InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.Columns[':id'].$get(args, options))
}

export async function getChartsDataPointsId(
  args: InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.DataPoints[':id'].$get(args, options))
}

export async function getChartsDetailsId(
  args: InferRequestType<(typeof client.Charts.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.Details[':id'].$get(args, options))
}

export async function getChartsOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.OpenOfficeXml[':id'].$get(args, options))
}

export async function putChartsOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.OpenOfficeXml[':id'].$put(args, options))
}

export async function getChartsPlotType(options?: ClientRequestOptions) {
  return await parseResponse(client.Charts.PlotType.$get(undefined, options))
}

export async function getChartsPlotTypeTypeIdTypeId(
  args: InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.PlotType.TypeId[':type_id'].$get(args, options))
}

export async function getChartsPlotTypeId(
  args: InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.PlotType[':id'].$get(args, options))
}

export async function getChartsRowCol(options?: ClientRequestOptions) {
  return await parseResponse(client.Charts.RowCol.$get(undefined, options))
}

export async function getChartsRowColTypeIdTypeId(
  args: InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.RowCol.TypeId[':type_id'].$get(args, options))
}

export async function getChartsRowColId(
  args: InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.RowCol[':id'].$get(args, options))
}

export async function getChartsRowCollectionsId(
  args: InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.RowCollections[':id'].$get(args, options))
}

export async function getChartsRowNameFormatTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Charts.RowNameFormatTypes.$get(undefined, options))
}

export async function getChartsRowNameFormatTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Charts.RowNameFormatTypes.TypeId[':type_id'].$get(args, options),
  )
}

export async function getChartsRowNameFormatTypesId(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.RowNameFormatTypes[':id'].$get(args, options))
}

export async function getChartsRowsId(
  args: InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.Rows[':id'].$get(args, options))
}

export async function getChartsSvgId(
  args: InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts.Svg[':id'].$get(args, options))
}

export async function getChartsId(
  args: InferRequestType<(typeof client.Charts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Charts[':id'].$get(args, options))
}

export async function getConnectionShapesChildObjectsId(
  args: InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConnectionShapes.ChildObjects[':id'].$get(args, options))
}

export async function getConnectionShapesDetailsId(
  args: InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConnectionShapes.Details[':id'].$get(args, options))
}

export async function getConnectionShapesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConnectionShapes.OpenOfficeXml[':id'].$get(args, options))
}

export async function putConnectionShapesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConnectionShapes.OpenOfficeXml[':id'].$put(args, options))
}

export async function getConnectionShapesSvgId(
  args: InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConnectionShapes.Svg[':id'].$get(args, options))
}

export async function getConnectionShapesId(
  args: InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConnectionShapes[':id'].$get(args, options))
}

export async function postDocuments(
  args: InferRequestType<typeof client.Documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents.$post(args, options))
}

export async function getDocumentsChildObjectsId(
  args: InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents.ChildObjects[':id'].$get(args, options))
}

export async function postDocumentsCloneId(
  args: InferRequestType<(typeof client.Documents.Clone)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents.Clone[':id'].$post(args, options))
}

export async function getDocumentsDocumentType(options?: ClientRequestOptions) {
  return await parseResponse(client.Documents.DocumentType.$get(undefined, options))
}

export async function getDocumentsDocumentTypeTypeIdTypeId(
  args: InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents.DocumentType.TypeId[':type_id'].$get(args, options))
}

export async function getDocumentsDocumentTypeId(
  args: InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents.DocumentType[':id'].$get(args, options))
}

export async function getDocumentsDownloadId(
  args: InferRequestType<(typeof client.Documents.Download)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents.Download[':id'].$get(args, options))
}

export async function getDocumentsId(
  args: InferRequestType<(typeof client.Documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents[':id'].$get(args, options))
}

export async function deleteDocumentsId(
  args: InferRequestType<(typeof client.Documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Documents[':id'].$delete(args, options))
}

export async function getGroupsChildObjectsId(
  args: InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups.ChildObjects[':id'].$get(args, options))
}

export async function getGroupsDetailsId(
  args: InferRequestType<(typeof client.Groups.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups.Details[':id'].$get(args, options))
}

export async function getGroupsOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups.OpenOfficeXml[':id'].$get(args, options))
}

export async function putGroupsOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups.OpenOfficeXml[':id'].$put(args, options))
}

export async function getGroupsSvgId(
  args: InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups.Svg[':id'].$get(args, options))
}

export async function getGroupsId(
  args: InferRequestType<(typeof client.Groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Groups[':id'].$get(args, options))
}

export async function getImagesChildObjectsId(
  args: InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images.ChildObjects[':id'].$get(args, options))
}

export async function getImagesDetailsId(
  args: InferRequestType<(typeof client.Images.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images.Details[':id'].$get(args, options))
}

export async function putImagesGetImageId(
  args: InferRequestType<(typeof client.Images.GetImage)[':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images.GetImage[':Id'].$put(args, options))
}

export async function getImagesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images.OpenOfficeXml[':id'].$get(args, options))
}

export async function putImagesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images.OpenOfficeXml[':id'].$put(args, options))
}

export async function getImagesSvgId(
  args: InferRequestType<(typeof client.Images.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images.Svg[':id'].$get(args, options))
}

export async function getImagesId(
  args: InferRequestType<(typeof client.Images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Images[':id'].$get(args, options))
}

export async function getShapeTreesChildObjectsId(
  args: InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShapeTrees.ChildObjects[':id'].$get(args, options))
}

export async function getShapeTreesDetailsId(
  args: InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShapeTrees.Details[':id'].$get(args, options))
}

export async function getShapeTreesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShapeTrees.OpenOfficeXml[':id'].$get(args, options))
}

export async function putShapeTreesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShapeTrees.OpenOfficeXml[':id'].$put(args, options))
}

export async function getShapeTreesSvgId(
  args: InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShapeTrees.Svg[':id'].$get(args, options))
}

export async function getShapeTreesId(
  args: InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShapeTrees[':id'].$get(args, options))
}

export async function getShapesChildObjectsId(
  args: InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shapes.ChildObjects[':id'].$get(args, options))
}

export async function getShapesDetailsId(
  args: InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shapes.Details[':id'].$get(args, options))
}

export async function getShapesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shapes.OpenOfficeXml[':id'].$get(args, options))
}

export async function putShapesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shapes.OpenOfficeXml[':id'].$put(args, options))
}

export async function getShapesSvgId(
  args: InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shapes.Svg[':id'].$get(args, options))
}

export async function getShapesId(
  args: InferRequestType<(typeof client.Shapes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shapes[':id'].$get(args, options))
}

export async function getSharedColorTransformationAttributesId(
  args: InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.ColorTransformationAttributes[':id'].$get(args, options))
}

export async function getSharedColorTransformationsId(
  args: InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.ColorTransformations[':id'].$get(args, options))
}

export async function getSharedColorTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Shared.ColorTypes.$get(undefined, options))
}

export async function getSharedColorTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.ColorTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSharedColorTypesId(
  args: InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.ColorTypes[':id'].$get(args, options))
}

export async function getSharedDashTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Shared.DashTypes.$get(undefined, options))
}

export async function getSharedDashTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.DashTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSharedDashTypesId(
  args: InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.DashTypes[':id'].$get(args, options))
}

export async function getSharedEffectAttributesId(
  args: InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.EffectAttributes[':id'].$get(args, options))
}

export async function getSharedEffectTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Shared.EffectTypes.$get(undefined, options))
}

export async function getSharedEffectTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.EffectTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSharedEffectTypesId(
  args: InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.EffectTypes[':id'].$get(args, options))
}

export async function getSharedEffectsId(
  args: InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.Effects[':id'].$get(args, options))
}

export async function getSharedFillMapId(
  args: InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.FillMap[':id'].$get(args, options))
}

export async function getSharedFillTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Shared.FillTypes.$get(undefined, options))
}

export async function getSharedFillTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.FillTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSharedFillTypesId(
  args: InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.FillTypes[':id'].$get(args, options))
}

export async function getSharedGradientFillsId(
  args: InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.GradientFills[':id'].$get(args, options))
}

export async function getSharedGradientStopsId(
  args: InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.GradientStops[':id'].$get(args, options))
}

export async function getSharedImageFillsId(
  args: InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.ImageFills[':id'].$get(args, options))
}

export async function getSharedLineEndSizes(options?: ClientRequestOptions) {
  return await parseResponse(client.Shared.LineEndSizes.$get(undefined, options))
}

export async function getSharedLineEndSizesTypeIdTypeId(
  args: InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.LineEndSizes.TypeId[':type_id'].$get(args, options))
}

export async function getSharedLineEndSizesId(
  args: InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.LineEndSizes[':id'].$get(args, options))
}

export async function getSharedLineEndTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Shared.LineEndTypes.$get(undefined, options))
}

export async function getSharedLineEndTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.LineEndTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSharedLineEndTypesId(
  args: InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.LineEndTypes[':id'].$get(args, options))
}

export async function getSharedLinesId(
  args: InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.Lines[':id'].$get(args, options))
}

export async function getSharedParagraphId(
  args: InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.Paragraph[':id'].$get(args, options))
}

export async function getSharedSolidFillsId(
  args: InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.SolidFills[':id'].$get(args, options))
}

export async function getSharedTextId(
  args: InferRequestType<(typeof client.Shared.Text)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.Text[':id'].$get(args, options))
}

export async function getSharedTextContainerId(
  args: InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shared.TextContainer[':id'].$get(args, options))
}

export async function getSlidesChildObjectsId(
  args: InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.ChildObjects[':id'].$get(args, options))
}

export async function getSlidesColorMapsId(
  args: InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.ColorMaps[':id'].$get(args, options))
}

export async function getSlidesDetailsId(
  args: InferRequestType<(typeof client.Slides.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.Details[':id'].$get(args, options))
}

export async function getSlidesGraphicTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Slides.GraphicTypes.$get(undefined, options))
}

export async function getSlidesGraphicTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.GraphicTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSlidesGraphicTypesId(
  args: InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.GraphicTypes[':id'].$get(args, options))
}

export async function getSlidesGraphicsId(
  args: InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.Graphics[':id'].$get(args, options))
}

export async function getSlidesGroupElementTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Slides.GroupElementTypes.$get(undefined, options))
}

export async function getSlidesGroupElementTypesTypeIdTypeId(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.GroupElementTypes.TypeId[':type_id'].$get(args, options))
}

export async function getSlidesGroupElementTypesId(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.GroupElementTypes[':id'].$get(args, options))
}

export async function getSlidesGroupElementsId(
  args: InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.GroupElements[':id'].$get(args, options))
}

export async function getSlidesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.OpenOfficeXml[':id'].$get(args, options))
}

export async function putSlidesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.OpenOfficeXml[':id'].$put(args, options))
}

export async function getSlidesSlideMastersId(
  args: InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.SlideMasters[':id'].$get(args, options))
}

export async function getSlidesSvgId(
  args: InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides.Svg[':id'].$get(args, options))
}

export async function getSlidesId(
  args: InferRequestType<(typeof client.Slides)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Slides[':id'].$get(args, options))
}

export async function getSmartArtsChildObjectsId(
  args: InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SmartArts.ChildObjects[':id'].$get(args, options))
}

export async function getSmartArtsDetailsId(
  args: InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SmartArts.Details[':id'].$get(args, options))
}

export async function getSmartArtsOpenOfficeXmlId(
  args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SmartArts.OpenOfficeXml[':id'].$get(args, options))
}

export async function putSmartArtsOpenOfficeXmlId(
  args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SmartArts.OpenOfficeXml[':id'].$put(args, options))
}

export async function getSmartArtsSvgId(
  args: InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SmartArts.Svg[':id'].$get(args, options))
}

export async function getSmartArtsId(
  args: InferRequestType<(typeof client.SmartArts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SmartArts[':id'].$get(args, options))
}

export async function getTablesBordersId(
  args: InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.Borders[':id'].$get(args, options))
}

export async function getTablesCellsId(
  args: InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.Cells[':id'].$get(args, options))
}

export async function getTablesChildObjectsId(
  args: InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.ChildObjects[':id'].$get(args, options))
}

export async function getTablesColumnsId(
  args: InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.Columns[':id'].$get(args, options))
}

export async function getTablesDetailsId(
  args: InferRequestType<(typeof client.Tables.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.Details[':id'].$get(args, options))
}

export async function getTablesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.OpenOfficeXml[':id'].$get(args, options))
}

export async function putTablesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.OpenOfficeXml[':id'].$put(args, options))
}

export async function getTablesRowsId(
  args: InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.Rows[':id'].$get(args, options))
}

export async function getTablesSvgId(
  args: InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.Svg[':id'].$get(args, options))
}

export async function getTablesTableUpdateId(
  args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.TableUpdate[':id'].$get(args, options))
}

export async function putTablesTableUpdateId(
  args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables.TableUpdate[':id'].$put(args, options))
}

export async function getTablesId(
  args: InferRequestType<(typeof client.Tables)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Tables[':id'].$get(args, options))
}

export async function getThemesBackgroundFillsId(
  args: InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.BackgroundFills[':id'].$get(args, options))
}

export async function getThemesChildObjectsId(
  args: InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.ChildObjects[':id'].$get(args, options))
}

export async function getThemesColorsId(
  args: InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Colors[':id'].$get(args, options))
}

export async function getThemesCustomColorsId(
  args: InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.CustomColors[':id'].$get(args, options))
}

export async function getThemesDetailsId(
  args: InferRequestType<(typeof client.Themes.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Details[':id'].$get(args, options))
}

export async function getThemesEffectMapId(
  args: InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.EffectMap[':id'].$get(args, options))
}

export async function getThemesFillsId(
  args: InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Fills[':id'].$get(args, options))
}

export async function getThemesFontsId(
  args: InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Fonts[':id'].$get(args, options))
}

export async function getThemesIntensity(options?: ClientRequestOptions) {
  return await parseResponse(client.Themes.Intensity.$get(undefined, options))
}

export async function getThemesIntensityTypeIdTypeId(
  args: InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Intensity.TypeId[':type_id'].$get(args, options))
}

export async function getThemesIntensityId(
  args: InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Intensity[':id'].$get(args, options))
}

export async function getThemesLineMapId(
  args: InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.LineMap[':id'].$get(args, options))
}

export async function getThemesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.OpenOfficeXml[':id'].$get(args, options))
}

export async function putThemesOpenOfficeXmlId(
  args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.OpenOfficeXml[':id'].$put(args, options))
}

export async function getThemesSvgId(
  args: InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes.Svg[':id'].$get(args, options))
}

export async function getThemesId(
  args: InferRequestType<(typeof client.Themes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Themes[':id'].$get(args, options))
}
