import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getLicenseQueryKey() {
  return ['license', '/license'] as const
}

export function getLicenseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicenseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
          >,
          ReturnType<typeof getLicenseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicenseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.license.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLicenseMutationKey() {
  return ['license', '/license', 'POST'] as const
}

export function getPostLicenseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$post>>>>>,
    TError,
    InferRequestType<typeof client.license.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.license.$post>) {
      return parseResponse(client.license.$post(args, options))
    },
  })
}

export function usePostLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.license.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicenseLicenseNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.license)[':licenseNumber']['$get']>>,
) {
  return ['license', '/license/:licenseNumber', toValue(args)] as const
}

export function getLicenseLicenseNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.license)[':licenseNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLicenseLicenseNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.license[':licenseNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicenseLicenseNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.license)[':licenseNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLicenseLicenseNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicenseLicenseNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLicenseLicenseNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.license[':licenseNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLicenseLicenseNumberMutationKey() {
  return ['license', '/license/:licenseNumber', 'POST'] as const
}

export function getPostLicenseLicenseNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.license)[':licenseNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseLicenseNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.license)[':licenseNumber']['$post']>) {
      return parseResponse(client.license[':licenseNumber'].$post(args, options))
    },
  })
}

export function usePostLicenseLicenseNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.license)[':licenseNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseLicenseNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLicenseLicenseNumberMutationKey() {
  return ['license', '/license/:licenseNumber', 'DELETE'] as const
}

export function getDeleteLicenseLicenseNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicenseLicenseNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>) {
      return parseResponse(client.license[':licenseNumber'].$delete(args, options))
    },
  })
}

export function useDeleteLicenseLicenseNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicenseLicenseNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicenseeQueryKey() {
  return ['licensee', '/licensee'] as const
}

export function getLicenseeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicenseeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensee.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicensee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
          >,
          ReturnType<typeof getLicenseeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicenseeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicenseeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensee.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLicenseeMutationKey() {
  return ['licensee', '/licensee', 'POST'] as const
}

export function getPostLicenseeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$post>>>>>,
    TError,
    InferRequestType<typeof client.licensee.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensee.$post>) {
      return parseResponse(client.licensee.$post(args, options))
    },
  })
}

export function usePostLicensee<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.licensee.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicenseeLicenseeNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>>,
) {
  return ['licensee', '/licensee/:licenseeNumber', toValue(args)] as const
}

export function getLicenseeLicenseeNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLicenseeLicenseeNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensee[':licenseeNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicenseeLicenseeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLicenseeLicenseeNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicenseeLicenseeNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLicenseeLicenseeNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.licensee[':licenseeNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLicenseeLicenseeNumberMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber', 'POST'] as const
}

export function getPostLicenseeLicenseeNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeLicenseeNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>) {
      return parseResponse(client.licensee[':licenseeNumber'].$post(args, options))
    },
  })
}

export function usePostLicenseeLicenseeNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeLicenseeNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLicenseeLicenseeNumberMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber', 'DELETE'] as const
}

export function getDeleteLicenseeLicenseeNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicenseeLicenseeNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
    ) {
      return parseResponse(client.licensee[':licenseeNumber'].$delete(args, options))
    },
  })
}

export function useDeleteLicenseeLicenseeNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicenseeLicenseeNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLicenseeLicenseeNumberTransferMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber/transfer', 'POST'] as const
}

export function getPostLicenseeLicenseeNumberTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeLicenseeNumberTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
    ) {
      return parseResponse(client.licensee[':licenseeNumber'].transfer.$post(args, options))
    },
  })
}

export function usePostLicenseeLicenseeNumberTransfer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeLicenseeNumberTransferMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLicenseeLicenseeNumberValidateMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber/validate', 'POST'] as const
}

export function getPostLicenseeLicenseeNumberValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeLicenseeNumberValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
    ) {
      return parseResponse(client.licensee[':licenseeNumber'].validate.$post(args, options))
    },
  })
}

export function usePostLicenseeLicenseeNumberValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeLicenseeNumberValidateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicensetemplateQueryKey() {
  return ['licensetemplate', '/licensetemplate'] as const
}

export function getLicensetemplateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensetemplateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensetemplate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicensetemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>
            >
          >,
          ReturnType<typeof getLicensetemplateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensetemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensetemplateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensetemplate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLicensetemplateMutationKey() {
  return ['licensetemplate', '/licensetemplate', 'POST'] as const
}

export function getPostLicensetemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.licensetemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicensetemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensetemplate.$post>) {
      return parseResponse(client.licensetemplate.$post(args, options))
    },
  })
}

