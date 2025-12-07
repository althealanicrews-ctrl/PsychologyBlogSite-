export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About This Blog</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Welcome to our psychology blog, where we explore the fascinating world of human behavior, 
          mental health, and the science of the mind.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to make psychology accessible to everyone. We believe that understanding 
          how the mind works can help people lead happier, healthier, and more fulfilling lives.
        </p>
        
        <h2>What We Cover</h2>
        <p>
          We cover a wide range of psychology topics, including:
        </p>
        <ul>
          <li>Cognitive psychology and how we think</li>
          <li>Clinical psychology and mental health</li>
          <li>Social psychology and human relationships</li>
          <li>Developmental psychology across the lifespan</li>
          <li>Neuropsychology and brain science</li>
          <li>Positive psychology and well-being</li>
        </ul>
        
        <h2>Our Approach</h2>
        <p>
          We strive to present complex psychological concepts in an accessible and engaging way, 
          backed by scientific research and evidence-based practices. Our content is designed to 
          be informative, practical, and thought-provoking.
        </p>
      </div>
    </div>
  )
}

