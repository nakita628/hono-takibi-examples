import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCertificateManagerAddTagsToCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.AddTagsToCertificate'] as const
}

export function getXAmzTargetCertificateManagerDeleteCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.DeleteCertificate'] as const
}

export function getXAmzTargetCertificateManagerDescribeCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.DescribeCertificate'] as const
}

export function getXAmzTargetCertificateManagerExportCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.ExportCertificate'] as const
}

export function getXAmzTargetCertificateManagerGetAccountConfigurationKey() {
  return ['#X-Amz-Target=CertificateManager.GetAccountConfiguration'] as const
}

export function getXAmzTargetCertificateManagerGetCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.GetCertificate'] as const
}

export function getXAmzTargetCertificateManagerImportCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.ImportCertificate'] as const
}

export function getXAmzTargetCertificateManagerListCertificatesKey() {
  return ['#X-Amz-Target=CertificateManager.ListCertificates'] as const
}

export function getXAmzTargetCertificateManagerListTagsForCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.ListTagsForCertificate'] as const
}

export function getXAmzTargetCertificateManagerPutAccountConfigurationKey() {
  return ['#X-Amz-Target=CertificateManager.PutAccountConfiguration'] as const
}

export function getXAmzTargetCertificateManagerRemoveTagsFromCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate'] as const
}

export function getXAmzTargetCertificateManagerRenewCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.RenewCertificate'] as const
}

export function getXAmzTargetCertificateManagerRequestCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.RequestCertificate'] as const
}

export function getXAmzTargetCertificateManagerResendValidationEmailKey() {
  return ['#X-Amz-Target=CertificateManager.ResendValidationEmail'] as const
}

export function getXAmzTargetCertificateManagerUpdateCertificateOptionsKey() {
  return ['#X-Amz-Target=CertificateManager.UpdateCertificateOptions'] as const
}

export function getPostXAmzTargetCertificateManagerAddTagsToCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.AddTagsToCertificate',
    '/#X-Amz-Target=CertificateManager.AddTagsToCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerAddTagsToCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerAddTagsToCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.AddTagsToCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerDeleteCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.DeleteCertificate',
    '/#X-Amz-Target=CertificateManager.DeleteCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerDeleteCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerDeleteCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.DeleteCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerDescribeCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.DescribeCertificate',
    '/#X-Amz-Target=CertificateManager.DescribeCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerDescribeCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerDescribeCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.DescribeCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerExportCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.ExportCertificate',
    '/#X-Amz-Target=CertificateManager.ExportCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerExportCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerExportCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.ExportCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerGetAccountConfigurationKey() {
  return [
    '#X-Amz-Target=CertificateManager.GetAccountConfiguration',
    '/#X-Amz-Target=CertificateManager.GetAccountConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerGetAccountConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerGetAccountConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.GetAccountConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerGetCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.GetCertificate',
    '/#X-Amz-Target=CertificateManager.GetCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerGetCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerGetCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.GetCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerImportCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.ImportCertificate',
    '/#X-Amz-Target=CertificateManager.ImportCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerImportCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerImportCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.ImportCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerListCertificatesKey() {
  return [
    '#X-Amz-Target=CertificateManager.ListCertificates',
    '/#X-Amz-Target=CertificateManager.ListCertificates',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerListCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerListCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.ListCertificates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerListTagsForCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.ListTagsForCertificate',
    '/#X-Amz-Target=CertificateManager.ListTagsForCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerListTagsForCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerListTagsForCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.ListTagsForCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerPutAccountConfigurationKey() {
  return [
    '#X-Amz-Target=CertificateManager.PutAccountConfiguration',
    '/#X-Amz-Target=CertificateManager.PutAccountConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerPutAccountConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerPutAccountConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.PutAccountConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerRemoveTagsFromCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate',
    '/#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerRemoveTagsFromCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerRemoveTagsFromCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerRenewCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.RenewCertificate',
    '/#X-Amz-Target=CertificateManager.RenewCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerRenewCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerRenewCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.RenewCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerRequestCertificateKey() {
  return [
    '#X-Amz-Target=CertificateManager.RequestCertificate',
    '/#X-Amz-Target=CertificateManager.RequestCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerRequestCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerRequestCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.RequestCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerResendValidationEmailKey() {
  return [
    '#X-Amz-Target=CertificateManager.ResendValidationEmail',
    '/#X-Amz-Target=CertificateManager.ResendValidationEmail',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerResendValidationEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerResendValidationEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.ResendValidationEmail'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCertificateManagerUpdateCertificateOptionsKey() {
  return [
    '#X-Amz-Target=CertificateManager.UpdateCertificateOptions',
    '/#X-Amz-Target=CertificateManager.UpdateCertificateOptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCertificateManagerUpdateCertificateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCertificateManagerUpdateCertificateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CertificateManager.UpdateCertificateOptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
