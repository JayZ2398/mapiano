(this.webpackJsonpmapiano=this.webpackJsonpmapiano||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var r,i,o,a,u=n(1),c=n.n(u),s=n(12),h=n.n(s),l=(n(23),n(24),n(25),n(7)),m=n(3),f=n(6),d=n(5),p=n(0),y=(r=function(){function t(e){Object(m.a)(this,t),this.store=void 0,this.store=e}return Object(f.a)(t,[{key:"updateSymbol",value:function(t){var e=this;Object(p.q)((function(){return e.store.chordSymbol.set(t)}))}},{key:"updateName",value:function(t){var e=this;Object(p.q)((function(){return e.store.chordName.set(t)}))}}]),t}(),Object(d.a)(r.prototype,"updateSymbol",[p.f],Object.getOwnPropertyDescriptor(r.prototype,"updateSymbol"),r.prototype),Object(d.a)(r.prototype,"updateName",[p.f],Object.getOwnPropertyDescriptor(r.prototype,"updateName"),r.prototype),r),v=n(8),_=(n(16),i=function t(){Object(m.a)(this,t),Object(v.a)(this,"chordName",o,this),Object(v.a)(this,"chordSymbol",a,this)},o=Object(d.a)(i.prototype,"chordName",[p.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return p.o.box("")}}),a=Object(d.a)(i.prototype,"chordSymbol",[p.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return p.o.box("")}}),i),O=(n(27),n(2));function j(t){var e=t.chordName,n=t.chordSymbol,r=t.onChangeSymbol;return Object(O.jsx)("section",{className:"ChordControlsView",children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault()},children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Name: "}),e]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{children:"Chord: "}),Object(O.jsx)("input",{value:n,type:"text",name:"chordName",onChange:function(t){return r(t.currentTarget.value)}})]})]})})}var b,k,g=n(14),N=n(11),E=n.n(N),x=n(17),T=n(9);n(30);function S(t){var e=t.className,n=t.onClick,r=t.isMarked;return Object(O.jsx)("div",{className:"Key ".concat(r?"Marked":""," ").concat(e),onClick:n})}function w(t){return Object(O.jsx)(S,Object(T.a)(Object(T.a)({},t),{},{className:""}))}function I(t){return Object(O.jsx)(S,Object(T.a)({className:"BlackKey"},t))}function R(){return Object(O.jsx)("div",{className:"Ghost"})}var M,A=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],$=A.map((function(t){return{note:t,isMarked:!1}})),H=(b=function(){function t(){Object(m.a)(this,t),Object(v.a)(this,"notes",k,this)}return Object(f.a)(t,[{key:"markedIndexes",get:function(){return this.notes.map((function(t,e){return Object(T.a)(Object(T.a)({},t),{},{i:e})})).filter((function(t){return t.isMarked})).map((function(t){return t.i}))}}]),t}(),k=Object(d.a)(b.prototype,"notes",[p.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(p.o)($)}}),Object(d.a)(b.prototype,"markedIndexes",[p.g],Object.getOwnPropertyDescriptor(b.prototype,"markedIndexes"),b.prototype),b),q=(M=function(){function t(e){Object(m.a)(this,t),this.store=e}return Object(f.a)(t,[{key:"mark",value:function(t){var e=this;t.forEach((function(t){Object(p.q)((function(){return e.store.notes[t].isMarked=!0}))}))}},{key:"isValidIndex",value:function(t){return 0<=t&&t<this.store.notes.length&&t%1===0}},{key:"logMarkedKeys",value:function(){this.store.notes.forEach((function(t){t.isMarked&&console.log("".concat(t.note," is marked!"))}))}},{key:"unmarkAll",value:function(){this.store.notes.forEach((function(t){return Object(p.q)((function(){return t.isMarked=!1}))}))}},{key:"toggleKey",value:function(t){Object(p.q)((function(){return t.isMarked=!t.isMarked}))}}]),t}(),Object(d.a)(M.prototype,"unmarkAll",[p.f],Object.getOwnPropertyDescriptor(M.prototype,"unmarkAll"),M.prototype),Object(d.a)(M.prototype,"toggleKey",[p.f],Object.getOwnPropertyDescriptor(M.prototype,"toggleKey"),M.prototype),M);n(31);function F(t){var e=t.children;return Object(O.jsx)("div",{className:"WhiteKeys",children:e})}function C(t){var e=t.children;return Object(O.jsx)("div",{className:"BlackKeys",children:e})}function P(t){var e=t.children;return Object(O.jsx)("div",{className:"OctaveView",children:e})}var D,J,V,K=function(t){return t.includes("#")},U=(D=function(){function t(e){Object(m.a)(this,t),this.store=e,this.store=e}return Object(f.a)(t,[{key:"findChord",get:function(){var t=this.store.octaves[0].store.notes.filter((function(t){return t.isMarked})).map((function(t){return t.note}));return console.log(t),t.toString()}},{key:"mark",value:function(e){var n=this.store.octaves,r=e.root,i=e.intervals.map((function(e){return e+t.noteIndex(r)}));i[0]<0&&(i=i.map((function(t){return t+12}))),i.every((function(t){return Math.floor(t/12)>0}))&&(i=i.map((function(t){return t-12}))),i.forEach((function(t){return Object(p.q)((function(){return n[Math.floor(t/12)].mark([t%12])}))}))}},{key:"unmarkAll",value:function(){var t=this;Object(p.q)((function(){return t.store.octaves.forEach((function(t){return t.unmarkAll()}))}))}}],[{key:"noteIndex",value:function(t){var e=t.tone,n=t.modifier,r=n?"#"===n?1:-1:0;return A.findIndex((function(t){return t===e}))+r}}]),t}(),Object(d.a)(D.prototype,"findChord",[p.g],Object.getOwnPropertyDescriptor(D.prototype,"findChord"),D.prototype),Object(d.a)(D.prototype,"mark",[p.f],Object.getOwnPropertyDescriptor(D.prototype,"mark"),D.prototype),Object(d.a)(D.prototype,"unmarkAll",[p.f],Object.getOwnPropertyDescriptor(D.prototype,"unmarkAll"),D.prototype),D),B=(J=function(){function t(e){Object(m.a)(this,t),Object(v.a)(this,"octaves",V,this),this.octaves=Object(p.o)(e)}return Object(f.a)(t,[{key:"markedNotesIndexes",get:function(){return this.octaves.flatMap((function(t,e){return t.store.markedIndexes.map((function(t){return t+12*e}))}))}}]),t}(),V=Object(d.a)(J.prototype,"octaves",[p.o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(d.a)(J.prototype,"markedNotesIndexes",[p.g],Object.getOwnPropertyDescriptor(J.prototype,"markedNotesIndexes"),J.prototype),J);n(32);function L(t){return Object(O.jsx)("section",{className:"PianoView",children:t.children})}function X(){var t=Object(g.a)(Array(2)).map((function(t){return function(){var t=new H,e=new q(t),n=t.notes,r=e.mark,i=e.unmarkAll;return{Octave:Object(l.a)((function(){return Object(O.jsxs)(P,{children:[Object(O.jsx)(C,{children:[Object(O.jsx)(R,{},"B placeholder")].concat(n.filter((function(t,e){return K(t.note)||!K(n[(e+1)%12].note)})).map((function(t){return K(t.note)?Object(O.jsx)(I,{onClick:Object(x.a)(E.a.mark((function n(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.toggleKey(t));case 1:case"end":return n.stop()}}),n)}))),isMarked:t.isMarked},t.note):Object(O.jsx)(R,{},t.note)})))}),Object(O.jsx)(F,{children:n.filter((function(t){return!K(t.note)})).map((function(t){return Object(O.jsx)(w,{onClick:Object(x.a)(E.a.mark((function n(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.toggleKey(t));case 1:case"end":return n.stop()}}),n)}))),isMarked:t.isMarked},t.note)}))})]})})),store:t,mark:r,unmarkAll:i}}()})),e=t.map((function(t){return{store:t.store,mark:t.mark,unmarkAll:t.unmarkAll}})),n=new B(e),r=new U(n);return{Piano:Object(l.a)((function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(L,{children:t.map((function(t,e){var n=t.Octave;return Object(O.jsx)(n,{},e)}))})})})),store:n,mark:r.mark,unmarkAll:r.unmarkAll}}var z,G,W,Q,Y,Z,tt,et,nt,rt,it,ot,at,ut,ct,st,ht,lt,mt,ft,dt,pt,yt=function t(e,n){Object(m.a)(this,t),this.piano=e,this.display=n},vt=n(18),_t=n(4);!function(t){t.start="start",t.tone_1="tone_1",t.tone_2="tone_2",t.tone_3="tone_3",t.tone_4="tone_4",t.tone_5="tone_5",t.tone_6="tone_6",t.tone_7="tone_7",t.note="note",t.note_$0_1="note_$0_1",t.note_$0_2="note_$0_2",t.root="root",t.diminished="diminished",t.diminished_$0_1="diminished_$0_1",t.diminished_$0_2="diminished_$0_2",t.augmented="augmented",t.augmented_$0_1="augmented_$0_1",t.augmented_$0_2="augmented_$0_2",t.major="major",t.major_$0_1="major_$0_1",t.major_$0_2="major_$0_2",t.minor="minor",t.minor_$0_1="minor_$0_1",t.minor_$0_2="minor_$0_2",t.sus2="sus2",t.sus4="sus4",t.sus_1="sus_1",t.sus_2="sus_2",t.power="power",t.power_$0="power_$0",t.major2="major2",t.quality_1="quality_1",t.quality_2="quality_2",t.quality_3="quality_3",t.quality_4="quality_4",t.quality_5="quality_5",t.quality_6="quality_6",t.quality_7="quality_7",t.chord="chord",t.$EOF="$EOF"}(pt||(pt={}));var Ot=function(){function t(e){Object(m.a)(this,t),this.input=void 0,this.pos=void 0,this.negating=!1,this.memoSafe=!0,this.pos={overallPos:0,line:1,offset:0},this.input=e}return Object(f.a)(t,[{key:"reset",value:function(t){this.pos=t}},{key:"finished",value:function(){return this.pos.overallPos===this.input.length}},{key:"clearMemos",value:function(){}},{key:"matchstart",value:function(t,e){return this.matchchord(t+1,e)}},{key:"matchtone",value:function(t,e){var n=this;return this.choice([function(){return n.matchtone_1(t+1,e)},function(){return n.matchtone_2(t+1,e)},function(){return n.matchtone_3(t+1,e)},function(){return n.matchtone_4(t+1,e)},function(){return n.matchtone_5(t+1,e)},function(){return n.matchtone_6(t+1,e)},function(){return n.matchtone_7(t+1,e)}])}},{key:"matchtone_1",value:function(t,e){return this.regexAccept(String.raw(z||(z=Object(_t.a)(["(?:C)"]))),t+1,e)}},{key:"matchtone_2",value:function(t,e){return this.regexAccept(String.raw(G||(G=Object(_t.a)(["(?:D)"]))),t+1,e)}},{key:"matchtone_3",value:function(t,e){return this.regexAccept(String.raw(W||(W=Object(_t.a)(["(?:E)"]))),t+1,e)}},{key:"matchtone_4",value:function(t,e){return this.regexAccept(String.raw(Q||(Q=Object(_t.a)(["(?:F)"]))),t+1,e)}},{key:"matchtone_5",value:function(t,e){return this.regexAccept(String.raw(Y||(Y=Object(_t.a)(["(?:G)"]))),t+1,e)}},{key:"matchtone_6",value:function(t,e){return this.regexAccept(String.raw(Z||(Z=Object(_t.a)(["(?:A)"]))),t+1,e)}},{key:"matchtone_7",value:function(t,e){return this.regexAccept(String.raw(tt||(tt=Object(_t.a)(["(?:B)"]))),t+1,e)}},{key:"matchnote",value:function(t,e){var n=this;return this.run(t,(function(){var r,i,o=null;return null!==(r=n.matchtone(t+1,e))&&(i=n.matchnote_$0(t+1,e),1)&&(o={kind:pt.note,tone:r,modifier:i}),o}))}},{key:"matchnote_$0",value:function(t,e){var n=this;return this.choice([function(){return n.matchnote_$0_1(t+1,e)},function(){return n.matchnote_$0_2(t+1,e)}])}},{key:"matchnote_$0_1",value:function(t,e){return this.regexAccept(String.raw(et||(et=Object(_t.a)(["(?:#)"]))),t+1,e)}},{key:"matchnote_$0_2",value:function(t,e){return this.regexAccept(String.raw(nt||(nt=Object(_t.a)(["(?:b)"]))),t+1,e)}},{key:"matchroot",value:function(t,e){return this.matchnote(t+1,e)}},{key:"matchdiminished",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.matchdiminished_$0(t+1,e))&&(i={kind:pt.diminished,diminished:r}),i}))}},{key:"matchdiminished_$0",value:function(t,e){var n=this;return this.choice([function(){return n.matchdiminished_$0_1(t+1,e)},function(){return n.matchdiminished_$0_2(t+1,e)}])}},{key:"matchdiminished_$0_1",value:function(t,e){return this.regexAccept(String.raw(rt||(rt=Object(_t.a)(["(?:o)"]))),t+1,e)}},{key:"matchdiminished_$0_2",value:function(t,e){return this.regexAccept(String.raw(it||(it=Object(_t.a)(["(?:dim)"]))),t+1,e)}},{key:"matchaugmented",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.matchaugmented_$0(t+1,e))&&(i={kind:pt.augmented,augmented:r}),i}))}},{key:"matchaugmented_$0",value:function(t,e){var n=this;return this.choice([function(){return n.matchaugmented_$0_1(t+1,e)},function(){return n.matchaugmented_$0_2(t+1,e)}])}},{key:"matchaugmented_$0_1",value:function(t,e){return this.regexAccept(String.raw(ot||(ot=Object(_t.a)(["(?:+)"],["(?:\\+)"]))),t+1,e)}},{key:"matchaugmented_$0_2",value:function(t,e){return this.regexAccept(String.raw(at||(at=Object(_t.a)(["(?:aug)"]))),t+1,e)}},{key:"matchmajor",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.matchmajor_$0(t+1,e))&&(i={kind:pt.major,major:r}),i}))}},{key:"matchmajor_$0",value:function(t,e){var n=this;return this.choice([function(){return n.matchmajor_$0_1(t+1,e)},function(){return n.matchmajor_$0_2(t+1,e)}])}},{key:"matchmajor_$0_1",value:function(t,e){return this.regexAccept(String.raw(ut||(ut=Object(_t.a)(["(?:maj)"]))),t+1,e)}},{key:"matchmajor_$0_2",value:function(t,e){return this.regexAccept(String.raw(ct||(ct=Object(_t.a)(["(?:M)"]))),t+1,e)}},{key:"matchminor",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.matchminor_$0(t+1,e))&&(i={kind:pt.minor,minor:r}),i}))}},{key:"matchminor_$0",value:function(t,e){var n=this;return this.choice([function(){return n.matchminor_$0_1(t+1,e)},function(){return n.matchminor_$0_2(t+1,e)}])}},{key:"matchminor_$0_1",value:function(t,e){return this.regexAccept(String.raw(st||(st=Object(_t.a)(["(?:min)"]))),t+1,e)}},{key:"matchminor_$0_2",value:function(t,e){return this.regexAccept(String.raw(ht||(ht=Object(_t.a)(["(?:m)"]))),t+1,e)}},{key:"matchsus2",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.regexAccept(String.raw(lt||(lt=Object(_t.a)(["(?:sus2)"]))),t+1,e))&&(i={kind:pt.sus2,sus2:r}),i}))}},{key:"matchsus4",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.regexAccept(String.raw(mt||(mt=Object(_t.a)(["(?:sus4)"]))),t+1,e))&&(i={kind:pt.sus4,sus4:r}),i}))}},{key:"matchsus",value:function(t,e){var n=this;return this.choice([function(){return n.matchsus_1(t+1,e)},function(){return n.matchsus_2(t+1,e)}])}},{key:"matchsus_1",value:function(t,e){return this.matchsus2(t+1,e)}},{key:"matchsus_2",value:function(t,e){return this.matchsus4(t+1,e)}},{key:"matchpower",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.matchpower_$0(t+1,e))&&(i={kind:pt.power,power:r}),i}))}},{key:"matchpower_$0",value:function(t,e){return this.regexAccept(String.raw(ft||(ft=Object(_t.a)(["(?:5)"]))),t+1,e)}},{key:"matchmajor2",value:function(t,e){var n=this;return this.run(t,(function(){var r,i=null;return null!==(r=n.regexAccept(String.raw(dt||(dt=Object(_t.a)(["(?:)"]))),t+1,e))&&(i={kind:pt.major2,major:r}),i}))}},{key:"matchquality",value:function(t,e){var n=this;return this.choice([function(){return n.matchquality_1(t+1,e)},function(){return n.matchquality_2(t+1,e)},function(){return n.matchquality_3(t+1,e)},function(){return n.matchquality_4(t+1,e)},function(){return n.matchquality_5(t+1,e)},function(){return n.matchquality_6(t+1,e)},function(){return n.matchquality_7(t+1,e)}])}},{key:"matchquality_1",value:function(t,e){return this.matchdiminished(t+1,e)}},{key:"matchquality_2",value:function(t,e){return this.matchaugmented(t+1,e)}},{key:"matchquality_3",value:function(t,e){return this.matchmajor(t+1,e)}},{key:"matchquality_4",value:function(t,e){return this.matchminor(t+1,e)}},{key:"matchquality_5",value:function(t,e){return this.matchsus(t+1,e)}},{key:"matchquality_6",value:function(t,e){return this.matchpower(t+1,e)}},{key:"matchquality_7",value:function(t,e){return this.matchmajor2(t+1,e)}},{key:"matchchord",value:function(t,e){var n=this;return this.run(t,(function(){var r,i,o=null;return null!==(r=n.matchroot(t+1,e))&&null!==(i=n.matchquality(t+1,e))&&null!==n.match$EOF(e)&&(o={kind:pt.chord,root:r,quality:i}),o}))}},{key:"test",value:function(){var t=this.mark(),e=null!==this.matchstart(0);return this.reset(t),e}},{key:"parse",value:function(){var t=this.mark(),e=this.matchstart(0);if(e)return{ast:e,errs:[]};this.reset(t);var n=new kt;this.clearMemos(),this.matchstart(0,n);var r=n.getErr();return{ast:e,errs:null!==r?[r]:[]}}},{key:"mark",value:function(){return this.pos}},{key:"loop",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.mark(),r=[];;){var i=t();if(null===i)break;r.push(i)}return e||r.length>0?r:(this.reset(n),null)}},{key:"run",value:function(t,e){var n=this.mark(),r=e();return null!==r?r:(this.reset(n),null)}},{key:"choice",value:function(t){var e,n=Object(vt.a)(t);try{for(n.s();!(e=n.n()).done;){var r=(0,e.value)();if(null!==r)return r}}catch(i){n.e(i)}finally{n.f()}return null}},{key:"regexAccept",value:function(t,e,n){var r=this;return this.run(e,(function(){var e=new RegExp(t,"y"),i=r.mark();e.lastIndex=i.overallPos;var o=r.tryConsume(e);return n&&n.record(i,o,{kind:"RegexMatch",literal:t.substring(3,t.length-1),negated:r.negating}),o}))}},{key:"tryConsume",value:function(t){var e=t.exec(this.input);if(e){for(var n=0,r=-1,i=0;i<e[0].length;++i)"\n"===e[0][i]&&(++n,r=i);return this.pos={overallPos:t.lastIndex,line:this.pos.line+n,offset:-1===r?this.pos.offset+e[0].length:e[0].length-r-1},e[0]}return null}},{key:"noConsume",value:function(t){var e=this.mark(),n=t();return this.reset(e),n}},{key:"negate",value:function(t){var e=this.mark(),n=this.negating;this.negating=!n;var r=t();return this.negating=n,this.reset(e),null===r||null}},{key:"memoise",value:function(t,e){var n=this.mark(),r=e.get(n.overallPos);if(this.memoSafe&&void 0!==r)return this.reset(r[1]),r[0];var i=t();return this.memoSafe&&e.set(n.overallPos,[i,this.mark()]),i}},{key:"match$EOF",value:function(t){var e=this.finished()?{kind:pt.$EOF}:null;return t&&t.record(this.mark(),e,{kind:"EOF",negated:this.negating}),e}}]),t}();var jt,bt=function(){function t(e,n){Object(m.a)(this,t),this.pos=void 0,this.expmatches=void 0,this.pos=e,this.expmatches=Object(g.a)(n)}return Object(f.a)(t,[{key:"toString",value:function(){return"Syntax Error at line ".concat(this.pos.line,":").concat(this.pos.offset,". Expected one of ").concat(this.expmatches.map((function(t){return"EOF"===t.kind?" EOF":" ".concat(t.negated?"not ":"","'").concat(t.literal,"'")})))}}]),t}(),kt=function(){function t(){Object(m.a)(this,t),this.mxpos={overallPos:-1,line:-1,offset:-1},this.regexset=new Set,this.pmatches=[]}return Object(f.a)(t,[{key:"record",value:function(t,e,n){null===e!==n.negated&&(t.overallPos>this.mxpos.overallPos&&(this.mxpos=t,this.pmatches=[],this.regexset.clear()),this.mxpos.overallPos===t.overallPos&&("RegexMatch"===n.kind?(this.regexset.has(n.literal)||this.pmatches.push(n),this.regexset.add(n.literal)):this.pmatches.push(n)))}},{key:"getErr",value:function(){return-1!==this.mxpos.overallPos?new bt(this.mxpos,this.pmatches):null}}]),t}();function gt(t,e,n){return t.map((function(t){return t===e?n:t}))}function Nt(t,e){return t.find((function(t){return t===e}))||(t.push(e),t.sort()),t}!function(t){t[t.UNISON=0]="UNISON",t[t.MINOR_SECOND=1]="MINOR_SECOND",t[t.MAJOR_SECOND=2]="MAJOR_SECOND",t[t.MINOR_THIRD=3]="MINOR_THIRD",t[t.MAJOR_THIRD=4]="MAJOR_THIRD",t[t.PERFECT_FOURTH=5]="PERFECT_FOURTH",t[t.TRITONE=6]="TRITONE",t[t.PERFECT_FIFTH=7]="PERFECT_FIFTH",t[t.MINOR_SIXTH=8]="MINOR_SIXTH",t[t.MAJOR_SIXTH=9]="MAJOR_SIXTH",t[t.DIMINISHED_SEVENTH=9]="DIMINISHED_SEVENTH",t[t.MINOR_SEVENTH=10]="MINOR_SEVENTH",t[t.MAJOR_SEVENTH=11]="MAJOR_SEVENTH",t[t.OCTAVE=12]="OCTAVE",t[t.MINOR_NINTH=13]="MINOR_NINTH",t[t.MAJOR_NINTH=14]="MAJOR_NINTH",t[t.MINOR_TENTH=15]="MINOR_TENTH",t[t.MAJOR_TENTH=16]="MAJOR_TENTH",t[t.PERFECT_ELEVENTH=17]="PERFECT_ELEVENTH",t[t.COMPOUND_TRITONE=18]="COMPOUND_TRITONE",t[t.PERFECT_TWELFTH=19]="PERFECT_TWELFTH",t[t.MINOR_THIRTEENTH=21]="MINOR_THIRTEENTH",t[t.MAJOR_THIRTEENTH=21]="MAJOR_THIRTEENTH"}(jt||(jt={}));var Et,xt=[jt.UNISON,jt.MAJOR_THIRD,jt.PERFECT_FIFTH],Tt=function(t){return t},St=function(t){return gt(t,jt.MAJOR_THIRD,jt.MINOR_THIRD)},wt=function(t){return gt(t,jt.PERFECT_FIFTH,jt.MINOR_SIXTH)},It=function(t){return gt(t,jt.PERFECT_FIFTH,jt.TRITONE)},Rt=function(t){return function(t,e){return t.filter((function(t){return!e.includes(t)}))}(t,[jt.MAJOR_THIRD,jt.MINOR_THIRD])},Mt=function(t){return Nt(Rt(t),jt.MAJOR_SECOND)},At=function(t){return Nt(Rt(t),jt.PERFECT_FOURTH)},$t=St(xt),Ht=(wt(xt),It($t),Rt(xt),function(){function t(e,n){Object(m.a)(this,t),this.tone=void 0,this.modifier=void 0,this.tone=e,this.modifier=n}return Object(f.a)(t,[{key:"symbol",get:function(){return this.modifier?this.tone+this.modifier:this.tone}}]),t}()),qt=function(){function t(e,n){Object(m.a)(this,t),this.root=void 0,this.quality=void 0,this._intervals=void 0,this.root=e,this.quality=n}return Object(f.a)(t,[{key:"name",get:function(){var t=this.root,e=this.quality;return[t.symbol,e].join(" ")}},{key:"intervals",get:function(){if(!this._intervals){var t=xt;[this.qualityModifier()].forEach((function(e){return t=e(t)})),this._intervals=t}return this._intervals}},{key:"qualityModifier",value:function(){switch(this.quality){case"Major":return Tt;case"Minor":return St;case"Augmented":return wt;case"Diminished":return It;case"Power":return Rt;case"Suspended 2nd":return Mt;case"Suspended 4th":return At;default:throw"Unhandled quality case: ".concat(this.quality)}}}]),t}();function Ft(t){if(null===t)throw Error("Parsed chord is null.");var e=t.root,n=t.quality,r=new Ht(e.tone,e.modifier),i=function(t){if(t.major||""===t.major)return"Major";if(t.minor)return"Minor";if(t.augmented)return"Augmented";if(t.diminished)return"Diminished";if(t.power)return"Power";if(t.sus2)return"Suspended 2nd";if(t.sus4)return"Suspended 4th";throw"Unhandled quality:"+JSON.stringify(t)}(n);return new qt(r,i)}function Ct(t){var e=new Ot(t).parse(),n=e.ast;e.errs;if(n)return Ft(n)}var Pt=(Et=function(){function t(e){var n=this;Object(m.a)(this,t),this.store=e,Object(p.p)((function(){return n.store.display.store.chordSymbol.get()}),(function(){var t=n.chordFromSymbol,e=n.store,r=e.piano,i=e.display;t?(i.updateName(t.name),r.unmarkAll(),r.mark(t)):(i.updateName(""),r.unmarkAll())}))}return Object(f.a)(t,[{key:"chordFromSymbol",get:function(){return Ct(this.store.display.store.chordSymbol.get())}}]),t}(),Object(d.a)(Et.prototype,"chordFromSymbol",[p.g],Object.getOwnPropertyDescriptor(Et.prototype,"chordFromSymbol"),Et.prototype),Et);var Dt=function(){var t=X(),e=t.Piano,n=t.store,r=t.mark,i=t.unmarkAll,o=function(){var t=new _,e=new y(t);return{ChordDisplay:Object(l.a)((function(){return Object(O.jsx)(j,{chordName:t.chordName.get(),chordSymbol:t.chordSymbol.get(),onChangeSymbol:function(t){return e.updateSymbol(t)}})})),store:t,updateSymbol:e.updateSymbol,updateName:e.updateName}}(),a=o.ChordDisplay,u=o.store,c=o.updateSymbol,s=o.updateName,h=new yt({store:n,mark:r,unmarkAll:i},{store:u,updateSymbol:c,updateName:s});return new Pt(h),Object(l.a)((function(){return Object(O.jsxs)("div",{className:"ChordFinderView",children:[Object(O.jsx)(a,{}),Object(O.jsx)(e,{})]})}))}();var Jt=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Dt,{})})},Vt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),o(t),a(t)}))};h.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Jt,{})}),document.getElementById("root")),Vt()}},[[33,1,2]]]);
//# sourceMappingURL=main.638aed6b.chunk.js.map