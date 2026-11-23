import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthMfaFactorsIdRoute,
  deleteAuthSessionRoute,
  deleteStoreCartsIdGiftCardsRoute,
  deleteStoreCartsIdLineItemsLineIdRoute,
  deleteStoreCartsIdPromotionsRoute,
  deleteStoreCustomersMeAddressesAddressIdRoute,
  getAuthCustomerProvidersRoute,
  getAuthMfaFactorsRoute,
  getStoreCartsIdRoute,
  getStoreCollectionsIdRoute,
  getStoreCollectionsRoute,
  getStoreCurrenciesCodeRoute,
  getStoreCurrenciesRoute,
  getStoreCustomersMeAddressesAddressIdRoute,
  getStoreCustomersMeAddressesRoute,
  getStoreCustomersMeRoute,
  getStoreGiftCardsIdOrCodeRoute,
  getStoreLocalesRoute,
  getStoreOrdersIdRoute,
  getStoreOrdersRoute,
  getStorePaymentProvidersRoute,
  getStoreProductCategoriesIdRoute,
  getStoreProductCategoriesRoute,
  getStoreProductOptionsIdRoute,
  getStoreProductOptionsRoute,
  getStoreProductsIdRoute,
  getStoreProductsRoute,
  getStoreProductTagsIdRoute,
  getStoreProductTagsRoute,
  getStoreProductTypesIdRoute,
  getStoreProductTypesRoute,
  getStoreProductVariantsRoute,
  getStoreRegionsIdRoute,
  getStoreRegionsRoute,
  getStoreReturnReasonsIdRoute,
  getStoreReturnReasonsRoute,
  getStoreShippingOptionsRoute,
  getStoreStoreCreditAccountsIdRoute,
  getStoreStoreCreditAccountsRoute,
  postAuthCustomerAuthProviderCallbackRoute,
  postAuthCustomerAuthProviderRegisterRoute,
  postAuthCustomerAuthProviderResetPasswordRoute,
  postAuthCustomerAuthProviderRoute,
  postAuthCustomerAuthProviderUpdateRoute,
  postAuthCustomerEmailpassVerificationConfirmRoute,
  postAuthMfaChallengesIdVerifyRoute,
  postAuthMfaFactorsIdVerifyRoute,
  postAuthMfaFactorsRoute,
  postAuthMfaRecoveryCodesRoute,
  postAuthSessionRoute,
  postAuthTokenRefreshRoute,
  postAuthVerificationConfirmRoute,
  postAuthVerificationRequestRoute,
  postStoreCartsIdCompleteRoute,
  postStoreCartsIdCustomerRoute,
  postStoreCartsIdGiftCardsRoute,
  postStoreCartsIdLineItemsLineIdRoute,
  postStoreCartsIdLineItemsRoute,
  postStoreCartsIdPromotionsRoute,
  postStoreCartsIdRoute,
  postStoreCartsIdShippingMethodsRoute,
  postStoreCartsIdStoreCreditsRoute,
  postStoreCartsIdTaxesRoute,
  postStoreCartsRoute,
  postStoreCustomersMeAddressesAddressIdRoute,
  postStoreCustomersMeAddressesRoute,
  postStoreCustomersMeRoute,
  postStoreCustomersRoute,
  postStoreOrdersIdTransferAcceptRoute,
  postStoreOrdersIdTransferCancelRoute,
  postStoreOrdersIdTransferDeclineRoute,
  postStoreOrdersIdTransferRequestRoute,
  postStorePaymentCollectionsIdPaymentSessionsRoute,
  postStorePaymentCollectionsIdPaymentSessionsSessionIdRoute,
  postStorePaymentCollectionsRoute,
  postStoreReturnsRoute,
  postStoreSearchRoute,
  postStoreShippingOptionsIdCalculateRoute,
  postStoreStoreCreditAccountsClaimRoute,
} from './routes'
import {
  deleteAuthMfaFactorsIdRouteHandler,
  deleteAuthSessionRouteHandler,
  deleteStoreCartsIdGiftCardsRouteHandler,
  deleteStoreCartsIdLineItemsLineIdRouteHandler,
  deleteStoreCartsIdPromotionsRouteHandler,
  deleteStoreCustomersMeAddressesAddressIdRouteHandler,
  getAuthCustomerProvidersRouteHandler,
  getAuthMfaFactorsRouteHandler,
  getStoreCartsIdRouteHandler,
  getStoreCollectionsIdRouteHandler,
  getStoreCollectionsRouteHandler,
  getStoreCurrenciesCodeRouteHandler,
  getStoreCurrenciesRouteHandler,
  getStoreCustomersMeAddressesAddressIdRouteHandler,
  getStoreCustomersMeAddressesRouteHandler,
  getStoreCustomersMeRouteHandler,
  getStoreGiftCardsIdOrCodeRouteHandler,
  getStoreLocalesRouteHandler,
  getStoreOrdersIdRouteHandler,
  getStoreOrdersRouteHandler,
  getStorePaymentProvidersRouteHandler,
  getStoreProductCategoriesIdRouteHandler,
  getStoreProductCategoriesRouteHandler,
  getStoreProductOptionsIdRouteHandler,
  getStoreProductOptionsRouteHandler,
  getStoreProductsIdRouteHandler,
  getStoreProductsRouteHandler,
  getStoreProductTagsIdRouteHandler,
  getStoreProductTagsRouteHandler,
  getStoreProductTypesIdRouteHandler,
  getStoreProductTypesRouteHandler,
  getStoreProductVariantsRouteHandler,
  getStoreRegionsIdRouteHandler,
  getStoreRegionsRouteHandler,
  getStoreReturnReasonsIdRouteHandler,
  getStoreReturnReasonsRouteHandler,
  getStoreShippingOptionsRouteHandler,
  getStoreStoreCreditAccountsIdRouteHandler,
  getStoreStoreCreditAccountsRouteHandler,
  postAuthCustomerAuthProviderCallbackRouteHandler,
  postAuthCustomerAuthProviderRegisterRouteHandler,
  postAuthCustomerAuthProviderResetPasswordRouteHandler,
  postAuthCustomerAuthProviderRouteHandler,
  postAuthCustomerAuthProviderUpdateRouteHandler,
  postAuthCustomerEmailpassVerificationConfirmRouteHandler,
  postAuthMfaChallengesIdVerifyRouteHandler,
  postAuthMfaFactorsIdVerifyRouteHandler,
  postAuthMfaFactorsRouteHandler,
  postAuthMfaRecoveryCodesRouteHandler,
  postAuthSessionRouteHandler,
  postAuthTokenRefreshRouteHandler,
  postAuthVerificationConfirmRouteHandler,
  postAuthVerificationRequestRouteHandler,
  postStoreCartsIdCompleteRouteHandler,
  postStoreCartsIdCustomerRouteHandler,
  postStoreCartsIdGiftCardsRouteHandler,
  postStoreCartsIdLineItemsLineIdRouteHandler,
  postStoreCartsIdLineItemsRouteHandler,
  postStoreCartsIdPromotionsRouteHandler,
  postStoreCartsIdRouteHandler,
  postStoreCartsIdShippingMethodsRouteHandler,
  postStoreCartsIdStoreCreditsRouteHandler,
  postStoreCartsIdTaxesRouteHandler,
  postStoreCartsRouteHandler,
  postStoreCustomersMeAddressesAddressIdRouteHandler,
  postStoreCustomersMeAddressesRouteHandler,
  postStoreCustomersMeRouteHandler,
  postStoreCustomersRouteHandler,
  postStoreOrdersIdTransferAcceptRouteHandler,
  postStoreOrdersIdTransferCancelRouteHandler,
  postStoreOrdersIdTransferDeclineRouteHandler,
  postStoreOrdersIdTransferRequestRouteHandler,
  postStorePaymentCollectionsIdPaymentSessionsRouteHandler,
  postStorePaymentCollectionsIdPaymentSessionsSessionIdRouteHandler,
  postStorePaymentCollectionsRouteHandler,
  postStoreReturnsRouteHandler,
  postStoreSearchRouteHandler,
  postStoreShippingOptionsIdCalculateRouteHandler,
  postStoreStoreCreditAccountsClaimRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAuthCustomerEmailpassVerificationConfirmRoute,
    postAuthCustomerEmailpassVerificationConfirmRouteHandler,
  )
  .openapi(getAuthCustomerProvidersRoute, getAuthCustomerProvidersRouteHandler)
  .openapi(postAuthCustomerAuthProviderRoute, postAuthCustomerAuthProviderRouteHandler)
  .openapi(
    postAuthCustomerAuthProviderCallbackRoute,
    postAuthCustomerAuthProviderCallbackRouteHandler,
  )
  .openapi(
    postAuthCustomerAuthProviderRegisterRoute,
    postAuthCustomerAuthProviderRegisterRouteHandler,
  )
  .openapi(
    postAuthCustomerAuthProviderResetPasswordRoute,
    postAuthCustomerAuthProviderResetPasswordRouteHandler,
  )
  .openapi(postAuthCustomerAuthProviderUpdateRoute, postAuthCustomerAuthProviderUpdateRouteHandler)
  .openapi(postAuthMfaChallengesIdVerifyRoute, postAuthMfaChallengesIdVerifyRouteHandler)
  .openapi(getAuthMfaFactorsRoute, getAuthMfaFactorsRouteHandler)
  .openapi(postAuthMfaFactorsRoute, postAuthMfaFactorsRouteHandler)
  .openapi(deleteAuthMfaFactorsIdRoute, deleteAuthMfaFactorsIdRouteHandler)
  .openapi(postAuthMfaFactorsIdVerifyRoute, postAuthMfaFactorsIdVerifyRouteHandler)
  .openapi(postAuthMfaRecoveryCodesRoute, postAuthMfaRecoveryCodesRouteHandler)
  .openapi(postAuthSessionRoute, postAuthSessionRouteHandler)
  .openapi(deleteAuthSessionRoute, deleteAuthSessionRouteHandler)
  .openapi(postAuthTokenRefreshRoute, postAuthTokenRefreshRouteHandler)
  .openapi(postAuthVerificationConfirmRoute, postAuthVerificationConfirmRouteHandler)
  .openapi(postAuthVerificationRequestRoute, postAuthVerificationRequestRouteHandler)
  .openapi(postStoreCartsRoute, postStoreCartsRouteHandler)
  .openapi(getStoreCartsIdRoute, getStoreCartsIdRouteHandler)
  .openapi(postStoreCartsIdRoute, postStoreCartsIdRouteHandler)
  .openapi(postStoreCartsIdCompleteRoute, postStoreCartsIdCompleteRouteHandler)
  .openapi(postStoreCartsIdCustomerRoute, postStoreCartsIdCustomerRouteHandler)
  .openapi(postStoreCartsIdGiftCardsRoute, postStoreCartsIdGiftCardsRouteHandler)
  .openapi(deleteStoreCartsIdGiftCardsRoute, deleteStoreCartsIdGiftCardsRouteHandler)
  .openapi(postStoreCartsIdLineItemsRoute, postStoreCartsIdLineItemsRouteHandler)
  .openapi(postStoreCartsIdLineItemsLineIdRoute, postStoreCartsIdLineItemsLineIdRouteHandler)
  .openapi(deleteStoreCartsIdLineItemsLineIdRoute, deleteStoreCartsIdLineItemsLineIdRouteHandler)
  .openapi(postStoreCartsIdPromotionsRoute, postStoreCartsIdPromotionsRouteHandler)
  .openapi(deleteStoreCartsIdPromotionsRoute, deleteStoreCartsIdPromotionsRouteHandler)
  .openapi(postStoreCartsIdShippingMethodsRoute, postStoreCartsIdShippingMethodsRouteHandler)
  .openapi(postStoreCartsIdStoreCreditsRoute, postStoreCartsIdStoreCreditsRouteHandler)
  .openapi(postStoreCartsIdTaxesRoute, postStoreCartsIdTaxesRouteHandler)
  .openapi(getStoreCollectionsRoute, getStoreCollectionsRouteHandler)
  .openapi(getStoreCollectionsIdRoute, getStoreCollectionsIdRouteHandler)
  .openapi(getStoreCurrenciesRoute, getStoreCurrenciesRouteHandler)
  .openapi(getStoreCurrenciesCodeRoute, getStoreCurrenciesCodeRouteHandler)
  .openapi(postStoreCustomersRoute, postStoreCustomersRouteHandler)
  .openapi(getStoreCustomersMeRoute, getStoreCustomersMeRouteHandler)
  .openapi(postStoreCustomersMeRoute, postStoreCustomersMeRouteHandler)
  .openapi(getStoreCustomersMeAddressesRoute, getStoreCustomersMeAddressesRouteHandler)
  .openapi(postStoreCustomersMeAddressesRoute, postStoreCustomersMeAddressesRouteHandler)
  .openapi(
    getStoreCustomersMeAddressesAddressIdRoute,
    getStoreCustomersMeAddressesAddressIdRouteHandler,
  )
  .openapi(
    postStoreCustomersMeAddressesAddressIdRoute,
    postStoreCustomersMeAddressesAddressIdRouteHandler,
  )
  .openapi(
    deleteStoreCustomersMeAddressesAddressIdRoute,
    deleteStoreCustomersMeAddressesAddressIdRouteHandler,
  )
  .openapi(getStoreGiftCardsIdOrCodeRoute, getStoreGiftCardsIdOrCodeRouteHandler)
  .openapi(getStoreLocalesRoute, getStoreLocalesRouteHandler)
  .openapi(getStoreOrdersRoute, getStoreOrdersRouteHandler)
  .openapi(getStoreOrdersIdRoute, getStoreOrdersIdRouteHandler)
  .openapi(postStoreOrdersIdTransferAcceptRoute, postStoreOrdersIdTransferAcceptRouteHandler)
  .openapi(postStoreOrdersIdTransferCancelRoute, postStoreOrdersIdTransferCancelRouteHandler)
  .openapi(postStoreOrdersIdTransferDeclineRoute, postStoreOrdersIdTransferDeclineRouteHandler)
  .openapi(postStoreOrdersIdTransferRequestRoute, postStoreOrdersIdTransferRequestRouteHandler)
  .openapi(postStorePaymentCollectionsRoute, postStorePaymentCollectionsRouteHandler)
  .openapi(
    postStorePaymentCollectionsIdPaymentSessionsRoute,
    postStorePaymentCollectionsIdPaymentSessionsRouteHandler,
  )
  .openapi(
    postStorePaymentCollectionsIdPaymentSessionsSessionIdRoute,
    postStorePaymentCollectionsIdPaymentSessionsSessionIdRouteHandler,
  )
  .openapi(getStorePaymentProvidersRoute, getStorePaymentProvidersRouteHandler)
  .openapi(getStoreProductCategoriesRoute, getStoreProductCategoriesRouteHandler)
  .openapi(getStoreProductCategoriesIdRoute, getStoreProductCategoriesIdRouteHandler)
  .openapi(getStoreProductOptionsRoute, getStoreProductOptionsRouteHandler)
  .openapi(getStoreProductOptionsIdRoute, getStoreProductOptionsIdRouteHandler)
  .openapi(getStoreProductTagsRoute, getStoreProductTagsRouteHandler)
  .openapi(getStoreProductTagsIdRoute, getStoreProductTagsIdRouteHandler)
  .openapi(getStoreProductTypesRoute, getStoreProductTypesRouteHandler)
  .openapi(getStoreProductTypesIdRoute, getStoreProductTypesIdRouteHandler)
  .openapi(getStoreProductVariantsRoute, getStoreProductVariantsRouteHandler)
  .openapi(getStoreProductsRoute, getStoreProductsRouteHandler)
  .openapi(getStoreProductsIdRoute, getStoreProductsIdRouteHandler)
  .openapi(getStoreRegionsRoute, getStoreRegionsRouteHandler)
  .openapi(getStoreRegionsIdRoute, getStoreRegionsIdRouteHandler)
  .openapi(getStoreReturnReasonsRoute, getStoreReturnReasonsRouteHandler)
  .openapi(getStoreReturnReasonsIdRoute, getStoreReturnReasonsIdRouteHandler)
  .openapi(postStoreReturnsRoute, postStoreReturnsRouteHandler)
  .openapi(postStoreSearchRoute, postStoreSearchRouteHandler)
  .openapi(getStoreShippingOptionsRoute, getStoreShippingOptionsRouteHandler)
  .openapi(
    postStoreShippingOptionsIdCalculateRoute,
    postStoreShippingOptionsIdCalculateRouteHandler,
  )
  .openapi(getStoreStoreCreditAccountsRoute, getStoreStoreCreditAccountsRouteHandler)
  .openapi(postStoreStoreCreditAccountsClaimRoute, postStoreStoreCreditAccountsClaimRouteHandler)
  .openapi(getStoreStoreCreditAccountsIdRoute, getStoreStoreCreditAccountsIdRouteHandler)

export default app
