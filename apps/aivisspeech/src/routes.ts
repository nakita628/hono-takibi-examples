import { createRoute, z } from '@hono/zod-openapi'

const MoraSchema = z
  .object({
    text: z
      .string()
      .openapi({
        title: 'Text',
        description:
          '子音＋母音に対応する文字。\nVOICEVOX ENGINE と異なり、感嘆符・句読点などの記号もモーラに含まれる。\n記号モーラの場合、`text` には記号がそのまま、`vowel` には "pau" が設定される。',
      }),
    consonant: z
      .string()
      .exactOptional()
      .openapi({ title: 'Consonant', description: '子音の音素。' }),
    consonant_length: z
      .number()
      .exactOptional()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description:
          '子音の音長。\nAivisSpeech Engine の実装上算出できないため、ダミー値として常に 0.0 が返される。',
      }),
    vowel: z.string().openapi({ title: 'Vowel', description: '母音の音素。' }),
    vowel_length: z
      .number()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description:
          '母音の音長。\nAivisSpeech Engine の実装上算出できないため、ダミー値として常に 0.0 が返される。',
      }),
    pitch: z
      .number()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description:
          '音高。\nAivisSpeech Engine の実装上算出できないため、ダミー値として常に 0.0 が返される。',
      }),
  })
  .openapi({
    required: ['text', 'vowel', 'vowel_length', 'pitch'],
    title: 'Mora',
    description: 'モーラ（子音＋母音）ごとの情報。',
  })
  .openapi('Mora')

const AccentPhraseSchema = z
  .object({
    moras: z.array(MoraSchema).openapi({ title: 'Moras', description: 'モーラのリスト' }),
    accent: z.int().openapi({ title: 'Accent', description: 'アクセント箇所' }),
    pause_mora: MoraSchema.exactOptional().openapi({
      title: 'Pause Mora',
      description: 'アクセント句の末尾につく無音モーラ。null の場合は無音モーラを付けない。',
    }),
    is_interrogative: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Is Interrogative', description: '疑問系かどうか' }),
  })
  .openapi({
    required: ['moras', 'accent'],
    title: 'AccentPhrase',
    description: 'アクセント句ごとの情報。',
  })
  .openapi('AccentPhrase')

const ModelArchitectureSchema = z
  .enum(['Style-Bert-VITS2', 'Style-Bert-VITS2 (JP-Extra)'])
  .openapi({ title: 'ModelArchitecture' })
  .openapi('ModelArchitecture')

const ModelFormatSchema = z
  .enum(['Safetensors', 'ONNX'])
  .openapi({ title: 'ModelFormat' })
  .openapi('ModelFormat')

const AivmManifestVoiceSampleSchema = z
  .object({
    audio: z
      .string()
      .regex(/^data:audio\/(wav|mp4);base64,[A-Za-z0-9+\/=]+$/)
      .openapi({ title: 'Audio' }),
    transcript: z.string().min(1).openapi({ title: 'Transcript' }),
  })
  .openapi({
    required: ['audio', 'transcript'],
    title: 'AivmManifestVoiceSample',
    description: 'AIVM マニフェストのボイスサンプル情報',
  })
  .openapi('AivmManifestVoiceSample')

const AivmManifestSpeakerStyleSchema = z
  .object({
    name: z.string().min(1).max(20).openapi({ title: 'Name' }),
    icon: z
      .union([
        z.string().regex(/^data:image\/(jpeg|png);base64,[A-Za-z0-9+\/=]+$/),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Icon' }),
    local_id: z.int().min(0).max(31).openapi({ title: 'Local Id' }),
    voice_samples: z
      .array(AivmManifestVoiceSampleSchema)
      .default([])
      .exactOptional()
      .openapi({ title: 'Voice Samples' }),
  })
  .openapi({
    required: ['name', 'local_id'],
    title: 'AivmManifestSpeakerStyle',
    description: 'AIVM マニフェストの話者スタイル情報',
  })
  .openapi('AivmManifestSpeakerStyle')

const AivmManifestSpeakerSchema = z
  .object({
    name: z.string().min(1).max(80).openapi({ title: 'Name' }),
    icon: z
      .string()
      .regex(/^data:image\/(jpeg|png);base64,[A-Za-z0-9+\/=]+$/)
      .openapi({ title: 'Icon' }),
    supported_languages: z
      .array(
        z
          .string()
          .regex(
            /^[a-z]{2,3}(?:-[A-Z]{4})?(?:-(?:[A-Z]{2}|\d{3}))?(?:-(?:[A-Za-z0-9]{5,8}|\d[A-Za-z0-9]{3}))*(?:-[A-Za-z](?:-[A-Za-z0-9]{2,8})+)*(?:-x(?:-[A-Za-z0-9]{1,8})+)?$/,
          ),
      )
      .openapi({ title: 'Supported Languages' }),
    uuid: z.uuid().openapi({ title: 'Uuid' }),
    local_id: z.int().min(0).openapi({ title: 'Local Id' }),
    styles: z.array(AivmManifestSpeakerStyleSchema).openapi({ title: 'Styles' }),
  })
  .openapi({
    required: ['name', 'icon', 'supported_languages', 'uuid', 'local_id', 'styles'],
    title: 'AivmManifestSpeaker',
    description: 'AIVM マニフェストの話者情報',
  })
  .openapi('AivmManifestSpeaker')

const AivmManifestSchema = z
  .object({
    manifest_version: z.literal('1.0').openapi({ title: 'Manifest Version' }),
    name: z.string().min(1).max(80).openapi({ title: 'Name' }),
    description: z.string().max(140).default('').exactOptional().openapi({ title: 'Description' }),
    creators: z
      .array(z.string().min(1).max(255))
      .default([])
      .exactOptional()
      .openapi({ title: 'Creators' }),
    license: z
      .union([z.string().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'License' }),
    model_architecture: ModelArchitectureSchema,
    model_format: ModelFormatSchema,
    training_epochs: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Training Epochs' }),
    training_steps: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Training Steps' }),
    uuid: z.uuid().openapi({ title: 'Uuid' }),
    version: z
      .string()
      .regex(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
      )
      .openapi({ title: 'Version' }),
    speakers: z.array(AivmManifestSpeakerSchema).openapi({ title: 'Speakers' }),
  })
  .openapi({
    required: [
      'manifest_version',
      'name',
      'model_architecture',
      'model_format',
      'uuid',
      'version',
      'speakers',
    ],
    title: 'AivmManifest',
    description: 'AIVM マニフェストのスキーマ',
  })
  .openapi('AivmManifest')

const SpeakerStyleSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'スタイル名' }),
    id: z.int().openapi({ title: 'Id', description: 'スタイル ID' }),
    type: z
      .enum(['talk', 'singing_teacher', 'frame_decode', 'sing'])
      .default('talk')
      .exactOptional()
      .openapi({
        title: 'Type',
        description:
          'スタイルの種類。talk: 音声合成クエリの作成と音声合成が可能。singing_teacher: 歌唱音声合成用のクエリの作成が可能。frame_decode: 歌唱音声合成が可能。sing: 歌唱音声合成用のクエリの作成と歌唱音声合成が可能。',
      }),
  })
  .openapi({
    required: ['name', 'id'],
    title: 'SpeakerStyle',
    description: 'キャラクターのスタイル情報',
  })
  .openapi('SpeakerStyle')

const SpeakerSupportedFeaturesSchema = z
  .object({
    permitted_synthesis_morphing: z
      .enum(['ALL', 'SELF_ONLY', 'NOTHING'])
      .default('ALL')
      .exactOptional()
      .openapi({
        title: 'Permitted Synthesis Morphing',
        description:
          "モーフィング機能への対応。'ALL' は「全て許可」、'SELF_ONLY' は「同じキャラクター内でのみ許可」、'NOTHING' は「全て禁止」",
      }),
  })
  .openapi({
    title: 'SpeakerSupportedFeatures',
    description: 'キャラクターの対応機能の情報',
    required: [],
  })
  .openapi('SpeakerSupportedFeatures')

const SpeakerSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: '名前' }),
    speaker_uuid: z.string().openapi({ title: 'Speaker Uuid', description: 'キャラクターの UUID' }),
    styles: z.array(SpeakerStyleSchema).openapi({ title: 'Styles', description: 'スタイルの一覧' }),
    version: z.string().openapi({ title: 'Version', description: 'キャラクターのバージョン' }),
    supported_features: SpeakerSupportedFeaturesSchema.exactOptional().openapi({
      description: 'キャラクターの対応機能',
    }),
  })
  .openapi({
    required: ['name', 'speaker_uuid', 'styles', 'version'],
    title: 'Speaker',
    description: 'キャラクター情報',
  })
  .openapi('Speaker')

