import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetCertificateManagerAddTagsToCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.AddTagsToCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerDeleteCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.DeleteCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerDescribeCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.DescribeCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerExportCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.ExportCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerGetAccountConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.GetAccountConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerGetCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.GetCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerImportCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.ImportCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerListCertificates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.ListCertificates'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerListTagsForCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.ListTagsForCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerPutAccountConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.PutAccountConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerRemoveTagsFromCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerRenewCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.RenewCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerRequestCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.RequestCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerResendValidationEmail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.ResendValidationEmail'].$post(args, options),
  )
}

export async function postXAmzTargetCertificateManagerUpdateCertificateOptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CertificateManager.UpdateCertificateOptions'].$post(args, options),
  )
}
