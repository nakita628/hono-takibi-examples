import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddressesAdrIdRoute,
  deleteBankAccountsBankIdRoute,
  deleteBookletsBookletIdRoute,
  deleteBuckslipsBuckslipIdRoute,
  deleteCampaignsCmpIdRoute,
  deleteCardsCardIdRoute,
  deleteChecksChkIdRoute,
  deleteDomainsDomainIdRoute,
  deleteLettersLtrIdRoute,
  deleteLinksLinkIdRoute,
  deletePostcardsPscIdRoute,
  deleteSelfMailersSfmIdRoute,
  deleteSnapPacksSnapPackIdRoute,
  deleteTemplatesTmplIdRoute,
  deleteTemplatesTmplIdVersionsVrsnIdRoute,
  deleteUploadsUplIdRoute,
  getAccountsRoute,
  getAddressesAdrIdRoute,
  getAddressesRoute,
  getBankAccountsBankIdRoute,
  getBankAccountsRoute,
  getBillingGroupsBgIdRoute,
  getBillingGroupsRoute,
  getBookletsBookletIdRoute,
  getBookletsRoute,
  getBuckslipsBuckslipIdOrdersRoute,
  getBuckslipsBuckslipIdRoute,
  getBuckslipsRoute,
  getCampaignsCmpIdRoute,
  getCampaignsRoute,
  getCardsCardIdOrdersRoute,
  getCardsCardIdRoute,
  getCardsRoute,
  getChecksChkIdRoute,
  getChecksRoute,
  getCreativesCrvIdRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  getInformedDeliveryCampaignsRoute,
  getInformedDeliveryCampaignsUspsCampaignIdRoute,
  getLettersLtrIdRoute,
  getLettersRoute,
  getLinksLinkIdRoute,
  getLinksRoute,
  getPostcardsPscIdRoute,
  getPostcardsRoute,
  getQrCodeAnalyticsRoute,
  getResourceProofsResPrfIdRoute,
  getSelfMailersRoute,
  getSelfMailersSfmIdRoute,
  getSnapPacksRoute,
  getSnapPacksSnapPackIdRoute,
  getTemplatesRoute,
  getTemplatesTmplIdRoute,
  getTemplatesTmplIdVersionsRoute,
  getTemplatesTmplIdVersionsVrsnIdRoute,
  getUploadsRoute,
  getUploadsUplIdExportsExIdRoute,
  getUploadsUplIdReportRoute,
  getUploadsUplIdRoute,
  patchBuckslipsBuckslipIdRoute,
  patchCampaignsCmpIdRoute,
  patchCreativesCrvIdRoute,
  patchInformedDeliveryCampaignsUspsCampaignIdRoute,
  patchLinksLinkIdRoute,
  patchResourceProofsResPrfIdRoute,
  patchUploadsUplIdRoute,
  postAddressesRoute,
  postBankAccountsBankIdVerifyRoute,
  postBankAccountsRoute,
  postBillingGroupsBgIdRoute,
  postBillingGroupsRoute,
  postBookletsRoute,
  postBuckslipsBuckslipIdOrdersRoute,
  postBuckslipsRoute,
  postBulkIntlVerificationsRoute,
  postBulkUsVerificationsRoute,
  postCampaignsCmpIdSendRoute,
  postCampaignsRoute,
  postCardsCardIdOrdersRoute,
  postCardsCardIdRoute,
  postCardsRoute,
  postChecksRoute,
  postCreativesRoute,
  postDomainsRoute,
  postIdentityValidationRoute,
  postInformedDeliveryCampaignsRoute,
  postIntlVerificationsRoute,
  postLettersRoute,
  postLinksRoute,
  postPostcardsRoute,
  postResourceProofsRoute,
  postSelfMailersRoute,
  postSnapPacksRoute,
  postTemplatesRoute,
  postTemplatesTmplIdRoute,
  postTemplatesTmplIdVersionsRoute,
  postTemplatesTmplIdVersionsVrsnIdRoute,
  postUploadsRoute,
  postUploadsUplIdExportsRoute,
  postUploadsUplIdFileRoute,
  postUsAutocompletionsRoute,
  postUsReverseGeocodeLookupsRoute,
  postUsVerificationsRoute,
  postUsZipLookupsRoute,
} from './routes'
import {
  deleteAddressesAdrIdRouteHandler,
  deleteBankAccountsBankIdRouteHandler,
  deleteBookletsBookletIdRouteHandler,
  deleteBuckslipsBuckslipIdRouteHandler,
  deleteCampaignsCmpIdRouteHandler,
  deleteCardsCardIdRouteHandler,
  deleteChecksChkIdRouteHandler,
  deleteDomainsDomainIdRouteHandler,
  deleteLettersLtrIdRouteHandler,
  deleteLinksLinkIdRouteHandler,
  deletePostcardsPscIdRouteHandler,
  deleteSelfMailersSfmIdRouteHandler,
  deleteSnapPacksSnapPackIdRouteHandler,
  deleteTemplatesTmplIdRouteHandler,
  deleteTemplatesTmplIdVersionsVrsnIdRouteHandler,
  deleteUploadsUplIdRouteHandler,
  getAccountsRouteHandler,
  getAddressesAdrIdRouteHandler,
  getAddressesRouteHandler,
  getBankAccountsBankIdRouteHandler,
  getBankAccountsRouteHandler,
  getBillingGroupsBgIdRouteHandler,
  getBillingGroupsRouteHandler,
  getBookletsBookletIdRouteHandler,
  getBookletsRouteHandler,
  getBuckslipsBuckslipIdOrdersRouteHandler,
  getBuckslipsBuckslipIdRouteHandler,
  getBuckslipsRouteHandler,
  getCampaignsCmpIdRouteHandler,
  getCampaignsRouteHandler,
  getCardsCardIdOrdersRouteHandler,
  getCardsCardIdRouteHandler,
  getCardsRouteHandler,
  getChecksChkIdRouteHandler,
  getChecksRouteHandler,
  getCreativesCrvIdRouteHandler,
  getDomainsDomainIdRouteHandler,
  getDomainsRouteHandler,
  getInformedDeliveryCampaignsRouteHandler,
  getInformedDeliveryCampaignsUspsCampaignIdRouteHandler,
  getLettersLtrIdRouteHandler,
  getLettersRouteHandler,
  getLinksLinkIdRouteHandler,
  getLinksRouteHandler,
  getPostcardsPscIdRouteHandler,
  getPostcardsRouteHandler,
  getQrCodeAnalyticsRouteHandler,
  getResourceProofsResPrfIdRouteHandler,
  getSelfMailersRouteHandler,
  getSelfMailersSfmIdRouteHandler,
  getSnapPacksRouteHandler,
  getSnapPacksSnapPackIdRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesTmplIdRouteHandler,
  getTemplatesTmplIdVersionsRouteHandler,
  getTemplatesTmplIdVersionsVrsnIdRouteHandler,
  getUploadsRouteHandler,
  getUploadsUplIdExportsExIdRouteHandler,
  getUploadsUplIdReportRouteHandler,
  getUploadsUplIdRouteHandler,
  patchBuckslipsBuckslipIdRouteHandler,
  patchCampaignsCmpIdRouteHandler,
  patchCreativesCrvIdRouteHandler,
  patchInformedDeliveryCampaignsUspsCampaignIdRouteHandler,
  patchLinksLinkIdRouteHandler,
  patchResourceProofsResPrfIdRouteHandler,
  patchUploadsUplIdRouteHandler,
  postAddressesRouteHandler,
  postBankAccountsBankIdVerifyRouteHandler,
  postBankAccountsRouteHandler,
  postBillingGroupsBgIdRouteHandler,
  postBillingGroupsRouteHandler,
  postBookletsRouteHandler,
  postBuckslipsBuckslipIdOrdersRouteHandler,
  postBuckslipsRouteHandler,
  postBulkIntlVerificationsRouteHandler,
  postBulkUsVerificationsRouteHandler,
  postCampaignsCmpIdSendRouteHandler,
  postCampaignsRouteHandler,
  postCardsCardIdOrdersRouteHandler,
  postCardsCardIdRouteHandler,
  postCardsRouteHandler,
  postChecksRouteHandler,
  postCreativesRouteHandler,
  postDomainsRouteHandler,
  postIdentityValidationRouteHandler,
  postInformedDeliveryCampaignsRouteHandler,
  postIntlVerificationsRouteHandler,
  postLettersRouteHandler,
  postLinksRouteHandler,
  postPostcardsRouteHandler,
  postResourceProofsRouteHandler,
  postSelfMailersRouteHandler,
  postSnapPacksRouteHandler,
  postTemplatesRouteHandler,
  postTemplatesTmplIdRouteHandler,
  postTemplatesTmplIdVersionsRouteHandler,
  postTemplatesTmplIdVersionsVrsnIdRouteHandler,
  postUploadsRouteHandler,
  postUploadsUplIdExportsRouteHandler,
  postUploadsUplIdFileRouteHandler,
  postUsAutocompletionsRouteHandler,
  postUsReverseGeocodeLookupsRouteHandler,
  postUsVerificationsRouteHandler,
  postUsZipLookupsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAddressesRoute, getAddressesRouteHandler)
  .openapi(postAddressesRoute, postAddressesRouteHandler)
  .openapi(getAddressesAdrIdRoute, getAddressesAdrIdRouteHandler)
  .openapi(deleteAddressesAdrIdRoute, deleteAddressesAdrIdRouteHandler)
  .openapi(postBankAccountsBankIdVerifyRoute, postBankAccountsBankIdVerifyRouteHandler)
  .openapi(getBankAccountsBankIdRoute, getBankAccountsBankIdRouteHandler)
  .openapi(deleteBankAccountsBankIdRoute, deleteBankAccountsBankIdRouteHandler)
  .openapi(getBankAccountsRoute, getBankAccountsRouteHandler)
  .openapi(postBankAccountsRoute, postBankAccountsRouteHandler)
  .openapi(getBillingGroupsBgIdRoute, getBillingGroupsBgIdRouteHandler)
  .openapi(postBillingGroupsBgIdRoute, postBillingGroupsBgIdRouteHandler)
  .openapi(getBillingGroupsRoute, getBillingGroupsRouteHandler)
  .openapi(postBillingGroupsRoute, postBillingGroupsRouteHandler)
  .openapi(getBookletsBookletIdRoute, getBookletsBookletIdRouteHandler)
  .openapi(deleteBookletsBookletIdRoute, deleteBookletsBookletIdRouteHandler)
  .openapi(getBookletsRoute, getBookletsRouteHandler)
  .openapi(postBookletsRoute, postBookletsRouteHandler)
  .openapi(getBuckslipsRoute, getBuckslipsRouteHandler)
  .openapi(postBuckslipsRoute, postBuckslipsRouteHandler)
  .openapi(getBuckslipsBuckslipIdRoute, getBuckslipsBuckslipIdRouteHandler)
  .openapi(patchBuckslipsBuckslipIdRoute, patchBuckslipsBuckslipIdRouteHandler)
  .openapi(deleteBuckslipsBuckslipIdRoute, deleteBuckslipsBuckslipIdRouteHandler)
  .openapi(getBuckslipsBuckslipIdOrdersRoute, getBuckslipsBuckslipIdOrdersRouteHandler)
  .openapi(postBuckslipsBuckslipIdOrdersRoute, postBuckslipsBuckslipIdOrdersRouteHandler)
  .openapi(postBulkUsVerificationsRoute, postBulkUsVerificationsRouteHandler)
  .openapi(postBulkIntlVerificationsRoute, postBulkIntlVerificationsRouteHandler)
  .openapi(getCampaignsRoute, getCampaignsRouteHandler)
  .openapi(postCampaignsRoute, postCampaignsRouteHandler)
  .openapi(getCampaignsCmpIdRoute, getCampaignsCmpIdRouteHandler)
  .openapi(patchCampaignsCmpIdRoute, patchCampaignsCmpIdRouteHandler)
  .openapi(deleteCampaignsCmpIdRoute, deleteCampaignsCmpIdRouteHandler)
  .openapi(postCampaignsCmpIdSendRoute, postCampaignsCmpIdSendRouteHandler)
  .openapi(getCardsRoute, getCardsRouteHandler)
  .openapi(postCardsRoute, postCardsRouteHandler)
  .openapi(getCardsCardIdRoute, getCardsCardIdRouteHandler)
  .openapi(postCardsCardIdRoute, postCardsCardIdRouteHandler)
  .openapi(deleteCardsCardIdRoute, deleteCardsCardIdRouteHandler)
  .openapi(getCardsCardIdOrdersRoute, getCardsCardIdOrdersRouteHandler)
  .openapi(postCardsCardIdOrdersRoute, postCardsCardIdOrdersRouteHandler)
  .openapi(getChecksRoute, getChecksRouteHandler)
  .openapi(postChecksRoute, postChecksRouteHandler)
  .openapi(getChecksChkIdRoute, getChecksChkIdRouteHandler)
  .openapi(deleteChecksChkIdRoute, deleteChecksChkIdRouteHandler)
  .openapi(postCreativesRoute, postCreativesRouteHandler)
  .openapi(getCreativesCrvIdRoute, getCreativesCrvIdRouteHandler)
  .openapi(patchCreativesCrvIdRoute, patchCreativesCrvIdRouteHandler)
  .openapi(postIdentityValidationRoute, postIdentityValidationRouteHandler)
  .openapi(getInformedDeliveryCampaignsRoute, getInformedDeliveryCampaignsRouteHandler)
  .openapi(postInformedDeliveryCampaignsRoute, postInformedDeliveryCampaignsRouteHandler)
  .openapi(
    getInformedDeliveryCampaignsUspsCampaignIdRoute,
    getInformedDeliveryCampaignsUspsCampaignIdRouteHandler,
  )
  .openapi(
    patchInformedDeliveryCampaignsUspsCampaignIdRoute,
    patchInformedDeliveryCampaignsUspsCampaignIdRouteHandler,
  )
  .openapi(postIntlVerificationsRoute, postIntlVerificationsRouteHandler)
  .openapi(getLettersLtrIdRoute, getLettersLtrIdRouteHandler)
  .openapi(deleteLettersLtrIdRoute, deleteLettersLtrIdRouteHandler)
  .openapi(getLettersRoute, getLettersRouteHandler)
  .openapi(postLettersRoute, postLettersRouteHandler)
  .openapi(getPostcardsPscIdRoute, getPostcardsPscIdRouteHandler)
  .openapi(deletePostcardsPscIdRoute, deletePostcardsPscIdRouteHandler)
  .openapi(getPostcardsRoute, getPostcardsRouteHandler)
  .openapi(postPostcardsRoute, postPostcardsRouteHandler)
  .openapi(getQrCodeAnalyticsRoute, getQrCodeAnalyticsRouteHandler)
  .openapi(getDomainsDomainIdRoute, getDomainsDomainIdRouteHandler)
  .openapi(deleteDomainsDomainIdRoute, deleteDomainsDomainIdRouteHandler)
  .openapi(postDomainsRoute, postDomainsRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(getLinksLinkIdRoute, getLinksLinkIdRouteHandler)
  .openapi(patchLinksLinkIdRoute, patchLinksLinkIdRouteHandler)
  .openapi(deleteLinksLinkIdRoute, deleteLinksLinkIdRouteHandler)
  .openapi(postLinksRoute, postLinksRouteHandler)
  .openapi(getLinksRoute, getLinksRouteHandler)
  .openapi(getResourceProofsResPrfIdRoute, getResourceProofsResPrfIdRouteHandler)
  .openapi(patchResourceProofsResPrfIdRoute, patchResourceProofsResPrfIdRouteHandler)
  .openapi(postResourceProofsRoute, postResourceProofsRouteHandler)
  .openapi(getSelfMailersSfmIdRoute, getSelfMailersSfmIdRouteHandler)
  .openapi(deleteSelfMailersSfmIdRoute, deleteSelfMailersSfmIdRouteHandler)
  .openapi(getSelfMailersRoute, getSelfMailersRouteHandler)
  .openapi(postSelfMailersRoute, postSelfMailersRouteHandler)
  .openapi(getSnapPacksSnapPackIdRoute, getSnapPacksSnapPackIdRouteHandler)
  .openapi(deleteSnapPacksSnapPackIdRoute, deleteSnapPacksSnapPackIdRouteHandler)
  .openapi(getSnapPacksRoute, getSnapPacksRouteHandler)
  .openapi(postSnapPacksRoute, postSnapPacksRouteHandler)
  .openapi(getTemplatesTmplIdVersionsVrsnIdRoute, getTemplatesTmplIdVersionsVrsnIdRouteHandler)
  .openapi(postTemplatesTmplIdVersionsVrsnIdRoute, postTemplatesTmplIdVersionsVrsnIdRouteHandler)
  .openapi(
    deleteTemplatesTmplIdVersionsVrsnIdRoute,
    deleteTemplatesTmplIdVersionsVrsnIdRouteHandler,
  )
  .openapi(getTemplatesTmplIdVersionsRoute, getTemplatesTmplIdVersionsRouteHandler)
  .openapi(postTemplatesTmplIdVersionsRoute, postTemplatesTmplIdVersionsRouteHandler)
  .openapi(getTemplatesTmplIdRoute, getTemplatesTmplIdRouteHandler)
  .openapi(postTemplatesTmplIdRoute, postTemplatesTmplIdRouteHandler)
  .openapi(deleteTemplatesTmplIdRoute, deleteTemplatesTmplIdRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(getUploadsRoute, getUploadsRouteHandler)
  .openapi(postUploadsRoute, postUploadsRouteHandler)
  .openapi(getUploadsUplIdRoute, getUploadsUplIdRouteHandler)
  .openapi(patchUploadsUplIdRoute, patchUploadsUplIdRouteHandler)
  .openapi(deleteUploadsUplIdRoute, deleteUploadsUplIdRouteHandler)
  .openapi(postUploadsUplIdFileRoute, postUploadsUplIdFileRouteHandler)
  .openapi(postUploadsUplIdExportsRoute, postUploadsUplIdExportsRouteHandler)
  .openapi(getUploadsUplIdReportRoute, getUploadsUplIdReportRouteHandler)
  .openapi(getUploadsUplIdExportsExIdRoute, getUploadsUplIdExportsExIdRouteHandler)
  .openapi(postUsAutocompletionsRoute, postUsAutocompletionsRouteHandler)
  .openapi(postUsReverseGeocodeLookupsRoute, postUsReverseGeocodeLookupsRouteHandler)
  .openapi(postUsVerificationsRoute, postUsVerificationsRouteHandler)
  .openapi(postUsZipLookupsRoute, postUsZipLookupsRouteHandler)

export default app