const StyleInfoSchema = z
  .object({
    id: z.int().openapi({ title: 'Id', description: 'スタイル ID' }),
    icon: z
      .string()
      .openapi({
        title: 'Icon',
        description: 'このスタイルのアイコンを base64 エンコードしたもの、あるいは URL',
      }),
    portrait: z
      .string()
      .exactOptional()
      .openapi({
        title: 'Portrait',
        description:
          'AivisSpeech Engine では常に None を返す (「このスタイルの立ち絵画像を base64 エンコードしたもの」ではない点で VOICEVOX ENGINE と異なる)',
      }),
    voice_samples: z
      .array(z.string())
      .openapi({
        title: 'Voice Samples',
        description: 'ボイスサンプルの音声データを base64 エンコードしたもの、あるいは URL',
      }),
    voice_sample_transcripts: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        title: 'Voice Sample Transcripts',
        description:
          'ボイスサンプルの書き起こしテキスト (voice_samples の配列インデックスと対応し、存在しない場合は空文字列)',
      }),
  })
  .openapi({
    required: ['id', 'icon', 'voice_samples'],
    title: 'StyleInfo',
    description: 'スタイルの追加情報',
  })
  .openapi('StyleInfo')

const SpeakerInfoSchema = z
  .object({
    policy: z.string().openapi({ title: 'Policy', description: 'policy.md' }),
    portrait: z
      .string()
      .openapi({
        title: 'Portrait',
        description:
          'アイコンを base64 エンコードしたもの、あるいは URL (「立ち絵画像を base64 エンコードしたもの」ではない点で VOICEVOX ENGINE と異なる)',
      }),
    style_infos: z
      .array(StyleInfoSchema)
      .openapi({ title: 'Style Infos', description: 'スタイルの追加情報' }),
  })
  .openapi({
    required: ['policy', 'portrait', 'style_infos'],
    title: 'SpeakerInfo',
    description: 'キャラクターの追加情報',
  })
  .openapi('SpeakerInfo')

const LibrarySpeakerSchema = z
  .object({ speaker: SpeakerSchema, speaker_info: SpeakerInfoSchema })
  .openapi({
    required: ['speaker', 'speaker_info'],
    title: 'LibrarySpeaker',
    description: '音声ライブラリに含まれるキャラクターの情報。',
  })
  .openapi('LibrarySpeaker')

const AivmInfoSchema = z
  .object({
    is_loaded: z
      .boolean()
      .openapi({ title: 'Is Loaded', description: 'この音声合成モデルがロードされているかどうか' }),
    is_update_available: z
      .boolean()
      .openapi({
        title: 'Is Update Available',
        description: 'この音声合成モデルの新しいバージョンが AivisHub で公開されているかどうか',
      }),
    is_private_model: z
      .boolean()
      .openapi({
        title: 'Is Private Model',
        description:
          'AivisHub で公開されておらず、ユーザーがローカルからインストールしたモデルの場合は True (ネットワークエラーなどで AivisHub から情報を取得できなかった場合も True を返す)',
      }),
    is_default_model: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Is Default Model',
        description: 'AivisHub がデフォルトインストール対象として指定した音声合成モデルかどうか',
      }),
    latest_version: z
      .string()
      .openapi({
        title: 'Latest Version',
        description:
          'この音声合成モデルの AivisHub で公開されている最新バージョン (AivisHub で公開されていない場合は AIVM マニフェスト記載のバージョン)',
      }),
    file_path: z
      .string()
      .openapi({ title: 'File Path', description: 'AIVMX ファイルのインストール先パス' }),
    file_size: z
      .int()
      .openapi({
        title: 'File Size',
        description: 'AIVMX ファイルのインストールサイズ (バイト単位)',
      }),
    manifest: AivmManifestSchema.openapi({ description: 'AIVM マニフェスト' }),
    speakers: z
      .array(LibrarySpeakerSchema)
      .openapi({ title: 'Speakers', description: '話者情報のリスト (VOICEVOX ENGINE 互換)' }),
  })
  .openapi({
    required: [
      'is_loaded',
      'is_update_available',
      'is_private_model',
      'latest_version',
      'file_path',
      'file_size',
      'manifest',
      'speakers',
    ],
    title: 'AivmInfo',
    description:
      'AIVM (Aivis Voice Model) 仕様に準拠した音声合成モデルのメタデータ情報。\n\nAIVM マニフェストには、音声合成モデルに関連する全てのメタデータが含まれる。\nspeakers フィールド内の話者情報は、VOICEVOX ENGINE との API 互換性のために、\nAIVM マニフェストを基に Speaker / SpeakerStyle / SpeakerInfo / StyleInfo モデルに変換したもの。',
  })
  .openapi('AivmInfo')

const AudioQuerySchema = z
  .object({
    accent_phrases: z
      .array(AccentPhraseSchema)
      .openapi({ title: 'Accent Phrases', description: 'アクセント句のリスト。' }),
    speedScale: z
      .number()
      .openapi({
        title: 'Speedscale',
        description:
          '全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\n2.0 で 2 倍速、0.5 で 0.5 倍速になる。',
      }),
    intonationScale: z
      .number()
      .openapi({
        title: 'Intonationscale',
        description:
          '選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\n「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。\n数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。\n例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。\n一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。\n正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。\n全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。',
      }),
    tempoDynamicsScale: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        title: 'Tempodynamicsscale',
        description:
          '話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\nAivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。\n数値が大きいほどより早口で生っぽい抑揚がついた声になる。\nVOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。',
      }),
    pitchScale: z
      .number()
      .openapi({
        title: 'Pitchscale',
        description:
          '全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。\n数値が大きいほど高い声になる。\nVOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。',
      }),
    volumeScale: z
      .number()
      .openapi({
        title: 'Volumescale',
        description:
          '全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\n数値が大きいほど大きな声になる。',
      }),
    prePhonemeLength: z
      .number()
      .openapi({ title: 'Prephonemelength', description: '音声の前の無音時間 (秒)。' }),
    postPhonemeLength: z
      .number()
      .openapi({ title: 'Postphonemelength', description: '音声の後の無音時間 (秒)。' }),
    pauseLength: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description: '句読点などの無音時間。null のときは無視される。デフォルト値は null 。',
      }),
    pauseLengthScale: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description: '句読点などの無音時間（倍率）。デフォルト値は 1 。',
      }),
    outputSamplingRate: z
      .int()
      .openapi({
        title: 'Outputsamplingrate',
        description: '音声データの出力サンプリングレート。',
      }),
    outputStereo: z
      .boolean()
      .openapi({ title: 'Outputstereo', description: '音声データをステレオ出力するか否か。' }),
    kana: z
      .string()
      .exactOptional()
      .openapi({
        title: 'Kana',
        description:
          '読み上げるテキストを指定する。「読みの AquesTalk 風記法テキスト」ではない点で VOICEVOX ENGINE と仕様が異なる。\nVOICEVOX ENGINE では AquesTalk 風記法テキストが入る読み取り専用フィールドだが (音声合成時には無視される) 、AivisSpeech Engine では音声合成時に漢字や記号が含まれた通常の読み上げテキストも必要なため、苦肉の策で読み上げテキスト指定用のフィールドとして転用した。\nVOICEVOX ENGINE との互換性のため None や空文字列が指定された場合も動作するが、その場合はアクセント句から自動生成されたひらがな文字列が読み上げテキストになるため、不自然なイントネーションになってしまう。\n可能な限り kana に通常の読み上げテキストを指定した上で音声合成 API に渡すことを推奨する。',
      }),
  })
  .openapi({
    required: [
      'accent_phrases',
      'speedScale',
      'intonationScale',
      'pitchScale',
      'volumeScale',
      'prePhonemeLength',
      'postPhonemeLength',
      'outputSamplingRate',
      'outputStereo',
    ],
    title: 'AudioQuery',
    description: '音声合成用のクエリ。',
  })
  .openapi('AudioQuery')

