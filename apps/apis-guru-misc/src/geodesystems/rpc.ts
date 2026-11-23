import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRepositoryEntryShow(
  args: InferRequestType<typeof client.repository.entry.show.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.entry.show.$get(args, options))
}

export async function getRepositorySearchType2017BoulderElectionExpenditures(
  args: InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type['2017_boulder_election_expenditures'].$get(args, options),
  )
}

export async function getRepositorySearchTypeAny(
  args: InferRequestType<typeof client.repository.search.type.any.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.any.$get(args, options))
}

export async function getRepositorySearchTypeBeforeafter(
  args: InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.beforeafter.$get(args, options))
}

export async function getRepositorySearchTypeBiblio(
  args: InferRequestType<typeof client.repository.search.type.biblio.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.biblio.$get(args, options))
}

export async function getRepositorySearchTypeBioDicom(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_dicom.$get(args, options))
}

export async function getRepositorySearchTypeBioDicomTest(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_dicom_test.$get(args, options))
}

export async function getRepositorySearchTypeBioFasta(
  args: InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_fasta.$get(args, options))
}

export async function getRepositorySearchTypeBioFastq(
  args: InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_fastq.$get(args, options))
}

export async function getRepositorySearchTypeBioHmmerIndex(
  args: InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_hmmer_index.$get(args, options))
}

export async function getRepositorySearchTypeBioOmeTiff(
  args: InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ome_tiff.$get(args, options))
}

export async function getRepositorySearchTypeBioOntologyAssay(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ontology_assay.$get(args, options))
}

export async function getRepositorySearchTypeBioOntologyCohort(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ontology_cohort.$get(args, options))
}

export async function getRepositorySearchTypeBioOntologyPerson(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ontology_person.$get(args, options))
}

export async function getRepositorySearchTypeBioOntologySample(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ontology_sample.$get(args, options))
}

export async function getRepositorySearchTypeBioOntologySeries(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ontology_series.$get(args, options))
}

export async function getRepositorySearchTypeBioOntologyStudy(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_ontology_study.$get(args, options))
}

export async function getRepositorySearchTypeBioSam(
  args: InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_sam.$get(args, options))
}

export async function getRepositorySearchTypeBioSfPdb(
  args: InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_sf_pdb.$get(args, options))
}

export async function getRepositorySearchTypeBioSra(
  args: InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_sra.$get(args, options))
}

export async function getRepositorySearchTypeBioStockholm(
  args: InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_stockholm.$get(args, options))
}

export async function getRepositorySearchTypeBioTaxonomy(
  args: InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bio_taxonomy.$get(args, options))
}

export async function getRepositorySearchTypeBlogentry(
  args: InferRequestType<typeof client.repository.search.type.blogentry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.blogentry.$get(args, options))
}

export async function getRepositorySearchTypeBolderRentalHousing(
  args: InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.bolder_rental_housing.$get(args, options),
  )
}

export async function getRepositorySearchTypeBookmarks(
  args: InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.bookmarks.$get(args, options))
}

export async function getRepositorySearchTypeBostonCrime(
  args: InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.boston_crime.$get(args, options))
}

export async function getRepositorySearchTypeBoulder2017ElectionContributions(
  args: InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.boulder_2017_election_contributions.$get(args, options),
  )
}

export async function getRepositorySearchTypeBoulderCampaignContributions(
  args: InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.boulder_campaign_contributions.$get(args, options),
  )
}

export async function getRepositorySearchTypeBoulderConsultingServices(
  args: InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.boulder_consulting_services.$get(args, options),
  )
}

export async function getRepositorySearchTypeBoulderCountyVoterDetails(
  args: InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.boulder_county_voter_details.$get(args, options),
  )
}

export async function getRepositorySearchTypeBoulderCrimes(
  args: InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.boulder_crimes.$get(args, options))
}

export async function getRepositorySearchTypeBoulderEmails(
  args: InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.boulder_emails.$get(args, options))
}

