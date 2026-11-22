import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Certificates(
  args: InferRequestType<typeof client.v1.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates.$post(args, options))
}

export async function postV1CertificatesValidate(
  args: InferRequestType<typeof client.v1.certificates.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates.validate.$post(args, options))
}

export async function getV1CertificatesCertificateId(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].$get(args, options))
}

export async function getV1CertificatesCertificateIdActions(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].actions.$get(args, options))
}

export async function getV1CertificatesCertificateIdCallback(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].callback.$get(args, options))
}

export async function putV1CertificatesCertificateIdCallback(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].callback.$put(args, options))
}

export async function deleteV1CertificatesCertificateIdCallback(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.certificates[':certificateId'].callback.$delete(args, options),
  )
}

export async function postV1CertificatesCertificateIdCancel(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].cancel.$post(args, options))
}

export async function getV1CertificatesCertificateIdDownload(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].download.$get(args, options))
}

export async function getV1CertificatesCertificateIdEmailHistory(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.certificates[':certificateId'].email.history.$get(args, options),
  )
}

export async function postV1CertificatesCertificateIdEmailResendEmailAddress(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.certificates[':certificateId'].email.resend[':emailAddress'].$post(args, options),
  )
}

export async function postV1CertificatesCertificateIdEmailEmailIdResend(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.certificates[':certificateId'].email[':emailId'].resend.$post(args, options),
  )
}

export async function postV1CertificatesCertificateIdEmailEmailIdResendEmailAddress(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.certificates[':certificateId'].email[':emailId'].resend[':emailAddress'].$post(
      args,
      options,
    ),
  )
}

export async function postV1CertificatesCertificateIdReissue(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].reissue.$post(args, options))
}

export async function postV1CertificatesCertificateIdRenew(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].renew.$post(args, options))
}

export async function postV1CertificatesCertificateIdRevoke(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].revoke.$post(args, options))
}

export async function getV1CertificatesCertificateIdSiteSeal(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':certificateId'].siteSeal.$get(args, options))
}

export async function postV1CertificatesCertificateIdVerifyDomainControl(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.certificates[':certificateId'].verifyDomainControl.$post(args, options),
  )
}

export async function getV2Certificates(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates.$get(args, options))
}

export async function getV2CertificatesDownload(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates.download.$get(args, options))
}

export async function getV2CustomersCustomerIdCertificates(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].certificates.$get(args, options))
}

export async function getV2CustomersCustomerIdCertificatesAcmeExternalAccountBinding(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].certificates.acme.externalAccountBinding.$get(args, options),
  )
}

export async function getV2CustomersCustomerIdCertificatesCertificateId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].certificates[':certificateId'].$get(args, options),
  )
}

export async function getV2CustomersCustomerIdCertificatesCertificateIdDomainVerifications(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].certificates[':certificateId'].domainVerifications.$get(
      args,
      options,
    ),
  )
}

export async function getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomain(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customerId'].certificates[':certificateId'].domainVerifications[
      ':domain'
    ].$get(args, options),
  )
}