const BodyInstallModelAivmModelsInstallPostSchema = z
  .object({
    file: z
      .union([z.file().openapi({ type: 'string', format: 'binary' }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'File', description: 'AIVMX ファイル (`.aivmx`)' }),
    url: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Url', description: 'AIVMX ファイルの URL' }),
  })
  .openapi({ title: 'Body_install_model_aivm_models_install_post', required: [] })
  .openapi('BodyInstallModelAivmModelsInstallPost')

const CorsPolicyModeSchema = z
  .enum(['all', 'localapps'])
  .openapi({ title: 'CorsPolicyMode', description: 'CORS の許可モード。' })
  .openapi('CorsPolicyMode')

const BodySettingPostSettingPostSchema = z
  .object({
    cors_policy_mode: CorsPolicyModeSchema,
    allow_origin: z.string().exactOptional().openapi({ title: 'Allow Origin' }),
  })
  .openapi({ required: ['cors_policy_mode'], title: 'Body_setting_post_setting_post' })
  .openapi('BodySettingPostSettingPost')

const NoteSchema = z
  .object({
    id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Id', description: 'ID' }),
    key: z.int().exactOptional().openapi({ title: 'Key', description: '音階' }),
    frame_length: z.int().openapi({ title: 'Frame Length', description: '音符のフレーム長' }),
    lyric: z.string().openapi({ title: 'Lyric', description: '音符の歌詞' }),
  })
  .openapi({ required: ['frame_length', 'lyric'], title: 'Note', description: '音符ごとの情報。' })
  .openapi('Note')

const ScoreSchema = z
  .object({ notes: z.array(NoteSchema).openapi({ title: 'Notes', description: '音符のリスト' }) })
  .openapi({ required: ['notes'], title: 'Score', description: '楽譜情報。' })
  .openapi('Score')

const FramePhonemeSchema = z
  .object({
    phoneme: z.string().openapi({ title: 'Phoneme', description: '音素' }),
    frame_length: z.int().openapi({ title: 'Frame Length', description: '音素のフレーム長' }),
    note_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note Id', description: '音符のID' }),
  })
  .openapi({
    required: ['phoneme', 'frame_length'],
    title: 'FramePhoneme',
    description: '音素の情報。',
  })
  .openapi('FramePhoneme')

const FrameAudioQuerySchema = z
  .object({
    f0: z.array(z.number()).openapi({ title: 'F0', description: 'フレームごとの基本周波数' }),
    volume: z.array(z.number()).openapi({ title: 'Volume', description: 'フレームごとの音量' }),
    phonemes: z
      .array(FramePhonemeSchema)
      .openapi({ title: 'Phonemes', description: '音素のリスト' }),
    volumeScale: z.number().openapi({ title: 'Volumescale', description: '全体の音量' }),
    outputSamplingRate: z
      .int()
      .openapi({ title: 'Outputsamplingrate', description: '音声データの出力サンプリングレート' }),
    outputStereo: z
      .boolean()
      .openapi({ title: 'Outputstereo', description: '音声データをステレオ出力するか否か' }),
  })
  .openapi({
    required: ['f0', 'volume', 'phonemes', 'volumeScale', 'outputSamplingRate', 'outputStereo'],
    title: 'FrameAudioQuery',
    description: 'フレームごとの音声合成用のクエリ。',
  })
  .openapi('FrameAudioQuery')

const BodySingFrameF0SingFrameF0PostSchema = z
  .object({ score: ScoreSchema, frame_audio_query: FrameAudioQuerySchema })
  .openapi({
    required: ['score', 'frame_audio_query'],
    title: 'Body_sing_frame_f0_sing_frame_f0_post',
  })
  .openapi('BodySingFrameF0SingFrameF0Post')

const BodySingFrameVolumeSingFrameVolumePostSchema = z
  .object({ score: ScoreSchema, frame_audio_query: FrameAudioQuerySchema })
  .openapi({
    required: ['score', 'frame_audio_query'],
    title: 'Body_sing_frame_volume_sing_frame_volume_post',
  })
  .openapi('BodySingFrameVolumeSingFrameVolumePost')

const UpdateInfoSchema = z
  .object({
    version: z.string().openapi({ title: 'Version', description: 'エンジンのバージョン名' }),
    descriptions: z
      .array(z.string())
      .openapi({ title: 'Descriptions', description: 'アップデートの詳細についての説明' }),
    contributors: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'Contributors', description: '貢献者名' }),
  })
  .openapi({
    required: ['version', 'descriptions'],
    title: 'UpdateInfo',
    description: 'エンジンのアップデート情報。',
  })
  .openapi('UpdateInfo')

const LicenseInfoSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: '依存ライブラリ名' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ title: 'Version', description: '依存ライブラリのバージョン' }),
    license: z
      .string()
      .exactOptional()
      .openapi({ title: 'License', description: '依存ライブラリのライセンス名' }),
    text: z.string().openapi({ title: 'Text', description: '依存ライブラリのライセンス本文' }),
  })
  .openapi({
    required: ['name', 'text'],
    title: 'LicenseInfo',
    description: '依存ライブラリのライセンス情報。',
  })
  .openapi('LicenseInfo')

const SupportedFeaturesSchema = z
  .object({
    adjust_mora_pitch: z
      .boolean()
      .openapi({ title: 'Adjust Mora Pitch', description: 'モーラごとの音高の調整' }),
    adjust_phoneme_length: z
      .boolean()
      .openapi({ title: 'Adjust Phoneme Length', description: '音素ごとの長さの調整' }),
    adjust_speed_scale: z
      .boolean()
      .openapi({ title: 'Adjust Speed Scale', description: '全体の話速の調整' }),
    adjust_pitch_scale: z
      .boolean()
      .openapi({ title: 'Adjust Pitch Scale', description: '全体の音高の調整' }),
    adjust_intonation_scale: z
      .boolean()
      .openapi({ title: 'Adjust Intonation Scale', description: '全体の抑揚の調整' }),
    adjust_volume_scale: z
      .boolean()
      .openapi({ title: 'Adjust Volume Scale', description: '全体の音量の調整' }),
    adjust_pause_length: z
      .boolean()
      .exactOptional()
      .openapi({ title: 'Adjust Pause Length', description: '句読点などの無音時間の調整' }),
    interrogative_upspeak: z
      .boolean()
      .openapi({ title: 'Interrogative Upspeak', description: '疑問文の自動調整' }),
    synthesis_morphing: z
      .boolean()
      .openapi({
        title: 'Synthesis Morphing',
        description: '2種類のスタイルでモーフィングした音声を合成',
      }),
    sing: z.boolean().exactOptional().openapi({ title: 'Sing', description: '歌唱音声合成' }),
    manage_library: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Manage Library',
        description: '音声ライブラリのインストール・アンインストール',
      }),
    return_resource_url: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Return Resource Url',
        description: 'キャラクター情報のリソースを URL で返送',
      }),
    apply_katakana_english: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Apply Katakana English',
        description: '未知の英単語をカタカナ読みに変換',
      }),
  })
  .openapi({
    required: [
      'adjust_mora_pitch',
      'adjust_phoneme_length',
      'adjust_speed_scale',
      'adjust_pitch_scale',
      'adjust_intonation_scale',
      'adjust_volume_scale',
      'interrogative_upspeak',
      'synthesis_morphing',
    ],
    title: 'SupportedFeatures',
    description: 'エンジンが持つ機能の一覧。',
  })
  .openapi('SupportedFeatures')