export async function getRepositorySearchTypeBoulderEmployeeSalaries(
  args: InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.boulder_employee_salaries.$get(args, options),
  )
}

export async function getRepositorySearchTypeCalendar(
  args: InferRequestType<typeof client.repository.search.type.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.calendar.$get(args, options))
}

export async function getRepositorySearchTypeCampaignDonors(
  args: InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.campaign_donors.$get(args, options))
}

export async function getRepositorySearchTypeCampaignExpenditures(
  args: InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.campaign_expenditures.$get(args, options),
  )
}

export async function getRepositorySearchTypeCataloglink(
  args: InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.cataloglink.$get(args, options))
}

export async function getRepositorySearchTypeCdmGrid(
  args: InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.cdm_grid.$get(args, options))
}

export async function getRepositorySearchTypeChatroom(
  args: InferRequestType<typeof client.repository.search.type.chatroom.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.chatroom.$get(args, options))
}

export async function getRepositorySearchTypeColoradoWaterRights(
  args: InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.colorado_water_rights.$get(args, options),
  )
}

export async function getRepositorySearchTypeCommitteeDonations(
  args: InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.committee_donations.$get(args, options))
}

export async function getRepositorySearchTypeCommunityDatahub(
  args: InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.community_datahub.$get(args, options))
}

export async function getRepositorySearchTypeCommunityResource(
  args: InferRequestType<typeof client.repository.search.type.community_resource.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.community_resource.$get(args, options))
}

export async function getRepositorySearchTypeConstructionPermits(
  args: InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.construction_permits.$get(args, options))
}

export async function getRepositorySearchTypeContact(
  args: InferRequestType<typeof client.repository.search.type.contact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.contact.$get(args, options))
}

export async function getRepositorySearchTypeDbCoIndicators(
  args: InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.db_co_indicators.$get(args, options))
}

export async function getRepositorySearchTypeEarthSatelliteLandsat(
  args: InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.earth_satellite_landsat.$get(args, options),
  )
}

export async function getRepositorySearchTypeFaq(
  args: InferRequestType<typeof client.repository.search.type.faq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.faq.$get(args, options))
}

export async function getRepositorySearchTypeFecPacs(
  args: InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.fec_pacs.$get(args, options))
}

export async function getRepositorySearchTypeFeccandidates(
  args: InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.feccandidates.$get(args, options))
}

export async function getRepositorySearchTypeFeed(
  args: InferRequestType<typeof client.repository.search.type.feed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.feed.$get(args, options))
}

export async function getRepositorySearchTypeFile(
  args: InferRequestType<typeof client.repository.search.type.file.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.file.$get(args, options))
}

export async function getRepositorySearchTypeFitsData(
  args: InferRequestType<typeof client.repository.search.type.fits_data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.fits_data.$get(args, options))
}

export async function getRepositorySearchTypeFtp(
  args: InferRequestType<typeof client.repository.search.type.ftp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.ftp.$get(args, options))
}

export async function getRepositorySearchTypeGadgetsCountdown(
  args: InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.gadgets_countdown.$get(args, options))
}

export async function getRepositorySearchTypeGadgetsStock(
  args: InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.gadgets_stock.$get(args, options))
}

export async function getRepositorySearchTypeGadgetsWeather(
  args: InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.gadgets_weather.$get(args, options))
}

export async function getRepositorySearchTypeGazeteerCensusTracts(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.gazeteer_census_tracts.$get(args, options),
  )
}

export async function getRepositorySearchTypeGazeteerCounties(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.gazeteer_counties.$get(args, options))
}

export async function getRepositorySearchTypeGeoGeojson(
  args: InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_geojson.$get(args, options))
}

export async function getRepositorySearchTypeGeoGeotiff(
  args: InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_geotiff.$get(args, options))
}

export async function getRepositorySearchTypeGeoGpx(
  args: InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_gpx.$get(args, options))
}

export async function getRepositorySearchTypeGeoHdf5(
  args: InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_hdf5.$get(args, options))
}

export async function getRepositorySearchTypeGeoKml(
  args: InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_kml.$get(args, options))
}