export function usePostLicensetemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.licensetemplate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicensetemplateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicensetemplateLicenseTemplateNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>
  >,
) {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', toValue(args)] as const
}

export function getLicensetemplateLicenseTemplateNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLicensetemplateLicenseTemplateNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensetemplate[':licenseTemplateNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicensetemplateLicenseTemplateNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLicensetemplateLicenseTemplateNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensetemplateLicenseTemplateNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLicensetemplateLicenseTemplateNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.licensetemplate[':licenseTemplateNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLicensetemplateLicenseTemplateNumberMutationKey() {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', 'POST'] as const
}

export function getPostLicensetemplateLicenseTemplateNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicensetemplateLicenseTemplateNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
    ) {
      return parseResponse(client.licensetemplate[':licenseTemplateNumber'].$post(args, options))
    },
  })
}

export function usePostLicensetemplateLicenseTemplateNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicensetemplateLicenseTemplateNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLicensetemplateLicenseTemplateNumberMutationKey() {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', 'DELETE'] as const
}

export function getDeleteLicensetemplateLicenseTemplateNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicensetemplateLicenseTemplateNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
    ) {
      return parseResponse(client.licensetemplate[':licenseTemplateNumber'].$delete(args, options))
    },
  })
}

export function useDeleteLicensetemplateLicenseTemplateNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicensetemplateLicenseTemplateNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentmethodQueryKey() {
  return ['paymentmethod', '/paymentmethod'] as const
}

export function getPaymentmethodQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPaymentmethodQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentmethod.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePaymentmethod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
          >,
          ReturnType<typeof getPaymentmethodQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentmethodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPaymentmethodQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentmethod.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentmethodPaymentMethodNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>
  >,
) {
  return ['paymentmethod', '/paymentmethod/:paymentMethodNumber', toValue(args)] as const
}

export function getPaymentmethodPaymentMethodNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentmethodPaymentMethodNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentmethod[':paymentMethodNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentmethodPaymentMethodNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentmethodPaymentMethodNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentmethodPaymentMethodNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentmethodPaymentMethodNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentmethod[':paymentMethodNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentmethodPaymentMethodNumberMutationKey() {
  return ['paymentmethod', '/paymentmethod/:paymentMethodNumber', 'POST'] as const
}

export function getPostPaymentmethodPaymentMethodNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentmethodPaymentMethodNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
    ) {
      return parseResponse(client.paymentmethod[':paymentMethodNumber'].$post(args, options))
    },
  })
}

export function usePostPaymentmethodPaymentMethodNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentmethodPaymentMethodNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductQueryKey() {
  return ['product', '/product'] as const
}

export function getProductQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
          >,
          ReturnType<typeof getProductQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.product.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductMutationKey() {
  return ['product', '/product', 'POST'] as const
}

export function getPostProductMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$post>>>>>,
    TError,
    InferRequestType<typeof client.product.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.product.$post>) {
      return parseResponse(client.product.$post(args, options))
    },
  })
}

export function usePostProduct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.product.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductProductNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product)[':productNumber']['$get']>>,
) {
  return ['product', '/product/:productNumber', toValue(args)] as const
}

export function getProductProductNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product)[':productNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductProductNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product[':productNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductProductNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product)[':productNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductProductNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductProductNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductProductNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product[':productNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductProductNumberMutationKey() {
  return ['product', '/product/:productNumber', 'POST'] as const
}

export function getPostProductProductNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.product)[':productNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.product)[':productNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductProductNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.product)[':productNumber']['$post']>) {
      return parseResponse(client.product[':productNumber'].$post(args, options))
    },
  })
}

export function usePostProductProductNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product)[':productNumber']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.product)[':productNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductProductNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProductProductNumberMutationKey() {
  return ['product', '/product/:productNumber', 'DELETE'] as const
}

export function getDeleteProductProductNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.product)[':productNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.product)[':productNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductProductNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.product)[':productNumber']['$delete']>) {
      return parseResponse(client.product[':productNumber'].$delete(args, options))
    },
  })
}

export function useDeleteProductProductNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product)[':productNumber']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.product)[':productNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProductProductNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductmoduleQueryKey() {
  return ['productmodule', '/productmodule'] as const
}

export function getProductmoduleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductmoduleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.productmodule.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProductmodule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
          >,
          ReturnType<typeof getProductmoduleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductmoduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductmoduleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.productmodule.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductmoduleMutationKey() {
  return ['productmodule', '/productmodule', 'POST'] as const
}

