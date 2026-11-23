type DeleteLexiconOutput = { [x: string]: unknown }
type GetLexiconOutput = {
  Lexicon?: { Content?: {} | undefined; Name?: {} | undefined } | undefined
  LexiconAttributes?:
    | {
        Alphabet?: {} | undefined
        LanguageCode?: {} | undefined
        LastModified?: {} | undefined
        LexiconArn?: {} | undefined
        LexemesCount?: {} | undefined
        Size?: {} | undefined
      }
    | undefined
}
type PutLexiconOutput = { [x: string]: unknown }
type DescribeVoicesOutput = { Voices?: {} | undefined; NextToken?: {} | undefined }
type GetSpeechSynthesisTaskOutput = {
  SynthesisTask?:
    | {
        Engine?: {} | undefined
        TaskId?: {} | undefined
        TaskStatus?: {} | undefined
        TaskStatusReason?: {} | undefined
        OutputUri?: {} | undefined
        CreationTime?: {} | undefined
        RequestCharacters?: {} | undefined
        SnsTopicArn?: {} | undefined
        LexiconNames?: {} | undefined
        OutputFormat?: {} | undefined
        SampleRate?: {} | undefined
        SpeechMarkTypes?: {} | undefined
        TextType?: {} | undefined
        VoiceId?: {} | undefined
        LanguageCode?: {} | undefined
      }
    | undefined
}
type ListLexiconsOutput = { Lexicons?: {} | undefined; NextToken?: {} | undefined }
type ListSpeechSynthesisTasksOutput = {
  NextToken?: {} | undefined
  SynthesisTasks?: {} | undefined
}
type LexiconName = string
type SpeechMarkType = 'sentence' | 'ssml' | 'viseme' | 'word'
type StartSpeechSynthesisTaskOutput = {
  SynthesisTask?:
    | {
        Engine?: {} | undefined
        TaskId?: {} | undefined
        TaskStatus?: {} | undefined
        TaskStatusReason?: {} | undefined
        OutputUri?: {} | undefined
        CreationTime?: {} | undefined
        RequestCharacters?: {} | undefined
        SnsTopicArn?: {} | undefined
        LexiconNames?: {} | undefined
        OutputFormat?: {} | undefined
        SampleRate?: {} | undefined
        SpeechMarkTypes?: {} | undefined
        TextType?: {} | undefined
        VoiceId?: {} | undefined
        LanguageCode?: {} | undefined
      }
    | undefined
}
type SynthesizeSpeechOutput = { AudioStream?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/lexicons/:LexiconName': {
      $delete: {
        input: { param: { LexiconName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteLexiconOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { LexiconName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLexiconOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { LexiconName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Content: string } }
        output: PutLexiconOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/voices': {
      $get: {
        input: {
          query: {
            Engine?: 'standard' | 'neural' | undefined
            LanguageCode?:
              | 'arb'
              | 'cmn-CN'
              | 'cy-GB'
              | 'da-DK'
              | 'de-DE'
              | 'en-AU'
              | 'en-GB'
              | 'en-GB-WLS'
              | 'en-IN'
              | 'en-US'
              | 'es-ES'
              | 'es-MX'
              | 'es-US'
              | 'fr-CA'
              | 'fr-FR'
              | 'is-IS'
              | 'it-IT'
              | 'ja-JP'
              | 'hi-IN'
              | 'ko-KR'
              | 'nb-NO'
              | 'nl-NL'
              | 'pl-PL'
              | 'pt-BR'
              | 'pt-PT'
              | 'ro-RO'
              | 'ru-RU'
              | 'sv-SE'
              | 'tr-TR'
              | 'en-NZ'
              | 'en-ZA'
              | 'ca-ES'
              | 'de-AT'
              | 'yue-CN'
              | 'ar-AE'
              | 'fi-FI'
              | 'en-IE'
              | 'nl-BE'
              | 'fr-BE'
              | undefined
            IncludeAdditionalLanguageCodes?: boolean | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeVoicesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/synthesisTasks/:TaskId': {
      $get: {
        input: { param: { TaskId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSpeechSynthesisTaskOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/lexicons': {
      $get: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListLexiconsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/synthesisTasks': {
      $get: {
        input: {
          query: {
            MaxResults?: number | undefined
            NextToken?: string | undefined
            Status?: 'scheduled' | 'inProgress' | 'completed' | 'failed' | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSpeechSynthesisTasksOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Engine?: 'standard' | 'neural' | undefined
            LanguageCode?:
              | 'arb'
              | 'cmn-CN'
              | 'cy-GB'
              | 'da-DK'
              | 'de-DE'
              | 'en-AU'
              | 'en-GB'
              | 'en-GB-WLS'
              | 'en-IN'
              | 'en-US'
              | 'es-ES'
              | 'es-MX'
              | 'es-US'
              | 'fr-CA'
              | 'fr-FR'
              | 'is-IS'
              | 'it-IT'
              | 'ja-JP'
              | 'hi-IN'
              | 'ko-KR'
              | 'nb-NO'
              | 'nl-NL'
              | 'pl-PL'
              | 'pt-BR'
              | 'pt-PT'
              | 'ro-RO'
              | 'ru-RU'
              | 'sv-SE'
              | 'tr-TR'
              | 'en-NZ'
              | 'en-ZA'
              | 'ca-ES'
              | 'de-AT'
              | 'yue-CN'
              | 'ar-AE'
              | 'fi-FI'
              | 'en-IE'
              | 'nl-BE'
              | 'fr-BE'
              | undefined
            LexiconNames?: LexiconName[] | undefined
            OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
            OutputS3BucketName: string
            OutputS3KeyPrefix?: string | undefined
            SampleRate?: string | undefined
            SnsTopicArn?: string | undefined
            SpeechMarkTypes?: SpeechMarkType[] | undefined
            Text: string
            TextType?: 'ssml' | 'text' | undefined
            VoiceId:
              | 'Aditi'
              | 'Amy'
              | 'Astrid'
              | 'Bianca'
              | 'Brian'
              | 'Camila'
              | 'Carla'
              | 'Carmen'
              | 'Celine'
              | 'Chantal'
              | 'Conchita'
              | 'Cristiano'
              | 'Dora'
              | 'Emma'
              | 'Enrique'
              | 'Ewa'
              | 'Filiz'
              | 'Gabrielle'
              | 'Geraint'
              | 'Giorgio'
              | 'Gwyneth'
              | 'Hans'
              | 'Ines'
              | 'Ivy'
              | 'Jacek'
              | 'Jan'
              | 'Joanna'
              | 'Joey'
              | 'Justin'
              | 'Karl'
              | 'Kendra'
              | 'Kevin'
              | 'Kimberly'
              | 'Lea'
              | 'Liv'
              | 'Lotte'
              | 'Lucia'
              | 'Lupe'
              | 'Mads'
              | 'Maja'
              | 'Marlene'
              | 'Mathieu'
              | 'Matthew'
              | 'Maxim'
              | 'Mia'
              | 'Miguel'
              | 'Mizuki'
              | 'Naja'
              | 'Nicole'
              | 'Olivia'
              | 'Penelope'
              | 'Raveena'
              | 'Ricardo'
              | 'Ruben'
              | 'Russell'
              | 'Salli'
              | 'Seoyeon'
              | 'Takumi'
              | 'Tatyana'
              | 'Vicki'
              | 'Vitoria'
              | 'Zeina'
              | 'Zhiyu'
              | 'Aria'
              | 'Ayanda'
              | 'Arlet'
              | 'Hannah'
              | 'Arthur'
              | 'Daniel'
              | 'Liam'
              | 'Pedro'
              | 'Kajal'
              | 'Hiujin'
              | 'Laura'
              | 'Elin'
              | 'Ida'
              | 'Suvi'
              | 'Ola'
              | 'Hala'
              | 'Andres'
              | 'Sergio'
              | 'Remi'
              | 'Adriano'
              | 'Thiago'
              | 'Ruth'
              | 'Stephen'
              | 'Kazuha'
              | 'Tomoko'
              | 'Niamh'
              | 'Sofie'
              | 'Lisa'
              | 'Isabelle'
          }
        }
        output: StartSpeechSynthesisTaskOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/speech': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Engine?: 'standard' | 'neural' | undefined
            LanguageCode?:
              | 'arb'
              | 'cmn-CN'
              | 'cy-GB'
              | 'da-DK'
              | 'de-DE'
              | 'en-AU'
              | 'en-GB'
              | 'en-GB-WLS'
              | 'en-IN'
              | 'en-US'
              | 'es-ES'
              | 'es-MX'
              | 'es-US'
              | 'fr-CA'
              | 'fr-FR'
              | 'is-IS'
              | 'it-IT'
              | 'ja-JP'
              | 'hi-IN'
              | 'ko-KR'
              | 'nb-NO'
              | 'nl-NL'
              | 'pl-PL'
              | 'pt-BR'
              | 'pt-PT'
              | 'ro-RO'
              | 'ru-RU'
              | 'sv-SE'
              | 'tr-TR'
              | 'en-NZ'
              | 'en-ZA'
              | 'ca-ES'
              | 'de-AT'
              | 'yue-CN'
              | 'ar-AE'
              | 'fi-FI'
              | 'en-IE'
              | 'nl-BE'
              | 'fr-BE'
              | undefined
            LexiconNames?: LexiconName[] | undefined
            OutputFormat: 'json' | 'mp3' | 'ogg_vorbis' | 'pcm'
            SampleRate?: string | undefined
            SpeechMarkTypes?: SpeechMarkType[] | undefined
            Text: string
            TextType?: 'ssml' | 'text' | undefined
            VoiceId:
              | 'Aditi'
              | 'Amy'
              | 'Astrid'
              | 'Bianca'
              | 'Brian'
              | 'Camila'
              | 'Carla'
              | 'Carmen'
              | 'Celine'
              | 'Chantal'
              | 'Conchita'
              | 'Cristiano'
              | 'Dora'
              | 'Emma'
              | 'Enrique'
              | 'Ewa'
              | 'Filiz'
              | 'Gabrielle'
              | 'Geraint'
              | 'Giorgio'
              | 'Gwyneth'
              | 'Hans'
              | 'Ines'
              | 'Ivy'
              | 'Jacek'
              | 'Jan'
              | 'Joanna'
              | 'Joey'
              | 'Justin'
              | 'Karl'
              | 'Kendra'
              | 'Kevin'
              | 'Kimberly'
              | 'Lea'
              | 'Liv'
              | 'Lotte'
              | 'Lucia'
              | 'Lupe'
              | 'Mads'
              | 'Maja'
              | 'Marlene'
              | 'Mathieu'
              | 'Matthew'
              | 'Maxim'
              | 'Mia'
              | 'Miguel'
              | 'Mizuki'
              | 'Naja'
              | 'Nicole'
              | 'Olivia'
              | 'Penelope'
              | 'Raveena'
              | 'Ricardo'
              | 'Ruben'
              | 'Russell'
              | 'Salli'
              | 'Seoyeon'
              | 'Takumi'
              | 'Tatyana'
              | 'Vicki'
              | 'Vitoria'
              | 'Zeina'
              | 'Zhiyu'
              | 'Aria'
              | 'Ayanda'
              | 'Arlet'
              | 'Hannah'
              | 'Arthur'
              | 'Daniel'
              | 'Liam'
              | 'Pedro'
              | 'Kajal'
              | 'Hiujin'
              | 'Laura'
              | 'Elin'
              | 'Ida'
              | 'Suvi'
              | 'Ola'
              | 'Hala'
              | 'Andres'
              | 'Sergio'
              | 'Remi'
              | 'Adriano'
              | 'Thiago'
              | 'Ruth'
              | 'Stephen'
              | 'Kazuha'
              | 'Tomoko'
              | 'Niamh'
              | 'Sofie'
              | 'Lisa'
              | 'Isabelle'
          }
        }
        output: SynthesizeSpeechOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