const EngineManifestSchema = z
  .object({
    manifest_version: z
      .string()
      .openapi({ title: 'Manifest Version', description: 'マニフェストのバージョン' }),
    name: z.string().openapi({ title: 'Name', description: 'エンジン名' }),
    brand_name: z.string().openapi({ title: 'Brand Name', description: 'ブランド名' }),
    uuid: z.string().openapi({ title: 'Uuid', description: 'エンジンのUUID' }),
    url: z.string().openapi({ title: 'Url', description: 'エンジンのURL' }),
    icon: z
      .string()
      .openapi({ title: 'Icon', description: 'エンジンのアイコンをBASE64エンコードしたもの' }),
    default_sampling_rate: z
      .int()
      .openapi({ title: 'Default Sampling Rate', description: 'デフォルトのサンプリング周波数' }),
    frame_rate: z
      .number()
      .openapi({ title: 'Frame Rate', description: 'エンジンのフレームレート' }),
    terms_of_service: z
      .string()
      .openapi({ title: 'Terms Of Service', description: 'エンジンの利用規約' }),
    update_infos: z
      .array(UpdateInfoSchema)
      .openapi({ title: 'Update Infos', description: 'エンジンのアップデート情報' }),
    dependency_licenses: z
      .array(LicenseInfoSchema)
      .openapi({ title: 'Dependency Licenses', description: '依存関係のライセンス情報' }),
    supported_vvlib_manifest_version: z
      .string()
      .exactOptional()
      .openapi({
        title: 'Supported Vvlib Manifest Version',
        description: 'エンジンが対応するvvlibのバージョン',
      }),
    supported_features: SupportedFeaturesSchema.openapi({ description: 'エンジンが持つ機能' }),
  })
  .openapi({
    required: [
      'manifest_version',
      'name',
      'brand_name',
      'uuid',
      'url',
      'icon',
      'default_sampling_rate',
      'frame_rate',
      'terms_of_service',
      'update_infos',
      'dependency_licenses',
      'supported_features',
    ],
    title: 'EngineManifest',
    description: 'エンジン自体に関する情報。',
  })
  .openapi('EngineManifest')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
    input: z.any().exactOptional().openapi({ title: 'Input' }),
    ctx: z.object({}).exactOptional().openapi({ title: 'Context' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const MorphableTargetInfoSchema = z
  .object({
    is_morphable: z
      .boolean()
      .openapi({
        title: 'Is Morphable',
        description: '指定したキャラクターに対してモーフィングの可否',
      }),
  })
  .openapi({
    required: ['is_morphable'],
    title: 'MorphableTargetInfo',
    description: 'モーフィング相手としての情報。',
  })
  .openapi('MorphableTargetInfo')

const ParseKanaBadRequestSchema = z
  .object({
    text: z.string().openapi({ title: 'Text', description: 'エラーメッセージ' }),
    error_name: z
      .string()
      .openapi({
        title: 'Error Name',
        description:
          'エラー名\n\n|name|description|\n|---|---|\n| UNKNOWN_TEXT | 判別できない読み仮名があります: {text} |\n| ACCENT_TOP | 句頭にアクセントは置けません: {text} |\n| ACCENT_TWICE | 1つのアクセント句に二つ以上のアクセントは置けません: {text} |\n| ACCENT_NOTFOUND | アクセントを指定していないアクセント句があります: {text} |\n| EMPTY_PHRASE | {position}番目のアクセント句が空白です |\n| INTERROGATION_MARK_NOT_AT_END | アクセント句末以外に「？」は置けません: {text} |\n| INFINITE_LOOP | 処理時に無限ループになってしまいました...バグ報告をお願いします。 |',
      }),
    error_args: z
      .record(z.string(), z.string())
      .openapi({ title: 'Error Args', description: 'エラーを起こした箇所' }),
  })
  .openapi({
    required: ['text', 'error_name', 'error_args'],
    title: 'ParseKanaBadRequest',
    description: '読み仮名のパースに失敗した。',
  })
  .openapi('ParseKanaBadRequest')

const PresetSchema = z
  .object({
    id: z.int().openapi({ title: 'Id', description: 'プリセット ID 。' }),
    name: z.string().openapi({ title: 'Name', description: 'プリセット名。' }),
    speaker_uuid: z
      .string()
      .openapi({ title: 'Speaker Uuid', description: 'キャラクターの UUID 。' }),
    style_id: z.int().openapi({ title: 'Style Id', description: 'スタイル ID 。' }),
    speedScale: z
      .number()
      .openapi({
        title: 'Speedscale',
        description:
          '全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\n2.0 で 2 倍速、0.5 で 0.5 倍速になる。',
      }),
    intonationScale: z
      .number()
      .openapi({
        title: 'Intonationscale',
        description:
          '選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\n「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。\n数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。\n例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。\n一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。\n正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。\n全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。',
      }),
    tempoDynamicsScale: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        title: 'Tempodynamicsscale',
        description:
          '話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\nAivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。\n数値が大きいほどより早口で生っぽい抑揚がついた声になる。\nVOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。',
      }),
    pitchScale: z
      .number()
      .openapi({
        title: 'Pitchscale',
        description:
          '全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。\n数値が大きいほど高い声になる。\nVOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。',
      }),
    volumeScale: z
      .number()
      .openapi({
        title: 'Volumescale',
        description:
          '全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。\n数値が大きいほど大きな声になる。',
      }),
    prePhonemeLength: z
      .number()
      .openapi({ title: 'Prephonemelength', description: '音声の前の無音時間 (秒)。' }),
    postPhonemeLength: z
      .number()
      .openapi({ title: 'Postphonemelength', description: '音声の後の無音時間 (秒)。' }),
    pauseLength: z
      .number()
      .exactOptional()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description: '句読点などの無音時間。null のときは無視される。デフォルト値は null 。',
      }),
    pauseLengthScale: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        title: 'AivisSpeech Engine ではサポートされていないフィールドです (常に無視されます)',
        description: '句読点などの無音時間（倍率）。デフォルト値は 1 。',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'speaker_uuid',
      'style_id',
      'speedScale',
      'intonationScale',
      'pitchScale',
      'volumeScale',
      'prePhonemeLength',
      'postPhonemeLength',
    ],
    title: 'Preset',
    description: 'プリセット情報。',
  })
  .openapi('Preset')

const SupportedDevicesInfoSchema = z
  .object({
    cpu: z.boolean().openapi({ title: 'Cpu', description: 'CPU に対応しているか' }),
    cuda: z.boolean().openapi({ title: 'Cuda', description: 'CUDA (NVIDIA GPU) に対応しているか' }),
    dml: z
      .boolean()
      .openapi({
        title: 'Dml',
        description: 'DirectML (NVIDIA GPU/Radeon GPU 等) に対応しているか',
      }),
  })
  .openapi({
    required: ['cpu', 'cuda', 'dml'],
    title: 'SupportedDevicesInfo',
    description: '対応しているデバイスの情報。',
  })
  .openapi('SupportedDevicesInfo')

const WordTypesSchema = z
  .enum([
    'PROPER_NOUN',
    'LOCATION_NAME',
    'ORGANIZATION_NAME',
    'PERSON_NAME',
    'PERSON_FAMILY_NAME',
    'PERSON_GIVEN_NAME',
    'COMMON_NOUN',
    'VERB',
    'ADJECTIVE',
    'SUFFIX',
  ])
  .openapi({ title: 'WordTypes', description: '品詞を表す列挙型。' })
  .openapi('WordTypes')

const UserDictWordSchema = z
  .object({
    surface: z.string().openapi({ title: 'Surface', description: '表層形' }),
    priority: z.int().min(0).max(10).openapi({ title: 'Priority', description: '優先度' }),
    context_id: z
      .int()
      .default(1348)
      .exactOptional()
      .openapi({ title: 'Context Id', description: '文脈 ID' }),
    part_of_speech: z.string().openapi({ title: 'Part Of Speech', description: '品詞' }),
    part_of_speech_detail_1: z
      .string()
      .openapi({ title: 'Part Of Speech Detail 1', description: '品詞細分類1' }),
    part_of_speech_detail_2: z
      .string()
      .openapi({ title: 'Part Of Speech Detail 2', description: '品詞細分類2' }),
    part_of_speech_detail_3: z
      .string()
      .openapi({ title: 'Part Of Speech Detail 3', description: '品詞細分類3' }),
    word_type: WordTypesSchema.default('PROPER_NOUN')
      .exactOptional()
      .openapi({ description: '品詞種別' }),
    inflectional_type: z.string().openapi({ title: 'Inflectional Type', description: '活用型' }),
    inflectional_form: z.string().openapi({ title: 'Inflectional Form', description: '活用形' }),
    stem: z.array(z.string()).openapi({ title: 'Stem', description: '原形' }),
    yomi: z.array(z.string()).openapi({ title: 'Yomi', description: '読み' }),
    pronunciation: z.array(z.string()).openapi({ title: 'Pronunciation', description: '発音' }),
    accent_type: z.array(z.int()).openapi({ title: 'Accent Type', description: 'アクセント型' }),
    mora_count: z
      .array(z.int())
      .default([])
      .exactOptional()
      .openapi({ title: 'Mora Count', description: 'モーラ数' }),
    accent_associative_rule: z
      .string()
      .openapi({ title: 'Accent Associative Rule', description: 'アクセント結合規則' }),
  })
  .openapi({
    required: [
      'surface',
      'priority',
      'part_of_speech',
      'part_of_speech_detail_1',
      'part_of_speech_detail_2',
      'part_of_speech_detail_3',
      'inflectional_type',
      'inflectional_form',
      'stem',
      'yomi',
      'pronunciation',
      'accent_type',
      'accent_associative_rule',
    ],
    title: 'UserDictWord',
    description:
      'ユーザー辞書のビルドに必要な単語情報。\n\n単語登録・変更リクエストで受け取った単語情報のバリデーションと JSON への保存に用いる。',
  })
  .openapi('UserDictWord')

