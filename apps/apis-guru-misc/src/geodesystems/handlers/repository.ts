import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getRepositoryEntryShowRouteHandler: RouteHandler<
  typeof getRepositoryEntryShowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchType2017BoulderElectionExpendituresRouteHandler: RouteHandler<
  typeof getRepositorySearchType2017BoulderElectionExpendituresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeAnyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeAnyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBeforeafterRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBeforeafterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBiblioRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBiblioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioDicomRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioDicomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioDicomTestRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioDicomTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioFastaRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioFastaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioFastqRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioFastqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioHmmerIndexRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioHmmerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOmeTiffRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOmeTiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOntologyAssayRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOntologyAssayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOntologyCohortRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOntologyCohortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOntologyPersonRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOntologyPersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOntologySampleRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOntologySampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOntologySeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOntologySeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioOntologyStudyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioOntologyStudyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioSamRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioSamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioSfPdbRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioSfPdbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioSraRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioSraRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioStockholmRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioStockholmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBioTaxonomyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBioTaxonomyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBlogentryRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBlogentryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBolderRentalHousingRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBolderRentalHousingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBookmarksRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBostonCrimeRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBostonCrimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulder2017ElectionContributionsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulder2017ElectionContributionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulderCampaignContributionsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulderCampaignContributionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulderConsultingServicesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulderConsultingServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulderCountyVoterDetailsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulderCountyVoterDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulderCrimesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulderCrimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulderEmailsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulderEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeBoulderEmployeeSalariesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeBoulderEmployeeSalariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCalendarRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCalendarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCampaignDonorsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCampaignDonorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCampaignExpendituresRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCampaignExpendituresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCataloglinkRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCataloglinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCdmGridRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCdmGridRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeChatroomRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeChatroomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeColoradoWaterRightsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeColoradoWaterRightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCommitteeDonationsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCommitteeDonationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCommunityDatahubRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCommunityDatahubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeCommunityResourceRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeCommunityResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeConstructionPermitsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeConstructionPermitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeContactRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeDbCoIndicatorsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeDbCoIndicatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeEarthSatelliteLandsatRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeEarthSatelliteLandsatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFaqRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFaqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFecPacsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFecPacsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFeccandidatesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFeccandidatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFeedRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFileRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFitsDataRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFitsDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeFtpRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeFtpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGadgetsCountdownRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGadgetsCountdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGadgetsStockRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGadgetsStockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGadgetsWeatherRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGadgetsWeatherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGazeteerCensusTractsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGazeteerCensusTractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGazeteerCountiesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGazeteerCountiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoGeojsonRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoGeojsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoGeotiffRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoGeotiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoGpxRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoGpxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoHdf5RouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoHdf5Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoKmlRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoKmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoShapefileRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoShapefileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGeoShapefileFipsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGeoShapefileFipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGlossaryRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGlossaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGridaggregationRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGridaggregationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeGroupRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeHipchatGroupRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeHipchatGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeHomepageRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeHomepageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeIncidentRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeIncidentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeJeopardyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeJeopardyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLatlonimageRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLatlonimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLidarCollectionRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLidarCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLidarLasRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLidarLasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLidarLvisRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLidarLvisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLinkRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLocalfilesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLocalfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeLocationsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMapGooglemapRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMapGooglemapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMediaAudiofileRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMediaAudiofileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMediaImageloopRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMediaImageloopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMediaPhotoalbumRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMediaPhotoalbumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMediaVideoChannelRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMediaVideoChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMediaVideoQuicktimeRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMediaVideoQuicktimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeMediaYoutubevideoRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeMediaYoutubevideoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeNotesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeNotesJsonfileRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeNotesJsonfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeNotesNoteRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeNotesNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeNotesNotebookRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeNotesNotebookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeNwsfeedRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeNwsfeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeOpendaplinkRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeOpendaplinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeOwlClassRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeOwlClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeOwlOntologyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeOwlOntologyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePasteitentryRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePasteitentryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePointTextRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePointTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePoliceStopDataRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePoliceStopDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePollRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectCampaignRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectCampaignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectCasestudyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectCasestudyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectContributionRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectContributionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectDataformatRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectDataformatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectDatasetRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectDatasetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectDeploymentRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectExperimentRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectExperimentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectFieldnoteRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectFieldnoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectGpsControlpointsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectGpsControlpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectGpsRawRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectGpsRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectGpsRinexRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectGpsRinexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectInstrumentRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectInstrumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectLearningResourceRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectLearningResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectMeetingRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectMeetingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectOrganizationRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectProgramRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectProgramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectProjectRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectServiceRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectSiteRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectSiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectSoftwarepackageRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectSoftwarepackageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectStandardNameRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectStandardNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectSurveylocationRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectSurveylocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectTermRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectVisitRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectVisitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeProjectVocabularyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeProjectVocabularyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePropertySalesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePropertySalesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePropertydbRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePropertydbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypePythonNotebookRouteHandler: RouteHandler<
  typeof getRepositorySearchTypePythonNotebookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeSlackTeamRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeSlackTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeStatusboardRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeStatusboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeSunrisesunsetRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeSunrisesunsetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTasksRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTmdbmoviesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTmdbmoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTodoRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTodoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTripEventRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTripEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTripFlightRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTripFlightRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTripHotelRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTripHotelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTripReportRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTripReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTripTripRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTripTripRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeAwcMetarRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeAwcMetarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeBizStockseriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeBizStockseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeBlsSeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeBlsSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeBlsSurveyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeBlsSurveyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeCensusAcsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeCensusAcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDaymetRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDaymetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDbTableRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDbTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDocumentCsvRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDocumentCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDocumentDocRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDocumentDocRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDocumentHtmlRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDocumentHtmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDocumentPdfRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDocumentPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDocumentPptRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDocumentPptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDocumentXlsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDocumentXlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeDrilsdownCasestudyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeDrilsdownCasestudyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEdgarFilingRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEdgarFilingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEiaCategoryRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEiaCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEiaSeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEiaSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriFeatureserverRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriFeatureserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriGeometryserverRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriGeometryserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriGpserverRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriGpserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriImageserverRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriImageserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriLayerRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriLayerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriMapserverRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriMapserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriRestfolderRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriRestfolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriRestserverRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriRestserverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeEsriRestserviceRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeEsriRestserviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeExtremesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeExtremesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeFredCategoryRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeFredCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeFredSeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeFredSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeGtfsAgencyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeGtfsAgencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeGtfsRouteRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeGtfsRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeGtfsRoutesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeGtfsRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeGtfsStopRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeGtfsStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeGtfsStopsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeGtfsStopsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeGtfsTripRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeGtfsTripRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeHazarddataRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeHazarddataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeHydroColoradoRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeHydroColoradoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeIdvBundleRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeIdvBundleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeImageRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeImageAirportRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeImageAirportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeImageWebcamRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeImageWebcamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeMbRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeMbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeMbCollectionRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeMbCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeMbPointBasicRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeMbPointBasicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeMetametaDictionaryRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeMetametaDictionaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeMetametaFieldRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeMetametaFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeNasaamesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeNasaamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeNcssRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeNcssRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeNitfRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeNitfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointAmerifluxLevel2RouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointAmerifluxLevel2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointAmrcFinalRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointAmrcFinalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointAmrcFreewaveRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointAmrcFreewaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointCzoRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointCzoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointGcnetRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointGcnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointGeomagIaga2002RouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointGeomagIaga2002Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointHydroWatermlRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointHydroWatermlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointIcebridgeAtmIcessnRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointIcebridgeAtmIcessnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointIcebridgeAtmQfitRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointIcebridgeAtmQfitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2RouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3RouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointIcebridgeParisRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointIcebridgeParisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointIdvRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointIdvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointInlineRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointInlineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNcdcClimateRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNcdcClimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNetcdfRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNetcdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNoaaCarbonRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNoaaCarbonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNoaaFlaskEventRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNoaaFlaskEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNoaaFlaskMonthRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNoaaFlaskMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNoaaMadisRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNoaaMadisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointNoaaTowerRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointNoaaTowerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanCnvRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanCnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanCsvSadoTTSRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanCsvSadoTTSRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanCsvSadoMeteoRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanCsvSadoMeteoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanCsvSadoPositionRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanCsvSadoPositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanNetcdfGliderRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanNetcdfGliderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanNetcdfTrackRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanNetcdfTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOceanOoiDmgxRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOceanOoiDmgxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointOpenaqRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointOpenaqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointPboPositionTimeSeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointPboPositionTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointSimpleRecordsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointSimpleRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointSnotelRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointSnotelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointTextRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePointWsbbGgpRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePointWsbbGgpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypePsdMonthlyClimateIndexRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypePsdMonthlyClimateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeQuandlSeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeQuandlSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeServiceGroupRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeServiceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeServiceLinkRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeServiceLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeSocrataSeriesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeSocrataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeSoundingCodRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeSoundingCodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeSoundingFrdRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeSoundingFrdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeSoundingGsdRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeSoundingGsdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeSoundingWyomingRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeSoundingWyomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeTmyRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeTmyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeTweetRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeTweetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeUsgsGaugeRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeUsgsGaugeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeVirtualRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeVirtualRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeWmsCapabilitiesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeWmsCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeTypeWmsLayerRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeTypeWmsLayerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeUfoSightingsRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeUfoSightingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeUsPlacesRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeUsPlacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeVoteYesnoRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeVoteYesnoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeWeblogRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeWeblogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositorySearchTypeWikipageRouteHandler: RouteHandler<
  typeof getRepositorySearchTypeWikipageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
