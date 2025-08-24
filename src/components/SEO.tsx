interface SEOProps {
	title: string;
	description: string;
	keywords?: string;
	image?: string;
	url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
	const siteTitle = "Tecnocom MZT";
	const fullTitle = `${title} | ${siteTitle}`;
	const siteUrl = "https://tecnocommzt.com";
	const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
	const defaultImage = `${siteUrl}/banner-home.webp`;

	return (
		<>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="robots" content="index, follow" />
			<link rel="canonical" href={fullUrl} />

			{/* Open Graph */}
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image || defaultImage} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={siteTitle} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image || defaultImage} />
		</>
	);
};

export default SEO;