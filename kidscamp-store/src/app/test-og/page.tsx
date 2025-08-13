import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Moonlight Pajamas - KidsCamp Store',
    description: 'Soft pajamas for restful sleep. Starting at $35. Organic Cotton. Made in Portugal.',
    openGraph: {
        title: 'Moonlight Pajamas',
        description: 'Soft pajamas for restful sleep.',
        url: 'http://localhost:3000/product/moonlight-pajamas',
        images: [
            {
                url: 'https://images.ctfassets.net/qm3xz8whzgyj/4drLquFv38TnX6yI3SQyIb/9b84c8b03917906f4b765dd702ab1b7b/moonlight-pajamas-1.png',
                width: 800,
                height: 600,
                alt: 'Moonlight Pajamas',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Moonlight Pajamas',
        description: 'Soft pajamas for restful sleep.',
        images: ['https://images.ctfassets.net/qm3xz8whzgyj/4drLquFv38TnX6yI3SQyIb/9b84c8b03917906f4b765dd702ab1b7b/moonlight-pajamas-1.png'],
    },
};

export default function TestOGPage() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1>OpenGraph Test Page</h1>
            <p>This page has OpenGraph metadata for testing purposes.</p>
            
            <h2>Expected Meta Tags:</h2>
            <ul>
                <li><strong>og:title:</strong> Moonlight Pajamas</li>
                <li><strong>og:description:</strong> Soft pajamas for restful sleep.</li>
                <li><strong>og:url:</strong> http://localhost:3000/product/moonlight-pajamas</li>
                <li><strong>og:image:</strong> https://images.ctfassets.net/qm3xz8whzgyj/4drLquFv38TnX6yI3SQyIb/9b84c8b03917906f4b765dd702ab1b7b/moonlight-pajamas-1.png</li>
                <li><strong>twitter:card:</strong> summary_large_image</li>
            </ul>
            
            <h2>How to Test:</h2>
            <ol>
                <li>Open browser Developer Tools (F12)</li>
                <li>Go to Elements tab</li>
                <li>Look in the &lt;head&gt; section for meta tags</li>
                <li>Search for "og:" and "twitter:" meta tags</li>
            </ol>
            
            <p><strong>Note:</strong> OpenGraph previews won't work in chat applications with localhost URLs. You need to deploy to a public URL for full testing.</p>
        </div>
    );
} 