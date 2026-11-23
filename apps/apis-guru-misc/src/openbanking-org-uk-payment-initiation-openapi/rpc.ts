import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDomesticPaymentConsents(
  args: InferRequestType<(typeof client)['domestic-payment-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-payment-consents'].$post(args, options))
}

export async function getDomesticPaymentConsentsConsentId(
  args: InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-payment-consents'][':ConsentId'].$get(args, options))
}

export async function getDomesticPaymentConsentsConsentIdFundsConfirmation(
  args: InferRequestType<
    (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-payment-consents'][':ConsentId']['funds-confirmation'].$get(args, options),
  )
}

export async function postDomesticPayments(
  args: InferRequestType<(typeof client)['domestic-payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-payments'].$post(args, options))
}

export async function getDomesticPaymentsDomesticPaymentId(
  args: InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-payments'][':DomesticPaymentId'].$get(args, options))
}

export async function getDomesticPaymentsDomesticPaymentIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-payments'][':DomesticPaymentId']['payment-details'].$get(args, options),
  )
}

export async function postDomesticScheduledPaymentConsents(
  args: InferRequestType<(typeof client)['domestic-scheduled-payment-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-scheduled-payment-consents'].$post(args, options))
}

export async function getDomesticScheduledPaymentConsentsConsentId(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-scheduled-payment-consents'][':ConsentId'].$get(args, options),
  )
}

export async function postDomesticScheduledPayments(
  args: InferRequestType<(typeof client)['domestic-scheduled-payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-scheduled-payments'].$post(args, options))
}

export async function getDomesticScheduledPaymentsDomesticScheduledPaymentId(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'].$get(args, options),
  )
}

export async function getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details'].$get(
      args,
      options,
    ),
  )
}

export async function postDomesticStandingOrderConsents(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-standing-order-consents'].$post(args, options))
}

export async function getDomesticStandingOrderConsentsConsentId(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-standing-order-consents'][':ConsentId'].$get(args, options),
  )
}

export async function postDomesticStandingOrders(
  args: InferRequestType<(typeof client)['domestic-standing-orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domestic-standing-orders'].$post(args, options))
}

export async function getDomesticStandingOrdersDomesticStandingOrderId(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-standing-orders'][':DomesticStandingOrderId'].$get(args, options),
  )
}

export async function getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details'].$get(
      args,
      options,
    ),
  )
}

export async function postFilePaymentConsents(
  args: InferRequestType<(typeof client)['file-payment-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-payment-consents'].$post(args, options))
}

export async function getFilePaymentConsentsConsentId(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-payment-consents'][':ConsentId'].$get(args, options))
}

export async function getFilePaymentConsentsConsentIdFile(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-payment-consents'][':ConsentId'].file.$get(args, options))
}

export async function postFilePaymentConsentsConsentIdFile(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['file-payment-consents'][':ConsentId'].file.$post(args, options),
  )
}

export async function postFilePayments(
  args: InferRequestType<(typeof client)['file-payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-payments'].$post(args, options))
}

export async function getFilePaymentsFilePaymentId(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-payments'][':FilePaymentId'].$get(args, options))
}

export async function getFilePaymentsFilePaymentIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['file-payments'][':FilePaymentId']['payment-details'].$get(args, options),
  )
}

export async function getFilePaymentsFilePaymentIdReportFile(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['file-payments'][':FilePaymentId']['report-file'].$get(args, options),
  )
}

export async function postInternationalPaymentConsents(
  args: InferRequestType<(typeof client)['international-payment-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['international-payment-consents'].$post(args, options))
}

export async function getInternationalPaymentConsentsConsentId(
  args: InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-payment-consents'][':ConsentId'].$get(args, options),
  )
}

export async function getInternationalPaymentConsentsConsentIdFundsConfirmation(
  args: InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-payment-consents'][':ConsentId']['funds-confirmation'].$get(
      args,
      options,
    ),
  )
}

export async function postInternationalPayments(
  args: InferRequestType<(typeof client)['international-payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['international-payments'].$post(args, options))
}

export async function getInternationalPaymentsInternationalPaymentId(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-payments'][':InternationalPaymentId'].$get(args, options),
  )
}

export async function getInternationalPaymentsInternationalPaymentIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-payments'][':InternationalPaymentId']['payment-details'].$get(
      args,
      options,
    ),
  )
}

export async function postInternationalScheduledPaymentConsents(
  args: InferRequestType<(typeof client)['international-scheduled-payment-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-scheduled-payment-consents'].$post(args, options),
  )
}

export async function getInternationalScheduledPaymentConsentsConsentId(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-scheduled-payment-consents'][':ConsentId'].$get(args, options),
  )
}

export async function getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation'].$get(
      args,
      options,
    ),
  )
}

export async function postInternationalScheduledPayments(
  args: InferRequestType<(typeof client)['international-scheduled-payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['international-scheduled-payments'].$post(args, options))
}

export async function getInternationalScheduledPaymentsInternationalScheduledPaymentId(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-scheduled-payments'][':InternationalScheduledPaymentId'].$get(
      args,
      options,
    ),
  )
}

export async function getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-scheduled-payments'][':InternationalScheduledPaymentId'][
      'payment-details'
    ].$get(args, options),
  )
}

export async function postInternationalStandingOrderConsents(
  args: InferRequestType<(typeof client)['international-standing-order-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['international-standing-order-consents'].$post(args, options))
}

export async function getInternationalStandingOrderConsentsConsentId(
  args: InferRequestType<
    (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-standing-order-consents'][':ConsentId'].$get(args, options),
  )
}

export async function postInternationalStandingOrders(
  args: InferRequestType<(typeof client)['international-standing-orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['international-standing-orders'].$post(args, options))
}

export async function getInternationalStandingOrdersInternationalStandingOrderPaymentId(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-standing-orders'][':InternationalStandingOrderPaymentId'].$get(
      args,
      options,
    ),
  )
}

export async function getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['international-standing-orders'][':InternationalStandingOrderPaymentId'][
      'payment-details'
    ].$get(args, options),
  )
}
