import styles from './post-body.module.css'
import ImageModal from './ImageModal'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ImageModal />
    </div>
  )
}