export async function getRepositorySearchTypeGeoShapefile(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_shapefile.$get(args, options))
}

export async function getRepositorySearchTypeGeoShapefileFips(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.geo_shapefile_fips.$get(args, options))
}

export async function getRepositorySearchTypeGlossary(
  args: InferRequestType<typeof client.repository.search.type.glossary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.glossary.$get(args, options))
}

export async function getRepositorySearchTypeGridaggregation(
  args: InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.gridaggregation.$get(args, options))
}

export async function getRepositorySearchTypeGroup(
  args: InferRequestType<typeof client.repository.search.type.group.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.group.$get(args, options))
}

export async function getRepositorySearchTypeHipchatGroup(
  args: InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.hipchat_group.$get(args, options))
}

export async function getRepositorySearchTypeHomepage(
  args: InferRequestType<typeof client.repository.search.type.homepage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.homepage.$get(args, options))
}

export async function getRepositorySearchTypeIncident(
  args: InferRequestType<typeof client.repository.search.type.incident.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.incident.$get(args, options))
}

export async function getRepositorySearchTypeJeopardy(
  args: InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.jeopardy.$get(args, options))
}

export async function getRepositorySearchTypeLatlonimage(
  args: InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.latlonimage.$get(args, options))
}

export async function getRepositorySearchTypeLidarCollection(
  args: InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.lidar_collection.$get(args, options))
}

export async function getRepositorySearchTypeLidarLas(
  args: InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.lidar_las.$get(args, options))
}

export async function getRepositorySearchTypeLidarLvis(
  args: InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.lidar_lvis.$get(args, options))
}

export async function getRepositorySearchTypeLink(
  args: InferRequestType<typeof client.repository.search.type.link.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.link.$get(args, options))
}

export async function getRepositorySearchTypeLocalfiles(
  args: InferRequestType<typeof client.repository.search.type.localfiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.localfiles.$get(args, options))
}

export async function getRepositorySearchTypeLocations(
  args: InferRequestType<typeof client.repository.search.type.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.locations.$get(args, options))
}

export async function getRepositorySearchTypeMapGooglemap(
  args: InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.map_googlemap.$get(args, options))
}

export async function getRepositorySearchTypeMediaAudiofile(
  args: InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.media_audiofile.$get(args, options))
}

export async function getRepositorySearchTypeMediaImageloop(
  args: InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.media_imageloop.$get(args, options))
}

export async function getRepositorySearchTypeMediaPhotoalbum(
  args: InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.media_photoalbum.$get(args, options))
}

export async function getRepositorySearchTypeMediaVideoChannel(
  args: InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.media_video_channel.$get(args, options))
}

export async function getRepositorySearchTypeMediaVideoQuicktime(
  args: InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.media_video_quicktime.$get(args, options),
  )
}

export async function getRepositorySearchTypeMediaYoutubevideo(
  args: InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.media_youtubevideo.$get(args, options))
}

export async function getRepositorySearchTypeNotes(
  args: InferRequestType<typeof client.repository.search.type.notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.notes.$get(args, options))
}

export async function getRepositorySearchTypeNotesJsonfile(
  args: InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.notes_jsonfile.$get(args, options))
}

export async function getRepositorySearchTypeNotesNote(
  args: InferRequestType<typeof client.repository.search.type.notes_note.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.notes_note.$get(args, options))
}

export async function getRepositorySearchTypeNotesNotebook(
  args: InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.notes_notebook.$get(args, options))
}

export async function getRepositorySearchTypeNwsfeed(
  args: InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.nwsfeed.$get(args, options))
}

export async function getRepositorySearchTypeOpendaplink(
  args: InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.opendaplink.$get(args, options))
}

export async function getRepositorySearchTypeOwlClass(
  args: InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type['owl.class'].$get(args, options))
}

export async function getRepositorySearchTypeOwlOntology(
  args: InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type['owl.ontology'].$get(args, options))
}

