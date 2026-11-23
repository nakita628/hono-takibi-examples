import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLicenseKey() {
  return ['license'] as const
}

export function getLicenseeKey() {
  return ['licensee'] as const
}

export function getLicensetemplateKey() {
  return ['licensetemplate'] as const
}

export function getPaymentmethodKey() {
  return ['paymentmethod'] as const
}

export function getProductKey() {
  return ['product'] as const
}

export function getProductmoduleKey() {
  return ['productmodule'] as const
}

export function getTokenKey() {
  return ['token'] as const
}

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getUtilityKey() {
  return ['utility'] as const
}

export function getGetLicenseKey() {
  return ['license', '/license'] as const
}

export function useGetLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicenseKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicenseKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicenseKey() {
  return ['license', '/license', 'POST'] as const
}

export function usePostLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.license.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.license.$post> }) =>
        parseResponse(client.license.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicenseLicenseNumberKey(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
) {
  return ['license', '/license/:licenseNumber', args] as const
}

export function useGetLicenseLicenseNumber<TError = unknown>(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicenseLicenseNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license[':licenseNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicenseLicenseNumber<TError = unknown>(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicenseLicenseNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license[':licenseNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicenseLicenseNumberKey() {
  return ['license', '/license/:licenseNumber', 'POST'] as const
}

export function usePostLicenseLicenseNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.license)[':licenseNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseLicenseNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.license)[':licenseNumber']['$post']> },
      ) => parseResponse(client.license[':licenseNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLicenseLicenseNumberKey() {
  return ['license', '/license/:licenseNumber', 'DELETE'] as const
}

export function useDeleteLicenseLicenseNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLicenseLicenseNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.license)[':licenseNumber']['$delete']> },
      ) => parseResponse(client.license[':licenseNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicenseeKey() {
  return ['licensee', '/licensee'] as const
}

export function useGetLicensee<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicenseeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensee.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensee<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicenseeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensee.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicenseeKey() {
  return ['licensee', '/licensee', 'POST'] as const
}

export function usePostLicensee<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.licensee.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.licensee.$post> }) =>
        parseResponse(client.licensee.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicenseeLicenseeNumberKey(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
) {
  return ['licensee', '/licensee/:licenseeNumber', args] as const
}

export function useGetLicenseeLicenseeNumber<TError = unknown>(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicenseeLicenseeNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensee[':licenseeNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicenseeLicenseeNumber<TError = unknown>(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicenseeLicenseeNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensee[':licenseeNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicenseeLicenseeNumberKey() {
  return ['licensee', '/licensee/:licenseeNumber', 'POST'] as const
}

export function usePostLicenseeLicenseeNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseeLicenseeNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']> },
      ) => parseResponse(client.licensee[':licenseeNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLicenseeLicenseeNumberKey() {
  return ['licensee', '/licensee/:licenseeNumber', 'DELETE'] as const
}

export function useDeleteLicenseeLicenseeNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLicenseeLicenseeNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']> },
      ) => parseResponse(client.licensee[':licenseeNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLicenseeLicenseeNumberTransferKey() {
  return ['licensee', '/licensee/:licenseeNumber/transfer', 'POST'] as const
}

export function usePostLicenseeLicenseeNumberTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseeLicenseeNumberTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>
        },
      ) => parseResponse(client.licensee[':licenseeNumber'].transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLicenseeLicenseeNumberValidateKey() {
  return ['licensee', '/licensee/:licenseeNumber/validate', 'POST'] as const
}

export function usePostLicenseeLicenseeNumberValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicenseeLicenseeNumberValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>
        },
      ) => parseResponse(client.licensee[':licenseeNumber'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicensetemplateKey() {
  return ['licensetemplate', '/licensetemplate'] as const
}

export function useGetLicensetemplate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensetemplateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensetemplate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensetemplate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensetemplateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensetemplate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicensetemplateKey() {
  return ['licensetemplate', '/licensetemplate', 'POST'] as const
}

export function usePostLicensetemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.licensetemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicensetemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.licensetemplate.$post> }) =>
        parseResponse(client.licensetemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLicensetemplateLicenseTemplateNumberKey(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
) {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', args] as const
}

export function useGetLicensetemplateLicenseTemplateNumber<TError = unknown>(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicensetemplateLicenseTemplateNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.licensetemplate[':licenseTemplateNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensetemplateLicenseTemplateNumber<TError = unknown>(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLicensetemplateLicenseTemplateNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.licensetemplate[':licenseTemplateNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicensetemplateLicenseTemplateNumberKey() {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', 'POST'] as const
}

export function usePostLicensetemplateLicenseTemplateNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicensetemplateLicenseTemplateNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>
        },
      ) =>
        parseResponse(client.licensetemplate[':licenseTemplateNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLicensetemplateLicenseTemplateNumberKey() {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', 'DELETE'] as const
}

export function useDeleteLicensetemplateLicenseTemplateNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLicensetemplateLicenseTemplateNumberKey()
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
            (typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']
          >
        },
      ) =>
        parseResponse(client.licensetemplate[':licenseTemplateNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentmethodKey() {
  return ['paymentmethod', '/paymentmethod'] as const
}

export function useGetPaymentmethod<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentmethodKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentmethod.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentmethod<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentmethodKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentmethod.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentmethodPaymentMethodNumberKey(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
) {
  return ['paymentmethod', '/paymentmethod/:paymentMethodNumber', args] as const
}

export function useGetPaymentmethodPaymentMethodNumber<TError = unknown>(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentmethodPaymentMethodNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentmethod[':paymentMethodNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentmethodPaymentMethodNumber<TError = unknown>(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentmethodPaymentMethodNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentmethod[':paymentMethodNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentmethodPaymentMethodNumberKey() {
  return ['paymentmethod', '/paymentmethod/:paymentMethodNumber', 'POST'] as const
}

export function usePostPaymentmethodPaymentMethodNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentmethodPaymentMethodNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>
        },
      ) => parseResponse(client.paymentmethod[':paymentMethodNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductKey() {
  return ['product', '/product'] as const
}

export function useGetProduct<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProduct<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductKey() {
  return ['product', '/product', 'POST'] as const
}

export function usePostProduct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.product.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.product.$post> }) =>
        parseResponse(client.product.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductProductNumberKey(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
) {
  return ['product', '/product/:productNumber', args] as const
}

export function useGetProductProductNumber<TError = unknown>(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductProductNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product[':productNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductProductNumber<TError = unknown>(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductProductNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product[':productNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductProductNumberKey() {
  return ['product', '/product/:productNumber', 'POST'] as const
}

export function usePostProductProductNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.product)[':productNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.product)[':productNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductProductNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.product)[':productNumber']['$post']> },
      ) => parseResponse(client.product[':productNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductProductNumberKey() {
  return ['product', '/product/:productNumber', 'DELETE'] as const
}

export function useDeleteProductProductNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.product)[':productNumber']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.product)[':productNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductProductNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.product)[':productNumber']['$delete']> },
      ) => parseResponse(client.product[':productNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductmoduleKey() {
  return ['productmodule', '/productmodule'] as const
}

export function useGetProductmodule<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductmoduleKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.productmodule.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductmodule<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductmoduleKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.productmodule.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductmoduleKey() {
  return ['productmodule', '/productmodule', 'POST'] as const
}

export function usePostProductmodule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.productmodule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductmoduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.productmodule.$post> }) =>
        parseResponse(client.productmodule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductmoduleProductModuleNumberKey(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
) {
  return ['productmodule', '/productmodule/:productModuleNumber', args] as const
}

export function useGetProductmoduleProductModuleNumber<TError = unknown>(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductmoduleProductModuleNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.productmodule[':productModuleNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductmoduleProductModuleNumber<TError = unknown>(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductmoduleProductModuleNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.productmodule[':productModuleNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductmoduleProductModuleNumberKey() {
  return ['productmodule', '/productmodule/:productModuleNumber', 'POST'] as const
}

export function usePostProductmoduleProductModuleNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductmoduleProductModuleNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>
        },
      ) => parseResponse(client.productmodule[':productModuleNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductmoduleProductModuleNumberKey() {
  return ['productmodule', '/productmodule/:productModuleNumber', 'DELETE'] as const
}

export function useDeleteProductmoduleProductModuleNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductmoduleProductModuleNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>
        },
      ) => parseResponse(client.productmodule[':productModuleNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokenKey() {
  return ['token', '/token'] as const
}

export function useGetToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTokenKey() {
  return ['token', '/token', 'POST'] as const
}

export function usePostToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.token.$post> }) =>
        parseResponse(client.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokenTokenNumberKey(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
) {
  return ['token', '/token/:tokenNumber', args] as const
}

export function useGetTokenTokenNumber<TError = unknown>(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokenTokenNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.token[':tokenNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokenTokenNumber<TError = unknown>(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokenTokenNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.token[':tokenNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTokenTokenNumberKey() {
  return ['token', '/token/:tokenNumber', 'DELETE'] as const
}

export function useDeleteTokenTokenNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTokenTokenNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.token)[':tokenNumber']['$delete']> },
      ) => parseResponse(client.token[':tokenNumber'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionKey() {
  return ['transaction', '/transaction'] as const
}

export function useGetTransaction<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransaction<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function usePostTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.transaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transaction.$post> }) =>
        parseResponse(client.transaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionTransactionNumberKey(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
) {
  return ['transaction', '/transaction/:transactionNumber', args] as const
}

export function useGetTransactionTransactionNumber<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransactionTransactionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':transactionNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionTransactionNumber<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransactionTransactionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':transactionNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionTransactionNumberKey() {
  return ['transaction', '/transaction/:transactionNumber', 'POST'] as const
}

export function usePostTransactionTransactionNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionTransactionNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']> },
      ) => parseResponse(client.transaction[':transactionNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUtilityLicenseTypesKey() {
  return ['utility', '/utility/licenseTypes'] as const
}

export function useGetUtilityLicenseTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUtilityLicenseTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.licenseTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUtilityLicenseTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUtilityLicenseTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.licenseTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUtilityLicensingModelsKey() {
  return ['utility', '/utility/licensingModels'] as const
}

export function useGetUtilityLicensingModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUtilityLicensingModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.licensingModels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUtilityLicensingModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUtilityLicensingModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.utility.licensingModels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
