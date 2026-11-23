import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAmendmentCongressAmendmentTypeAmendmentNumberActionsRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberTextRoute,
  getAmendmentCongressAmendmentTypeRoute,
  getAmendmentCongressRoute,
  getAmendmentRoute,
  getBillCongressBillTypeBillNumberActionsRoute,
  getBillCongressBillTypeBillNumberAmendmentsRoute,
  getBillCongressBillTypeBillNumberCommitteesRoute,
  getBillCongressBillTypeBillNumberCosponsorsRoute,
  getBillCongressBillTypeBillNumberRelatedbillsRoute,
  getBillCongressBillTypeBillNumberRoute,
  getBillCongressBillTypeBillNumberSubjectsRoute,
  getBillCongressBillTypeBillNumberSummariesRoute,
  getBillCongressBillTypeBillNumberTextRoute,
  getBillCongressBillTypeBillNumberTitlesRoute,
  getBillCongressBillTypeRoute,
  getBillCongressRoute,
  getBillRoute,
  getBoundCongressionalRecordRoute,
  getBoundCongressionalRecordYearMonthDayRoute,
  getBoundCongressionalRecordYearMonthRoute,
  getBoundCongressionalRecordYearRoute,
  getCommitteeChamberCommitteeCodeBillsRoute,
  getCommitteeChamberCommitteeCodeHouseCommunicationRoute,
  getCommitteeChamberCommitteeCodeNominationsRoute,
  getCommitteeChamberCommitteeCodeReportsRoute,
  getCommitteeChamberCommitteeCodeRoute,
  getCommitteeChamberCommitteeCodeSenateCommunicationRoute,
  getCommitteeChamberRoute,
  getCommitteeCongressChamberCommitteeCodeRoute,
  getCommitteeCongressChamberRoute,
  getCommitteeCongressRoute,
  getCommitteeMeetingCongressChamberEventIdRoute,
  getCommitteeMeetingCongressChamberRoute,
  getCommitteeMeetingCongressRoute,
  getCommitteeMeetingRoute,
  getCommitteePrintCongressChamberJacketNumberRoute,
  getCommitteePrintCongressChamberJacketNumberTextRoute,
  getCommitteePrintCongressChamberRoute,
  getCommitteePrintCongressRoute,
  getCommitteePrintRoute,
  getCommitteeReportCongressReportTypeReportNumberRoute,
  getCommitteeReportCongressReportTypeReportNumberTextRoute,
  getCommitteeReportCongressReportTypeRoute,
  getCommitteeReportCongressRoute,
  getCommitteeReportRoute,
  getCommitteeRoute,
  getCongressCongressRoute,
  getCongressCurrentRoute,
  getCongressionalRecordRoute,
  getCongressRoute,
  getCrsreportReportNumberRoute,
  getCrsreportRoute,
  getDailyCongressionalRecordRoute,
  getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute,
  getDailyCongressionalRecordVolumeNumberIssueNumberRoute,
  getDailyCongressionalRecordVolumeNumberRoute,
  getHearingCongressChamberJacketNumberRoute,
  getHearingCongressChamberRoute,
  getHearingCongressRoute,
  getHearingRoute,
  getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute,
  getHouseCommunicationCongressCommunicationTypeRoute,
  getHouseCommunicationCongressRoute,
  getHouseCommunicationRoute,
  getHouseRequirementRequirementNumberMatchingCommunicationsRoute,
  getHouseRequirementRequirementNumberRoute,
  getHouseRequirementRoute,
  getHouseVoteCongressRoute,
  getHouseVoteCongressSessionRoute,
  getHouseVoteCongressSessionVoteNumberMembersRoute,
  getHouseVoteCongressSessionVoteNumberRoute,
  getHouseVoteRoute,
  getLawCongressLawTypeLawNumberRoute,
  getLawCongressLawTypeRoute,
  getLawCongressRoute,
  getMemberBioguideIdCosponsoredLegislationRoute,
  getMemberBioguideIdRoute,
  getMemberBioguideIdSponsoredLegislationRoute,
  getMemberCongressCongressRoute,
  getMemberCongressCongressStateCodeDistrictRoute,
  getMemberRoute,
  getMemberStateCodeDistrictRoute,
  getMemberStateCodeRoute,
  getNominationCongressNominationNumberActionsRoute,
  getNominationCongressNominationNumberCommitteesRoute,
  getNominationCongressNominationNumberHearingsRoute,
  getNominationCongressNominationNumberOrdinalRoute,
  getNominationCongressNominationNumberRoute,
  getNominationCongressRoute,
  getNominationRoute,
  getSenateCommunicationCongressCommunicationTypeCommunicationNumberRoute,
  getSenateCommunicationCongressCommunicationTypeRoute,
  getSenateCommunicationCongressRoute,
  getSenateCommunicationRoute,
  getSummariesCongressBillTypeRoute,
  getSummariesCongressRoute,
  getSummariesRoute,
  getTreatyCongressRoute,
  getTreatyCongressTreatyNumberActionsRoute,
  getTreatyCongressTreatyNumberCommitteesRoute,
  getTreatyCongressTreatyNumberRoute,
  getTreatyCongressTreatyNumberTreatySuffixActionsRoute,
  getTreatyCongressTreatyNumberTreatySuffixRoute,
  getTreatyRoute,
} from './routes'
import {
  getAmendmentCongressAmendmentTypeAmendmentNumberActionsRouteHandler,
  getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRouteHandler,
  getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRouteHandler,
  getAmendmentCongressAmendmentTypeAmendmentNumberRouteHandler,
  getAmendmentCongressAmendmentTypeAmendmentNumberTextRouteHandler,
  getAmendmentCongressAmendmentTypeRouteHandler,
  getAmendmentCongressRouteHandler,
  getAmendmentRouteHandler,
  getBillCongressBillTypeBillNumberActionsRouteHandler,
  getBillCongressBillTypeBillNumberAmendmentsRouteHandler,
  getBillCongressBillTypeBillNumberCommitteesRouteHandler,
  getBillCongressBillTypeBillNumberCosponsorsRouteHandler,
  getBillCongressBillTypeBillNumberRelatedbillsRouteHandler,
  getBillCongressBillTypeBillNumberRouteHandler,
  getBillCongressBillTypeBillNumberSubjectsRouteHandler,
  getBillCongressBillTypeBillNumberSummariesRouteHandler,
  getBillCongressBillTypeBillNumberTextRouteHandler,
  getBillCongressBillTypeBillNumberTitlesRouteHandler,
  getBillCongressBillTypeRouteHandler,
  getBillCongressRouteHandler,
  getBillRouteHandler,
  getBoundCongressionalRecordRouteHandler,
  getBoundCongressionalRecordYearMonthDayRouteHandler,
  getBoundCongressionalRecordYearMonthRouteHandler,
  getBoundCongressionalRecordYearRouteHandler,
  getCommitteeChamberCommitteeCodeBillsRouteHandler,
  getCommitteeChamberCommitteeCodeHouseCommunicationRouteHandler,
  getCommitteeChamberCommitteeCodeNominationsRouteHandler,
  getCommitteeChamberCommitteeCodeReportsRouteHandler,
  getCommitteeChamberCommitteeCodeRouteHandler,
  getCommitteeChamberCommitteeCodeSenateCommunicationRouteHandler,
  getCommitteeChamberRouteHandler,
  getCommitteeCongressChamberCommitteeCodeRouteHandler,
  getCommitteeCongressChamberRouteHandler,
  getCommitteeCongressRouteHandler,
  getCommitteeMeetingCongressChamberEventIdRouteHandler,
  getCommitteeMeetingCongressChamberRouteHandler,
  getCommitteeMeetingCongressRouteHandler,
  getCommitteeMeetingRouteHandler,
  getCommitteePrintCongressChamberJacketNumberRouteHandler,
  getCommitteePrintCongressChamberJacketNumberTextRouteHandler,
  getCommitteePrintCongressChamberRouteHandler,
  getCommitteePrintCongressRouteHandler,
  getCommitteePrintRouteHandler,
  getCommitteeReportCongressReportTypeReportNumberRouteHandler,
  getCommitteeReportCongressReportTypeReportNumberTextRouteHandler,
  getCommitteeReportCongressReportTypeRouteHandler,
  getCommitteeReportCongressRouteHandler,
  getCommitteeReportRouteHandler,
  getCommitteeRouteHandler,
  getCongressCongressRouteHandler,
  getCongressCurrentRouteHandler,
  getCongressionalRecordRouteHandler,
  getCongressRouteHandler,
  getCrsreportReportNumberRouteHandler,
  getCrsreportRouteHandler,
  getDailyCongressionalRecordRouteHandler,
  getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRouteHandler,
  getDailyCongressionalRecordVolumeNumberIssueNumberRouteHandler,
  getDailyCongressionalRecordVolumeNumberRouteHandler,
  getHearingCongressChamberJacketNumberRouteHandler,
  getHearingCongressChamberRouteHandler,
  getHearingCongressRouteHandler,
  getHearingRouteHandler,
  getHouseCommunicationCongressCommunicationTypeCommunicationNumberRouteHandler,
  getHouseCommunicationCongressCommunicationTypeRouteHandler,
  getHouseCommunicationCongressRouteHandler,
  getHouseCommunicationRouteHandler,
  getHouseRequirementRequirementNumberMatchingCommunicationsRouteHandler,
  getHouseRequirementRequirementNumberRouteHandler,
  getHouseRequirementRouteHandler,
  getHouseVoteCongressRouteHandler,
  getHouseVoteCongressSessionRouteHandler,
  getHouseVoteCongressSessionVoteNumberMembersRouteHandler,
  getHouseVoteCongressSessionVoteNumberRouteHandler,
  getHouseVoteRouteHandler,
  getLawCongressLawTypeLawNumberRouteHandler,
  getLawCongressLawTypeRouteHandler,
  getLawCongressRouteHandler,
  getMemberBioguideIdCosponsoredLegislationRouteHandler,
  getMemberBioguideIdRouteHandler,
  getMemberBioguideIdSponsoredLegislationRouteHandler,
  getMemberCongressCongressRouteHandler,
  getMemberCongressCongressStateCodeDistrictRouteHandler,
  getMemberRouteHandler,
  getMemberStateCodeDistrictRouteHandler,
  getMemberStateCodeRouteHandler,
  getNominationCongressNominationNumberActionsRouteHandler,
  getNominationCongressNominationNumberCommitteesRouteHandler,
  getNominationCongressNominationNumberHearingsRouteHandler,
  getNominationCongressNominationNumberOrdinalRouteHandler,
  getNominationCongressNominationNumberRouteHandler,
  getNominationCongressRouteHandler,
  getNominationRouteHandler,
  getSenateCommunicationCongressCommunicationTypeCommunicationNumberRouteHandler,
  getSenateCommunicationCongressCommunicationTypeRouteHandler,
  getSenateCommunicationCongressRouteHandler,
  getSenateCommunicationRouteHandler,
  getSummariesCongressBillTypeRouteHandler,
  getSummariesCongressRouteHandler,
  getSummariesRouteHandler,
  getTreatyCongressRouteHandler,
  getTreatyCongressTreatyNumberActionsRouteHandler,
  getTreatyCongressTreatyNumberCommitteesRouteHandler,
  getTreatyCongressTreatyNumberRouteHandler,
  getTreatyCongressTreatyNumberTreatySuffixActionsRouteHandler,
  getTreatyCongressTreatyNumberTreatySuffixRouteHandler,
  getTreatyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBillRoute, getBillRouteHandler)
  .openapi(getBillCongressRoute, getBillCongressRouteHandler)
  .openapi(getBillCongressBillTypeRoute, getBillCongressBillTypeRouteHandler)
  .openapi(getBillCongressBillTypeBillNumberRoute, getBillCongressBillTypeBillNumberRouteHandler)
  .openapi(
    getBillCongressBillTypeBillNumberActionsRoute,
    getBillCongressBillTypeBillNumberActionsRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberAmendmentsRoute,
    getBillCongressBillTypeBillNumberAmendmentsRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberCommitteesRoute,
    getBillCongressBillTypeBillNumberCommitteesRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberCosponsorsRoute,
    getBillCongressBillTypeBillNumberCosponsorsRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberRelatedbillsRoute,
    getBillCongressBillTypeBillNumberRelatedbillsRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberSubjectsRoute,
    getBillCongressBillTypeBillNumberSubjectsRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberSummariesRoute,
    getBillCongressBillTypeBillNumberSummariesRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberTextRoute,
    getBillCongressBillTypeBillNumberTextRouteHandler,
  )
  .openapi(
    getBillCongressBillTypeBillNumberTitlesRoute,
    getBillCongressBillTypeBillNumberTitlesRouteHandler,
  )
  .openapi(getLawCongressRoute, getLawCongressRouteHandler)
  .openapi(getLawCongressLawTypeRoute, getLawCongressLawTypeRouteHandler)
  .openapi(getLawCongressLawTypeLawNumberRoute, getLawCongressLawTypeLawNumberRouteHandler)
  .openapi(getAmendmentRoute, getAmendmentRouteHandler)
  .openapi(getAmendmentCongressRoute, getAmendmentCongressRouteHandler)
  .openapi(getAmendmentCongressAmendmentTypeRoute, getAmendmentCongressAmendmentTypeRouteHandler)
  .openapi(
    getAmendmentCongressAmendmentTypeAmendmentNumberRoute,
    getAmendmentCongressAmendmentTypeAmendmentNumberRouteHandler,
  )
  .openapi(
    getAmendmentCongressAmendmentTypeAmendmentNumberActionsRoute,
    getAmendmentCongressAmendmentTypeAmendmentNumberActionsRouteHandler,
  )
  .openapi(
    getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRoute,
    getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRouteHandler,
  )
  .openapi(
    getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRoute,
    getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRouteHandler,
  )
  .openapi(
    getAmendmentCongressAmendmentTypeAmendmentNumberTextRoute,
    getAmendmentCongressAmendmentTypeAmendmentNumberTextRouteHandler,
  )
  .openapi(getSummariesRoute, getSummariesRouteHandler)
  .openapi(getSummariesCongressRoute, getSummariesCongressRouteHandler)
  .openapi(getSummariesCongressBillTypeRoute, getSummariesCongressBillTypeRouteHandler)
  .openapi(getCongressRoute, getCongressRouteHandler)
  .openapi(getCongressCongressRoute, getCongressCongressRouteHandler)
  .openapi(getCongressCurrentRoute, getCongressCurrentRouteHandler)
  .openapi(getMemberRoute, getMemberRouteHandler)
  .openapi(getMemberBioguideIdRoute, getMemberBioguideIdRouteHandler)
  .openapi(
    getMemberBioguideIdSponsoredLegislationRoute,
    getMemberBioguideIdSponsoredLegislationRouteHandler,
  )
  .openapi(
    getMemberBioguideIdCosponsoredLegislationRoute,
    getMemberBioguideIdCosponsoredLegislationRouteHandler,
  )
  .openapi(getMemberCongressCongressRoute, getMemberCongressCongressRouteHandler)
  .openapi(getMemberStateCodeRoute, getMemberStateCodeRouteHandler)
  .openapi(getMemberStateCodeDistrictRoute, getMemberStateCodeDistrictRouteHandler)
  .openapi(
    getMemberCongressCongressStateCodeDistrictRoute,
    getMemberCongressCongressStateCodeDistrictRouteHandler,
  )
  .openapi(getHouseVoteRoute, getHouseVoteRouteHandler)
  .openapi(getHouseVoteCongressRoute, getHouseVoteCongressRouteHandler)
  .openapi(getHouseVoteCongressSessionRoute, getHouseVoteCongressSessionRouteHandler)
  .openapi(
    getHouseVoteCongressSessionVoteNumberRoute,
    getHouseVoteCongressSessionVoteNumberRouteHandler,
  )
  .openapi(
    getHouseVoteCongressSessionVoteNumberMembersRoute,
    getHouseVoteCongressSessionVoteNumberMembersRouteHandler,
  )
  .openapi(getCommitteeRoute, getCommitteeRouteHandler)
  .openapi(getCommitteeChamberRoute, getCommitteeChamberRouteHandler)
  .openapi(getCommitteeCongressRoute, getCommitteeCongressRouteHandler)
  .openapi(getCommitteeCongressChamberRoute, getCommitteeCongressChamberRouteHandler)
  .openapi(getCommitteeChamberCommitteeCodeRoute, getCommitteeChamberCommitteeCodeRouteHandler)
  .openapi(
    getCommitteeCongressChamberCommitteeCodeRoute,
    getCommitteeCongressChamberCommitteeCodeRouteHandler,
  )
  .openapi(
    getCommitteeChamberCommitteeCodeBillsRoute,
    getCommitteeChamberCommitteeCodeBillsRouteHandler,
  )
  .openapi(
    getCommitteeChamberCommitteeCodeReportsRoute,
    getCommitteeChamberCommitteeCodeReportsRouteHandler,
  )
  .openapi(
    getCommitteeChamberCommitteeCodeNominationsRoute,
    getCommitteeChamberCommitteeCodeNominationsRouteHandler,
  )
  .openapi(
    getCommitteeChamberCommitteeCodeHouseCommunicationRoute,
    getCommitteeChamberCommitteeCodeHouseCommunicationRouteHandler,
  )
  .openapi(
    getCommitteeChamberCommitteeCodeSenateCommunicationRoute,
    getCommitteeChamberCommitteeCodeSenateCommunicationRouteHandler,
  )
  .openapi(getCommitteeReportRoute, getCommitteeReportRouteHandler)
  .openapi(getCommitteeReportCongressRoute, getCommitteeReportCongressRouteHandler)
  .openapi(
    getCommitteeReportCongressReportTypeRoute,
    getCommitteeReportCongressReportTypeRouteHandler,
  )
  .openapi(
    getCommitteeReportCongressReportTypeReportNumberRoute,
    getCommitteeReportCongressReportTypeReportNumberRouteHandler,
  )
  .openapi(
    getCommitteeReportCongressReportTypeReportNumberTextRoute,
    getCommitteeReportCongressReportTypeReportNumberTextRouteHandler,
  )
  .openapi(getCommitteePrintRoute, getCommitteePrintRouteHandler)
  .openapi(getCommitteePrintCongressRoute, getCommitteePrintCongressRouteHandler)
  .openapi(getCommitteePrintCongressChamberRoute, getCommitteePrintCongressChamberRouteHandler)
  .openapi(
    getCommitteePrintCongressChamberJacketNumberRoute,
    getCommitteePrintCongressChamberJacketNumberRouteHandler,
  )
  .openapi(
    getCommitteePrintCongressChamberJacketNumberTextRoute,
    getCommitteePrintCongressChamberJacketNumberTextRouteHandler,
  )
  .openapi(getCommitteeMeetingRoute, getCommitteeMeetingRouteHandler)
  .openapi(getCommitteeMeetingCongressRoute, getCommitteeMeetingCongressRouteHandler)
  .openapi(getCommitteeMeetingCongressChamberRoute, getCommitteeMeetingCongressChamberRouteHandler)
  .openapi(
    getCommitteeMeetingCongressChamberEventIdRoute,
    getCommitteeMeetingCongressChamberEventIdRouteHandler,
  )
  .openapi(getHearingRoute, getHearingRouteHandler)
  .openapi(getHearingCongressRoute, getHearingCongressRouteHandler)
  .openapi(getHearingCongressChamberRoute, getHearingCongressChamberRouteHandler)
  .openapi(
    getHearingCongressChamberJacketNumberRoute,
    getHearingCongressChamberJacketNumberRouteHandler,
  )
  .openapi(getCongressionalRecordRoute, getCongressionalRecordRouteHandler)
  .openapi(getDailyCongressionalRecordRoute, getDailyCongressionalRecordRouteHandler)
  .openapi(
    getDailyCongressionalRecordVolumeNumberRoute,
    getDailyCongressionalRecordVolumeNumberRouteHandler,
  )
  .openapi(
    getDailyCongressionalRecordVolumeNumberIssueNumberRoute,
    getDailyCongressionalRecordVolumeNumberIssueNumberRouteHandler,
  )
  .openapi(
    getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute,
    getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRouteHandler,
  )
  .openapi(getBoundCongressionalRecordRoute, getBoundCongressionalRecordRouteHandler)
  .openapi(getBoundCongressionalRecordYearRoute, getBoundCongressionalRecordYearRouteHandler)
  .openapi(
    getBoundCongressionalRecordYearMonthRoute,
    getBoundCongressionalRecordYearMonthRouteHandler,
  )
  .openapi(
    getBoundCongressionalRecordYearMonthDayRoute,
    getBoundCongressionalRecordYearMonthDayRouteHandler,
  )
  .openapi(getHouseCommunicationRoute, getHouseCommunicationRouteHandler)
  .openapi(getHouseCommunicationCongressRoute, getHouseCommunicationCongressRouteHandler)
  .openapi(
    getHouseCommunicationCongressCommunicationTypeRoute,
    getHouseCommunicationCongressCommunicationTypeRouteHandler,
  )
  .openapi(
    getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute,
    getHouseCommunicationCongressCommunicationTypeCommunicationNumberRouteHandler,
  )
  .openapi(getHouseRequirementRoute, getHouseRequirementRouteHandler)
  .openapi(
    getHouseRequirementRequirementNumberRoute,
    getHouseRequirementRequirementNumberRouteHandler,
  )
  .openapi(
    getHouseRequirementRequirementNumberMatchingCommunicationsRoute,
    getHouseRequirementRequirementNumberMatchingCommunicationsRouteHandler,
  )
  .openapi(getSenateCommunicationRoute, getSenateCommunicationRouteHandler)
  .openapi(getSenateCommunicationCongressRoute, getSenateCommunicationCongressRouteHandler)
  .openapi(
    getSenateCommunicationCongressCommunicationTypeRoute,
    getSenateCommunicationCongressCommunicationTypeRouteHandler,
  )
  .openapi(
    getSenateCommunicationCongressCommunicationTypeCommunicationNumberRoute,
    getSenateCommunicationCongressCommunicationTypeCommunicationNumberRouteHandler,
  )
  .openapi(getNominationRoute, getNominationRouteHandler)
  .openapi(getNominationCongressRoute, getNominationCongressRouteHandler)
  .openapi(
    getNominationCongressNominationNumberRoute,
    getNominationCongressNominationNumberRouteHandler,
  )
  .openapi(
    getNominationCongressNominationNumberOrdinalRoute,
    getNominationCongressNominationNumberOrdinalRouteHandler,
  )
  .openapi(
    getNominationCongressNominationNumberActionsRoute,
    getNominationCongressNominationNumberActionsRouteHandler,
  )
  .openapi(
    getNominationCongressNominationNumberCommitteesRoute,
    getNominationCongressNominationNumberCommitteesRouteHandler,
  )
  .openapi(
    getNominationCongressNominationNumberHearingsRoute,
    getNominationCongressNominationNumberHearingsRouteHandler,
  )
  .openapi(getCrsreportRoute, getCrsreportRouteHandler)
  .openapi(getCrsreportReportNumberRoute, getCrsreportReportNumberRouteHandler)
  .openapi(getTreatyRoute, getTreatyRouteHandler)
  .openapi(getTreatyCongressRoute, getTreatyCongressRouteHandler)
  .openapi(getTreatyCongressTreatyNumberRoute, getTreatyCongressTreatyNumberRouteHandler)
  .openapi(
    getTreatyCongressTreatyNumberTreatySuffixRoute,
    getTreatyCongressTreatyNumberTreatySuffixRouteHandler,
  )
  .openapi(
    getTreatyCongressTreatyNumberActionsRoute,
    getTreatyCongressTreatyNumberActionsRouteHandler,
  )
  .openapi(
    getTreatyCongressTreatyNumberTreatySuffixActionsRoute,
    getTreatyCongressTreatyNumberTreatySuffixActionsRouteHandler,
  )
  .openapi(
    getTreatyCongressTreatyNumberCommitteesRoute,
    getTreatyCongressTreatyNumberCommitteesRouteHandler,
  )

export default app