export async function getRepositorySearchTypePasteitentry(
  args: InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.pasteitentry.$get(args, options))
}

export async function getRepositorySearchTypePointText(
  args: InferRequestType<typeof client.repository.search.type.point_text.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.point_text.$get(args, options))
}

export async function getRepositorySearchTypePoliceStopData(
  args: InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.police_stop_data.$get(args, options))
}

export async function getRepositorySearchTypePoll(
  args: InferRequestType<typeof client.repository.search.type.poll.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.poll.$get(args, options))
}

export async function getRepositorySearchTypeProjectCampaign(
  args: InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_campaign.$get(args, options))
}

export async function getRepositorySearchTypeProjectCasestudy(
  args: InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_casestudy.$get(args, options))
}

export async function getRepositorySearchTypeProjectContribution(
  args: InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_contribution.$get(args, options))
}

export async function getRepositorySearchTypeProjectDataformat(
  args: InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_dataformat.$get(args, options))
}

export async function getRepositorySearchTypeProjectDataset(
  args: InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_dataset.$get(args, options))
}

export async function getRepositorySearchTypeProjectDeployment(
  args: InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_deployment.$get(args, options))
}

export async function getRepositorySearchTypeProjectExperiment(
  args: InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_experiment.$get(args, options))
}

export async function getRepositorySearchTypeProjectFieldnote(
  args: InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_fieldnote.$get(args, options))
}

export async function getRepositorySearchTypeProjectGpsControlpoints(
  args: InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.project_gps_controlpoints.$get(args, options),
  )
}

export async function getRepositorySearchTypeProjectGpsRaw(
  args: InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_gps_raw.$get(args, options))
}

export async function getRepositorySearchTypeProjectGpsRinex(
  args: InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_gps_rinex.$get(args, options))
}

export async function getRepositorySearchTypeProjectInstrument(
  args: InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_instrument.$get(args, options))
}

export async function getRepositorySearchTypeProjectLearningResource(
  args: InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.project_learning_resource.$get(args, options),
  )
}

export async function getRepositorySearchTypeProjectMeeting(
  args: InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_meeting.$get(args, options))
}

export async function getRepositorySearchTypeProjectOrganization(
  args: InferRequestType<typeof client.repository.search.type.project_organization.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_organization.$get(args, options))
}

export async function getRepositorySearchTypeProjectProgram(
  args: InferRequestType<typeof client.repository.search.type.project_program.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_program.$get(args, options))
}

export async function getRepositorySearchTypeProjectProject(
  args: InferRequestType<typeof client.repository.search.type.project_project.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_project.$get(args, options))
}

export async function getRepositorySearchTypeProjectService(
  args: InferRequestType<typeof client.repository.search.type.project_service.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_service.$get(args, options))
}

export async function getRepositorySearchTypeProjectSite(
  args: InferRequestType<typeof client.repository.search.type.project_site.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_site.$get(args, options))
}

export async function getRepositorySearchTypeProjectSoftwarepackage(
  args: InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.project_softwarepackage.$get(args, options),
  )
}

export async function getRepositorySearchTypeProjectStandardName(
  args: InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.project_standard_name.$get(args, options),
  )
}

export async function getRepositorySearchTypeProjectSurveylocation(
  args: InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.project_surveylocation.$get(args, options),
  )
}

export async function getRepositorySearchTypeProjectTerm(
  args: InferRequestType<typeof client.repository.search.type.project_term.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_term.$get(args, options))
}

export async function getRepositorySearchTypeProjectVisit(
  args: InferRequestType<typeof client.repository.search.type.project_visit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_visit.$get(args, options))
}

export async function getRepositorySearchTypeProjectVocabulary(
  args: InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.project_vocabulary.$get(args, options))
}

export async function getRepositorySearchTypePropertySales(
  args: InferRequestType<typeof client.repository.search.type.property_sales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.property_sales.$get(args, options))
}

export async function getRepositorySearchTypePropertydb(
  args: InferRequestType<typeof client.repository.search.type.propertydb.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.propertydb.$get(args, options))
}

