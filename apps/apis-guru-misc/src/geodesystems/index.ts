import { OpenAPIHono } from '@hono/zod-openapi'
import {
  serviceMediaTabularExtractsheetHandler,
  type2017BoulderElectionExpendituresHandler,
  typeAnyHandler,
  typeBeforeafterHandler,
  typeBiblioHandler,
  typeBioDicomHandler,
  typeBioDicomTestHandler,
  typeBioFastaHandler,
  typeBioFastqHandler,
  typeBioHmmerIndexHandler,
  typeBioOmeTiffHandler,
  typeBioOntologyAssayHandler,
  typeBioOntologyCohortHandler,
  typeBioOntologyPersonHandler,
  typeBioOntologySampleHandler,
  typeBioOntologySeriesHandler,
  typeBioOntologyStudyHandler,
  typeBioSamHandler,
  typeBioSfPdbHandler,
  typeBioSraHandler,
  typeBioStockholmHandler,
  typeBioTaxonomyHandler,
  typeBlogentryHandler,
  typeBolderRentalHousingHandler,
  typeBookmarksHandler,
  typeBostonCrimeHandler,
  typeBoulder2017ElectionContributionsHandler,
  typeBoulderCampaignContributionsHandler,
  typeBoulderConsultingServicesHandler,
  typeBoulderCountyVoterDetailsHandler,
  typeBoulderCrimesHandler,
  typeBoulderEmailsHandler,
  typeBoulderEmployeeSalariesHandler,
  typeCalendarHandler,
  typeCampaignDonorsHandler,
  typeCampaignExpendituresHandler,
  typeCataloglinkHandler,
  typeCdmGridHandler,
  typeChatroomHandler,
  typeColoradoWaterRightsHandler,
  typeCommitteeDonationsHandler,
  typeCommunityDatahubHandler,
  typeCommunityResourceHandler,
  typeConstructionPermitsHandler,
  typeContactHandler,
  typeDbCoIndicatorsHandler,
  typeEarthSatelliteLandsatHandler,
  typeFaqHandler,
  typeFeccandidatesHandler,
  typeFecPacsHandler,
  typeFeedHandler,
  typeFileHandler,
  typeFitsDataHandler,
  typeFtpHandler,
  typeGadgetsCountdownHandler,
  typeGadgetsStockHandler,
  typeGadgetsWeatherHandler,
  typeGazeteerCensusTractsHandler,
  typeGazeteerCountiesHandler,
  typeGeoGeHandler,
  typeGeoGeotiffHandler,
  typeGeoGpxHandler,
  typeGeoHdf5Handler,
  typeGeoKmlHandler,
  typeGeoShapefileFipsHandler,
  typeGeoShapefileHandler,
  typeGlossaryHandler,
  typeGridaggregationHandler,
  typeGroupHandler,
  typeHipchatGroupHandler,
  typeHomepageHandler,
  typeIncidentHandler,
  typeJeopardyHandler,
  typeLatlonimageHandler,
  typeLidarCollectionHandler,
  typeLidarLasHandler,
  typeLidarLvisHandler,
  typeLinkHandler,
  typeLocalfilesHandler,
  typeLocationsHandler,
  typeMapGooglemapHandler,
  typeMediaAudiofileHandler,
  typeMediaImageloopHandler,
  typeMediaPhotoalbumHandler,
  typeMediaVideoChannelHandler,
  typeMediaVideoQuicktimeHandler,
  typeMediaYoutubevideoHandler,
  typeNotesHandler,
  typeNotesJsonfileHandler,
  typeNotesNotebookHandler,
  typeNotesNoteHandler,
  typeNwsfeedHandler,
  typeOpendaplinkHandler,
  typeOwlClassHandler,
  typeOwlOntologyHandler,
  typePasteitentryHandler,
  typePointTextHandler,
  typePoliceStopDataHandler,
  typePollHandler,
  typeProjectCampaignHandler,
  typeProjectCasestudyHandler,
  typeProjectContributionHandler,
  typeProjectDataformatHandler,
  typeProjectDatasetHandler,
  typeProjectDeploymentHandler,
  typeProjectExperimentHandler,
  typeProjectFieldnoteHandler,
  typeProjectGpsControlpointsHandler,
  typeProjectGpsRawHandler,
  typeProjectGpsRinexHandler,
  typeProjectInstrumentHandler,
  typeProjectLearningResourceHandler,
  typeProjectMeetingHandler,
  typeProjectOrganizationHandler,
  typeProjectProgramHandler,
  typeProjectProjectHandler,
  typeProjectServiceHandler,
  typeProjectSiteHandler,
  typeProjectSoftwarepackageHandler,
  typeProjectStandardNameHandler,
  typeProjectSurveylocationHandler,
  typeProjectTermHandler,
  typeProjectVisitHandler,
  typeProjectVocabularyHandler,
  typePropertydbHandler,
  typePropertySalesHandler,
  typePythonNotebookHandler,
  typeSlackTeamHandler,
  typeStatusboardHandler,
  typeSunrisesunsetHandler,
  typeTasksHandler,
  typeTmdbmoviesHandler,
  typeTodoHandler,
  typeTripEventHandler,
  typeTripFlightHandler,
  typeTripHotelHandler,
  typeTripReportHandler,
  typeTripTripHandler,
  typeTypeAwcMetarHandler,
  typeTypeBizStockseriesHandler,
  typeTypeBlsSeriesHandler,
  typeTypeBlsSurveyHandler,
  typeTypeCensusAcsHandler,
  typeTypeDaymetHandler,
  typeTypeDbTableHandler,
  typeTypeDocumentCsvHandler,
  typeTypeDocumentDocHandler,
  typeTypeDocumentHtmlHandler,
  typeTypeDocumentPdfHandler,
  typeTypeDocumentPptHandler,
  typeTypeDocumentXlsHandler,
  typeTypeDrilsdownCasestudyHandler,
  typeTypeEdgarFilingHandler,
  typeTypeEiaCategoryHandler,
  typeTypeEiaSeriesHandler,
  typeTypeEsriFeatureserverHandler,
  typeTypeEsriGeometryserverHandler,
  typeTypeEsriGpserverHandler,
  typeTypeEsriImageserverHandler,
  typeTypeEsriLayerHandler,
  typeTypeEsriMapserverHandler,
  typeTypeEsriRestfolderHandler,
  typeTypeEsriRestserverHandler,
  typeTypeEsriRestserviceHandler,
  typeTypeExtremesHandler,
  typeTypeFredCategoryHandler,
  typeTypeFredSeriesHandler,
  typeTypeGtfsAgencyHandler,
  typeTypeGtfsRouteHandler,
  typeTypeGtfsRoutesHandler,
  typeTypeGtfsStopHandler,
  typeTypeGtfsStopsHandler,
  typeTypeGtfsTripHandler,
  typeTypeHazarddataHandler,
  typeTypeHydroColoradoHandler,
  typeTypeIdvBundleHandler,
  typeTypeImageAirportHandler,
  typeTypeImageHandler,
  typeTypeImageWebcamHandler,
  typeTypeMbCollectionHandler,
  typeTypeMbHandler,
  typeTypeMbPointBasicHandler,
  typeTypeMetametaDictionaryHandler,
  typeTypeMetametaFieldHandler,
  typeTypeNasaamesHandler,
  typeTypeNcssHandler,
  typeTypeNitfHandler,
  typeTypePointAmerifluxLevel2Handler,
  typeTypePointAmrcFinalHandler,
  typeTypePointAmrcFreewaveHandler,
  typeTypePointCzoHandler,
  typeTypePointGcnetHandler,
  typeTypePointGeomagIaga2002Handler,
  typeTypePointHydroWatermlHandler,
  typeTypePointIcebridgeAtmIcessnHandler,
  typeTypePointIcebridgeAtmQfitHandler,
  typeTypePointIcebridgeMccordsIrmcr2Handler,
  typeTypePointIcebridgeMccordsIrmcr3Handler,
  typeTypePointIcebridgeParisHandler,
  typeTypePointIdvHandler,
  typeTypePointInlineHandler,
  typeTypePointNcdcClimateHandler,
  typeTypePointNetcdfHandler,
  typeTypePointNoaaCarbonHandler,
  typeTypePointNoaaFlaskEventHandler,
  typeTypePointNoaaFlaskMonthHandler,
  typeTypePointNoaaMadisHandler,
  typeTypePointNoaaTowerHandler,
  typeTypePointOceanCnvHandler,
  typeTypePointOceanCsvSadoMeteoHandler,
  typeTypePointOceanCsvSadoPositionHandler,
  typeTypePointOceanCsvSadoTTSHandler,
  typeTypePointOceanNetcdfGliderHandler,
  typeTypePointOceanNetcdfTrackHandler,
  typeTypePointOceanOoiDmgxHandler,
  typeTypePointOpenaqHandler,
  typeTypePointPboPositionTimeSeriesHandler,
  typeTypePointSimpleRecordsHandler,
  typeTypePointSnotelHandler,
  typeTypePointTextHandler,
  typeTypePointWsbbGgpHandler,
  typeTypePsdMonthlyClimateIndexHandler,
  typeTypeQuandlSeriesHandler,
  typeTypeServiceGroupHandler,
  typeTypeServiceLinkHandler,
  typeTypeSocrataSeriesHandler,
  typeTypeSoundingCodHandler,
  typeTypeSoundingFrdHandler,
  typeTypeSoundingGsdHandler,
  typeTypeSoundingWyomingHandler,
  typeTypeTmyHandler,
  typeTypeTweetHandler,
  typeTypeUsgsGaugeHandler,
  typeTypeVirtualHandler,
  typeTypeWmsCapabilitiesHandler,
  typeTypeWmsLayerHandler,
  typeUfoSightingsHandler,
  typeUsPlacesHandler,
  typeVoteYesnoHandler,
  typeWeblogHandler,
  typeWikipageHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', serviceMediaTabularExtractsheetHandler)
  .route('/', type2017BoulderElectionExpendituresHandler)
  .route('/', typeAnyHandler)
  .route('/', typeBeforeafterHandler)
  .route('/', typeBiblioHandler)
  .route('/', typeBioDicomHandler)
  .route('/', typeBioDicomTestHandler)
  .route('/', typeBioFastaHandler)
  .route('/', typeBioFastqHandler)
  .route('/', typeBioHmmerIndexHandler)
  .route('/', typeBioOmeTiffHandler)
  .route('/', typeBioOntologyAssayHandler)
  .route('/', typeBioOntologyCohortHandler)
  .route('/', typeBioOntologyPersonHandler)
  .route('/', typeBioOntologySampleHandler)
  .route('/', typeBioOntologySeriesHandler)
  .route('/', typeBioOntologyStudyHandler)
  .route('/', typeBioSamHandler)
  .route('/', typeBioSfPdbHandler)
  .route('/', typeBioSraHandler)
  .route('/', typeBioStockholmHandler)
  .route('/', typeBioTaxonomyHandler)
  .route('/', typeBlogentryHandler)
  .route('/', typeBolderRentalHousingHandler)
  .route('/', typeBookmarksHandler)
  .route('/', typeBostonCrimeHandler)
  .route('/', typeBoulder2017ElectionContributionsHandler)
  .route('/', typeBoulderCampaignContributionsHandler)
  .route('/', typeBoulderConsultingServicesHandler)
  .route('/', typeBoulderCountyVoterDetailsHandler)
  .route('/', typeBoulderCrimesHandler)
  .route('/', typeBoulderEmailsHandler)
  .route('/', typeBoulderEmployeeSalariesHandler)
  .route('/', typeCalendarHandler)
  .route('/', typeCampaignDonorsHandler)
  .route('/', typeCampaignExpendituresHandler)
  .route('/', typeCataloglinkHandler)
  .route('/', typeCdmGridHandler)
  .route('/', typeChatroomHandler)
  .route('/', typeColoradoWaterRightsHandler)
  .route('/', typeCommitteeDonationsHandler)
  .route('/', typeCommunityDatahubHandler)
  .route('/', typeCommunityResourceHandler)
  .route('/', typeConstructionPermitsHandler)
  .route('/', typeContactHandler)
  .route('/', typeDbCoIndicatorsHandler)
  .route('/', typeEarthSatelliteLandsatHandler)
  .route('/', typeFaqHandler)
  .route('/', typeFecPacsHandler)
  .route('/', typeFeccandidatesHandler)
  .route('/', typeFeedHandler)
  .route('/', typeFileHandler)
  .route('/', typeFitsDataHandler)
  .route('/', typeFtpHandler)
  .route('/', typeGadgetsCountdownHandler)
  .route('/', typeGadgetsStockHandler)
  .route('/', typeGadgetsWeatherHandler)
  .route('/', typeGazeteerCensusTractsHandler)
  .route('/', typeGazeteerCountiesHandler)
  .route('/', typeGeoGeHandler)
  .route('/', typeGeoGeotiffHandler)
  .route('/', typeGeoGpxHandler)
  .route('/', typeGeoHdf5Handler)
  .route('/', typeGeoKmlHandler)
  .route('/', typeGeoShapefileHandler)
  .route('/', typeGeoShapefileFipsHandler)
  .route('/', typeGlossaryHandler)
  .route('/', typeGridaggregationHandler)
  .route('/', typeGroupHandler)
  .route('/', typeHipchatGroupHandler)
  .route('/', typeHomepageHandler)
  .route('/', typeIncidentHandler)
  .route('/', typeJeopardyHandler)
  .route('/', typeLatlonimageHandler)
  .route('/', typeLidarCollectionHandler)
  .route('/', typeLidarLasHandler)
  .route('/', typeLidarLvisHandler)
  .route('/', typeLinkHandler)
  .route('/', typeLocalfilesHandler)
  .route('/', typeLocationsHandler)
  .route('/', typeMapGooglemapHandler)
  .route('/', typeMediaAudiofileHandler)
  .route('/', typeMediaImageloopHandler)
  .route('/', typeMediaPhotoalbumHandler)
  .route('/', typeMediaVideoChannelHandler)
  .route('/', typeMediaVideoQuicktimeHandler)
  .route('/', typeMediaYoutubevideoHandler)
  .route('/', typeNotesHandler)
  .route('/', typeNotesJsonfileHandler)
  .route('/', typeNotesNoteHandler)
  .route('/', typeNotesNotebookHandler)
  .route('/', typeNwsfeedHandler)
  .route('/', typeOpendaplinkHandler)
  .route('/', typeOwlClassHandler)
  .route('/', typeOwlOntologyHandler)
  .route('/', typePasteitentryHandler)
  .route('/', typePointTextHandler)
  .route('/', typePoliceStopDataHandler)
  .route('/', typePollHandler)
  .route('/', typeProjectCampaignHandler)
  .route('/', typeProjectCasestudyHandler)
  .route('/', typeProjectContributionHandler)
  .route('/', typeProjectDataformatHandler)
  .route('/', typeProjectDatasetHandler)
  .route('/', typeProjectDeploymentHandler)
  .route('/', typeProjectExperimentHandler)
  .route('/', typeProjectFieldnoteHandler)
  .route('/', typeProjectGpsControlpointsHandler)
  .route('/', typeProjectGpsRawHandler)
  .route('/', typeProjectGpsRinexHandler)
  .route('/', typeProjectInstrumentHandler)
  .route('/', typeProjectLearningResourceHandler)
  .route('/', typeProjectMeetingHandler)
  .route('/', typeProjectOrganizationHandler)
  .route('/', typeProjectProgramHandler)
  .route('/', typeProjectProjectHandler)
  .route('/', typeProjectServiceHandler)
  .route('/', typeProjectSiteHandler)
  .route('/', typeProjectSoftwarepackageHandler)
  .route('/', typeProjectStandardNameHandler)
  .route('/', typeProjectSurveylocationHandler)
  .route('/', typeProjectTermHandler)
  .route('/', typeProjectVisitHandler)
  .route('/', typeProjectVocabularyHandler)
  .route('/', typePropertySalesHandler)
  .route('/', typePropertydbHandler)
  .route('/', typePythonNotebookHandler)
  .route('/', typeSlackTeamHandler)
  .route('/', typeStatusboardHandler)
  .route('/', typeSunrisesunsetHandler)
  .route('/', typeTasksHandler)
  .route('/', typeTmdbmoviesHandler)
  .route('/', typeTodoHandler)
  .route('/', typeTripEventHandler)
  .route('/', typeTripFlightHandler)
  .route('/', typeTripHotelHandler)
  .route('/', typeTripReportHandler)
  .route('/', typeTripTripHandler)
  .route('/', typeTypeAwcMetarHandler)
  .route('/', typeTypeBizStockseriesHandler)
  .route('/', typeTypeBlsSeriesHandler)
  .route('/', typeTypeBlsSurveyHandler)
  .route('/', typeTypeCensusAcsHandler)
  .route('/', typeTypeDaymetHandler)
  .route('/', typeTypeDbTableHandler)
  .route('/', typeTypeDocumentCsvHandler)
  .route('/', typeTypeDocumentDocHandler)
  .route('/', typeTypeDocumentHtmlHandler)
  .route('/', typeTypeDocumentPdfHandler)
  .route('/', typeTypeDocumentPptHandler)
  .route('/', typeTypeDocumentXlsHandler)
  .route('/', typeTypeDrilsdownCasestudyHandler)
  .route('/', typeTypeEdgarFilingHandler)
  .route('/', typeTypeEiaCategoryHandler)
  .route('/', typeTypeEiaSeriesHandler)
  .route('/', typeTypeEsriFeatureserverHandler)
  .route('/', typeTypeEsriGeometryserverHandler)
  .route('/', typeTypeEsriGpserverHandler)
  .route('/', typeTypeEsriImageserverHandler)
  .route('/', typeTypeEsriLayerHandler)
  .route('/', typeTypeEsriMapserverHandler)
  .route('/', typeTypeEsriRestfolderHandler)
  .route('/', typeTypeEsriRestserverHandler)
  .route('/', typeTypeEsriRestserviceHandler)
  .route('/', typeTypeExtremesHandler)
  .route('/', typeTypeFredCategoryHandler)
  .route('/', typeTypeFredSeriesHandler)
  .route('/', typeTypeGtfsAgencyHandler)
  .route('/', typeTypeGtfsRouteHandler)
  .route('/', typeTypeGtfsRoutesHandler)
  .route('/', typeTypeGtfsStopHandler)
  .route('/', typeTypeGtfsStopsHandler)
  .route('/', typeTypeGtfsTripHandler)
  .route('/', typeTypeHazarddataHandler)
  .route('/', typeTypeHydroColoradoHandler)
  .route('/', typeTypeIdvBundleHandler)
  .route('/', typeTypeImageHandler)
  .route('/', typeTypeImageAirportHandler)
  .route('/', typeTypeImageWebcamHandler)
  .route('/', typeTypeMbHandler)
  .route('/', typeTypeMbCollectionHandler)
  .route('/', typeTypeMbPointBasicHandler)
  .route('/', typeTypeMetametaDictionaryHandler)
  .route('/', typeTypeMetametaFieldHandler)
  .route('/', typeTypeNasaamesHandler)
  .route('/', typeTypeNcssHandler)
  .route('/', typeTypeNitfHandler)
  .route('/', typeTypePointAmerifluxLevel2Handler)
  .route('/', typeTypePointAmrcFinalHandler)
  .route('/', typeTypePointAmrcFreewaveHandler)
  .route('/', typeTypePointCzoHandler)
  .route('/', typeTypePointGcnetHandler)
  .route('/', typeTypePointGeomagIaga2002Handler)
  .route('/', typeTypePointHydroWatermlHandler)
  .route('/', typeTypePointIcebridgeAtmIcessnHandler)
  .route('/', typeTypePointIcebridgeAtmQfitHandler)
  .route('/', typeTypePointIcebridgeMccordsIrmcr2Handler)
  .route('/', typeTypePointIcebridgeMccordsIrmcr3Handler)
  .route('/', typeTypePointIcebridgeParisHandler)
  .route('/', typeTypePointIdvHandler)
  .route('/', typeTypePointInlineHandler)
  .route('/', typeTypePointNcdcClimateHandler)
  .route('/', typeTypePointNetcdfHandler)
  .route('/', typeTypePointNoaaCarbonHandler)
  .route('/', typeTypePointNoaaFlaskEventHandler)
  .route('/', typeTypePointNoaaFlaskMonthHandler)
  .route('/', typeTypePointNoaaMadisHandler)
  .route('/', typeTypePointNoaaTowerHandler)
  .route('/', typeTypePointOceanCnvHandler)
  .route('/', typeTypePointOceanCsvSadoTTSHandler)
  .route('/', typeTypePointOceanCsvSadoMeteoHandler)
  .route('/', typeTypePointOceanCsvSadoPositionHandler)
  .route('/', typeTypePointOceanNetcdfGliderHandler)
  .route('/', typeTypePointOceanNetcdfTrackHandler)
  .route('/', typeTypePointOceanOoiDmgxHandler)
  .route('/', typeTypePointOpenaqHandler)
  .route('/', typeTypePointPboPositionTimeSeriesHandler)
  .route('/', typeTypePointSimpleRecordsHandler)
  .route('/', typeTypePointSnotelHandler)
  .route('/', typeTypePointTextHandler)
  .route('/', typeTypePointWsbbGgpHandler)
  .route('/', typeTypePsdMonthlyClimateIndexHandler)
  .route('/', typeTypeQuandlSeriesHandler)
  .route('/', typeTypeServiceGroupHandler)
  .route('/', typeTypeServiceLinkHandler)
  .route('/', typeTypeSocrataSeriesHandler)
  .route('/', typeTypeSoundingCodHandler)
  .route('/', typeTypeSoundingFrdHandler)
  .route('/', typeTypeSoundingGsdHandler)
  .route('/', typeTypeSoundingWyomingHandler)
  .route('/', typeTypeTmyHandler)
  .route('/', typeTypeTweetHandler)
  .route('/', typeTypeUsgsGaugeHandler)
  .route('/', typeTypeVirtualHandler)
  .route('/', typeTypeWmsCapabilitiesHandler)
  .route('/', typeTypeWmsLayerHandler)
  .route('/', typeUfoSightingsHandler)
  .route('/', typeUsPlacesHandler)
  .route('/', typeVoteYesnoHandler)
  .route('/', typeWeblogHandler)
  .route('/', typeWikipageHandler)

export default app