export function getPostProductmoduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.productmodule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductmoduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.productmodule.$post>) {
      return parseResponse(client.productmodule.$post(args, options))
    },
  })
}

export function usePostProductmodule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.productmodule.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductmoduleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductmoduleProductModuleNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>
  >,
) {
  return ['productmodule', '/productmodule/:productModuleNumber', toValue(args)] as const
}

export function getProductmoduleProductModuleNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductmoduleProductModuleNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.productmodule[':productModuleNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductmoduleProductModuleNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductmoduleProductModuleNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductmoduleProductModuleNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductmoduleProductModuleNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.productmodule[':productModuleNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductmoduleProductModuleNumberMutationKey() {
  return ['productmodule', '/productmodule/:productModuleNumber', 'POST'] as const
}

export function getPostProductmoduleProductModuleNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductmoduleProductModuleNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
    ) {
      return parseResponse(client.productmodule[':productModuleNumber'].$post(args, options))
    },
  })
}

export function usePostProductmoduleProductModuleNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductmoduleProductModuleNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProductmoduleProductModuleNumberMutationKey() {
  return ['productmodule', '/productmodule/:productModuleNumber', 'DELETE'] as const
}

export function getDeleteProductmoduleProductModuleNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductmoduleProductModuleNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
    ) {
      return parseResponse(client.productmodule[':productModuleNumber'].$delete(args, options))
    },
  })
}

export function useDeleteProductmoduleProductModuleNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.productmodule)[':productModuleNumber']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProductmoduleProductModuleNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTokenQueryKey() {
  return ['token', '/token'] as const
}

export function getTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToken<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
          ReturnType<typeof getTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTokenMutationKey() {
  return ['token', '/token', 'POST'] as const
}

export function getPostTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.token.$post>) {
      return parseResponse(client.token.$post(args, options))
    },
  })
}

export function usePostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
          TError,
          InferRequestType<typeof client.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTokenTokenNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.token)[':tokenNumber']['$get']>>,
) {
  return ['token', '/token/:tokenNumber', toValue(args)] as const
}

export function getTokenTokenNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.token)[':tokenNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokenTokenNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.token[':tokenNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokenTokenNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.token)[':tokenNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokenTokenNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokenTokenNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokenTokenNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.token[':tokenNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTokenTokenNumberMutationKey() {
  return ['token', '/token/:tokenNumber', 'DELETE'] as const
}

export function getDeleteTokenTokenNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokenTokenNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>) {
      return parseResponse(client.token[':tokenNumber'].$delete(args, options))
    },
  })
}

export function useDeleteTokenTokenNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokenTokenNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTransactionQueryKey() {
  return ['transaction', '/transaction'] as const
}

export function getTransactionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTransactionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transaction.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransaction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
          >,
          ReturnType<typeof getTransactionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTransactionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.transaction.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransactionMutationKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function getPostTransactionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>>,
    TError,
    InferRequestType<typeof client.transaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transaction.$post>) {
      return parseResponse(client.transaction.$post(args, options))
    },
  })
}

export function usePostTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transaction.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTransactionTransactionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>
  >,
) {
  return ['transaction', '/transaction/:transactionNumber', toValue(args)] as const
}

export function getTransactionTransactionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionTransactionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transaction[':transactionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionTransactionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionTransactionNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionTransactionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionTransactionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transaction[':transactionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransactionTransactionNumberMutationKey() {
  return ['transaction', '/transaction/:transactionNumber', 'POST'] as const
}

export function getPostTransactionTransactionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionTransactionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
    ) {
      return parseResponse(client.transaction[':transactionNumber'].$post(args, options))
    },
  })
}

export function usePostTransactionTransactionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionTransactionNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUtilityLicenseTypesQueryKey() {
  return ['utility', '/utility/licenseTypes'] as const
}

export function getUtilityLicenseTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUtilityLicenseTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.utility.licenseTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUtilityLicenseTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>
            >
          >,
          ReturnType<typeof getUtilityLicenseTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityLicenseTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUtilityLicenseTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.utility.licenseTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUtilityLicensingModelsQueryKey() {
  return ['utility', '/utility/licensingModels'] as const
}

export function getUtilityLicensingModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUtilityLicensingModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.utility.licensingModels.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUtilityLicensingModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
            >
          >,
          ReturnType<typeof getUtilityLicensingModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityLicensingModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUtilityLicensingModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.utility.licensingModels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