const UserDictWordForCompatSchema = z
  .object({
    surface: z.string().openapi({ title: 'Surface', description: '表層形' }),
    priority: z.int().min(0).max(10).openapi({ title: 'Priority', description: '優先度' }),
    context_id: z
      .int()
      .default(1348)
      .exactOptional()
      .openapi({ title: 'Context Id', description: '文脈 ID' }),
    part_of_speech: z.string().openapi({ title: 'Part Of Speech', description: '品詞' }),
    part_of_speech_detail_1: z
      .string()
      .openapi({ title: 'Part Of Speech Detail 1', description: '品詞細分類1' }),
    part_of_speech_detail_2: z
      .string()
      .openapi({ title: 'Part Of Speech Detail 2', description: '品詞細分類2' }),
    part_of_speech_detail_3: z
      .string()
      .openapi({ title: 'Part Of Speech Detail 3', description: '品詞細分類3' }),
    inflectional_type: z.string().openapi({ title: 'Inflectional Type', description: '活用型' }),
    inflectional_form: z.string().openapi({ title: 'Inflectional Form', description: '活用形' }),
    stem: z.string().openapi({ title: 'Stem', description: '原形' }),
    yomi: z.string().openapi({ title: 'Yomi', description: '読み' }),
    pronunciation: z.string().openapi({ title: 'Pronunciation', description: '発音' }),
    accent_type: z.int().openapi({ title: 'Accent Type', description: 'アクセント型' }),
    mora_count: z.int().exactOptional().openapi({ title: 'Mora Count', description: 'モーラ数' }),
    accent_associative_rule: z
      .string()
      .openapi({ title: 'Accent Associative Rule', description: 'アクセント結合規則' }),
  })
  .openapi({
    required: [
      'surface',
      'priority',
      'part_of_speech',
      'part_of_speech_detail_1',
      'part_of_speech_detail_2',
      'part_of_speech_detail_3',
      'inflectional_type',
      'inflectional_form',
      'stem',
      'yomi',
      'pronunciation',
      'accent_type',
      'accent_associative_rule',
    ],
    title: 'UserDictWordForCompat',
    description:
      'UserDictWord とほとんど同じだが、ユーザー辞書関連 API の後方互換性を保つための互換レイヤー。\n\nstem, yomi, pronunciation, accent_type, mora_count はリストではなく文字列/数値で表す。\n既に UserDictWord にバリデーションが実装されていることから、重複するバリデーション定義は削られている。',
  })
  .openapi('UserDictWordForCompat')

