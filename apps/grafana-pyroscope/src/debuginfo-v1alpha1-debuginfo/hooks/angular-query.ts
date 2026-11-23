import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDebuginfoV1alpha1DebuginfoServiceKey() {
  return ['debuginfo.v1alpha1.DebuginfoService'] as const
}

export function getPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoMutationKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/DeleteDebuginfo',
    'POST',
  ] as const
}

export function getPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
      >,
    ) {
      return parseResponse(
        client['debuginfo.v1alpha1.DebuginfoService'].DeleteDebuginfo.$post(args, options),
      )
    },
  })
}

export function injectPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
        >,
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
    const mutationDefaults = getPostDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoMutationOptions<
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

export function getPostDebuginfoV1alpha1DebuginfoServiceListDebuginfoMutationKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/ListDebuginfo',
    'POST',
  ] as const
}

export function getPostDebuginfoV1alpha1DebuginfoServiceListDebuginfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDebuginfoV1alpha1DebuginfoServiceListDebuginfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
      >,
    ) {
      return parseResponse(
        client['debuginfo.v1alpha1.DebuginfoService'].ListDebuginfo.$post(args, options),
      )
    },
  })
}

export function injectPostDebuginfoV1alpha1DebuginfoServiceListDebuginfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
        >,
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
    const mutationDefaults = getPostDebuginfoV1alpha1DebuginfoServiceListDebuginfoMutationOptions<
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

export function getPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadMutationKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/ShouldInitiateUpload',
    'POST',
  ] as const
}

export function getPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['debuginfo.v1alpha1.DebuginfoService'].ShouldInitiateUpload.$post(args, options),
      )
    },
  })
}

export function injectPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
        >,
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
    const mutationDefaults =
      getPostDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadMutationOptions<
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

export function getPostDebuginfoV1alpha1DebuginfoServiceUploadFinishedMutationKey() {
  return [
    'debuginfo.v1alpha1.DebuginfoService',
    '/debuginfo.v1alpha1.DebuginfoService/UploadFinished',
    'POST',
  ] as const
}

export function getPostDebuginfoV1alpha1DebuginfoServiceUploadFinishedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDebuginfoV1alpha1DebuginfoServiceUploadFinishedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
      >,
    ) {
      return parseResponse(
        client['debuginfo.v1alpha1.DebuginfoService'].UploadFinished.$post(args, options),
      )
    },
  })
}

export function injectPostDebuginfoV1alpha1DebuginfoServiceUploadFinished<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
        >,
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
    const mutationDefaults = getPostDebuginfoV1alpha1DebuginfoServiceUploadFinishedMutationOptions<
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