export async function getRepositorySearchTypePythonNotebook(
  args: InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.python_notebook.$get(args, options))
}

export async function getRepositorySearchTypeSlackTeam(
  args: InferRequestType<typeof client.repository.search.type.slack_team.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.slack_team.$get(args, options))
}

export async function getRepositorySearchTypeStatusboard(
  args: InferRequestType<typeof client.repository.search.type.statusboard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.statusboard.$get(args, options))
}

export async function getRepositorySearchTypeSunrisesunset(
  args: InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.sunrisesunset.$get(args, options))
}

export async function getRepositorySearchTypeTasks(
  args: InferRequestType<typeof client.repository.search.type.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.tasks.$get(args, options))
}

export async function getRepositorySearchTypeTmdbmovies(
  args: InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.tmdbmovies.$get(args, options))
}

export async function getRepositorySearchTypeTodo(
  args: InferRequestType<typeof client.repository.search.type.todo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.todo.$get(args, options))
}

export async function getRepositorySearchTypeTripEvent(
  args: InferRequestType<typeof client.repository.search.type.trip_event.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.trip_event.$get(args, options))
}

export async function getRepositorySearchTypeTripFlight(
  args: InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.trip_flight.$get(args, options))
}

export async function getRepositorySearchTypeTripHotel(
  args: InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.trip_hotel.$get(args, options))
}

export async function getRepositorySearchTypeTripReport(
  args: InferRequestType<typeof client.repository.search.type.trip_report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.trip_report.$get(args, options))
}

export async function getRepositorySearchTypeTripTrip(
  args: InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.trip_trip.$get(args, options))
}

export async function getRepositorySearchTypeTypeAwcMetar(
  args: InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_awc_metar.$get(args, options))
}

export async function getRepositorySearchTypeTypeBizStockseries(
  args: InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_biz_stockseries.$get(args, options))
}

export async function getRepositorySearchTypeTypeBlsSeries(
  args: InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_bls_series.$get(args, options))
}

export async function getRepositorySearchTypeTypeBlsSurvey(
  args: InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_bls_survey.$get(args, options))
}

export async function getRepositorySearchTypeTypeCensusAcs(
  args: InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_census_acs.$get(args, options))
}

export async function getRepositorySearchTypeTypeDaymet(
  args: InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_daymet.$get(args, options))
}

export async function getRepositorySearchTypeTypeDbTable(
  args: InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_db_table.$get(args, options))
}

export async function getRepositorySearchTypeTypeDocumentCsv(
  args: InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_document_csv.$get(args, options))
}

export async function getRepositorySearchTypeTypeDocumentDoc(
  args: InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_document_doc.$get(args, options))
}

export async function getRepositorySearchTypeTypeDocumentHtml(
  args: InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_document_html.$get(args, options))
}

export async function getRepositorySearchTypeTypeDocumentPdf(
  args: InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_document_pdf.$get(args, options))
}

export async function getRepositorySearchTypeTypeDocumentPpt(
  args: InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_document_ppt.$get(args, options))
}

export async function getRepositorySearchTypeTypeDocumentXls(
  args: InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_document_xls.$get(args, options))
}

export async function getRepositorySearchTypeTypeDrilsdownCasestudy(
  args: InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_drilsdown_casestudy.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeEdgarFiling(
  args: InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_edgar_filing.$get(args, options))
}

export async function getRepositorySearchTypeTypeEiaCategory(
  args: InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_eia_category.$get(args, options))
}

export async function getRepositorySearchTypeTypeEiaSeries(
  args: InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_eia_series.$get(args, options))
}

export async function getRepositorySearchTypeTypeEsriFeatureserver(
  args: InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_esri_featureserver.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeEsriGeometryserver(
  args: InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_esri_geometryserver.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeEsriGpserver(
  args: InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_esri_gpserver.$get(args, options))
}

export async function getRepositorySearchTypeTypeEsriImageserver(
  args: InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_esri_imageserver.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeEsriLayer(
  args: InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_esri_layer.$get(args, options))
}

export async function getRepositorySearchTypeTypeEsriMapserver(
  args: InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_esri_mapserver.$get(args, options))
}