export const postAudioQueryRoute = createRoute({
  method: 'post',
  path: '/audio_query',
  tags: ['クエリ作成'],
  summary: '音声合成用のクエリを作成する',
  description:
    '音声合成用のクエリの初期値を得ます。ここで得られたクエリはそのまま音声合成に利用できます。<br>\n各値の意味は `Schemas` を参照してください。\n\nAivisSpeech Engine では英単語は常に自動的に自然なカタカナ読みに変換されて読み上げられる仕様のため、enable_katakana_english は指定不要です（常に無視されます）。',
  operationId: 'audio_query',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Text' },
          },
          title: 'Text',
        }),
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      enable_katakana_english: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_katakana_english',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Katakana English',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Katakana English',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AudioQuerySchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postAudioQueryFromPresetRoute = createRoute({
  method: 'post',
  path: '/audio_query_from_preset',
  tags: ['クエリ作成'],
  summary: '音声合成用のクエリをプリセットを用いて作成する',
  description:
    '音声合成用のクエリの初期値を得ます。ここで得られたクエリはそのまま音声合成に利用できます。<br>\n各値の意味は `Schemas` を参照してください。\n\nAivisSpeech Engine では英単語は常に自動的に自然なカタカナ読みに変換されて読み上げられる仕様のため、enable_katakana_english は指定不要です（常に無視されます）。',
  operationId: 'audio_query_from_preset',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Text' },
          },
          title: 'Text',
        }),
      preset_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'preset_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Preset Id' },
          },
          title: 'Preset Id',
        }),
      enable_katakana_english: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_katakana_english',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Katakana English',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Katakana English',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AudioQuerySchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postAccentPhrasesRoute = createRoute({
  method: 'post',
  path: '/accent_phrases',
  tags: ['クエリ編集'],
  summary: 'テキストからアクセント句を得る',
  description:
    "テキストからアクセント句を得ます。<br>\nis_kanaが`true`のとき、テキストは次の AquesTalk 風記法で解釈されます。デフォルトは`false`です。\n* 全てのカナはカタカナで記述される\n* アクセント句は`/`または`、`で区切る。`、`で区切った場合に限り無音区間が挿入される。\n* カナの手前に`_`を入れるとそのカナは無声化される\n* アクセント位置を`'`で指定する。全てのアクセント句にはアクセント位置を1つ指定する必要がある。\n* アクセント句末に`？`(全角)を入れることにより疑問文の発音ができる。\n\nAivisSpeech Engine では英単語は常に自動的に自然なカタカナ読みに変換されて読み上げられる仕様のため、enable_katakana_english は指定不要です（常に無視されます）。",
  operationId: 'accent_phrases',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Text' },
          },
          title: 'Text',
        }),
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      is_kana: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'is_kana',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Is Kana' },
          },
          title: 'Is Kana',
        }),
      enable_katakana_english: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_katakana_english',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Katakana English',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Katakana English',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AccentPhraseSchema)
            .openapi({ title: 'Response Accent Phrases Accent Phrases Post' }),
        },
      },
    },
    400: {
      description: '読み仮名のパースに失敗',
      content: { 'application/json': { schema: ParseKanaBadRequestSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postMoraDataRoute = createRoute({
  method: 'post',
  path: '/mora_data',
  tags: ['クエリ編集'],
  summary: 'アクセント句から音高・音素長を得る (AivisSpeech Engine では常にダミーの値が返されます)',
  operationId: 'mora_data',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(AccentPhraseSchema).openapi({ title: 'Accent Phrases' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AccentPhraseSchema)
            .openapi({ title: 'Response Mora Data Mora Data Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postMoraLengthRoute = createRoute({
  method: 'post',
  path: '/mora_length',
  tags: ['クエリ編集'],
  summary: 'アクセント句から音素長を得る (AivisSpeech Engine では常にダミーの値が返されます)',
  operationId: 'mora_length',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(AccentPhraseSchema).openapi({ title: 'Accent Phrases' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AccentPhraseSchema)
            .openapi({ title: 'Response Mora Length Mora Length Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postMoraPitchRoute = createRoute({
  method: 'post',
  path: '/mora_pitch',
  tags: ['クエリ編集'],
  summary: 'アクセント句から音高を得る (AivisSpeech Engine では常にダミーの値が返されます)',
  operationId: 'mora_pitch',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(AccentPhraseSchema).openapi({ title: 'Accent Phrases' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AccentPhraseSchema)
            .openapi({ title: 'Response Mora Pitch Mora Pitch Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postSynthesisRoute = createRoute({
  method: 'post',
  path: '/synthesis',
  tags: ['音声合成'],
  summary: '音声合成する',
  description: '指定されたスタイル ID に紐づく音声合成モデルを用いて音声合成を行います。',
  operationId: 'synthesis',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      enable_interrogative_upspeak: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_interrogative_upspeak',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Interrogative Upspeak',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Interrogative Upspeak',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: { content: { 'application/json': { schema: AudioQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'audio/wav': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postCancellableSynthesisRoute = createRoute({
  method: 'post',
  path: '/cancellable_synthesis',
  tags: ['音声合成'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'cancellable_synthesis',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      enable_interrogative_upspeak: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_interrogative_upspeak',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Interrogative Upspeak',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Interrogative Upspeak',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: { content: { 'application/json': { schema: AudioQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'audio/wav': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postMultiSynthesisRoute = createRoute({
  method: 'post',
  path: '/multi_synthesis',
  tags: ['音声合成'],
  summary: '複数まとめて音声合成する',
  operationId: 'multi_synthesis',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      enable_interrogative_upspeak: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_interrogative_upspeak',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Interrogative Upspeak',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Interrogative Upspeak',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.array(AudioQuerySchema).openapi({ title: 'Queries' }) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    422: { description: 'クエリが空またはサンプリングレートが不一致' },
  },
})

export const postSingFrameAudioQueryRoute = createRoute({
  method: 'post',
  path: '/sing_frame_audio_query',
  tags: ['クエリ作成'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'sing_frame_audio_query',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: { content: { 'application/json': { schema: ScoreSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FrameAudioQuerySchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postSingFrameF0Route = createRoute({
  method: 'post',
  path: '/sing_frame_f0',
  tags: ['クエリ編集'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'sing_frame_f0',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BodySingFrameF0SingFrameF0PostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.number())
            .openapi({ title: 'Response Sing Frame F0 Sing Frame F0 Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postSingFrameVolumeRoute = createRoute({
  method: 'post',
  path: '/sing_frame_volume',
  tags: ['クエリ編集'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'sing_frame_volume',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BodySingFrameVolumeSingFrameVolumePostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.number())
            .openapi({ title: 'Response Sing Frame Volume Sing Frame Volume Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postFrameSynthesisRoute = createRoute({
  method: 'post',
  path: '/frame_synthesis',
  tags: ['音声合成'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'frame_synthesis',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: { content: { 'application/json': { schema: FrameAudioQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'audio/wav': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postConnectWavesRoute = createRoute({
  method: 'post',
  path: '/connect_waves',
  tags: ['音声合成'],
  summary: 'Base64 エンコードされた複数の WAV データを一つに結合する',
  description: 'Base64 エンコードされた WAV データを一つに結合し、WAV ファイルで返します。',
  operationId: 'connect_waves',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(z.string()).openapi({ title: 'Waves' }) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'audio/wav': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postValidateKanaRoute = createRoute({
  method: 'post',
  path: '/validate_kana',
  tags: ['クエリ作成'],
  summary: 'テキストが AquesTalk 風記法に従っているか判定する',
  description:
    'テキストが AquesTalk 風記法に従っているかどうかを判定します。従っていない場合はエラーが返ります。',
  operationId: 'validate_kana',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: true,
            schema: { type: 'string', description: '判定する対象の文字列', title: 'Text' },
            description: '判定する対象の文字列',
          },
          description: '判定する対象の文字列',
          title: 'Text',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.boolean().openapi({ title: 'Response Validate Kana Validate Kana Post' }),
        },
      },
    },
    400: {
      description: 'テキストが不正です',
      content: { 'application/json': { schema: ParseKanaBadRequestSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postInitializeSpeakerRoute = createRoute({
  method: 'post',
  path: '/initialize_speaker',
  tags: ['音声合成モデル管理'],
  summary: '指定されたスタイル ID に紐づく音声合成モデルをロードする',
  description:
    '指定されたスタイル ID に紐づく音声合成モデルをロードします。<br>\n実行しなくても他の API は利用できますが、音声合成の初回実行時に時間がかかることがあります。',
  operationId: 'initialize_speaker',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      skip_reinit: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip_reinit',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description: '既にロード済みの音声合成モデルの再ロードをスキップするかどうか',
              default: false,
              title: 'Skip Reinit',
            },
            description: '既にロード済みの音声合成モデルの再ロードをスキップするかどうか',
          },
          description: '既にロード済みの音声合成モデルの再ロードをスキップするかどうか',
          title: 'Skip Reinit',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getIsInitializedSpeakerRoute = createRoute({
  method: 'get',
  path: '/is_initialized_speaker',
  tags: ['音声合成モデル管理'],
  summary: '指定されたスタイル ID に紐づく音声合成モデルがロードされているかを確認する',
  description: '指定されたスタイル ID に紐づく音声合成モデルがロードされているかどうかを返します。',
  operationId: 'is_initialized_speaker',
  request: {
    query: z.object({
      speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Speaker' },
          },
          title: 'Speaker',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .boolean()
            .openapi({ title: 'Response Is Initialized Speaker Is Initialized Speaker Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSupportedDevicesRoute = createRoute({
  method: 'get',
  path: '/supported_devices',
  tags: ['音声合成モデル管理'],
  summary: 'このビルドでサポートされている、音声合成モデルの推論デバイスを取得する',
  description:
    'このビルドでサポートされている、音声合成モデルの推論デバイスを返します。<br>\n通常、下記の値が返されます。true であっても実際に推論デバイスが利用可能とは限りません。\n- Windows: `{"cpu": true, "cuda": false, "dml": true}`\n- macOS: `{"cpu": true, "cuda": false, "dml": false}`\n- Linux: `{"cpu": true, "cuda": true, "dml": false}`',
  operationId: 'supported_devices',
  request: {
    query: z.object({
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SupportedDevicesInfoSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postMorphableTargetsRoute = createRoute({
  method: 'post',
  path: '/morphable_targets',
  tags: ['音声合成'],
  summary: '指定したスタイルに対してエンジン内のキャラクターがモーフィングが可能か判定する',
  description:
    '指定されたベーススタイルに対してエンジン内の各キャラクターがモーフィング機能を利用可能か返します。<br>\nモーフィングの許可/禁止は `/speakers `の `speaker.supported_features.synthesis_morphing` に記載されています。<br>\nプロパティが存在しない場合は、モーフィングが許可されているとみなします。<br>\n返り値のスタイル ID は string 型なので注意。<br>\nAivisSpeech Engine では話者ごとに発声タイミングが異なる関係で実装不可能なため (動作こそするが聴くに耐えない) 、\n全ての話者でモーフィングが禁止されています。',
  operationId: 'morphable_targets',
  request: {
    query: z.object({
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.array(z.int()).openapi({ title: 'Base Style Ids' }) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.record(z.string(), MorphableTargetInfoSchema))
            .openapi({ title: 'Response Morphable Targets Morphable Targets Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postSynthesisMorphingRoute = createRoute({
  method: 'post',
  path: '/synthesis_morphing',
  tags: ['音声合成'],
  summary: '2種類のスタイルでモーフィングした音声を合成する',
  description:
    '指定された 2 種類のスタイルで音声を合成、指定した割合でモーフィングした音声を得ます。<br>\nモーフィングの割合は `morph_rate` で指定でき、0.0 でベースのスタイル、1.0 でターゲットのスタイルに近づきます。<br>\nAivisSpeech Engine では話者ごとに発声タイミングが異なる関係で実装不可能なため (動作こそするが聴くに耐えない) 、\n常に 400 Bad Request を返します。',
  operationId: '_synthesis_morphing',
  request: {
    query: z.object({
      base_speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'base_speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Base Speaker' },
          },
          title: 'Base Speaker',
        }),
      target_speaker: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'target_speaker',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Target Speaker' },
          },
          title: 'Target Speaker',
        }),
      morph_rate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(1),
        )
        .openapi({
          param: {
            name: 'morph_rate',
            in: 'query',
            required: true,
            schema: { type: 'number', maximum: 1, minimum: 0, title: 'Morph Rate' },
          },
          title: 'Morph Rate',
        }),
      enable_interrogative_upspeak: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_interrogative_upspeak',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              default: true,
              title: 'Enable Interrogative Upspeak',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Enable Interrogative Upspeak',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
    body: { content: { 'application/json': { schema: AudioQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'audio/wav': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSpeakersRoute = createRoute({
  method: 'get',
  path: '/speakers',
  tags: ['話者情報'],
  summary: '話者情報の一覧を取得する',
  description: '話者情報の一覧を返します。',
  operationId: 'speakers',
  request: {
    query: z.object({
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.array(SpeakerSchema).openapi({ title: 'Response Speakers Speakers Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSpeakerInfoRoute = createRoute({
  method: 'get',
  path: '/speaker_info',
  tags: ['話者情報'],
  summary: 'UUID で指定された話者の情報を取得する',
  description:
    'UUID で指定された話者の情報を返します。\n画像や音声は resource_format で指定した形式で返されます。',
  operationId: 'speaker_info',
  request: {
    query: z.object({
      speaker_uuid: z
        .string()
        .openapi({
          param: {
            name: 'speaker_uuid',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Speaker Uuid' },
          },
          title: 'Speaker Uuid',
        }),
      resource_format: z
        .enum(['base64', 'url'])
        .default('base64')
        .exactOptional()
        .openapi({
          param: {
            name: 'resource_format',
            in: 'query',
            required: false,
            schema: {
              enum: ['base64', 'url'],
              type: 'string',
              default: 'base64',
              title: 'Resource Format',
            },
          },
          title: 'Resource Format',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SpeakerInfoSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSingersRoute = createRoute({
  method: 'get',
  path: '/singers',
  tags: ['話者情報'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'singers',
  request: {
    query: z.object({
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.array(SpeakerSchema).openapi({ title: 'Response Singers Singers Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSingerInfoRoute = createRoute({
  method: 'get',
  path: '/singer_info',
  tags: ['話者情報'],
  summary:
    'AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)',
  operationId: 'singer_info',
  request: {
    query: z.object({
      speaker_uuid: z
        .string()
        .openapi({
          param: {
            name: 'speaker_uuid',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Speaker Uuid' },
          },
          title: 'Speaker Uuid',
        }),
      resource_format: z
        .enum(['base64', 'url'])
        .default('base64')
        .exactOptional()
        .openapi({
          param: {
            name: 'resource_format',
            in: 'query',
            required: false,
            schema: {
              enum: ['base64', 'url'],
              type: 'string',
              default: 'base64',
              title: 'Resource Format',
            },
          },
          title: 'Resource Format',
        }),
      core_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'core_version',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description:
                'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
              title: 'Core Version',
            },
            description:
              'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          },
          description:
            'AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。',
          title: 'Core Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SpeakerInfoSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getAivmModelsRoute = createRoute({
  method: 'get',
  path: '/aivm_models',
  tags: ['音声合成モデル管理'],
  summary: 'インストール済みのすべての音声合成モデルの情報を取得する',
  description: 'インストール済みのすべての音声合成モデルの情報を返します。',
  operationId: 'get_installed_aivm_infos',
  responses: {
    200: {
      description: 'インストール済みのすべての音声合成モデルの情報',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), AivmInfoSchema)
            .openapi({ title: 'Response Get Installed Aivm Infos Aivm Models Get' }),
        },
      },
    },
  },
})

export const postAivmModelsInstallRoute = createRoute({
  method: 'post',
  path: '/aivm_models/install',
  tags: ['音声合成モデル管理'],
  summary: '音声合成モデルをインストールする',
  description:
    '音声合成モデルをインストールします。<br>\nファイルからインストールする場合は `file` を指定してください。<br>\nURL からインストールする場合は `url` を指定してください。',
  operationId: 'install_model',
  request: {
    body: {
      content: { 'multipart/form-data': { schema: BodyInstallModelAivmModelsInstallPostSchema } },
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getAivmModelsAivmModelUuidRoute = createRoute({
  method: 'get',
  path: '/aivm_models/{aivm_model_uuid}',
  tags: ['音声合成モデル管理'],
  summary: '指定された音声合成モデルの情報を取得する',
  description: '指定された音声合成モデルの情報を取得します。',
  operationId: 'get_aivm_info',
  request: {
    params: z.object({
      aivm_model_uuid: z
        .string()
        .openapi({
          param: {
            name: 'aivm_model_uuid',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
              title: 'Aivm Model Uuid',
            },
            description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          },
          description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          title: 'Aivm Model Uuid',
        }),
    }),
  },
  responses: {
    200: {
      description: '指定された音声合成モデルの情報',
      content: { 'application/json': { schema: AivmInfoSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postAivmModelsAivmModelUuidLoadRoute = createRoute({
  method: 'post',
  path: '/aivm_models/{aivm_model_uuid}/load',
  tags: ['音声合成モデル管理'],
  summary: '指定された音声合成モデルをロードする',
  description:
    '指定された音声合成モデルをロードします。すでにロード済みの場合は何も行われません。<br>\n実行しなくても他の API は利用できますが、音声合成の初回実行時に時間がかかることがあります。',
  operationId: 'load_model',
  request: {
    params: z.object({
      aivm_model_uuid: z
        .string()
        .openapi({
          param: {
            name: 'aivm_model_uuid',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
              title: 'Aivm Model Uuid',
            },
            description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          },
          description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          title: 'Aivm Model Uuid',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postAivmModelsAivmModelUuidUnloadRoute = createRoute({
  method: 'post',
  path: '/aivm_models/{aivm_model_uuid}/unload',
  tags: ['音声合成モデル管理'],
  summary: '指定された音声合成モデルをアンロードする',
  description: '指定された音声合成モデルをアンロードします。',
  operationId: 'unload_model',
  request: {
    params: z.object({
      aivm_model_uuid: z
        .string()
        .openapi({
          param: {
            name: 'aivm_model_uuid',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
              title: 'Aivm Model Uuid',
            },
            description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          },
          description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          title: 'Aivm Model Uuid',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postAivmModelsAivmModelUuidUpdateRoute = createRoute({
  method: 'post',
  path: '/aivm_models/{aivm_model_uuid}/update',
  tags: ['音声合成モデル管理'],
  summary: '指定された音声合成モデルを更新する',
  description:
    'AivisHub から指定された音声合成モデルの一番新しいバージョンをダウンロードし、\nインストール済みの音声合成モデルへ上書き更新します。',
  operationId: 'update_model',
  request: {
    params: z.object({
      aivm_model_uuid: z
        .string()
        .openapi({
          param: {
            name: 'aivm_model_uuid',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
              title: 'Aivm Model Uuid',
            },
            description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          },
          description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          title: 'Aivm Model Uuid',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteAivmModelsAivmModelUuidUninstallRoute = createRoute({
  method: 'delete',
  path: '/aivm_models/{aivm_model_uuid}/uninstall',
  tags: ['音声合成モデル管理'],
  summary: '指定された音声合成モデルをアンインストールする',
  description: '指定された音声合成モデルをアンインストールします。',
  operationId: 'uninstall_model',
  request: {
    params: z.object({
      aivm_model_uuid: z
        .string()
        .openapi({
          param: {
            name: 'aivm_model_uuid',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
              title: 'Aivm Model Uuid',
            },
            description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          },
          description: 'AIVM マニフェスト記載の音声合成モデルの UUID',
          title: 'Aivm Model Uuid',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getPresetsRoute = createRoute({
  method: 'get',
  path: '/presets',
  tags: ['プリセット'],
  summary: 'エンジンが保持しているプリセットの設定を取得する',
  description: 'エンジンが保持しているプリセットの設定を返します。',
  operationId: 'get_presets',
  responses: {
    200: {
      description: 'プリセットのリスト',
      content: {
        'application/json': {
          schema: z.array(PresetSchema).openapi({ title: 'Response Get Presets Presets Get' }),
        },
      },
    },
  },
})

export const postAddPresetRoute = createRoute({
  method: 'post',
  path: '/add_preset',
  tags: ['プリセット'],
  summary: '新しいプリセットを追加する',
  description: '新しいプリセットを追加します。',
  operationId: 'add_preset',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PresetSchema.openapi({
            description:
              '新しいプリセット。プリセットIDが既存のものと重複している場合は、新規のプリセットIDが採番されます。',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '追加したプリセットのプリセットID',
      content: {
        'application/json': {
          schema: z.int().openapi({ title: 'Response Add Preset Add Preset Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postUpdatePresetRoute = createRoute({
  method: 'post',
  path: '/update_preset',
  tags: ['プリセット'],
  summary: '既存のプリセットを更新する',
  description: '既存のプリセットを更新します。',
  operationId: 'update_preset',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PresetSchema.openapi({
            description: '更新するプリセット。プリセットIDが更新対象と一致している必要があります。',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '更新したプリセットのプリセットID',
      content: {
        'application/json': {
          schema: z.int().openapi({ title: 'Response Update Preset Update Preset Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postDeletePresetRoute = createRoute({
  method: 'post',
  path: '/delete_preset',
  tags: ['プリセット'],
  summary: '既存のプリセットを削除する',
  description: '既存のプリセットを削除します。',
  operationId: 'delete_preset',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              description: '削除するプリセットのプリセットID',
              title: 'Id',
            },
            description: '削除するプリセットのプリセットID',
          },
          description: '削除するプリセットのプリセットID',
          title: 'Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getUserDictRoute = createRoute({
  method: 'get',
  path: '/user_dict',
  tags: ['ユーザー辞書'],
  summary: 'ユーザー辞書に登録されている単語の一覧を取得する',
  description:
    'ユーザー辞書に登録されている単語の一覧を返します。<br>\n複合語アクセントのサポートを有効にするか次第で、返されるデータ型が変化します。<br>\nデフォルトでは、従来の API と互換性のある `UserDictWordForCompat` を返します。<br>\n`?enable_compound_accent=true` を指定すると、AivisSpeech Engine 1.1.0 以降で利用可能な `UserDictWord` を返します。',
  operationId: 'get_user_dict_words',
  request: {
    query: z.object({
      enable_compound_accent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'enable_compound_accent',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                '複数のアクセント句を持つ単語の扱いを指定する<br>false の場合は API 互換性のため、最初のアクセント句の情報のみを返します。<br>未指定時は `false` が設定されます。',
              default: false,
              title: 'Enable Compound Accent',
            },
            description:
              '複数のアクセント句を持つ単語の扱いを指定する<br>false の場合は API 互換性のため、最初のアクセント句の情報のみを返します。<br>未指定時は `false` が設定されます。',
          },
          description:
            '複数のアクセント句を持つ単語の扱いを指定する<br>false の場合は API 互換性のため、最初のアクセント句の情報のみを返します。<br>未指定時は `false` が設定されます。',
          title: 'Enable Compound Accent',
        }),
    }),
  },
  responses: {
    200: {
      description: 'ユーザー辞書に登録されている単語情報のリスト',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.union([UserDictWordSchema, UserDictWordForCompatSchema]))
            .openapi({ title: 'Response Get User Dict Words User Dict Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postUserDictWordRoute = createRoute({
  method: 'post',
  path: '/user_dict_word',
  tags: ['ユーザー辞書'],
  summary: 'ユーザー辞書に単語を追加する',
  description:
    'ユーザー辞書に単語を追加します。<br>\n複合語を辞書に追加するには、`?surface=新田&surface=真剣佑&pronunciation=あらた&pronunciation=まっけんゆう&accent_type=1&accent_type=3` のように、`surface`, `pronunciation`, `accent_type` を同じ長さのリストで指定します。',
  operationId: 'add_user_dict_word',
  request: {
    query: z.object({
      surface: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'surface',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description: '単語の表層形',
              title: 'Surface',
            },
            description: '単語の表層形',
          },
          description: '単語の表層形',
          title: 'Surface',
        }),
      pronunciation: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'pronunciation',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description: '単語の発音（カタカナ）',
              title: 'Pronunciation',
            },
            description: '単語の発音（カタカナ）',
          },
          description: '単語の発音（カタカナ）',
          title: 'Pronunciation',
        }),
      accent_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'accent_type',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: { type: 'integer' },
              description:
                '東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。',
              title: 'Accent Type',
            },
            description:
              '東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。',
          },
          description:
            '東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。',
          title: 'Accent Type',
        }),
      word_type: z
        .enum([
          'PROPER_NOUN',
          'LOCATION_NAME',
          'ORGANIZATION_NAME',
          'PERSON_NAME',
          'PERSON_FAMILY_NAME',
          'PERSON_GIVEN_NAME',
          'COMMON_NOUN',
          'VERB',
          'ADJECTIVE',
          'SUFFIX',
        ])
        .default('PROPER_NOUN')
        .exactOptional()
        .openapi({
          param: {
            name: 'word_type',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'PROPER_NOUN',
                'LOCATION_NAME',
                'ORGANIZATION_NAME',
                'PERSON_NAME',
                'PERSON_FAMILY_NAME',
                'PERSON_GIVEN_NAME',
                'COMMON_NOUN',
                'VERB',
                'ADJECTIVE',
                'SUFFIX',
              ],
              title: 'WordTypes',
              description:
                '単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。',
              default: 'PROPER_NOUN',
            },
            description:
              '単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。',
          },
          title: 'WordTypes',
          description:
            '単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。',
        }),
      priority: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'priority',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 10,
              minimum: 0,
              description:
                '単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。',
              default: 5,
              title: 'Priority',
            },
            description:
              '単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。',
          },
          description:
            '単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。',
          title: 'Priority',
        }),
    }),
  },
  responses: {
    200: {
      description: '追加した単語の UUID',
      content: {
        'application/json': {
          schema: z.string().openapi({ title: 'Response Add User Dict Word User Dict Word Post' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putUserDictWordWordUuidRoute = createRoute({
  method: 'put',
  path: '/user_dict_word/{word_uuid}',
  tags: ['ユーザー辞書'],
  summary: 'ユーザー辞書に登録されている単語を更新する',
  description:
    'ユーザー辞書に登録されている単語を更新します。<br>\n複合語を辞書に追加するには、`?surface=新田&surface=真剣佑&pronunciation=あらた&pronunciation=まっけんゆう&accent_type=1&accent_type=3` のように、`surface`, `pronunciation`, `accent_type` を同じ長さのリストで指定します。',
  operationId: 'update_user_dict_word',
  request: {
    params: z.object({
      word_uuid: z
        .string()
        .openapi({
          param: {
            name: 'word_uuid',
            in: 'path',
            required: true,
            schema: { type: 'string', description: '更新する単語の UUID', title: 'Word Uuid' },
            description: '更新する単語の UUID',
          },
          description: '更新する単語の UUID',
          title: 'Word Uuid',
        }),
    }),
    query: z.object({
      surface: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'surface',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description: '単語の表層形',
              title: 'Surface',
            },
            description: '単語の表層形',
          },
          description: '単語の表層形',
          title: 'Surface',
        }),
      pronunciation: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'pronunciation',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description: '単語の発音（カタカナ）',
              title: 'Pronunciation',
            },
            description: '単語の発音（カタカナ）',
          },
          description: '単語の発音（カタカナ）',
          title: 'Pronunciation',
        }),
      accent_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'accent_type',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: { type: 'integer' },
              description:
                '東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。',
              title: 'Accent Type',
            },
            description:
              '東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。',
          },
          description:
            '東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。',
          title: 'Accent Type',
        }),
      word_type: z
        .enum([
          'PROPER_NOUN',
          'LOCATION_NAME',
          'ORGANIZATION_NAME',
          'PERSON_NAME',
          'PERSON_FAMILY_NAME',
          'PERSON_GIVEN_NAME',
          'COMMON_NOUN',
          'VERB',
          'ADJECTIVE',
          'SUFFIX',
        ])
        .default('PROPER_NOUN')
        .exactOptional()
        .openapi({
          param: {
            name: 'word_type',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'PROPER_NOUN',
                'LOCATION_NAME',
                'ORGANIZATION_NAME',
                'PERSON_NAME',
                'PERSON_FAMILY_NAME',
                'PERSON_GIVEN_NAME',
                'COMMON_NOUN',
                'VERB',
                'ADJECTIVE',
                'SUFFIX',
              ],
              title: 'WordTypes',
              description:
                '単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。',
              default: 'PROPER_NOUN',
            },
            description:
              '単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。',
          },
          title: 'WordTypes',
          description:
            '単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。',
        }),
      priority: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'priority',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 10,
              minimum: 0,
              description:
                '単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。',
              default: 5,
              title: 'Priority',
            },
            description:
              '単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。',
          },
          description:
            '単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。',
          title: 'Priority',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteUserDictWordWordUuidRoute = createRoute({
  method: 'delete',
  path: '/user_dict_word/{word_uuid}',
  tags: ['ユーザー辞書'],
  summary: 'ユーザー辞書に登録されている単語を削除する',
  description: 'ユーザー辞書に登録されている単語を削除します。',
  operationId: 'delete_user_dict_word',
  request: {
    params: z.object({
      word_uuid: z
        .string()
        .openapi({
          param: {
            name: 'word_uuid',
            in: 'path',
            required: true,
            schema: { type: 'string', description: '削除する単語の UUID', title: 'Word Uuid' },
            description: '削除する単語の UUID',
          },
          description: '削除する単語の UUID',
          title: 'Word Uuid',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postImportUserDictRoute = createRoute({
  method: 'post',
  path: '/import_user_dict',
  tags: ['ユーザー辞書'],
  summary: 'ユーザー辞書をインポートする',
  description:
    '指定されたユーザー辞書をインポートします。<br>\n従来の API と互換性のある `UserDictWordForCompat` と、AivisSpeech Engine 1.1.0 以降で利用可能な `UserDictWord` の両方の型に対応しています。<br>\n`?override=true` を指定すると、UUID が重複したエントリはインポートしたデータで上書きされます。',
  operationId: 'import_user_dict_words',
  request: {
    query: z.object({
      override: z
        .stringbool()
        .openapi({
          param: {
            name: 'override',
            in: 'query',
            required: true,
            schema: {
              type: 'boolean',
              description: '重複したエントリがあった場合、上書きするかどうか',
              title: 'Override',
            },
            description: '重複したエントリがあった場合、上書きするかどうか',
          },
          description: '重複したエントリがあった場合、上書きするかどうか',
          title: 'Override',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.union([UserDictWordSchema, UserDictWordForCompatSchema]))
            .openapi({
              description: 'インポートするユーザー辞書のデータ',
              title: 'Import Dict Data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSettingRoute = createRoute({
  method: 'get',
  path: '/setting',
  tags: ['設定'],
  summary: 'Setting Get',
  description: '設定ページを返します。',
  operationId: 'setting_get',
  responses: { 200: { description: 'Successful Response' } },
})

export const postSettingRoute = createRoute({
  method: 'post',
  path: '/setting',
  tags: ['設定'],
  summary: 'Setting Post',
  description: '設定を更新します。',
  operationId: 'setting_post',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': { schema: BodySettingPostSettingPostSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['その他'],
  summary: 'Version',
  description: 'エンジンのバージョンを取得します。',
  operationId: 'version',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.string().openapi({ title: 'Response Version Version Get' }),
        },
      },
    },
  },
})

export const getCoreVersionsRoute = createRoute({
  method: 'get',
  path: '/core_versions',
  tags: ['その他'],
  summary: 'Core Versions',
  description: '利用可能なコアのバージョン一覧を取得します。',
  operationId: 'core_versions',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.string())
            .openapi({ title: 'Response Core Versions Core Versions Get' }),
        },
      },
    },
  },
})

export const getEngineManifestRoute = createRoute({
  method: 'get',
  path: '/engine_manifest',
  tags: ['その他'],
  summary: 'Engine Manifest',
  description: 'エンジンマニフェストを取得します。',
  operationId: 'engine_manifest',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EngineManifestSchema } },
    },
  },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['その他'],
  summary: 'Get Portal Page',
  description: 'ポータルページを返します。',
  operationId: 'get_portal_page',
  responses: {
    200: { description: 'Successful Response', content: { 'text/html': { schema: z.string() } } },
  },
})
