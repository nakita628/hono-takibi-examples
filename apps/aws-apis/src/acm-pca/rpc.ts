import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetACMPrivateCACreateCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCACreatePermission(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.CreatePermission'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCADeleteCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCADeletePermission(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.DeletePermission'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCADeletePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=ACMPrivateCA.DeletePolicy'].$post(args, options))
}

export async function postXAmzTargetACMPrivateCADescribeCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetACMPrivateCAGetCertificate(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.GetCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAGetCertificateAuthorityCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAGetCertificateAuthorityCsr(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAGetPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=ACMPrivateCA.GetPolicy'].$post(args, options))
}

export async function postXAmzTargetACMPrivateCAImportCertificateAuthorityCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAIssueCertificate(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.IssueCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAListCertificateAuthorities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAListPermissions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.ListPermissions'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAListTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=ACMPrivateCA.ListTags'].$post(args, options))
}

export async function postXAmzTargetACMPrivateCAPutPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=ACMPrivateCA.PutPolicy'].$post(args, options))
}

export async function postXAmzTargetACMPrivateCARestoreCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCARevokeCertificate(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.RevokeCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCATagCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAUntagCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority'].$post(args, options),
  )
}

export async function postXAmzTargetACMPrivateCAUpdateCertificateAuthority(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority'].$post(args, options),
  )
}