export async function getRepositorySearchTypeTypeEsriRestfolder(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_esri_restfolder.$get(args, options))
}

export async function getRepositorySearchTypeTypeEsriRestserver(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_esri_restserver.$get(args, options))
}

export async function getRepositorySearchTypeTypeEsriRestservice(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_esri_restservice.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeExtremes(
  args: InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_extremes.$get(args, options))
}

export async function getRepositorySearchTypeTypeFredCategory(
  args: InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_fred_category.$get(args, options))
}

export async function getRepositorySearchTypeTypeFredSeries(
  args: InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_fred_series.$get(args, options))
}

export async function getRepositorySearchTypeTypeGtfsAgency(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_gtfs_agency.$get(args, options))
}

export async function getRepositorySearchTypeTypeGtfsRoute(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_gtfs_route.$get(args, options))
}

export async function getRepositorySearchTypeTypeGtfsRoutes(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_gtfs_routes.$get(args, options))
}

export async function getRepositorySearchTypeTypeGtfsStop(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_gtfs_stop.$get(args, options))
}

export async function getRepositorySearchTypeTypeGtfsStops(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_gtfs_stops.$get(args, options))
}

export async function getRepositorySearchTypeTypeGtfsTrip(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_gtfs_trip.$get(args, options))
}

export async function getRepositorySearchTypeTypeHazarddata(
  args: InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_hazarddata.$get(args, options))
}

export async function getRepositorySearchTypeTypeHydroColorado(
  args: InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_hydro_colorado.$get(args, options))
}

export async function getRepositorySearchTypeTypeIdvBundle(
  args: InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_idv_bundle.$get(args, options))
}

export async function getRepositorySearchTypeTypeImage(
  args: InferRequestType<typeof client.repository.search.type.type_image.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_image.$get(args, options))
}

export async function getRepositorySearchTypeTypeImageAirport(
  args: InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_image_airport.$get(args, options))
}

export async function getRepositorySearchTypeTypeImageWebcam(
  args: InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_image_webcam.$get(args, options))
}

export async function getRepositorySearchTypeTypeMb(
  args: InferRequestType<typeof client.repository.search.type.type_mb.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_mb.$get(args, options))
}

export async function getRepositorySearchTypeTypeMbCollection(
  args: InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_mb_collection.$get(args, options))
}

export async function getRepositorySearchTypeTypeMbPointBasic(
  args: InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_mb_point_basic.$get(args, options))
}

export async function getRepositorySearchTypeTypeMetametaDictionary(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_metameta_dictionary.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeMetametaField(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_metameta_field.$get(args, options))
}

export async function getRepositorySearchTypeTypeNasaames(
  args: InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_nasaames.$get(args, options))
}

export async function getRepositorySearchTypeTypeNcss(
  args: InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_ncss.$get(args, options))
}

export async function getRepositorySearchTypeTypeNitf(
  args: InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_nitf.$get(args, options))
}

