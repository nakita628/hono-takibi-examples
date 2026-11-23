import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRepositoryEntryShowRoute,
  getRepositorySearchType2017BoulderElectionExpendituresRoute,
  getRepositorySearchTypeAnyRoute,
  getRepositorySearchTypeBeforeafterRoute,
  getRepositorySearchTypeBiblioRoute,
  getRepositorySearchTypeBioDicomRoute,
  getRepositorySearchTypeBioDicomTestRoute,
  getRepositorySearchTypeBioFastaRoute,
  getRepositorySearchTypeBioFastqRoute,
  getRepositorySearchTypeBioHmmerIndexRoute,
  getRepositorySearchTypeBioOmeTiffRoute,
  getRepositorySearchTypeBioOntologyAssayRoute,
  getRepositorySearchTypeBioOntologyCohortRoute,
  getRepositorySearchTypeBioOntologyPersonRoute,
  getRepositorySearchTypeBioOntologySampleRoute,
  getRepositorySearchTypeBioOntologySeriesRoute,
  getRepositorySearchTypeBioOntologyStudyRoute,
  getRepositorySearchTypeBioSamRoute,
  getRepositorySearchTypeBioSfPdbRoute,
  getRepositorySearchTypeBioSraRoute,
  getRepositorySearchTypeBioStockholmRoute,
  getRepositorySearchTypeBioTaxonomyRoute,
  getRepositorySearchTypeBlogentryRoute,
  getRepositorySearchTypeBolderRentalHousingRoute,
  getRepositorySearchTypeBookmarksRoute,
  getRepositorySearchTypeBostonCrimeRoute,
  getRepositorySearchTypeBoulder2017ElectionContributionsRoute,
  getRepositorySearchTypeBoulderCampaignContributionsRoute,
  getRepositorySearchTypeBoulderConsultingServicesRoute,
  getRepositorySearchTypeBoulderCountyVoterDetailsRoute,
  getRepositorySearchTypeBoulderCrimesRoute,
  getRepositorySearchTypeBoulderEmailsRoute,
  getRepositorySearchTypeBoulderEmployeeSalariesRoute,
  getRepositorySearchTypeCalendarRoute,
  getRepositorySearchTypeCampaignDonorsRoute,
  getRepositorySearchTypeCampaignExpendituresRoute,
  getRepositorySearchTypeCataloglinkRoute,
  getRepositorySearchTypeCdmGridRoute,
  getRepositorySearchTypeChatroomRoute,
  getRepositorySearchTypeColoradoWaterRightsRoute,
  getRepositorySearchTypeCommitteeDonationsRoute,
  getRepositorySearchTypeCommunityDatahubRoute,
  getRepositorySearchTypeCommunityResourceRoute,
  getRepositorySearchTypeConstructionPermitsRoute,
  getRepositorySearchTypeContactRoute,
  getRepositorySearchTypeDbCoIndicatorsRoute,
  getRepositorySearchTypeEarthSatelliteLandsatRoute,
  getRepositorySearchTypeFaqRoute,
  getRepositorySearchTypeFeccandidatesRoute,
  getRepositorySearchTypeFecPacsRoute,
  getRepositorySearchTypeFeedRoute,
  getRepositorySearchTypeFileRoute,
  getRepositorySearchTypeFitsDataRoute,
  getRepositorySearchTypeFtpRoute,
  getRepositorySearchTypeGadgetsCountdownRoute,
  getRepositorySearchTypeGadgetsStockRoute,
  getRepositorySearchTypeGadgetsWeatherRoute,
  getRepositorySearchTypeGazeteerCensusTractsRoute,
  getRepositorySearchTypeGazeteerCountiesRoute,
  getRepositorySearchTypeGeoGeojsonRoute,
  getRepositorySearchTypeGeoGeotiffRoute,
  getRepositorySearchTypeGeoGpxRoute,
  getRepositorySearchTypeGeoHdf5Route,
  getRepositorySearchTypeGeoKmlRoute,
  getRepositorySearchTypeGeoShapefileFipsRoute,
  getRepositorySearchTypeGeoShapefileRoute,
  getRepositorySearchTypeGlossaryRoute,
  getRepositorySearchTypeGridaggregationRoute,
  getRepositorySearchTypeGroupRoute,
  getRepositorySearchTypeHipchatGroupRoute,
  getRepositorySearchTypeHomepageRoute,
  getRepositorySearchTypeIncidentRoute,
  getRepositorySearchTypeJeopardyRoute,
  getRepositorySearchTypeLatlonimageRoute,
  getRepositorySearchTypeLidarCollectionRoute,
  getRepositorySearchTypeLidarLasRoute,
  getRepositorySearchTypeLidarLvisRoute,
  getRepositorySearchTypeLinkRoute,
  getRepositorySearchTypeLocalfilesRoute,
  getRepositorySearchTypeLocationsRoute,
  getRepositorySearchTypeMapGooglemapRoute,
  getRepositorySearchTypeMediaAudiofileRoute,
  getRepositorySearchTypeMediaImageloopRoute,
  getRepositorySearchTypeMediaPhotoalbumRoute,
  getRepositorySearchTypeMediaVideoChannelRoute,
  getRepositorySearchTypeMediaVideoQuicktimeRoute,
  getRepositorySearchTypeMediaYoutubevideoRoute,
  getRepositorySearchTypeNotesJsonfileRoute,
  getRepositorySearchTypeNotesNotebookRoute,
  getRepositorySearchTypeNotesNoteRoute,
  getRepositorySearchTypeNotesRoute,
  getRepositorySearchTypeNwsfeedRoute,
  getRepositorySearchTypeOpendaplinkRoute,
  getRepositorySearchTypeOwlClassRoute,
  getRepositorySearchTypeOwlOntologyRoute,
  getRepositorySearchTypePasteitentryRoute,
  getRepositorySearchTypePointTextRoute,
  getRepositorySearchTypePoliceStopDataRoute,
  getRepositorySearchTypePollRoute,
  getRepositorySearchTypeProjectCampaignRoute,
  getRepositorySearchTypeProjectCasestudyRoute,
  getRepositorySearchTypeProjectContributionRoute,
  getRepositorySearchTypeProjectDataformatRoute,
  getRepositorySearchTypeProjectDatasetRoute,
  getRepositorySearchTypeProjectDeploymentRoute,
  getRepositorySearchTypeProjectExperimentRoute,
  getRepositorySearchTypeProjectFieldnoteRoute,
  getRepositorySearchTypeProjectGpsControlpointsRoute,
  getRepositorySearchTypeProjectGpsRawRoute,
  getRepositorySearchTypeProjectGpsRinexRoute,
  getRepositorySearchTypeProjectInstrumentRoute,
  getRepositorySearchTypeProjectLearningResourceRoute,
  getRepositorySearchTypeProjectMeetingRoute,
  getRepositorySearchTypeProjectOrganizationRoute,
  getRepositorySearchTypeProjectProgramRoute,
  getRepositorySearchTypeProjectProjectRoute,
  getRepositorySearchTypeProjectServiceRoute,
  getRepositorySearchTypeProjectSiteRoute,
  getRepositorySearchTypeProjectSoftwarepackageRoute,
  getRepositorySearchTypeProjectStandardNameRoute,
  getRepositorySearchTypeProjectSurveylocationRoute,
  getRepositorySearchTypeProjectTermRoute,
  getRepositorySearchTypeProjectVisitRoute,
  getRepositorySearchTypeProjectVocabularyRoute,
  getRepositorySearchTypePropertydbRoute,
  getRepositorySearchTypePropertySalesRoute,
  getRepositorySearchTypePythonNotebookRoute,
  getRepositorySearchTypeSlackTeamRoute,
  getRepositorySearchTypeStatusboardRoute,
  getRepositorySearchTypeSunrisesunsetRoute,
  getRepositorySearchTypeTasksRoute,
  getRepositorySearchTypeTmdbmoviesRoute,
  getRepositorySearchTypeTodoRoute,
  getRepositorySearchTypeTripEventRoute,
  getRepositorySearchTypeTripFlightRoute,
  getRepositorySearchTypeTripHotelRoute,
  getRepositorySearchTypeTripReportRoute,
  getRepositorySearchTypeTripTripRoute,
  getRepositorySearchTypeTypeAwcMetarRoute,
  getRepositorySearchTypeTypeBizStockseriesRoute,
  getRepositorySearchTypeTypeBlsSeriesRoute,
  getRepositorySearchTypeTypeBlsSurveyRoute,
  getRepositorySearchTypeTypeCensusAcsRoute,
  getRepositorySearchTypeTypeDaymetRoute,
  getRepositorySearchTypeTypeDbTableRoute,
  getRepositorySearchTypeTypeDocumentCsvRoute,
  getRepositorySearchTypeTypeDocumentDocRoute,
  getRepositorySearchTypeTypeDocumentHtmlRoute,
  getRepositorySearchTypeTypeDocumentPdfRoute,
  getRepositorySearchTypeTypeDocumentPptRoute,
  getRepositorySearchTypeTypeDocumentXlsRoute,
  getRepositorySearchTypeTypeDrilsdownCasestudyRoute,
  getRepositorySearchTypeTypeEdgarFilingRoute,
  getRepositorySearchTypeTypeEiaCategoryRoute,
  getRepositorySearchTypeTypeEiaSeriesRoute,
  getRepositorySearchTypeTypeEsriFeatureserverRoute,
  getRepositorySearchTypeTypeEsriGeometryserverRoute,
  getRepositorySearchTypeTypeEsriGpserverRoute,
  getRepositorySearchTypeTypeEsriImageserverRoute,
  getRepositorySearchTypeTypeEsriLayerRoute,
  getRepositorySearchTypeTypeEsriMapserverRoute,
  getRepositorySearchTypeTypeEsriRestfolderRoute,
  getRepositorySearchTypeTypeEsriRestserverRoute,
  getRepositorySearchTypeTypeEsriRestserviceRoute,
  getRepositorySearchTypeTypeExtremesRoute,
  getRepositorySearchTypeTypeFredCategoryRoute,
  getRepositorySearchTypeTypeFredSeriesRoute,
  getRepositorySearchTypeTypeGtfsAgencyRoute,
  getRepositorySearchTypeTypeGtfsRouteRoute,
  getRepositorySearchTypeTypeGtfsRoutesRoute,
  getRepositorySearchTypeTypeGtfsStopRoute,
  getRepositorySearchTypeTypeGtfsStopsRoute,
  getRepositorySearchTypeTypeGtfsTripRoute,
  getRepositorySearchTypeTypeHazarddataRoute,
  getRepositorySearchTypeTypeHydroColoradoRoute,
  getRepositorySearchTypeTypeIdvBundleRoute,
  getRepositorySearchTypeTypeImageAirportRoute,
  getRepositorySearchTypeTypeImageRoute,
  getRepositorySearchTypeTypeImageWebcamRoute,
  getRepositorySearchTypeTypeMbCollectionRoute,
  getRepositorySearchTypeTypeMbPointBasicRoute,
  getRepositorySearchTypeTypeMbRoute,
  getRepositorySearchTypeTypeMetametaDictionaryRoute,
  getRepositorySearchTypeTypeMetametaFieldRoute,
  getRepositorySearchTypeTypeNasaamesRoute,
  getRepositorySearchTypeTypeNcssRoute,
  getRepositorySearchTypeTypeNitfRoute,
  getRepositorySearchTypeTypePointAmerifluxLevel2Route,
  getRepositorySearchTypeTypePointAmrcFinalRoute,
  getRepositorySearchTypeTypePointAmrcFreewaveRoute,
  getRepositorySearchTypeTypePointCzoRoute,
  getRepositorySearchTypeTypePointGcnetRoute,
  getRepositorySearchTypeTypePointGeomagIaga2002Route,
  getRepositorySearchTypeTypePointHydroWatermlRoute,
  getRepositorySearchTypeTypePointIcebridgeAtmIcessnRoute,
  getRepositorySearchTypeTypePointIcebridgeAtmQfitRoute,
  getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Route,
  getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Route,
  getRepositorySearchTypeTypePointIcebridgeParisRoute,
  getRepositorySearchTypeTypePointIdvRoute,
  getRepositorySearchTypeTypePointInlineRoute,
  getRepositorySearchTypeTypePointNcdcClimateRoute,
  getRepositorySearchTypeTypePointNetcdfRoute,
  getRepositorySearchTypeTypePointNoaaCarbonRoute,
  getRepositorySearchTypeTypePointNoaaFlaskEventRoute,
  getRepositorySearchTypeTypePointNoaaFlaskMonthRoute,
  getRepositorySearchTypeTypePointNoaaMadisRoute,
  getRepositorySearchTypeTypePointNoaaTowerRoute,
  getRepositorySearchTypeTypePointOceanCnvRoute,
  getRepositorySearchTypeTypePointOceanCsvSadoMeteoRoute,
  getRepositorySearchTypeTypePointOceanCsvSadoPositionRoute,
  getRepositorySearchTypeTypePointOceanCsvSadoTTSRoute,
  getRepositorySearchTypeTypePointOceanNetcdfGliderRoute,
  getRepositorySearchTypeTypePointOceanNetcdfTrackRoute,
  getRepositorySearchTypeTypePointOceanOoiDmgxRoute,
  getRepositorySearchTypeTypePointOpenaqRoute,
  getRepositorySearchTypeTypePointPboPositionTimeSeriesRoute,
  getRepositorySearchTypeTypePointSimpleRecordsRoute,
  getRepositorySearchTypeTypePointSnotelRoute,
  getRepositorySearchTypeTypePointTextRoute,
  getRepositorySearchTypeTypePointWsbbGgpRoute,
  getRepositorySearchTypeTypePsdMonthlyClimateIndexRoute,
  getRepositorySearchTypeTypeQuandlSeriesRoute,
  getRepositorySearchTypeTypeServiceGroupRoute,
  getRepositorySearchTypeTypeServiceLinkRoute,
  getRepositorySearchTypeTypeSocrataSeriesRoute,
  getRepositorySearchTypeTypeSoundingCodRoute,
  getRepositorySearchTypeTypeSoundingFrdRoute,
  getRepositorySearchTypeTypeSoundingGsdRoute,
  getRepositorySearchTypeTypeSoundingWyomingRoute,
  getRepositorySearchTypeTypeTmyRoute,
  getRepositorySearchTypeTypeTweetRoute,
  getRepositorySearchTypeTypeUsgsGaugeRoute,
  getRepositorySearchTypeTypeVirtualRoute,
  getRepositorySearchTypeTypeWmsCapabilitiesRoute,
  getRepositorySearchTypeTypeWmsLayerRoute,
  getRepositorySearchTypeUfoSightingsRoute,
  getRepositorySearchTypeUsPlacesRoute,
  getRepositorySearchTypeVoteYesnoRoute,
  getRepositorySearchTypeWeblogRoute,
  getRepositorySearchTypeWikipageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoryHandler = app
  .openapi(getRepositoryEntryShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchType2017BoulderElectionExpendituresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeAnyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBeforeafterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBiblioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioDicomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioDicomTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioFastaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioFastqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioHmmerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOmeTiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOntologyAssayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOntologyCohortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOntologyPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOntologySampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOntologySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioOntologyStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioSamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioSfPdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioSraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioStockholmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBioTaxonomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBlogentryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBolderRentalHousingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBostonCrimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulder2017ElectionContributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulderCampaignContributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulderConsultingServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulderCountyVoterDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulderCrimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulderEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeBoulderEmployeeSalariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCampaignDonorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCampaignExpendituresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCataloglinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCdmGridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeChatroomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeColoradoWaterRightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCommitteeDonationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCommunityDatahubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeCommunityResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeConstructionPermitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeDbCoIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeEarthSatelliteLandsatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFaqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFecPacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFeccandidatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFitsDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeFtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGadgetsCountdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGadgetsStockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGadgetsWeatherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGazeteerCensusTractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGazeteerCountiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoGeojsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoGeotiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoGpxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoHdf5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoKmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoShapefileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGeoShapefileFipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGlossaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGridaggregationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeHipchatGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeHomepageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeIncidentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeJeopardyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLatlonimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLidarCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLidarLasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLidarLvisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLocalfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMapGooglemapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMediaAudiofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMediaImageloopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMediaPhotoalbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMediaVideoChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMediaVideoQuicktimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeMediaYoutubevideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeNotesJsonfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeNotesNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeNotesNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeNwsfeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeOpendaplinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeOwlClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeOwlOntologyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePasteitentryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePointTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePoliceStopDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectCasestudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectContributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectDataformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectExperimentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectFieldnoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectGpsControlpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectGpsRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectGpsRinexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectInstrumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectLearningResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectMeetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectProgramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectSiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectSoftwarepackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectStandardNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectSurveylocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectVisitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeProjectVocabularyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePropertySalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePropertydbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypePythonNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeSlackTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeStatusboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeSunrisesunsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTmdbmoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTripEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTripFlightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTripHotelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTripReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTripTripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeAwcMetarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeBizStockseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeBlsSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeBlsSurveyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeCensusAcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDaymetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDbTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDocumentCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDocumentDocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDocumentHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDocumentPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDocumentPptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDocumentXlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeDrilsdownCasestudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEdgarFilingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEiaCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEiaSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriFeatureserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriGeometryserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriGpserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriImageserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriLayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriMapserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriRestfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriRestserverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeEsriRestserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeExtremesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeFredCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeFredSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeGtfsAgencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeGtfsRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeGtfsRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeGtfsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeGtfsStopsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeGtfsTripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeHazarddataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeHydroColoradoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeIdvBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeImageAirportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeImageWebcamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeMbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeMbCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeMbPointBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeMetametaDictionaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeMetametaFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeNasaamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeNcssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeNitfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointAmerifluxLevel2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointAmrcFinalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointAmrcFreewaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointCzoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointGcnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointGeomagIaga2002Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointHydroWatermlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointIcebridgeAtmIcessnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointIcebridgeAtmQfitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointIcebridgeParisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointIdvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointInlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNcdcClimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNetcdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNoaaCarbonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNoaaFlaskEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNoaaFlaskMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNoaaMadisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointNoaaTowerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanCnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanCsvSadoTTSRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanCsvSadoMeteoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanCsvSadoPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanNetcdfGliderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanNetcdfTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOceanOoiDmgxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointOpenaqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointPboPositionTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointSimpleRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointSnotelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePointWsbbGgpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypePsdMonthlyClimateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeQuandlSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeServiceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeServiceLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeSocrataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeSoundingCodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeSoundingFrdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeSoundingGsdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeSoundingWyomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeTmyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeTweetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeUsgsGaugeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeVirtualRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeWmsCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeTypeWmsLayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeUfoSightingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeUsPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeVoteYesnoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeWeblogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositorySearchTypeWikipageRoute, (c) => {
    throw new Error('Not implemented')
  })
