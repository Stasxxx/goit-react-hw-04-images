import ContentLoader from 'react-content-loader';

export const Loder = () => {
    return (
        <ContentLoader 
            speed={1.5}
            width={1800}
            height={860}
            viewBox="0 0 1800 860"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
          <rect x="10" y="10" rx="0" ry="0" width="360" height="260" /> 
          <rect x="390" y="10" rx="0" ry="0" width="360" height="260" />
          <rect x="770" y="10" rx="0" ry="0" width="360" height="260" />
          <rect x="1150" y="10" rx="0" ry="0" width="360" height="260" />
          <rect x="10" y="280" rx="0" ry="0" width="360" height="260" />
          <rect x="390" y="280" rx="0" ry="0" width="360" height="260" />
          <rect x="770" y="280" rx="0" ry="0" width="360" height="260" />
          <rect x="1150" y="280" rx="0" ry="0" width="360" height="260" />
        </ContentLoader>
    )
}