export async function getRepositorySearchTypeTypePointAmerifluxLevel2(
  args: InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ameriflux_level2.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointAmrcFinal(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_amrc_final.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointAmrcFreewave(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_amrc_freewave.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointCzo(
  args: InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_czo.$get(args, options))
}

export async function getRepositorySearchTypeTypePointGcnet(
  args: InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_gcnet.$get(args, options))
}

export async function getRepositorySearchTypeTypePointGeomagIaga2002(
  args: InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_geomag_iaga2002.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointHydroWaterml(
  args: InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_hydro_waterml.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointIcebridgeAtmIcessn(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_icebridge_atm_icessn.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointIcebridgeAtmQfit(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_icebridge_atm_qfit.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointIcebridgeParis(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_icebridge_paris.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointIdv(
  args: InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_idv.$get(args, options))
}

export async function getRepositorySearchTypeTypePointInline(
  args: InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_inline.$get(args, options))
}

export async function getRepositorySearchTypeTypePointNcdcClimate(
  args: InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ncdc_climate.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointNetcdf(
  args: InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_netcdf.$get(args, options))
}

export async function getRepositorySearchTypeTypePointNoaaCarbon(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_noaa_carbon.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointNoaaFlaskEvent(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_noaa_flask_event.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointNoaaFlaskMonth(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_noaa_flask_month.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointNoaaMadis(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_noaa_madis.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointNoaaTower(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_noaa_tower.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOceanCnv(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_ocean_cnv.$get(args, options))
}

export async function getRepositorySearchTypeTypePointOceanCsvSadoTTS(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ocean_csv_sado_TTS.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOceanCsvSadoMeteo(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ocean_csv_sado_meteo.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOceanCsvSadoPosition(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ocean_csv_sado_position.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOceanNetcdfGlider(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ocean_netcdf_glider.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOceanNetcdfTrack(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ocean_netcdf_track.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOceanOoiDmgx(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_ocean_ooi_dmgx.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointOpenaq(
  args: InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_openaq.$get(args, options))
}

export async function getRepositorySearchTypeTypePointPboPositionTimeSeries(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_pbo_position_time_series.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointSimpleRecords(
  args: InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_point_simple_records.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypePointSnotel(
  args: InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_snotel.$get(args, options))
}

export async function getRepositorySearchTypeTypePointText(
  args: InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_text.$get(args, options))
}

export async function getRepositorySearchTypeTypePointWsbbGgp(
  args: InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_point_wsbb_ggp.$get(args, options))
}

export async function getRepositorySearchTypeTypePsdMonthlyClimateIndex(
  args: InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_psd_monthly_climate_index.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeQuandlSeries(
  args: InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_quandl_series.$get(args, options))
}

export async function getRepositorySearchTypeTypeServiceGroup(
  args: InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_service_group.$get(args, options))
}

export async function getRepositorySearchTypeTypeServiceLink(
  args: InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_service_link.$get(args, options))
}

export async function getRepositorySearchTypeTypeSocrataSeries(
  args: InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_socrata_series.$get(args, options))
}

export async function getRepositorySearchTypeTypeSoundingCod(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_sounding_cod.$get(args, options))
}

export async function getRepositorySearchTypeTypeSoundingFrd(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_sounding_frd.$get(args, options))
}

export async function getRepositorySearchTypeTypeSoundingGsd(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_sounding_gsd.$get(args, options))
}

export async function getRepositorySearchTypeTypeSoundingWyoming(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_sounding_wyoming.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeTmy(
  args: InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_tmy.$get(args, options))
}

export async function getRepositorySearchTypeTypeTweet(
  args: InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_tweet.$get(args, options))
}

export async function getRepositorySearchTypeTypeUsgsGauge(
  args: InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_usgs_gauge.$get(args, options))
}

export async function getRepositorySearchTypeTypeVirtual(
  args: InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_virtual.$get(args, options))
}

export async function getRepositorySearchTypeTypeWmsCapabilities(
  args: InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repository.search.type.type_wms_capabilities.$get(args, options),
  )
}

export async function getRepositorySearchTypeTypeWmsLayer(
  args: InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.type_wms_layer.$get(args, options))
}

export async function getRepositorySearchTypeUfoSightings(
  args: InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.ufo_sightings.$get(args, options))
}

export async function getRepositorySearchTypeUsPlaces(
  args: InferRequestType<typeof client.repository.search.type.us_places.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.us_places.$get(args, options))
}

export async function getRepositorySearchTypeVoteYesno(
  args: InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.vote_yesno.$get(args, options))
}

export async function getRepositorySearchTypeWeblog(
  args: InferRequestType<typeof client.repository.search.type.weblog.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.weblog.$get(args, options))
}

export async function getRepositorySearchTypeWikipage(
  args: InferRequestType<typeof client.repository.search.type.wikipage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repository.search.type.wikipage.$get(args, options))
}
