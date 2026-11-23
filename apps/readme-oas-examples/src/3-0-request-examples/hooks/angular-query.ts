import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getParameterExamplesKey() {
  return ['parameterExamples'] as const
}

export function getRequestBodyKey() {
  return ['requestBody'] as const
}

export function getRequestBodyFormDataExampleKey() {
  return ['requestBody-form-data-example'] as const
}

export function getRequestBodyMultiMediaTypesKey() {
  return ['requestBody-multi-media-types'] as const
}

export function getRequestBodyPrimitiveExampleKey() {
  return ['requestBody-primitive-example'] as const
}

export function getParameterExamplesParam1Param2QueryKey(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
) {
  return ['parameterExamples', '/parameterExamples/:param1/:param2', args] as const
}

export function getParameterExamplesParam1Param2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParameterExamplesParam1Param2QueryKey>
  >({
    queryKey: getParameterExamplesParam1Param2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parameterExamples[':param1'][':param2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectParameterExamplesParam1Param2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParameterExamplesParam1Param2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getParameterExamplesParam1Param2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutParameterExamplesParam1Param2MutationKey() {
  return ['parameterExamples', '/parameterExamples/:param1/:param2', 'PUT'] as const
}

export function getPutParameterExamplesParam1Param2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutParameterExamplesParam1Param2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>,
    ) {
      return parseResponse(client.parameterExamples[':param1'][':param2'].$put(args, options))
    },
  })
}

export function injectPutParameterExamplesParam1Param2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutParameterExamplesParam1Param2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchParameterExamplesParam1Param2MutationKey() {
  return ['parameterExamples', '/parameterExamples/:param1/:param2', 'PATCH'] as const
}

export function getPatchParameterExamplesParam1Param2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchParameterExamplesParam1Param2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>,
    ) {
      return parseResponse(client.parameterExamples[':param1'][':param2'].$patch(args, options))
    },
  })
}

export function injectPatchParameterExamplesParam1Param2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchParameterExamplesParam1Param2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutRequestBodyMutationKey() {
  return ['requestBody', '/requestBody', 'PUT'] as const
}

export function getPutRequestBodyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$put>>>>>,
    TError,
    InferRequestType<typeof client.requestBody.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRequestBodyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestBody.$put>) {
      return parseResponse(client.requestBody.$put(args, options))
    },
  })
}

export function injectPutRequestBody<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.requestBody.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRequestBodyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestBodyMutationKey() {
  return ['requestBody', '/requestBody', 'POST'] as const
}

export function getPostRequestBodyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$post>>>>>,
    TError,
    InferRequestType<typeof client.requestBody.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestBodyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestBody.$post>) {
      return parseResponse(client.requestBody.$post(args, options))
    },
  })
}

export function injectPostRequestBody<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.requestBody.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestBodyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRequestBodyMutationKey() {
  return ['requestBody', '/requestBody', 'PATCH'] as const
}

export function getPatchRequestBodyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.requestBody.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRequestBodyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestBody.$patch>) {
      return parseResponse(client.requestBody.$patch(args, options))
    },
  })
}

export function injectPatchRequestBody<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.requestBody.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRequestBodyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutRequestBodyPrimitiveExampleMutationKey() {
  return ['requestBody-primitive-example', '/requestBody-primitive-example', 'PUT'] as const
}

export function getPutRequestBodyPrimitiveExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['requestBody-primitive-example']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRequestBodyPrimitiveExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['requestBody-primitive-example']['$put']>,
    ) {
      return parseResponse(client['requestBody-primitive-example'].$put(args, options))
    },
  })
}

export function injectPutRequestBodyPrimitiveExample<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['requestBody-primitive-example']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRequestBodyPrimitiveExampleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestBodyPrimitiveExampleMutationKey() {
  return ['requestBody-primitive-example', '/requestBody-primitive-example', 'POST'] as const
}

export function getPostRequestBodyPrimitiveExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['requestBody-primitive-example']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestBodyPrimitiveExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['requestBody-primitive-example']['$post']>,
    ) {
      return parseResponse(client['requestBody-primitive-example'].$post(args, options))
    },
  })
}

export function injectPostRequestBodyPrimitiveExample<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['requestBody-primitive-example']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestBodyPrimitiveExampleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRequestBodyPrimitiveExampleMutationKey() {
  return ['requestBody-primitive-example', '/requestBody-primitive-example', 'PATCH'] as const
}

export function getPatchRequestBodyPrimitiveExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['requestBody-primitive-example']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRequestBodyPrimitiveExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['requestBody-primitive-example']['$patch']>,
    ) {
      return parseResponse(client['requestBody-primitive-example'].$patch(args, options))
    },
  })
}

export function injectPatchRequestBodyPrimitiveExample<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['requestBody-primitive-example']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRequestBodyPrimitiveExampleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestBodyMultiMediaTypesMutationKey() {
  return ['requestBody-multi-media-types', '/requestBody-multi-media-types', 'POST'] as const
}

export function getPostRequestBodyMultiMediaTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-multi-media-types']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostRequestBodyMultiMediaTypesMutationKey(),
    async mutationFn() {
      return parseResponse(client['requestBody-multi-media-types'].$post(undefined, options))
    },
  })
}

export function injectPostRequestBodyMultiMediaTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['requestBody-multi-media-types']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestBodyMultiMediaTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestBodyFormDataExampleMutationKey() {
  return ['requestBody-form-data-example', '/requestBody-form-data-example', 'POST'] as const
}

export function getPostRequestBodyFormDataExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-form-data-example']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['requestBody-form-data-example']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestBodyFormDataExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['requestBody-form-data-example']['$post']>,
    ) {
      return parseResponse(client['requestBody-form-data-example'].$post(args, options))
    },
  })
}

export function injectPostRequestBodyFormDataExample<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['requestBody-form-data-example']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['requestBody-form-data-example']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestBodyFormDataExampleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
