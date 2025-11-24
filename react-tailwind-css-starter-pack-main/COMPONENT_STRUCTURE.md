## Folder Structure

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   └── AnimatedCard.jsx
│   ├── sections/            # Page section components
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── BrochureUnveilingSection.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── KeyHighlightsSection.jsx
│   │   ├── CallForPapersSection.jsx
│   │   ├── ImportantDatesTimeline.jsx
│   │   ├── CommitteeSection.jsx
│   │   ├── CommitteeList.jsx
│   │   ├── RegistrationSection.jsx
│   │   └── ContactSection.jsx
│   ├── Header.jsx           # Main header component
│   ├── Footer.jsx           # Main footer component
│   └── index.js             # Central export file
├── data/
│   └── constants.js         # All static data and configurations
├── hooks/
│   └── useOnScreen.js       # Custom hook for intersection observer
├── Assets/                  # Images and static assets
├── App.jsx                  # Main app component
└── index.js                 # App entry point
```

## Component Categories

### Common Components (`components/common/`)
Reusable UI components used throughout the application:
- **Card**: Wrapper component for card-style layouts
- **Section**: Section wrapper with consistent spacing and title
- **AnimatedCard**: Card with scroll-based animations

### Section Components (`components/sections/`)
Individual page sections:
- **HeroSection**: Main hero banner with logos and conference info
- **AboutSection**: About conference, institute, and department
- **BrochureUnveilingSection**: Conference brochure showcase
- **ImageGallery**: Scrolling image gallery with modal view
- **KeyHighlightsSection**: Conference highlights
- **CallForPapersSection**: Paper submission information and topics
- **ImportantDatesTimeline**: Timeline of important dates
- **CommitteeSection**: Committee members display
- **CommitteeList**: Reusable list for advisory committees
- **RegistrationSection**: Registration details and pricing
- **ContactSection**: Contact information and map

### Layout Components
- **Header**: Navigation bar with mobile menu
- **Footer**: Footer with links and social media

### Data Layer (`data/constants.js`)
Centralized configuration and content:
- Conference information
- Committee members
- Important dates
- Registration details
- Contact information
- Paper topics
- All image imports

### Custom Hooks (`hooks/`)
- **useOnScreen**: Intersection Observer hook for scroll animations

## Usage

Import components in App.jsx:

```javascript
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
// ... other imports

// Or use the index file:
import { Header, HeroSection, AboutSection } from './components';
```

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Common components can be used across sections
3. **Maintainability**: Easy to find and update specific components
4. **Scalability**: Simple to add new sections or features
5. **Data Management**: Centralized data in constants.js makes updates easier
6. **Code Organization**: Clear folder structure improves navigation

## Making Changes

- **Update Content**: Edit `src/data/constants.js`
- **Modify Layout**: Edit specific component files
- **Add New Section**: Create new file in `components/sections/` and import in `App.jsx`
- **Style Changes**: Modify Tailwind classes in component files or `App.css`
